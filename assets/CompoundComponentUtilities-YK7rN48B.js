import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as g}from"./index-3YbjYt95.js";import{ae as B}from"./index-DBq-bKNH.js";import{E as d}from"./union-Be9rDMMk.js";import{e as a}from"./index-IfJi-UCQ.js";import{g as l,b as f,a as v,c as C}from"./components-Brs-n4xu.js";import{c}from"./models-CHTjB2ql.js";import{u as m}from"./useUniqueId-DC-hMIDg.js";import{P as k}from"./PrimaryButton-CtX3gzYB.js";import{B as j}from"./Box-BgCI5sd_.js";import{c as V}from"./cs-rfTTo7Bg.js";import{p as I,c as R,d as _}from"./index-5dfzm_kn.js";import{H as N}from"./TypeLevelComponents-CIBGvpAI.js";import"./iframe-DXg0DlW2.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DhrNLeMh.js";import"./Svg-CETa_jpJ.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-Cc53Z2IO.js";import"./Text-Wbz4nGCV.js";import"./mergeStyles-O1wR0AIL.js";import"./flex-DYfwNNEA.js";import"./grid-B_3TtziO.js";import"./Card-Ba6PTVVO.js";import"./ExternalHyperlink-xxhmXAY-.js";import"./Hyperlink-BRpfifrY.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-IhTOZCNo.js";import"./BaseButton-vzANskSl.js";import"./Button-bpU0n2vS.js";import"./lerna-OmgWyvc9.js";import"./CanvasProvider-D8vzr9bq.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-D7xImHEM.js";import"./useTooltip-XhI66PCE.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useCloseOnEscape-BKEK7bto.js";import"./Popper-Dy7hTIGp.js";import"./TertiaryButton-CBwNFKa9.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-D7SbIGKk.js";import"./ColorInput-_j3kG8ND.js";import"./check-small-C7Z-gSGs.js";import"./index-N3xz2Kqy.js";import"./TextInput-CoIjA8o7.js";import"./types-DXdjelYI.js";import"./FormField-__V0Kwkv.js";import"./check-Bvurkvei.js";import"./Expandable-xNBVXfd8.js";import"./Avatar-pqpnZil-.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BxqBLAN3.js";import"./Popup-ApgKQGjm.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DEBYrGeR.js";import"./useInitialFocus-D0VoJzQ7.js";import"./useReturnFocus-DLPQ2oar.js";import"./useFocusRedirect-CEfsHOpw.js";import"./Breadcrumbs-7XlqmwEo.js";import"./useOverflowListTarget-DlHX0lzH.js";import"./useListItemSelect-yxjUQCSx.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DtctES1o.js";import"./OverflowTooltip-nF9pOVYl.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-DpDv5-ef.js";import"./Table-1kiKUF8g.js";import"./useConstant-CUZppmaV.js";const O=c({defaultConfig:{id:"",initialVisibility:"hidden"}})(t=>{const e=m(t.id),[i,o]=a.useState(t.initialVisibility);return{state:{id:e,visibility:i},events:{show(s){o("visible")},hide(s){o("hidden")}}}}),q=l()({displayName:"Disclosure",modelHook:O})(({children:t,...e},i,o)=>n.jsx("button",{onClick:()=>o.state.visibility==="visible"?o.events.hide():o.events.show(),...e,children:o.state.visibility==="visible"?"close":"open"})),P=()=>n.jsx(q,{});P.__RAW__=`import React from 'react';

import {createContainer, createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export type Visibility = 'hidden' | 'visible';

// First we define a model using out createModelHook
const useDisclosureModel = createModelHook({
  // This becomes the default values on the model
  defaultConfig: {
    /** ID reference of the list. Children ids can be derived from this id */
    id: '',
    /**
     * The initial visibility of the disclosed content. The \`as Visibility\` overrides the inferred type.
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
     * their needs, so if you need to consistently determine "not hidden", use \`visibility !==
     * 'hidden'\` rather than \`visibility === 'visible'\`
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
`;const U=c({defaultConfig:{id:"",initialVisibility:"hidden"}})(t=>{const e=m(t.id),[i,o]=a.useState(t.initialVisibility||"hidden");return{state:{id:e,visibility:i},events:{show(s){o("visible")},hide(s){o("hidden")}}}}),F=l("button")({displayName:"Disclosure",modelHook:U,subComponents:{}})(({children:t,...e},i,o)=>n.jsx(i,{onClick:()=>o.state.visibility==="visible"?o.events.hide():o.events.show(),...e,children:o.state.visibility==="visible"?"close":"open"})),D=()=>n.jsx(F,{});D.__RAW__=`import React from 'react';

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
     * their needs, so if you need to consistently determine "not hidden", use \`visibility !==
     * 'hidden'\` rather than \`visibility === 'visible'\`
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
`;const w=c({defaultConfig:{id:"",initialVisibility:"hidden"}})(t=>{const e=m(t.id),[i,o]=a.useState(t.initialVisibility||"hidden");return{state:{id:e,visibility:i},events:{show(s){o("visible")},hide(s){o("hidden")}}}}),H=f("button")({modelHook:w})(({children:t,...e},i,o)=>n.jsx(k,{onClick:r=>{o.state.visibility!=="hidden"?o.events.hide(r):o.events.show(r)},as:i,...e,children:o.state.visibility==="visible"?"Close":"Open"})),b=l()({displayName:"Disclosure",modelHook:w,subComponents:{Target:H}})(({children:t},e,i)=>n.jsx(n.Fragment,{children:t})),M=()=>n.jsx(b,{children:n.jsx(b.Target,{})});H.__RAW__=`import React from 'react';

import {PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {
  createContainer,
  createModelHook,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

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
     * their needs, so if you need to consistently determine "not hidden", use \`visibility !==
     * 'hidden'\` rather than \`visibility === 'visible'\`
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
`;M.__RAW__=`import React from 'react';

import {PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {
  createContainer,
  createModelHook,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

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
     * their needs, so if you need to consistently determine "not hidden", use \`visibility !==
     * 'hidden'\` rather than \`visibility === 'visible'\`
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
`;const y=c({defaultConfig:{id:"",initialVisibility:"hidden"}})(t=>{const e=m(t.id),[i,o]=a.useState(t.initialVisibility||"hidden");return{state:{id:e,visibility:i},events:{show(s){o("visible")},hide(s){o("hidden")}}}}),A=v()(({state:t,events:e})=>({onClick:i=>{t.visibility!=="hidden"?e.hide(i):e.show(i)}})),z=f("button")({modelHook:y,elemPropsHook:A})(({children:t,...e},i,o)=>n.jsx(k,{as:i,...e,children:t})),W=v()(({state:t})=>({style:t.visibility!=="hidden"?{}:{display:"none"},id:t.id})),$=f("div")({modelHook:y,elemPropsHook:W})(({children:t,...e},i)=>n.jsx(j,{as:i,...e,children:t})),u=l()({displayName:"Disclosure",modelHook:y,subComponents:{Target:z,Content:$}})(({children:t},e,i)=>n.jsx(n.Fragment,{children:t})),T=()=>n.jsxs(u,{children:[n.jsx(u.Target,{children:"Open"}),n.jsx(u.Content,{children:"Content"})]});T.__RAW__=`import React from 'react';

import {PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {
  createContainer,
  createElemPropsHook,
  createModelHook,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
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
     * their needs, so if you need to consistently determine "not hidden", use \`visibility !==
     * 'hidden'\` rather than \`visibility === 'visible'\`
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
`;const E=C("h2")({displayName:"CardHeading",Component:({children:t,...e},i,o)=>n.jsx(N,{size:"medium",as:o,ref:i,...e,children:t})}),p=C("div")({displayName:"Card",subComponents:{Heading:E},Component:({children:t,...e},i,o)=>n.jsx(j,{as:o,...e,ref:i,children:t})}),L=V({boxShadow:_[2],border:`1px solid ${R.border.default}`,padding:I.sm}),S=()=>n.jsx(p,{cs:L,as:"section",children:n.jsx(p.Heading,{children:"Card Heading"})});E.__RAW__=`import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

const cardStyles = createStyles({
  boxShadow: system.depth[2],
  border: \`1px solid \${system.color.border.default}\`,
  padding: system.padding.sm,
});

export const CreateComponent = () => {
  return (
    <Card cs={cardStyles} as="section">
      <Card.Heading>Card Heading</Card.Heading>
    </Card>
  );
};
`;p.__RAW__=`import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

const cardStyles = createStyles({
  boxShadow: system.depth[2],
  border: \`1px solid \${system.color.border.default}\`,
  padding: system.padding.sm,
});

export const CreateComponent = () => {
  return (
    <Card cs={cardStyles} as="section">
      <Card.Heading>Card Heading</Card.Heading>
    </Card>
  );
};
`;S.__RAW__=`import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

const cardStyles = createStyles({
  boxShadow: system.depth[2],
  border: \`1px solid \${system.color.border.default}\`,
  padding: system.padding.sm,
});

export const CreateComponent = () => {
  return (
    <Card cs={cardStyles} as="section">
      <Card.Heading>Card Heading</Card.Heading>
    </Card>
  );
};
`;function x(t){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...g(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(B,{title:"Hooks and Utilities/Compound Components"}),`
`,n.jsx(e.h1,{id:"compound-component-utilities",children:"Compound Component Utilities"}),`
`,n.jsxs(e.p,{children:[`The following utilities are used to create and compose
`,n.jsx(e.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound components"}),"."]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,n.jsx(e.h1,{id:"createcomponent",children:"createComponent"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createComponent"}),` is a factory function that creates components to be exported. It enforces React
`,n.jsx(e.code,{children:"ref"})," forwarding, ",n.jsx(e.code,{children:"as"})," prop, ",n.jsx(e.code,{children:"displayName"}),", ",n.jsx(e.code,{children:"subComponents"}),`, and handles proper typing without much
boiler plate. The return type is `,n.jsx(e.code,{children:"Component<element, Props>"}),` which looks like
`,n.jsx(e.code,{children:"Component<'div', Props>"}),` which is a clean interface that tells you the default element that is
used.`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createComponent"}),` is great to use if you want to create quick compound components or you need to set
up components with `,n.jsx(e.code,{children:"ref"})," forwarding."]}),`
`,n.jsx(d,{code:S}),`
`,n.jsx(e.h1,{id:"createmodelhook",children:"createModelHook"}),`
`,n.jsxs(e.p,{children:[`When building compound components that might have some internal state or events, you typically want
a model. A model allows a component to share information. This is where `,n.jsx(e.code,{children:"createModelHook"}),` comes in
handy.`]}),`
`,n.jsx(e.h2,{id:"usage-1",children:"Usage"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createModelHook"})," is a factory function that takes in ",n.jsx(e.code,{children:"defaultConfig"})," and ",n.jsx(e.code,{children:"requiredConfig"}),` and
returns a function which is your model hook.`]}),`
`,n.jsxs(e.p,{children:["Let's make a simple disclosure component as an example. This is how we'd use ",n.jsx(e.code,{children:"createModelHook"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createModelHook} from '@workday/canvas-kit-react/common';
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
`})}),`
`,n.jsx(d,{code:P}),`
`,n.jsxs(e.p,{children:["Typescript will infer all config from the returned ",n.jsx(e.code,{children:"state"}),", ",n.jsx(e.code,{children:"events"}),", ",n.jsx(e.code,{children:"defaultConfig"}),` and the
`,n.jsx(e.code,{children:"requiredConfig"}),"."]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsxs(e.p,{children:["When ",n.jsx(e.code,{children:"useDisclosureModel"}),`is created, five properties are attached to it for composability:
`,n.jsx(e.code,{children:"defaultConfig"}),", ",n.jsx(e.code,{children:"requiredConfig"}),", ",n.jsx(e.code,{children:"TConfig"}),", ",n.jsx(e.code,{children:"getElemProps"}),", ",n.jsx(e.code,{children:"Context"}),"."]}),`
`,n.jsx(e.h3,{id:"defaultconfig",children:"defaultConfig"}),`
`,n.jsxs(e.p,{children:["All config that has default values. Optional values also go here, but are represented as ",n.jsx(e.code,{children:"undefined"}),`
as part of the union type `,n.jsx(e.code,{children:"(undefined as undefined | string)"}),`. Using this can be useful when
creating other models that share similar config.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createModelHook} from '@workday/canvas-kit-react/common';
export const useExpandableModel = createModelHook({
  defaultConfig: {
    // extend the default config from the \`useDisclosureModel\`
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
`})}),`
`,n.jsx(e.h3,{id:"requiredconfig",children:"requiredConfig"}),`
`,n.jsx(e.p,{children:`All config that is required by the model. Most config should go into default config with thoughtful
defaults.`}),`
`,n.jsx(e.h3,{id:"contextoverride",children:"contextOverride"}),`
`,n.jsxs(e.p,{children:[`The React context used by components to share a model between a container component and
subcomponents. It is used internally by `,n.jsx(e.code,{children:"createContainer"})," and ",n.jsx(e.code,{children:"createSubcomponents"}),` and should not
need to be referenced directly.`]}),`
`,n.jsxs(e.p,{children:["Each subcomponent is tied to a model hook's context. For example, ",n.jsx(e.code,{children:"useModalModel"}),` extends
`,n.jsx(e.code,{children:"usePopupModel"}),", but ",n.jsx(e.code,{children:"Modal"})," components point directly to ",n.jsx(e.code,{children:"Popup"}),` components. The
`,n.jsx(e.code,{children:"contextOverride: usePopupModel.Context"})," forces ",n.jsx(e.code,{children:"useModalModel"}),`'s internal context to point to the
same context reference as the one used in `,n.jsx(e.code,{children:"usePopupModel"}),`. This allows the model returned by
`,n.jsx(e.code,{children:"useModalModel"})," to be compatible with both ",n.jsx(e.code,{children:"Modal"})," subcomponents and ",n.jsx(e.code,{children:"Popup"}),` subcomponents. If you
do not override context, you must create a new container and subcomponent for every component using
the newly created model hook.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createModelHook} from '@workday/canvas-kit-react/common';
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
`})}),`
`,n.jsx(e.h3,{id:"tconfig",children:"TConfig"}),`
`,n.jsxs(e.p,{children:["TConfig gives you the typings that are defined in ",n.jsx(e.code,{children:"defaultConfig"})," and ",n.jsx(e.code,{children:"requiredConfig"}),` instead of
having to redfine those types. This is useful when building a model that share similar config and
you want to merge them while getting the correct typings.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createModelHook} from '@workday/canvas-kit-react/common';
export const useActionBarModel = createModelHook({
  defaultConfig: {
    // We define the config and use the typings that come from useMenuModel for when an action bar renders a menu
    menuConfig: {} as typeof useMenuModel.TConfig,
  },
  requiredConfig: useOverflowListModel.requiredConfig,
})(config => {
  // define your internal state and events
});
`})}),`
`,n.jsx(e.h3,{id:"getelemprops",children:"getElemProps"}),`
`,n.jsxs(e.p,{children:["This function will separate all ",n.jsx(e.code,{children:"elemProps"}),` or default attributes from an element from the model
config props. If a prop is both a `,n.jsx(e.code,{children:"config"})," ",n.jsx(e.em,{children:"and"})," an ",n.jsx(e.code,{children:"elemProp"}),`, you can manually apply the prop
again. `,n.jsx(e.code,{children:"elemProps"})," is called internally automatically by ",n.jsx(e.code,{children:"createContainer"}),`. If you use
`,n.jsx(e.code,{children:"createContainer"}),", you shouldn't need to use this function."]}),`
`,n.jsxs(e.p,{children:["By default ",n.jsx(e.code,{children:"createModelHook"})," does this for you and spreads the ",n.jsx(e.code,{children:"elemProps"})," onto the component."]}),`
`,n.jsx(e.h1,{id:"createcontainer-and-createsubcomponent",children:"createContainer and createSubcomponent"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createContainer"})," and ",n.jsx(e.code,{children:"createSubcomponent"}),` functions take a default React.ElementType which can be
an element string like div or button or a component like Button. It also takes a config object
containing the following:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"displayName"}),`: This will be the name of the component when shown by the React Dev tools. By
convention, we make that name be the same as typed in a render function. For example
`,n.jsx(e.code,{children:"Disclosure.Target"})," vs ",n.jsx(e.code,{children:"DisclosureTarget"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"modelHook"}),": This is the model hook used by the compound component (",n.jsx(e.code,{children:"useDisclosureModel"}),` in our
case). This model hook is used to determine proper prop types and seamlessly handle the option
model prop. For `,n.jsx(e.code,{children:"createContainer"}),", if a ",n.jsx(e.code,{children:"model"})," is not passed, a ",n.jsx(e.code,{children:"model"}),` is created and added to
React Context. For `,n.jsx(e.code,{children:"createSubcomponent"}),", if a ",n.jsx(e.code,{children:"model"})," is not passed, the ",n.jsx(e.code,{children:"model"}),` comes from React
Context.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"elemPropsHook"}),": This is the elemPropsHook that takes a model and elemProps and returns elemProps."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"subComponents"}),`: For container components. A list of sub components to add to the returned
component. For example, a sub component called `,n.jsx(e.code,{children:"DisclosureTarget"}),` will be added to the export of
`,n.jsx(e.code,{children:"Disclosure"})," so that the user can import only ",n.jsx(e.code,{children:"Disclosure"})," and use ",n.jsx(e.code,{children:"Disclosure.Target"}),`.
`,n.jsx(e.code,{children:"subComponents"}),` is needed for Typescript because static properties cannot be added to predefined
interfaces. `,n.jsx(e.code,{children:"Disclosure.Target"})," = ",n.jsx(e.code,{children:"DisclosureTarget"}),` will caused a type error. This property
allows the createComponent factory function to infer the final interface of the returned
component.`]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:[`Finally, a generic function is returned that takes the component configuration. The first argument
is `,n.jsx(e.code,{children:"elemProps"})," with ",n.jsx(e.code,{children:"ref"}),` and hook props already merged in with props handed to the component. The
model config props will already be filtered out. We'll worry about `,n.jsx(e.code,{children:"elemPropsHook"}),` later. The second
is an Element property. Element is the value passed to the Component's as prop. It will default to
the provided element. The last parameter is an optional model reference. Ideally, the model is used
in `,n.jsx(e.code,{children:"elemPropsHook"})," and therefore not normally needed inside the render function."]}),`
`,n.jsx(e.h2,{id:"createcontainer",children:"createContainer"}),`
`,n.jsxs(e.p,{children:[`When building a component that has a model, you typically start with a container component.
`,n.jsx(e.code,{children:"createContainer"})," is a utility function that hooks up all the pieces for you."]}),`
`,n.jsx(e.h3,{id:"usage-2",children:"Usage"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["It will wrap your component in a context provider so that ",n.jsx(e.code,{children:"subComponents"}),` have access to the
model.`]}),`
`,n.jsx(e.li,{children:"It attaches your model hook to your component."}),`
`,n.jsxs(e.li,{children:["It runs any ",n.jsx(e.code,{children:"elemPropsHook"})," hooks defined."]}),`
`,n.jsxs(e.li,{children:["You can attach ",n.jsx(e.code,{children:"subComponents"}),"."]}),`
`,n.jsxs(e.li,{children:["It will also extract the element attributes and define the ",n.jsx(e.code,{children:"ref"}),` type based on the element you
give it.`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createContainer} from '@workday/canvas-kit-react/common';
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
`})}),`
`,n.jsx(d,{code:D}),`
`,n.jsx(e.h2,{id:"createsubcomponent",children:"createSubcomponent"}),`
`,n.jsxs(e.p,{children:["Once you've built a container component, adding a subcomponent is easy. ",n.jsx(e.code,{children:"createSubcomponent"}),` is
similar to `,n.jsx(e.code,{children:"createContainer"}),` in that it hooks up many of the pieces for you. The main difference is
it uses the context created by `,n.jsx(e.code,{children:"createContainer"}),`. This allows access to the model created at the
root level so that you can use any state or events at a child component level.`]}),`
`,n.jsx(e.h3,{id:"usage-3",children:"Usage"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["It subscribes to the parent context allowing you access to the model hook ",n.jsx(e.code,{children:"state"})," and ",n.jsx(e.code,{children:"events"})]}),`
`,n.jsx(e.li,{children:"It attaches your model hook to your component."}),`
`,n.jsxs(e.li,{children:["It runs any ",n.jsx(e.code,{children:"elemPropsHook"})," hooks defined."]}),`
`,n.jsxs(e.li,{children:["You can attach ",n.jsx(e.code,{children:"subComponents"}),"."]}),`
`,n.jsxs(e.li,{children:["It will also extract the element attributes and define the ",n.jsx(e.code,{children:"ref"}),` type based on the element you
give it.`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
export interface DisclosureTargetProps {
  /**
   * The children of the \`Expandable.Target\`
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
`})}),`
`,n.jsx(d,{code:M}),`
`,n.jsx(e.h1,{id:"createelempropshook",children:"createElemPropsHook"}),`
`,n.jsx(e.p,{children:`This is a utility function that is helpful to use when you have elem attributes that need to be
dyanmic based on the model hook state. This function will also handle merging of element props.`}),`
`,n.jsxs(e.p,{children:["Once you create your element props hook you then attach your hook to either your ",n.jsx(e.code,{children:"createContainer"}),`
component or `,n.jsx(e.code,{children:"createSubcomponent"})," by adding it to the ",n.jsx(e.code,{children:"elemPropsHook"})," property."]}),`
`,n.jsx(e.h2,{id:"usage-4",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createSubcomponent, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

export interface DisclosureContentProps extends BoxProps {
  /**
   * The children of the \`Expandable.Content\` whose visibility is controlled by the associated
   * \`Expandable.Target\`
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
`})}),`
`,n.jsx(d,{code:T})]})}function xn(t={}){const{wrapper:e}={...g(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(x,{...t})}):x(t)}export{xn as default};
