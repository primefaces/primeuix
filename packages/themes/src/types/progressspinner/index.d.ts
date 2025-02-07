/**
 *
 * ProgressSpinner Design Tokens
 *
 * @module progressspinner
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace ProgressSpinnerTokenSections {
    interface Root {
        /**
         * Color one of root
         *
         * @designToken progressspinner.color.one
         */
        colorOne?: string;
        /**
         * Color two of root
         *
         * @designToken progressspinner.color.two
         */
        colorTwo?: string;
        /**
         * Color three of root
         *
         * @designToken progressspinner.color.three
         */
        colorThree?: string;
        /**
         * Color four of root
         *
         * @designToken progressspinner.color.four
         */
        colorFour?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<ProgressSpinnerDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface ProgressSpinnerDesignTokens extends DesignTokens<ProgressSpinnerDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: ProgressSpinnerTokenSections.Root;
}
