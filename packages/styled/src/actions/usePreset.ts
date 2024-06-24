import { mergeKeys } from '@primeuix/utils/object';
import Theme from '../config/index';

export default function usePreset(...presets: any[]): any {
    const newPreset = mergeKeys(...presets);

    Theme.setPreset(newPreset);

    return newPreset;
}
