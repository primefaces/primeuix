import type { AvatarDesignTokens, AvatarTokenSections } from '@primeuix/themes/types/avatar';

export const root: AvatarTokenSections.Root = {
    width: '1.75rem',
    height: '1.75rem',
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}',
    background: '{content.hover.background}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}'
};

export const icon: AvatarTokenSections.Icon = {
    size: '0.875rem'
};

export const group: AvatarTokenSections.Group = {
    borderColor: '{content.background}',
    offset: '-0.625rem'
};

export const lg: AvatarTokenSections.Lg = {
    width: '2.625rem',
    height: '2.625rem',
    fontSize: '1.25rem',
    icon: {
        size: '1.25rem'
    },
    group: {
        offset: '-0.875rem'
    }
};

export const xl: AvatarTokenSections.Xl = {
    width: '3.5rem',
    height: '3.5rem',
    fontSize: '1.75rem',
    icon: {
        size: '1.75rem'
    },
    group: {
        offset: '-1.25rem'
    }
};

export default {
    root,
    icon,
    group,
    lg,
    xl
} satisfies AvatarDesignTokens;
