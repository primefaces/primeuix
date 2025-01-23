import type { SelectButtonDesignTokens } from '@primeuix/themes/types/selectbutton';

export default {
    root: {
        borderRadius: '{form.field.border.radius}'
    },
    colorScheme: {
        light: {
            root: {
                invalidBorderColor: '{form.field.invalid.border.color}'
            }
        },
        dark: {
            root: {
                invalidBorderColor: '{form.field.invalid.border.color}'
            }
        }
    }
} satisfies SelectButtonDesignTokens;
