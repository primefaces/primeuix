import type { ComponentInstance, Options } from '../core/type';

// @todo - replace any with UIElement
export interface ListboxRefs {
    element?: any; //UIElement;
    list?: any; //UIElement;
    firstHiddenFocusable?: any; //UIElement;
    lastHiddenFocusable?: any; //UIElement;
}

export interface ListboxProps {
    id?: string;
    options?: any[];
    optionKey?: string;
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    disabled?: boolean;
    locale?: string;
    selectionMode?: 'single' | 'multiple' | undefined;
    selectionType?: 'checkbox' | 'checkmark' | 'radio' | undefined;
    metaKeySelection?: boolean;
    autoOptionFocus?: boolean;
    selectOnFocus?: boolean;
    focusOnHover?: boolean;
}

export interface ListboxState {
    value?: any;
    focused?: boolean;
    focusedOptionIndex?: number;
}

export interface ListboxEmits {
    valueChange?: (value: any) => void;
    focusedChange?: (focused: boolean) => void;
    focusedOptionIndexChange?: (index: number) => void;
}

export interface ListboxExpose {
    getOptions?: () => any[];
    getOptionId?: (index: number) => string;
    getOptionLabel?: (option: any) => string | null;
    getOptionValue?: (option: any) => any;
    isOptionDisabled?: (option: any) => boolean;
    isOptionGroup?: (option: any) => boolean;
    getOptionGroupLabel?: (optionGroup: any) => string | null;
    getOptionGroupChildren?: (optionGroup: any) => any[] | null;
    getFocusedOptionId?: () => string | null;
    getAriaSetSize?: () => number;
    getAriaPosInset?: (index: number) => number;
    onFirstHiddenFocus?: (event: FocusEvent) => void;
    onLastHiddenFocus?: (event: FocusEvent) => void;
    onFocusOut?: (event: FocusEvent) => void;
    onListFocus?: () => void;
    onListBlur?: (event: FocusEvent) => void;
    onListKeyDown?: (event: KeyboardEvent) => void;
    onOptionSelect?: (event: MouseEvent | KeyboardEvent, option: any, index?: number) => void;
    onOptionMouseDown?: (event: MouseEvent, index: number) => void;
    onOptionMouseMove?: (event: MouseEvent, index: number) => void;
    onOptionTouchEnd?: (event: TouchEvent, index: number) => void;
    onFilterChange?: (event: Event) => void;
    onFilterBlur?: (event: FocusEvent) => void;
    onFilterKeyDown?: (event: KeyboardEvent) => void;
    isOptionMatched?: (option: any, searchValue: string) => boolean;
    isValidOption?: (option: any) => boolean;
    isValidSelectedOption?: (option: any) => boolean;
    isSelected?: (option: any) => boolean;
    changeFocusedOptionIndex?: (event: MouseEvent | KeyboardEvent, index: number) => void;
    scrollInView?: (index: number) => void;
    updateModel?: (event: MouseEvent | KeyboardEvent, value: any) => void;
    equalityKey?: () => string | undefined;
    hasValue?: () => boolean;
}

export type ListboxOptions = Options<ListboxRefs, ListboxProps, ListboxState, ListboxEmits>;

export type ListboxInstance = ComponentInstance<ListboxRefs, ListboxProps, ListboxState, ListboxExpose>;
