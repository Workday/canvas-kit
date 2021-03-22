# Compound Components

## What is a compound component?

> Compound components is a pattern where higher level components are composed using smaller components, and you retain access to all the semantic elements of the higher level component.

* [Container component](#container-components)
* [Sub-components](#sub-components)
* [Shared model (optional, advanced)](#models)
* [Behavior hooks (optional, advanced)](#behavior-hooks)

A compound component contrasts with a configuration component which instead configures from a single interface, like a configuration object or multiple props in React. A configuration component might be like choosing a desktop computer based on stats - how much RAM or how fast the CPU should be or based on what you want to use it for. A compound component is more like buying the parts individually and assembling yourself.

Configuration component:
```tsx
<Tabs items={[
  { title: 'First Tab', content: 'First Tab Contents' },
  { title: 'Second Tab', content: 'Second Tab Contents' },
]} />
```

Compound component:
```tsx
<Tabs>
  <Tabs.List>
    <Tabs.Item>First Tab</Tabs.Item>
    <Tabs.Item>Second Tab</Tabs.Item>
  </Tabs.List>
  <Tabs.Panel>First Tab Contents</Tabs.Panel>
  <Tabs.Panel>Second Tab Contents</Tabs.Panel>
</Tabs>
```

In this example, `Tabs` is the container component and `Tabs.List` is a sub-component.

Some compound components might not contain state or behavior. An example might be an `IconButton` which is a button that contains an icon. It might be a compound component only for styling purposes, but doesn't contain any special state or behaviors:

```tsx
<IconButton onClick={onClick}>
  <IconButton.Icon icon={icon} />
  <IconButton.Text>Button Text</IconButton.Text>
</IconButton>
```

## Container Components

A container component is the entry point to a compound component. A container component could represent a real DOM element, or be a non-element container. For example, the `Pagination` component has a container component that represents a `role=nav` element. The `Tabs` container component, however, does not contain a semantic element.

If a compound component contains any state or behavior, it will also provide a shared model to sub-components via [React context](https://reactjs.org/docs/context.html). A container component takes props for either the model or configuration for the model. In the `Tabs` compound component example, it might look like this:

```tsx
export const TabsModelContext = React.createContext({})

const Tabs = ({children, model, ...config}) => {
  // either a model is passed in, or we create one
  const value = model || useTabsModel(config)

  return (
    <TabsModelContext.Provider value={value}>
      {children}
    </TabsModelContext.Provider>
  )
}
```

## Sub-components

A sub-component typically follows ARIA roles. For the `Tabs` example, these are the `tablist`, `tab`, and `tabpanel` roles. A sub-component provides direct access to semantic or key elements of a compound component. In the `IconButton` example, the icon is not semantic and might be hidden from screen readers while the `IconButton.Text` content is instead used for a tooltip and as the accessible name while being visibly hidden.

## Why Compound Components?

Configurable components have a more terse implementation and tightly control component structure, which make it a popular pattern. However, the trade-off of their rigid structure is losing direct access to the markup. This is problematic for adding attributes to underlying elements, customizing styles, and modifying the component's markup structure. Providing additional props can bypass those issues, but that often leads to a bloated component API. And because these additional props are often component-specific, it creates a less intuitive API for developers implementing the component. For example, the Tabs interface might look like:

```tsx
interface Tab {
  title: string
  contents: React.ReactNode
  tabProps: React.HTMLAttributes<HTMLElement>
  tabPanelProps: React.HTMLAttributes<HTMLElement>
}

interface TabsProps {
  tabListProps: React.HTMLAttributes<HTMLElement>
  items: Tab[]
}
```

Conversely, compound components have a more verbose implementation and loose control over structure. This flexibility allows developers to have direct access to underlying elements which makes manipulating attributes, styles, and markup structure much more natural and intuitive. From the above example:

```tsx
<Tabs>
  <Tabs.List>
    <Tabs.Item>First Tab</Tabs.Item>
    <Tabs.Item>Second Tab</Tabs.Item>
  </Tabs.List>
  <Tabs.Panel>First Tab Contents</Tabs.Panel>
  <Tabs.Panel>Second Tab Contents</Tabs.Panel>
</Tabs>
```

The pattern provides an additional benefit as well: maintainability. An active client-side application is constantly changing over the course of its lifecycle. However, not all parts change at the same rate. The application-level business logic (authentication, authorization, data fetching, et al) likely remains fairly intact over time. The UI logic layer (checkout flow steps, modal logic, etc) will change more frequently as features evolves or are deprecated. The most frequent changes happen at the markup structure and styling level. Configurable components are great at meeting the needs of your application today, but are more difficult to update. Changing the markup will often require changes to the component's code which will require library updates. These library updates mean more UI logic and complexity or complete rewrite to support more use-cases.

For these reasons, we much prefer the compound component pattern. It allows our components to adapt to your application's needs and evolve with it over time, often without changes to our code.


## Configuring Components

Components that directly wrap an element (most of them) will have the following properties:

* `ref`: This allows direct access to the underlying element.
  ```tsx
  <Tabs.Item ref={myRef}>
  ```
* `as`: This allows overriding of the default element. The override can be a string representation of a tag (i.e. `section`, `div`, `nav`, etc), or a Component that forwards attributes to an element.
  ```tsx
  // tag
  <Tabs.List as="section" />

  // Component
  const Section = ({children, ...elemProps}) => (
    <section {...elemProps}>{children}</section>
  )

  <Tabs.List as={Section}/>
  ```
  Both will look like the following in the DOM:
  ```html
  <section role="tablist">
  ```
* Any extra props will be passed as HTML attributes to the underlying element.
  ```tsx
  <Tabs.Item aria-label="Foobar" data-testid="tab1">
  ```

Compound components are also made up of [models](#models) that accept [guards](#guards) to conditionally prevent state changes and [callbacks](#callbacks) to attach listeners. For example, in our Tabs component clicking a Tab will activate that tab. The `Tabs` container component will accept a `shouldActivate` and a `onActivate` for the event called `activate`.

```tsx
const MyComponent = () => {
  // `data` is all event data from the `activate` event

  // `state` is the current state of the `Tabs` component
  const shouldActivate = ({ data, state }) => {
    // for some reason, we only want to allow activation the 'first' tab
    // Clicking on the first tab will activate it, but clicking on the
    // second tab will do nothing
    return data.tab === 'first' ? true : false
    
    // returning true allows the event to trigger a state change and will
    // also call the `onActivate` callback
  }

  // `prevState` is the previous state of the model. Callbacks are called _before_ state has resolved.
  // This means the passed state hasn't updated yet. It also means it is safe to call `setState` without
  // triggering extra renders. `setState` calls will add to React's batching system before a state changes
  // are flushed and render functions are called.
  const onActivate = ({ data, prevState }) => {
    // called any time the `activate` event is triggered
    console.log('onActivate', data, prevState)
  }
  
  return (
    <Tabs shouldActivate={shouldActivate} onActivate={onActivate}>
      <Tabs.List>
        <Tabs.Item name="first">First</Tabs.Item>
        <Tabs.Item name="second">Second</Tabs.Item>
      </Tabs.List>
    </Tabs>
  )
}
```

This concludes basic compound components. If you'd like to know more about models, behavior hooks, and more advanced composition techniques, read on.

## Models

### What is a Model?

 If a compound component was stripped of all its markup, attributes, and styling, what would remain is the model. The model is how we describe the state and supported state transitions. You could completely swap out the underlying elements, attributes, and styles, and the model would remain the same. The model is an object that is composed of two parts: `state` and a `events`. The model's `state` describes the current snapshot in time of the component, and the `events` describes events that can be sent to the model.

 ### Why Models?

 Advantages of models:
 * A common API structure to group state and behavior of components
 * Atomic responsibilities
 * Composable and shareable functionality

 We use React Hooks to return models. An empty model would look like this:

 ```ts
 const useEmptyModel = (config = {}) => {
   const state = {}
   const events = {}

   return { state, events }
 }
 ```

A model hooks takes in a configuration object. This object can contain anything like initial values, configuration of behavior, etc. This is also where event behavior can be configured. Many model events will have 2 optional configurable functions:

* Callbacks
* Guards

#### Callbacks

A callback of an event is similar to native event callbacks like `onClick`. Callbacks are a place to handle events and by convention start with `on`. If the event is called `click`, the callback would be called `onClick`. Callbacks can be used to handle side effects or used to produce additional state changes. Callbacks are called synchronously which batches state changes, so any additional state changes will not produce additional renders. This means callbacks are called with the previous state since state has not resolved yet.

#### Guards

Guards are special functions that determine if an event should trigger a state change and a callback. The function should return `true` or `false`. A `false` return value will effectively cancel the event and state changes will not occur and callbacks will not be invoked. A guard allows for a model's behavior to be modified without needing to produce a new model. Guard functions should be pure functions. Side effects should be performed in callbacks. The convention of a guard function is to start with a `should`. If an event is called `open`, the guard of the event would be called `shouldOpen`.

Both guards and callbacks receive an object of event data (i.e. mouse position of a "click" event) and the current `state` of the model.

Here's an example of a `DisclosureModel` that has an "open" event with a guard called "shouldOpen" and a callback called "onOpen":

```ts
const useDisclosureModel = (config = {}) => {
  const [opened, setOpened] = React.useState(false)

  const state = { opened }
  const events = {
    open(data) {
      if (config.shouldOpen?.({ data, state }) === false) {
        return
      }
      setOpened(true)
      config.onOpen?.({ data, prevState: state })
    }
  }

  return { state, events }
}
```

You can see the guard is called first, if defined, and the output is checked. If `false` is returned, the event is canceled. If the guard is not defined or returns `true`, the `setOpened` setter is called. Finally, if a callback is defined, it is called.

Guards allow configuration of state changes. A concrete example might be an `EllipsisTooltip` where `mouseover` or `focus` DOM events call the model's `open` event. The `shouldOpen` guard would allow conditional opening of the tooltip based on overflow (ellipsis) detection. For example:

```tsx
const useEllipsisTooltipModel = (config = {}) => {
  return useTooltipModel({
    ...config,
    shouldOpen({ data }) {

      // data has an `element` property
      // `findOverflowElement` returns the element with an overflow style applied
      const element = findOverflowElement(data.element)

      // if the scrollWidth is greater than the clientWidth,
      // then the content must be overflowed
      return element.scrollWidth > element.clientWidth
    }
  })
}
```

Models are meant to be composable. For example, a `TabsModel` uses a `CursorModel` (which itself uses `ListModel`) and a `ListModel` for a list of panels. `TabsModel` also keeps track of which tab is currently active. This might look like the following:

```ts
const useTabsModel = (config = {}) => {
  // id is used for ARIA attributes
  const id = useUniqueId(config.id)
  const [activeTab, setActiveTab] = React.useState('')
  const cursor = useCursorModel(config)
  const panels = useListModel(config)

  const state = {
    ...cursor.state, // extend the CursorModel state
    id,
    activeTab,
    panels: panels.state.items, // we only care about
  }

  const events = {
    ...cursor.events, // extend the CursorModel events
    registerPanel: panels.events.registerItem,
    unregisterPanel: panels.events.unregisterItem,

    activate(data) {
      if (config.shouldActivate?.({ data, prevState: state }) === false) {
        return
      }
      setActiveTab(data.tab)
      config.onActivate?.({ data, prevState: state })
    }
  }

  return { state, events }
}
```

Model composition allows for components to share functionality with other components. In the Tabs example, `ListModel` is in charge of maintaining a list of tab elements. The `CursorModel` is in charge of maintaining a current cursor position of the tab list. The `Tabs.List` component uses the cursor to allow keyboard navigation of the tabs. The `TabsModel` also maintains the currently active tab to ensure the correct `TabPanel` is visible. The `TabsModel` is also using a `ListModel` to maintain a list of tab panels. The `TabsModel` is in charge of composing all this and providing data and events to the `Tabs` compound component - coordination state between sub-components.

Many other components like `Select`, `Breadcrumbs`, or dropdown menus can also use the `ListModel` and/or the `CursorModel`. These models could be thought of as abstract models where they do not directly map to a compound component, but are instead used to create concrete models that do map to compound components.

The Typescript interface of a model looks like this:
```ts
interface Model<
  S extends Record<string, any>,
  E extends Record<string, (...args: any[]) => void
> {
  state: S
  events: E
}
```
    
The Typescript interface of Callbacks and Guards looks like this:
```ts
type Callback<EventData, State> = ({ data: EventData, state: State}) => void
type Guard<EventData, State> = ({ data: EventData, state: State}) => boolean
```


## Behavior Hooks

### What is a Behavior Hook?

A behavior hook usually applies to a sub-component and describes attributes that are applied to a sub-component's element (i.e. `aria-labelledby`, or `onClick`). A behavior hook takes in the model and developer-defined DOM attributes and return a merged object of attributes. `(Model, HTMLAttributs) => HTMLAttributes`.

### Why Behavior Hooks?

A behavior hook allows us to more easily reuse functionality between components with similar sub-components. They also provide another layer of composition to compound components.

For example, the `CursorModel` contains the model's internal state and events, but doesn't handle external DOM events directly. The behavior hook is the glue between the model and DOM elements. A `useKeyboardCursor` behavior hook might look like this:

```ts
const useKeyboardCursor = (
  { state, events },
  elemProps = {}
) => {

  const focus = () => {
    const items = state.items.find
  }

  // effects on state changes
  React.useEffect(() => {
    const item = state.items.find(({ id }) => state.currentId === id)
    item.ref.current?.focus()
  }, [state.currentId, state.items])

  return {
    onKeyDown(event) {
      // if onKeyDown was provided, call it first
      elemProps.onKeyDown?.(event)

      if (event.key === 'ArrowLeft' || event.key === 'Left') {
         events.goToPrevious()
      }
      if (event.key === 'ArrowRight' || event.key === 'Right') {
         events.goToNext()
      }
    },
    ...elemProps,
  }
}
```

## Putting it all together

In the `Tabs` component example, there isn't a `Cursor` component. The `Tab.List` sub-component uses the `CursorModel` and the `useRovingFocus` behavior hook to produce the desired sub-component. It looks something like this:

```tsx
const TabList = ({children, ...elemProps}) => {
  const model = React.useContext(TabsModelContext)
  const props = useRovingFocus(
    model,
    elemProps,
  )

  // we could use other behavior hooks to further build `props`

  return (
    <div
      role="tablist"
      {...props}
    >
      {children}
    </div>
  )
};
```

### Configuring a model

A container component can either accept model configuration _or_ a model. Passing model configuration allows for simpler model configuration of guards, callbacks, or any other model configuration. The following example provides an `onActivate` callback that fetches some data from the server:

```tsx
<Tabs
  onActivate={({data}) => fetch('/api/activate' + data.id) }
>
  ...
</Tabs>
```

If you need direct access to a model's state or events, you can hoist the model into your component and pass the whole model to the container component. This allows you to use the model's state in your render method or provide the model's events to other callbacks. In the `Tabs` example, it might look like this:

```tsx
const MyTabs = () => {
  const model = useTabsModel({
    // we can still load data from the server
    onActivate: ({data}) => fetch('/api/activate' + data.id),
  })

  return (
    <>
      <Tabs model={model}>
        ...
      </Tabs>
      // direct access to the model's state
      Currently selected tab: {model.state.activeTab}

      // Now we can send events directly to the model
      <button onClick={() => model.events.activate({ tab: 'third' })}>
        Activate third tab
      </button>
    </>
  )
}
```

### Composing a model

Models allow for very powerful composition without changing the UI at all. For example, if we have a `Disclosure` component, but want to change the operating paradigm to be fully controlled by a parent component, we can compose a `DisclosureModel` to do so. Normally a disclosure model has it's own state, but we can override that behavior and make a controlled Disclosure component instead:

```tsx
const useControlledDisclosureModel = ({ opened, onChange, ...config }) => {
  const model = useDisclosureModel(config)

  const state = {
    ...model.state,
    opened,
  }

  const events = {
    ...model.events,
    open(data) {
      onChange(true)
    },
    close(data) {
      onChange(false)
    }
  }

  return { state, events }
}

const ControlledDisclosure = ({ buttonText, children, opened, onChange }) => {
  const model = useControlledDisclosureModel({ opened, onChange })

  return (
    <Disclosure model={model}>
      <Disclosure.Target>{buttonText}</Disclosure.Target>
      <Disclosure.Content>{children}</Disclosure.Content>
    </Disclosure>
  )
}

const App = () => {
  const [opened, setOpened] = React.useState(false)

  return (
    <ControlledDisclosure
      buttonText="Toggle"
      opened={opened}
      onChange={setOpened}
    >
      Disclosed Content
    </ControlledDisclosure>
  )
}
```

###  Conclusion

The compound component API is a powerful, incrementally composable way to create UI. The component API is the highest level and offers a lot of functionality out of the box. But using models and behavior hooks allow for creation of new components that share some functionality with other components. An example of this is tabs and a dropdown menu both use a `CursorModel` and the `useKeyboardCursor` to enable keyboard navigation even though the UI looks very different.
