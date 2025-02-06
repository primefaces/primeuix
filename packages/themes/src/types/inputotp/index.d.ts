/**
 *
 * InputOTP Design Tokens
 *
 * @module themes/inputotp
 *
 */
import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace InputOtpTokenSections {
    interface Root {
        /**
         * Gap of root
         *
         * @designToken inputotp.gap
         */
        gap?: string;
    }

    interface Input {
        /**
         * Width of input
         *
         * @designToken inputotp.input.width
         */
        width?: string;
        /**
         * Used to pass tokens of the input section for small screens.
         */
        sm?: {
            /**
             * Width of input in small screens
             *
             * @designToken inputotp.input.sm.width
             */
            width?: string;
        };
        /**
         * Used to pass tokens of the input section for small screens.
         */
        lg?: {
            /**
             * Width of input in large screens
             *
             * @designToken inputotp.input.lg.width
             */
            width?: string;
        };
    }

    /* Static Sections */
    type ColorScheme = CS<InputOtpDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface InputOtpDesignTokens extends DesignTokens<InputOtpDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: InputOtpTokenSections.Root;
    /**
     * Used to pass tokens of the input section
     */
    input?: InputOtpTokenSections.Input;
}
