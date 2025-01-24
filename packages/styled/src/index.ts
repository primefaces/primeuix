export * from './actions/index';
export { default as Theme } from './config/index';
export * from './helpers/index';
export { default as ThemeService } from './service/index';
export * from './utils/index';

export interface ThemeStyleOptions {
    dt: (key: string, fallback?: string | number | Pick<ThemeStyleOptions, 'dt'>) => string | number | undefined;
}
