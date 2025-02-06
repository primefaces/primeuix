/**
 *
 * OrderList Design Tokens
 *
 * @module themes/orderlist
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace OrderListTokenSections {
    interface Root {
        /**
         * Gap of root
         *
         * @designToken orderlist.gap
         */
        gap?: string;
    }

    interface Controls {
        /**
         * Gap of controls
         *
         * @designToken orderlist.controls.gap
         */
        gap?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<OrderListDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface OrderListDesignTokens extends DesignTokens<OrderListDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: OrderListTokenSections.Root;
    /**
     * Used to pass tokens of the controls section
     */
    controls?: OrderListTokenSections.Controls;
}
