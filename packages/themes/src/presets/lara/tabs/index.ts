import type { TabsDesignTokens, TabsTokenSections } from '@primeuix/themes/types/tabs';

export const root: TabsTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const tablist: TabsTokenSections.Tablist = {
    borderWidth: '0',
    background: '{content.background}',
    borderColor: '{content.border.color}'
};

export const tab: TabsTokenSections.Tab = {
    background: 'light-dark({surface.50}, {surface.800})',
    hoverBackground: 'light-dark({surface.100}, {surface.700})',
    activeBackground: 'light-dark({surface.0}, {surface.900})',
    borderWidth: '2px 0 0 0',
    borderColor: 'transparent',
    hoverBorderColor: 'transparent',
    activeBorderColor: '{primary.color}',
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    activeColor: '{primary.color}',
    padding: '1rem 1.25rem',
    fontWeight: '700',
    margin: '0',
    gap: '0.5rem',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: 'inset {focus.ring.shadow}'
    }
};

export const tabpanel: TabsTokenSections.Tabpanel = {
    background: '{content.background}',
    color: '{content.color}',
    padding: '0.875rem 1.125rem 1.125rem 1.125rem',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: 'inset {focus.ring.shadow}'
    }
};

export const navButton: TabsTokenSections.NavButton = {
    background: '{content.background}',
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    width: '2.5rem',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: 'inset {focus.ring.shadow}'
    },
    shadow: 'light-dark(0px 0px 10px 50px rgba(255, 255, 255, 0.6), 0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%))'
};

export const activeBar: TabsTokenSections.ActiveBar = {
    height: '0',
    bottom: '0',
    background: 'transparent'
};

export default {
    root,
    tablist,
    tab,
    tabpanel,
    navButton,
    activeBar
} satisfies TabsDesignTokens;
