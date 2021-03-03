# Canvas Kit Specifications

A package of all the automated Cypress specifications for use in documentation.

# Specifications

## Installation

```sh
yarn add @workday/canvas-kit-specifications
```

## Usage

The `Specifications` component is meant to be used in MDX files by file name and top-level describe
name:

```mdx
import {Specifications} from '@workday/canvas-kit-specifications';

<Specifications file="Tooltip.spec.tsx" name="Tooltip">
```

## Component Props

### Required

#### `file: string`

> The file path after `cypress/integrations` in the Canvas Kit repository. Example:
> 'Tooltip.spec.ts'

### Optional

#### `name: string`

> The string contents of the top-level 'describe' block of the specification. Most only have a
> single `describe` block. Omitting will grab the first one.

Default: The first defined `describe` block.

# BaseURLContext

The `BaseURLContext` is used for the base URL of the storybook. The default is `/` which works for
local Storybook development and Storybook builds. This URL is used for the Story link in the
specification table. To render the Specification table outside a Storybook, add a provider context
with the value of `https://workday.github.io/canvas-kit/`

## Usage

```tsx
import {BaseURLContext} from '@workday/canvas-kit-specifications';

<BaseURLContext.Provider value="@workday/canvas-kit-specifications">
  <Specifications file="Tooltip.spec.ts" />
</BaseURLContext.Provider>;
```
