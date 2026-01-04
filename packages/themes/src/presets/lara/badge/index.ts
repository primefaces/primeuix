import type { BadgeDesignTokens, BadgeTokenSections } from '@primeuix/themes/types/badge';

export const root: BadgeTokenSections.Root = {
    borderRadius: '{border.radius.md}',
    padding: '0 0.5rem',
    fontSize: '0.625rem',
    fontWeight: '700',
    minWidth: '1.25rem',
    height: '1.25rem'
};
export const dot: BadgeTokenSections.Dot = {
    size: '0.5rem'
};
export const sm: BadgeTokenSections.Sm = {
    fontSize: '0.5rem',
    minWidth: '1.125rem',
    height: '1.125rem'
};

export const lg: BadgeTokenSections.Lg = {
    fontSize: '0.75rem',
    minWidth: '1.5rem',
    height: '1.5rem'
};

export const xl: BadgeTokenSections.Xl = {
    fontSize: '0.875rem',
    minWidth: '1.75rem',
    height: '1.75rem'
};

export const primary: BadgeTokenSections.Primary = {
    background: '{primary.color}',
    color: '{primary.contrast.color}'
};

export const secondary: BadgeTokenSections.Secondary = {
    background: 'light-dark({surface.100}, {surface.800})',
    color: 'light-dark({surface.600}, {surface.300})'
};

export const success: BadgeTokenSections.Success = {
    background: 'light-dark({green.500}, {green.400})',
    color: 'light-dark({surface.0}, {green.950})'
};

export const info: BadgeTokenSections.Info = {
    background: 'light-dark({sky.500}, {sky.400})',
    color: 'light-dark({surface.0}, {sky.950})'
};

export const warn: BadgeTokenSections.Warn = {
    background: 'light-dark({orange.500}, {orange.400})',
    color: 'light-dark({surface.0}, {orange.950})'
};

export const danger: BadgeTokenSections.Danger = {
    background: 'light-dark({red.500}, {red.400})',
    color: 'light-dark({surface.0}, {red.950})'
};

export const contrast: BadgeTokenSections.Contrast = {
    background: 'light-dark({surface.950}, {surface.0})',
    color: 'light-dark({surface.0}, {surface.950})'
};

export default {
    root,
    dot,
    sm,
    lg,
    xl,
    primary,
    secondary,
    success,
    info,
    warn,
    danger,
    contrast
} satisfies BadgeDesignTokens;
