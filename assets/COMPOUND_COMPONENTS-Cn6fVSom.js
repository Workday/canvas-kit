import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as s}from"./index-3YbjYt95.js";import{ae as a}from"./index-B7XXfe5h.js";import"./index-IfJi-UCQ.js";import"./iframe-JaH-B26f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Compound Components"}),`
`,e.jsx(n.h1,{id:"compound-components",children:"Compound Components"}),`
`,e.jsx(n.h2,{id:"what-is-a-compound-component",children:"What is a compound component?"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Compound components is a pattern where higher level components are composed using smaller
components, and you retain access to all the semantic elements of the higher level component.`}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#container-components",children:"Container component"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#subcomponents",children:"Subcomponents"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#models",children:"Shared model (optional, advanced)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#behavior-hooks",children:"Behavior hooks (optional, advanced)"})}),`
`]}),`
`,e.jsx(n.p,{children:`A compound component contrasts with a configuration component which instead configures from a single
interface, like a configuration object or multiple props in React. A configuration component might
be like choosing a desktop computer based on stats - how much RAM or how fast the CPU should be or
based on what you want to use it for. A compound component is more like buying the parts
individually and assembling yourself.`}),`
`,e.jsx(n.p,{children:"Configuration component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs
  items={[
    {title: 'First Tab', content: 'First Tab Contents'},
    {title: 'Second Tab', content: 'Second Tab Contents'},
  ]}
/>
`})}),`
`,e.jsx(n.p,{children:"Compound component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs>
  <Tabs.List>
    <Tabs.Item>First Tab</Tabs.Item>
    <Tabs.Item>Second Tab</Tabs.Item>
  </Tabs.List>
  <Tabs.Panel>First Tab Contents</Tabs.Panel>
  <Tabs.Panel>Second Tab Contents</Tabs.Panel>
</Tabs>
`})}),`
`,e.jsxs(n.p,{children:["In this example, ",e.jsx(n.code,{children:"Tabs"})," is the container component and ",e.jsx(n.code,{children:"Tabs.List"})," is a subcomponent."]}),`
`,e.jsxs(n.p,{children:["Some compound components might not contain state or behavior. An example might be an ",e.jsx(n.code,{children:"IconButton"}),`
which is a button that contains an icon. It might be a compound component only for styling purposes,
but doesn't contain any special state or behaviors:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<IconButton onClick={onClick}>
  <IconButton.Icon icon={icon} />
  <IconButton.Text>Button Text</IconButton.Text>
</IconButton>
`})}),`
`,e.jsx(n.h2,{id:"container-components",children:"Container Components"}),`
`,e.jsxs(n.p,{children:[`A container component is the entry point to a compound component. A container component could
represent a real DOM element, or be a non-element container. For example, the `,e.jsx(n.code,{children:"Pagination"}),` component
has a container component that represents a `,e.jsx(n.code,{children:"role=nav"})," element. The ",e.jsx(n.code,{children:"Tabs"}),` container component,
however, does not contain a semantic element.`]}),`
`,e.jsxs(n.p,{children:[`If a compound component contains any state or behavior, it will also provide a shared model to
subcomponents via `,e.jsx(n.a,{href:"https://reactjs.org/docs/context.html",rel:"nofollow",children:"React context"}),`. A container component
takes props for either the model or configuration for the model. In the `,e.jsx(n.code,{children:"Tabs"}),` compound component
example, it might look like this:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const TabsModelContext = React.createContext({});

const Tabs = ({children, model, ...config}) => {
  // either a model is passed in, or we create one
  const value = model || useTabsModel(config);

  return <TabsModelContext.Provider value={value}>{children}</TabsModelContext.Provider>;
};
`})}),`
`,e.jsx(n.h2,{id:"subcomponents",children:"Subcomponents"}),`
`,e.jsxs(n.p,{children:["A subcomponent typically follows ARIA roles. For the ",e.jsx(n.code,{children:"Tabs"})," example, these are the ",e.jsx(n.code,{children:"tablist"}),", ",e.jsx(n.code,{children:"tab"}),`,
and `,e.jsx(n.code,{children:"tabpanel"}),` roles. A subcomponent provides direct access to semantic or key elements of a
compound component. In the `,e.jsx(n.code,{children:"IconButton"}),` example, the icon is not semantic and might be hidden from
screen readers while the `,e.jsx(n.code,{children:"IconButton.Text"}),` content is instead used for a tooltip and as the
accessible name while being visibly hidden.`]}),`
`,e.jsx(n.h2,{id:"why-compound-components",children:"Why Compound Components?"}),`
`,e.jsx(n.p,{children:`Configurable components have a more terse implementation and tightly control component structure,
which make it a popular pattern. However, the trade-off of their rigid structure is losing direct
access to the markup. This is problematic for adding attributes to underlying elements, customizing
styles, and modifying the component's markup structure. Providing additional props can bypass those
issues, but that often leads to a bloated component API. And because these additional props are
often component-specific, it creates a less intuitive API for developers implementing the component.
For example, the Tabs interface might look like:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`interface Tab {
  title: string;
  contents: React.ReactNode;
  tabProps: React.HTMLAttributes<HTMLElement>;
  tabPanelProps: React.HTMLAttributes<HTMLElement>;
}

interface TabsProps {
  tabListProps: React.HTMLAttributes<HTMLElement>;
  items: Tab[];
}
`})}),`
`,e.jsx(n.p,{children:`Conversely, compound components have a more verbose implementation and loose control over structure.
This flexibility allows developers to have direct access to underlying elements which makes
manipulating attributes, styles, and markup structure much more natural and intuitive. From the
above example:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs>
  <Tabs.List>
    <Tabs.Item>First Tab</Tabs.Item>
    <Tabs.Item>Second Tab</Tabs.Item>
  </Tabs.List>
  <Tabs.Panel>First Tab Contents</Tabs.Panel>
  <Tabs.Panel>Second Tab Contents</Tabs.Panel>
</Tabs>
`})}),`
`,e.jsx(n.p,{children:`The pattern provides an additional benefit as well: maintainability. An active client-side
application is constantly changing over the course of its lifecycle. However, not all parts change
at the same rate. The application-level business logic (authentication, authorization, data
fetching, et al) likely remains fairly intact over time. The UI logic layer (checkout flow steps,
modal logic, etc) will change more frequently as features evolves or are deprecated. The most
frequent changes happen at the markup structure and styling level. Configurable components are great
at meeting the needs of your application today, but are more difficult to update. Changing the
markup will often require changes to the component's code which will require library updates. These
library updates mean more UI logic and complexity or complete rewrite to support more use-cases.`}),`
`,e.jsx(n.p,{children:`For these reasons, we much prefer the compound component pattern. It allows our components to adapt
to your application's needs and evolve with it over time, often without changes to our code.`}),`
`,e.jsx(n.h2,{id:"configuring-components",children:"Configuring Components"}),`
`,e.jsx(n.p,{children:"Components that directly wrap an element (most of them) will have the following properties:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ref"}),": This allows direct access to the underlying element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs.Item ref={myRef}>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"as"}),`: This allows overriding of the default element. The override can be a string representation
of a tag (i.e. `,e.jsx(n.code,{children:"section"}),", ",e.jsx(n.code,{children:"div"}),", ",e.jsx(n.code,{children:"nav"}),`, etc), or a Component that forwards attributes to an
element. If you use a component, you should forward the React `,e.jsx(n.code,{children:"ref"}),` and spread all extra props to
the element to ensure the API still works.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// tag
<Tabs.List as="section" />

// Component
const Section = React.forwardRef(({children, ...elemProps}, ref) => (
  <section ref={ref} {...elemProps}>{children}</section>
))

<Tabs.List as={Section}/>
`})}),`
`,e.jsx(n.p,{children:"Both will look like the following in the DOM:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<section role="tablist"></section>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Any extra props will be passed as HTML attributes to the underlying element."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs.Item aria-label="Foobar" data-testid="tab1">
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Compound components are also made up of ",e.jsx(n.a,{href:"#models",children:"models"})," that accept ",e.jsx(n.a,{href:"#guards",children:"guards"}),` to
conditionally prevent state changes and `,e.jsx(n.a,{href:"#callbacks",children:"callbacks"}),` to attach listeners. For example, in
our Tabs component clicking a Tab will select that tab. The `,e.jsx(n.code,{children:"Tabs"}),` container component will accept a
`,e.jsx(n.code,{children:"shouldSelect"})," and a ",e.jsx(n.code,{children:"onSelect"})," for the event called ",e.jsx(n.code,{children:"select"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyComponent = () => {
  // \`data\` is all event data from the \`select\` event

  // \`state\` is the current state of the \`Tabs\` component
  const shouldSelect = ({data, state}) => {
    // for some reason, we only want to allow selection the 'first' tab
    // Clicking on the first tab will select it, but clicking on the
    // second tab will do nothing
    return data.tab === 'first' ? true : false;

    // returning true allows the event to trigger a state change and will
    // also call the \`onSelect\` callback
  };

  // \`prevState\` is the previous state of the model. Callbacks are called _before_ state has resolved.
  // This means the passed state hasn't updated yet. It also means it is safe to call \`setState\` without
  // triggering extra renders. \`setState\` calls will add to React's batching system before a state changes
  // are flushed and render functions are called.
  const onSelect = ({data, prevState}) => {
    // called any time the \`select\` event is triggered
    console.log('onSelect', data, prevState);
  };

  return (
    <Tabs shouldSelect={shouldSelect} onSelect={onSelect}>
      <Tabs.List>
        <Tabs.Item data-id="first">First</Tabs.Item>
        <Tabs.Item data-id="second">Second</Tabs.Item>
      </Tabs.List>
    </Tabs>
  );
};
`})}),`
`,e.jsx(n.p,{children:`This concludes basic compound components. If you'd like to know more about models, behavior hooks,
and more advanced composition techniques, read on.`}),`
`,e.jsx(n.h2,{id:"models",children:"Models"}),`
`,e.jsx(n.h3,{id:"what-is-a-model",children:"What is a Model?"}),`
`,e.jsxs(n.p,{children:[`If a compound component was stripped of all its markup, attributes, and styling, what would remain
is the model. The model is how we describe the state and supported state transitions. You could
completely swap out the underlying elements, attributes, and styles, and the model would remain the
same. The model is an object that is composed of two parts: `,e.jsx(n.code,{children:"state"})," and a ",e.jsx(n.code,{children:"events"}),`. The model's
`,e.jsx(n.code,{children:"state"})," describes the current snapshot in time of the component, and the ",e.jsx(n.code,{children:"events"}),` describes events
that can be sent to the model.`]}),`
`,e.jsx(n.h3,{id:"why-models",children:"Why Models?"}),`
`,e.jsx(n.p,{children:"Advantages of models:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A common API structure to group state and behavior of components"}),`
`,e.jsx(n.li,{children:"Atomic responsibilities"}),`
`,e.jsx(n.li,{children:"Composable and shareable functionality"}),`
`]}),`
`,e.jsx(n.p,{children:"We use React Hooks to return models. An empty model would look like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const useEmptyModel = (config = {}) => {
  const state = {};
  const events = {};

  return {state, events};
};
`})}),`
`,e.jsx(n.p,{children:`A model hooks takes in a configuration object. This object can contain anything like initial values,
configuration of behavior, etc. This is also where event behavior can be configured. Many model
events will have 2 optional configurable functions:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Callbacks"}),`
`,e.jsx(n.li,{children:"Guards"}),`
`]}),`
`,e.jsx(n.h4,{id:"callbacks",children:"Callbacks"}),`
`,e.jsxs(n.p,{children:["A callback of an event is similar to native event callbacks like ",e.jsx(n.code,{children:"onClick"}),`. Callbacks are a place to
handle events and by convention start with `,e.jsx(n.code,{children:"on"}),". If the event is called ",e.jsx(n.code,{children:"click"}),`, the callback would
be called `,e.jsx(n.code,{children:"onClick"}),`. Callbacks can be used to handle side effects or used to produce additional
state changes. Callbacks are called synchronously which batches state changes, so any additional
state changes will not produce additional renders. This means callbacks are called with the previous
state since state has not resolved yet.`]}),`
`,e.jsx(n.h4,{id:"guards",children:"Guards"}),`
`,e.jsxs(n.p,{children:[`Guards are special functions that determine if an event should trigger a state change and a
callback. The function should return `,e.jsx(n.code,{children:"true"})," or ",e.jsx(n.code,{children:"false"}),". A ",e.jsx(n.code,{children:"false"}),` return value will effectively
cancel the event and state changes will not occur and callbacks will not be invoked. A guard allows
for a model's behavior to be modified without needing to produce a new model. Guard functions should
be pure functions. Side effects should be performed in callbacks. The convention of a guard function
is to start with a `,e.jsx(n.code,{children:"should"}),". If an event is called ",e.jsx(n.code,{children:"open"}),`, the guard of the event would be called
`,e.jsx(n.code,{children:"shouldOpen"}),"."]}),`
`,e.jsxs(n.p,{children:[`Both guards and callbacks receive an object of event data (i.e. mouse position of a "click" event)
and the current `,e.jsx(n.code,{children:"state"})," of the model."]}),`
`,e.jsxs(n.p,{children:["Here's an example of a ",e.jsx(n.code,{children:"DisclosureModel"}),` that has an "open" event with a guard called "shouldOpen"
and a callback called "onOpen":`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const useDisclosureModel = (config = {}) => {
  const [opened, setOpened] = React.useState(false);

  const state = {opened};
  const events = {
    open(data) {
      if (config.shouldOpen?.({data, state}) === false) {
        return;
      }
      setOpened(true);
      config.onOpen?.({data, prevState: state});
    },
  };

  return {state, events};
};
`})}),`
`,e.jsxs(n.p,{children:["You can see the guard is called first, if defined, and the output is checked. If ",e.jsx(n.code,{children:"false"}),` is
returned, the event is canceled. If the guard is not defined or returns `,e.jsx(n.code,{children:"true"}),", the ",e.jsx(n.code,{children:"setOpened"}),`
setter is called. Finally, if a callback is defined, it is called.`]}),`
`,e.jsxs(n.p,{children:["Guards allow configuration of state changes. A concrete example might be an ",e.jsx(n.code,{children:"EllipsisTooltip"}),` where
`,e.jsx(n.code,{children:"mouseover"})," or ",e.jsx(n.code,{children:"focus"})," DOM events call the model's ",e.jsx(n.code,{children:"open"})," event. The ",e.jsx(n.code,{children:"shouldOpen"}),` guard would allow
conditional opening of the tooltip based on overflow (ellipsis) detection. For example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const useEllipsisTooltipModel = (config = {}) => {
  return useTooltipModel({
    ...config,
    shouldOpen({data}) {
      // data has an \`element\` property
      // \`findOverflowElement\` returns the element with an overflow style applied
      const element = findOverflowElement(data.element);

      // if the scrollWidth is greater than the clientWidth,
      // then the content must be overflowed
      return element.scrollWidth > element.clientWidth;
    },
  });
};
`})}),`
`,e.jsxs(n.p,{children:["Models are meant to be composable. For example, a ",e.jsx(n.code,{children:"TabsModel"})," uses a ",e.jsx(n.code,{children:"CursorModel"}),` (which itself
uses `,e.jsx(n.code,{children:"ListModel"}),") and a ",e.jsx(n.code,{children:"ListModel"})," for a list of panels. ",e.jsx(n.code,{children:"TabsModel"}),` also keeps track of which tab
is currently selected. This might look like the following:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const useTabsModel = (config = {}) => {
  // id is used for ARIA attributes
  const id = useUniqueId(config.id);
  const [selectedTab, setSelectedTab] = React.useState('');
  const cursor = useCursorModel(config);
  const panels = useListModel(config);

  const state = {
    ...cursor.state, // extend the CursorModel state
    id,
    selectedTab,
    panels: panels.state.items, // we only care about
  };

  const events = {
    ...cursor.events, // extend the CursorModel events
    registerPanel: panels.events.registerItem,
    unregisterPanel: panels.events.unregisterItem,

    select(data) {
      if (config.shouldSelect?.({data, prevState: state}) === false) {
        return;
      }
      setSelectedTab(data.tab);
      config.onSelect?.({data, prevState: state});
    },
  };

  return {state, events};
};
`})}),`
`,e.jsxs(n.p,{children:[`Model composition allows for components to share functionality with other components. In the Tabs
example, `,e.jsx(n.code,{children:"ListModel"})," is in charge of maintaining a list of tab elements. The ",e.jsx(n.code,{children:"CursorModel"}),` is in
charge of maintaining a current cursor position of the tab list. The `,e.jsx(n.code,{children:"Tabs.List"}),` component uses the
cursor to allow keyboard navigation of the tabs. The `,e.jsx(n.code,{children:"TabsModel"}),` also maintains the currently
selected tab to ensure the correct `,e.jsx(n.code,{children:"TabPanel"})," is visible. The ",e.jsx(n.code,{children:"TabsModel"}),` is also using a
`,e.jsx(n.code,{children:"ListModel"})," to maintain a list of tab panels. The ",e.jsx(n.code,{children:"TabsModel"}),` is in charge of composing all this and
providing data and events to the `,e.jsx(n.code,{children:"Tabs"}),` compound component - coordination state between
subcomponents.`]}),`
`,e.jsxs(n.p,{children:["Many other components like ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"Breadcrumbs"}),", or dropdown menus can also use the ",e.jsx(n.code,{children:"ListModel"}),`
and/or the `,e.jsx(n.code,{children:"CursorModel"}),`. These models could be thought of as abstract models where they do not
directly map to a compound component, but are instead used to create concrete models that do map to
compound components.`]}),`
`,e.jsx(n.p,{children:"The Typescript interface of a model looks like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface Model<
  S extends Record<string, any>,
  E extends Record<string, (...args: any[]) => void
> {
  state: S
  events: E
}
`})}),`
`,e.jsx(n.p,{children:"The Typescript interface of Callbacks and Guards looks like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type Callback<EventData, State> = ({data: EventData, prevState: State}) => void;
type Guard<EventData, State> = ({data: EventData, state: State}) => boolean;
`})}),`
`,e.jsx(n.h2,{id:"behavior-hooks",children:"Behavior Hooks"}),`
`,e.jsx(n.h3,{id:"what-is-a-behavior-hook",children:"What is a Behavior Hook?"}),`
`,e.jsxs(n.p,{children:[`A behavior hook usually applies to a subcomponent and describes attributes that are applied to a
subcomponent's element (i.e. `,e.jsx(n.code,{children:"aria-labelledby"}),", or ",e.jsx(n.code,{children:"onClick"}),`). A behavior hook takes in the model
and developer-defined DOM attributes and return a merged object of attributes.
`,e.jsx(n.code,{children:"(Model, HTMLAttributs) => HTMLAttributes"}),"."]}),`
`,e.jsx(n.h3,{id:"why-behavior-hooks",children:"Why Behavior Hooks?"}),`
`,e.jsx(n.p,{children:`A behavior hook allows us to more easily reuse functionality between components with similar
subcomponents. They also provide another layer of composition to compound components.`}),`
`,e.jsxs(n.p,{children:["For example, the ",e.jsx(n.code,{children:"CursorModel"}),` contains the model's internal state and events, but doesn't handle
external DOM events directly. The behavior hook is the glue between the model and DOM elements. A
`,e.jsx(n.code,{children:"useKeyboardCursor"})," behavior hook might look like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const useKeyboardCursor = ({state, events}, elemProps = {}) => {
  const focus = () => {
    const items = state.items.find;
  };

  // effects on state changes
  React.useEffect(() => {
    const item = state.items.find(({id}) => state.currentId === id);
    item.ref.current?.focus();
  }, [state.currentId, state.items]);

  return {
    onKeyDown(event) {
      // if onKeyDown was provided, call it first
      elemProps.onKeyDown?.(event);

      if (event.key === 'ArrowLeft' || event.key === 'Left') {
        events.goToPrevious();
      }
      if (event.key === 'ArrowRight' || event.key === 'Right') {
        events.goToNext();
      }
    },
    ...elemProps,
  };
};
`})}),`
`,e.jsx(n.h2,{id:"putting-it-all-together",children:"Putting it all together"}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"Tabs"})," component example, there isn't a ",e.jsx(n.code,{children:"Cursor"})," component. The ",e.jsx(n.code,{children:"Tab.List"}),` subcomponent uses
the `,e.jsx(n.code,{children:"CursorModel"})," and the ",e.jsx(n.code,{children:"useRovingFocus"}),` behavior hook to produce the desired subcomponent. It
looks something like this:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const TabList = ({children, ...elemProps}) => {
  const model = React.useContext(TabsModelContext);
  const props = useRovingFocus(model, elemProps);

  // we could use other behavior hooks to further build \`props\`

  return (
    <div role="tablist" {...props}>
      {children}
    </div>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"configuring-a-model",children:"Configuring a model"}),`
`,e.jsxs(n.p,{children:["A container component can either accept model configuration ",e.jsx(n.em,{children:"or"}),` a model. Passing model
configuration allows for simpler model configuration of guards, callbacks, or any other model
configuration. The following example provides an `,e.jsx(n.code,{children:"onSelect"}),` callback that fetches some data from the
server:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs onSelect={({data}) => fetch('/api/selectTab' + data.id)}>...</Tabs>
`})}),`
`,e.jsxs(n.p,{children:[`If you need direct access to a model's state or events, you can hoist the model into your component
and pass the whole model to the container component. This allows you to use the model's state in
your render method or provide the model's events to other callbacks. In the `,e.jsx(n.code,{children:"Tabs"}),` example, it might
look like this:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyTabs = () => {
  const model = useTabsModel({
    // we can still load data from the server
    onSelect: ({data}) => fetch('/api/selectTab' + data.id),
  });

  return (
    <>
      <Tabs model={model}>...</Tabs>
      // direct access to the model's state Currently selected tab: {model.state.selectedTab}
      // Now we can send events directly to the model
      <button onClick={() => model.events.select({tab: 'third'})}>Select third tab</button>
    </>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"composing-a-model",children:"Composing a model"}),`
`,e.jsxs(n.p,{children:[`Models allow for very powerful composition without changing the UI at all. For example, if we have a
`,e.jsx(n.code,{children:"Disclosure"}),` component, but want to change the operating paradigm to be fully controlled by a parent
component, we can compose a `,e.jsx(n.code,{children:"DisclosureModel"}),` to do so. Normally a disclosure model has it's own
state, but we can override that behavior and make a controlled Disclosure component instead:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const useControlledDisclosureModel = ({opened, onChange, ...config}) => {
  const model = useDisclosureModel(config);

  const state = {
    ...model.state,
    opened,
  };

  const events = {
    ...model.events,
    open(data) {
      onChange(true);
    },
    close(data) {
      onChange(false);
    },
  };

  return {state, events};
};

const ControlledDisclosure = ({buttonText, children, opened, onChange}) => {
  const model = useControlledDisclosureModel({opened, onChange});

  return (
    <Disclosure model={model}>
      <Disclosure.Target>{buttonText}</Disclosure.Target>
      <Disclosure.Content>{children}</Disclosure.Content>
    </Disclosure>
  );
};

const App = () => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ControlledDisclosure buttonText="Toggle" opened={opened} onChange={setOpened}>
      Disclosed Content
    </ControlledDisclosure>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"conclusion",children:"Conclusion"}),`
`,e.jsxs(n.p,{children:[`The compound component API is a powerful, incrementally composable way to create UI. The component
API is the highest level and offers a lot of functionality out of the box. But using models and
behavior hooks allow for creation of new components that share some functionality with other
components. An example of this is tabs and a dropdown menu both use a `,e.jsx(n.code,{children:"CursorModel"}),` and the
`,e.jsx(n.code,{children:"useKeyboardCursor"})," to enable keyboard navigation even though the UI looks very different."]})]})}function x(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{x as default};
