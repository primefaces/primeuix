import type { StyleType as _StyleType, ThemeStyleOptions } from '@primeuix/styled';

export interface StyleOptions extends ThemeStyleOptions {
    [key: string]: unknown;
}

export type StyleType<T = StyleOptions> = _StyleType<T>;

export declare const style: StyleType<StyleOptions>;
