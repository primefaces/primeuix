import type { InputOtpDesignTokens, InputOtpTokenSections } from '@primeuix/themes/types/inputotp';

export const root: InputOtpTokenSections.Root = {
    gap: '0.5rem'
};

export const input: InputOtpTokenSections.Input = {
    width: '2.25rem',
    sm: {
        width: '1.75rem'
    },
    lg: {
        width: '2.625rem'
    }
};

export default {
    root,
    input
} satisfies InputOtpDesignTokens;
