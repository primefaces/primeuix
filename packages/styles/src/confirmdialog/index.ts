import { StyleOptions } from '../types';

export const style = ({ dt }: StyleOptions) => `
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  ${dt('confirmdialog.content.gap')};
}

.p-confirmdialog-icon {
    color: ${dt('confirmdialog.icon.color')};
    font-size: ${dt('confirmdialog.icon.size')};
    width: ${dt('confirmdialog.icon.size')};
    height: ${dt('confirmdialog.icon.size')};
}
`;
