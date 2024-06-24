import { mergeKeys } from '@primeuix/utils/object';

export default function definePreset(...presets: any[]): any {
    return mergeKeys(...presets);
}
