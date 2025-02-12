import { deepMerge } from '@primeuix/utils/object';
import { default as ThemeSingleton } from '../config/index';

export const getUsePresetInstance = (Theme: typeof ThemeSingleton) => {
    function usePreset<T extends Record<string, unknown>>(...presets: T[]): T {
        const newPreset = deepMerge(...presets);

        Theme.setPreset(newPreset);

        return newPreset as T;
    }

    return usePreset;
};

export default getUsePresetInstance(ThemeSingleton);
