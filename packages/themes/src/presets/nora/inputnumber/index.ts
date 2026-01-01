import type { InputNumberDesignTokens, InputNumberTokenSections } from '@primeuix/themes/types/inputnumber';

export const root: InputNumberTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const button: InputNumberTokenSections.Button = {
    background: 'transparent',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.border.color}',
    activeBorderColor: '{form.field.border.color}',
    color: '{form.field.icon.color}',
    hoverColor: '{form.field.icon.color}',
    activeColor: '{form.field.icon.color}',
    width: '2.5rem',
    borderRadius: '{form.field.border.radius}',
    verticalPadding: '{form.field.padding.y}',
    hoverBackground: 'light-dark({surface.200}, {surface.700})',
    activeBackground: 'light-dark({surface.300}, {surface.600})'
};

export default {
    root,
    button
} satisfies InputNumberDesignTokens;
