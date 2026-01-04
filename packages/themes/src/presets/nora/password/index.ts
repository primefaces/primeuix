import type { PasswordDesignTokens, PasswordTokenSections } from '@primeuix/themes/types/password';

export const meter: PasswordTokenSections.Meter = {
    borderRadius: '{content.border.radius}',
    background: 'light-dark({surface.300}, {surface.600})',
    height: '0.625rem'
};

export const icon: PasswordTokenSections.Icon = {
    color: '{form.field.icon.color}'
};

export const overlay: PasswordTokenSections.Overlay = {
    background: '{overlay.popover.background}',
    borderColor: '{overlay.popover.border.color}',
    borderRadius: '{overlay.popover.border.radius}',
    color: '{overlay.popover.color}',
    padding: '{overlay.popover.padding}',
    shadow: '{overlay.popover.shadow}'
};

export const content: PasswordTokenSections.Content = {
    gap: '0.5rem'
};

export const meterText: PasswordTokenSections.MeterText = {
    fontSize: '{typography.font.size}',
    fontWeight: '{typography.font.weight}'
};

export const strength: PasswordTokenSections.Strength = {
    weakBackground: 'light-dark({red.600}, {red.500})',
    mediumBackground: 'light-dark({yellow.600}, {yellow.500})',
    strongBackground: 'light-dark({green.600}, {green.500})'
};

export default {
    meter,
    icon,
    overlay,
    content,
    meterText,
    strength
} satisfies PasswordDesignTokens;
