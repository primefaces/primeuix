import type { MessageDesignTokens, MessageTokenSections } from '@primeuix/themes/types/message';

export const root: MessageTokenSections.Root = {
    borderRadius: '{content.border.radius}',
    borderWidth: '0',
    transitionDuration: '{transition.duration}'
};

export const content: MessageTokenSections.Content = {
    padding: '0.875rem 1.125rem',
    gap: '0.5rem',
    sm: {
        padding: '0.5rem 0.5rem'
    },
    lg: {
        padding: '0.75rem 0.75rem'
    }
};

export const text: MessageTokenSections.Text = {
    fontSize: '0.875rem',
    fontWeight: '500',
    sm: {
        fontSize: '0.75rem'
    },
    lg: {
        fontSize: '1rem'
    }
};

export const icon: MessageTokenSections.Icon = {
    size: '1.125rem',
    sm: {
        size: '0.875rem'
    },
    lg: {
        size: '1.25rem'
    }
};

export const closeButton: MessageTokenSections.CloseButton = {
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        offset: '{focus.ring.offset}'
    }
};

export const closeIcon: MessageTokenSections.CloseIcon = {
    size: '0.875rem',
    sm: {
        size: '0.75rem'
    },
    lg: {
        size: '1rem'
    }
};

export const outlined: MessageTokenSections.Outlined = {
    root: {
        borderWidth: '1px'
    }
};

export const simple: MessageTokenSections.Simple = {
    content: {
        padding: '0'
    }
};

export const info: MessageTokenSections.Info = {
    background: 'light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))',
    borderColor: 'light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))',
    color: 'light-dark({blue.600}, {blue.500})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({blue.100}, rgba(255, 255, 255, 0.05))',
        focusRing: {
            color: 'light-dark({blue.600}, {blue.500})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({blue.600}, {blue.500})',
        borderColor: 'light-dark({blue.600}, {blue.500})'
    },
    simple: {
        color: 'light-dark({blue.600}, {blue.500})'
    }
};

export const success: MessageTokenSections.Success = {
    background: 'light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))',
    borderColor: 'light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))',
    color: 'light-dark({green.600}, {green.500})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({green.100}, rgba(255, 255, 255, 0.05))',
        focusRing: {
            color: 'light-dark({green.600}, {green.500})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({green.600}, {green.500})',
        borderColor: 'light-dark({green.600}, {green.500})'
    },
    simple: {
        color: 'light-dark({green.600}, {green.500})'
    }
};

export const warn: MessageTokenSections.Warn = {
    background: 'light-dark(color-mix(in srgb,{yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))',
    borderColor: 'light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))',
    color: 'light-dark({yellow.900}, {yellow.500})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({yellow.100}, rgba(255, 255, 255, 0.05))',
        focusRing: {
            color: 'light-dark({yellow.600}, {yellow.500})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({yellow.900}, {yellow.500})',
        borderColor: 'light-dark({yellow.900}, {yellow.500})'
    },
    simple: {
        color: 'light-dark({yellow.900}, {yellow.500})'
    }
};

export const error: MessageTokenSections.Error = {
    background: 'light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))',
    borderColor: 'light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))',
    color: 'light-dark({red.600}, {red.500})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({red.100}, rgba(255, 255, 255, 0.05))',
        focusRing: {
            color: 'light-dark({red.600}, {red.500})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({red.600}, {red.500})',
        borderColor: 'light-dark({red.600}, {red.500})'
    },
    simple: {
        color: 'light-dark({red.600}, {red.500})'
    }
};

export const secondary: MessageTokenSections.Secondary = {
    background: 'light-dark({surface.100}, {surface.800})',
    borderColor: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.600}, {surface.300})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({surface.200}, {surface.700})',
        focusRing: {
            color: 'light-dark({surface.600}, {surface.300})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({surface.600}, {surface.400})',
        borderColor: 'light-dark({surface.600}, {surface.400})'
    },
    simple: {
        color: 'light-dark({surface.600}, {surface.400})'
    }
};

export const contrast: MessageTokenSections.Contrast = {
    background: 'light-dark({surface.900}, {surface.0})',
    borderColor: 'light-dark({surface.950}, {surface.100})',
    color: 'light-dark({surface.50}, {surface.950})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({surface.800}, {surface.100})',
        focusRing: {
            color: 'light-dark({surface.50}, {surface.950})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({surface.950}, {surface.0})',
        borderColor: 'light-dark({surface.950}, {surface.0})'
    },
    simple: {
        color: 'light-dark({surface.950}, {surface.0})'
    }
};

export const css: MessageTokenSections.CSS = /*css*/ ``;

export default {
    root,
    content,
    text,
    icon,
    closeButton,
    closeIcon,
    outlined,
    simple,
    info,
    success,
    warn,
    error,
    secondary,
    contrast,
    css
} satisfies MessageDesignTokens;
