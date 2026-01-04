import type { TooltipDesignTokens, TooltipTokenSections } from '@primeuix/themes/types/tooltip';

export const root: TooltipTokenSections.Root = {
    maxWidth: '10.9375rem',
    gutter: '0.25rem',
    shadow: '{overlay.popover.shadow}',
    padding: '0.5rem 0.625rem',
    borderRadius: '{overlay.popover.border.radius}',
    fontWeight: '{typography.font.weight}',
    fontSize: '0.625rem',
    background: '{surface.700}',
    color: '{surface.0}'
};

export default {
    root
} satisfies TooltipDesignTokens;
