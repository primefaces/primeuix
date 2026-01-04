import type { MeterGroupDesignTokens, MeterGroupTokenSections } from '@primeuix/themes/types/metergroup';

export const root: MeterGroupTokenSections.Root = {
    borderRadius: '{content.border.radius}',
    gap: '0.875rem'
};

export const meters: MeterGroupTokenSections.Meters = {
    background: '{content.border.color}',
    size: '0.5rem'
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
    size: '0.875rem'
};

export const labelList: MeterGroupTokenSections.LabelList = {
    verticalGap: '0.5rem',
    horizontalGap: '0.875rem'
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
