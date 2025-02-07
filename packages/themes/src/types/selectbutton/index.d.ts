/**
 *
 * SelectButton Design Tokens
 *
 * @module selectbutton
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace SelectButtonTokenSections {
    interface Root {
        /**
         * Border radius of root
         *
         * @designToken selectbutton.border.radius
         */
        borderRadius?: string;
        /**
         * Invalid border color of root
         *
         * @designToken selectbutton.invalid.border.color
         */
        invalidBorderColor?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<SelectButtonDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface SelectButtonDesignTokens extends DesignTokens<SelectButtonDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: SelectButtonTokenSections.Root;
}
