import type { InputNumberDesignTokens, InputNumberTokenSections } from '@primeuix/themes/types/inputnumber';

export const root: InputNumberTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const button: InputNumberTokenSections.Button = {
    width: '2.5rem',
    borderRadius: '{form.field.border.radius}',
    verticalPadding: '{form.field.padding.y}',
    background: 'light-dark({surface.100}, {surface.800})',
    hoverBackground: 'light-dark({surface.200}, {surface.700})',
    activeBackground: 'light-dark({surface.300}, {surface.500})',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.border.color}',
    activeBorderColor: '{form.field.border.color}',
    color: 'light-dark({surface.600}, {surface.300})',
    hoverColor: 'light-dark({surface.700}, {surface.200})',
    activeColor: 'light-dark({surface.800}, {surface.100})'
};

export default {
    root,
    button
} satisfies InputNumberDesignTokens;
