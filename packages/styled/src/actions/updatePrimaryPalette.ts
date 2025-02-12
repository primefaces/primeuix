import { $t as $tSingleton } from '../helpers/index';

export const getUpdatePrimaryPaletteInstance = ($t: typeof $tSingleton) => {
    function updatePrimaryPalette<T = unknown, P = unknown>(palette?: T): P {
        return $t().primaryPalette(palette).update().preset as P;
    }

    return updatePrimaryPalette;
};

export default getUpdatePrimaryPaletteInstance($tSingleton);
