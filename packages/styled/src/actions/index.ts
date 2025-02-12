import { default as definePreset } from './definePreset';
import { default as updatePreset, getUpdatePresetInstance } from './updatePreset';
import { default as updatePrimaryPalette, getUpdatePrimaryPaletteInstance } from './updatePrimaryPalette';
import { default as updateSurfacePalette, getUpdateSurfacePaletteInstance } from './updateSurfacePalette';
import { default as usePreset, getUsePresetInstance } from './usePreset';
import { default as useTheme, getUseThemeInstance } from './useTheme';
import type { default as ThemeSingleton } from '../config/index';
import type { $t as $tSingleton } from '../helpers/index';

export const getActionsInstance = (Theme: typeof ThemeSingleton, $t: typeof $tSingleton) => {
    const updatePreset = getUpdatePresetInstance(Theme);
    const updatePrimaryPalette = getUpdatePrimaryPaletteInstance($t);
    const updateSurfacePalette = getUpdateSurfacePaletteInstance($t);
    const usePreset = getUsePresetInstance(Theme);
    const useTheme = getUseThemeInstance($t);

    return { definePreset, updatePreset, updatePrimaryPalette, updateSurfacePalette, usePreset, useTheme };
};

export const getActionsSingleton = () => {
    return { definePreset, updatePreset, updatePrimaryPalette, updateSurfacePalette, usePreset, useTheme };
};

export { default as definePreset } from './definePreset';
export { default as updatePreset, getUpdatePresetInstance } from './updatePreset';
export { default as updatePrimaryPalette, getUpdatePrimaryPaletteInstance } from './updatePrimaryPalette';
export { default as updateSurfacePalette, getUpdateSurfacePaletteInstance } from './updateSurfacePalette';
export { default as usePreset, getUsePresetInstance } from './usePreset';
export { default as useTheme, getUseThemeInstance } from './useTheme';
