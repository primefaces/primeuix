# PrimeUIX Monorepo

Shared UI infrastructure for PrimeTek libraries (PrimeNG, PrimeReact, PrimeVue).

> **Scope:** focus on [`packages/themes`](packages/themes) and [`packages/styles`](packages/styles). Other packages (`forms`, `headless`, `locale`, `mcp`, `motion`, `styled`, `utils`) are out of scope unless explicitly relevant.

## Mental Model

Two packages, one runtime contract:

- **`packages/themes`** = design **tokens** (TypeScript objects). Define *values* (colors, spacing, radii, per-state colors).
- **`packages/styles`** = component **CSS** (tagged template strings). Define *which* token slot each property reads.

The bridge between them is `dt('token.path')`, a runtime resolver supplied by `@primeuix/styled`. CSS files reference token paths as strings; the active preset (Aura/Material/Lara/Nora, or a `definePreset` extension) supplies the values.

```
@primeuix/styles  ──dt('button.primary.color')──►  @primeuix/styled  ──looks up──►  active preset (from @primeuix/themes)
```

A change to a token in `themes/` rethemes every component that reads it without touching `styles/`.

## Quick Reference

```bash
pnpm install                  # install all workspace deps
pnpm build                    # build every package (workspace-concurrency=1, dependency order)
pnpm build:styled             # build the runtime first if you've cleaned dist/
pnpm build:themes             # themes (depends on styled)
pnpm build:styles             # styles (depends on styled)
pnpm type:check               # tsc --noEmit across all packages
pnpm format                   # prettier --write across the repo
pnpm format:check             # prettier --check (runs as part of `pnpm build`)
```

Single-package iteration:
```bash
pnpm --filter themes build:dev    # tsup --watch
pnpm --filter styles build:dev
```

## Package: @primeuix/themes

Design tokens for ~91 components across 4 presets.

### Layout

```
packages/themes/
├── src/
│   ├── index.ts                       # typed wrappers + re-exports @primeuix/styled
│   └── presets/
│       ├── aura/                      # 92 component dirs (largest preset)
│       │   ├── base/index.ts          # primitive + semantic tokens
│       │   ├── button/index.ts        # component tokens
│       │   ├── …                      # one dir per component
│       │   ├── css/index.ts           # extra global CSS injected by the preset
│       │   └── index.ts               # assembles { ...base, components, css }
│       ├── lara/                      # 91 components
│       ├── material/                  # 91 components
│       └── nora/                      # 91 components
├── types/                             # public d.ts surface (per-component + shared)
├── tokens.ts                          # AUTO-GENERATED token metadata (do not hand-edit)
├── scripts/
│   ├── build-tokens.mjs               # TypeDoc → tokens.ts (reads @designToken JSDoc)
│   └── postbuild.mjs
└── tsup.config.ts                     # 3 builds: ESM dist/, IIFE umd/, ESM tokens/
```

### `src/index.ts` — public API

The package is *not* a token bundle. It re-exports `@primeuix/styled` and provides typed wrappers:

```typescript
// packages/themes/src/index.ts
export const definePreset      = (...presets: Preset[]) => Styled.definePreset(...presets);
export const updatePreset      = (...presets: Preset[]) => Styled.updatePreset(...presets);
export const updatePrimaryPalette = (palette?: PaletteDesignToken) => Styled.updatePrimaryPalette<…>(palette);
export const updateSurfacePalette = (palette?: PaletteDesignToken) => Styled.updateSurfacePalette<…>(palette);
export const usePreset         = (...presets: Preset[]) => Styled.usePreset(...presets);
export const useTheme          = (theme: Theme)         => Styled.useTheme(theme);
export * from '@primeuix/styled';
```

Consumers import a preset from a subpath: `import Aura from '@primeuix/themes/aura'`.

### Preset assembly pattern

Each preset's root `index.ts` imports every component, spreads `base`, attaches `components`, and pins `css`:

```typescript
// packages/themes/src/presets/aura/index.ts
export default {
    ...base,                       // { primitive, semantic }
    components: { accordion, autocomplete, …, virtualscroller },
    css                            // global CSS string from preset/css/index.ts
} satisfies Preset<BaseDesignTokens>;
```

### Token reference syntax

Tokens reference other tokens with `{token.path}`. The runtime resolves chains. `light-dark(a, b)` is the standard CSS function and the canonical way to express dual-mode values inline:

```typescript
// packages/themes/src/presets/aura/button/index.ts
export const root: ButtonTokenSections.Root = {
    borderRadius: '{form.field.border.radius}',
    paddingX:     '{form.field.padding.x}',
    primary: {
        background:       '{primary.color}',
        hoverBackground:  '{primary.hover.color}',
        focusRing: { color: '{primary.color}', shadow: 'none' }
    },
    secondary: {
        background:       'light-dark({surface.100}, {surface.800})',
        hoverBackground:  'light-dark({surface.200}, {surface.700})',
        // …
    }
};

export default { root, outlined, text, link } satisfies ButtonDesignTokens;
```

Component files typically export named sections (`root`, `outlined`, `text`, `link`, …) plus a `default` that aggregates them.

### Base tokens (`presets/<name>/base/index.ts`)

- **`primitive`** — `borderRadius` scale + 21 named color scales (50→950): `emerald`, `green`, `lime`, `red`, `orange`, `amber`, `yellow`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`.
- **`semantic`** — cross-cutting tokens: `typography`, `transitionDuration`, `focusRing`, `disabledOpacity`, `iconSize`, `anchorGutter`, `primary` (50–950 + `color`/`contrastColor`/`hoverColor`/`activeColor`), `formField`, `list`, `content`, `mask`, etc.

The `default` from `base/index.ts` is `{ primitive, semantic }` typed as `BaseDesignTokens`.

### Type system → token metadata pipeline

`types/<component>/index.d.ts` defines two things per component:

1. A `<Component>TokenSections` namespace with one interface per section (`Root`, `Outlined`, `ColorScheme`, …).
2. A `<Component>DesignTokens` interface that wires the sections together and extends `DesignTokens<Self>`.

Each leaf property is annotated with `@designToken <path>`:

```typescript
/**
 * Border radius of root
 * @designToken button.border.radius
 */
borderRadius?: string;
```

`scripts/build-tokens.mjs` runs TypeDoc against `types/`, walks `@designToken` tags, and writes `tokens.ts` (committed alongside the source). `tokens.ts` is published as the `./tokens` subpath and powers the docs site / VS Code metadata. **Never hand-edit `tokens.ts`** — re-run `pnpm build:themes` (or just `node scripts/build-tokens.mjs`) after changing JSDoc.

### `package.json` exports map

```jsonc
{
  ".":          "./dist/index.mjs",                 // typed wrappers + re-exports
  "./types":    "./types/index.d.ts",               // top-level type bundle
  "./types/*":  "./types/*/index.d.ts",             // per-component types
  "./tokens":   "./tokens/index.mjs",               // generated metadata
  "./*":        "./dist/*/index.mjs"                // /aura, /aura/button, …
}
```

## Package: @primeuix/styles

Component CSS for 95 components, expressed as tagged template strings that read `dt('…')`.

### Layout

```
packages/styles/
├── src/
│   ├── index.ts             # barrel: export * as <Component>Style from '@primeuix/styles/<component>'
│   ├── types.ts             # declares `style: StyleType`
│   └── <component>/index.ts # 95 dirs (base, button, datatable, …)
├── scripts/prebuild.mjs     # validates /*css*/ blocks with known-css-properties
└── tsup.config.ts           # one ESM build per entry
```

### `src/index.ts` — barrel re-exports

```typescript
export * as ButtonStyle    from '@primeuix/styles/button';
export * as DataTableStyle from '@primeuix/styles/datatable';
// … 95 of these, alphabetical with `// ComponentName` comments
```

Each `<component>/index.ts` exports a single `style` string. `src/types.ts` declares its shape:

```typescript
import type { StyleType } from '@primeuix/styled';
export declare const style: StyleType;
```

### Style pattern

```typescript
// packages/styles/src/button/index.ts
export const style = /*css*/ `
    .p-button {
        background: dt('button.primary.background');
        border:     1px solid dt('button.primary.border.color');
        padding:    dt('button.padding.y') dt('button.padding.x');
        transition:
            background dt('button.transition.duration'),
            color      dt('button.transition.duration');
    }
    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
    }
    .p-button:focus-visible {
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
    }
    .p-button-sm  { padding: dt('button.sm.padding.y') dt('button.sm.padding.x'); }
    .p-button-lg  { padding: dt('button.lg.padding.y') dt('button.lg.padding.x'); }
    .p-button-secondary       { background: dt('button.secondary.background'); }
    .p-button-outlined        { border-color: dt('button.outlined.primary.border.color'); }
    .p-button-text            { color: dt('button.text.primary.color'); }
    .p-button-text.p-button-success { color: dt('button.text.success.color'); }
`;
```

### Hard requirements

- **`/*css*/` marker is mandatory.** `scripts/prebuild.mjs` regex-extracts every `` /*css*/ `…` `` block and runs it through `postcss` + [`known-css-properties`](https://github.com/known-css/known-css-properties). Any unknown property fails the build. Properties without the marker are not validated.
- **Class prefix `.p-`** for everything (`.p-button`, `.p-datatable-tbody`, …). BEM-style modifiers: `.p-button-primary`, `.p-button-outlined`, `.p-button-text.p-button-success`.
- **Always use `dt('…')`** for themable values — never hard-code colors/spacing/radii. Hard-coded layout primitives (`display`, `position`, `0`, `100%`, `1px`) are fine.
- **`/*css*/` block is a JS template literal.** Watch out for `${…}` (interpolation) and unescaped backticks.

### `package.json` exports map

```jsonc
{
  ".":   "./dist/index.mjs",      // barrel
  "./*": "./dist/*/index.mjs"     // /button, /datatable, …
}
```

## Build System

- **Bundler:** `tsup` (esbuild under the hood).
- **Output:** ESM `.mjs` only (themes also emits IIFE `umd/` for browser globals and a separate ESM `tokens/`).
- **Minifier:** Terser in production with `mangle.reserved = ['theme', 'style', 'css']` — those identifier names must survive minification because consumers reference them.
- **Sourcemaps:** production only.
- **External:** anything matching `^@primeuix/(.*)$` is left external (workspace deps resolve at install time).

### Build order (root `pnpm build`)

1. `pnpm build:check` → format + audit.
2. `pnpm --filter './packages/*' --workspace-concurrency=1 run build`. Concurrency=1 means packages build serially in workspace order, which respects the `styled → themes/styles` dependency.

### Per-package build steps

| Package | Steps |
|---------|-------|
| `themes` | `type:check` → `build:tokens` (TypeDoc → `tokens.ts`) → `tsup` (3 entries: dist ESM, umd IIFE, tokens ESM) → `postbuild` |
| `styles` | `prebuild` (CSS validation) → `tsup` (dist ESM + types) |

If a styles build fails with `❌ Invalid CSS prop: <prop>`, either the property name is misspelled, missing from `known-css-properties`, or the `/*css*/` marker was forgotten on a prior block (causing the regex to grab the wrong region).

## Code Style

- TypeScript strict mode (each package has its own `tsconfig.json`).
- Prettier (run `pnpm format` before committing — `format:check` gates `pnpm build`).
- ESLint via flat config (`eslint.config.mjs`).
- Conventional commits, enforced by commitlint + husky.

## Adding a new component

### Tokens (`@primeuix/themes`)

1. Create `types/<component>/index.d.ts` with a `<Component>TokenSections` namespace and `<Component>DesignTokens` interface. Annotate every leaf with `@designToken <path>`.
2. Add `<ComponentDesignTokens>` to the imports + `interface Theme`/`Components` map in `types/index.d.ts`.
3. For *each* preset (`aura`, `lara`, `material`, `nora`), create `src/presets/<preset>/<component>/index.ts` exporting tokens that satisfy `<Component>DesignTokens`.
4. Register the import in each preset's `src/presets/<preset>/index.ts` (`import x from '…/<component>'` + entry under `components: { … }`).
5. `pnpm build:themes` — regenerates `tokens.ts` from JSDoc.

### CSS (`@primeuix/styles`)

1. Create `src/<component>/index.ts` with `export const style = /*css*/ \`…\`;` referencing the tokens you defined in step 1 above.
2. Add `export * as <Component>Style from '@primeuix/styles/<component>';` to `src/index.ts` (keep alphabetical, include the `// ComponentName` comment).
3. `pnpm build:styles` — fails fast if any CSS property is unknown or any `/*css*/` block is malformed.

## Common Patterns

### Color scales
Primitive colors use 11-stop scales: `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`. The `semantic.primary` block aliases one scale (Aura → emerald, Material → indigo-ish, etc.) plus computed `color` / `contrastColor` / `hoverColor` / `activeColor`.

### Light/dark variants
The `light-dark(<lightValue>, <darkValue>)` CSS function is the preferred way to vary tokens by color scheme. It works at the value level inside a single token entry — no separate `colorScheme: { light, dark }` map needed for those values.

```typescript
secondary: {
    background:      'light-dark({surface.100}, {surface.800})',
    hoverBackground: 'light-dark({surface.200}, {surface.700})',
}
```

For tokens that genuinely diverge in structure between modes, components may still expose `colorScheme: { light: …, dark: … }` (defined on the type via `ColorScheme<T>` from `types/index.d.ts`).

### Component variants
Most components support some subset of:
- Severity colors: `primary`, `secondary`, `success`, `info`, `warn`, `danger`, `help`, `contrast`, `plain`
- Style variants: `outlined`, `text`, `link`
- Sizes: `-sm`, `-lg` (and sometimes `-fluid`)
- Interactive states: `:hover`, `:active`, `:focus-visible`, `:disabled`

The token tree mirrors this: `button.outlined.success.borderColor`, `button.text.danger.hoverBackground`, etc.
