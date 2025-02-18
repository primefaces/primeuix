import type { ThemeStyleOptions } from '@primeuix/styled';
import type { CheckboxTokenSections } from '@primeuix/themes/types/checkbox';

export * from '@primeuix/themes/types/checkbox';

declare const root: CheckboxTokenSections.Root;
declare const icon: CheckboxTokenSections.Icon;
declare const css: CheckboxTokenSections.CSS;
declare const _default: {
    root: CheckboxTokenSections.Root;
    icon: CheckboxTokenSections.Icon;
    css: (options: ThemeStyleOptions) => string;
};

export { css, _default as default, icon, root };
