export * from './actions/index';
export { default as Theme } from './config/index';
export * from './helpers/index';
export { default as ThemeService } from './service/index';
export * from './stylesheet/index';
export { default as StyleSheet } from './stylesheet/index';
export * from './utils/index';

export interface ThemeOptions {
    /**
     * The prefix for the theme
     * @default 'p'
     */
    prefix?: string;
    /**
     * Dark mode selector
     * @default 'system'
     */
    darkModeSelector?: string;
    /**
     * Whether to use the css layer
     * @default false
     */
    cssLayer?: boolean | { name?: string; order?: string };
}

export interface ThemeStyleOptions {
    dt: (key: string, fallback?: string | number | Pick<ThemeStyleOptions, 'dt'>) => string | number | undefined;
}

export declare type StyleType<T = ThemeStyleOptions> = string | ((options: T) => string);
