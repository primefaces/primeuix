/**
 *
 * Dialog Design Tokens
 *
 * @module themes/dialog
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace DialogTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken dialog.background
         */
        background?: string;
        /**
         * Border color of root
         *
         * @designToken dialog.border.color
         */
        borderColor?: string;
        /**
         * Color of root
         *
         * @designToken dialog.color
         */
        color?: string;
        /**
         * Border radius of root
         *
         * @designToken dialog.border.radius
         */
        borderRadius?: string;
        /**
         * Shadow of root
         *
         * @designToken dialog.shadow
         */
        shadow?: string;
    }

    interface Header {
        /**
         * Padding of header
         *
         * @designToken dialog.header.padding
         */
        padding?: string;
        /**
         * Gap of header
         *
         * @designToken dialog.header.gap
         */
        gap?: string;
    }

    interface Title {
        /**
         * Font size of title
         *
         * @designToken dialog.title.font.size
         */
        fontSize?: string;
        /**
         * Font weight of title
         *
         * @designToken dialog.title.font.weight
         */
        fontWeight?: string;
    }

    interface Content {
        /**
         * Padding of content
         *
         * @designToken dialog.content.padding
         */
        padding?: string;
    }

    interface Footer {
        /**
         * Padding of footer
         *
         * @designToken dialog.footer.padding
         */
        padding?: string;
        /**
         * Gap of footer
         *
         * @designToken dialog.footer.gap
         */
        gap?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<DialogDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface DialogDesignTokens extends DesignTokens<DialogDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: DialogTokenSections.Root;
    /**
     * Used to pass tokens of the header section
     */
    header?: DialogTokenSections.Header;
    /**
     * Used to pass tokens of the title section
     */
    title?: DialogTokenSections.Title;
    /**
     * Used to pass tokens of the content section
     */
    content?: DialogTokenSections.Content;
    /**
     * Used to pass tokens of the footer section
     */
    footer?: DialogTokenSections.Footer;
}
