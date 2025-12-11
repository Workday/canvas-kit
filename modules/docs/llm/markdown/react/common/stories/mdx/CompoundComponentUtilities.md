---
source_file: react/common/stories/mdx/CompoundComponentUtilities.mdx
live_url: https://workday.github.io/canvas-kit/react/common/stories/mdx/CompoundComponentUtilities
---

<Meta title="Hooks and Utilities/Compound Components" />

# Compound Component Utilities

The following utilities are used to create and compose
[compound components](/getting-started/for-developers/resources/compound-components/).

## Installation

```sh
yarn add @workday/canvas-kit-react
```

# createComponent

`createComponent` is a factory function that creates components to be exported. It enforces React
`ref` forwarding, `as` prop, `displayName`, `subComponents`, and handles proper typing without much
boiler plate. The return type is `Component<element, Props>` which looks like
`Component<'div', Props>` which is a clean interface that tells you the default element that is
used.

## Usage

`createComponent` is great to use if you want to create quick compound components or you need to set
up components with `ref` forwarding.

```tsx
import React from 'react';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

// Extend Heading Props and omitting size since we've added a default
interface CardHeadingProps extends Omit<ExtractProps<typeof Heading>, 'size'> {}
export const CardHeading = createComponent('h2')({
  displayName: 'CardHeading',
  Component: ({children, ...elemProps}: CardHeadingProps, ref, Element) => {
    return (
      <Heading size="medium" as={Element} ref={ref} {...elemProps}>
        {children}
      </Heading>
    );
  },
});

// Extend Box Props for customization
interface CardProps extends BoxProps {}
export const Card = createComponent('div')({
  displayName: 'Card',
  subComponents: {
    Heading: CardHeading,
  },
  Component: ({children, ...elemProps}: CardProps, ref, Element) => {
    return (
      <Box as={Element} {...elemProps} ref={ref}>
        {children}
      </Box>
    );
  },
});

export const CreateComponent = () => {
  return (
    <Card depth={2} border={`1px solid ${colors.soap400}`} padding="s" as="section">
      <Card.Heading>Card Heading</Card.Heading>
    </Card>
  );
};

```

# createModelHook

When building compound components that might have some internal state or events, you typically want
a model. A model allows a component to share information. This is where `createModelHook` comes in
handy.

## Usage

`createModelHook` is a factory function that takes in `defaultConfig` and `requiredConfig` and
returns a function which is your model hook.

Let's make a simple disclosure component as an example. This is how we'd use `createModelHook`.

```tsx

export const useDisclosureModel = createModelHook({
  // This becomes the default values on the model
  defaultConfig: {
    // some default config
  },
})(config => {
  const state = {
    // some state
  };
  // Sets events that can be used across subcomponents
  const events = {
    // some events
  };

  return {state, events};
});
```

```tsx
import React from 'react';
import {createContainer, createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export type Visibility = 'hidden' | 'visible';

// First we define a model using out createModelHook
const useDisclosureModel = createModelHook({
  // This becomes the default values on the model
  defaultConfig: {
    /** ID reference of the list. Children ids can be derived from this id */
    id: '',
    /**
     * The initial visibility of the disclosed content. The `as Visibility` overrides the inferred type.
     */
    initialVisibility: 'hidden' as Visibility,
  },
})(config => {
  const id = useUniqueId(config.id);
  const [visibility, setVisibility] = React.useState(config.initialVisibility);
  //  Set the default internal state for your model.
  const state = {
    /** ID reference of the list. Children ids can be derived from this id */
    id,
    /**
     * Visibility state of the disclosed content. Models are allowed to extend the states to fit
     * their needs, so if you need to consistently determine "not hidden", use `visibility !==
     * 'hidden'` rather than `visibility === 'visible'`
     */
    visibility,
  };
  // Sets events that can be used across subcomponents
  const events = {
    /**
     * Start showing the disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    show(event?: Event | React.SyntheticEvent) {
      setVisibility('visible');
    },
    /**
     * Start hiding this disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    hide(event?: Event | React.SyntheticEvent) {
      setVisibility('hidden');
    },
  };

  return {state, events};
});

// Disclosure Container Component
interface DisclosureProps {}

const Disclosure = createContainer()({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
})<DisclosureProps>(({children, ...elemProps}, Element, model) => {
  return (
    <button
      onClick={() =>
        model.state.visibility === 'visible' ? model.events.hide() : model.events.show()
      }
      {...elemProps}
    >
      {model.state.visibility === 'visible' ? 'close' : 'open'}
    </button>
  );
});

export const CreateModelHook = () => {
  return <Disclosure />;
};

```

Typescript will infer all config from the returned `state`, `events`, `defaultConfig` and the
`requiredConfig`.

## API

When `useDisclosureModel`is created, five properties are attached to it for composability:
`defaultConfig`, `requiredConfig`, `TConfig`, `getElemProps`, `Context`.

### defaultConfig

All config that has default values. Optional values also go here, but are represented as `undefined`
as part of the union type `(undefined as undefined | string)`. Using this can be useful when
creating other models that share similar config.

```tsx

export const useExpandableModel = createModelHook({
  defaultConfig: {
    // extend the default config from the `useDisclosureModel`
    ...useDisclosureModel.defaultConfig,
  },
})(config => {
  const disclosure = useDisclosureModel(config);
  const state = {
    ...disclosure.state,
  };
  const events = {
    ...disclosure.events,
  };
  return {state, events};
});
```

### requiredConfig

All config that is required by the model. Most config should go into default config with thoughtful
defaults.

### contextOverride

The React context used by components to share a model between a container component and
subcomponents. It is used internally by `createContainer` and `createSubcomponents` and should not
need to be referenced directly.

Each subcomponent is tied to a model hook's context. For example, `useModalModel` extends
`usePopupModel`, but `Modal` components point directly to `Popup` components. The
`contextOverride: usePopupModel.Context` forces `useModalModel`'s internal context to point to the
same context reference as the one used in `usePopupModel`. This allows the model returned by
`useModalModel` to be compatible with both `Modal` subcomponents and `Popup` subcomponents. If you
do not override context, you must create a new container and subcomponent for every component using
the newly created model hook.

```tsx

export const useModalModel = createModelHook({
  defaultConfig: usePopupModel.defaultConfig,
  requiredConfig: usePopupModel.requiredConfig,
  // share context from the usePopupModel instead of the default one created by createModelHook
  contextOverride: usePopupModel.Context,
})(config => {
  const model = usePopupModel(config);

  useInitialFocus(model);
  useReturnFocus(model);
  useCloseOnOverlayClick(model);
  useCloseOnEscape(model);
  useFocusTrap(model);
  useAssistiveHideSiblings(model);
  useDisableBodyScroll(model);

  return model;
});
```

### TConfig

TConfig gives you the typings that are defined in `defaultConfig` and `requiredConfig` instead of
having to redfine those types. This is useful when building a model that share similar config and
you want to merge them while getting the correct typings.

```tsx

export const useActionBarModel = createModelHook({
  defaultConfig: {
    // We define the config and use the typings that come from useMenuModel for when an action bar renders a menu
    menuConfig: {} as typeof useMenuModel.TConfig,
  },
  requiredConfig: useOverflowListModel.requiredConfig,
})(config => {
  // define your internal state and events
});
```

### getElemProps

This function will separate all `elemProps` or default attributes from an element from the model
config props. If a prop is both a `config` _and_ an `elemProp`, you can manually apply the prop
again. `elemProps` is called internally automatically by `createContainer`. If you use
`createContainer`, you shouldn't need to use this function.

By default `createModelHook` does this for you and spreads the `elemProps` onto the component.

# createContainer and createSubcomponent

`createContainer` and `createSubcomponent` functions take a default React.ElementType which can be
an element string like div or button or a component like Button. It also takes a config object
containing the following:

- `displayName`: This will be the name of the component when shown by the React Dev tools. By
  convention, we make that name be the same as typed in a render function. For example
  `Disclosure.Target` vs `DisclosureTarget`.
- `modelHook`: This is the model hook used by the compound component (`useDisclosureModel` in our
  case). This model hook is used to determine proper prop types and seamlessly handle the option
  model prop. For `createContainer`, if a `model` is not passed, a `model` is created and added to
  React Context. For `createSubcomponent`, if a `model` is not passed, the `model` comes from React
  Context.
- `elemPropsHook`: This is the elemPropsHook that takes a model and elemProps and returns elemProps.

- `subComponents`: For container components. A list of sub components to add to the returned
  component. For example, a sub component called `DisclosureTarget` will be added to the export of
  `Disclosure` so that the user can
interface DisclosureProps {}

//... useDisclosureModel

export const Disclosure = createContainer('div')({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
})<DisclosureProps>(({children, ...elemProps}, Element, model) => {
  return (
    // spread div attributes including ref
    <Element {...elemProps}>{children}</Element>
  );
});
```

```tsx
import React from 'react';
import {createContainer, createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export type Visibility = 'hidden' | 'visible';

// First we define a model using out createModelHook
const useDisclosureModel = createModelHook({
  // This becomes the default values on the model
  defaultConfig: {
    /** ID reference of the list. Children ids can be derived from this id */
    id: '',
    /**
     * The initial visibility of the disclosed content
     * @default 'hidden'
     */
    initialVisibility: 'hidden' as Visibility,
  },
})(config => {
  const id = useUniqueId(config.id);
  const [visibility, setVisibility] = React.useState(config.initialVisibility || 'hidden');
  //  Set the default internal state for your model.
  const state = {
    /** ID reference of the list. Children ids can be derived from this id */
    id,
    /**
     * Visibility state of the disclosed content. Models are allowed to extend the states to fit
     * their needs, so if you need to consistently determine "not hidden", use `visibility !==
     * 'hidden'` rather than `visibility === 'visible'`
     */
    visibility,
  };
  // Sets events that can be used across subcomponents
  const events = {
    /**
     * Start showing the disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    show(event?: Event | React.SyntheticEvent) {
      setVisibility('visible');
    },
    /**
     * Start hiding this disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    hide(event?: Event | React.SyntheticEvent) {
      setVisibility('hidden');
    },
  };

  return {state, events};
});

// Disclosure Container Component
interface DisclosureProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const Disclosure = createContainer('button')({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
  subComponents: {},
})<DisclosureProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      onClick={() =>
        model.state.visibility === 'visible' ? model.events.hide() : model.events.show()
      }
      {...elemProps}
    >
      {model.state.visibility === 'visible' ? 'close' : 'open'}
    </Element>
  );
});

export const CreateContainer = () => {
  return <Disclosure />;
};

```

## createSubcomponent

Once you've built a container component, adding a subcomponent is easy. `createSubcomponent` is
similar to `createContainer` in that it hooks up many of the pieces for you. The main difference is
it uses the context created by `createContainer`. This allows access to the model created at the
root level so that you can use any state or events at a child component level.

### Usage

- It subscribes to the parent context allowing you access to the model hook `state` and `events`
- It attaches your model hook to your component.
- It runs any `elemPropsHook` hooks defined.
- You can attach `subComponents`.
- It will also extract the element attributes and define the `ref` type based on the element you
  give it.

```tsx

export interface DisclosureTargetProps {
  /**
   * The children of the `Expandable.Target`
   */
  children?: React.ReactNode;
}

//... useDisclosureModel

export const DisclosureTarget = createSubcomponent('button')({
  modelHook: useDisclosureModel,
})<DisclosureTargetProps>(({children, ...elemProps}, Element, model) => {
  return (
    <PrimaryButton
      as={Element}
      onClick={() =>
        model.state.visibility === 'hidden' ? model.events.show() : model.events.hide()
      }
      {...elemProps}
    >
      {children}
    </PrimaryButton>
  );
});
```

```tsx
import React from 'react';
import {
  createContainer,
  createModelHook,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';

export type Visibility = 'hidden' | 'visible';

// First we define a model using out createModelHook
const useDisclosureModel = createModelHook({
  // This becomes the default values on the model
  defaultConfig: {
    /** ID reference of the list. Children ids can be derived from this id */
    id: '',
    /**
     * The initial visibility of the disclosed content
     * @default 'hidden'
     */
    initialVisibility: 'hidden' as Visibility,
  },
})(config => {
  const id = useUniqueId(config.id);
  const [visibility, setVisibility] = React.useState(config.initialVisibility || 'hidden');
  //  Set the default internal state for your model.
  const state = {
    /** ID reference of the list. Children ids can be derived from this id */
    id,
    /**
     * Visibility state of the disclosed content. Models are allowed to extend the states to fit
     * their needs, so if you need to consistently determine "not hidden", use `visibility !==
     * 'hidden'` rather than `visibility === 'visible'`
     */
    visibility,
  };
  // Sets events that can be used across subcomponents
  const events = {
    /**
     * Start showing the disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    show(event?: Event | React.SyntheticEvent) {
      setVisibility('visible');
    },
    /**
     * Start hiding this disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    hide(event?: Event | React.SyntheticEvent) {
      setVisibility('hidden');
    },
  };

  return {state, events};
});

// Disclose Target
export interface DisclosureTargetProps extends PrimaryButtonProps {}

export const DisclosureTarget = createSubcomponent('button')({
  modelHook: useDisclosureModel,
})<DisclosureTargetProps>(({children, ...elemProps}, Element, model) => {
  return (
    <PrimaryButton
      onClick={(event: React.MouseEvent) => {
        if (model.state.visibility !== 'hidden') {
          model.events.hide(event);
        } else {
          model.events.show(event);
        }
      }}
      as={Element}
      {...elemProps}
    >
      {model.state.visibility === 'visible' ? 'Close' : 'Open'}
    </PrimaryButton>
  );
});

// Disclosure Container Component
interface DisclosureProps {}

const Disclosure = createContainer()({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
  subComponents: {
    Target: DisclosureTarget,
  },
})<DisclosureProps>(({children}, Element, model) => {
  return <>{children}</>;
});

export const CreateSubcomponent = () => {
  return (
    <Disclosure>
      <Disclosure.Target />
    </Disclosure>
  );
};

```

# createElemPropsHook

This is a utility function that is helpful to use when you have elem attributes that need to be
dyanmic based on the model hook state. This function will also handle merging of element props.

Once you create your element props hook you then attach your hook to either your `createContainer`
component or `createSubcomponent` by adding it to the `elemPropsHook` property.

## Usage

```tsx

export interface DisclosureContentProps extends BoxProps {
  /**
   * The children of the `Expandable.Content` whose visibility is controlled by the associated
   * `Expandable.Target`
   */
  children?: React.ReactNode;
}

//...useDisclosureModel defined

// Use createElemPropsHook to add style and id attribute based on the disclosure model hook state
// These attributes will be merged with the rest of elemProps that come from DisclosureContentProps
const useDisclosureContent = createElemPropsHook(useDisclosureModel)(({state}) => {
  return {
    style: state.visibility !== 'hidden' ? {} : {display: 'none'},
    id: state.id,
  };
});

export const DisclosureContent = createSubcomponent('div')({
  modelHook: useDisclosureModel,
  // attached our elemPropsHook to the component
  elemPropsHook: useDisclosureContent,
})<DisclosureContentProps>(({children, ...elementProps}, Element) => {
  return (
    <Box as={Element} {...elementProps}>
      {children}
    </Box>
  );
});
```

```tsx
import React from 'react';
import {
  createContainer,
  createModelHook,
  createSubcomponent,
  createElemPropsHook,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

type Visibility = 'hidden' | 'visible';

// First we define a model using out createModelHook
const useDisclosureModel = createModelHook({
  // This becomes the default values on the model
  defaultConfig: {
    /** ID reference of the list. Children ids can be derived from this id */
    id: '',
    /**
     * The initial visibility of the disclosed content
     * @default 'hidden'
     */
    initialVisibility: 'hidden' as Visibility,
  },
})(config => {
  const id = useUniqueId(config.id);
  const [visibility, setVisibility] = React.useState(config.initialVisibility || 'hidden');
  //  Set the default internal state for your model.
  const state = {
    /** ID reference of the list. Children ids can be derived from this id */
    id,
    /**
     * Visibility state of the disclosed content. Models are allowed to extend the states to fit
     * their needs, so if you need to consistently determine "not hidden", use `visibility !==
     * 'hidden'` rather than `visibility === 'visible'`
     */
    visibility,
  };
  // Sets events that can be used across subcomponents
  const events = {
    /**
     * Start showing the disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    show(event?: Event | React.SyntheticEvent) {
      setVisibility('visible');
    },
    /**
     * Start hiding this disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    hide(event?: Event | React.SyntheticEvent) {
      setVisibility('hidden');
    },
  };

  return {state, events};
});

// Disclose Target
interface DisclosureTargetProps extends PrimaryButtonProps {}

// Use createElemPropsHook to define an onClick prop  using the model state and events
// This will be merged into the rest of the elemProps of the component
const useDisclosureTarget = createElemPropsHook(useDisclosureModel)(({state, events}) => {
  return {
    onClick: (event: React.MouseEvent) => {
      if (state.visibility !== 'hidden') {
        events.hide(event);
      } else {
        events.show(event);
      }
    },
  };
});

const DisclosureTarget = createSubcomponent('button')({
  modelHook: useDisclosureModel,
  elemPropsHook: useDisclosureTarget,
})<DisclosureTargetProps>(({children, ...elemProps}, Element, model) => {
  return (
    <PrimaryButton as={Element} {...elemProps}>
      {children}
    </PrimaryButton>
  );
});

// Disclosure Content
interface DisclosureContentProps extends BoxProps {}
const useDisclosureContent = createElemPropsHook(useDisclosureModel)(({state}) => {
  return {
    style: state.visibility !== 'hidden' ? {} : {display: 'none'},
    id: state.id,
  };
});

const DisclosureContent = createSubcomponent('div')({
  modelHook: useDisclosureModel,
  // attached our elemPropsHook to the component
  elemPropsHook: useDisclosureContent,
})<DisclosureContentProps>(({children, ...elementProps}, Element) => {
  return (
    <Box as={Element} {...elementProps}>
      {children}
    </Box>
  );
});

// Disclosure Container Component
interface DisclosureProps {}

const Disclosure = createContainer()({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
  subComponents: {
    Target: DisclosureTarget,
    Content: DisclosureContent,
  },
})<DisclosureProps>(({children}, Element, model) => {
  return <>{children}</>;
});

export const CreateElemPropsHook = () => {
  return (
    <Disclosure>
      <Disclosure.Target>Open</Disclosure.Target>
      <Disclosure.Content>Content</Disclosure.Content>
    </Disclosure>
  );
};

```
