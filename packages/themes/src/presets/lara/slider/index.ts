import type { SliderDesignTokens, SliderTokenSections } from '@primeuix/themes/types/slider';

export const root: SliderTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const track: SliderTokenSections.Track = {
    background: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    size: '3px'
};

export const range: SliderTokenSections.Range = {
    background: '{primary.color}'
};

export const handle: SliderTokenSections.Handle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: '{primary.color}',
    hoverBackground: '{primary.color}',
    content: {
        borderRadius: '50%',
        hoverBackground: '{primary.color}',
        width: '12px',
        height: '12px',
        shadow: 'none',
        background: 'light-dark({surface.0}, {surface.950})'
    },
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    }
};

export default {
    root,
    track,
    range,
    handle
} satisfies SliderDesignTokens;
