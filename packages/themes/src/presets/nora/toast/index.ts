import type { ToastDesignTokens, ToastTokenSections } from '@primeuix/themes/types/toast';

export const root: ToastTokenSections.Root = {
    width: '25rem',
    borderRadius: '{content.border.radius}',
    borderWidth: '0 0 0 6px',
    transitionDuration: '{transition.duration}',
    blur: '0'
};

export const icon: ToastTokenSections.Icon = {
    size: '1.125rem'
};

export const content: ToastTokenSections.Content = {
    padding: '{overlay.popover.padding}',
    gap: '0.5rem'
};

export const text: ToastTokenSections.Text = {
    gap: '0.5rem'
};

export const summary: ToastTokenSections.Summary = {
    fontWeight: '700',
    fontSize: '1rem'
};

export const detail: ToastTokenSections.Detail = {
    fontWeight: '500',
    fontSize: '0.875rem'
};

export const closeButton: ToastTokenSections.CloseButton = {
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        offset: '{focus.ring.offset}'
    }
};

export const closeIcon: ToastTokenSections.CloseIcon = {
    size: '1rem'
};

export const info: ToastTokenSections.Info = {
    background: 'light-dark({blue.800}, {blue.200})',
    borderColor: 'light-dark({blue.800}, {blue.200})',
    color: 'light-dark({blue.50}, {blue.950})',
    detailColor: 'light-dark({blue.50}, {blue.950})',
    shadow: '{overlay.popover.shadow}',
    closeButton: {
        hoverBackground: 'light-dark({blue.600}, {blue.50})',
        focusRing: {
            color: 'light-dark({blue.50}, {blue.950})',
            shadow: 'none'
        }
    }
};

export const success: ToastTokenSections.Success = {
    background: 'light-dark({green.800}, {green.200})',
    borderColor: 'light-dark({green.800}, {green.200})',
    color: 'light-dark({green.50}, {green.950})',
    detailColor: 'light-dark({green.50}, {green.950})',
    shadow: '{overlay.popover.shadow}',
    closeButton: {
        hoverBackground: 'light-dark({green.600}, {green.50})',
        focusRing: {
            color: 'light-dark({green.50}, {green.950})',
            shadow: 'none'
        }
    }
};

export const warn: ToastTokenSections.Warn = {
    background: 'light-dark({yellow.600}, {yellow.200})',
    borderColor: 'light-dark({yellow.600}, {yellow.200})',
    color: 'light-dark({yellow.50}, {yellow.950})',
    detailColor: 'light-dark({yellow.50}, {yellow.950})',
    shadow: '{overlay.popover.shadow}',
    closeButton: {
        hoverBackground: 'light-dark({yellow.400}, {yellow.50})',
        focusRing: {
            color: 'light-dark({yellow.50}, {yellow.950})',
            shadow: 'none'
        }
    }
};

export const error: ToastTokenSections.Error = {
    background: 'light-dark({red.800}, {red.200})',
    borderColor: 'light-dark({red.800}, {red.200})',
    color: 'light-dark({red.50}, {red.950})',
    detailColor: 'light-dark({red.50}, {red.950})',
    shadow: '{overlay.popover.shadow}',
    closeButton: {
        hoverBackground: 'light-dark({red.600}, {red.50})',
        focusRing: {
            color: 'light-dark({red.50}, {red.950})',
            shadow: 'none'
        }
    }
};

export const secondary: ToastTokenSections.Secondary = {
    background: 'light-dark({surface.200}, {surface.700})',
    borderColor: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.700}, {surface.200})',
    detailColor: 'light-dark({surface.700}, {surface.200})',
    shadow: '{overlay.popover.shadow}',
    closeButton: {
        hoverBackground: 'light-dark({surface.50}, {surface.500})',
        focusRing: {
            color: 'light-dark({surface.700}, {surface.200})',
            shadow: 'none'
        }
    }
};

export const contrast: ToastTokenSections.Contrast = {
    background: 'light-dark({surface.900}, {surface.0})',
    borderColor: 'light-dark({surface.900}, {surface.0})',
    color: 'light-dark({surface.50}, {surface.950})',
    detailColor: 'light-dark({surface.0}, {surface.950})',
    shadow: 'light-dark(0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%), {overlay.popover.shadow})',
    closeButton: {
        hoverBackground: 'light-dark({surface.700}, {surface.200})',
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
