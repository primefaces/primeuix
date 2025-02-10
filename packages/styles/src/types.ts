import type { ThemeStyleOptions } from '@primeuix/styled';

export interface StyleOptions extends ThemeStyleOptions {
    [key: string]: unknown;
}

export declare type StyleType = string | ((options: StyleOptions) => string);
