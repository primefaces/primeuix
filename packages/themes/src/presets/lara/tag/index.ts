import type { TagDesignTokens, TagTokenSections } from '@primeuix/themes/types/tag';

export const root: TagTokenSections.Root = {
    fontSize: '0.875rem',
    fontWeight: '700',
    padding: '0.25rem 0.5rem',
    gap: '0.25rem',
    borderRadius: '{content.border.radius}',
    roundedBorderRadius: '{border.radius.xl}'
};

export const icon: TagTokenSections.Icon = {
    size: '0.75rem'
};

export const primary: TagTokenSections.Primary = {
    background: '{primary.color}',
    color: '{primary.contrast.color}'
};

export const secondary: TagTokenSections.Secondary = {
    background: 'light-dark({surface.100}, {surface.800})',
    color: 'light-dark({surface.600}, {surface.300})'
};

export const success: TagTokenSections.Success = {
    background: 'light-dark({green.500}, {green.400})',
    color: 'light-dark({surface.0}, {green.950})'
};

export const info: TagTokenSections.Info = {
    background: 'light-dark({sky.500}, {sky.400})',
    color: 'light-dark({surface.0}, {sky.950})'
};

export const warn: TagTokenSections.Warn = {
    background: 'light-dark({orange.500}, {orange.400})',
    color: 'light-dark({surface.0}, {orange.950})'
};

export const danger: TagTokenSections.Danger = {
    background: 'light-dark({red.500}, {red.400})',
    color: 'light-dark({surface.0}, {red.950})'
};

export const contrast: TagTokenSections.Contrast = {
    background: 'light-dark({surface.950}, {surface.0})',
    color: 'light-dark({surface.0}, {surface.950})'
};

export default {
    root,
    icon,
    primary,
    secondary,
    success,
    info,
    warn,
    danger,
    contrast
} satisfies TagDesignTokens;
