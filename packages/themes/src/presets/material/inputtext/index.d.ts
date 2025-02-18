import type { ThemeStyleOptions } from '@primeuix/styled';
import type { InputTextTokenSections } from '@primeuix/themes/types/inputtext';

export * from '@primeuix/themes/types/inputtext';

declare const root: InputTextTokenSections.Root;
declare const css: InputTextTokenSections.CSS;
declare const _default: {
    root: InputTextTokenSections.Root;
    css: (options: ThemeStyleOptions) => string;
};

export { css, _default as default, root };
