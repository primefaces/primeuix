import type { ChipDesignTokens, ChipTokenSections } from '@primeuix/themes/types/chip';

export const root: ChipTokenSections.Root = {
    borderRadius: '16px',
    paddingX: '0.875rem',
    paddingY: '0.625rem',
    gap: '0.5rem',
    transitionDuration: '{transition.duration}',
    background: 'light-dark({surface.100}, {surface.800})',
    color: 'light-dark({surface.800}, {surface.0})'
};

export const image: ChipTokenSections.Image = {
    width: '2rem',
    height: '2rem'
};

export const icon: ChipTokenSections.Icon = {
    size: '1rem',
    color: 'light-dark({surface.800}, {surface.0})'
};

export const removeIcon: ChipTokenSections.RemoveIcon = {
    size: '1rem',
    color: 'light-dark({surface.800}, {surface.0})',
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
    image,
    icon,
    removeIcon
} satisfies ChipDesignTokens;
