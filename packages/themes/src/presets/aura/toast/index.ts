import type { ToastDesignTokens, ToastTokenSections } from '@primeuix/themes/types/toast';

export const root: ToastTokenSections.Root = {
    width: '22rem',
    borderRadius: '{content.border.radius}',
    borderWidth: '1px',
    transitionDuration: '{transition.duration}',
    blur: 'light-dark(1.5px, 10px)'
};

export const icon: ToastTokenSections.Icon = {
    size: '1rem'
};

export const content: ToastTokenSections.Content = {
    padding: '{overlay.popover.padding}',
    gap: '0.5rem'
};

export const text: ToastTokenSections.Text = {
    gap: '0.5rem'
};

export const summary: ToastTokenSections.Summary = {
    fontWeight: '500',
    fontSize: '{typography.font.size}'
};

export const detail: ToastTokenSections.Detail = {
    fontWeight: '500',
    fontSize: '0.75rem'
};

export const closeButton: ToastTokenSections.CloseButton = {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        offset: '{focus.ring.offset}'
    }
};

export const closeIcon: ToastTokenSections.CloseIcon = {
    size: '0.875rem'
};

export const info: ToastTokenSections.Info = {
    background: 'light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))',
    borderColor: 'light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))',
    color: 'light-dark({blue.600}, {blue.500})',
    detailColor: 'light-dark({surface.700}, {surface.0})',
    shadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
    closeButton: {
        hoverBackground: 'light-dark({blue.100}, rgba(255, 255, 255, 0.05))',
        focusRing: {
            color: 'light-dark({blue.600}, {blue.500})',
            shadow: 'none'
        }
    }
};

export const success: ToastTokenSections.Success = {
    background: 'light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))',
    borderColor: 'light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))',
    color: 'light-dark({green.600}, {green.500})',
    detailColor: 'light-dark({surface.700}, {surface.0})',
    shadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
    closeButton: {
        hoverBackground: 'light-dark({green.100}, rgba(255, 255, 255, 0.05))',
        focusRing: {
            color: 'light-dark({green.600}, {green.500})',
            shadow: 'none'
        }
    }
};

export const warn: ToastTokenSections.Warn = {
    background: 'light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))',
    borderColor: 'light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))',
    color: 'light-dark({yellow.600}, {yellow.500})',
    detailColor: 'light-dark({surface.700}, {surface.0})',
    shadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
    closeButton: {
        hoverBackground: 'light-dark({yellow.100}, rgba(255, 255, 255, 0.05))',
        focusRing: {
            color: 'light-dark({yellow.600}, {yellow.500})',
            shadow: 'none'
        }
    }
};

export const error: ToastTokenSections.Error = {
    background: 'light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))',
    borderColor: 'light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))',
    color: 'light-dark({red.600}, {red.500})',
    detailColor: 'light-dark({surface.700}, {surface.0})',
    shadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
    closeButton: {
        hoverBackground: 'light-dark({red.100}, rgba(255, 255, 255, 0.05))',
        focusRing: {
            color: 'light-dark({red.600}, {red.500})',
            shadow: 'none'
        }
    }
};

export const secondary: ToastTokenSections.Secondary = {
    background: 'light-dark({surface.100}, {surface.800})',
    borderColor: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.600}, {surface.300})',
    detailColor: 'light-dark({surface.700}, {surface.0})',
    shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
    closeButton: {
        hoverBackground: 'light-dark({surface.200}, {surface.700})',
        focusRing: {
            color: 'light-dark({surface.600}, {surface.300})',
            shadow: 'none'
        }
    }
};

export const contrast: ToastTokenSections.Contrast = {
    background: 'light-dark({surface.900}, {surface.0})',
    borderColor: 'light-dark({surface.950}, {surface.100})',
    color: 'light-dark({surface.50}, {surface.950})',
    detailColor: 'light-dark({surface.0}, {surface.950})',
    shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
    closeButton: {
        hoverBackground: 'light-dark({surface.800}, {surface.100})',
        focusRing: {
            color: 'light-dark({surface.50}, {surface.950})',
            shadow: 'none'
        }
    }
};

export default {
    root,
    icon,
    content,
    text,
    summary,
    detail,
    closeButton,
    closeIcon,
    info,
    success,
    warn,
    error,
    secondary,
    contrast
} satisfies ToastDesignTokens;
