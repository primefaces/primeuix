import type { PanelDesignTokens, PanelTokenSections } from '@primeuix/themes/types/panel';

export const root: PanelTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    color: '{content.color}'
};

export const header: PanelTokenSections.Header = {
    background: 'light-dark({surface.50}, {surface.800})',
    color: '{text.color}',
    borderWidth: '0 0 1px 0',
    borderColor: '{content.border.color}',
    padding: '1rem',
    borderRadius: '5px 5px 0 0'
};

export const toggleableHeader: PanelTokenSections.ToggleableHeader = {
    padding: '0.25rem 1rem'
};

export const title: PanelTokenSections.Title = {
    fontWeight: '700',
    fontSize: '{typography.font.size}'
};

export const content: PanelTokenSections.Content = {
    padding: '1rem'
};

export const footer: PanelTokenSections.Footer = {
    padding: '1rem'
};

export default {
    root,
    header,
    toggleableHeader,
    title,
    content,
    footer
} satisfies PanelDesignTokens;
