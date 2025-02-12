import { $t as $tSingleton } from '../helpers/index';

export const getUpdateSurfacePaletteInstance = ($t: typeof $tSingleton) => {
    function updateSurfacePalette<T = unknown, P = unknown>(palette?: T): P {
        return $t().surfacePalette(palette).update().preset as P;
    }

    return updateSurfacePalette;
};

export default getUpdateSurfacePaletteInstance($tSingleton);
