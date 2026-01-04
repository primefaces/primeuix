import type { PanelDesignTokens, PanelTokenSections } from '@primeuix/themes/types/panel';

export const root: PanelTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}'
};

export const header: PanelTokenSections.Header = {
    background: 'transparent',
    color: '{text.color}',
    padding: '1rem',
    borderWidth: '0 0 1px 0',
    borderColor: '{content.border.color}',
    borderRadius: '0'
};

export const toggleableHeader: PanelTokenSections.ToggleableHeader = {
    padding: '0.375rem 1rem'
};

export const title: PanelTokenSections.Title = {
    fontWeight: '700',
    fontSize: '{typography.font.size}'
};

export const content: PanelTokenSections.Content = {
    padding: '1rem'
};

export const footer: PanelTokenSections.Footer = {
    padding: '0 1rem 1rem 1rem'
};

export default {
    root,
    header,
    toggleableHeader,
    title,
    content,
    footer
} satisfies PanelDesignTokens;
