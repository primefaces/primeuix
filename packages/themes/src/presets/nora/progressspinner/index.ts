import type { ProgressSpinnerDesignTokens, ProgressSpinnerTokenSections } from '@primeuix/themes/types/progressspinner';

export const root: ProgressSpinnerTokenSections.Root = {
    colorOne: 'light-dark({red.500}, {red.400})',
    colorTwo: 'light-dark({blue.500}, {blue.400})',
    colorThree: 'light-dark({green.500}, {green.400})',
    colorFour: 'light-dark({yellow.500}, {yellow.400})'
};

export default {
    root
} satisfies ProgressSpinnerDesignTokens;
