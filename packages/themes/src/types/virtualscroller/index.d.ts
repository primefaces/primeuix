/**
 *
 * VirtualScroller Design Tokens
 *
 * @module themes/virtualscroller
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace VirtualScrollerTokenSections {
    interface Loader {
        /**
         * Used to pass tokens of the mask section
         */
        mask?: {
            /**
             * Background of loader mask
             *
             * @designToken virtualscroller.loader.mask.background
             */
            background?: string;
            /**
             * Color of loader mask
             *
             * @designToken virtualscroller.loader.mask.color
             */
            color?: string;
        };
        /**
         * Used to pass tokens of the loader icon section
         */
        icon?: {
            /**
             * Size of the loader icon
             *
             * @designToken virtualscroller.loader.icon.size
             */
            size?: string;
        };
    }

    /* Static Sections */
    type ColorScheme = CS<VirtualScrollerDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface VirtualScrollerDesignTokens extends DesignTokens<VirtualScrollerDesignTokens> {
    /**
     * Used to pass tokens of the loader section
     */
    loader?: VirtualScrollerTokenSections.Loader;
}
