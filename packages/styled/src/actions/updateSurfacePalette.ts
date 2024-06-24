import { $t } from '../helpers/index';

export default function updateSurfacePalette(palette?: any): any {
    return $t().surfacePalette(palette).update().preset;
}
