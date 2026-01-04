import type { AutoCompleteDesignTokens, AutoCompleteTokenSections } from '@primeuix/themes/types/autocomplete';

export const root: AutoCompleteTokenSections.Root = {
    background: '{form.field.background}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    filledHoverBackground: '{form.field.filled.hover.background}',
    filledFocusBackground: '{form.field.filled.focus.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.focus.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    color: '{form.field.color}',
    disabledColor: '{form.field.disabled.color}',
    placeholderColor: '{form.field.placeholder.color}',
    invalidPlaceholderColor: '{form.field.invalid.placeholder.color}',
    shadow: '{form.field.shadow}',
    paddingX: '{form.field.padding.x}',
    paddingY: '{form.field.padding.y}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}'
};

export const overlay: AutoCompleteTokenSections.Overlay = {
    background: '{overlay.select.background}',
    borderColor: '{overlay.select.border.color}',
    borderRadius: '{overlay.select.border.radius}',
    color: '{overlay.select.color}',
    shadow: '{overlay.select.shadow}'
};

export const list: AutoCompleteTokenSections.List = {
    padding: '{list.padding}',
    gap: '{list.gap}'
};

export const option: AutoCompleteTokenSections.Option = {
    focusBackground: '{list.option.focus.background}',
    selectedBackground: '{list.option.selected.background}',
    selectedFocusBackground: '{list.option.selected.focus.background}',
    color: '{list.option.color}',
    focusColor: '{list.option.focus.color}',
    selectedColor: '{list.option.selected.color}',
    selectedFocusColor: '{list.option.selected.focus.color}',
    padding: '{list.option.padding}',
    borderRadius: '{list.option.border.radius}',
    fontWeight: '{list.option.font.weight}',
    fontSize: '{list.option.font.size}'
};

export const optionGroup: AutoCompleteTokenSections.OptionGroup = {
    background: '{list.option.group.background}',
    color: '{list.option.group.color}',
    fontWeight: '{list.option.group.font.weight}',
    fontSize: '{list.option.group.font.size}',
    padding: '{list.option.group.padding}'
};

export const dropdown: AutoCompleteTokenSections.Dropdown = {
    width: '2.25rem',
    sm: {
        width: '1.75rem'
    },
    lg: {
        width: '2.625rem'
    },
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.border.color}',
    activeBorderColor: '{form.field.border.color}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    },
    background: 'light-dark({surface.50}, {surface.800})',
    hoverBackground: 'light-dark({surface.100}, {surface.700})',
    activeBackground: 'light-dark({surface.200}, {surface.600})',
    color: 'light-dark({surface.600}, {surface.300})',
    hoverColor: 'light-dark({surface.700}, {surface.200})',
    activeColor: 'light-dark({surface.800}, {surface.100})'
};

export const chip: AutoCompleteTokenSections.Chip = {
    borderRadius: '{border.radius.sm}',
    focusBackground: 'light-dark({surface.200}, {surface.700})',
    focusColor: 'light-dark({surface.800}, {surface.0})'
};

export const emptyMessage: AutoCompleteTokenSections.EmptyMessage = {
    padding: '{list.option.padding}'
};

export default {
    root,
    overlay,
    list,
    option,
    optionGroup,
    dropdown,
    chip,
    emptyMessage
} satisfies AutoCompleteDesignTokens;
