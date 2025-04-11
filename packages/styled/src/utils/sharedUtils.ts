import { getKeyValue, isArray, isNotEmpty, isNumber, isObject, isString, matchRegex, toKebabCase } from '@primeuix/utils/object';

export function toTokenKey(str: string): string {
    return isString(str) ? str.replace(/[A-Z]/g, (c: string, i: number) => (i === 0 ? c : '.' + c.toLowerCase())).toLowerCase() : str;
}

export function merge(value1: any, value2: any): void {
    if (isArray(value1)) {
        value1.push(...(value2 || []));
    } else if (isObject(value1)) {
        Object.assign(value1, value2);
    }
}

export function toValue(value: any): any {
    // Check for Figma ($value-$type)
    return isObject(value) && value.hasOwnProperty('$value') && value.hasOwnProperty('$type') ? (value as any).$value : value;
}

export function toUnit(value: string, variable: string = ''): string {
    const excludedProperties = ['opacity', 'z-index', 'line-height', 'font-weight', 'flex', 'flex-grow', 'flex-shrink', 'order'];

    if (!excludedProperties.some((property) => variable.endsWith(property))) {
        const val = `${value}`.trim();
        const valArr = val.split(' ');

        return valArr.map((v) => (isNumber(v) ? `${v}px` : v)).join(' ');
    }

    return value;
}

export function toNormalizePrefix(prefix: string): string {
    return prefix.replaceAll(/ /g, '').replace(/[^\w]/g, '-');
}

export function toNormalizeVariable(prefix: string = '', variable: string = ''): string {
    return toNormalizePrefix(`${isString(prefix, false) && isString(variable, false) ? `${prefix}-` : prefix}${variable}`);
}

export function getVariableName(prefix: string = '', variable: string = ''): string {
    return `--${toNormalizeVariable(prefix, variable)}`;
}

export function hasOddBraces(str: string = ''): boolean {
    const openBraces = (str.match(/{/g) || []).length;
    const closeBraces = (str.match(/}/g) || []).length;

    return (openBraces + closeBraces) % 2 !== 0;
}

export function getVariableValue(value: any, variable: string = '', prefix: string = '', excludedKeyRegexes: RegExp[] = [], fallback?: string): string | undefined {
    if (isString(value)) {
        const regex = /{([^}]*)}/g; // Exp: '{a}', '{a.b}', '{a.b.c}' etc.
        const val = value.trim();

        if (hasOddBraces(val)) {
            return undefined;
        } else if (matchRegex(val, regex)) {
            const _val = val.replaceAll(regex, (v: string) => {
                const path = v.replace(/{|}/g, '');
                const keys = path.split('.').filter((_v: string) => !excludedKeyRegexes.some((_r) => matchRegex(_v, _r)));

                return `var(${getVariableName(prefix, toKebabCase(keys.join('-')))}${isNotEmpty(fallback) ? `, ${fallback}` : ''})`;
            });

            const calculationRegex = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
            const cleanedVarRegex = /var\([^)]+\)/g;

            return matchRegex(_val.replace(cleanedVarRegex, '0'), calculationRegex) ? `calc(${_val})` : _val;
        }

        return val; //toUnit(val, variable);
    } else if (isNumber(value)) {
        return value; //toUnit(value, variable);
    }

    return undefined;
}

export function getComputedValue(obj = {}, value: any): any {
    if (isString(value)) {
        const regex = /{([^}]*)}/g;
        const val = value.trim();

        return matchRegex(val, regex) ? val.replaceAll(regex, (v: string) => getKeyValue(obj, v.replace(/{|}/g, '')) as string) : val;
    } else if (isNumber(value)) {
        return value;
    }

    return undefined;
}

export function setProperty(properties: string[], key: string, value?: string) {
    if (isString(key, false)) {
        properties.push(`${key}:${value};`);
    }
}

export function getRule(selector: string, properties: string): string {
    if (selector) {
        return `${selector}{${properties}}`;
    }

    return '';
}

export function toVariables(defaults: any, theme: any, options: any = {}): { value: any[]; tokens: any[]; declarations: string; css: string } {
    const VARIABLE = defaults.variable;
    const { prefix = VARIABLE.prefix, selector = VARIABLE.selector, excludedKeyRegex = VARIABLE.excludedKeyRegex } = options;

    const _toVariables = (_theme: any, _prefix = '') => {
        return Object.entries(_theme).reduce(
            (acc: any, [key, value]) => {
                const px = matchRegex(key, excludedKeyRegex) ? toNormalizeVariable(_prefix) : toNormalizeVariable(_prefix, toKebabCase(key));
                const v = toValue(value);

                if (isObject(v)) {
                    const { variables, tokens } = _toVariables(v, px);

                    merge(acc['tokens'], tokens);
                    merge(acc['variables'], variables);
                } else {
                    acc['tokens'].push((prefix ? px.replace(`${prefix}-`, '') : px).replaceAll('-', '.') as string);
                    setProperty(acc['variables'], getVariableName(px), getVariableValue(v, px, prefix, [excludedKeyRegex]));
                }

                return acc;
            },
            { variables: [], tokens: [] }
        );
    };

    const { variables, tokens } = _toVariables(theme, prefix);

    return {
        value: variables,
        tokens,
        declarations: variables.join(''),
        css: getRule(selector, variables.join(''))
    };
}
