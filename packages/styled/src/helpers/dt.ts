import { matchRegex } from '@primeuix/utils/src/object';
import Theme from '../config/index';
import { getVariableValue } from '../utils/index';

export const $dt = (tokenPath: string): { name: string; variable: string; value: any } => {
    const theme = Theme.getTheme();

    const variable = dtwt(theme, tokenPath, undefined, 'variable');
    const name = variable.match(/--[\w-]+/g)?.[0];
    const value = dtwt(theme, tokenPath, undefined, 'value');

    return {
        name,
        variable,
        value
    };
};

export const dt = (...args: any[]) => {
    // @ts-ignore
    return dtwt(Theme.getTheme(), ...args);
};

export const dtwt = (theme: any = {}, tokenPath: string, fallback?: string, type: string = 'variable') => {
    if (tokenPath) {
        const { variable: VARIABLE, options: OPTIONS } = Theme.defaults || {};
        const { prefix, transform } = theme?.options || OPTIONS || {};
        const regex = /{([^}]*)}/g;
        const token = matchRegex(tokenPath, regex) ? tokenPath : `{${tokenPath}}`;
        const isStrictTransform = type === 'value' || transform === 'strict'; // @todo - TRANSFORM: strict | lenient(default)

        return isStrictTransform ? Theme.getTokenValue(tokenPath) : getVariableValue(token, undefined, prefix, [VARIABLE.excludedKeyRegex], fallback);
    }

    return '';
};
