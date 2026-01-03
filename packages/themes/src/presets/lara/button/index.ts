import type { ButtonDesignTokens, ButtonTokenSections } from '@primeuix/themes/types/button';

export const root: ButtonTokenSections.Root = {
    borderRadius: '{form.field.border.radius}',
    roundedBorderRadius: '2rem',
    gap: '0.5rem',
    paddingX: '1rem',
    paddingY: '{form.field.padding.y}',
    iconOnlyWidth: '2.75rem',
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
        iconOnlyWidth: '3.25rem'
    },
    label: {
        fontWeight: '600'
    },
    raisedShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        offset: '{form.field.focus.ring.offset}'
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
            color: 'transparent',
            shadow: 'light-dark(0 0 0 0.2rem {primary.200}, 0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%))'
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
            color: 'transparent',
            shadow: 'light-dark(0 0 0 0.2rem {surface.200}, 0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%))'
        }
    },
    info: {
        background: 'light-dark({sky.500}, {sky.400})',
        hoverBackground: 'light-dark({sky.600}, {sky.300})',
        activeBackground: 'light-dark({sky.700}, {sky.200})',
        borderColor: 'light-dark({sky.500}, {sky.400})',
        hoverBorderColor: 'light-dark({sky.600}, {sky.300})',
        activeBorderColor: 'light-dark({sky.700}, {sky.200})',
        color: 'light-dark(#ffffff, {sky.950})',
        hoverColor: 'light-dark(#ffffff, {sky.950})',
        activeColor: 'light-dark(#ffffff, {sky.950})',
        focusRing: {
            color: 'transparent',
            shadow: 'light-dark(0 0 0 0.2rem {sky.200}, 0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%))'
        }
    },
    success: {
        background: 'light-dark({green.500}, {green.400})',
        hoverBackground: 'light-dark({green.600}, {green.300})',
        activeBackground: 'light-dark({green.700}, {green.200})',
        borderColor: 'light-dark({green.500}, {green.400})',
        hoverBorderColor: 'light-dark({green.600}, {green.300})',
        activeBorderColor: 'light-dark({green.700}, {green.200})',
        color: 'light-dark(#ffffff, {green.950})',
        hoverColor: 'light-dark(#ffffff, {green.950})',
        activeColor: 'light-dark(#ffffff, {green.950})',
        focusRing: {
            color: 'transparent',
            shadow: 'light-dark(0 0 0 0.2rem {green.200}, 0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%))'
        }
    },
    warn: {
        background: 'light-dark({orange.500}, {orange.400})',
        hoverBackground: 'light-dark({orange.600}, {orange.300})',
        activeBackground: 'light-dark({orange.700}, {orange.200})',
        borderColor: 'light-dark({orange.500}, {orange.400})',
        hoverBorderColor: 'light-dark({orange.600}, {orange.300})',
        activeBorderColor: 'light-dark({orange.700}, {orange.200})',
        color: 'light-dark(#ffffff, {orange.950})',
        hoverColor: 'light-dark(#ffffff, {orange.950})',
        activeColor: 'light-dark(#ffffff, {orange.950})',
        focusRing: {
            color: 'transparent',
            shadow: 'light-dark(0 0 0 0.2rem {orange.200}, 0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%))'
        }
    },
    help: {
        background: 'light-dark({purple.500}, {purple.400})',
        hoverBackground: 'light-dark({purple.600}, {purple.300})',
        activeBackground: 'light-dark({purple.700}, {purple.200})',
        borderColor: 'light-dark({purple.500}, {purple.400})',
        hoverBorderColor: 'light-dark({purple.600}, {purple.300})',
        activeBorderColor: 'light-dark({purple.700}, {purple.200})',
        color: 'light-dark(#ffffff, {purple.950})',
        hoverColor: 'light-dark(#ffffff, {purple.950})',
        activeColor: 'light-dark(#ffffff, {purple.950})',
        focusRing: {
            color: 'transparent',
            shadow: 'light-dark(0 0 0 0.2rem {purple.200}, 0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%))'
        }
    },
    danger: {
        background: 'light-dark({red.500}, {red.400})',
        hoverBackground: 'light-dark({red.600}, {red.300})',
        activeBackground: 'light-dark({red.700}, {red.200})',
        borderColor: 'light-dark({red.500}, {red.400})',
        hoverBorderColor: 'light-dark({red.600}, {red.300})',
        activeBorderColor: 'light-dark({red.700}, {red.200})',
        color: 'light-dark(#ffffff, {red.950})',
        hoverColor: 'light-dark(#ffffff, {red.950})',
        activeColor: 'light-dark(#ffffff, {red.950})',
        focusRing: {
            color: 'transparent',
            shadow: 'light-dark(0 0 0 0.2rem {red.200}, 0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%))'
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
            color: 'transparent',
            shadow: 'light-dark(0 0 0 0.2rem {surface.400}, 0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%))'
        }
    }
};

export const outlined: ButtonTokenSections.Outlined = {
    primary: {
        hoverBackground: 'light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))',
        activeBackground: 'light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))',
        borderColor: 'light-dark({primary.200}, {primary.700})',
        color: '{primary.color}'
    },
    secondary: {
        hoverBackground: 'light-dark({surface.50}, rgba(255,255,255,0.04))',
        activeBackground: 'light-dark({surface.100}, rgba(255,255,255,0.16))',
        borderColor: 'light-dark({surface.200}, {surface.700})',
        color: 'light-dark({surface.500}, {surface.400})'
    },
    success: {
        hoverBackground: 'light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))',
        activeBackground: 'light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))',
        borderColor: 'light-dark({green.200}, {green.700})',
        color: 'light-dark({green.500}, {green.400})'
    },
    info: {
        hoverBackground: 'light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))',
        activeBackground: 'light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))',
        borderColor: 'light-dark({sky.200}, {sky.700})',
        color: 'light-dark({sky.500}, {sky.400})'
    },
    warn: {
        hoverBackground: 'light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))',
        activeBackground: 'light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))',
        borderColor: 'light-dark({orange.200}, {orange.700})',
        color: 'light-dark({orange.500}, {orange.400})'
    },
    help: {
        hoverBackground: 'light-dark({purple.50}, color-mix(in srgb, {help.400}, transparent 96%))',
        activeBackground: 'light-dark({purple.100}, color-mix(in srgb, {help.400}, transparent 84%))',
        borderColor: 'light-dark({purple.200}, {purple.700})',
        color: 'light-dark({purple.500}, {purple.400})'
    },
    danger: {
        hoverBackground: 'light-dark({red.50}, color-mix(in srgb, {danger.400}, transparent 96%))',
        activeBackground: 'light-dark({red.100}, color-mix(in srgb, {danger.400}, transparent 84%))',
        borderColor: 'light-dark({red.200}, {red.700})',
        color: 'light-dark({red.500}, {red.400})'
    },
    contrast: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        borderColor: 'light-dark({surface.700}, {surface.500})',
        color: 'light-dark({surface.950}, {surface.0})'
    },
    plain: {
        hoverBackground: 'light-dark({surface.50}, {surface.800})',
        activeBackground: 'light-dark({surface.100}, {surface.700})',
        borderColor: 'light-dark({surface.200}, {surface.600})',
        color: 'light-dark({surface.700}, {surface.0})'
    }
};

export const text: ButtonTokenSections.Text = {
    primary: {
        hoverBackground: 'light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))',
        activeBackground: 'light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))',
        color: '{primary.color}'
    },
    secondary: {
        hoverBackground: 'light-dark({surface.100}, {surface.700})',
        activeBackground: 'light-dark({surface.200}, {surface.600})',
        color: 'light-dark({surface.600}, {surface.300})'
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
        color: 'light-dark({surface.700}, {surface.0})'
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
