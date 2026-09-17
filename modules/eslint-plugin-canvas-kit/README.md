# @workday/eslint-plugin-canvas-kit

Canvas Kit ESLint rules for styling conventions and design-token usage.

## Installation

```sh
yarn add --dev eslint @workday/eslint-plugin-canvas-kit
```

Requires ESLint 9 or later.

## Recommended flat config

```js
import canvasKit from '@workday/eslint-plugin-canvas-kit';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...canvasKit.configs.recommended,
  },
];
```

The preset registers the plugin under the `canvas-kit` namespace and enables every public rule as an error.

## Individual rules

```js
import canvasKit from '@workday/eslint-plugin-canvas-kit';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {'canvas-kit': canvasKit},
    rules: {
      'canvas-kit/no-inline-styles': 'error',
      'canvas-kit/enforce-canvas-breakpoints': 'error',
      'canvas-kit/enforce-cssvar-system-tokens': 'error',
      'canvas-kit/enforce-design-tokens': 'error',
    },
  },
];
```

## Rules

- `no-inline-styles` disallows JSX `style` attributes.
- `enforce-canvas-breakpoints` requires Canvas breakpoints in recognized Canvas styling calls.
- `enforce-cssvar-system-tokens` requires `system` tokens in `createStyles` calls to use `cssVar()`.
- `enforce-design-tokens` disallows hardcoded CSS values in `createStyles` calls.

The plugin intentionally does not include Canvas Kit repository-only import policies.
