/**
 *
 * ImageCompare Design Tokens
 *
 * @module imagecompare
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace ImageCompareTokenSections {
    interface Handle {
        /**
         * Size of handle
         *
         * @designToken imagecompare.handle.size
         */
        size?: string;
        /**
         * Hover size of handle
         *
         * @designToken imagecompare.handle.hover.size
         */
        hoverSize?: string;
        /**
         * Background of handle
         *
         * @designToken imagecompare.handle.background
         */
        background?: string;
        /**
         * Hover background of handle
         *
         * @designToken imagecompare.handle.hover.background
         */
        hoverBackground?: string;
        /**
         * Border color of handle
         *
         * @designToken imagecompare.handle.border.color
         */
        borderColor?: string;
        /**
         * Hover border color of handle
         *
         * @designToken imagecompare.handle.hover.border.color
         */
        hoverBorderColor?: string;
        /**
         * Border width of handle
         *
         * @designToken imagecompare.handle.border.width
         */
        borderWidth?: string;
        /**
         * Border radius of handle
         *
         * @designToken imagecompare.handle.border.radius
         */
        borderRadius?: string;
        /**
         * Transition duration of handle
         *
         * @designToken imagecompare.handle.transition.duration
         */
        transitionDuration?: string;
        /**
         * Focus ring of handle
         */
        focusRing?: {
            /**
             * Focus ring width of handle
             *
             * @designToken imagecompare.handle.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of handle
             *
             * @designToken imagecompare.handle.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of handle
             *
             * @designToken imagecompare.handle.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of handle
             *
             * @designToken imagecompare.handle.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of handle
             *
             * @designToken imagecompare.handle.focus.ring.shadow
             */
            shadow?: string;
        };
    }

    /* Static Sections */
    type ColorScheme = CS<ImageCompareDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface ImageCompareDesignTokens extends DesignTokens<ImageCompareDesignTokens> {
    /**
     * Used to pass tokens of the handle section
     */
    handle?: ImageCompareTokenSections.Handle;
}
