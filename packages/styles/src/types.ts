import type { StyleType, ThemeStyleOptions } from '@primeuix/styled';

export interface StyleOptions extends ThemeStyleOptions {
    [key: string]: unknown;
}

export declare const style: StyleType<StyleOptions>;
