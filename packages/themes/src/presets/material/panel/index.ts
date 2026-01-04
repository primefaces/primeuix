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
    padding: '1.125rem',
    borderColor: '{content.border.color}',
    borderWidth: '0',
    borderRadius: '0'
};

export const toggleableHeader: PanelTokenSections.ToggleableHeader = {
    padding: '0.5rem 1.125rem'
};

export const title: PanelTokenSections.Title = {
    fontWeight: '600',
    fontSize: '{typography.font.size}'
};

export const content: PanelTokenSections.Content = {
    padding: '0 1.125rem 1.125rem 1.125rem'
};

export const footer: PanelTokenSections.Footer = {
    padding: '0 1.125rem 1.125rem 1.125rem'
};

export const css: PanelTokenSections.CSS = /*css*/ ``;

export default {
    root,
    header,
    toggleableHeader,
    title,
    content,
    footer,
    css
} satisfies PanelDesignTokens;
