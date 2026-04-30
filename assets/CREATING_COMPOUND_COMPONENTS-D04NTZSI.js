import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as t}from"./index-3YbjYt95.js";import{ae as r}from"./index-Ued3TV6s.js";import"./index-IfJi-UCQ.js";import"./iframe-C_doqmiv.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function s(n){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Creating Compound Components"}),`
`,e.jsx(o.h1,{id:"building-a-compound-component",children:"Building a Compound Component"}),`
`,e.jsxs(o.p,{children:[`Refer to the
`,e.jsx(o.a,{href:"?path=/docs/guides-compound-components--docs",children:"Compound Component documentation"}),`
document to learn about what a compound component is.`]}),`
`,e.jsx(o.p,{children:`This document will go through building a simplified Disclosure component to help solidify the
concepts. We will cover:`}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#non-coordinated-components",children:"Non Coordinated Components"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#models",children:"Models"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#disclosure-component",children:"Container Components"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#disclosuretarget-component",children:"Sub-components"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#model-composition",children:"Model Composition"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#behavior-hooks",children:"Behavior hooks"})}),`
`]}),`
`,e.jsx(o.h2,{id:"non-coordinated-components",children:"Non Coordinated Components"}),`
`,e.jsxs(o.p,{children:[`In most cases you'll create compound components that have a model and share information across subcomponents. However, in the case where information doesn't need to be shared, you can create a non
coordinated component. These components often represent some styled element with no associated role
or behavior and don't rely on state and events such as a `,e.jsx(o.code,{children:"Card"}),", ",e.jsx(o.code,{children:"Flex"})," or ",e.jsx(o.code,{children:"Button"}),` components. Use
`,e.jsx(o.code,{children:"createComponent"})," factory function in these scenarios."]}),`
`,e.jsx(o.h3,{id:"createcomponent",children:e.jsx(o.code,{children:"createComponent"})}),`
`,e.jsxs(o.p,{children:["Use ",e.jsx(o.code,{children:"createComponent"})," when you want to create a rendered element with ",e.jsx(o.em,{children:"no behavior"}),`. This is useful
for elements that you want to use for styling purposes like container elements, or subcomponents
that are simple rendered elements. This utility function will wrap your component in a
`,e.jsx(o.code,{children:"React.ForwardRef"})," and allow you to add subcomponents as well."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const Card = createComponent('div')({
  displayName: 'Card',
  subComponents: {
    Heading: CardHeading, // this is also using createComponent
  },
  Component: ({children, ...elemProps}: CardProps, ref, Element) => {
    return (
      <Box as={Element} {...elemProps} ref={ref}>
        {children}
      </Box>
    );
  },
});
`})}),`
`,e.jsx(o.h2,{id:"models",children:"Models"}),`
`,e.jsx(o.p,{children:"A model is composed of state and events. The shape of the model used by components looks like this:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`type Model = {
  state: Record<string, any>;
  events: Record<string, (data?: any) => void>;
};
`})}),`
`,e.jsxs(o.p,{children:["Our model hook will take a config for ",e.jsx(o.code,{children:"initialVisible"})," and return a model."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useDisclosureModel.ts
type DisclosureConfig = {
  initialVisible?: boolean;
};

export const useDisclosureModel = (config: DisclosureConfig = {}) => {
  const [visible, setVisible] = React.useState(config.initialVisible || false);

  const state = {
    visible,
  };

  const events = {
    show() {
      setVisible(true);
    },
    hide() {
      setVisible(false);
    },
  };

  return {state, events};
};
`})}),`
`,e.jsxs(o.p,{children:["The model has a single ",e.jsx(o.code,{children:"visible"})," state property and ",e.jsx(o.code,{children:"show"})," and ",e.jsx(o.code,{children:"hide"}),` events we can send to the
model. So far using the model might look like this:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const Test = () => {
  const model = useDisclosureModel();

  return (
    <>
      <button
        onClick={() => {
          if (model.state.visible) {
            model.events.hide();
          } else {
            model.events.show();
          }
        }}
      >
        Toggle
      </button>
      <div hidden={model.state.visible ? undefined : true}>Content</div>
    </>
  );
};
`})}),`
`,e.jsxs(o.p,{children:["You can find a working example here: ",e.jsx(o.a,{href:"https://codesandbox.io/s/basic-disclosure-model-5gold",rel:"nofollow",children:"https://codesandbox.io/s/basic-disclosure-model-5gold"})]}),`
`,e.jsx(o.p,{children:"It would be nice to add guards and callbacks to our events. Let's add configuration to our model:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`type DisclosureConfig = {
  initialVisible?: boolean;
  // guards
  shouldShow?(data: void, state: DisclosureState): boolean;
  shouldHide?(data: void, state: DisclosureState): boolean;
  // callbacks
  onShow?(data: void, prevState: DisclosureState): void;
  onHide?(data: void, prevState: DisclosureState): void;
};
`})}),`
`,e.jsx(o.p,{children:"We'll also have to add the runtime of the guards and actions:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const events = {
  show() {
    if (config.shouldShow?.(undefined, state) === false) {
      return;
    }
    setVisible(true);
    config.onShow?.(undefined, state);
  },
  hide() {
    if (config.shouldHide?.(undefined, state) === false) {
      return;
    }
    setVisible(false);
    config.onHide?.(undefined, state);
  },
};
`})}),`
`,e.jsx(o.p,{children:"Now we should be able to configure the model via the guards and do something in the callbacks:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const Test = () => {
  const [should, setShould] = React.useState(true);
  const model = useDisclosureModel({
    shouldShow(data, state) {
      console.log('shouldShow', data, state, should);
      return should;
    },
    shouldHide(data, state) {
      console.log('shouldHide', data, state, should);
      return should;
    },
    onShow(data, prevState) {
      console.log('onShow', data, prevState);
    },
    onHide(data, prevState) {
      console.log('onHide', data, prevState);
    },
  });

  return (
    <>
      <button
        onClick={() => {
          setShould(!should);
        }}
      >
        Toggle "should"
      </button>{' '}
      Buttons below should {should ? '' : 'NOT'} work
      <br />
      <button
        onClick={() => {
          model.events.show();
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          model.events.hide();
        }}
      >
        Hide
      </button>
      <div hidden={model.state.visible ? undefined : true}>Content</div>
      <br />
      Check the console output
    </>
  );
};
`})}),`
`,e.jsxs(o.p,{children:["You can see it in action here: ",e.jsx(o.a,{href:"https://codesandbox.io/s/basic-configurable-disclosure-model-nuteg",rel:"nofollow",children:"https://codesandbox.io/s/basic-configurable-disclosure-model-nuteg"})]}),`
`,e.jsxs(o.p,{children:[`That's a lot of extra boilerplate code for actions and callbacks. Our events don't have any data,
but if they did, we'd have to keep the event + guard and callback data types in sync. We are also
creating the `,e.jsx(o.code,{children:"events"})," object every render. We could use React refs and ",e.jsx(o.code,{children:"React.useMemo"}),` to decrease
extra object creation. Luckily, the common module has the `,e.jsx(o.code,{children:"createModelHook"}),` factory function to help
us reduce boilerplate and reduce the possibility of making mistakes.`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"createModelHook"}),` creates a model and infers the config, state, and events. The callbacks and guard
types will automatically be inferred.`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useDisclosureModel.ts
import {createModelHook} from '@workday/canvas-kit-react/common';

export const useDisclosureModel = createModelHook({
  defaultConfig: {
    initialVisible: false,
  },
})(config => {
  const [visible, setVisible] = React.useState(config.initialVisible || false);

  const state = {
    visible,
  };

  const events = {
    show() {
      setVisible(true);
    },
    hide() {
      setVisible(false);
    },
  };

  return {state, events};
});
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"createModelHook"}),` takes a config object to determine the default config and the required config. We
only need default config. This function returns a function with a `,e.jsx(o.code,{children:"config"}),` object with all config
defaults applied. This is the body of the `,e.jsx(o.code,{children:"useDisclosureModel"}),` hook from earlier. Notice we don't
need to implement guards and callbacks directly inside our event implementations. `,e.jsx(o.code,{children:"createModelHook"}),`
will return an object that has that functionality built right in! Neat!`]}),`
`,e.jsxs(o.p,{children:[`The full working implementation is here:
`,e.jsx(o.a,{href:"https://codesandbox.io/s/configurable-disclosure-model-3y5qh",rel:"nofollow",children:"https://codesandbox.io/s/configurable-disclosure-model-3y5qh"})]}),`
`,e.jsx(o.h2,{id:"components",children:"Components"}),`
`,e.jsx(o.p,{children:`Now that our model is figured out, we can work on the container component and sub-components. An
external API might look something like this:`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Disclosure>
  <Disclosure.Target>Toggle</Disclosure.Target>
  <Disclosure.Content>Content</Disclosure.Content>
</Disclosure>
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"<Disclosure>"}),` is our container component and will be responsible for creating a
`,e.jsx(o.code,{children:"DisclosureModel"})," if a model isn't passed in. The ",e.jsx(o.code,{children:"<Disclosure.Target>"})," and ",e.jsx(o.code,{children:"<Disclosure.Content>"}),`
components are sub-components with specific functionality built into them. The `,e.jsx(o.code,{children:"Target"}),` controls the
visibility of the `,e.jsx(o.code,{children:"Content"}),`. We already created a simplified render function for our model, now
let's create the real components.`]}),`
`,e.jsx(o.h3,{id:"disclosure-component",children:"Disclosure Component"}),`
`,e.jsxs(o.p,{children:["First, let's create the ",e.jsx(o.code,{children:"<Disclosure>"})," container component:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// Disclosure.tsx
import React from 'react';

import {DisclosureTarget} from './DisclosureTarget';
import {DisclosureContent} from './DisclosureContent';
import {useDisclosureModel} from './useDisclosureModel';

type DisclosureConfig = typeof useDisclosureModel.TConfig;

export interface DisclosureProps extends DisclosureConfig {
  children: React.ReactNode;
}

const DisclosureModelContext = useDisclosureModel.Context;

export const Disclosure = ({children, ...config}: DisclosureProps) => {
  const model = useDisclosureModel(config);

  return (
    <DisclosureModelContext.Provider value={model}>{children}</DisclosureModelContext.Provider>
  );
};

Disclosure.Target = DisclosureTarget;
Disclosure.Content = DisclosureContent;
`})}),`
`,e.jsxs(o.p,{children:["We can see that the ",e.jsx(o.code,{children:"DisclosureProps"})," interface extends the config of ",e.jsx(o.code,{children:"useDisclosureModel"}),`.
`,e.jsx(o.code,{children:"createModelHook"})," exposes a ",e.jsx(o.code,{children:"TConfig"}),` property to capture the config type. This allows us to pass
the model config directly to the `,e.jsx(o.code,{children:"<Disclosure>"})," component. A user of this ",e.jsx(o.code,{children:"<Disclosure>"}),` component
might want to register a callback when the `,e.jsx(o.code,{children:"show"})," event is called, for instance."]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"createModelHook"})," creates a React Context that can be used by the ",e.jsx(o.code,{children:"Disclosure"}),` component to
expose the disclosure model to subcomponents without having to pass it via props. This allows our
compound component API to remain clean for consumers of compound components.`]}),`
`,e.jsxs(o.p,{children:[`In this particular compound component, the container component doesn't have a real element.
Accessibility specifications have no `,e.jsx(o.code,{children:"role"})," for this component, so an element is not required."]}),`
`,e.jsx(o.p,{children:"Let's go ahead and finish out our sub-components."}),`
`,e.jsx(o.h3,{id:"disclosuretarget-component",children:"DisclosureTarget Component"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureTarget.tsx
import React from 'react';
import React from 'react';

import {useDisclosureModel} from './useDisclosureModel';

export interface DisclosureTargetProps {
  children: React.ReactNode;
}

export const DisclosureTarget = ({children}: DisclosureTargetProps) => {
  const model = React.useContext(useDisclosureModel.Context);

  return (
    <button
      onClick={() => {
        if (model.state.visible) {
          model.events.hide();
        } else {
          model.events.show();
        }
      }}
    >
      {children}
    </button>
  );
};
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"DisclosureTarget"})," component is in charge of the toggle button and it calls the ",e.jsx(o.code,{children:"show"})," or ",e.jsx(o.code,{children:"hide"}),`
event on the model.`]}),`
`,e.jsx(o.h3,{id:"disclosurecontent-component",children:"DisclosureContent Component"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureContent.tsx
import React from 'react';

import {useDisclosureModel} from './useDisclosureModel';

export interface DisclosureContentProps {
  children: React.ReactNode;
}

export const DisclosureContent = ({children}: DisclosureContentProps) => {
  const model = React.useContext(useDisclosureModel.Context);

  return <div hidden={model.state.visible ? undefined : true}>{children}</div>;
};
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"DisclosureContent"})," component is in charge of the content. It uses the ",e.jsx(o.code,{children:"visible"}),` state value to
set a `,e.jsx(o.code,{children:"hidden"})," attribute."]}),`
`,e.jsxs(o.p,{children:[`The working example can be found here:
`,e.jsx(o.a,{href:"https://codesandbox.io/s/configurable-disclosure-model-components-nvhtv",rel:"nofollow",children:"https://codesandbox.io/s/configurable-disclosure-model-components-nvhtv"})]}),`
`,e.jsxs(o.p,{children:["These components are not fully compliant yet. They do not support ",e.jsx(o.code,{children:"model"}),", ",e.jsx(o.code,{children:"ref"}),", ",e.jsx(o.code,{children:"as"}),`, or extra
props as HTML attributes. Also, we have to use `,e.jsx(o.code,{children:"typeof"})," to create types and a ",e.jsx(o.code,{children:"DisclosureContext"}),`
variable (capitalized for JSX). We also have to worry about the `,e.jsx(o.code,{children:"model"}),` prop. The boilerplate for
supporting all of this gets very complicated. For this reason, `,e.jsx(o.code,{children:"createContainer"}),` and
`,e.jsx(o.code,{children:"createSubcomponent"}),` were created to handle this boilerplate for you out of the box. Both functions
take a default `,e.jsx(o.code,{children:"React.ElementType"})," which can be an element string like ",e.jsx(o.code,{children:"div"})," or ",e.jsx(o.code,{children:"button"}),` or a
component like `,e.jsx(o.code,{children:"Button"}),". It also takes a config object containing the following:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"displayName"}),`: This will be the name of the component when shown by the React Dev tools. By
convention, we make that name be the same as typed in a render function. For example
`,e.jsx(o.code,{children:"Disclosure.Target"})," vs ",e.jsx(o.code,{children:"DisclosureTarget"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"modelHook"}),": This is the model hook used by the compound component (",e.jsx(o.code,{children:"useDisclosureModel"}),` in our
case). This model hook is used to determine proper prop types and seamlessly handle the option
`,e.jsx(o.code,{children:"model"})," prop. For ",e.jsx(o.code,{children:"createContainer"}),", if a ",e.jsx(o.code,{children:"model"}),` is not passed, a model is created and added to
React Context. For `,e.jsx(o.code,{children:"createSubcomponent"}),", if a ",e.jsx(o.code,{children:"model"}),` is not passed, the model comes from React
Context.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"elemPropsHook"}),": This is the elemPropsHook that takes a model and elemProps and returns elemProps."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"subComponents"}),`: For container components. A list of sub components to add to the returned
component. For example, a sub component called `,e.jsx(o.code,{children:"DisclosureTarget"}),` will be added to the export of
`,e.jsx(o.code,{children:"Disclosure"})," so that the user can import only ",e.jsx(o.code,{children:"Disclosure"})," and use ",e.jsx(o.code,{children:"Disclosure.Target"}),`.
`,e.jsx(o.code,{children:"subComponents"}),` is needed for Typescript because static properties cannot be added to predefined
interfaces. `,e.jsx(o.code,{children:"Disclosure.Target = DisclosureTarget"}),` will caused a type error. This property allows
the `,e.jsx(o.code,{children:"createComponent"})," factory function to infer the final interface of the returned component."]}),`
`]}),`
`,e.jsxs(o.p,{children:[`Finally, a generic function is returned that takes the component configuration. The first argument
is `,e.jsx(o.code,{children:"elemProps"})," with ",e.jsx(o.code,{children:"ref"}),` and hook props already merged in with props handed to the component. The
model config props will already be filtered out. We'll worry about `,e.jsx(o.code,{children:"elemPropsHook"}),` later. The second
is an `,e.jsx(o.code,{children:"Element"})," property. ",e.jsx(o.code,{children:"Element"})," is the value passed to the Component's ",e.jsx(o.code,{children:"as"}),` prop. It will
default to the provided element. The last parameter is an optional `,e.jsx(o.code,{children:"model"}),` reference. Ideally, the
model is used in `,e.jsx(o.code,{children:"elemPropsHook"})," and therefore not normally needed inside the render function."]}),`
`,e.jsxs(o.p,{children:["Let's convert the Disclosure example to use the ",e.jsx(o.code,{children:"createContainer"}),` utility function to get this extra
functionality:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// Disclosure.tsx
import React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';

import {DisclosureTarget} from './DisclosureTarget';
import {DisclosureContent} from './DisclosureContent';
import {useDisclosureModel} from './useDisclosureModel';

export interface DisclosureProps {}

export const Disclosure = createContainer()({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
  subComponents: {
    Target: DisclosureTarget,
    Content: DisclosureContent,
  },
})<DisclosureProps>(({children}) => {
  return <>{children}</>;
});
`})}),`
`,e.jsxs(o.p,{children:["Notice we do not need to add ",e.jsx(o.code,{children:"children"})," or ",e.jsx(o.code,{children:"model"})," to our prop definition. ",e.jsx(o.code,{children:"createContainer"}),` is
adding those prop types for us. The `,e.jsx(o.code,{children:"displayName"}),` helps identify the component in React developer
tools. This is only needed by container components. The `,e.jsx(o.code,{children:"subComponents"}),` automatically adds a
`,e.jsx(o.code,{children:"displayName"})," to subcomponents using the property key. For example, our ",e.jsx(o.code,{children:"DisclosureTarget"}),` will have
a `,e.jsx(o.code,{children:"displayName"})," of ",e.jsx(o.code,{children:"Disclosure.Target"}),". You can still provide a ",e.jsx(o.code,{children:"displayName"}),` to override this
naming convention.`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureTarget.tsx
import React from 'react';
import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {useDisclosureModel} from './useDisclosureModel';

export interface DisclosureTargetProps {}

export const DisclosureTarget = createSubcomponent('button')({
  modelHook: useDisclosureModel,
})<DisclosureTargetProps>((elemProps, Element, model) => {
  return (
    <Element
      onClick={() => {
        if (model.state.visible) {
          model.events.hide();
        } else {
          model.events.show();
        }
      }}
      {...elemProps}
    />
  );
});
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureContent.tsx
import React from 'react';
import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {useDisclosureModel} from './useDisclosureModel';

export interface DisclosureContentProps {}

export const DisclosureContent = createSubcomponent('div')({
  modelHook: useDisclosureModel,
})<DisclosureContentProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element hidden={model.state.visible ? undefined : true} {...elemProps}>
      {children}
    </Element>
  );
});
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"as"})," prop is being passed to the second argument in the and we're calling it ",e.jsx(o.code,{children:"Element"}),`. The
variable is passed to JSX as `,e.jsx(o.code,{children:"<Element>"}),". ",e.jsx(o.code,{children:"Element"}),` is capitalized because the JSX parser treats
capitalized elements as variables and lower case elements as strings:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`() => <Div />;
() => <div />;

// transpiled output:
() => React.createElement(Div, null);
() => React.createElement('div', null);
`})}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.typescriptlang.org/play?ssl=2&ssc=14&pln=1&pc=1#code/BQSgBAvAfGA8AiBLAbmA9FAUKSNYBMV0og",rel:"nofollow",children:"Typescript Playground"})}),`
`,e.jsxs(o.p,{children:["In our example, there are no styles associated with ",e.jsx(o.code,{children:"Target"})," or ",e.jsx(o.code,{children:"Content"}),` sub-components, so we
render `,e.jsx(o.code,{children:"as"})," as an element. If we were using Emotion's ",e.jsx(o.code,{children:"styled"})," components, we'd pass the ",e.jsx(o.code,{children:"as"}),` like
`,e.jsx(o.code,{children:"<StyledElement as={Element}>"}),". Using the ",e.jsx(o.code,{children:"as"})," prop this way retains styles while ",e.jsx(o.code,{children:"<Element>"}),` does
not. Use `,e.jsx(o.code,{children:"<Element>"}),` when styling should come from the passed in element and use
`,e.jsx(o.code,{children:"<StyledElement as={Element}>"})," when the component handles styling."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"createContainer"})," and ",e.jsx(o.code,{children:"createSubcomponent"}),` return a component with a type interface that includes
ref forwarding, the `,e.jsx(o.code,{children:"as"})," prop for changing the underlying element, the ",e.jsx(o.code,{children:"model"}),` prop, and additional
attributes/props the element type normally takes.`]}),`
`,e.jsx(o.p,{children:"For example, we can now do the following:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Disclosure>
  <Disclosure.Target ref={targetRef} data-testid="target-button">
    Toggle
  </Disclosure.Target>
  <Disclosure.Content as="section">Content</Disclosure.Content>
</Disclosure>
`})}),`
`,e.jsxs(o.p,{children:["In this example, we added a ",e.jsx(o.code,{children:"data-testid"})," to the Disclosure ",e.jsx(o.code,{children:"Target"}),` element and rendered the
`,e.jsx(o.code,{children:"Content"})," element as a ",e.jsx(o.code,{children:"section"})," tag."]}),`
`,e.jsxs(o.p,{children:[`The full code can be found here:
`,e.jsx(o.a,{href:"https://codesandbox.io/s/configurable-disclosure-model-components-utility-pk9s6",rel:"nofollow",children:"https://codesandbox.io/s/configurable-disclosure-model-components-utility-pk9s6"})]}),`
`,e.jsx(o.h2,{id:"model-composition",children:"Model Composition"}),`
`,e.jsxs(o.p,{children:["Our example isn't fully accessible yet. The Disclosure target needs a ",e.jsx(o.code,{children:"aria-controls"}),` attribute to
tie the target and content in the accessibility tree. This is done by the use of id references
(string IDs that starts with a letter). We could add an `,e.jsx(o.code,{children:"id"}),` to our model, but it is extremely
common so let's make a new model and compose from it instead. We'll later use this model in a
reusable behavioral hook.`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useIDModel.ts
import {Model, useUniqueId} from '@workday/canvas-kit-react/common';

export type IDState = {
  id: string;
};

export type IDEvents = {};

export type IDModel = Model<IDState, IDEvents>;

export type IDConfig = {
  id?: string;
};

export const useIDModel = (config: IDConfig = {}) => {
  const id = useUniqueId(config.id);

  const state = {
    id,
  };

  const events = {};

  return {state, events};
};
`})}),`
`,e.jsxs(o.p,{children:["This model only provides an ",e.jsx(o.code,{children:"id"}),` since that's all that is needed for id reference functionality.
Also later we'll add behavioral hook that will require this model.`]}),`
`,e.jsxs(o.p,{children:["Let's update the ",e.jsx(o.code,{children:"DisclosureModel"})," to compose the ",e.jsx(o.code,{children:"IDModel"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useDisclosureModel.ts
import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';

import {useIDModel} from './useIDModel';

export const useDisclosureModel = createModelHook({
  defaultConfig: {
    ...useIDModel.defaultConfig,
    initialVisible: false,
  },
})(config => {
  const [visible, setVisible] = React.useState(config.initialVisible || false);
  const idModel = useIDModel(config);

  const state = {
    ...idModel.state,
    visible,
  };

  const events = {
    ...idModel.events,
    show() {
      setVisible(true);
    },
    hide() {
      setVisible(false);
    },
  };

  return {state, events};
});
`})}),`
`,e.jsxs(o.p,{children:["We can now add ",e.jsx(o.code,{children:"aria-controls"})," to ",e.jsx(o.code,{children:"DisclosureTarget"})," and ",e.jsx(o.code,{children:"id"})," to ",e.jsx(o.code,{children:"DisclosureContent"}),`. We'll also add
`,e.jsx(o.code,{children:"aria-expanded"})," to ",e.jsx(o.code,{children:"DisclosureTarget"})," to finish off the accessibility specifications:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureTarget.tsx

// ...

return (
  <Element
    aria-controls={model.state.id}
    aria-expanded={model.state.visible}
    onClick={() => {
      if (model.state.visible) {
        model.events.hide();
      } else {
        model.events.show();
      }
    }}
    {...elemProps}
  >
    {children}
  </Element>
);

// ...
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureContent.tsx

// ...

return (
  <Element id={model.state.id} hidden={model.state.visible ? undefined : true} {...elemProps}>
    {children}
  </Element>
);

// ...
`})}),`
`,e.jsxs(o.p,{children:["Here's the working example now: ",e.jsx(o.a,{href:"https://codesandbox.io/s/disclosure-composable-model-9shjn",rel:"nofollow",children:"https://codesandbox.io/s/disclosure-composable-model-9shjn"})]}),`
`,e.jsx(o.p,{children:`At this point, we have an accessible disclosure compound component that composes 2 models. But the
disclosure pattern is more than just the component level. For example, a tooltip uses the disclosure
pattern as well. Let's extract out some behaviors into hooks.`}),`
`,e.jsx(o.h2,{id:"behavior-hooks",children:"Behavior Hooks"}),`
`,e.jsxs(o.p,{children:[`Behavior hooks allow us to reuse pieces of functionality in difference components. For example, the
`,e.jsx(o.code,{children:"Tabs"}),` component utilizes a cursor hook for keyboard navigation even though the UI of tabs and the
UI of a dropdown menu look very different!`]}),`
`,e.jsxs(o.p,{children:["We'll build a behavior hook for the ",e.jsx(o.code,{children:"DisclosureTarget"})," component:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useExpandableControls.ts
import {useDisclosureModel} from './useDisclosureModel';

export const useExpandableControls = (
  {state}: ReturnType<typeof useDisclosureModel>,
  elemProps = {},
  ref?: React.Ref<any>
) => {
  return {
    'aria-controls': state.id,
    'aria-expanded': state.visible,
    ...elemProps,
  };
};
`})}),`
`,e.jsxs(o.p,{children:[`At this point, we should reiterate that compound components should always merge passed in props
properly. If the prop is a primitive prop, it should `,e.jsx(o.em,{children:"override"}),` the props of the component. If the
prop is a callback function like `,e.jsx(o.code,{children:"onClick"}),", the ",e.jsx(o.code,{children:"style"})," tag or the ",e.jsx(o.code,{children:"css"}),` prop, they should be merged
properly. Luckily, the `,e.jsx(o.code,{children:"common"})," package has a ",e.jsx(o.code,{children:"mergeProps"}),` utility function that takes care of this
for us. Hooks can use an optional 3rd parameter that is a `,e.jsx(o.code,{children:"ref"}),` if they need to fork the ref. We
won't get into that here, but it is useful and works with `,e.jsx(o.code,{children:"composeHooks"}),` that is available via the
`,e.jsx(o.code,{children:"common"})," module. Let's refactor the above to use that function:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useExpandableControls.ts
import {mergeProps} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from './useDisclosureModel';

export const useExpandableControls = (
  {state}: ReturnType<typeof useDisclosureModel>,
  elemProps = {},
  ref?: React.Ref<any>
) => {
  return mergeProps(
    {
      'aria-controls': state.id,
      'aria-expanded': state.visible,
    },
    elemProps
  );
};
`})}),`
`,e.jsxs(o.p,{children:["Even though the ",e.jsx(o.code,{children:"useExpandableControls"}),` did not use any special props that need special merging, it
is a good habit to use `,e.jsx(o.code,{children:"mergeProps"})," anytime you define props."]}),`
`,e.jsxs(o.p,{children:[`This is still a lot of boilerplate. We need the return type of the model hook, we need to specify
that our hook can optionally accept `,e.jsx(o.code,{children:"elemProps"})," and a ",e.jsx(o.code,{children:"ref"}),", and we need to call ",e.jsx(o.code,{children:"mergeProps"}),`.
`,e.jsx(o.code,{children:"createElemPropsHook"})," helps with a lot of this boilerplate:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from './useDisclosureModel';

export const useExpandableControls = createElemPropsHook(useDisclosureModel)(({state}) => {
  return {
    'aria-controls': state.id,
    'aria-expanded': state.visible,
  };
});
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"createElemPropsHook"}),` takes the model hook and an elem props hook body as arguments. The hook
function body doesn't need to call `,e.jsx(o.code,{children:"mergeProps"})," since ",e.jsx(o.code,{children:"createElemPropsHook"}),` takes care of that for
us. Our logic can focus only on the props we need to add to an element!`]}),`
`,e.jsxs(o.p,{children:[`Now we have a reusable elemProps hook that can be composed into other hooks or used on its own.
"expandable controls" could be used on a select component, a popup component, or any other type of
disclosure target component. We don't add the `,e.jsx(o.code,{children:"onClick"}),` because how the disclosure is revealed
depends on the disclosure target type. In a `,e.jsx(o.code,{children:"Select"}),` component, that could be by clicking on the
target, or using the down arrow. On a `,e.jsx(o.code,{children:"Tooltip"}),` component, it could be revealed by a mouse hover or
focus event. Lets create a `,e.jsx(o.code,{children:"useDisclosureTarget"})," elemProps hook that merges in an ",e.jsx(o.code,{children:"onClick"}),` with
`,e.jsx(o.code,{children:"useExpandableControls"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useDisclosureTarget.ts
import {createElemPropsHook, mergeProps} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from './useDisclosureModel';
import {useExpandableControls} from './useExpandableControls';

export const useDisclosureTarget = createElemPropsHook(useDisclosureModel)(
  (model, ref, elemProps) => {
    const props = useExpandableControls(model, elemProps, ref);

    return mergeProps(
      {
        onClick() {
          if (model.state.visible) {
            model.events.hide();
          } else {
            model.events.show();
          }
        },
      },
      props
    );
  }
);
`})}),`
`,e.jsxs(o.p,{children:["Notice we still need to use ",e.jsx(o.code,{children:"mergeProps"}),` to compose the behavior of our two elemProps hooks?
`,e.jsx(o.code,{children:"composeHooks"})," was created to handle this common composition use case. ",e.jsx(o.code,{children:"composeHooks"}),` takes two or
more elemProps hooks and returns a new hook with all props merged for us:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useDisclosureTarget.ts
import {createElemPropsHook, composeHooks} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from './useDisclosureModel';
import {useExpandableControls} from './useExpandableControls';

export const useDisclosureTarget = composeHooks(
  createElemPropsHook(useDisclosureModel)(model => {
    return {
      onClick() {
        if (model.state.visible) {
          model.events.hide();
        } else {
          model.events.show();
        }
      },
    };
  }),
  useExpandableControls
);
`})}),`
`,e.jsxs(o.p,{children:["We don't even need to declare ",e.jsx(o.code,{children:"elemProps"})," or ",e.jsx(o.code,{children:"ref"})," parameters if we don't use them!"]}),`
`,e.jsxs(o.p,{children:["Now we can use the behavior hook in the ",e.jsx(o.code,{children:"DiscloseTarget"})," component:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureTarget.tsx
import React from 'react';
import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {useDisclosureModel} from './useDisclosureModel';
import {useDisclosureTarget} from './useDisclosureTarget';

export interface DisclosureTargetProps {}

export const DisclosureTarget = createSubcomponent('button')({
  modelHook: useDisclosureModel,
})<DisclosureTargetProps>((elemProps, Element, model) => {
  const props = useDisclosureTarget(model, elemProps);
  return <Element {...props} />;
});
`})}),`
`,e.jsxs(o.p,{children:["Note: We should never use ",e.jsx(o.code,{children:"createElemPropsHook"})," or ",e.jsx(o.code,{children:"composeHooks"}),` inside a render function as that
would be slower. Always hoist the hook definition outside a render function.`]}),`
`,e.jsxs(o.p,{children:["It is very common to use an elemProps hook with a compound component, so ",e.jsx(o.code,{children:"createContainer"}),` and
`,e.jsx(o.code,{children:"createSubcomponent"})," both take an ",e.jsx(o.code,{children:"elemPropsHook"}),` configuration option. This way we don't have to
worry about the `,e.jsx(o.code,{children:"model"})," or using ",e.jsx(o.code,{children:"mergeProps"})," in our component definition. Here's the final code."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureTarget.tsx
import React from 'react';
import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {useDisclosureModel} from './useDisclosureModel';
import {useDisclosureTarget} from './useDisclosureTarget';

export interface DisclosureTargetProps {}

export const DisclosureTarget = createSubcomponent('button')({
  modelHook: useDisclosureModel,
  elemPropsHook: useDisclosureTarget,
})<DisclosureTargetProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});
`})}),`
`,e.jsxs(o.p,{children:["We'll also make a ",e.jsx(o.code,{children:"useDisclosureContent"})," behavior hook for the ",e.jsx(o.code,{children:"hidden"}),` attribute on the
`,e.jsx(o.code,{children:"Disclosure.Content"})," element:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useDisclosureContent.ts
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from './useDisclosureModel';

export const useDisclosureContent = createElemPropsHook(useDisclosureModel)(model => {
  return {
    id: model.state.id,
    hidden: model.state.visible ? undefined : true,
  };
});
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Disclosure.Content"})," subcomponent can now be updated to use this hook:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// DisclosureContent.tsx
import React from 'react';
import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {useDisclosureModel} from './useDisclosureModel';
import {useDisclosureContent} from './useDisclosureContent';

export interface DisclosureContentProps {}

export const DisclosureContent = createSubcomponent('div')({
  modelHook: useDisclosureModel,
  elemPropsHook: useDisclosureContent,
})<DisclosureContentProps>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
`})}),`
`,e.jsxs(o.p,{children:[`The full code can be found here:
`,e.jsx(o.a,{href:"https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-iwzl8",rel:"nofollow",children:"https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-iwzl8"})]}),`
`,e.jsx(o.h2,{id:"composing-compound-components",children:"Composing Compound Components"}),`
`,e.jsx(o.p,{children:`Having composable models, behaviors, and components means we can reuse parts of other compound
components. For example, let's make a simple tooltip component that has a target and content,
similar to the disclosure component, but behaves differently. A tooltip shows and hides based on
mouse and focus events.`}),`
`,e.jsx(o.p,{children:"Here's a tooltip model composing the disclosure model:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// useTooltipModel.ts
import {createModelHook} from '@workday/canvas-kit-react/common';

import {useDisclosureModel} from './useDisclosureModel';

const {
  initialVisible, // tooltips are never initially visible, so remove the option
  ...defaultConfig
} = useDisclosureModel.defaultConfig;

export const useTooltipModel = createModelHook({
  defaultConfig,
  requiredConfig: useDisclosureModel.requiredConfig,
})(config => {
  return useDisclosureModel(config);
});
`})}),`
`,e.jsxs(o.p,{children:[`Not much interesting is happening here. We're not adding additional state or events, but we're
removing the `,e.jsx(o.code,{children:"initialVisible"})," config option from the model."]}),`
`,e.jsx(o.p,{children:"The final Tooltip compound component API will look something like this when we're done:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Tooltip>
  <Tooltip.Target>Target</Tooltip.Target>
  <Tooltip.Content>The content of the Tooltip</Tooltip>
</Tooltip>
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Tooltip"})," container component looks almost exactly like the Disclosure component:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// Tooltip.tsx
import React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';

import {useTooltipModel} from './useTooltipModel';
import {TooltipTarget} from './TooltipTarget';
import {TooltipContent} from './TooltipContent';

export interface TooltipProps {
  children?: React.ReactNode;
}

export const Tooltip = createContainer()({
  displayName: 'Tooltip',
  modelHook: useTooltipModel,
  subComponents: {
    Target: TooltipTarget,
    Content: TooltipContent,
  },
})(({children}: TooltipProps) => {
  return <>{children}</>;
});
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Tooltip.Target"})," component is similar to the ",e.jsx(o.code,{children:"DisclosureTarget"}),` component, but has different
behavior. The tooltip triggers on different events. Here's the code:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// TooltipTarget.tsx
import React from 'react';
import {createSubcomponent, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useTooltipModel} from './useTooltipModel';

export interface TooltipTargetProps {
  children: React.ReactNode;
}

export const useTooltipTarget = createElemPropsHook(useTooltipModel)(({state, events}) => {
  return {
    onFocus(event: any) {
      events.show();
    },
    onBlur() {
      events.hide();
    },
    onMouseEnter() {
      events.show();
    },
    onMouseLeave() {
      events.hide();
    },
    'aria-describedby': state.id,
  };
});

export const TooltipTarget = createSubcomponent('button')({
  displayName: 'Tooltip.Target',
  modelHook: useTooltipModel,
  elemPropsHook: useTooltipTarget,
})<TooltipTargetProps>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Tooltip.Target"})," component also uses the ",e.jsx(o.code,{children:"aria-described"})," for accessibility. The ",e.jsx(o.code,{children:"state.id"}),`
comes from the `,e.jsx(o.code,{children:"IDModel"}),"."]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Tooltip.Content"})," component is similar to the ",e.jsx(o.code,{children:"Disclosure.Content"}),` component, except that it
uses a ReactDOM portal to ensure the content appears on top of other content. This example doesn't
include a positional library and instead hard-codes positional values. Notice we can reuse our
`,e.jsx(o.code,{children:"useDisclosureContent"})," behavior hook in this component!"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from 'react';
import ReactDOM from 'react-dom';
import {
  createSubcomponent,
  createElemPropsHook,
  composeHooks,
} from '@workday/canvas-kit-react/common';

import {useDisclosureContent} from './useDisclosureContent';
import {useTooltipModel} from './useTooltipModel';

export interface TooltipContentProps {}

const useTooltipContent = composeHooks(
  createElemPropsHook(useTooltipModel)(model => {
    return {
      style: {position: 'absolute', left: 80, top: 10},
    };
  }),
  useDisclosureContent
);

export const TooltipContent = createSubcomponent('div')({
  modelHook: useTooltipModel,
  elemPropsHook: useTooltipContent,
})<TooltipContentProps>(({children, ...elemProps}, Element, model) => {
  return ReactDOM.createPortal(
    model.state.id ? <Element {...elemProps}>{children}</Element> : null,
    document.body
  );
});
`})}),`
`,e.jsxs(o.p,{children:["The tooltip target could be anything. By default it is a ",e.jsx(o.code,{children:"button"}),` element since tooltips need to
receive focus. What if we want a tooltip around the disclosure target element without introducing
another `,e.jsx(o.code,{children:"button"})," element? This is where the ",e.jsx(o.code,{children:"as"})," prop comes in handy:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Disclosure>
  <Tooltip>
    <Tooltip.Target as={Disclosure.Target}>Toggle</Tooltip.Target>
    <Tooltip.Content>Tooltip!</Tooltip.Content>
  </Tooltip>
  <Disclosure.Content>Content</Disclosure.Content>
</Disclosure>
`})}),`
`,e.jsxs(o.p,{children:["In the example, we can see the ",e.jsx(o.code,{children:"Tooltip.Target"})," element will be the ",e.jsx(o.code,{children:"Disclosure.Target"})," element."]}),`
`,e.jsxs(o.p,{children:[`Here's the working example:
`,e.jsx(o.a,{href:"https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-tooltip-df7ht",rel:"nofollow",children:"https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-tooltip-df7ht"})]}),`
`,e.jsx(o.h2,{id:"wrap-it-up",children:"Wrap it up"}),`
`,e.jsx(o.p,{children:`Hopefully, by now, you have a much better idea how compound components work internally and how to
create your own. Model composition is a powerful way to create more complex models out of smaller
parts. Compound components can be composed to make much more complicated UIs.`}),`
`,e.jsx(o.p,{children:`This API seems more verbose, but it is extremely flexible. The nice thing about a compound component
API is we can create more terse components out of them. We expect applications to create wrapper
components the have a more tightly controlled interface. For example, if we wanted an expandable
component with a tooltip baked in, we could create a component API like this:`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Expandable tooltipText="Tooltip!" targetText="Toggle">
  Content
</Expandable>
`})}),`
`,e.jsxs(o.p,{children:["We'll make an ",e.jsx(o.code,{children:"Expandable"}),` component that abstracts the compound component API for re-use in
applications (expandable components are so in these days!):`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// Expandable.tsx
import React from 'react';

import {Disclosure} from './Disclosure';
import {Tooltip} from './Tooltip';

export interface ExpandableProps {
  tooltipText: string;
  targetText: string;
  children: React.ReactNode;
}

export const Expandable = ({tooltipText, targetText, children}: ExpandableProps) => {
  return (
    <Disclosure>
      <Tooltip>
        <Tooltip.Target as={Disclosure.Target}>{targetText}</Tooltip.Target>
        <Tooltip.Content>{tooltipText}</Tooltip.Content>
      </Tooltip>
      <Disclosure.Content>{children}</Disclosure.Content>
    </Disclosure>
  );
};
`})}),`
`,e.jsx(o.p,{children:`This configuration API has lost the flexibility of the compound component API, but it is simpler to
use. Applications can create these APIs for internal components since they know more about the
context that a component will live in. Things like how to do translations, if there's any additional
attributes to add (test ids or analytics metadata).`}),`
`,e.jsxs(o.p,{children:[`The full working code can be found here:
`,e.jsx(o.a,{href:"https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-tooltip-wrapped-2u8mk",rel:"nofollow",children:"https://codesandbox.io/s/disclosure-composable-model-behavior-hooks-tooltip-wrapped-2u8mk"})]})]})}function f(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{f as default};
