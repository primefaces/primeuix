import type { TabmenuDesignTokens, TabmenuTokenSections } from '@primeuix/themes/types/tabmenu';

export const root: TabmenuTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const tablist: TabmenuTokenSections.Tablist = {
    borderWidth: '0',
    background: '{content.background}',
    borderColor: '{content.border.color}'
};

export const item: TabmenuTokenSections.Item = {
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
    fontWeight: '600',
    margin: '0',
    gap: '0.5rem',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const itemIcon: TabmenuTokenSections.ItemIcon = {
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    activeColor: '{primary.color}'
};

export const activeBar: TabmenuTokenSections.ActiveBar = {
    height: '0',
    bottom: '0',
    background: 'transparent'
};

export default {
    root,
    tablist,
    item,
    itemIcon,
    activeBar
} satisfies TabmenuDesignTokens;
