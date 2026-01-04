import type { SliderDesignTokens, SliderTokenSections } from '@primeuix/themes/types/slider';

export const root: SliderTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const track: SliderTokenSections.Track = {
    background: 'light-dark({surface.300}, {surface.600})',
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
        background: '{primary.color}',
        hoverBackground: '{primary.color}',
        width: '12px',
        height: '12px',
        shadow: 'none'
    },
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export default {
    root,
    track,
    range,
    handle
} satisfies SliderDesignTokens;
