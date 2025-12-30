import type { ConfirmDialogDesignTokens, ConfirmDialogTokenSections } from '@primeuix/themes/types/confirmdialog';

export const icon: ConfirmDialogTokenSections.Icon = {
    size: '1.5rem',
    color: '{overlay.modal.color}'
};

export const content: ConfirmDialogTokenSections.Content = {
    gap: '0.875rem'
};

export const message: ConfirmDialogTokenSections.Message = {
    color: '{content.color}',
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export default {
    icon,
    content,
    message
} satisfies ConfirmDialogDesignTokens;
