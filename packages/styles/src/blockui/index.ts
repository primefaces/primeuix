import { StyleOptions } from '../types';

export const style = ({ dt }: StyleOptions) => `
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: ${dt('blockui.border.radius')};
}

.p-blockui-mask.p-overlay-mask {
    position: absolute;
}

.p-blockui-mask-document.p-overlay-mask {
    position: fixed;
}
`;
