import type { InlineMessageDesignTokens, InlineMessageTokenSections } from '@primeuix/themes/types/inlinemessage';

export const root: InlineMessageTokenSections.Root = {
    padding: '{form.field.padding.y} {form.field.padding.x}',
    borderRadius: '{content.border.radius}',
    gap: '0.5rem'
};

export const text: InlineMessageTokenSections.Text = {
    fontWeight: '700'
};

export const icon: InlineMessageTokenSections.Icon = {
    size: '1rem'
};

export const info: InlineMessageTokenSections.Info = {
    background: 'light-dark({blue.800}, {blue.200})',
    borderColor: 'light-dark({blue.800}, {blue.200})',
    color: 'light-dark({blue.50}, {blue.950})',
    shadow: 'none'
};

export const success: InlineMessageTokenSections.Success = {
    background: 'light-dark({green.800}, {green.200})',
    borderColor: 'light-dark({green.800}, {green.200})',
    color: 'light-dark({green.50}, {green.950})',
    shadow: 'none'
};

export const warn: InlineMessageTokenSections.Warn = {
    background: 'light-dark({yellow.600}, {yellow.200})',
    borderColor: 'light-dark({yellow.600}, {yellow.200})',
    color: 'light-dark({yellow.50}, {yellow.950})',
    shadow: 'none'
};

export const error: InlineMessageTokenSections.Error = {
    background: 'light-dark({red.800}, {red.200})',
    borderColor: 'light-dark({red.800}, {red.200})',
    color: 'light-dark({red.50}, {red.950})',
    shadow: 'none'
};

export const secondary: InlineMessageTokenSections.Secondary = {
    background: 'light-dark({surface.200}, {surface.700})',
    borderColor: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.700}, {surface.200})',
    shadow: 'none'
};

export const contrast: InlineMessageTokenSections.Contrast = {
    background: 'light-dark({surface.900}, {surface.0})',
    borderColor: 'light-dark({surface.900}, {surface.0})',
    color: 'light-dark({surface.50}, {surface.950})',
    shadow: 'none'
};

export default {
    root,
    text,
    icon,
    info,
    success,
    warn,
    error,
    secondary,
    contrast
} satisfies InlineMessageDesignTokens;
