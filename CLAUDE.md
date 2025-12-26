# PrimeUIX Monorepo

Shared UI infrastructure for PrimeUI Libraries (PrimeNG, PrimeReact, PrimeVue).

> Focus on `packages/themes` and `packages/styles` only.

## Relevant Packages

Focus areas for this workspace:

- **`packages/themes`** (`@primeuix/themes`) - Design token system and theme presets
- **`packages/styles`** (`@primeuix/styles`) - Component CSS styles using design tokens

Supporting packages (dependencies):
- **`packages/styled`** (`@primeuix/styled`) - Runtime style utilities (`dt()` function, preset APIs)

## Quick Reference

```bash
# Install dependencies
pnpm install

# Build all packages (order matters - styled → styles/themes)
pnpm build

# Build specific packages
pnpm build:themes
pnpm build:styles

# Type checking
pnpm type:check

# Format code
pnpm format
```

## Package: @primeuix/themes

Design tokens and theme presets for 90+ components.

### Structure
```
packages/themes/src/
├── index.ts                    # Re-exports from @primeuix/styled
└── presets/
    ├── aura/                   # Theme preset
    │   ├── base/index.ts       # Primitive + semantic tokens
    │   ├── button/index.ts     # Component tokens
    │   ├── [component]/        # 90+ components
    │   └── css/index.ts        # Global CSS overrides
    ├── lara/
    ├── material/
    └── nora/
```

### Design Token Pattern

Component tokens use `{token.path}` syntax to reference other tokens:

```typescript
// packages/themes/src/presets/aura/button/index.ts
import type { ButtonDesignTokens } from '@primeuix/themes/types/button';

export default {
    root: {
        borderRadius: '{form.field.border.radius}',
        paddingX: '{form.field.padding.x}',
    },
    colorScheme: {
        light: {
            root: { primary: { background: '{primary.color}' } }
        },
        dark: {
            root: { primary: { background: '{primary.400}' } }
        }
    }
} satisfies ButtonDesignTokens;
```

### Key Conventions

- Each component exports `root` (base tokens) and `colorScheme` (light/dark variants)
- Type definitions in `types/[component]/index.d.ts` with `@designToken` JSDoc annotations
- Base tokens define color primitives (50-950 scales) and semantic tokens
- Token metadata auto-generated to `tokens/index.mjs` via `scripts/build-tokens.mjs`

## Package: @primeuix/styles

Component CSS using design tokens via `dt()` function.

### Structure
```
packages/styles/src/
├── index.ts                    # Barrel export (all components as *Style)
├── types.ts                    # StyleType definition
└── [component]/index.ts        # Component styles (95 components)
```

### Style Pattern

```typescript
// packages/styles/src/button/index.ts
export const style = /*css*/ `
.p-button {
    color: dt('button.primary.color');
    background: dt('button.primary.background');
    border: 1px solid dt('button.primary.border.color');
    padding: dt('button.padding.y') dt('button.padding.x');
}
`;
```

### Key Conventions

- `/*css*/` comment marker required for prebuild CSS validation
- Class prefix: `.p-` (e.g., `.p-button`, `.p-datatable`)
- BEM-like modifiers: `.p-button-primary`, `.p-button-outlined`
- `dt('token.path')` resolves design tokens at runtime
- CSS validated against `known-css-properties` during build

## Build System

- **Bundler**: tsup (TypeScript bundler over esbuild)
- **Output**: ESM only (`.mjs` files)
- **Minification**: Terser in production (preserves `theme`, `style`, `css` identifiers)

### Build Order

Packages must build in dependency order:
1. `styled` (provides `dt()` and preset utilities)
2. `styles` and `themes` (can build in parallel after styled)

## Code Style

- TypeScript strict mode
- Prettier for formatting
- ESLint for linting
- Conventional commits (enforced via commitlint)

## Adding a New Component

### In @primeuix/themes

1. Create `src/presets/[theme]/[component]/index.ts`
2. Create `types/[component]/index.d.ts` with `@designToken` annotations
3. Export from preset's `index.ts`
4. Run `pnpm build:themes` to regenerate token metadata

### In @primeuix/styles

1. Create `src/[component]/index.ts` with `/*css*/` tagged template
2. Export from `src/index.ts` as `[Component]Style`
3. Run `pnpm build:styles`

## Common Patterns

### Color Scales
Primitives use 11-stop scales: `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`

```typescript
emerald: {
    50: '#ecfdf5',
    // ... through 950
}
```

### State Variants
Components typically support:
- Color variants: `primary`, `secondary`, `success`, `info`, `warn`, `danger`, `help`, `contrast`
- Style variants: `outlined`, `text`, `link`
- Interactive states: `:hover`, `:active`, `:focus-visible`, `:disabled`
- Size modifiers: `-sm`, `-lg`
