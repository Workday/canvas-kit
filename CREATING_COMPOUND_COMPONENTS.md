# Building a Compound Component

Refer to the [Compound Component documentation](./COMPOUND\_COMPONENTS.md) document to learn about what a compound component is.

This document will go through building a simplified Disclosure component to help solidify the concepts. We will cover:
- [Models](#models)
- [Container Components](#disclosure-component)
- [Sub-components](#disclosuretarget-component)
- [Model Composition](#model-composition)
- [Behavior hooks](#behavior-hooks)

## Models

A model is composed of state and events. State and Event shapes are as follows:

```ts
type State = Record<string, any>
type Events = Record<string, (data?: object) => void>
```

The shape of a model is as follows:

```ts
interface Model<S extends State, E extends Events> {
  state: S,
  events: E,
}
```

The `@workday/canvas-kit-react-common` module exports a `Model` type for us.

Let's start by defining our state and events:

```tsx
// useDisclosureModel.tsx
import React from 'react'

import { Model } from '@workday/canvas-kit-react-common'

export type DisclosureState = {
  open: boolean
}

export type DisclosureEvents = {
  open(data?: {}): void
  close(data?: {}): void
  toggle(data?: {}): void
}

export type DisclosureModel = Model<DisclosureState, DisclosureEvents>
```

Let's add an `initialOpen` config and export a model hook:

```tsx
// useDisclosureModel.tsx
// ...

export type DisclosureConfig = {
  initialOpen?: boolean
}

export const useDisclosureModel = (config: DisclosureConfig = {}) => {
  const [open, setOpen] = React.useState(config.initialOpen || false)
  
  const state = {
    open,
  }
  
  const events = {
    open() {
      setOpen(true)
    },
    close() {
      setOpen(false)
    },
    toggle() {
      setOpen(!open)
    }
  }
  
  return { state, events }
}
```

Models aren't very complicated so far. We have a single `open` state property and an `open`, `close`, and `toggle` events we can send to the model. So far using the model might look like this:

```tsx
const Test = () => {
  const model = useDisclosureModel()
  
  return (
    <>
      <button
        onClick={() => {
          model.events.toggle();
        }}
      >
        Toggle
      </button>
      <div hidden={model.state.open ? true : undefined}>Content</div>
    </>
  )
}
```

You can find a working example here: https://codesandbox.io/s/basic-disclosure-model-5gold

It would be nice to add guards and callbacks to our events. Let's add configuration to our model:

```ts
export type DisclosureConfig = {
  initialOpen?: boolean
  // guards
  shouldOpen?(event: { data?: {}; state: DisclosureState }): boolean
  shouldClose?(event: { data?: {}; state: DisclosureState }): boolean
  shouldToggle?(event: { data?: {}; state: DisclosureState }): boolean
  // callbacks
  onOpen?(event: { data?: {}; state: DisclosureState }): void
  onClose?(event: { data?: {}; state: DisclosureState }): void
  onToggle?(event: { data?: {}; state: DisclosureState }): void
}
```

We'll also have to add the runtime of the guards and actions:

```tsx
const events: DisclosureEvents = {
  open(data) {
    if (config.shouldOpen?.({ data, state }) === false) {
      return
    }
    setOpen(true)
    config.onOpen?.({ data, state })
  },
  close(data) {
    if (config.shouldClose?.({ data, state }) === false) {
      return
    }
    setOpen(false)
    config.onClose?.({ data, state })
  },
  toggle(data) {
    if (config.shouldToggle?.({ data, state }) === false) {
      return
    }
    setOpen(!open)
    config.onToggle?.({ data, state })
  }
}
```

Now we should be able to configure the model via the guards and do something in the callbacks:

```tsx
const Test = () => {
  const [should, setShould] = React.useState(true)
  const model = useDisclosureModel({
    shouldOpen({ data, state }) {
      console.log("shouldOpen", data, state, should)
      return should
    },
    shouldClose({ data, state }) {
      console.log("shouldClose", data, state, should)
      return should
    },
    shouldToggle({ data, state }) {
      console.log("shouldToggle", data, state, should)
      return should
    },
    onOpen({ data, state }) {
      console.log("onOpen", data, state)
    },
    onClose({ data, state }) {
      console.log("onClose", data, state)
    },
    onToggle({ data, state }) {
      console.log("onToggle", data, state)
    }
  })
  
  return (
   <>
      <button
        onClick={() => {
          setShould(!should);
        }}
      >
        Toggle "should"
      </button>{" "}
      Buttons below should {should ? "" : "NOT"} work
      <br />
      <button
        onClick={() => {
          model.events.toggle();
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          model.events.open();
        }}
      >
        Open
      </button>
      <button
        onClick={() => {
          model.events.close();
        }}
      >
        Close
      </button>
      <div hidden={model.state.open ? undefined : true}>Content</div>
      <br />
      Check the console output
    </>
  )
}
```

You can see it in action here: https://codesandbox.io/s/basic-configurable-disclosure-model-nuteg

That's a lot of extra boilerplate code for actions and callbacks. Our events don't have any data, but if they did, we'd have to keep the event + guard and callback data types in sync. We are also creating the `events` object every render. We could use React refs and `React.useMemo` to decrease extra object creation. Luckily the common module has `createEventMap` and `useEventMap` functions to help us reduce boilerplate and reduce possibility of making mistakes.

First we need to create an event map - a map of guard and callback functions to the events they need to be paired with. We'll use `createEventMap` to do this:

```tsx
import { createEventMap } from "@workday/canvas-kit-react-common"

const disclosureEventMap = createEventMap<DisclosureEvents>()({
  guards: {
    shouldOpen: "open",
    shouldClose: "close",
    shouldToggle: "toggle"
  },
  callbacks: {
    onOpen: "open",
    onClose: "close",
    onToggle: "toggle"
  }
})
```

This part is a little weird: `createEventMap<DisclosureEvents>()({`. The reason for this is a Typescript issue: https://github.com/microsoft/TypeScript/issues/26242. The gist is a function with generics requires the caller to specify none of the generics or all of them. In this case, the only generic that cannot be inferred is the `DisclosureEvents`. Everything else can be inferred. The only way to separate defined generics vs inferred generics is to have separate, chained functions.

We see that `createEventMap` takes two optional keys: `guards` and `callbacks`. The names of these functions are arbitrary, but should follow the convention of `should*` for guards and `on*` for callbacks. The event name that is passed in is type checked against the `DisclosureEvents` interface.

Now that we have an event map, we'll need to use it for our `DisclosureConfig`:

```tsx
import { ToModelConfig } from "@workday/canvas-kit-react-common"

export type DisclosureConfig = {
  initialOpen?: boolean
} & Partial<
  ToModelConfig<DisclosureState, DisclosureEvents, typeof disclosureEventMap>
>
```

The `ToModelConfig` type takes in our `State` type,  `Events` type, and our `EventMap` type (the event map type is extracted from the event map: `typeof disclosureEventMap`). This will give us the proper shape of our config object.

The `disclosureEventMap` will also be used to create the `events` object using the `useEventMap` utility hook:

```tsx
const events = useEventMap(disclosureEventMap, state, config, {
  open(data) {
    setOpen(true)
  },
  close(data) {
    setOpen(false)
  },
  toggle(data) {
    setOpen(!open)
  }
})
```

You can see `useEventMap` takes in our `diclosureEventMap`, `state`, `config` objects as well as a list of event implementations. This is all type checked, decreasing the chances we make a mistake. Also notice we don't need to implement guards and callbacks directly inside our event implementations. `useEventMap` will return an object that has that functionality built right in! Neat!

The full working implementation is here: https://codesandbox.io/s/configurable-disclosure-model-3y5qh

## Components

Now that our model is figured out, we can work on the container component and sub-components. An external API might look something like this:

```tsx
<Disclosure>
  <Disclosure.Target>Toggle</Disclosure.Target>
  <Disclosure.Content>Content</Disclosure.Content>
</Disclosure>
```

The `<Disclosure>` is our container component and will be responsible for creating a `DisclosureModel` if a model isn't passed in. The `<Disclosure.Target>` and `<Disclosure.Content>` components are sub-components with specific functionality built into them. The `Target` controls the visibility of the `Content`. We already created a simplified render function for our model, now let's create the real components.

### Disclosure Component

First, let's create the `<Disclosure>` container component:

```tsx
// Disclosure.tsx
import React from "react"

import { DisclosureTarget } from "./DisclosureTarget"
import { DisclosureContent } from "./DisclosureContent"

import {
  DisclosureConfig,
  DisclosureModel,
  useDisclosureModel
} from "./useDisclosureModel"

export interface DisclosureProps extends DisclosureConfig {
  children: React.ReactNode
}

export const DisclosureModelContext = React.createContext(
  {} as DisclosureModel
)

export const Disclosure = ({ children, ...config }: DisclosureProps) => {
  const model = useDisclosureModel(config)

  return (
    <DisclosureModelContext.Provider value={model}>
      {children}
    </DisclosureModelContext.Provider>
  )
}

Disclosure.Target = DisclosureTarget
Disclosure.Content = DisclosureContent
```

We can see that the `DisclosureProps` interface extends the `DisclosureConfig` interface. This allows us to pass model config directly to the `<Disclosure>` component. A user of this `<Disclosure>` component might want to register a callback when the `toggle` event is called, for instance.

Next, a React Context object is created to represent the model of the compound component. This context will be used to pass the model to sub-components implicitly. This allows our compound component API to remain clean for consumers of compound components.

In this particular compound component, the container component doesn't have a real element. Accessibility specifications have no `role` for this component, so an element is not required.

Let's go ahead and finish out our sub-components.

### DisclosureTarget Component

```tsx
// DisclosureTarget.tsx
import React from "react"
import { DisclosureModelContext } from "./Disclosure"

export interface DisclosureTargetProps {
  children: React.ReactNode
}

export const DisclosureTarget = ({ children }: DisclosureTargetProps) => {
  const model = React.useContext(DisclosureModelContext)

  return (
    <button
      onClick={() => {
        model.events.toggle()
      }}
    >
      {children}
    </button>
  )
}
```

The `DisclosureTarget` component is in charge of the toggle button and it calls the `toggle` event on the model.

### DisclosureContent Component

```tsx
// DisclosureContent.tsx
import React from "react"
import { DisclosureModelContext } from "./Disclosure"

export interface DisclosureContentProps {
  children: React.ReactNode
}

export const DisclosureContent = ({ children }: DisclosureContentProps) => {
  const model = React.useContext(DisclosureModelContext)

  return <div hidden={model.state.open ? undefined : true}>{children}</div>
}
```

The `DisclosureContent` component is in charge of the content. It uses the `open` state value to set a `hidden` attribute.

The working example can be found here: https://codesandbox.io/s/configurable-disclosure-model-components-nvhtv

These components are not fully compliant yet. They do not support `ref`, `as`, or extra props as HTML attributes. The boilerplate to supporting all this gets very complicated. For this reason, a `createComponent` utility function was created to support all this out of the box. `createComponent` takes a default `React.ElementType` which can be an element string like `div` or `button` or a component like `Button`. It also takes a config object containing the following:
- `displayName`: This will be the name of the component when shown by the React Dev tools. By convention, we make that name be the same as typed in a render function. For example `Disclosure.Target` vs `DisclosureTarget`.
- `Component`: A [forward ref component function](https://reactjs.org/docs/forwarding-refs.html) with an added `Element` property. `Element` is the value passed to the Component's `as` prop. It will default to the provided element.
- `subComponents`: For container components. A list of sub components to add to the returned component. For example, a sub component called `DisclosureTarget` will be added to the export of `Disclosure` so that the user can import only `Disclosure` and use `Disclosure.Target`. `subComponents` is needed for Typescript because static properties cannot be added to predefined interfaces. `Disclosure.Target = DisclosureTarget` will caused a type error. This property allows the `createComponent` factory function to infer the final interface of the returned component.

Let's convert the Disclosure example to use the `createComponent` utility function to get this extra functionality:

```tsx
// Disclosure.tsx
import React from "react"
import { createComponent } from "@workday/canvas-kit-react-common"
import { DisclosureTarget } from "./DisclosureTarget"
import { DisclosureContent } from "./DisclosureContent"

import {
  DisclosureConfig,
  DisclosureModel,
  useDisclosureModel
} from "./useDisclosureModel"

export interface DisclosureProps extends DisclosureConfig {
  children: React.ReactNode
}

export const DisclosureModelContext = React.createContext(
  {} as DisclosureModel
)

export const Disclosure = createComponent()({
  displayName: "Disclosure",
  Component: ({ children, ...config }: DisclosureProps) => {
    const model = useDisclosureModel(config)

    return (
      <DisclosureModelContext.Provider value={model}>
        {children}
      </DisclosureModelContext.Provider>
    );
  },
  subComponents: {
    Target: DisclosureTarget,
    Content: DisclosureContent
  }
})
```

```tsx
// DisclosureTarget.tsx
import React from "react"
import { createComponent } from "@workday/canvas-kit-react-common"
import { DisclosureModelContext } from "./Disclosure"

export interface DisclosureTargetProps {
  children: React.ReactNode
}

export const DisclosureTarget = createComponent("button")({
  displayName: "Disclosure.Target",
  Component: (
    { children, ...elemProps }: DisclosureTargetProps,
    ref,
    Element
  ) => {
    const model = React.useContext(DisclosureModelContext)

    return (
      <Element
        ref={ref}
        onClick={() => {
          model.events.toggle()
        }}
        {...elemProps}
      >
        {children}
      </Element>
    )
  }
})
```

```tsx
// DisclosureContent.tsx
import React from "react"
import { createComponent } from "@workday/canvas-kit-react-common"
import { DisclosureModelContext } from "./Disclosure"

export interface DisclosureContentProps {
  children: React.ReactNode
}

export const DisclosureContent = createComponent("div")({
  displayName: "Disclosure.Content",
  Component: (
    { children, ...elemProps }: DisclosureContentProps,
    ref,
    Element
  ) => {
    const model = React.useContext(DisclosureModelContext);

    return (
      <Element
        ref={ref}
        hidden={model.state.open ? undefined : true}
        {...elemProps}
      >
        {children}
      </Element>
    );
  }
})
```

The `displayName` of the components helps properly identify the sub-components by their used name. For example `Disclose.Target` instead of `DiscloseTarget`.

`createComponent` returns a component with a type interface that includes ref forwarding, the `as` prop for changing the underlying element, and additional props the element type normally takes.

For example, we can now do the following:

```tsx
<Disclosure>
  <Disclosure.Target
    ref={targetRef}
    data-testid="target-button"
  >
    Toggle
  </Disclosure.Target>
  <Disclosure.Content as="section">Content</Disclosure.Content>
</Disclosure>
```

The full code can be found here: https://codesandbox.io/s/configurable-disclosure-model-components-utility-pk9s6

## Model Composition

Our example isn't fully accessible yet. The Disclosure target needs a `aria-controls` attribute to tie the target and content in the accessibility tree. This is done by the use of IDREFs (string IDs that starts with a letter). We could add an  `id` to our model, but it is extremely common so let's make a new model and compose from it instead. We'll later use this model in a reusable behavioral hook.

```tsx
// useIDModel.tsx
import { Model, useUniqueId } from "@workday/canvas-kit-react-common"

export type IDState = {
  id: string
};

export type IDEvents = {}

export type IDModel = Model<IDState, IDEvents>

export type IDConfig = {
  id?: string
};

export const useIDModel = (config: IDConfig = {}) => {
  const id = useUniqueId(config.id)

  const state = {
    id
  }

  const events = {}

  return { state, events }
}
```

This model only provides an `id` since that's all that is needed for IDREF functionality. Also later we'll add behavioral hook that will require this model.

Let's update the `DisclosureModel` to compose the `IDModel`:

```tsx
// useDisclosureModel.tsx
// ...
import { IDState, IDConfig, useIDModel } from "./useIDModel"

export type DisclosureState = IDState & {
  open: boolean
};

// ...

export type DisclosureConfig = IDConfig & {
  initialOpen?: boolean;
} & Partial<
    ToModelConfig<DisclosureState, DisclosureEvents, typeof disclosureEventMap>
  >

export const useDisclosureModel = (config: DisclosureConfig = {}) => {
  const [open, setOpen] = React.useState(config.initialOpen || false)
  const idModel = useIDModel(config)

  const state = {
    ...idModel.state,
    open
  };

  // ...

  return { state, events }
};
```

We can now add `aria-controls` to `DisclosureTarget` and `id` to `DisclosureContent`. We'll also add `aria-expanded` to `DisclosureTarget` to finish off the accessibility specifications:

```tsx
// DisclosureTarget.tsx

// ...

    return (
      <Element
        ref={ref}
        aria-controls={model.state.id}
        aria-expanded={model.state.open}
        onClick={() => {
          model.events.toggle();
        }}
        {...elemProps}
      >
        {children}
      </Element>
    )
    
// ...
```

```tsx
// DisclosureContent.tsx

// ...

    return (
      <Element
        ref={ref}
        id={model.state.id}
        hidden={model.state.open ? undefined : true}
        {...elemProps}
      >
        {children}
      </Element>
    )

// ...
```

Here's the working example now: https://codesandbox.io/s/disclosure-composable-model-9shjn

At this point, we have an accessible disclosure compound component that composes 2 models. But the disclosure pattern is more than just the component level. For example, a tooltip uses the disclosure pattern as well. Let's extract out some behaviors into hooks.

## Behavior Hooks

Behavior hooks allow us to reuse pieces of functionality in difference components. For example, the `Tabs` component utilizes a menu hook for keyboard navigation even though the UI of tabs and the UI of a dropdown menu look very different!

We'll build a behavior hook for the  `DisclosureTarget` component:

```tsx
// useExpandableControls.tsx
import { DisclosureModel } from "./useDisclosureModel"

export const useExpandableControls = (
  { state }: DisclosureModel,
  elemProps: {}
) => {
  return {
    "aria-controls": state.id,
    "aria-expanded": state.open,
    ...elemProps
  }
}
```

Now we can use the behavior hook in the `DiscloseTarget` component:

```tsx
// DisclosureTarget.tsx

// ...
const model = React.useContext(DisclosureModelContext)
const props = useExpandableControls(model, elemProps)

return (
  <Element
    ref={ref}
    onClick={() => {
      model.events.toggle();
    }}
    {...props}
  >
    {children}
  </Element>
)
// ...
```

We'll also make a `useHidden` behavior hook for the `hidden` attribute on the `Disclosure.Content` element:

```tsx
// useHidden.tsx
import { DisclosureModel } from "./useDisclosureModel"

export const useHidden = ({ state }: DisclosureModel, elemProps: {}) => {
  return {
    hidden: state.open ? undefined : true,
    ...elemProps
  };
}
```

The `Disclosure.Content` sub-component can now be updated to use this hook:

```tsx
// DisclosureContent.tsx
const model = React.useContext(DisclosureModelContext)
const props = useHidden(model, elemProps)

return (
  <Element ref={ref} id={model.state.id} {...props}>
    {children}
  </Element>
)
```

The full code can be found here: https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-iwzl8

Having composable models, behaviors, and components means we can reuse parts of other compound components. For example, let's make a simple tooltip component that has a target and content, similar to the disclosure component, but behaves differently. A tooltip shows and hides based on mouse and focus events.

Here's a tooltip model composing the disclosure model:

```tsx
// useTooltipModel.tsx
import {
  DisclosureConfig,
  DisclosureEvents,
  DisclosureState,
  useDisclosureModel
} from "./useDisclosureModel"

export type TooltipState = DisclosureState
export type TooltipEvents = DisclosureEvents
export type TooltipModel = Model<TooltipState, TooltipEvents>

export type TooltipConfig = DisclosureConfig & {
  initialOpen?: never // tooltips never start open
};

export const useTooltipModel = (config: TooltipConfig = {}) => {
  const disclosure = useDisclosureModel(config)

  const state = disclosure.state
  const events = disclosure.events

  return { state, events }
}

```

Not much interesting is happening here. We're not adding additional state or events, but we're removing the `initialOpen` config option from the model.

The final Tooltip compound component API will look something like this when we're done:

```tsx
<Tooltip>
  <Tooltip.Target>Target</Tooltip.Target>
  <Tooltip.Content>The content of the Tooltip</Tooltip>
</Tooltip>
```

The `Tooltip` container component looks almost exactly like the Disclosure component:

```tsx
// Tooltip.tsx
import React from "react"
import { createComponent } from "@workday/canvas-kit-react-common"

import {
  useTooltipModel,
  TooltipModel,
  TooltipConfig
} from "./useTooltipModel"
import { TooltipTarget } from "./TooltipTarget"
import { TooltipContent } from "./TooltipContent"

export const TooltipModelContext = React.createContext<TooltipModel>({} as any);

export interface TooltipProps extends TooltipConfig {
  children: React.ReactNode
}

export const Tooltip = createComponent()({
  displayName: "Tooltip",
  Component: ({ children, ...config }: TooltipProps) => {
    const model = useTooltipModel(config)

    return (
      <TooltipModelContext.Provider value={model}>
        {children}
      </TooltipModelContext.Provider>
    )
  },
  subComponents: {
    Target: TooltipTarget,
    Content: TooltipContent
  }
})
```

The `Tooltip.Target` component is similar to the `DisclosureTarget` component, but has different behavior. The tooltip triggers on different events. Here's the code:

```tsx
import React from "react"
import { createComponent } from "@workday/canvas-kit-react-common"

import { TooltipModelContext } from "./Tooltip"
import { TooltipModel } from "./useTooltipModel"

export interface TooltipTargetProps {
  children: React.ReactNode
}

export const useTooltipTarget = (
  { state, events }: TooltipModel,
  elemProps = {}
) => {
  return {
    onFocus(event: any) {
      events.open()
      (elemProps as any).onFocus?.(event)
    },
    onBlur() {
      events.close()
    },
    onMouseEnter() {
      events.open()
    },
    onMouseLeave() {
      events.close()
    },
    "aria-describedby": state.id,
    ...elemProps
  }
}

export const TooltipTarget = createComponent("button")({
  displayName: "Tooltip.Target",
  Component: ({ children, ...elemProps }: TooltipTargetProps, ref, Element) => {
    const model = React.useContext(TooltipModelContext)
    const props = useTooltipTarget(model, elemProps)

    return (
      <Element ref={ref} {...props}>
        {children}
      </Element>
    )
  }
})
```

The `Tooltip.Target` component also uses the `aria-described` for accessibility. The  `state.id` comes from the `IDModel`.

The `Tooltip.Content` component is similar to the `Disclosure.Content` component, except that it uses a ReactDOM portal to ensure the content appears on top of other content. This example doesn't include a positional library and instead hard-codes positional values. Notice we can reuse our `useHidden` behavior hook in this component!

```tsx
import React from "react"
import ReactDOM from "react-dom"
import { createComponent } from "@workday/canvas-kit-react-common"

import { TooltipModelContext } from "./Tooltip"
import { useHidden } from "./useHidden"

export interface TooltipContentProps {
  children: React.ReactNode
}

export const TooltipContent = createComponent("div")({
  displayName: "Tooltip.Content",
  Component: (
    { children, ...elemProps }: TooltipContentProps,
    ref,
    Element
  ) => {
    const model = React.useContext(TooltipModelContext)
    const props = useHidden(model, elemProps)

    return ReactDOM.createPortal(
      model.state.id ? (
        <Element
          ref={ref}
          id={model.state.id}
          style={{ position: "absolute", left: 80, top: 10 }}
          {...props}
        >
          {children}
        </Element>
      ) : null,
      document.body
    )
  }
})
```

The tooltip target could be anything. By default it is a `button` element since tooltips need to receive focus. What if we want a tooltip around the disclosure target element without introducing another `button` element? This is where the `as` prop comes in handy:

```tsx
<Disclosure>
  <Tooltip>
    <Tooltip.Target as={Disclosure.Target}>
      Toggle
    </Tooltip.Target>
    <Tooltip.Content>Tooltip!</Tooltip.Content>
  </Tooltip>
  <Disclosure.Content>Content</Disclosure.Content>
</Disclosure>
```

In the example, we can see the `Tooltip.Target` element will be the `Disclosure.Target` element.

Here's the working example: https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-tooltip-df7ht

## Wrap it up

Hopefully, by now, you have a much better idea how compound components work internally and how to create your own. Model composition is a powerful way to create more complex models out of smaller parts. Compound components can be composed to make much more complicated UIs.

This API seems more verbose, but it is extremely flexible. The nice thing about a compound component API is we can create more terse components out of them. We expect applications to create wrapper components the have a more tightly controlled interface. For example, if we wanted an expandable component with a tooltip baked in, we could create a component API like this:

```tsx
<Expandable tooltipText="Tooltip!" targetText="Toggle">Content</Expandable>
```

We'll make an `Expandable` component that abstracts the compound component API for re-use in applications (expandable components are so in these days!):

```tsx
// Expandable.tsx
import React from "react"

import { Disclosure } from "./Disclosure"
import { Tooltip } from "./Tooltip"

export interface ExpandableProps {
  tooltipText: string
  targetText: string
  children: React.ReactNode
}

export const Expandable = ({
  tooltipText,
  targetText,
  children
}: ExpandableProps) => {
  return (
    <Disclosure>
      <Tooltip>
        <Tooltip.Target as={Disclosure.Target}>{targetText}</Tooltip.Target>
        <Tooltip.Content>{tooltipText}</Tooltip.Content>
      </Tooltip>
      <Disclosure.Content>{children}</Disclosure.Content>
    </Disclosure>
  )
}
```

This configuration API has lost the flexibility of the compound component API, but it is simpler to use. Applications can create these APIs for internal components since they know more about the context that a component will live in. Things like how to do translations, if there's any additional attributes to add (test ids or analytics metadata).

The full working code can be found here: https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-tooltip-wrapped-2u8mk
