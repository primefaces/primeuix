import type { ToggleButtonDesignTokens, ToggleButtonTokenSections } from '@primeuix/themes/types/togglebutton';

export const root: ToggleButtonTokenSections.Root = {
    padding: '0.25rem',
    borderRadius: '{content.border.radius}',
    gap: '0.5rem',
    fontWeight: '500',
    fontSize: '{form.field.font.size}',
    background: 'light-dark({surface.100}, {surface.950})',
    checkedBackground: 'light-dark({surface.100}, {surface.950})',
    hoverBackground: 'light-dark({surface.100}, {surface.950})',
    borderColor: 'light-dark({surface.100}, {surface.950})',
    color: 'light-dark({surface.500}, {surface.400})',
    hoverColor: 'light-dark({surface.700}, {surface.300})',
    checkedColor: 'light-dark({surface.900}, {surface.0})',
    checkedBorderColor: 'light-dark({surface.100}, {surface.950})',
    disabledBackground: '{form.field.disabled.background}',
    disabledBorderColor: '{form.field.disabled.background}',
    disabledColor: '{form.field.disabled.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
        fontSize: '{form.field.sm.font.size}',
        padding: '0.25rem'
    },
    lg: {
        fontSize: '{form.field.lg.font.size}',
        padding: '0.25rem'
    }
};

export const icon: ToggleButtonTokenSections.Icon = {
    color: 'light-dark({surface.500}, {surface.400})',
    hoverColor: 'light-dark({surface.700}, {surface.300})',
    checkedColor: 'light-dark({surface.900}, {surface.0})',
    disabledColor: '{form.field.disabled.color}'
};

export const content: ToggleButtonTokenSections.Content = {
    padding: '0.125rem 0.625rem',
    borderRadius: '{content.border.radius}',
    checkedBackground: 'light-dark({surface.0}, {surface.800})',
    checkedShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)',
    sm: {
        padding: '0.125rem 0.625rem'
    },
    lg: {
        padding: '0.125rem 0.625rem'
    }
};

export default {
    root,
    icon,
    content
} satisfies ToggleButtonDesignTokens;
