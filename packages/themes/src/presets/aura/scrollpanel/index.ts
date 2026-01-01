import type { ScrollPanelDesignTokens, ScrollPanelTokenSections } from '@primeuix/themes/types/scrollpanel';

export const root: ScrollPanelTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const bar: ScrollPanelTokenSections.Bar = {
    size: '9px',
    borderRadius: '{border.radius.sm}',
    background: 'light-dark({surface.100}, {surface.800})',
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
    bar
} satisfies ScrollPanelDesignTokens;
