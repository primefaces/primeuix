import type { CheckboxDesignTokens, CheckboxTokenSections } from '@primeuix/themes/types/checkbox';

export const root: CheckboxTokenSections.Root = {
    borderRadius: '{border.radius.sm}',
    width: '1.25rem',
    height: '1.25rem',
    background: '{form.field.background}',
    checkedBackground: '{primary.color}',
    checkedHoverBackground: '{primary.hover.color}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.focus.border.color}',
    checkedBorderColor: '{primary.color}',
    checkedHoverBorderColor: '{primary.hover.color}',
    checkedFocusBorderColor: '{primary.color}',
    checkedDisabledBorderColor: '{form.field.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    shadow: '{form.field.shadow}',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
        width: '1.125rem',
        height: '1.125rem'
    },
    lg: {
        width: '1.5rem',
        height: '1.5rem'
    }
};

export const icon: CheckboxTokenSections.Icon = {
    size: '0.875rem',
    color: '{form.field.color}',
    checkedColor: '{primary.contrast.color}',
    checkedHoverColor: '{primary.contrast.color}',
    disabledColor: '{form.field.disabled.color}',
    sm: {
        size: '0.625rem'
    },
    lg: {
        size: '1.125rem'
    }
};

export default {
    root,
    icon
} satisfies CheckboxDesignTokens;
