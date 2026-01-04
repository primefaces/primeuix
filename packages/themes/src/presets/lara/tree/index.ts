import type { TreeDesignTokens, TreeTokenSections } from '@primeuix/themes/types/tree';

export const root: TreeTokenSections.Root = {
    background: '{content.background}',
    color: '{content.color}',
    padding: '0.875rem',
    gap: '2px',
    indent: '0.875rem',
    transitionDuration: '{transition.duration}'
};

export const node: TreeTokenSections.Node = {
    padding: '0.375rem 0.5rem',
    borderRadius: '{content.border.radius}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    color: '{text.color}',
    hoverColor: '{text.hover.color}',
    selectedColor: '{highlight.color}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: 'inset {focus.ring.shadow}'
    },
    gap: '0.25rem'
};

export const nodeIcon: TreeTokenSections.NodeIcon = {
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
    selectedColor: '{highlight.color}'
};

export const nodeLabel: TreeTokenSections.NodeLabel = {
    fontWeight: '{typography.font.weight}',
    selectedFontWeight: '{list.option.selected.font.weight}',
    fontSize: '{typography.font.size}'
};

export const nodeToggleButton: TreeTokenSections.NodeToggleButton = {
    borderRadius: '50%',
    size: '1.5rem',
    hoverBackground: '{content.hover.background}',
    selectedHoverBackground: '{content.background}',
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
    selectedHoverColor: '{primary.color}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const loadingIcon: TreeTokenSections.LoadingIcon = {
    size: '1.75rem'
};

export const filter: TreeTokenSections.Filter = {
    margin: '0 0 0.5rem 0'
};

export default {
    root,
    node,
    nodeIcon,
    nodeLabel,
    nodeToggleButton,
    loadingIcon,
    filter
} satisfies TreeDesignTokens;
