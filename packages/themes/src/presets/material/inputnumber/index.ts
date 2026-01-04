import type { InputNumberDesignTokens, InputNumberTokenSections } from '@primeuix/themes/types/inputnumber';

export const root: InputNumberTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const button: InputNumberTokenSections.Button = {
    width: '2.625rem',
    borderRadius: '{form.field.border.radius}',
    verticalPadding: '{form.field.padding.y}',
    background: 'transparent',
    hoverBackground: 'light-dark({surface.100}, {surface.800})',
    activeBackground: 'light-dark({surface.200}, {surface.700})',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.border.color}',
    activeBorderColor: '{form.field.border.color}',
    color: '{surface.400}',
    hoverColor: 'light-dark({surface.500}, {surface.300})',
    activeColor: 'light-dark({surface.600}, {surface.200})'
};

export const css: InputNumberTokenSections.CSS = /*css*/ `
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: dt('inputtext.filled.background');
    border-inline-color: dt('inputtext.filled.background');
    background: dt('inputtext.filled.background') no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: dt('inputtext.filled.background');
    border-inline-color: dt('inputtext.filled.background');
    background: dt('inputtext.filled.background') no-repeat;
}

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid dt('inputtext.border.color')
}
`;

export default {
    root,
    button,
    css
} satisfies InputNumberDesignTokens;
