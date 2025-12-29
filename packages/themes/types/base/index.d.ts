/**
 *
 * Base Design Tokens
 *
 * @module base
 *
 */

import type { ColorScale } from '@primeuix/styled';

import type { ColorScheme as CS, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace BaseTokenSections {
    interface Primitive {
        borderRadius?: {
            none?: string;
            xs?: string;
            sm?: string;
            md?: string;
            lg?: string;
            xl?: string;
        };
        fontSize: {
            xs?: string;
            sm?: string;
            base?: string;
            lg?: string;
            xl?: string;
        };
        emerald?: ColorScale;
        green?: ColorScale;
        lime?: ColorScale;
        red?: ColorScale;
        orange?: ColorScale;
        amber?: ColorScale;
        yellow?: ColorScale;
        teal?: ColorScale;
        cyan?: ColorScale;
        sky?: ColorScale;
        blue?: ColorScale;
        indigo?: ColorScale;
        violet?: ColorScale;
        purple?: ColorScale;
        fuchsia?: ColorScale;
        pink?: ColorScale;
        rose?: ColorScale;
        slate?: ColorScale;
        gray?: ColorScale;
        zinc?: ColorScale;
        neutral?: ColorScale;
        stone?: ColorScale;
    }

    interface Typography {
        lineHeight?: string;
        fontFamily?: string;
        fontWeight?: string;
        fontSize?: string;
    }

    interface Semantic {
        typography?: Typography;
        transitionDuration?: string;
        focusRing?: {
            width?: string;
            style?: string;
            color?: string;
            offset?: string;
            shadow?: string;
        };
        disabledOpacity?: string;
        iconSize?: string;
        anchorGutter?: string;
        primary?:
            | ColorScale
            | {
                  color?: string;
                  contrastColor?: string;
                  hoverColor?: string;
                  activeColor?: string;
              };
        formField?: {
            fontWeight?: string;
            fontSize?: string;
            paddingX?: string;
            paddingY?: string;
            sm?: {
                fontSize?: string;
                paddingX?: string;
                paddingY?: string;
            };
            lg?: {
                fontSize?: string;
                paddingX?: string;
                paddingY?: string;
                typography?: Typography;
            };
            borderRadius?: string;
            focusRing?: {
                width?: string;
                style?: string;
                color?: string;
                offset?: string;
                shadow?: string;
            };
            transitionDuration?: string;
            background?: string;
            disabledBackground?: string;
            filledBackground?: string;
            filledHoverBackground?: string;
            filledFocusBackground?: string;
            borderColor?: string;
            hoverBorderColor?: string;
            focusBorderColor?: string;
            invalidBorderColor?: string;
            color?: string;
            disabledColor?: string;
            placeholderColor?: string;
            invalidPlaceholderColor?: string;
            floatLabelColor?: string;
            floatLabelFocusColor?: string;
            floatLabelActiveColor?: string;
            floatLabelInvalidColor?: string;
            iconColor?: string;
            shadow?: string;
        };
        list?: {
            padding?: string;
            gap?: string;
            header?: {
                padding?: string;
            };
            option?: {
                fontWeight?: string;
                fontSize?: string;
                padding?: string;
                borderRadius?: string;
                focusBackground?: string;
                selectedBackground?: string;
                selectedFocusBackground?: string;
                color?: string;
                focusColor?: string;
                selectedColor?: string;
                selectedFocusColor?: string;
                icon?: {
                    color?: string;
                    focusColor?: string;
                };
            };
            optionGroup?: {
                fontWeight?: string;
                fontSize?: string;
                padding?: string;
                fontWeight?: string;
                background?: string;
                color?: string;
            };
        };
        content?: {
            borderRadius?: string;
            background?: string;
            hoverBackground?: string;
            borderColor?: string;
            color?: string;
            hoverColor?: string;
        };
        mask?: {
            transitionDuration?: string;
            background?: string;
            color?: string;
        };
        navigation?: {
            list?: {
                padding?: string;
                gap?: string;
            };
            item?: {
                padding?: string;
                borderRadius?: string;
                gap?: string;
                focusBackground?: string;
                activeBackground?: string;
                color?: string;
                focusColor?: string;
                activeColor?: string;
                icon?: {
                    color?: string;
                    focusColor?: string;
                    activeColor?: string;
                };
            };
            submenuLabel?: {
                padding?: string;
                fontWeight?: string;
                background?: string;
                color?: string;
            };
            submenuIcon?: {
                size?: string;
                color?: string;
                focusColor?: string;
                activeColor?: string;
            };
        };
        overlay?: {
            select?: {
                borderRadius?: string;
                shadow?: string;
                background?: string;
                borderColor?: string;
                color?: string;
            };
            popover?: {
                borderRadius?: string;
                padding?: string;
                shadow?: string;
                background?: string;
                borderColor?: string;
                color?: string;
            };
            modal?: {
                borderRadius?: string;
                padding?: string;
                shadow?: string;
                background?: string;
                borderColor?: string;
                color?: string;
            };
            navigation?: {
                shadow?: string;
            };
        };
        surface?: ColorScale;
        highlight?: {
            background?: string;
            focusBackground?: string;
            color?: string;
            focusColor?: string;
        };
        text?: {
            color?: string;
            hoverColor?: string;
            mutedColor?: string;
            hoverMutedColor?: string;
        };
        colorScheme?: {
            light?: Omit<Semantic, 'colorScheme'>;
            dark?: Omit<Semantic, 'colorScheme'>;
        };
    }

    /* Static Sections */
    type ColorScheme = CS<BaseDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _Base Design Tokens_
 *
 * @group base
 * @module base
 * @see
 * --- ---
 * **Compatible Libraries**
 *
 * [![PrimeNG](https://i.postimg.cc/63f7jVST/primeng-icon-24.png)](https://primeng.org/theming/styled)
 * [![PrimeVue](https://i.postimg.cc/cC1vVgyh/primevue-icon-24.png)](https://primevue.org/theming/styled)
 * --- ---
 * **Figma UI Kit**
 *
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */
export interface BaseDesignTokens {
    primitive?: BaseTokenSections.Primitive;
    semantic?: BaseTokenSections.Semantic;
}
