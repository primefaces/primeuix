/**
 *
 * SpeedDial Design Tokens
 *
 * @module themes/speeddial
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace SpeedDialTokenSections {
    interface Root {
        /**
         * Gap of root
         *
         * @designToken speeddial.gap
         */
        gap?: string;
        /**
         * Transition duration of root
         *
         * @designToken speeddial.transition.duration
         */
        transitionDuration?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<SpeedDialDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface SpeedDialDesignTokens extends DesignTokens<SpeedDialDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: SpeedDialTokenSections.Root;
}
