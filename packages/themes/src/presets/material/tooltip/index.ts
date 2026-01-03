import type { TooltipDesignTokens, TooltipTokenSections } from '@primeuix/themes/types/tooltip';

export const root: TooltipTokenSections.Root = {
    maxWidth: '12.5rem',
    gutter: '0.25rem',
    shadow: '{overlay.popover.shadow}',
    padding: '0.5rem 0.75rem',
    borderRadius: '{overlay.popover.border.radius}',
    fontWeight: '{typography.font.weight}',
    fontSize: '0.75rem',
    background: '{surface.600}',
    color: '{surface.0}'
};

export const css: TooltipTokenSections.CSS = /*css*/ ``;

export default {
    root,
    css
} satisfies TooltipDesignTokens;
