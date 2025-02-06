/**
 *
 * ConfirmDialog Design Tokens
 *
 * @module themes/confirmdialog
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace ConfirmDialogTokenSections {
    interface Icon {
        /**
         * Size of icon
         *
         * @designToken confirmdialog.icon.size
         */
        size?: string;
        /**
         * Color of icon
         *
         * @designToken confirmdialog.icon.color
         */
        color?: string;
    }

    interface Content {
        /**
         * Gap of content
         *
         * @designToken confirmdialog.content.gap
         */
        gap?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<ConfirmDialogDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface ConfirmDialogDesignTokens extends DesignTokens<ConfirmDialogDesignTokens> {
    /**
     * Used to pass tokens of the icon section
     */
    icon?: ConfirmDialogTokenSections.Icon;
    /**
     * Used to pass tokens of the content section
     */
    content?: ConfirmDialogTokenSections.Content;
}
