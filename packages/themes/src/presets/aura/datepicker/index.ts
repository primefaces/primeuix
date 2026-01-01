import type { DatePickerDesignTokens, DatePickerTokenSections } from '@primeuix/themes/types/datepicker';

export const root: DatePickerTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const panel: DatePickerTokenSections.Panel = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    shadow: '{overlay.popover.shadow}',
    padding: '{overlay.popover.padding}'
};

export const header: DatePickerTokenSections.Header = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    padding: '0 0 0.5rem 0'
};

export const title: DatePickerTokenSections.Title = {
    gap: '0.5rem',
    fontWeight: '500',
    fontSize: '{typography.font.size}'
};

export const dropdown: DatePickerTokenSections.Dropdown = {
    width: '2.25rem',
    sm: {
        width: '1.75rem'
    },
    lg: {
        width: '2.625rem'
    },
    background: 'light-dark({surface.100}, {surface.800})',
    hoverBackground: 'light-dark({surface.200}, {surface.700})',
    activeBackground: 'light-dark({surface.300}, {surface.600})',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.border.color}',
    activeBorderColor: '{form.field.border.color}',
    color: 'light-dark({surface.600}, {surface.300})',
    hoverColor: 'light-dark({surface.700}, {surface.200})',
    activeColor: 'light-dark({surface.800}, {surface.100})',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const inputIcon: DatePickerTokenSections.InputIcon = {
    color: '{form.field.icon.color}'
};

export const selectMonth: DatePickerTokenSections.SelectMonth = {
    hoverBackground: '{content.hover.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    padding: '0.25rem 0.5rem',
    borderRadius: '{content.border.radius}',
    fontWeight: '500',
    fontSize: '{typography.font.size}'
};

export const selectYear: DatePickerTokenSections.SelectYear = {
    hoverBackground: '{content.hover.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    padding: '0.25rem 0.5rem',
    borderRadius: '{content.border.radius}',
    fontWeight: '500',
    fontSize: '{typography.font.size}'
};

export const group: DatePickerTokenSections.Group = {
    borderColor: '{content.border.color}',
    gap: '{overlay.popover.padding}'
};

export const dayView: DatePickerTokenSections.DayView = {
    margin: '0.5rem 0 0 0'
};

export const weekDay: DatePickerTokenSections.WeekDay = {
    padding: '0.25rem',
    fontWeight: '500',
    fontSize: '{typography.font.size}',
    color: '{content.color}'
};

export const date: DatePickerTokenSections.Date = {
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{primary.color}',
    rangeSelectedBackground: '{highlight.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{primary.contrast.color}',
    rangeSelectedColor: '{highlight.color}',
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '50%',
    padding: '0.25rem',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const monthView: DatePickerTokenSections.MonthView = {
    margin: '0.5rem 0 0 0'
};

export const month: DatePickerTokenSections.Month = {
    padding: '0.25rem',
    borderRadius: '{content.border.radius}'
};

export const yearView: DatePickerTokenSections.YearView = {
    margin: '0.5rem 0 0 0'
};

export const year: DatePickerTokenSections.Year = {
    padding: '0.25rem',
    borderRadius: '{content.border.radius}'
};

export const buttonbar: DatePickerTokenSections.Buttonbar = {
    padding: '0.5rem 0 0 0',
    borderColor: '{content.border.color}'
};

export const timePicker: DatePickerTokenSections.TimePicker = {
    padding: '0.5rem 0 0 0',
    borderColor: '{content.border.color}',
    gap: '0.5rem',
    buttonGap: '0.125rem',
    color: '{content.color}',
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export const today: DatePickerTokenSections.Today = {
    background: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.900}, {surface.0})'
};

export default {
    root,
    panel,
    header,
    title,
    dropdown,
    inputIcon,
    selectMonth,
    selectYear,
    group,
    dayView,
    weekDay,
    date,
    monthView,
    month,
    yearView,
    year,
    buttonbar,
    timePicker,
    today
} satisfies DatePickerDesignTokens;
