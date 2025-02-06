/**
 *
 * OverlayBadge Design Tokens
 *
 * @module themes/overlaybadge
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace OverlayBadgeTokenSections {
    interface Root {
        /**
         * Outline of root
         */
        outline?: {
            /**
             * Outline width of root
             *
             * @designToken overlaybadge.outline.width
             */
            width?: string;
            /**
             * Outline color of root
             *
             * @designToken overlaybadge.outline.color
             */
            color?: string;
        };
    }

    /* Static Sections */
    type ColorScheme = CS<OverlayBadgeDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface OverlayBadgeDesignTokens extends DesignTokens<OverlayBadgeDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: OverlayBadgeTokenSections.Root;
}
