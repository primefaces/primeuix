import type { ChipDesignTokens, ChipTokenSections } from '@primeuix/themes/types/chip';

export const root: ChipTokenSections.Root = {
    borderRadius: '1rem',
    paddingX: '0.625rem',
    paddingY: '0.375rem',
    gap: '0.375rem',
    transitionDuration: '{transition.duration}',
    background: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.900}, {surface.0})'
};

export const image: ChipTokenSections.Image = {
    width: '1.75rem',
    height: '1.75rem'
};

export const icon: ChipTokenSections.Icon = {
    size: '0.875rem',
    color: 'light-dark({surface.900}, {surface.0})'
};

export const label: ChipTokenSections.Label = {
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export const removeIcon: ChipTokenSections.RemoveIcon = {
    size: '0.875rem',
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
