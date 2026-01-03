import type { InputGroupDesignTokens, InputGroupTokenSections } from '@primeuix/themes/types/inputgroup';

export const addon: InputGroupTokenSections.Addon = {
    background: 'light-dark({surface.50}, {surface.800})',
    borderColor: '{form.field.border.color}',
    color: '{text.muted.color}',
    borderRadius: '{form.field.border.radius}',
    padding: '0.625rem 0.5rem',
    minWidth: '2.75rem',
    fontWeight: '{form.field.font.weight}',
    fontSize: '{form.field.font.size}'
};

export default {
    addon
} satisfies InputGroupDesignTokens;
