import type { RadioButtonDesignTokens, RadioButtonTokenSections } from '@primeuix/themes/types/radiobutton';

export const root: RadioButtonTokenSections.Root = {
    width: '1.125rem',
    height: '1.125rem',
    background: '{form.field.background}',
    checkedBackground: '{primary.color}',
    checkedHoverBackground: '{primary.hover.color}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.border.color}',
    checkedBorderColor: '{primary.color}',
    checkedHoverBorderColor: '{primary.hover.color}',
    checkedFocusBorderColor: '{primary.color}',
    checkedDisabledBorderColor: '{form.field.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    shadow: '{form.field.shadow}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
        width: '0.875rem',
        height: '0.875rem'
    },
    lg: {
        width: '1.25rem',
        height: '1.25rem'
    }
};

export const icon: RadioButtonTokenSections.Icon = {
    size: '0.625rem',
    checkedColor: '{primary.contrast.color}',
    checkedHoverColor: '{primary.contrast.color}',
    disabledColor: '{form.field.disabled.color}',
    sm: {
        size: '0.375rem'
    },
    lg: {
        size: '0.75rem'
    }
};

export default {
    root,
    icon
} satisfies RadioButtonDesignTokens;
