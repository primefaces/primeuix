import type { PaginatorDesignTokens, PaginatorTokenSections } from '@primeuix/themes/types/paginator';

export const root: PaginatorTokenSections.Root = {
    padding: '0.5rem 0.875rem',
    gap: '0.25rem',
    borderRadius: '{content.border.radius}',
    background: '{content.background}',
    color: '{content.color}',
    transitionDuration: '{transition.duration}'
};

export const navButton: PaginatorTokenSections.NavButton = {
    background: 'transparent',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
    selectedColor: '{highlight.color}',
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: '50%',
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const currentPageReport: PaginatorTokenSections.CurrentPageReport = {
    color: '{text.muted.color}',
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export const jumpToPageInput: PaginatorTokenSections.JumpToPageInput = {
    maxWidth: '2.25rem'
};

export default {
    root,
    navButton,
    currentPageReport,
    jumpToPageInput
} satisfies PaginatorDesignTokens;
