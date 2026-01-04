import type { TooltipDesignTokens, TooltipTokenSections } from '@primeuix/themes/types/tooltip';

export const root: TooltipTokenSections.Root = {
    maxWidth: '12.5rem',
    gutter: '0.25rem',
    shadow: '{overlay.popover.shadow}',
    padding: '0.375rem 0.625rem',
    borderRadius: '{overlay.popover.border.radius}',
    fontWeight: '{typography.font.weight}',
    fontSize: '0.75rem',
    background: 'light-dark({surface.900}, {surface.0})',
    color: 'light-dark({surface.0}, {surface.900})'
};

export default {
    root
} satisfies TooltipDesignTokens;
