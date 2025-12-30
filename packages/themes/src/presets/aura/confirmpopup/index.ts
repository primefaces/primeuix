import type { ConfirmPopupDesignTokens, ConfirmPopupTokenSections } from '@primeuix/themes/types/confirmpopup';

export const root: ConfirmPopupTokenSections.Root = {
    background: '{overlay.popover.background}',
    borderColor: '{overlay.popover.border.color}',
    color: '{overlay.popover.color}',
    borderRadius: '{overlay.popover.border.radius}',
    shadow: '{overlay.popover.shadow}',
    gutter: '10px',
    arrowOffset: '1.125rem'
};

export const content: ConfirmPopupTokenSections.Content = {
    padding: '{overlay.popover.padding}',
    gap: '0.5rem'
};

export const icon: ConfirmPopupTokenSections.Icon = {
    size: '1.25rem',
    color: '{overlay.popover.color}'
};

export const message: ConfirmPopupTokenSections.Message = {
    color: '{content.color}',
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export const footer: ConfirmPopupTokenSections.Footer = {
    gap: '0.375rem',
    padding: '0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}'
};

export default {
    root,
    content,
    icon,
    message,
    footer
} satisfies ConfirmPopupDesignTokens;
