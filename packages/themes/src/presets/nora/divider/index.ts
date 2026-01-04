import type { DividerDesignTokens, DividerTokenSections } from '@primeuix/themes/types/divider';

export const root: DividerTokenSections.Root = {
    borderColor: '{content.border.color}'
};

export const content: DividerTokenSections.Content = {
    background: '{content.background}',
    color: '{text.color}'
};

export const horizontal: DividerTokenSections.Horizontal = {
    margin: '0.875rem 0',
    padding: '0 0.875rem',
    content: {
        padding: '0 0.375rem'
    }
};

export const vertical: DividerTokenSections.Vertical = {
    margin: '0 0.875rem',
    padding: '0.375rem 0',
    content: {
        padding: '0.375rem 0'
    }
};

export default {
    root,
    content,
    horizontal,
    vertical
} satisfies DividerDesignTokens;
