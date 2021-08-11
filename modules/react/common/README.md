# Canvas Kit Common

A module of common utilities that are either agnostic of our components, or shared across them.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

Includes:

- [CanvasProvider](#canvasprovider)
- [InputProvider](#inputprovider)
- [Theming](#theming)
- [Bidirectionality](#bidirectionality)
- [Component Functions](#component-functions)
  - [createComponent](#createcomponent)
  - [ExtractProps](#extractprops)

## CanvasProvider

This is a higher order (wrapping) component intended for theming, RTL and
[InputProvider](#inputprovider)This is the way most consumers should use the provider. This provider
is required for our theming capabilities, so you can find more information in the
[theming documentation](./lib/theming/README.md).

**We strongly encourage you to use this in your application to wrap all Canvas components.**

```tsx
import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

<CanvasProvider>{/* All your components containing any Canvas components */}</CanvasProvider>;
```

#### Storybook Decorator

We provide a [storybook decorator](../../utils/storybook/CanvasProviderDecorator.tsx) to wrap your
stories in a `CanvasProvider` (including `InputProvider`) automatically.

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

### Input Provider

This is a higher order (wrapping) component for providing css-referencable data attributes for the
users current input. Focus outlines are required for accesibility, but they can be unnecessary
visual noise when using a mouse. This allows us to hide focus outlines (as desired) while the user
is interacting with components using a mouse, touch, etc. and show them when keyboard navigation
begins. This logic is heavily influenced by [what-input](https://github.com/ten1seven/what-input).
You can use it to style your own components as well using the examples below.

Preferably you would use the `CanvasProvider` as `InputProvider` functionality is included within
it. However, if you want `InputProvider` functionality on it's own, you can use this.

#### Definitions

**Input**: The current input method from the user.

- Equal to one of [`InputTypes`](#inputtypes)
- Triggered by the following events:
  - `keydown`
  - `keyup`
  - `mousedown`
  - `MSPointerDown`
  - `pointerdown`
  - `touchstart`

**Intent**: The potential next input method from the user. Mouse, pointer and mouse wheel events
only demonstrate potential, but not actual, interaction and are treated separately. Note: if input
type updates from the events above, the intent type will also be updated to the same value.

- Equal to one of [`InputTypes`](#inputtypes)
- Triggered by the following events:
  - `mousemove`
  - `MSPointerMove`
  - `pointermove`
  - `wheel`
  - `mousewheel`
  - `DOMMouseScroll`

#### Usage

As an external consumer, you should reference the following example.

If you are contributing a component, you must add the necessary styling (see below) and use the
[`InputProviderDecorator`](#storybook-decorator) in your stories. _DO NOT_ use an `InputProvider`
directly within any Canvas Kit components.

```tsx
import * as React from 'react';
import {InputProvider} from '@workday/canvas-kit-react';

<div>
  <InputProvider />
  {/* All your components containing any Canvas components */}
<div>;
```

This will result in these data attributes being added to the body element (by default)

```html
<body data-whatinput="mouse" data-whatinput="mouse">
  <!-- All your components' HTML -->
</body>
```

Now in any component within this wrapper, you can use these data attributes to customize the focus
handling.

**React/Emotion:**

```js
[`[data-whatinput='mouse'] &:focus,
  [data-whatinput='touch'] &:focus,
  [data-whatinput='pointer'] &:focus`]: {
  outline: 'none',
  border: 'none',
},
```

**SCSS:**

```scss
[data-whatinput='mouse'],
[data-whatinput='touch'],
[data-whatinput='pointer'] {
  .my-component:focus {
    outline: none;
    border: none;
  }
}
```

We provide a [helper](../../common/react/lib/styles/hideMouseFocus.ts) to hide the focus outlines on
mouse input. Simply spread it in your styles (i.e. `...hideMouseFocus`).

**Note:** It is best practice to show focus outlines by default and specifically hide them in the
cases you would like (i.e. mouse/touch/pointer input).

**Note:** Multiple InputProviders in the same tree are not supported. Any nested `InputProvider`
will remove itself from the DOM (rendering only its children) and not attach any event listeners.

#### Static Properties

##### `InputTypes`

| Theme      |
| ---------- |
| `Keyboard` |
| `Mouse`    |
| `Pointer`  |
| `Touch`    |

---

#### Component Props

##### Required

> None

##### Optional

###### `provideIntent: boolean`

> Whether you would like the attribute `data-whatintent` rendered (see definition of intent above).
> Note: detecting intent will add scroll and mouse positioning listeners which could affect
> performance.

###### `container: HTMLElement | React.RefObject<HTMLElement>`

> The containing element in which the InputProvider attaches its data attributes. This property
> should be set to an element that is an ancestor of all your Canvas components.

Default: `document.body`

#### Storybook Decorator

We provide a [storybook decorator](../../utils/storybook/CanvasProviderDecorator.tsx) to wrap your
stories in an `InputProvider` automatically.

Add this decorator to your `/.storybook/preview.js` configuration file to apply to all stories:

```js
import {InputProviderDecorator} from '../utils/storybook';

export const decorators = [InputProviderDecorator];
```

Or, add it to stories individually:

```js
import {InputProviderDecorator} from '../../../../utils/storybook';

export default {
  title: 'MyComponent',
  component: MyComponent,
  decorators: [InputProviderDecorator],
};

// OR

MyStory.decorators = [InputProviderDecorator];
```

---

## Theming

Theming documentation has its own README. You can find it [here](./lib/theming/README.md).

---

## Bidirectionality

Bidirectionality is provided by Theming. You can find Theming documentation
[here](./lib/theming/README.md#bidirectionality).

## Component Functions

### `createComponent`

`createComponent` is a convenience function that makes it easier to create components that
[forward refs](https://reactjs.org/docs/forwarding-refs.html) and take an `as` prop. The `as` prop
allows you to change the default element rendered by the component.

```tsx
interface MyComponentProps {
  prop1: string;
  prop2: number;
  children: React.ReactNode;
}

export const MyComponent = createComponent('div')({
  displayName: 'MyComponent', // the component's name in the React dev tools
  Component: (({ prop1, prop2, children, ...elemProps }: MyComponentProps), ref, as) => {
    return <Box as={as} {...elemProps}>{children}</Box>
  })
})
```

Using a component created via `createComponent`:

```tsx
<MyComponent ref={ref} as="aside">
  Content
</MyComponent>
```

`MyComponent` is returning a type that looks like `ElementComponent<'div', MyComponentProps>`. The
`'div'` tells you what the default element is of the element component.

Notice that `MyComponentProps` does not extend `React.HTMLAttributes<HTMLDivElement>`. The `as` prop
changes the interface of the component to match that of the `aside` element which is a
`React.HTMLAttributes<HTMLElement>`. For this reason, the interface cannot be known statically ahead
of time. Components using `createComponent` are starting to not export the prop interface. For this
reason, [ExtractProps](#extractprops) was created.

The first parameter of `createComponent` might not be defined. If this is the case, the type
returned is a `Component` instead of `ElementComponent`. `Component`s do not have any HTML
attributes associated with them. This usually means the component doesn't return a real element.
This is used for compound components that do not require an element for accessibility reasons and
only provide a common model for the subcomponents.

### `ExtractProps`

v5 introduces components that could take an `as` prop, which means the underlying element that is
rendered can change. Component props that use the `as` prop no longer extend an HTML attribute
interface because the interface is determined by the value of the `as` prop.

`ExtractProps` can be used in place of importing a prop interface directly. If you wish to extend a
Canvas Kit component by extending it's props, use `ExtractProps`.

```tsx
interface MyNewComponentProps extends ExtractProps<typeof MyComponent> {
  foo: string;
}

const MyNewComponent = ({foo, ...props}: MyNewComponentProps) => {
  return <MyComponent {...props}>My Content</MyComponent>;
};
```

`ExtractProps` will return an type that includes the props of the component passed to it as well as
any HTML attributes associated with the component. `ExtractProps` takes an optional second argument.
If the second argument is omitted, like in the example above, the HTML attributes will be extracted
from the first argument of `createComponent`, which is the default element. In the case of
`MyComponent`, that would be `'div'`. You can tell by hovering over the `MyComponent` which will
show the type as `ElementComponent<'div', MyComponentProps>`.

The second argument should be used if you plan to change the base element of the component using the
`as` prop. This is required because Typescript has no way of knowing what the props will be outside
an `as` declaration. Here's an example of the `MyNewComponent` that renders `MyComponent` as an
`aside`.

```tsx
interface MyNewComponentProps extends ExtractProps<typeof MyComponent, 'aside'> {
  foo: string;
}

const MyNewComponent = ({foo, ...props}: MyNewComponentProps) => {
  return (
    <MyComponent as="aside" {...props}>
      My Content
    </MyComponent>
  );
};
```

Note the `aside` used in both the props interface as well as the `as` in the JSX. This is useful if
your component uses props that come from the HTML attribute interface of a component, like `onClick`
that isn't explicitly declared in the original component prop interface like `MyComponentProps`. In
this example, `onClick` doesn't exist on `MyComponent`, but since `MyComponent` is an
`ElementComponent`, the `onClick` will be forwarded to the underlying `div` element.

If we inspect the `MyNewComponentProps` type, it will return the following:

```tsx
MyComponentProps & React.HTMLAttributes<HTMLElement>
```

Inside Canvas Kit components, we use `ExtractProps` when we need to extend from the interfaces of
other components, but since our components are also dynamic based on the `as` props, we cannot
declare our HTML attribute interface yet. `ExtractProps` can take `never` as the second parameter
for this case, which means to only take the declared props of a component and not include the HTML
attributes.

```tsx
interface MyNewComponentProps extends ExtractProps<typeof MyComponent, never> {
  foo: string;
}

const MyNewComponent = createComponent('aside')(
  displayName: 'MyNewComponent',
  Component: (({foo, ...props}: MyNewComponentProps, ref, as) => {
    return (
      <MyComponent ref={ref} as={as} {...props}>
        My Content
      </MyComponent>
    );
  };
});
```

If the component is a `Component` and not an `ElementComponent`, only the prop interface will ever
be returned since there is not HTML attribute interface associated with `Component`.
