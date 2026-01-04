import type { InlineMessageDesignTokens, InlineMessageTokenSections } from '@primeuix/themes/types/inlinemessage';

export const root: InlineMessageTokenSections.Root = {
    padding: '{form.field.padding.y} {form.field.padding.x}',
    borderRadius: '{content.border.radius}',
    gap: '0.5rem'
};

export const text: InlineMessageTokenSections.Text = {
    fontWeight: '500'
};

export const icon: InlineMessageTokenSections.Icon = {
    size: '0.875rem'
};

export const info: InlineMessageTokenSections.Info = {
    background: 'light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))',
    borderColor: 'light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))',
    color: 'light-dark({blue.600}, {blue.500})',
    shadow: '0px 4px 8px 0px light-dark(color-mix(in srgb, {blue.500}, transparent 96%), color-mix(in srgb, {blue.500}, transparent 96%))'
};

export const success: InlineMessageTokenSections.Success = {
    background: 'light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))',
    borderColor: 'light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))',
    color: 'light-dark({green.600}, {green.500})',
    shadow: '0px 4px 8px 0px light-dark(color-mix(in srgb, {green.500}, transparent 96%), color-mix(in srgb, {green.500}, transparent 96%))'
};

export const warn: InlineMessageTokenSections.Warn = {
    background: 'light-dark(color-mix(in srgb,{yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))',
    borderColor: 'light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))',
    color: 'light-dark({yellow.600}, {yellow.500})',
    shadow: '0px 4px 8px 0px light-dark(color-mix(in srgb, {yellow.500}, transparent 96%), color-mix(in srgb, {yellow.500}, transparent 96%))'
};

export const error: InlineMessageTokenSections.Error = {
    background: 'light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))',
    borderColor: 'light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))',
    color: 'light-dark({red.600}, {red.500})',
    shadow: '0px 4px 8px 0px light-dark(color-mix(in srgb, {red.500}, transparent 96%), color-mix(in srgb, {red.500}, transparent 96%))'
};

export const secondary: InlineMessageTokenSections.Secondary = {
    background: 'light-dark({surface.100}, {surface.800})',
    borderColor: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.600}, {surface.300})',
    shadow: '0px 4px 8px 0px light-dark(color-mix(in srgb, {surface.500}, transparent 96%), color-mix(in srgb, {surface.500}, transparent 96%))'
};

export const contrast: InlineMessageTokenSections.Contrast = {
    background: 'light-dark({surface.900}, {surface.0})',
    borderColor: 'light-dark({surface.950}, {surface.100})',
    color: 'light-dark({surface.50}, {surface.950})',
    shadow: '0px 4px 8px 0px light-dark(color-mix(in srgb, {surface.950}, transparent 96%), color-mix(in srgb, {surface.950}, transparent 96%))'
};

export const css: InlineMessageTokenSections.CSS = /*css*/ ``;

export default {
    root,
    text,
    icon,
    info,
    success,
    warn,
    error,
    secondary,
    contrast,
    css
} satisfies InlineMessageDesignTokens;
