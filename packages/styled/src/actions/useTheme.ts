import { $t as $tSingleton } from '../helpers/index';

export const getUseThemeInstance = ($t: typeof $tSingleton) => {
    function useTheme<T = unknown>(theme: T): T {
        return $t(theme).update({ mergePresets: false }) as T;
    }

    return useTheme;
};

export default getUseThemeInstance($tSingleton);
