# Canvas Kit Common

A module of common utilities that are either agnostic of our components, or shared across them.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

Includes:

- [Canvas Kit Common](#canvas-kit-common)
  - [Installation](#installation)
  - [CanvasProvider](#canvasprovider)
    - [Storybook Decorator](#storybook-decorator)
    - [Input Provider](#input-provider)
      - [Definitions](#definitions)
      - [Usage](#usage)
      - [Static Properties](#static-properties)
        - [`InputTypes`](#inputtypes)
      - [Component Props](#component-props)
        - [Required](#required)
        - [Optional](#optional)
          - [`provideIntent: boolean`](#provideintent-boolean)
          - [`container: HTMLElement | React.RefObject<HTMLElement>`](#container-htmlelement--reactrefobjecthtmlelement)
      - [Storybook Decorator](#storybook-decorator-1)
  - [Theming](#theming)
  - [Bidirectionality](#bidirectionality)
  - [Component Functions](#component-functions)
    - [`createComponent`](#createcomponent)
    - [`ExtractProps`](#extractprops)
  - [Common Hooks](#common-hooks)
    - [useUniqueId](#useuniqueid)
  - [Utility Functions](#utility-functions)
    - [generateUniqueId](#generateuniqueid)
    - [setUniqueSeed](#setuniqueseed)
    - [resetUniqueIdCount](#resetuniqueidcount)

## CanvasProvider

This is a higher order (wrapping) component intended for theming, RTL. This is the way most
consumers should use the provider. This provider is required for our theming capabilities, so you
can find more information in the [theming documentation](./lib/theming/README.md).

**We strongly encourage you to use this in your application to wrap all Canvas components.**

```tsx
import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

<CanvasProvider>{/* All your components containing any Canvas components */}</CanvasProvider>;
```

#### Storybook Decorator

We provide a [storybook decorator](../../utils/storybook/CanvasProviderDecorator.tsx) to wrap your
stories in a `CanvasProvider` automatically.

Add this decorator to your `/.storybook/preview.js` configuration file to apply to all stories:

```js
import {CanvasProviderDecorator} from '../utils/storybook';

export const decorators = [CanvasProviderDecorator];
```

Or, add it to stories individually:

```js
import {CanvasProviderDecorator} from '../../../../utils/storybook';

export default {
  title: 'MyComponent',
  component: MyComponent,
  decorators: [CanvasProviderDecorator],
};

// OR

MyStory.decorators = [CanvasProviderDecorator];
```

---

## Focus rings

Use [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible), which will
match when the user triggers focus via

## RTL and bidirectionality

Use
[CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
for styling, and `isElementRTL` for keyboard handlers that need the content direction of an element.

See
[Hooks and Utilities / Bidirectionality](https://workday.github.io/canvas-kit/?path=/docs/hooks-and-utilities-bidirectionality--docs)
in Storybook.

---

## Theming

Theming documentation has its own README. You can find it [here](./lib/theming/README.md), and the
guide is in
[Guides / Theming](https://workday.github.io/canvas-kit/?path=/docs/guides-theming--docs).

---

## Component functions

`createComponent`, `ExtractProps`, `createModelHook`, `createContainer`, `createSubcomponent` and
`createElemPropsHook` are documented in
[Hooks and Utilities / Compound Components](https://workday.github.io/canvas-kit/?path=/docs/hooks-and-utilities-compound-components--docs).

---

## Unique IDs

`useUniqueId`, `generateUniqueId`, `setUniqueSeed` and `resetUniqueIdCount` are documented in
[Hooks and Utilities / Unique IDs](https://workday.github.io/canvas-kit/?path=/docs/hooks-and-utilities-unique-ids--docs).
