import type { ToolbarDesignTokens, ToolbarTokenSections } from '@primeuix/themes/types/toolbar';

export const root: ToolbarTokenSections.Root = {
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    gap: '0.5rem',
    padding: '0.875rem',
    background: 'light-dark({surface.100}, {surface.800})',
    borderColor: 'light-dark({surface.100}, {surface.800})'
};

export const css: ToolbarTokenSections.CSS = /*css*/ ``;

export default {
    root,
    css
} satisfies ToolbarDesignTokens;
