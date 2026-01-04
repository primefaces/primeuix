import type { MessageDesignTokens, MessageTokenSections } from '@primeuix/themes/types/message';

export const root: MessageTokenSections.Root = {
    borderRadius: '{content.border.radius}',
    borderWidth: '1px',
    transitionDuration: '{transition.duration}'
};

export const content: MessageTokenSections.Content = {
    padding: '0.375rem 0.625rem',
    gap: '0.5rem',
    sm: {
        padding: '0.25rem 0.5rem'
    },
    lg: {
        padding: '0.5rem 0.75rem'
    }
};

export const text: MessageTokenSections.Text = {
    fontSize: '1rem',
    fontWeight: '700',
    sm: {
        fontSize: '0.75rem'
    },
    lg: {
        fontSize: '1rem'
    }
};

export const icon: MessageTokenSections.Icon = {
    size: '1rem',
    sm: {
        size: '0.875rem'
    },
    lg: {
        size: '1.125rem'
    }
};

export const closeButton: MessageTokenSections.CloseButton = {
    width: '1.5rem',
    height: '1.5rem',
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
    background: 'light-dark({blue.800}, {blue.200})',
    borderColor: 'light-dark({blue.800}, {blue.200})',
    color: 'light-dark({blue.50}, {blue.950})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({blue.600}, {blue.50})',
        focusRing: {
            color: 'light-dark({blue.50}, {blue.950})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({blue.800}, {blue.200})',
        borderColor: 'light-dark({blue.800}, {blue.200})'
    },
    simple: {
        color: 'light-dark({blue.800}, {blue.200})'
    }
};

export const success: MessageTokenSections.Success = {
    background: 'light-dark({green.800}, {green.200})',
    borderColor: 'light-dark({green.800}, {green.200})',
    color: 'light-dark({green.50}, {green.950})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({green.600}, {green.50})',
        focusRing: {
            color: 'light-dark({green.50}, {green.950})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({green.800}, {green.200})',
        borderColor: 'light-dark({green.800}, {green.200})'
    },
    simple: {
        color: 'light-dark({green.800}, {green.200})'
    }
};

export const warn: MessageTokenSections.Warn = {
    background: 'light-dark({yellow.600}, {yellow.200})',
    borderColor: 'light-dark({yellow.600}, {yellow.200})',
    color: 'light-dark({yellow.50}, {yellow.950})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({yellow.400}, {yellow.50})',
        focusRing: {
            color: 'light-dark({yellow.50}, {yellow.950})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({yellow.600}, {yellow.200})',
        borderColor: 'light-dark({yellow.600}, {yellow.200})'
    },
    simple: {
        color: 'light-dark({yellow.600}, {yellow.200})'
    }
};

export const error: MessageTokenSections.Error = {
    background: 'light-dark({red.800}, {red.200})',
    borderColor: 'light-dark({red.800}, {red.200})',
    color: 'light-dark({red.50}, {red.950})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({red.600}, {red.50})',
        focusRing: {
            color: 'light-dark({red.50}, {red.950})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({red.800}, {red.200})',
        borderColor: 'light-dark({red.800}, {red.200})'
    },
    simple: {
        color: 'light-dark({red.800}, {red.200})'
    }
};

export const secondary: MessageTokenSections.Secondary = {
    background: 'light-dark({surface.200}, {surface.700})',
    borderColor: 'light-dark({surface.200}, {surface.700})',
    color: 'light-dark({surface.700}, {surface.200})',
    shadow: 'none',
    closeButton: {
        hoverBackground: 'light-dark({surface.50}, {surface.500})',
        focusRing: {
            color: 'light-dark({surface.700}, {surface.200})',
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
    borderColor: 'light-dark({surface.900}, {surface.0})',
    color: 'light-dark({surface.50}, {surface.950})',
    shadow: 'light-dark(0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%), none)',
    closeButton: {
        hoverBackground: 'light-dark({surface.700}, {surface.200})',
        focusRing: {
            color: 'light-dark({surface.50}, {surface.950})',
            shadow: 'none'
        }
    },
    outlined: {
        color: 'light-dark({surface.900}, {surface.0})',
        borderColor: 'light-dark({surface.900}, {surface.0})'
    },
    simple: {
        color: 'light-dark({surface.900}, {surface.0})'
    }
};

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
    contrast
} satisfies MessageDesignTokens;
