import type { ButtonDesignTokens, ButtonTokenSections } from '@primeuix/themes/types/button';

export const root: ButtonTokenSections.Root = {
    borderRadius: '{form.field.border.radius}',
    roundedBorderRadius: '2rem',
    gap: '0.5rem',
    paddingX: '{form.field.padding.x}',
    paddingY: '{form.field.padding.y}',
    iconOnlyWidth: '2.25rem',
    fontSize: '{form.field.font.size}',
    sm: {
        fontSize: '{form.field.sm.font.size}',
        paddingX: '{form.field.sm.padding.x}',
        paddingY: '{form.field.sm.padding.y}',
        iconOnlyWidth: '1.75rem'
    },
    lg: {
        fontSize: '{form.field.lg.font.size}',
        paddingX: '{form.field.lg.padding.x}',
        paddingY: '{form.field.lg.padding.y}',
        iconOnlyWidth: '2.625rem'
    },
    label: {
        fontWeight: '700'
    },
    raisedShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        offset: '{focus.ring.offset}'
    },
    badgeSize: '1rem',
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
        background: 'light-dark({surface.200}, {surface.700})',
        hoverBackground: 'light-dark({surface.300}, {surface.600})',
        activeBackground: 'light-dark({surface.400}, {surface.500})',
        borderColor: 'light-dark({surface.200}, {surface.700})',
        hoverBorderColor: 'light-dark({surface.300}, {surface.600})',
        activeBorderColor: 'light-dark({surface.400}, {surface.500})',
        color: 'light-dark({surface.700}, {surface.200})',
        hoverColor: 'light-dark({surface.800}, {surface.100})',
        activeColor: 'light-dark({surface.900}, {surface.0})',
        focusRing: {
            color: 'light-dark({surface.700}, {surface.200})',
            shadow: 'none'
        }
    },
    info: {
        background: 'light-dark({sky.600}, {sky.500})',
        hoverBackground: 'light-dark({sky.700}, {sky.400})',
        activeBackground: 'light-dark({sky.800}, {sky.300})',
        borderColor: 'light-dark({sky.600}, {sky.500})',
        hoverBorderColor: 'light-dark({sky.700}, {sky.400})',
        activeBorderColor: 'light-dark({sky.800}, {sky.300})',
        color: 'light-dark(#ffffff, {sky.950})',
        hoverColor: 'light-dark(#ffffff, {sky.950})',
        activeColor: 'light-dark(#ffffff, {sky.950})',
        focusRing: {
            color: 'light-dark({sky.600}, {sky.500})',
            shadow: 'none'
        }
    },
    success: {
        background: 'light-dark({green.600}, {green.500})',
        hoverBackground: 'light-dark({green.700}, {green.400})',
        activeBackground: 'light-dark({green.800}, {green.300})',
        borderColor: 'light-dark({green.600}, {green.500})',
        hoverBorderColor: 'light-dark({green.700}, {green.400})',
        activeBorderColor: 'light-dark({green.800}, {green.300})',
        color: 'light-dark(#ffffff, {green.950})',
        hoverColor: 'light-dark(#ffffff, {green.950})',
        activeColor: 'light-dark(#ffffff, {green.950})',
        focusRing: {
            color: 'light-dark({green.600}, {green.500})',
            shadow: 'none'
        }
    },
    warn: {
        background: 'light-dark({orange.600}, {orange.500})',
        hoverBackground: 'light-dark({orange.700}, {orange.400})',
        activeBackground: 'light-dark({orange.800}, {orange.300})',
        borderColor: 'light-dark({orange.600}, {orange.500})',
        hoverBorderColor: 'light-dark({orange.700}, {orange.400})',
        activeBorderColor: 'light-dark({orange.800}, {orange.300})',
        color: 'light-dark(#ffffff, {orange.950})',
        hoverColor: 'light-dark(#ffffff, {orange.950})',
        activeColor: 'light-dark(#ffffff, {orange.950})',
        focusRing: {
            color: 'light-dark({orange.600}, {orange.500})',
            shadow: 'none'
        }
    },
    help: {
        background: 'light-dark({purple.600}, {purple.500})',
        hoverBackground: 'light-dark({purple.700}, {purple.400})',
        activeBackground: 'light-dark({purple.800}, {purple.300})',
        borderColor: 'light-dark({purple.600}, {purple.500})',
        hoverBorderColor: 'light-dark({purple.700}, {purple.400})',
        activeBorderColor: 'light-dark({purple.800}, {purple.300})',
        color: 'light-dark(#ffffff, {purple.950})',
        hoverColor: 'light-dark(#ffffff, {purple.950})',
        activeColor: 'light-dark(#ffffff, {purple.950})',
        focusRing: {
            color: 'light-dark({purple.600}, {purple.500})',
            shadow: 'none'
        }
    },
    danger: {
        background: 'light-dark({red.600}, {red.500})',
        hoverBackground: 'light-dark({red.700}, {red.400})',
        activeBackground: 'light-dark({red.800}, {red.300})',
        borderColor: 'light-dark({red.600}, {red.500})',
        hoverBorderColor: 'light-dark({red.700}, {red.400})',
        activeBorderColor: 'light-dark({red.800}, {red.300})',
        color: 'light-dark(#ffffff, {red.950})',
        hoverColor: 'light-dark(#ffffff, {red.950})',
        activeColor: 'light-dark(#ffffff, {red.950})',
        focusRing: {
            color: 'light-dark({red.600}, {red.500})',
            shadow: 'none'
        }
    },
    contrast: {
        background: 'light-dark({surface.950}, {surface.0})',
        hoverBackground: 'light-dark({surface.900}, {surface.100})',
        activeBackground: 'light-dark({surface.800}, {surface.200})',
        borderColor: 'light-dark({surface.950}, {surface.0})',
        hoverBorderColor: 'light-dark({surface.900}, {surface.100})',
        activeBorderColor: 'light-dark({surface.800}, {surface.200})',
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
        borderColor: '{primary.color}',
        color: '{primary.color}'
    },
    secondary: {
        hoverBackground: 'light-dark({surface.50}, rgba(255,255,255,0.04))',
        activeBackground: 'light-dark({surface.100}, rgba(255,255,255,0.16))',
        borderColor: 'light-dark({surface.600}, {surface.400})',
        color: 'light-dark({surface.600}, {surface.400})'
    },
    success: {
        hoverBackground: 'light-dark({green.50}, {green.950})',
        activeBackground: 'light-dark({green.100}, {green.900})',
        borderColor: 'light-dark({green.600}, {green.500})',
        color: 'light-dark({green.600}, {green.500})'
    },
    info: {
        hoverBackground: 'light-dark({sky.50}, {sky.950})',
        activeBackground: 'light-dark({sky.100}, {sky.900})',
        borderColor: 'light-dark({sky.600}, {sky.500})',
        color: 'light-dark({sky.600}, {sky.500})'
    },
    warn: {
        hoverBackground: 'light-dark({orange.50}, {orange.950})',
        activeBackground: 'light-dark({orange.100}, {orange.900})',
        borderColor: 'light-dark({orange.600}, {orange.500})',
        color: 'light-dark({orange.600}, {orange.500})'
    },
    help: {
        hoverBackground: 'light-dark({purple.50}, {purple.950})',
        activeBackground: 'light-dark({purple.100}, {purple.900})',
        borderColor: 'light-dark({purple.600}, {purple.500})',
        color: 'light-dark({purple.600}, {purple.500})'
    },
    danger: {
        hoverBackground: 'light-dark({red.50}, {red.950})',
        activeBackground: 'light-dark({red.100}, {red.900})',
        borderColor: 'light-dark({red.600}, {red.500})',
        color: 'light-dark({red.600}, {red.500})'
    },
    contrast: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        borderColor: 'light-dark({surface.950}, {surface.0})',
        color: 'light-dark({surface.950}, {surface.0})'
    },
    plain: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        borderColor: 'light-dark({surface.900}, {surface.0})',
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
        color: 'light-dark({green.600}, {green.500})'
    },
    info: {
        hoverBackground: 'light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))',
        activeBackground: 'light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))',
        color: 'light-dark({sky.600}, {sky.500})'
    },
    warn: {
        hoverBackground: 'light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))',
        activeBackground: 'light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))',
        color: 'light-dark({orange.600}, {orange.500})'
    },
    help: {
        hoverBackground: 'light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))',
        activeBackground: 'light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))',
        color: 'light-dark({purple.600}, {purple.500})'
    },
    danger: {
        hoverBackground: 'light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))',
        activeBackground: 'light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))',
        color: 'light-dark({red.600}, {red.500})'
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

export default {
    root,
    outlined,
    text,
    link
} satisfies ButtonDesignTokens;
