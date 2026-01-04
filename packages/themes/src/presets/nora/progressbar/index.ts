import type { ProgressBarDesignTokens, ProgressBarTokenSections } from '@primeuix/themes/types/progressbar';

export const root: ProgressBarTokenSections.Root = {
    borderRadius: '{content.border.radius}',
    background: 'light-dark({surface.300}, {surface.600})',
    height: '1.125rem'
};

export const value: ProgressBarTokenSections.Value = {
    background: '{primary.color}'
};

export const label: ProgressBarTokenSections.Label = {
    color: '{primary.contrast.color}',
    fontSize: '0.625rem',
    fontWeight: '700'
};

export default {
    root,
    value,
    label
} satisfies ProgressBarDesignTokens;
