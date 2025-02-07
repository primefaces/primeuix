/**
 *
 * ScrollPanel Design Tokens
 *
 * @module scrollpanel
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace ScrollPanelTokenSections {
    interface Root {
        /**
         * Transition duration of root
         *
         * @designToken scrollpanel.transition.duration
         */
        transitionDuration?: string;
    }

    interface Bar {
        /**
         * Size of bar
         *
         * @designToken scrollpanel.bar.size
         */
        size?: string;
        /**
         * Border radius of bar
         *
         * @designToken scrollpanel.bar.border.radius
         */
        borderRadius?: string;
        /**
         * Focus ring of bar
         */
        focusRing?: {
            /**
             * Focus ring width of bar
             *
             * @designToken scrollpanel.bar.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of bar
             *
             * @designToken scrollpanel.bar.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of bar
             *
             * @designToken scrollpanel.bar.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of bar
             *
             * @designToken scrollpanel.bar.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of bar
             *
             * @designToken scrollpanel.bar.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Background of bar
         *
         * @designToken scrollpanel.bar.background
         */
        background?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<ScrollPanelDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface ScrollPanelDesignTokens extends DesignTokens<ScrollPanelDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: ScrollPanelTokenSections.Root;
    /**
     * Used to pass tokens of the bar section
     */
    bar?: ScrollPanelTokenSections.Bar;
}
