import type { FieldsetDesignTokens, FieldsetTokenSections } from '@primeuix/themes/types/fieldset';

export const root: FieldsetTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    color: '{content.color}',
    padding: '0.625rem 1rem 1rem 1rem',
    transitionDuration: '{transition.duration}'
};

export const legend: FieldsetTokenSections.Legend = {
    background: '{content.background}',
    hoverBackground: '{content.hover.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    borderRadius: '{content.border.radius}',
    borderWidth: '1px',
    borderColor: '{content.border.color}',
    padding: '.375rem 0.625rem',
    gap: '0.5rem',
    fontWeight: '700',
    fontSize: '{typography.font.size}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const toggleIcon: FieldsetTokenSections.ToggleIcon = {
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}'
};

export const content: FieldsetTokenSections.Content = {
    padding: '0'
};

export default {
    root,
    legend,
    toggleIcon,
    content
} satisfies FieldsetDesignTokens;
