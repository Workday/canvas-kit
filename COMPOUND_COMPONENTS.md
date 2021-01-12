# Compound Components

## What is a compound component?

Compound components is a pattern in which components are used together in such a way that describes a higher level of abstraction. A desktop computer is composed of many components that can be serviced and configured individually. Similarly, a compound component allows simultaneous configuration through access to each sub-component. Here are the parts of a compound component:

* Container component
* Sub-components
* Shared model (optional)
* Behavior hooks (optional)

A compound component contrasts with a configuration component which instead configures from a single interface. A configuration component might be like choosing a desktop computer based on stats - how much RAM or how fast the CPU should be or based on what you want to use it for. A compound component is more like buying the parts individually and assembling yourself.

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
const TabsModelContext = React.createContext({})

const useTabsModelContext = () => React.useContext(TabsModelContext)

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

Extra HTML attributes can be added directly to the `Tabs.List`, `Tabs.Item`, or `Tabs.Panel` sub-components.

The pattern provides an additional benefit as well: maintainability. An active client-side application is constantly changing over the course of its lifecycle. However, not all parts change at the same rate. The application-level business logic (authentication, authorization, data fetching, et al) likely remains fairly intact over time. The UI logic layer (checkout flow steps, modal logic, etc) will change more frequently as features evolves or are deprecated. The most frequent changes happen at the markup structure and styling level. Configurable components are great at meeting the needs of your application today, but are more difficult to update. Changing the markup will often require changes to the component's code which will require library updates. These library updates mean more UI logic and complexity or complete rewrite to support more use-cases.

For these reasons, we much prefer the compound component pattern. It allows our components to adapt to your application's needs and evolve with it over time, often without changes to our code.

## Models

### What is a Model?

 If a compound component was stripped of all its markup, attributes, and styling, what would remain is the model. The model is how we describe the state and behavior of the component. You could completely swap out the underlying elements, attributes, and styles, and the model would remain the same. The model is an object that is composed of two parts: `state` and `events`. The model's `state` describes the current snapshot in time of the component, and `events` are functions that act on that state (behaviors).
 
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

A model has configuration for functionality including configuration of events. An event has two parts:
* Guard
* Action

A guard controls if an event produces a state change as well is if the action is called. A guard is a function that receives data of the event and returns `true` to allow normal operation or `false` to prevent normal operation. The guard function is invoked before anything else in the event.

An action is similar to any callback with information of an event. An action is used to perform side effects or additional state changes.

The convention is an event called `open` has a guard function called `shouldOpen` and an action function called `onOpen`. Here's an example of a disclosure model that has a state of `{ opened: boolean }` and an event of `{ open: () => void }`:

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
      config.onOpen?.({ data, state })
    }
  }
  
  return { state, events }
}
```

Guards allow configuration of state changes. A concrete example might be an `EllipsisTooltip` where `mouseover` or `focus` DOM events call the `open` model event. The `shouldOpen` guard would allow a conditional check of overflow to open the tooltip only if an overflow is detected. For example:

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

Models are meant to be composable. For example, a `TabModel` uses a `MenuModel` (which itself uses `ListModel`) and a `ListModel` for a list of panels. `TabsModel` also keeps track of which tab is currently active. This might look like the following:

```ts
const useTabsModel = (config = {}) => {
  // id is used for ARIA attributes
  const id = useUniqueId(config.id)
  const [activeTab, setActiveTab] = React.useState('')
  const menu = useMenuModel(config)
  const panels = useListModel(config)
  
  const state = {
    ...menu.state,
    id,
    activeTab,
    panels: panels.state.items,
  }
  
  const events = {
    ...menu.events,
    registerPanel: panels.events.registerItem,
    unregisterPanel: panels.events.unregisterItem,
    
    activateTab({ data }) {
      if (config.shouldActivateTab?.({ data, state }) === false) {
        return
      }
      setActiveTab(data.tab)
      config.onActivateTab?.({ data, state })
    }
  }
  
  return { state, events }
}
```

Model composition allows for components to share functionality with other components. In the Tabs example, `ListModel` is in charge of registering and deregistering items. The `MenuModel` is in charge of maintaining a current cursor position of the list for use in keyboard navigation. The `TabModel` uses the menu cursor to allow keyboard activation of the tabs. The `TabModel` also maintains the currently active tab to ensure the correct `TabPanel` is visible. The `TabModel` is also using a `ListModel` to track tab panels.

Many other components like `Select`, `Breadcrumbs`, or dropdown menus can also use the `ListModel` and/or the `MenuModel`.

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
    
The Typescript interface of Actions and Guards looks like this:
```ts
type Guard<EventData, State> = ({ data: EventData, state: State}) => boolean
type Action<EventData, State> = ({ data: EventData, state: State}) => void
```


## Behavior Hooks

### What is a Behavior Hook?

A behavior hook usually applies to a sub-component and describes the events and attributes that are applied to a sub-component's element. A behavior hook takes in the model and developer-defined HTML attributes and return a merged object of events and HTML attributes.

### Why Behavior Hooks?

A behavior hook allows us to more easily reuse functionality between components with similar sub-components. They also provide another layer of composition to compound components. They are usually the accessibility layer of a sub-component and not the HTML element directly.

For example, the `MenuModel` contains model's internal state and events, but doesn't handle external DOM events directly. The behavior hook is the glue between the model and DOM elements. A `useMenu` behavior hook might look like this:

```ts
const useMenu = (
  { state, events },
  elemProps = {}
) => {

  React.useEffect(() => {
    const item = state.items.find(({ id }) => state.currentId === id)
    item.ref.current?.focus()
  }, [state.currentId, state.items])

  return {
    onKeyDown(event) {
      // if onKeyDown was provided, call it first
      elemProps.onKeyDown?.(event)

      if (event.key === 'ArrowLeft') {
         events.previous()
      }
      if (event.key === 'ArrowRight') {
         events.next()
      }
    },
    ...elemProps,
  }
}
```

## Putting it all together

In the `Tabs` component example, the Menu doesn't actually exist as component, but a model and a behavior hook. The `Tab.List` sub-component uses the `TabModel` and the `useMenu` behavior hook to produce the desired sub-component. It looks something like this:

```tsx
const TabList = ({children, ...elemProps}) => {
  const model = useTabsModelContext()
  const menu = useMenu(
    model,
    elemProps,
  )

  return (
    <div
      role="tablist"
      {...menu}
    >
      {children}
    </div>
  )
};
```

There are 2 ways to configure a model.

The easiest way is to pass model configuration directly to the container component. In the `Tabs` example, it might look like this:

```tsx
<Tabs
  onActivateTab={({data}) => fetch('/api/activatetab' + data.id) }
>
  ...
</Tabs>
```

We expect most use-cases will be covered by the above example, but If you need direct access to the model in your component, you'll have to create the configured model yourself and pass it on to the container component. The allows direct access to state and events of the model. In the `Tabs` example, it might look like this:

```tsx
const MyTabs = () => {
  const model = useTabsModel({
    onActivateTab: ({data}) => fetch('/api/activatetab' + data.id),
  })

  return (
    <>
      <Tabs model={model}>
        ...
      </Tabs>
      Current selected tab: {model.state.activeTab}

      // Now we can activate a tab externally
      <button onClick={() => model.events.activateTab({ tab: 'third' })}>
        Activate third tab
      </button>
    </>
  )
}
```
