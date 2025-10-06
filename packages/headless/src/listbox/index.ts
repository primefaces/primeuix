import { equals, findLastIndex, findSingle, focus, getFirstFocusableElement, isElement, isNotEmpty, isPrintableCharacter, isString, resolveFieldData } from '@primeuix/utils';
import { defineComponent } from '../core';
import { nextFrame } from '../utils';
import type { ListboxEmits, ListboxExpose, ListboxProps, ListboxRefs, ListboxState } from './type';

export const createListbox = defineComponent<ListboxRefs, ListboxProps, ListboxState, ListboxEmits, ListboxExpose>('Listbox', ({ defineRefs, defineProps, defineState, defineEmits, defineExpose, defineLogs }) => {
    const $emit = defineEmits(['value-change', 'focused-change', 'focused-option-index-change']);

    const $refs = defineRefs<ListboxRefs>({
        element: undefined,
        list: undefined,
        firstHiddenFocusable: undefined,
        lastHiddenFocusable: undefined
    });

    const $props = defineProps<ListboxProps>({
        id: undefined,
        options: [],
        optionKey: undefined, // instead of dataKey
        optionLabel: undefined,
        optionValue: undefined,
        optionDisabled: undefined,
        optionGroupLabel: undefined,
        optionGroupChildren: undefined,
        disabled: false,
        locale: undefined, // instead of filterLocale
        selectionMode: 'single',
        selectionType: undefined,
        metaKeySelection: false,
        autoOptionFocus: true,
        selectOnFocus: false,
        focusOnHover: true
    });

    const $state = defineState<ListboxState>({
        value: undefined,
        focused: false,
        focusedOptionIndex: -1
    });

    let optionTouched: boolean = false;
    let startRangeIndex: number = -1;
    let searchTimeout: NodeJS.Timeout | null = null;
    let searchValue: string = '';

    const getOptions = () => {
        return $props.options || [];
    };

    const getOptionId = (index: number) => {
        return `${$props.id}_${index}`;
    };

    const getOptionLabel = (option: any) => {
        return $props.optionLabel ? resolveFieldData(option, $props.optionLabel) : isString(option) ? option : null;
    };

    const getOptionValue = (option: any) => {
        return $props.optionValue ? resolveFieldData(option, $props.optionValue) : option;
    };

    const isOptionDisabled = (option: any) => {
        return $props.optionDisabled ? resolveFieldData(option, $props.optionDisabled) : false;
    };

    const isOptionGroup = (option: any) => {
        return $props.optionGroupLabel && option.optionGroup && option.group;
    };

    const getOptionGroupLabel = (optionGroup: any) => {
        return $props.optionGroupLabel ? resolveFieldData(optionGroup, $props.optionGroupLabel) : isString(optionGroup) ? optionGroup : null;
    };

    const getOptionGroupChildren = (optionGroup: any) => {
        return $props.optionGroupChildren ? resolveFieldData(optionGroup, $props.optionGroupChildren) : null;
    };

    const getFocusedOptionId = () => {
        return $state.focusedOptionIndex !== -1 ? getOptionId($state.focusedOptionIndex!) : null;
    };

    const getAriaSetSize = () => {
        return getOptions().filter((option: any) => !isOptionGroup(option)).length;
    };

    const getAriaPosInset = (index: number) => {
        return (
            ($props.optionGroupLabel
                ? index -
                  (getOptions()
                      .slice(0, index)
                      .filter((option) => isOptionGroup(option)).length || 0)
                : index) + 1
        );
    };

    const onFirstHiddenFocus = () => {
        focus($refs.list!);

        const firstFocusableEl = getFirstFocusableElement($refs.element! as HTMLElement, ':not([data-p-hidden-focusable="true"])');

        $refs.lastHiddenFocusable.tabIndex = isElement(firstFocusableEl) ? undefined : -1;
        $refs.firstHiddenFocusable.tabIndex = -1;
    };

    const onLastHiddenFocus = (event: FocusEvent) => {
        const relatedTarget = event.relatedTarget;

        if (relatedTarget === $refs.list) {
            const firstFocusableEl = getFirstFocusableElement($refs.element as any, ':not([data-p-hidden-focusable="true"])');

            focus(firstFocusableEl as HTMLElement);
            $refs.firstHiddenFocusable.tabIndex = undefined;
        } else {
            focus($refs.firstHiddenFocusable);
        }

        $refs.lastHiddenFocusable.tabIndex = -1;
    };

    const onFocusOut = (event: FocusEvent) => {
        if (!$refs.element.contains(event.relatedTarget) && $refs.lastHiddenFocusable && $refs.firstHiddenFocusable) {
            $refs.lastHiddenFocusable.tabIndex = $refs.firstHiddenFocusable.tabIndex = undefined;
        }
    };

    const onListFocus = () => {
        const focusedOptionIndex = $state.focusedOptionIndex !== -1 ? $state.focusedOptionIndex : $props.autoOptionFocus ? findFirstFocusedOptionIndex() : findSelectedOptionIndex();

        $emit('focused-change', true);
        $emit('focused-option-index-change', focusedOptionIndex);

        autoUpdateModel();
        scrollInView(focusedOptionIndex);
    };

    const onListBlur = (event: FocusEvent) => {
        $emit('focused-change', false);
        $emit('focused-option-index-change', -1);

        startRangeIndex = -1;
        searchValue = '';
    };

    const onListKeyDown = (event: KeyboardEvent) => {
        const metaKey = event.metaKey || event.ctrlKey;

        switch (event.code) {
            case 'ArrowDown':
                onArrowDownKey(event);
                break;

            case 'ArrowUp':
                onArrowUpKey(event);
                break;

            case 'Home':
                onHomeKey(event);
                break;

            case 'End':
                onEndKey(event);
                break;

            case 'PageDown':
                onPageDownKey(event);
                break;

            case 'PageUp':
                onPageUpKey(event);
                break;

            case 'Enter':
            case 'NumpadEnter':
            case 'Space':
                onSpaceKey(event);
                break;

            case 'Tab':
                //NOOP
                break;

            case 'ShiftLeft':
            case 'ShiftRight':
                onShiftKey();
                break;

            default:
                if ($props.selectionMode === 'multiple' && event.code === 'KeyA' && metaKey) {
                    const value = getOptions()
                        .filter((option) => isValidOption(option))
                        .map((option) => getOptionValue(option));

                    updateModel(event, value);

                    event.preventDefault();
                    break;
                }

                if (!metaKey && isPrintableCharacter(event.key)) {
                    searchOptions(event, event.key);
                    event.preventDefault();
                }

                break;
        }
    };

    const onOptionSelect = (event: MouseEvent | KeyboardEvent, option: any, index = -1) => {
        if ($props.disabled || isOptionDisabled(option)) {
            return;
        }

        $props.selectionMode === 'multiple' ? onOptionSelectMultiple(event, option) : onOptionSelectSingle(event, option);
        optionTouched = false;
        index !== -1 && $emit('focused-option-index-change', index);
    };

    const onOptionMouseDown = (event: MouseEvent, index: number) => {
        changeFocusedOptionIndex(event, index);
    };

    const onOptionMouseMove = (event: MouseEvent, index: number) => {
        if ($props.focusOnHover && $state.focused) {
            changeFocusedOptionIndex(event, index);
        }
    };

    const onOptionTouchEnd = () => {
        if ($props.disabled) {
            return;
        }

        optionTouched = true;
    };

    const onOptionSelectSingle = (event: MouseEvent | KeyboardEvent, option: any) => {
        const selected = isSelected(option);
        const metaSelection = optionTouched ? false : $props.metaKeySelection;
        let valueChanged = false;
        let value = null;

        if (metaSelection) {
            const metaKey = event && (event.metaKey || event.ctrlKey);

            if (selected) {
                if (metaKey) {
                    value = null;
                    valueChanged = true;
                }
            } else {
                value = getOptionValue(option);
                valueChanged = true;
            }
        } else {
            value = selected ? null : getOptionValue(option);
            valueChanged = true;
        }

        if (valueChanged) {
            updateModel(event, value);
        }
    };

    const onOptionSelectMultiple = (event: MouseEvent | KeyboardEvent, option: any) => {
        const selected = isSelected(option);
        const metaSelection = optionTouched ? false : $props.metaKeySelection;
        let value = null;

        if (metaSelection) {
            const metaKey = event.metaKey || event.ctrlKey;

            if (selected) {
                value = metaKey ? removeOption(option) : [getOptionValue(option)];
            } else {
                value = metaKey ? $state.value || [] : [];
                value = [...value, getOptionValue(option)];
            }
        } else {
            value = selected ? removeOption(option) : [...($state.value || []), getOptionValue(option)];
        }

        updateModel(event, value);
    };

    const onOptionSelectRange = (event: MouseEvent | KeyboardEvent, start = -1, end = -1) => {
        start === -1 && (start = findNearestSelectedOptionIndex(end, true));
        end === -1 && (end = findNearestSelectedOptionIndex(start));

        if (start !== -1 && end !== -1) {
            const rangeStart = Math.min(start, end);
            const rangeEnd = Math.max(start, end);
            const value = getOptions()
                .slice(rangeStart, rangeEnd + 1)
                .filter((option) => isValidOption(option))
                .map((option) => getOptionValue(option));

            updateModel(event, value);
        }
    };

    const onFilterChange = () => {
        $emit('focused-option-index-change', -1);
        startRangeIndex = -1;
    };

    const onFilterBlur = () => {
        $emit('focused-option-index-change', -1);
        startRangeIndex = -1;
    };

    const onFilterKeyDown = (event: KeyboardEvent) => {
        switch (event.code) {
            case 'ArrowDown':
                onArrowDownKey(event);
                break;

            case 'ArrowUp':
                onArrowUpKey(event);
                break;

            case 'ArrowLeft':
            case 'ArrowRight':
                onArrowLeftKey(event, true);
                break;

            case 'Home':
                onHomeKey(event, true);
                break;

            case 'End':
                onEndKey(event, true);
                break;

            case 'Enter':
            case 'NumpadEnter':
                onEnterKey(event);
                break;

            case 'ShiftLeft':
            case 'ShiftRight':
                onShiftKey();
                break;

            default:
                break;
        }
    };

    const onArrowDownKey = (event: KeyboardEvent) => {
        const optionIndex = $state.focusedOptionIndex !== -1 ? findNextOptionIndex($state.focusedOptionIndex!) : findFirstFocusedOptionIndex();

        if ($props.selectionMode === 'multiple' && event.shiftKey) {
            onOptionSelectRange(event, startRangeIndex, optionIndex);
        }

        changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
    };

    const onArrowUpKey = (event: KeyboardEvent) => {
        const optionIndex = $state.focusedOptionIndex !== -1 ? findPrevOptionIndex($state.focusedOptionIndex!) : findLastFocusedOptionIndex();

        if ($props.selectionMode === 'multiple' && event.shiftKey) {
            onOptionSelectRange(event, optionIndex, startRangeIndex);
        }

        changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
    };

    const onArrowLeftKey = (event: KeyboardEvent, pressedInInputText = false) => {
        pressedInInputText && $emit('focused-option-index-change', -1);
    };

    const onHomeKey = (event: KeyboardEvent, pressedInInputText = false) => {
        if (pressedInInputText) {
            const target = event.currentTarget as HTMLInputElement;

            if (event.shiftKey) {
                target?.setSelectionRange(0, target.selectionStart);
            } else {
                target?.setSelectionRange(0, 0);
                $emit('focused-option-index-change', -1);
            }
        } else {
            const metaKey = event.metaKey || event.ctrlKey;
            const optionIndex = findFirstOptionIndex();

            if ($props.selectionMode === 'multiple' && event.shiftKey && metaKey) {
                onOptionSelectRange(event, optionIndex, startRangeIndex);
            }

            changeFocusedOptionIndex(event, optionIndex);
        }

        event.preventDefault();
    };

    const onEndKey = (event: KeyboardEvent, pressedInInputText = false) => {
        if (pressedInInputText) {
            const target = event.currentTarget as HTMLInputElement;
            const length = target.value.length;

            if (event.shiftKey) {
                target.setSelectionRange(target.selectionStart, length);
            } else {
                target.setSelectionRange(length, length);
                $emit('focused-option-index-change', -1);
            }
        } else {
            const metaKey = event.metaKey || event.ctrlKey;
            const optionIndex = findLastOptionIndex();

            if ($props.selectionMode === 'multiple' && event.shiftKey && metaKey) {
                onOptionSelectRange(event, startRangeIndex, optionIndex);
            }

            changeFocusedOptionIndex(event, optionIndex);
        }

        event.preventDefault();
    };

    const onPageUpKey = (event: KeyboardEvent) => {
        scrollInView(0);
        event.preventDefault();
    };

    const onPageDownKey = (event: KeyboardEvent) => {
        scrollInView(getOptions().length - 1);
        event.preventDefault();
    };

    const onEnterKey = (event: KeyboardEvent) => {
        if ($state.focusedOptionIndex !== -1) {
            if ($props.selectionMode === 'multiple' && event.shiftKey) onOptionSelectRange(event, $state.focusedOptionIndex);
            else onOptionSelect(event, getOptions()[$state.focusedOptionIndex!]);
        }
    };

    const onSpaceKey = (event: KeyboardEvent) => {
        event.preventDefault();
        onEnterKey(event);
    };

    const onShiftKey = () => {
        startRangeIndex = $state.focusedOptionIndex!;
    };

    const isOptionMatched = (option: any) => {
        return isValidOption(option) && isString(getOptionLabel(option)) && getOptionLabel(option)?.toLocaleLowerCase($props.locale).startsWith(searchValue.toLocaleLowerCase($props.locale));
    };

    const isValidOption = (option: any) => {
        return isNotEmpty(option) && !(isOptionDisabled(option) || isOptionGroup(option));
    };

    const isValidSelectedOption = (option: any) => {
        return isValidOption(option) && isSelected(option);
    };

    const isEquals = (value1: any, value2: any) => {
        return equals(value1, value2, equalityKey());
    };

    const isSelected = (option: any) => {
        const optionValue = getOptionValue(option);

        if ($props.selectionMode === 'multiple') return ($state.value || []).some((value: any) => isEquals(value, optionValue));
        else return isEquals($state.value, optionValue);
    };

    const findFirstOptionIndex = () => {
        return getOptions().findIndex((option) => isValidOption(option));
    };

    const findLastOptionIndex = () => {
        return findLastIndex(getOptions(), (option) => isValidOption(option));
    };

    const findNextOptionIndex = (index: number) => {
        const matchedOptionIndex =
            index < getOptions().length - 1
                ? getOptions()
                      .slice(index + 1)
                      .findIndex((option) => isValidOption(option))
                : -1;

        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    };

    const findPrevOptionIndex = (index: number) => {
        const matchedOptionIndex = index > 0 ? findLastIndex(getOptions().slice(0, index), (option) => isValidOption(option)) : -1;

        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    };

    const findSelectedOptionIndex = () => {
        if (hasValue()) {
            if ($props.selectionMode === 'multiple') {
                for (let index = $state.value.length - 1; index >= 0; index--) {
                    const value = $state.value[index];
                    const matchedOptionIndex = getOptions().findIndex((option) => isValidSelectedOption(option) && isEquals(value, getOptionValue(option)));

                    if (matchedOptionIndex > -1) return matchedOptionIndex;
                }
            } else {
                return getOptions().findIndex((option) => isValidSelectedOption(option));
            }
        }

        return -1;
    };

    const findFirstSelectedOptionIndex = () => {
        return hasValue() ? getOptions().findIndex((option) => isValidSelectedOption(option)) : -1;
    };

    const findLastSelectedOptionIndex = () => {
        return hasValue() ? findLastIndex(getOptions(), (option) => isValidSelectedOption(option)) : -1;
    };

    const findNextSelectedOptionIndex = (index: number) => {
        const matchedOptionIndex =
            hasValue() && index < getOptions().length - 1
                ? getOptions()
                      .slice(index + 1)
                      .findIndex((option) => isValidSelectedOption(option))
                : -1;

        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    };

    const findPrevSelectedOptionIndex = (index: number) => {
        const matchedOptionIndex = hasValue() && index > 0 ? findLastIndex(getOptions().slice(0, index), (option) => isValidSelectedOption(option)) : -1;

        return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    };

    const findNearestSelectedOptionIndex = (index: number, firstCheckUp = false) => {
        let matchedOptionIndex = -1;

        if (hasValue()) {
            if (firstCheckUp) {
                matchedOptionIndex = findPrevSelectedOptionIndex(index);
                matchedOptionIndex = matchedOptionIndex === -1 ? findNextSelectedOptionIndex(index) : matchedOptionIndex;
            } else {
                matchedOptionIndex = findNextSelectedOptionIndex(index);
                matchedOptionIndex = matchedOptionIndex === -1 ? findPrevSelectedOptionIndex(index) : matchedOptionIndex;
            }
        }

        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    };

    const findFirstFocusedOptionIndex = () => {
        const selectedIndex = findFirstSelectedOptionIndex();

        return selectedIndex < 0 ? findFirstOptionIndex() : selectedIndex;
    };

    const findLastFocusedOptionIndex = () => {
        const selectedIndex = findLastSelectedOptionIndex();

        return selectedIndex < 0 ? findLastOptionIndex() : selectedIndex;
    };

    const searchOptions = (event: KeyboardEvent, char: string) => {
        searchValue = (searchValue || '') + char;

        let optionIndex = -1;

        if (isNotEmpty(searchValue)) {
            if ($state.focusedOptionIndex !== -1) {
                optionIndex = getOptions()
                    .slice($state.focusedOptionIndex)
                    .findIndex((option) => isOptionMatched(option));
                optionIndex =
                    optionIndex === -1
                        ? getOptions()
                              .slice(0, $state.focusedOptionIndex)
                              .findIndex((option) => isOptionMatched(option))
                        : optionIndex + $state.focusedOptionIndex!;
            } else {
                optionIndex = getOptions().findIndex((option) => isOptionMatched(option));
            }

            if (optionIndex === -1 && $state.focusedOptionIndex === -1) {
                optionIndex = findFirstFocusedOptionIndex() ?? -1;
            }

            if (optionIndex !== -1) {
                changeFocusedOptionIndex(event, optionIndex);
            }
        }

        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        searchTimeout = setTimeout(() => {
            searchValue = '';
            searchTimeout = null;
        }, 500);
    };

    const removeOption = (option: any) => {
        return $state.value.filter((val: any) => !isEquals(val, getOptionValue(option)));
    };

    const changeFocusedOptionIndex = (event: MouseEvent | KeyboardEvent, index: number = -1) => {
        if ($state.focusedOptionIndex !== index) {
            $emit('focused-option-index-change', index);

            scrollInView();

            if ($props.selectOnFocus && $props.selectionMode !== 'multiple') {
                onOptionSelect(event, getOptions()[index]);
            }
        }
    };

    const scrollInView = (index = -1) => {
        nextFrame().then(() => {
            const id = index !== -1 ? getOptionId(index) : getFocusedOptionId();
            const element = findSingle($refs.list, `[id="${id}"]`);

            element?.scrollIntoView?.({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
        });
    };

    const autoUpdateModel = () => {
        if ($props.selectOnFocus && $props.autoOptionFocus && !hasValue() && $props.selectionMode !== 'multiple' && $state.focused) {
            const focusedOptionIndex = findFirstFocusedOptionIndex();

            $emit('focused-option-index-change', focusedOptionIndex);
            onOptionSelect(null as any, getOptions()[focusedOptionIndex!]);
        }
    };

    const updateModel = (event: Event, value: any) => {
        $emit('value-change', value);
    };

    const equalityKey = () => {
        return $props.optionValue ? undefined : $props.optionKey;
    };

    const hasValue = () => {
        return isNotEmpty($state.value);
    };

    defineExpose({
        getOptions,
        getOptionId,
        getOptionLabel,
        getOptionValue,
        isOptionDisabled,
        isOptionGroup,
        getOptionGroupLabel,
        getOptionGroupChildren,
        getFocusedOptionId,
        getAriaSetSize,
        getAriaPosInset,
        onFirstHiddenFocus,
        onLastHiddenFocus,
        onFocusOut,
        onListFocus,
        onListBlur,
        onListKeyDown,
        onOptionSelect,
        onOptionMouseDown,
        onOptionMouseMove,
        onOptionTouchEnd,
        onFilterChange,
        onFilterBlur,
        onFilterKeyDown,
        isOptionMatched,
        isValidOption,
        isValidSelectedOption,
        isSelected,
        changeFocusedOptionIndex,
        scrollInView,
        updateModel,
        equalityKey,
        hasValue
    });

    defineLogs({
        error: [
            [$props.selectionMode === 'multiple' && !Array.isArray($state.value) && $state.value !== undefined, `<Listbox> - selectionMode "multiple" expects value as array, got: ${JSON.stringify($state.value)}`],
            [$props.selectionMode === 'single' && Array.isArray($state.value), `<Listbox> - selectionMode "single" expects value as single item, got: ${JSON.stringify($state.value)}`]
        ]
    });
});
