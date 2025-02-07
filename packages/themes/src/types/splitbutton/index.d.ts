/**
 *
 * SplitButton Design Tokens
 *
 * @module splitbutton
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace SplitButtonTokenSections {
    interface Root {
        /**
         * Border radius of root
         *
         * @designToken splitbutton.border.radius
         */
        borderRadius?: string;
        /**
         * Rounded border radius of root
         *
         * @designToken splitbutton.rounded.border.radius
         */
        roundedBorderRadius?: string;
        /**
         * Raised shadow of root
         *
         * @designToken splitbutton.raised.shadow
         */
        raisedShadow?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<SplitButtonDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface SplitButtonDesignTokens extends DesignTokens<SplitButtonDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: SplitButtonTokenSections.Root;
}
