import type { ThemeStyleOptions } from '@primeuix/styled';

export const theme = ({ dt }: ThemeStyleOptions) => `
.p-iftalabel {
    display: block;
    position: relative;
}

.p-iftalabel label {
    position: absolute;
    pointer-events: none;
    top: ${dt('iftalabel.top')};
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-size: ${dt('iftalabel.font.size')};
    font-weight: ${dt('iftalabel.font.weight')};
    inset-inline-start: ${dt('iftalabel.position.x')};
    color: ${dt('iftalabel.color')};
    transition-duration: ${dt('iftalabel.transition.duration')};
}

.p-iftalabel .p-inputtext,
.p-iftalabel .p-textarea,
.p-iftalabel .p-select-label,
.p-iftalabel .p-multiselect-label,
.p-iftalabel .p-autocomplete-input-multiple,
.p-iftalabel .p-cascadeselect-label,
.p-iftalabel .p-treeselect-label {
    padding-block-start: ${dt('iftalabel.input.padding.top')};
    padding-block-end: ${dt('iftalabel.input.padding.bottom')};
}

.p-iftalabel:has(.p-invalid) label {
    color: ${dt('iftalabel.invalid.color')};
}

.p-iftalabel:has(input:focus) label,
.p-iftalabel:has(input:-webkit-autofill) label,
.p-iftalabel:has(textarea:focus) label,
.p-iftalabel:has(.p-inputwrapper-focus) label {
    color: ${dt('iftalabel.focus.color')};
}

.p-iftalabel .p-inputicon {
    top: ${dt('iftalabel.input.padding.top')};
    transform: translateY(25%);
    margin-top: 0;
}
`;