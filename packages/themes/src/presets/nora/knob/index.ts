import type { KnobDesignTokens, KnobTokenSections } from '@primeuix/themes/types/knob';

export const root: KnobTokenSections.Root = {
    transitionDuration: '{transition.duration}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const value: KnobTokenSections.Value = {
    background: '{primary.color}'
};

export const range: KnobTokenSections.Range = {
    background: 'light-dark({surface.300}, {surface.600})'
};

export const text: KnobTokenSections.Text = {
    color: '{text.muted.color}',
    fontSize: '1.125rem',
    fontWeight: 'normal'
};

export default {
    root,
    value,
    range,
    text
} satisfies KnobDesignTokens;
