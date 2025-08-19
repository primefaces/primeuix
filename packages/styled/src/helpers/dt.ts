import { default as ThemeSingleton } from '../config/index';
import { ThemeUtils } from '../utils/index';

export const getDtInstance = (Theme: typeof ThemeSingleton) => {
    const $dt = (tokenPath: string): { name: string; variable: string; value: unknown } => {
        const theme = Theme.getTheme();

        const variable = ThemeUtils.dtwt(Theme.defaults, Theme.tokens, theme, tokenPath, undefined, 'variable');
        const name = variable?.match(/--[\w-]+/g)?.[0];
        const value = ThemeUtils.dtwt(Theme.defaults, Theme.tokens, theme, tokenPath, undefined, 'value');

        return {
            name,
            variable,
            value
        };
    };

    const dt = (...args: Parameters<typeof ThemeUtils.dtwt> extends [unknown, unknown, unknown, ...infer Rest] ? Rest : never) => {
        return ThemeUtils.dtwt(Theme.defaults, Theme.tokens, Theme.getTheme(), ...args);
    };

    return { $dt, dt };
};

export const { $dt, dt } = getDtInstance(ThemeSingleton);
