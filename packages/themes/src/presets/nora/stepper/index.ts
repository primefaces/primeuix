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
    padding: '0.375rem',
    gap: '0.875rem'
};

export const stepHeader: StepperTokenSections.StepHeader = {
    padding: '0',
    borderRadius: '{content.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    },
    gap: '0.5rem'
};

export const stepTitle: StepperTokenSections.StepTitle = {
    color: '{text.muted.color}',
    activeColor: '{primary.color}',
    fontWeight: '700',
    fontSize: '{typography.font.size}'
};

export const stepNumber: StepperTokenSections.StepNumber = {
    background: '{content.background}',
    activeBackground: '{primary.color}',
    borderColor: '{content.border.color}',
    activeBorderColor: '{primary.color}',
    color: '{text.muted.color}',
    activeColor: '{primary.contrast.color}',
    size: '2rem',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '50%',
    shadow: 'none'
};

export const steppanels: StepperTokenSections.Steppanels = {
    padding: '0.75rem 0.375rem 1rem 0.375rem'
};

export const steppanel: StepperTokenSections.Steppanel = {
    background: '{content.background}',
    color: '{content.color}',
    padding: '0',
    indent: '0.875rem'
};

export default {
    root,
    separator,
    step,
    stepHeader,
    stepTitle,
    stepNumber,
    steppanels,
    steppanel
} satisfies StepperDesignTokens;
