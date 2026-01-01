import type { GalleriaDesignTokens, GalleriaTokenSections } from '@primeuix/themes/types/galleria';

export const root: GalleriaTokenSections.Root = {
    borderWidth: '1px',
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    transitionDuration: '{transition.duration}'
};

export const navButton: GalleriaTokenSections.NavButton = {
    background: 'rgba(255, 255, 255, 0.1)',
    hoverBackground: 'rgba(255, 255, 255, 0.2)',
    color: '{surface.100}',
    hoverColor: '{surface.0}',
    size: '2.625rem',
    gutter: '0.5rem',
    prev: {
        borderRadius: '50%'
    },
    next: {
        borderRadius: '50%'
    },
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const navIcon: GalleriaTokenSections.NavIcon = {
    size: '1.25rem'
};

export const thumbnailsContent: GalleriaTokenSections.ThumbnailsContent = {
    background: '{content.background}',
    padding: '0.875rem 0.25rem'
};

export const thumbnailNavButton: GalleriaTokenSections.ThumbnailNavButton = {
    size: '1.75rem',
    borderRadius: '{content.border.radius}',
    gutter: '0.5rem',
    hoverBackground: 'light-dark({surface.100}, {surface.700})',
    color: 'light-dark({surface.600}, {surface.400})',
    hoverColor: 'light-dark({surface.700}, {surface.0})',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const thumbnailNavButtonIcon: GalleriaTokenSections.ThumbnailNavButtonIcon = {
    size: '0.875rem'
};

export const caption: GalleriaTokenSections.Caption = {
    background: 'rgba(0, 0, 0, 0.5)',
    color: '{surface.100}',
    padding: '0.875rem'
};

export const indicatorList: GalleriaTokenSections.IndicatorList = {
    gap: '0.5rem',
    padding: '0.875rem'
};

export const indicatorButton: GalleriaTokenSections.IndicatorButton = {
    width: '0.875rem',
    height: '0.875rem',
    background: 'light-dark({surface.200}, {surface.700})',
    hoverBackground: 'light-dark({surface.300}, {surface.600})',
    activeBackground: '{primary.color}',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const insetIndicatorList: GalleriaTokenSections.InsetIndicatorList = {
    background: 'rgba(0, 0, 0, 0.5)'
};

export const insetIndicatorButton: GalleriaTokenSections.InsetIndicatorButton = {
    background: 'rgba(255, 255, 255, 0.4)',
    hoverBackground: 'rgba(255, 255, 255, 0.6)',
    activeBackground: 'rgba(255, 255, 255, 0.9)'
};

export const closeButton: GalleriaTokenSections.CloseButton = {
    size: '2.625rem',
    gutter: '0.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    hoverBackground: 'rgba(255, 255, 255, 0.2)',
    color: '{surface.50}',
    hoverColor: '{surface.0}',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const closeButtonIcon: GalleriaTokenSections.CloseButtonIcon = {
    size: '1.25rem'
};

export default {
    root,
    navButton,
    navIcon,
    thumbnailsContent,
    thumbnailNavButton,
    thumbnailNavButtonIcon,
    caption,
    indicatorList,
    indicatorButton,
    insetIndicatorList,
    insetIndicatorButton,
    closeButton,
    closeButtonIcon
} satisfies GalleriaDesignTokens;
