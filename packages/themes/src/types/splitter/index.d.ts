/**
 *
 * Splitter Design Tokens
 *
 * @module splitter
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace SplitterTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken splitter.background
         */
        background?: string;
        /**
         * Border color of root
         *
         * @designToken splitter.border.color
         */
        borderColor?: string;
        /**
         * Color of root
         *
         * @designToken splitter.color
         */
        color?: string;
        /**
         * Transition duration of root
         *
         * @designToken splitter.transition.duration
         */
        transitionDuration?: string;
    }

    interface Gutter {
        /**
         * Background of gutter
         *
         * @designToken splitter.gutter.background
         */
        background?: string;
    }

    interface Handle {
        /**
         * Size of handle
         *
         * @designToken splitter.handle.size
         */
        size?: string;
        /**
         * Background of handle
         *
         * @designToken splitter.handle.background
         */
        background?: string;
        /**
         * Border radius of handle
         *
         * @designToken splitter.handle.border.radius
         */
        borderRadius?: string;
        /**
         * Focus ring of handle
         */
        focusRing?: {
            /**
             * Focus ring width of handle
             *
             * @designToken splitter.handle.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of handle
             *
             * @designToken splitter.handle.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of handle
             *
             * @designToken splitter.handle.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of handle
             *
             * @designToken splitter.handle.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of handle
             *
             * @designToken splitter.handle.focus.ring.shadow
             */
            shadow?: string;
        };
    }

    /* Static Sections */
    type ColorScheme = CS<SplitterDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface SplitterDesignTokens extends DesignTokens<SplitterDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: SplitterTokenSections.Root;
    /**
     * Used to pass tokens of the gutter section
     */
    gutter?: SplitterTokenSections.Gutter;
    /**
     * Used to pass tokens of the handle section
     */
    handle?: SplitterTokenSections.Handle;
}
