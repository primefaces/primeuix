import type { PasswordDesignTokens, PasswordTokenSections } from '@primeuix/themes/types/password';

export const meter: PasswordTokenSections.Meter = {
    background: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    height: '.625rem'
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
    weakBackground: 'light-dark({red.500}, {red.400})',
    mediumBackground: 'light-dark({amber.500}, {amber.400})',
    strongBackground: 'light-dark({green.500}, {green.400})'
};

export default {
    meter,
    icon,
    overlay,
    content,
    meterText,
    strength
} satisfies PasswordDesignTokens;
