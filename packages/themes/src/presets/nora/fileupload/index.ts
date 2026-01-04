import type { FileUploadDesignTokens, FileUploadTokenSections } from '@primeuix/themes/types/fileupload';

export const root: FileUploadTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    transitionDuration: '{transition.duration}'
};

export const header: FileUploadTokenSections.Header = {
    background: 'transparent',
    color: '{text.color}',
    padding: '1rem',
    borderColor: 'unset',
    borderWidth: '0',
    borderRadius: '0',
    gap: '0.5rem'
};

export const content: FileUploadTokenSections.Content = {
    highlightBorderColor: '{primary.color}',
    padding: '0 1rem 1rem 1rem',
    gap: '0.875rem'
};

export const file: FileUploadTokenSections.File = {
    padding: '0.875rem',
    gap: '0.875rem',
    borderColor: '{content.border.color}',
    info: {
        gap: '0.125rem'
    }
};

export const fileName: FileUploadTokenSections.FileName = {
    color: '{text.color}',
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export const fileSize: FileUploadTokenSections.FileSize = {
    color: '{text.muted.color}',
    fontWeight: '{typography.font.weight}',
    fontSize: '0.75rem'
};

export const fileList: FileUploadTokenSections.FileList = {
    gap: '0.5rem'
};

export const progressbar: FileUploadTokenSections.Progressbar = {
    height: '0.25rem'
};

export const basic: FileUploadTokenSections.Basic = {
    gap: '0.5rem'
};

export default {
    root,
    header,
    content,
    file,
    fileName,
    fileSize,
    fileList,
    progressbar,
    basic
} satisfies FileUploadDesignTokens;
