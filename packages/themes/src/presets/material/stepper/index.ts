import type { StepperDesignTokens, StepperTokenSections } from '@primeuix/themes/types/stepper';

export const root: StepperTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const separator: StepperTokenSections.Separator = {
    background: '{content.border.color}',
    activeBackground: '{primary.color}',
    margin: '0 0 0 1.375rem',
    size: '2px'
};

export const step: StepperTokenSections.Step = {
    padding: '0.5rem',
    gap: '0.875rem'
};

export const stepHeader: StepperTokenSections.StepHeader = {
    padding: '0.625rem 0.875rem',
    borderRadius: '{content.border.radius}',
    focusRing: {
        width: '0',
        style: 'none',
        color: 'unset',
        offset: '0',
        shadow: 'none'
    },
    gap: '0.5rem'
};

export const stepTitle: StepperTokenSections.StepTitle = {
    color: '{text.muted.color}',
    activeColor: '{text.color}',
    fontWeight: '500',
    fontSize: '{typography.font.size}'
};

export const stepNumber: StepperTokenSections.StepNumber = {
    activeBackground: '{primary.color}',
    activeBorderColor: '{primary.color}',
    activeColor: '{primary.contrast.color}',
    size: '1.75rem',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '50%',
    shadow: 'none',
    background: 'light-dark({surface.400}, {surface.200})',
    borderColor: 'light-dark({surface.400}, {surface.200})',
    color: 'light-dark({surface.0}, {surface.900})'
};

export const steppanels: StepperTokenSections.Steppanels = {
    padding: '0.75rem 0.5rem 1rem 0.5rem'
};

export const steppanel: StepperTokenSections.Steppanel = {
    background: '{content.background}',
    color: '{content.color}',
    padding: '0',
    indent: '0.875rem'
};

export const css: StepperTokenSections.CSS = /*css*/ `
.p-step-header:focus-visible {
    background: dt('navigation.item.active.background');
}
`;

export default {
    root,
    separator,
    step,
    stepHeader,
    stepTitle,
    stepNumber,
    steppanels,
    steppanel,
    css
} satisfies StepperDesignTokens;
