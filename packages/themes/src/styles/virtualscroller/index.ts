import type { ThemeStyleOptions } from '@primeuix/themes/types';

export const theme = ({ dt }: ThemeStyleOptions) => `
.p-virtualscroller-loader {
    background: ${dt('virtualscroller.loader.mask.background')};
    color: ${dt('virtualscroller.loader.mask.color')};
}

.p-virtualscroller-loading-icon {
    font-size: ${dt('virtualscroller.loader.icon.size')};
    width: ${dt('virtualscroller.loader.icon.size')};
    height: ${dt('virtualscroller.loader.icon.size')};
}
`;