import type { CarouselDesignTokens, CarouselTokenSections } from '@primeuix/themes/types/carousel';

export const root: CarouselTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const content: CarouselTokenSections.Content = {
    gap: '0.25rem'
};

export const indicatorList: CarouselTokenSections.IndicatorList = {
    padding: '0.875rem',
    gap: '0.5rem'
};

export const indicator: CarouselTokenSections.Indicator = {
    width: '0.875rem',
    height: '0.875rem',
    borderRadius: '50',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    },
    background: 'light-dark({surface.200}, {surface.700})',
    hoverBackground: 'light-dark({surface.300}, {surface.600})',
    activeBackground: '{primary.color}'
};

export default {
    root,
    content,
    indicatorList,
    indicator
} satisfies CarouselDesignTokens;
