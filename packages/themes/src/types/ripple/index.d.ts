/**
 *
 * Ripple Design Tokens
 *
 * @module ripple
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace RippleTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken ripple.background
         */
        background?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<RippleDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface RippleDesignTokens extends DesignTokens<RippleDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: RippleDesignTokens.Root;
}
