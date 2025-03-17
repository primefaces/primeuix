import { isArray, isEmpty, isNotEmpty, isObject, matchRegex, transformCSS, resolve, toTokenKey } from '@primeuix/utils/object';
import { getRule, getVariableValue, toVariables } from './sharedUtils';

export default {
    regex: {
        rules: {
            class: {
                pattern: /^\.([a-zA-Z][\w-]*)$/,
                resolve(value: string) {
                    return { type: 'class', selector: value, matched: this.pattern.test(value.trim()) };
                }
            },
            attr: {
                pattern: /^\[(.*)\]$/,
                resolve(value: string) {
                    return { type: 'attr', selector: `:root${value}`, matched: this.pattern.test(value.trim()) };
                }
            },
            media: {
                pattern: /^@media (.*)$/,
                resolve(value: string) {
                    return { type: 'media', selector: `${value}{:root{[CSS]}}`, matched: this.pattern.test(value.trim()) };
                }
            },
            system: {
                pattern: /^system$/,
                resolve(value: string) {
                    return { type: 'system', selector: '@media (prefers-color-scheme: dark){:root{[CSS]}}', matched: this.pattern.test(value.trim()) };
                }
            },
            custom: {
                resolve(value: string) {
                    return { type: 'custom', selector: value, matched: true };
                }
            }
        },
        resolve(value: any) {
            const rules = Object.keys(this.rules)
                .filter((k) => k !== 'custom')
                .map((r) => (this.rules as any)[r]);

            return [value].flat().map((v) => rules.map((r) => r.resolve(v)).find((rr) => rr.matched) ?? this.rules.custom.resolve(v));
        }
    },
    _toVariables(defaults: any, theme: any, options: any) {
        return toVariables(defaults, theme, { prefix: options?.prefix });
    },
    dtwt(defaults: any, tokens: any, theme: any = {}, tokenPath: string, fallback?: string, type?: string) {
        if (tokenPath) {
            const { variable: VARIABLE, options: OPTIONS } = defaults || {};
            const { prefix, transform } = theme?.options || OPTIONS || {};
            const regex = /{([^}]*)}/g;
            const token = matchRegex(tokenPath, regex) ? tokenPath : `{${tokenPath}}`;
            const isStrictTransform = type === 'value' || (isEmpty(type) && transform === 'strict'); // @todo - TRANSFORM: strict | lenient(default)

            return isStrictTransform ? this.getTokenValue(tokens, tokenPath, defaults) : getVariableValue(token, undefined, prefix, [VARIABLE.excludedKeyRegex], fallback);
        }

        return '';
    },
    getCommon({ name = '', theme = {}, params, set, defaults, tokens }: any) {
        const { preset, options } = theme;
        let primitive_css, primitive_tokens, semantic_css, semantic_tokens, global_css, global_tokens, style;

        // @todo - check if options is not empty
        if (isNotEmpty(preset) && options.transform !== 'strict') {
            const { primitive, semantic, extend } = preset;
            const { colorScheme, ...sRest } = semantic || {};
            const { colorScheme: eColorScheme, ...eRest } = extend || {};
            const { dark, ...csRest } = colorScheme || {};
            const { dark: eDark, ...ecsRest } = eColorScheme || {};
            const prim_var: any = isNotEmpty(primitive) ? this._toVariables(defaults, { primitive }, options) : {};
            const sRest_var: any = isNotEmpty(sRest) ? this._toVariables(defaults, { semantic: sRest }, options) : {};
            const csRest_var: any = isNotEmpty(csRest) ? this._toVariables(defaults, { light: csRest }, options) : {};
            const csDark_var: any = isNotEmpty(dark) ? this._toVariables(defaults, { dark }, options) : {};
            const eRest_var: any = isNotEmpty(eRest) ? this._toVariables(defaults, { semantic: eRest }, options) : {};
            const ecsRest_var: any = isNotEmpty(ecsRest) ? this._toVariables(defaults, { light: ecsRest }, options) : {};
            const ecsDark_var: any = isNotEmpty(eDark) ? this._toVariables(defaults, { dark: eDark }, options) : {};

            const [prim_css, prim_tokens] = [prim_var.declarations ?? '', prim_var.tokens];
            const [sRest_css, sRest_tokens] = [sRest_var.declarations ?? '', sRest_var.tokens || []];
            const [csRest_css, csRest_tokens] = [csRest_var.declarations ?? '', csRest_var.tokens || []];
            const [csDark_css, csDark_tokens] = [csDark_var.declarations ?? '', csDark_var.tokens || []];
            const [eRest_css, eRest_tokens] = [eRest_var.declarations ?? '', eRest_var.tokens || []];
            const [ecsRest_css, ecsRest_tokens] = [ecsRest_var.declarations ?? '', ecsRest_var.tokens || []];
            const [ecsDark_css, ecsDark_tokens] = [ecsDark_var.declarations ?? '', ecsDark_var.tokens || []];

            primitive_css = this.transformCSS(name, prim_css, 'light', 'variable', options, set, defaults);
            primitive_tokens = prim_tokens;

            const semantic_light_css = this.transformCSS(name, `${sRest_css}${csRest_css}`, 'light', 'variable', options, set, defaults);
            const semantic_dark_css = this.transformCSS(name, `${csDark_css}`, 'dark', 'variable', options, set, defaults);

            semantic_css = `${semantic_light_css}${semantic_dark_css}`;
            semantic_tokens = [...new Set([...sRest_tokens, ...csRest_tokens, ...csDark_tokens])];

            const global_light_css = this.transformCSS(name, `${eRest_css}${ecsRest_css}color-scheme:light`, 'light', 'variable', options, set, defaults);
            const global_dark_css = this.transformCSS(name, `${ecsDark_css}color-scheme:dark`, 'dark', 'variable', options, set, defaults);

            global_css = `${global_light_css}${global_dark_css}`;
            global_tokens = [...new Set([...eRest_tokens, ...ecsRest_tokens, ...ecsDark_tokens])];

            style = resolve(preset.css, { dt: this.dtwt.bind(this, defaults, tokens) });
        }

        return {
            primitive: {
                css: primitive_css,
                tokens: primitive_tokens
            },
            semantic: {
                css: semantic_css,
                tokens: semantic_tokens
            },
            global: {
                css: global_css,
                tokens: global_tokens
            },
            style
        };
    },
    getPreset({ name = '', preset = {}, options, params, set, defaults, tokens, selector }: any) {
        let p_css, p_tokens, p_style;

        if (isNotEmpty(preset) && options.transform !== 'strict') {
            const _name = name.replace('-directive', '');
            const { colorScheme, extend, css, ...vRest } = preset;
            const { colorScheme: eColorScheme, ...evRest } = extend || {};
            const { dark, ...csRest } = colorScheme || {};
            const { dark: ecsDark, ...ecsRest } = eColorScheme || {};
            const vRest_var: any = isNotEmpty(vRest) ? this._toVariables(defaults, { [_name]: { ...vRest, ...evRest } }, options) : {};
            const csRest_var: any = isNotEmpty(csRest) ? this._toVariables(defaults, { [_name]: { ...csRest, ...ecsRest } }, options) : {};
            const csDark_var: any = isNotEmpty(dark) ? this._toVariables(defaults, { [_name]: { ...dark, ...ecsDark } }, options) : {};

            const [vRest_css, vRest_tokens] = [vRest_var.declarations ?? '', vRest_var.tokens || []];
            const [csRest_css, csRest_tokens] = [csRest_var.declarations ?? '', csRest_var.tokens || []];
            const [csDark_css, csDark_tokens] = [csDark_var.declarations ?? '', csDark_var.tokens || []];

            const light_variable_css = this.transformCSS(_name, `${vRest_css}${csRest_css}`, 'light', 'variable', options, set, defaults, selector);
            const dark_variable_css = this.transformCSS(_name, csDark_css, 'dark', 'variable', options, set, defaults, selector);

            p_css = `${light_variable_css}${dark_variable_css}`;
            p_tokens = [...new Set([...vRest_tokens, ...csRest_tokens, ...csDark_tokens])];

            p_style = resolve(css, { dt: this.dtwt.bind(this, defaults, tokens) });
        }

        return {
            css: p_css,
            tokens: p_tokens,
            style: p_style
        };
    },
    getPresetC({ name = '', theme = {}, params, set, defaults, tokens }: any) {
        const { preset, options } = theme;
        const cPreset = preset?.components?.[name];

        return this.getPreset({ name, preset: cPreset, options, params, set, defaults, tokens });
    },
    // @deprecated - use getPresetC instead
    getPresetD({ name = '', theme = {}, params, set, defaults, tokens }: any) {
        const dName = name.replace('-directive', '');
        const { preset, options } = theme;
        const dPreset = preset?.components?.[dName] || preset?.directives?.[dName];

        return this.getPreset({ name: dName, preset: dPreset, options, params, set, defaults, tokens });
    },
    applyDarkColorScheme(options: any) {
        return !(options.darkModeSelector === 'none' || options.darkModeSelector === false);
    },
    getColorSchemeOption(options: any, defaults: any) {
        return this.applyDarkColorScheme(options) ? this.regex.resolve(options.darkModeSelector === true ? defaults.options.darkModeSelector : (options.darkModeSelector ?? defaults.options.darkModeSelector)) : [];
    },
    getLayerOrder(name: string, options: any = {}, params: any, defaults: any) {
        const { cssLayer } = options;

        if (cssLayer) {
            const order = resolve(cssLayer.order || 'primeui', params);

            return `@layer ${order};`;
        }

        return '';
    },
    getCommonStyleSheet({ name = '', theme = {}, params, props = {}, set, defaults, tokens }: any) {
        const common = this.getCommon({ name, theme, params, set, defaults, tokens });
        const _props = Object.entries(props)
            .reduce((acc: any, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        return Object.entries(common || {})
            .reduce((acc: any, [key, value]) => {
                if (value?.css) {
                    const _css = transformCSS(value?.css, params);
                    let id = `${key}-variables`;

                    if (params?.prefix) {
                        id = id ? `${params.prefix}_${id}` : id;
                    }

                    acc.push(`<style type="text/css" data-primevue-style-id="${id}" ${_props}>${_css}</style>`); // @todo data-primevue -> data-primeui check in primevue usestyle
                }

                return acc;
            }, [])
            .join('');
    },
    getStyleSheet({ name = '', theme = {}, params, props = {}, set, defaults, tokens }: any) {
        const options = { name, theme, params, set, defaults, tokens };
        const preset_css = (name.includes('-directive') ? this.getPresetD(options) : this.getPresetC(options))?.css;
        const _props = Object.entries(props)
            .reduce((acc: any, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');
        let id = `${name}-variables`;

        if (params?.prefix) {
            id = id ? `${params.prefix}_${id}` : id;
        }

        return preset_css ? `<style type="text/css" data-primevue-style-id="${id}" ${_props}>${transformCSS(preset_css, params)}</style>` : ''; // @todo check
    },
    createTokens(obj: any = {}, defaults: any, parentKey: string = '', parentPath: string = '', tokens: any = {}) {
        Object.entries(obj).forEach(([key, value]) => {
            const currentKey = matchRegex(key, defaults.variable.excludedKeyRegex) ? parentKey : parentKey ? `${parentKey}.${toTokenKey(key)}` : toTokenKey(key);
            const currentPath = parentPath ? `${parentPath}.${key}` : key;

            if (isObject(value)) {
                this.createTokens(value, defaults, currentKey, currentPath, tokens);
            } else {
                tokens[currentKey] ||= {
                    paths: [],
                    computed(colorScheme: string, tokenPathMap: any = {}) {
                        if (this.paths.length === 1) {
                            return this.paths[0]?.computed(this.paths[0].scheme, tokenPathMap['binding']);
                        } else if (colorScheme && colorScheme !== 'none') {
                            return this.paths.find((p: any) => p.scheme === colorScheme)?.computed(colorScheme, tokenPathMap['binding']);
                        }

                        return this.paths.map((p: any) => p.computed(p.scheme, tokenPathMap[p.scheme]));
                    }
                };
                tokens[currentKey].paths.push({
                    path: currentPath,
                    value,
                    scheme: currentPath.includes('colorScheme.light') ? 'light' : currentPath.includes('colorScheme.dark') ? 'dark' : 'none',
                    computed(colorScheme: string, tokenPathMap: any = {}) {
                        const regex = /{([^}]*)}/g;
                        let computedValue: any = value;

                        tokenPathMap['name'] = this.path;
                        tokenPathMap['binding'] ||= {};

                        if (matchRegex(value as string, regex)) {
                            const val = (value as string).trim();
                            const _val = val.replaceAll(regex, (v) => {
                                const path = v.replace(/{|}/g, '');
                                const computed = tokens[path]?.computed(colorScheme, tokenPathMap);

                                return isArray(computed) && computed.length === 2 ? `light-dark(${computed[0].value},${computed[1].value})` : computed?.value;
                            });

                            const calculationRegex = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g;
                            const cleanedVarRegex = /var\([^)]+\)/g;

                            computedValue = matchRegex(_val.replace(cleanedVarRegex, '0'), calculationRegex) ? `calc(${_val})` : _val;
                        }

                        isEmpty(tokenPathMap['binding']) && delete tokenPathMap['binding'];

                        return {
                            colorScheme,
                            path: this.path,
                            paths: tokenPathMap,
                            value: computedValue.includes('undefined') ? undefined : computedValue
                        };
                    }
                });
            }
        });

        return tokens;
    },
    getTokenValue(tokens: any, path: string, defaults: any) {
        const normalizePath = (str: string) => {
            const strArr = str.split('.');

            return strArr.filter((s) => !matchRegex(s.toLowerCase(), defaults.variable.excludedKeyRegex)).join('.');
        };

        const token = normalizePath(path);
        const colorScheme = path.includes('colorScheme.light') ? 'light' : path.includes('colorScheme.dark') ? 'dark' : undefined;
        const computedValues = [tokens[token as any]?.computed(colorScheme)].flat().filter((computed) => computed);

        return computedValues.length === 1
            ? computedValues[0].value
            : computedValues.reduce((acc = {}, computed) => {
                  const { colorScheme: cs, ...rest } = computed;

                  acc[cs] = rest;

                  return acc;
              }, undefined);
    },
    getSelectorRule(selector1: any, selector2: any, type: string, css: string) {
        return type === 'class' || type === 'attr' ? getRule(isNotEmpty(selector2) ? `${selector1}${selector2},${selector1} ${selector2}` : selector1, css) : getRule(selector1, isNotEmpty(selector2) ? getRule(selector2, css) : css);
    },
    transformCSS(name: string, css: string, mode?: string, type?: string, options: any = {}, set?: any, defaults?: any, selector?: string) {
        if (isNotEmpty(css)) {
            const { cssLayer } = options;

            if (type !== 'style') {
                const colorSchemeOption = this.getColorSchemeOption(options, defaults);

                css =
                    mode === 'dark'
                        ? colorSchemeOption.reduce((acc, { type, selector: _selector }) => {
                              if (isNotEmpty(_selector)) {
                                  acc += _selector.includes('[CSS]') ? _selector.replace('[CSS]', css) : this.getSelectorRule(_selector, selector, type, css);
                              }

                              return acc;
                          }, '')
                        : getRule(selector ?? ':root', css);
            }

            if (cssLayer) {
                const layerOptions = {
                    name: 'primeui',
                    order: 'primeui'
                };

                isObject(cssLayer) && (layerOptions.name = resolve((cssLayer as any).name, { name, type }));

                if (isNotEmpty(layerOptions.name)) {
                    css = getRule(`@layer ${layerOptions.name}`, css);
                    set?.layerNames(layerOptions.name);
                }
            }

            return css;
        }

        return '';
    }
};
