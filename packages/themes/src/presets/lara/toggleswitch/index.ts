import type { ToggleSwitchDesignTokens, ToggleSwitchTokenSections } from '@primeuix/themes/types/toggleswitch';

export const root: ToggleSwitchTokenSections.Root = {
    width: '3rem',
    height: '1.75rem',
    borderRadius: '30px',
    gap: '0.25rem',
    shadow: '{form.field.shadow}',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    },
    borderWidth: '1px',
    borderColor: 'transparent',
    hoverBorderColor: 'transparent',
    checkedBorderColor: 'transparent',
    checkedHoverBorderColor: 'transparent',
    invalidBorderColor: '{form.field.invalid.border.color}',
    transitionDuration: '{form.field.transition.duration}',
    slideDuration: '0.2s',
    background: 'light-dark({surface.300}, {surface.700})',
    disabledBackground: 'light-dark({form.field.disabled.background}, {surface.600})',
    hoverBackground: 'light-dark({surface.400}, {surface.600})',
    checkedBackground: '{primary.color}',
    checkedHoverBackground: '{primary.hover.color}'
};

export const handle: ToggleSwitchTokenSections.Handle = {
    borderRadius: '50%',
    size: '1.25rem',
    background: 'light-dark({surface.0}, {surface.400})',
    disabledBackground: 'light-dark({form.field.disabled.color}, {surface.900})',
    hoverBackground: 'light-dark({surface.0}, {surface.300})',
    checkedBackground: 'light-dark({surface.0}, {surface.900})',
    checkedHoverBackground: 'light-dark({surface.0}, {surface.900})',
    color: 'light-dark({text.muted.color}, {surface.900})',
    hoverColor: 'light-dark({text.color}, {surface.800})',
    checkedColor: '{primary.color}',
    checkedHoverColor: '{primary.hover.color}'
};

export default {
    root,
    handle
} satisfies ToggleSwitchDesignTokens;
