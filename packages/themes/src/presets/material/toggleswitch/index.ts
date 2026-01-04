import type { ToggleSwitchDesignTokens, ToggleSwitchTokenSections } from '@primeuix/themes/types/toggleswitch';

export const root: ToggleSwitchTokenSections.Root = {
    width: '2.375rem',
    height: '0.875rem',
    borderRadius: '30px',
    gap: '0px',
    shadow: 'none',
    focusRing: {
        width: '0',
        style: 'none',
        color: 'unset',
        offset: '0',
        shadow: 'none'
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
    disabledBackground: 'light-dark({surface.400}, {surface.600})',
    hoverBackground: 'light-dark({surface.300}, {surface.700})',
    checkedBackground: 'light-dark({primary.200}, {primary.color})',
    checkedHoverBackground: 'light-dark({primary.200}, {primary.color})'
};

export const handle: ToggleSwitchTokenSections.Handle = {
    borderRadius: '50%',
    size: '1.25rem',
    background: 'light-dark({surface.0}, {surface.400})',
    disabledBackground: 'light-dark({surface.200}, {surface.500})',
    hoverBackground: 'light-dark({surface.0}, {surface.300})',
    checkedBackground: 'light-dark({primary.color}, {primary.200})',
    checkedHoverBackground: 'light-dark({primary.color}, {primary.200})',
    color: 'light-dark({text.muted.color}, {surface.800})',
    hoverColor: 'light-dark({text.color}, {surface.900})',
    checkedColor: '{primary.contrast.color}',
    checkedHoverColor: '{primary.contrast.color}'
};

export const css: ToggleSwitchTokenSections.CSS = /*css*/ `
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('toggleswitch.handle.checked.background'), transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('toggleswitch.handle.checked.background'), transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`;

export default {
    root,
    handle,
    css
} satisfies ToggleSwitchDesignTokens;
