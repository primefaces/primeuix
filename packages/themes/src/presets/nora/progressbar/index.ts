import type { ProgressBarDesignTokens, ProgressBarTokenSections } from '@primeuix/themes/types/progressbar';

export const root: ProgressBarTokenSections.Root = {
    borderRadius: '{content.border.radius}',
    height: '1.25rem',
    background: 'light-dark({surface.300}, {surface.600})'
};

export const value: ProgressBarTokenSections.Value = {
    background: '{primary.color}'
};

export const label: ProgressBarTokenSections.Label = {
    color: '{primary.contrast.color}',
    fontSize: '0.75rem',
    fontWeight: '700'
};

export default {
    root,
    value,
    label
} satisfies ProgressBarDesignTokens;
