import type { InputGroupDesignTokens, InputGroupTokenSections } from '@primeuix/themes/types/inputgroup';

export const addon: InputGroupTokenSections.Addon = {
    background: '{form.field.background}',
    borderColor: '{form.field.border.color}',
    color: '{form.field.icon.color}',
    borderRadius: '{form.field.border.radius}',
    padding: '0.75rem',
    minWidth: '3rem'
};

// @section:css-start
export const css: InputGroupTokenSections.CSS = ({ dt }) => `
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${dt('inputtext.filled.background')};
    border-inline-color: ${dt('inputtext.filled.background')};
    background: ${dt('inputtext.filled.background')} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
`;
// @section:css-end

export default {
    addon,
    css
} satisfies InputGroupDesignTokens;
