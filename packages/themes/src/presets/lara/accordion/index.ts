import type { AccordionDesignTokens, AccordionTokenSections } from '@primeuix/themes/types/accordion';

export const root: AccordionTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const panel: AccordionTokenSections.Panel = {
    borderWidth: '0',
    borderColor: '{content.border.color}'
};

export const header: AccordionTokenSections.Header = {
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    activeColor: '{text.color}',
    activeHoverColor: '{text.color}',
    padding: '1rem',
    fontWeight: '700',
    fontSize: '{typography.font.size}',
    borderRadius: '0',
    borderWidth: '0 1px 1px 1px',
    borderColor: '{content.border.color}',
    background: 'light-dark({surface.50}, {surface.800})',
    hoverBackground: 'light-dark({surface.100}, {surface.700})',
    activeBackground: 'light-dark({surface.50}, {surface.800})',
    activeHoverBackground: 'light-dark({surface.100}, {surface.700})',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: 'inset {focus.ring.shadow}'
    },
    toggleIcon: {
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{text.color}',
        activeHoverColor: '{text.color}'
    },
    first: {
        topBorderRadius: '{content.border.radius}',
        borderWidth: '1px'
    },
    last: {
        bottomBorderRadius: '{content.border.radius}',
        activeBottomBorderRadius: '0'
    }
};

export const content: AccordionTokenSections.Content = {
    borderWidth: '0 1px 1px 1px',
    borderColor: '{content.border.color}',
    background: '{content.background}',
    color: '{text.color}',
    padding: '1rem'
};

export default {
    root,
    panel,
    header,
    content
} satisfies AccordionDesignTokens;
