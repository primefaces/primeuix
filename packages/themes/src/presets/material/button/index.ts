import type { ButtonDesignTokens, ButtonTokenSections } from '@primeuix/themes/types/button';

export const root: ButtonTokenSections.Root = {
    borderRadius: '{form.field.border.radius}',
    roundedBorderRadius: '1.75rem',
    gap: '0.5rem',
    paddingX: '0.875rem',
    paddingY: '0.5rem',
    iconOnlyWidth: '2.625rem',
    fontSize: '{form.field.font.size}',
    sm: {
        fontSize: '{form.field.sm.font.size}',
        paddingX: '{form.field.sm.padding.x}',
        paddingY: '{form.field.sm.padding.y}',
        iconOnlyWidth: '2.25rem'
    },
    lg: {
        fontSize: '{form.field.lg.font.size}',
        paddingX: '{form.field.lg.padding.x}',
        paddingY: '{form.field.lg.padding.y}',
        iconOnlyWidth: '3rem'
    },
    label: {
        fontWeight: '500'
    },
    raisedShadow: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        offset: '{focus.ring.offset}'
    },
    badgeSize: '0.875rem',
    transitionDuration: '{form.field.transition.duration}',
    primary: {
        background: '{primary.color}',
        hoverBackground: '{primary.hover.color}',
        activeBackground: '{primary.active.color}',
        borderColor: '{primary.color}',
        hoverBorderColor: '{primary.hover.color}',
        activeBorderColor: '{primary.active.color}',
        color: '{primary.contrast.color}',
        hoverColor: '{primary.contrast.color}',
        activeColor: '{primary.contrast.color}',
        focusRing: {
            color: '{primary.color}',
            shadow: 'none'
        }
    },
    secondary: {
        background: 'light-dark({surface.100}, {surface.800})',
        hoverBackground: 'light-dark({surface.200}, {surface.700})',
        activeBackground: 'light-dark({surface.300}, {surface.600})',
        borderColor: 'light-dark({surface.100}, {surface.800})',
        hoverBorderColor: 'light-dark({surface.200}, {surface.700})',
        activeBorderColor: 'light-dark({surface.300}, {surface.600})',
        color: 'light-dark({surface.600}, {surface.300})',
        hoverColor: 'light-dark({surface.700}, {surface.200})',
        activeColor: 'light-dark({surface.800}, {surface.100})',
        focusRing: {
            color: 'light-dark({surface.600}, {surface.300})',
            shadow: 'none'
        }
    },
    info: {
        background: 'light-dark({sky.500}, {sky.400})',
        hoverBackground: 'light-dark({sky.400}, {sky.300})',
        activeBackground: 'light-dark({sky.300}, {sky.200})',
        borderColor: 'light-dark({sky.500}, {sky.400})',
        hoverBorderColor: 'light-dark({sky.400}, {sky.300})',
        activeBorderColor: 'light-dark({sky.300}, {sky.200})',
        color: 'light-dark(#ffffff, {sky.950})',
        hoverColor: 'light-dark(#ffffff, {sky.950})',
        activeColor: 'light-dark(#ffffff, {sky.950})',
        focusRing: {
            color: 'light-dark({sky.500}, {sky.400})',
            shadow: 'none'
        }
    },
    success: {
        background: 'light-dark({green.500}, {green.400})',
        hoverBackground: 'light-dark({green.400}, {green.300})',
        activeBackground: 'light-dark({green.300}, {green.200})',
        borderColor: 'light-dark({green.500}, {green.400})',
        hoverBorderColor: 'light-dark({green.400}, {green.300})',
        activeBorderColor: 'light-dark({green.300}, {green.200})',
        color: 'light-dark(#ffffff, {green.950})',
        hoverColor: 'light-dark(#ffffff, {green.950})',
        activeColor: 'light-dark(#ffffff, {green.950})',
        focusRing: {
            color: 'light-dark({green.500}, {green.400})',
            shadow: 'none'
        }
    },
    warn: {
        background: 'light-dark({orange.500}, {orange.400})',
        hoverBackground: 'light-dark({orange.400}, {orange.300})',
        activeBackground: 'light-dark({orange.300}, {orange.200})',
        borderColor: 'light-dark({orange.500}, {orange.400})',
        hoverBorderColor: 'light-dark({orange.400}, {orange.300})',
        activeBorderColor: 'light-dark({orange.300}, {orange.200})',
        color: 'light-dark(#ffffff, {orange.950})',
        hoverColor: 'light-dark(#ffffff, {orange.950})',
        activeColor: 'light-dark(#ffffff, {orange.950})',
        focusRing: {
            color: 'light-dark({orange.500}, {orange.400})',
            shadow: 'none'
        }
    },
    help: {
        background: 'light-dark({purple.500}, {purple.400})',
        hoverBackground: 'light-dark({purple.400}, {purple.300})',
        activeBackground: 'light-dark({purple.300}, {purple.200})',
        borderColor: 'light-dark({purple.500}, {purple.400})',
        hoverBorderColor: 'light-dark({purple.400}, {purple.300})',
        activeBorderColor: 'light-dark({purple.300}, {purple.200})',
        color: 'light-dark(#ffffff, {purple.950})',
        hoverColor: 'light-dark(#ffffff, {purple.950})',
        activeColor: 'light-dark(#ffffff, {purple.950})',
        focusRing: {
            color: 'light-dark({purple.500}, {purple.400})',
            shadow: 'none'
        }
    },
    danger: {
        background: 'light-dark({red.500}, {red.400})',
        hoverBackground: 'light-dark({red.400}, {red.300})',
        activeBackground: 'light-dark({red.300}, {red.200})',
        borderColor: 'light-dark({red.500}, {red.400})',
        hoverBorderColor: 'light-dark({red.400}, {red.300})',
        activeBorderColor: 'light-dark({red.300}, {red.200})',
        color: 'light-dark(#ffffff, {red.950})',
        hoverColor: 'light-dark(#ffffff, {red.950})',
        activeColor: 'light-dark(#ffffff, {red.950})',
        focusRing: {
            color: 'light-dark({red.500}, {red.400})',
            shadow: 'none'
        }
    },
    contrast: {
        background: 'light-dark({surface.950}, {surface.0})',
        hoverBackground: 'light-dark({surface.800}, {surface.100})',
        activeBackground: 'light-dark({surface.700}, {surface.200})',
        borderColor: 'light-dark({surface.950}, {surface.0})',
        hoverBorderColor: 'light-dark({surface.800}, {surface.100})',
        activeBorderColor: 'light-dark({surface.700}, {surface.200})',
        color: 'light-dark({surface.0}, {surface.950})',
        hoverColor: 'light-dark({surface.0}, {surface.950})',
        activeColor: 'light-dark({surface.0}, {surface.950})',
        focusRing: {
            color: 'light-dark({surface.950}, {surface.0})',
            shadow: 'none'
        }
    }
};

export const outlined: ButtonTokenSections.Outlined = {
    primary: {
        hoverBackground: 'light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))',
        activeBackground: 'light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))',
        borderColor: 'light-dark({primary.color}, {primary.700})',
        color: '{primary.color}'
    },
    secondary: {
        hoverBackground: 'light-dark({surface.50}, rgba(255,255,255,0.04))',
        activeBackground: 'light-dark({surface.100}, rgba(255,255,255,0.16))',
        borderColor: 'light-dark({surface.600}, {surface.700})',
        color: 'light-dark({surface.600}, {surface.400})'
    },
    success: {
        hoverBackground: 'light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))',
        activeBackground: 'light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))',
        borderColor: 'light-dark({green.500}, {green.700})',
        color: 'light-dark({green.500}, {green.400})'
    },
    info: {
        hoverBackground: 'light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))',
        activeBackground: 'light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))',
        borderColor: 'light-dark({sky.500}, {sky.700})',
        color: 'light-dark({sky.500}, {sky.400})'
    },
    warn: {
        hoverBackground: 'light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))',
        activeBackground: 'light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))',
        borderColor: 'light-dark({orange.500}, {orange.700})',
        color: 'light-dark({orange.500}, {orange.400})'
    },
    help: {
        hoverBackground: 'light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))',
        activeBackground: 'light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))',
        borderColor: 'light-dark({purple.500}, {purple.700})',
        color: 'light-dark({purple.500}, {purple.400})'
    },
    danger: {
        hoverBackground: 'light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))',
        activeBackground: 'light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))',
        borderColor: 'light-dark({red.500}, {red.700})',
        color: 'light-dark({red.500}, {red.400})'
    },
    contrast: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        borderColor: 'light-dark({surface.950}, {surface.500})',
        color: 'light-dark({surface.950}, {surface.0})'
    },
    plain: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        borderColor: 'light-dark({surface.900}, {surface.600})',
        color: 'light-dark({surface.900}, {surface.0})'
    }
};

export const text: ButtonTokenSections.Text = {
    primary: {
        hoverBackground: 'light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))',
        activeBackground: 'light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))',
        color: '{primary.color}'
    },
    secondary: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        color: 'light-dark({surface.600}, {surface.400})'
    },
    success: {
        hoverBackground: 'light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))',
        activeBackground: 'light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))',
        color: 'light-dark({green.500}, {green.400})'
    },
    info: {
        hoverBackground: 'light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))',
        activeBackground: 'light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))',
        color: 'light-dark({sky.500}, {sky.400})'
    },
    warn: {
        hoverBackground: 'light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))',
        activeBackground: 'light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))',
        color: 'light-dark({orange.500}, {orange.400})'
    },
    help: {
        hoverBackground: 'light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))',
        activeBackground: 'light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))',
        color: 'light-dark({purple.500}, {purple.400})'
    },
    danger: {
        hoverBackground: 'light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))',
        activeBackground: 'light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))',
        color: 'light-dark({red.500}, {red.400})'
    },
    contrast: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        color: 'light-dark({surface.950}, {surface.0})'
    },
    plain: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        color: 'light-dark({surface.900}, {surface.0})'
    }
};

export const link: ButtonTokenSections.Link = {
    color: '{primary.color}',
    hoverColor: '{primary.color}',
    activeColor: '{primary.color}'
};

export const css: ButtonTokenSections.CSS = /*css*/ `
.p-button:focus-visible {
    background: dt('button.primary.active.background');
    border-color: dt('button.primary.active.background');
}

.p-button-secondary:focus-visible {
    background: dt('button.secondary.active.background');
    border-color: dt('button.secondary.active.background');
}

.p-button-success:focus-visible {
    background: dt('button.success.active.background');
    border-color: dt('button.success.active.background');
}

.p-button-info:focus-visible {
    background: dt('button.info.active.background');
    border-color: dt('button.info.active.background');
}

.p-button-warn:focus-visible {
    background: dt('button.warn.active.background');
    border-color: dt('button.warn.active.background');
}

.p-button-help:focus-visible {
    background: dt('button.help.active.background');
    border-color: dt('button.help.active.background');
}

.p-button-danger:focus-visible {
    background: dt('button.danger.active.background');
    border-color: dt('button.danger.active.background');
}

.p-button-contrast:focus-visible {
    background: dt('button.contrast.active.background');
    border-color: dt('button.contrast.active.background');
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, dt('primary.color'), transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: dt('button.text.primary.active.background');
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: dt('button.text.secondary.active.background');
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: dt('button.text.success.active.background');
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: dt('button.text.info.active.background');
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: dt('button.text.warn.active.background');
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: dt('button.text.help.active.background');
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: dt('button.text.danger.active.background');
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: dt('button.text.contrast.active.background');
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: dt('button.text.plain.active.background');
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: dt('button.outlined.primary.active.background');
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: dt('button.outlined.secondary.active.background');
    border-color: dt('button.outlined.secondary.border.color');
}

.p-button-success.p-button-outlined:focus-visible {
    background: dt('button.outlined.success.active.background');
}

.p-button-info.p-button-outlined:focus-visible {
    background: dt('button.outlined.info.active.background');
}

.p-button-warn.p-button-outlined:focus-visible {
    background: dt('button.outlined.warn.active.background');
}

.p-button-help.p-button-outlined:focus-visible {
    background: dt('button.outlined.help.active.background');
}

.p-button-danger.p-button-outlined:focus-visible {
    background: dt('button.outlined.danger.active.background');
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: dt('button.outlined.contrast.active.background');
}

.p-button-plain.p-button-outlined:focus-visible {
    background: dt('button.outlined.plain.active.background');
}
`;

export default {
    root,
    outlined,
    text,
    link,
    css
} satisfies ButtonDesignTokens;
