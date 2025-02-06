/**
 *
 * IconField Design Tokens
 *
 * @module themes/iconfield
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace IconFieldTokenSections {
    interface Icon {
        /**
         * Color of icon
         *
         * @designToken iconfield.icon.color
         */
        color?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<IconFieldDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface IconFieldDesignTokens extends DesignTokens<IconFieldDesignTokens> {
    /**
     * Used to pass tokens of the icon section
     */
    icon?: IconFieldTokenSections.Icon;
}
