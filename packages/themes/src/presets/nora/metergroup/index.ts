import type { MeterGroupDesignTokens, MeterGroupTokenSections } from '@primeuix/themes/types/metergroup';

export const root: MeterGroupTokenSections.Root = {
    borderRadius: '{content.border.radius}',
    gap: '1rem'
};

export const meters: MeterGroupTokenSections.Meters = {
    size: '0.5rem',
    background: 'light-dark({surface.300}, {surface.600})'
};

export const label: MeterGroupTokenSections.Label = {
    gap: '0.5rem'
};

export const labelMarker: MeterGroupTokenSections.LabelMarker = {
    size: '0.5rem'
};

export const labelText: MeterGroupTokenSections.LabelText = {
    fontWeight: '{typography.font.weight}',
    fontSize: '{typography.font.size}'
};

export const labelIcon: MeterGroupTokenSections.LabelIcon = {
    size: '1rem'
};

export const labelList: MeterGroupTokenSections.LabelList = {
    verticalGap: '0.5rem',
    horizontalGap: '1rem'
};

export default {
    root,
    meters,
    label,
    labelMarker,
    labelText,
    labelIcon,
    labelList
} satisfies MeterGroupDesignTokens;
