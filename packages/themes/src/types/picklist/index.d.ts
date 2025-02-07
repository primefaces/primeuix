/**
 *
 * PickList Design Tokens
 *
 * @module picklist
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace PickListTokenSections {
    interface Root {
        /**
         * Gap of root
         *
         * @designToken picklist.gap
         */
        gap?: string;
    }

    interface Controls {
        /**
         * Gap of controls
         *
         * @designToken picklist.controls.gap
         */
        gap?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<PickListDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface PickListDesignTokens extends DesignTokens<PickListDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: PickListTokenSections.Root;
    /**
     * Used to pass tokens of the controls section
     */
    controls?: PickListTokenSections.Controls;
}
