import type { ProgressSpinnerDesignTokens, ProgressSpinnerTokenSections } from '@primeuix/themes/types/progressspinner';

export const root: ProgressSpinnerTokenSections.Root = {
    colorOne: 'light-dark({pink.500}, {pink.400})',
    colorTwo: 'light-dark({sky.500}, {sky.400})',
    colorThree: 'light-dark({emerald.500}, {emerald.400})',
    colorFour: 'light-dark({amber.500}, {amber.400})'
};

export default {
    root
} satisfies ProgressSpinnerDesignTokens;
