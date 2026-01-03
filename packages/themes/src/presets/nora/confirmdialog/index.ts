import type { ConfirmDialogDesignTokens, ConfirmDialogTokenSections } from '@primeuix/themes/types/confirmdialog';

export const icon: ConfirmDialogTokenSections.Icon = {
    size: '2rem',
    color: '{overlay.modal.color}'
};

export const content: ConfirmDialogTokenSections.Content = {
    gap: '1rem'
};

export const message: ConfirmDialogTokenSections.Message = {
    color: '{content.color}',
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export default {
    icon,
    message,
    content
} satisfies ConfirmDialogDesignTokens;
