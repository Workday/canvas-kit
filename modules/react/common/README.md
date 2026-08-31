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

## RTL

Use
[CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
to support RTL in styling.

---

## Theming

Theming documentation has its own README. You can find it [here](./lib/theming/README.md).

---

## Bidirectionality

We strongly encourage the use of
[CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
for styling. For keyboard events, the right arrow should still move a cursor to the right of the
cursor's current position. For left-to-right languages, this means "move to the next item" while in
right-to-left languages, this means "move to the previous item". The directionality of an element
can be retrieved from the [isElementRTL](#iselementrtl) function. This should be done inside an
event handler.

## `useElementRTL`

Returns `true` if the element has a content direction of `rtl`. This is most useful in event
handlers like an `onKeyDown`.

```ts
onKeyDown(event: React.KeyboardEvent) {
  const isRTL = isElementRTL(event.currentTarget);

  if (event.key === 'ArrowRight') {
    if (isRTL) {
      // Right arrow moves to the right even on RTL languages, but "right" doesn't mean
      //"advance" in RTL. Previous is to the right of the current in RTL.
      model.events.goToPreviousRow();
    } else {
      model.events.goToNextRow();
    }
  }
}
```

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
MyComponentProps & React.HTMLAttributes<HTMLElement>;
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

## Common Hooks

### useUniqueId

A hook to generate a unique identifier for an element – most commonly used for accessibility. The
hook will generate a unique id the first render and always return the same id every render. This
uses [generateUniqueId](#generateuniqueid) internally. You should use `useUniqueId` when you need to
create a unique ID within a component's render loop. Otherwise, you should opt for
`generateUniqueId`.

```tsx
const MyComponent = () => {
  const id = useUniqueId();

  return <div id={id}>Hello!</div>;
};
```

If you wish to support user-defined ids, `useUniqueId` allows an optional id to override. This
provides a safe and easy way of handling id overrides without conditional hooks.

```tsx
const MyComponent = ({id}) => {
  const localId = useUniqueId(id);

  return <div id={localId}>Hello!</div>;
};
```

## Utility Functions

### generateUniqueId

Generates a unique and HTML5 compliant identifier every time it is called. Internally it uses a 4
character random seed starting with a letter. This seed is unique to each instance of this package
meaning different versions of Canvas Kit on the page will have a different seed. Each call will use
a Base 36 string (10 numbers + 26 letters) based on an incremented number. The incremented number
always starts at 0 and can be reset for testing purposes using
[resetUniqueIdCount](#resetuniqueidcount). [setUniqueSeed](#setuniqueseed) can also be used for
testing or server side rendering to get the same results during hydration.

```ts
const id1 = generateUniqueId(); // vi1e0
const id2 = generateUniqueId(); // vi1e1
```

### setUniqueSeed

Update the seed used by the id generator. This is useful for snapshot tests to help stabilize ids
generated each run. This could also be used for server-side hydration - if you choose the same seed
for server and set that on the client before components are rendered, the ids generated will be the
same.

For snapshot testing, this will help stabilize snapshot tests. Use in conjunction with
[resetUniqueIdCount](#resetuniqueidcount).

```ts
// set in a script tag from the server
setUniqueSeed(window.__ID_SEED); // set in a script tag from the server

// jest setup
before(() => {
  setUniqueSeed('a');
});
```

### resetUniqueIdCount

This should only be called for tests in `beforeEach` for snapshot tests. Use in conjunction with
[setUniqueSeed](#setuniqueseed).

```ts
beforeEach(() => {
  resetUniqueIdCount();
});
```
