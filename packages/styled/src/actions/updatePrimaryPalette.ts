import { $t } from '../helpers/index';

export default function updatePrimaryPalette(primary?: any): any {
    return $t().primaryPalette(primary).update().preset;
}
