import { StyleType } from '../types';

export const style: StyleType = ({ dt }) => `
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
