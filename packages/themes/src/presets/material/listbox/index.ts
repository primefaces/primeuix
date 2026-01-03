import type { ListboxDesignTokens, ListboxTokenSections } from '@primeuix/themes/types/listbox';

export const root: ListboxTokenSections.Root = {
    background: '{form.field.background}',
    disabledBackground: '{form.field.disabled.background}',
    borderColor: '{form.field.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    color: '{form.field.color}',
    disabledColor: '{form.field.disabled.color}',
    shadow: '{form.field.shadow}',
    borderRadius: '{form.field.border.radius}',
    transitionDuration: '{form.field.transition.duration}'
};

export const list: ListboxTokenSections.List = {
    padding: '{list.padding}',
    gap: '{list.gap}',
    header: {
        padding: '{list.header.padding}'
    }
};

export const option: ListboxTokenSections.Option = {
    fontWeight: '{list.option.font.weight}',
    fontSize: '{list.option.font.size}',
    focusBackground: '{list.option.focus.background}',
    selectedBackground: '{list.option.selected.background}',
    selectedFocusBackground: '{list.option.selected.focus.background}',
    color: '{list.option.color}',
    focusColor: '{list.option.focus.color}',
    selectedColor: '{list.option.selected.color}',
    selectedFocusColor: '{list.option.selected.focus.color}',
    selectedFontWeight: '{list.option.selected.font.weight}',
    padding: '{list.option.padding}',
    borderRadius: '{list.option.border.radius}',
    stripedBackground: 'light-dark({surface.50}, {surface.900})'
};

export const optionGroup: ListboxTokenSections.OptionGroup = {
    background: '{list.option.group.background}',
    color: '{list.option.group.color}',
    fontWeight: '{list.option.group.font.weight}',
    padding: '{list.option.group.padding}',
    fontSize: '{list.option.group.font.size}'
};

export const checkmark: ListboxTokenSections.Checkmark = {
    color: '{list.option.color}',
    gutterStart: '-0.375rem',
    gutterEnd: '0.375rem'
};

export const emptyMessage: ListboxTokenSections.EmptyMessage = {
    padding: '{list.option.padding}'
};

export const css: ListboxTokenSections.CSS = /*css*/ `
.p-listbox-option {
    transition: none;
}
`;

export default {
    root,
    list,
    option,
    optionGroup,
    checkmark,
    emptyMessage,
    css
} satisfies ListboxDesignTokens;
