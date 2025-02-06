/**
 *
 * BlockUI Design Tokens
 *
 * @module themes/blockui
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace BlockUITokenSections {
    interface Root {
        /**
         * Border radius of root
         *
         * @designToken blockui.border.radius
         */
        borderRadius?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<BlockUIDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface BlockUIDesignTokens extends DesignTokens<BlockUIDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: BlockUITokenSections.Root;
}
