import * as Styled from '@primeuix/styled';
import type { PaletteDesignToken, Preset, Theme } from '@primeuix/themes/types';

export const definePreset = (...presets: Preset[]) => Styled.definePreset(...presets);
export const updatePreset = (...presets: Preset[]) => Styled.updatePreset(...presets);
export const updatePrimaryPalette = (palette?: PaletteDesignToken) => Styled.updatePrimaryPalette<PaletteDesignToken, Preset>(palette);
export const updateSurfacePalette = (palette?: PaletteDesignToken) => Styled.updateSurfacePalette<PaletteDesignToken, Preset>(palette);
export const usePreset = (...presets: Preset[]) => Styled.usePreset(...presets);
export const useTheme = (theme: Theme) => Styled.useTheme(theme);

export * from '@primeuix/styled';

// Presets
export { default as Aura } from '@primeuix/themes/aura';
export { default as Lara } from '@primeuix/themes/lara';
export { default as Material } from '@primeuix/themes/material';
export { default as Nora } from '@primeuix/themes/nora';
