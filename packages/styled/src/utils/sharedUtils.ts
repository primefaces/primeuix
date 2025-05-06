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

export function evaluateDtExpressions(input: string, fn: (...args: any[]) => string): string {
    const findInnermostDt = (str: string): { start: number; end: number; content: string } | null => {
        let depth = 0;
        let start = -1;

        for (let i = 0; i < str.length; i++) {
            if (str.slice(i, i + 3) === 'dt(') {
                if (depth === 0) start = i;
                depth++;
                i += 2;
            } else if (str[i] === ')' && depth > 0) {
                depth--;

                if (depth === 0) {
                    return {
                        start,
                        end: i,
                        content: str.slice(start, i + 1)
                    };
                }
            }
        }

        return null;
    };

    const parseArgs = (argsStr: string): (string | number)[] => {
        const args: (string | number)[] = [];
        let current = '';
        let depth = 0;
        let quote: string | null = null;

        for (let i = 0; i < argsStr.length; i++) {
            const c = argsStr[i];
            const prev = argsStr[i - 1];

            if ((c === '"' || c === "'" || c === '`') && prev !== '\\') {
                quote = quote === c ? null : c;
            }

            if (!quote) {
                if (c === '(') depth++;
                if (c === ')') depth--;

                if (c === ',' && depth === 0) {
                    args.push(processArg(current.trim()));
                    current = '';
                    continue;
                }
            }

            current += c;
        }

        if (current.trim()) {
            args.push(processArg(current.trim()));
        }

        return args;
    };

    const processArg = (arg: string): string | number => {
        if (arg.startsWith('dt(')) {
            return evaluateDtExpressions(arg, fn);
        }

        if (/^(['"`])(.*)\1$/.test(arg)) {
            return arg.slice(1, -1);
        }

        const num = Number(arg);

        return isNaN(num) ? arg : num;
    };

    let result = input;

    while (true) {
        const match = findInnermostDt(result);

        if (!match) break;

        const args = parseArgs(match.content.slice(3, -1));
        const value = fn(...args);

        result = result.slice(0, match.start) + value + result.slice(match.end + 1);
    }

    return result;
}
