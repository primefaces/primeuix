import type { TooltipDesignTokens, TooltipTokenSections } from '@primeuix/themes/types/tooltip';

export const root: TooltipTokenSections.Root = {
    maxWidth: '12.5rem',
    gutter: '0.25rem',
    shadow: '{overlay.popover.shadow}',
    padding: '0.625rem 0.75rem',
    borderRadius: '{overlay.popover.border.radius}',
    fontWeight: '{typography.font.weight}',
    fontSize: '0.75rem',
    background: '{surface.700}',
    color: '{surface.0}'
};

export default {
    root
} satisfies TooltipDesignTokens;
