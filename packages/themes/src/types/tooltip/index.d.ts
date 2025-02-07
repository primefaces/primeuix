/**
 *
 * Tooltip Design Tokens
 *
 * @module tooltip
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace TooltipTokenSections {
    interface Root {
        /**
         * Max width of root
         *
         * @designToken tooltip.max.width
         */
        maxWidth?: string;
        /**
         * Gutter of root
         *
         * @designToken tooltip.gutter
         */
        gutter?: string;
        /**
         * Shadow of root
         *
         * @designToken tooltip.shadow
         */
        shadow?: string;
        /**
         * Padding of root
         *
         * @designToken tooltip.padding
         */
        padding?: string;
        /**
         * Border radius of root
         *
         * @designToken tooltip.border.radius
         */
        borderRadius?: string;
        /**
         * Background of root
         *
         * @designToken tooltip.background
         */
        background?: string;
        /**
         * Color of root
         *
         * @designToken tooltip.color
         */
        color?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<TooltipDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface TooltipDesignTokens extends DesignTokens<TooltipDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: TooltipTokenSections.Root;
}
