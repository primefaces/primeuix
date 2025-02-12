import { deepMerge } from '@primeuix/utils/object';
import { default as ThemeSingleton } from '../config/index';

export const getUpdatePresetInstance = (Theme: typeof ThemeSingleton) => {
    function updatePreset<T extends Record<string, unknown>>(...presets: T[]): T {
        const newPreset = deepMerge(Theme.getPreset(), ...presets);

        Theme.setPreset(newPreset);

        return newPreset as T;
    }

    return updatePreset;
};

export default getUpdatePresetInstance(ThemeSingleton);
