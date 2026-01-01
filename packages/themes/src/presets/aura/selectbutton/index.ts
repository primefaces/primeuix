import type { SelectButtonDesignTokens, SelectButtonTokenSections } from '@primeuix/themes/types/selectbutton';

export const root: SelectButtonTokenSections.Root = {
    borderRadius: '{form.field.border.radius}',
    invalidBorderColor: '{form.field.invalid.border.color}'
};

export default {
    root
} satisfies SelectButtonDesignTokens;
