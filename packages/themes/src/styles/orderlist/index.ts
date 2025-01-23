import type { ThemeStyleOptions } from '@primeuix/themes/types';

export const theme = ({ dt }: ThemeStyleOptions) => `
.p-orderlist {
    display: flex;
    gap: ${dt('orderlist.gap')};
}

.p-orderlist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${dt('orderlist.controls.gap')};
}
`;
