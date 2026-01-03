import type { ChipDesignTokens, ChipTokenSections } from '@primeuix/themes/types/chip';

export const root: ChipTokenSections.Root = {
    borderRadius: '16px',
    paddingX: '0.75rem',
    paddingY: '0.5rem',
    gap: '0.5rem',
    transitionDuration: '{transition.duration}',
    background: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.900}, {surface.0})'
};

export const image: ChipTokenSections.Image = {
    width: '2rem',
    height: '2rem'
};

export const icon: ChipTokenSections.Icon = {
    size: '1rem',
    color: 'light-dark({surface.900}, {surface.0})'
};

export const label: ChipTokenSections.Label = {
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export const removeIcon: ChipTokenSections.RemoveIcon = {
    size: '1rem',
    color: 'light-dark({surface.900}, {surface.0})',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    }
};

export default {
    root,
    image,
    icon,
    label,
    removeIcon
} satisfies ChipDesignTokens;
