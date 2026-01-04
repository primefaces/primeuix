import type { BaseDesignTokens, BaseTokenSections } from '@primeuix/themes/types/base';

export const primitive: BaseTokenSections.Primitive = {
    borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px'
    },
    emerald: { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b', 950: '#022c22' },
    green: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16' },
    lime: { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314', 950: '#1a2e05' },
    red: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a' },
    orange: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12', 950: '#431407' },
    amber: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f', 950: '#451a03' },
    yellow: { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12', 950: '#422006' },
    teal: { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a', 950: '#042f2e' },
    cyan: { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63', 950: '#083344' },
    sky: { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e', 950: '#082f49' },
    blue: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554' },
    indigo: { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b' },
    violet: { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065' },
    purple: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764' },
    fuchsia: { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75', 950: '#4a044e' },
    pink: { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843', 950: '#500724' },
    rose: { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337', 950: '#4c0519' },
    slate: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617' },
    gray: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827', 950: '#030712' },
    zinc: { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b' },
    neutral: { 50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626', 900: '#171717', 950: '#0a0a0a' },
    stone: { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c', 800: '#292524', 900: '#1c1917', 950: '#0c0a09' }
};

export const semantic: BaseTokenSections.Semantic = {
    typography: {
        lineHeight: '1.5',
        fontFamily: 'inherit',
        fontWeight: 'normal',
        fontSize: '0.875rem'
    },
    transitionDuration: '0.2s',
    focusRing: {
        width: '0',
        style: 'none',
        color: 'transparent',
        offset: '0',
        shadow: '0 0 0 0.2rem light-dark({primary.200}, color-mix(in srgb, {primary.color}, transparent 80%))'
    },
    disabledOpacity: '0.6',
    iconSize: '0.875rem',
    anchorGutter: '2px',
    primary: {
        50: '{emerald.50}',
        100: '{emerald.100}',
        200: '{emerald.200}',
        300: '{emerald.300}',
        400: '{emerald.400}',
        500: '{emerald.500}',
        600: '{emerald.600}',
        700: '{emerald.700}',
        800: '{emerald.800}',
        900: '{emerald.900}',
        950: '{emerald.950}',
        color: 'light-dark({primary.500}, {primary.400})',
        contrastColor: 'light-dark(#ffffff, {surface.900})',
        hoverColor: 'light-dark({primary.600}, {primary.300})',
        activeColor: 'light-dark({primary.700}, {primary.200})'
    },
    formField: {
        fontWeight: '{typography.font.weight}',
        fontSize: '{typography.font.size}',
        paddingX: '0.625rem',
        paddingY: '0.5rem',
        sm: {
            fontSize: '0.75rem',
            paddingX: '0.5rem',
            paddingY: '0.375rem'
        },
        lg: {
            fontSize: '1rem',
            paddingX: '0.75rem',
            paddingY: '0.625rem'
        },
        borderRadius: '{border.radius.md}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        },
        transitionDuration: '{transition.duration}',
        background: 'light-dark({surface.0}, {surface.950})',
        disabledBackground: 'light-dark({surface.200}, {surface.700})',
        filledBackground: 'light-dark({surface.50}, {surface.800})',
        filledHoverBackground: 'light-dark({surface.50}, {surface.800})',
        filledFocusBackground: 'light-dark({surface.0}, {surface.950})',
        borderColor: 'light-dark({surface.300}, {surface.600})',
        hoverBorderColor: '{primary.color}',
        focusBorderColor: '{primary.color}',
        invalidBorderColor: 'light-dark({red.400}, {red.300})',
        color: 'light-dark({surface.700}, {surface.0})',
        disabledColor: 'light-dark({surface.500}, {surface.400})',
        placeholderColor: 'light-dark({surface.500}, {surface.400})',
        invalidPlaceholderColor: 'light-dark({red.600}, {red.400})',
        floatLabelColor: 'light-dark({surface.500}, {surface.400})',
        floatLabelFocusColor: 'light-dark({primary.600}, {primary.color})',
        floatLabelActiveColor: 'light-dark({surface.500}, {surface.400})',
        floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
        iconColor: 'light-dark({surface.500}, {surface.400})',
        shadow: 'none'
    },
    list: {
        padding: '0.5rem 0',
        gap: '0',
        header: {
            padding: '0.5rem 0.875rem 0 0.875rem'
        },
        option: {
            padding: '0.5rem 0.875rem',
            borderRadius: '0',
            fontWeight: '{typography.font.weight}',
            fontSize: '{typography.font.size}',
            transitionDuration: '{transition.duration}',
            focusBackground: 'light-dark({surface.100}, {surface.800})',
            selectedBackground: '{highlight.background}',
            selectedFocusBackground: '{highlight.focus.background}',
            color: '{text.color}',
            focusColor: '{text.hover.color}',
            selectedColor: '{highlight.color}',
            selectedFocusColor: '{highlight.focus.color}',
            selectedFontWeight: '{typography.font.weight}',
            icon: {
                color: 'light-dark({surface.400}, {surface.500})',
                focusColor: 'light-dark({surface.500}, {surface.400})'
            }
        },
        optionGroup: {
            padding: '0.5rem 0.875rem',
            fontWeight: '600',
            fontSize: '{typography.font.size}',
            background: 'transparent',
            color: 'light-dark({text.color}, {text.color})'
        }
    },
    content: {
        borderRadius: '{border.radius.md}',
        background: 'light-dark({surface.0}, {surface.900})',
        hoverBackground: 'light-dark({surface.100}, {surface.800})',
        borderColor: 'light-dark({surface.200}, {surface.700})',
        color: '{text.color}',
        hoverColor: '{text.hover.color}'
    },
    mask: {
        transitionDuration: '0.3s',
        background: 'light-dark(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
        color: '{surface.200}'
    },
    navigation: {
        list: {
            padding: '0.5rem 0',
            gap: '0'
        },
        item: {
            padding: '0.5rem 0.875rem',
            borderRadius: '0',
            gap: '0.5rem',
            focusBackground: 'light-dark({surface.100}, {surface.800})',
            activeBackground: 'light-dark({surface.100}, {surface.800})',
            color: '{text.color}',
            focusColor: '{text.hover.color}',
            activeColor: '{text.hover.color}',
            icon: {
                size: '{icon.size}',
                color: 'light-dark({surface.400}, {surface.500})',
                focusColor: 'light-dark({surface.500}, {surface.400})',
                activeColor: 'light-dark({surface.500}, {surface.400})'
            },
            label: {
                fontWeight: '{typography.font.weight}',
                fontSize: '{typography.font.size}'
            },
            transitionDuration: '{transition.duration}'
        },
        submenuLabel: {
            padding: '0.5rem 0.875rem',
            fontWeight: '600',
            fontSize: '{typography.font.size}',
            background: 'transparent',
            color: 'light-dark({text.color}, {text.color})'
        },
        submenuIcon: {
            size: '0.75rem',
            color: 'light-dark({surface.400}, {surface.500})',
            focusColor: 'light-dark({surface.500}, {surface.400})',
            activeColor: 'light-dark({surface.500}, {surface.400})'
        }
    },
    overlay: {
        select: {
            borderRadius: '{border.radius.md}',
            shadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
            background: 'light-dark({surface.0}, {surface.900})',
            borderColor: 'light-dark({surface.200}, {surface.700})',
            color: '{text.color}'
        },
        popover: {
            borderRadius: '{border.radius.md}',
            padding: '0.875rem',
            shadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            background: 'light-dark({surface.0}, {surface.900})',
            borderColor: 'light-dark({surface.200}, {surface.700})',
            color: '{text.color}'
        },
        modal: {
            borderRadius: '{border.radius.xl}',
            padding: '1.25rem',
            shadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
            background: 'light-dark({surface.0}, {surface.900})',
            borderColor: 'light-dark({surface.200}, {surface.700})',
            color: '{text.color}'
        },
        navigation: {
            shadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
        }
    },
    surface: {
        0: '#ffffff',
        50: 'light-dark({slate.50}, {zinc.50})',
        100: 'light-dark({slate.100}, {zinc.100})',
        200: 'light-dark({slate.200}, {zinc.200})',
        300: 'light-dark({slate.300}, {zinc.300})',
        400: 'light-dark({slate.400}, {zinc.400})',
        500: 'light-dark({slate.500}, {zinc.500})',
        600: 'light-dark({slate.600}, {zinc.600})',
        700: 'light-dark({slate.700}, {zinc.700})',
        800: 'light-dark({slate.800}, {zinc.800})',
        900: 'light-dark({slate.900}, {zinc.900})',
        950: 'light-dark({slate.950}, {zinc.950})'
    },
    highlight: {
        background: 'light-dark({primary.50}, color-mix(in srgb, {primary.400}, transparent 84%))',
        focusBackground: 'light-dark({primary.100}, color-mix(in srgb, {primary.400}, transparent 76%))',
        color: 'light-dark({primary.700}, rgba(255,255,255,.87))',
        focusColor: 'light-dark({primary.800}, rgba(255,255,255,.87))'
    },
    text: {
        color: 'light-dark({surface.700}, {surface.0})',
        hoverColor: 'light-dark({surface.800}, {surface.0})',
        mutedColor: 'light-dark({surface.500}, {surface.400})',
        hoverMutedColor: 'light-dark({surface.600}, {surface.300})'
    }
};

export default {
    primitive,
    semantic
} satisfies BaseDesignTokens;
