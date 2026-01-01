import type { SkeletonDesignTokens, SkeletonTokenSections } from '@primeuix/themes/types/skeleton';

export const root: SkeletonTokenSections.Root = {
    borderRadius: '{content.border.radius}',
    background: 'light-dark({surface.200}, rgba(255, 255, 255, 0.06))',
    animationBackground: 'light-dark(rgba(255,255,255,0.4), rgba(255, 255, 255, 0.04))'
};

export default {
    root
} satisfies SkeletonDesignTokens;
