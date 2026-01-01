import type { ColorPickerDesignTokens, ColorPickerTokenSections } from '@primeuix/themes/types/colorpicker';

export const root: ColorPickerTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const preview: ColorPickerTokenSections.Preview = {
    width: '1.375rem',
    height: '1.375rem',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const panel: ColorPickerTokenSections.Panel = {
    shadow: '{overlay.popover.shadow}',
    borderRadius: '{overlay.popover.borderRadius}',
    background: 'light-dark({surface.800}, {surface.900})',
    borderColor: 'light-dark({surface.900}, {surface.700})'
};

export const handle: ColorPickerTokenSections.Handle = {
    color: '{surface.0}'
};

export default {
    root,
    preview,
    panel,
    handle
} satisfies ColorPickerDesignTokens;
