import type { TooltipDesignTokens, TooltipTokenSections } from '@primeuix/themes/types/tooltip';

export const root: TooltipTokenSections.Root = {
    maxWidth: '12.5rem',
    gutter: '0.25rem',
    shadow: '{overlay.popover.shadow}',
    padding: '0.375rem 0.625rem',
    borderRadius: '{overlay.popover.border.radius}',
    fontWeight: '{typography.font.weight}',
    fontSize: '0.75rem'
};

export const colorScheme: TooltipTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.700}',
            color: '{surface.0}'
        }
    },
    dark: {
        root: {
            background: '{surface.700}',
            color: '{surface.0}'
        }
    }
};

export default {
    root,
    colorScheme
} satisfies TooltipDesignTokens;
