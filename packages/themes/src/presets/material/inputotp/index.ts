import type { InputOtpDesignTokens, InputOtpTokenSections } from '@primeuix/themes/types/inputotp';

export const root: InputOtpTokenSections.Root = {
    gap: '0.5rem'
};

export const input: InputOtpTokenSections.Input = {
    width: '2.625rem',
    sm: {
        width: '2.25rem'
    },
    lg: {
        width: '3rem'
    }
};

export const css: InputOtpTokenSections.CSS = /*css*/ ``;

export default {
    root,
    input,
    css
} satisfies InputOtpDesignTokens;
