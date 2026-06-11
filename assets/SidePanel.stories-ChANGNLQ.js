import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as M}from"./index-3YbjYt95.js";import{ae as U}from"./index-ZDSBk99o.js";import{S as Y,E as o,c as h}from"./union-DLCtkVd1.js";import{S as X}from"./Specifications-id1YWunX.js";import{A as V,i as z}from"./rocket-kn30mxs2.js";import{F as s}from"./Flex-Dl-NBLHf.js";import{c as i}from"./cs-rfTTo7Bg.js";import{S as a,u as P}from"./SidePanel-C3oRGQQw.js";import{T as c}from"./Text-CNr-2DGz.js";import{g as w,p as k,c as b}from"./index-5dfzm_kn.js";import{p as r}from"./px2rem-C0KbprIx.js";import{S as T}from"./SecondaryButton-D_K1Afrv.js";import{r as N}from"./index-IfJi-UCQ.js";import{h as d,C as $}from"./CanvasProvider-BQB8fFIR.js";import"./iframe-DJNB-Vr3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-92MeLroz.js";import"./Svg-DoDc3G3m.js";import"./components-Cg1FZO0_.js";import"./StatusIndicator-DW1RpUtJ.js";import"./mergeStyles-BV4VEc_Y.js";import"./Box-CwNlJ1ig.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CaNYx-IV.js";import"./grid-DWhi-gWI.js";import"./Card-BzyZlNCL.js";import"./ExternalHyperlink-F3Ezqcg9.js";import"./Hyperlink-BMBSNX69.js";import"./external-link-BZdacz1K.js";import"./lerna-gnzzElkd.js";import"./Tooltip-BxoQKBOc.js";import"./useTooltip-It9frGRS.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BBMl_xav.js";import"./Popper-CbopsOaM.js";import"./TertiaryButton-CBkDxGlV.js";import"./BaseButton-DWX5ERqj.js";import"./Button-DgUbiQZw.js";import"./index-5mrAZJYD.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-B17xCNlQ.js";import"./ColorPicker-Bkxnxvxt.js";import"./ColorInput-DPMCVQeB.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-D0_TvPek.js";import"./types-DXdjelYI.js";import"./FormField-BUFxQ-TR.js";import"./check-Bvurkvei.js";import"./Expandable-Dymk71e9.js";import"./Avatar-CH00W5X3.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-C-Z-l4zf.js";import"./Popup-BHgY7kD_.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-ddP-JAq8.js";import"./useInitialFocus-DVpTgpWA.js";import"./useReturnFocus-BcWGL8OV.js";import"./useFocusRedirect-BTh85vHi.js";import"./Breadcrumbs-CPGCzSS3.js";import"./useOverflowListTarget-BmFjGYrm.js";import"./useListItemSelect-3vvqn41X.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D9vTtPgP.js";import"./OverflowTooltip-XrtqALdT.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-CJIYknPE.js";import"./index-DQ1Wqo_y.js";import"./extend-BPwMWEGU.js";const q=i({alignItems:"center",gap:w.sm}),K=i({height:r(320)}),C=()=>e.jsx(s,{cs:K,children:e.jsxs(a,{children:[e.jsx(a.Heading,{size:"small",children:e.jsxs(s,{cs:q,children:[e.jsx(V,{icon:z}),"Tasks Panel"]})}),e.jsx(a.ToggleButton,{"aria-label":"Collapse View"})]})});C.__RAW__=`import * as React from 'react';

import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexHeadingStyles = createStyles({
  alignItems: 'center',
  gap: system.gap.sm,
});

const viewPortStyles = createStyles({
  height: px2rem(320),
});

export const Basic = () => {
  return (
    <Flex cs={viewPortStyles}>
      <SidePanel>
        <SidePanel.Heading size="small">
          <Flex cs={flexHeadingStyles}>
            <AccentIcon icon={rocketIcon} />
            Tasks Panel
          </Flex>
        </SidePanel.Heading>
        <SidePanel.ToggleButton aria-label="Collapse View" />
      </SidePanel>
    </Flex>
  );
};
`;const E={viewport:i({height:r(320)}),main:i({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},B=()=>{const t=P({onStateTransition:n=>{console.log(`state is: ${n}`)}});return e.jsxs(s,{cs:E.viewport,children:[e.jsxs(a,{model:t,children:[e.jsx(a.ToggleButton,{"aria-label":"Collapse View"}),e.jsx(a.Heading,{hidden:!0,size:"small",children:"Tasks Panel"})]}),e.jsx(s,{as:"main",cs:E.main,children:e.jsx(c,{as:"p",typeLevel:"body.large",children:"Side Panel with a hidden title text."})})]})};B.__RAW__=`import * as React from 'react';

import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const Heading = () => {
  const model = useSidePanelModel({
    onStateTransition: state => {
      console.log(\`state is: \${state}\`);
    },
  });

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel model={model}>
        <SidePanel.ToggleButton aria-label="Collapse View" />
        <SidePanel.Heading hidden size="small">
          Tasks Panel
        </SidePanel.Heading>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side Panel with a hidden title text.
        </Text>
      </Flex>
    </Flex>
  );
};
`;function W(t=d.LTR){const[n,l]=N.useState(t);return{direction:n,toggleDirection(){n===d.LTR?l(d.RTL):l(d.LTR)},setLTR(){l(d.LTR)},setRTL(){l(d.RTL)}}}const D={viewport:i({height:r(320),backgroundColor:b.bg.alt.default}),panel:i({alignItems:"center",padding:k.md}),main:i({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},I=()=>{const{direction:t,toggleDirection:n}=W();return e.jsx($,{dir:t,children:e.jsxs(s,{cs:D.viewport,children:[e.jsxs(a,{variant:"alternate",children:[e.jsx(a.ToggleButton,{"aria-label":"Collapse View"}),e.jsx(a.Heading,{size:"small",children:"Alternate Panel"})]}),e.jsxs(s,{as:"main",cs:D.main,children:[e.jsx(c,{as:"p",typeLevel:"body.large",children:"Toggle the content direction"}),e.jsxs(T,{onClick:n,children:["Set to ",t==="ltr"?"Right-to-Left":"Left-to-Right"]})]})]})})};I.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
    backgroundColor: system.color.bg.alt.default,
  }),
  panel: createStyles({
    alignItems: 'center',
    padding: system.padding.md,
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const AlternatePanel = () => {
  const {direction, toggleDirection} = useDirection();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewport}>
        <SidePanel variant="alternate">
          <SidePanel.ToggleButton aria-label="Collapse View" />
          <SidePanel.Heading size="small">Alternate Panel</SidePanel.Heading>
        </SidePanel>
        <Flex as="main" cs={stylesOverride.main}>
          <Text as="p" typeLevel="body.large">
            Toggle the content direction
          </Text>
          <SecondaryButton onClick={toggleDirection}>
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </Flex>
      </Flex>
    </CanvasProvider>
  );
};
`;const x={viewport:i({height:r(320)}),panel:i({alignItems:"center",padding:k.md}),panelHeading:i({color:b.fg.muted.strong}),main:i({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},H=()=>{const t=P({initialTransitionState:"collapsed",labelId:"tasks-panel-label"});return e.jsxs(s,{cs:x.viewport,children:[e.jsxs(a,{model:t,children:[e.jsx(a.ToggleButton,{"aria-label":"Collapse View"}),e.jsx(a.Heading,{size:"small",cs:x.panelHeading,children:"Task Panel"}),t.state.transitionState==="expanded"&&e.jsx(s,{cs:x.panel,children:"Contents"})]}),e.jsxs(s,{as:"main",cs:x.main,children:[e.jsx(c,{as:"p",typeLevel:"body.large",children:"Control the panel externally"}),e.jsx(T,{onClick:t.state.transitionState==="expanded"?t.events.collapse:t.events.expand,"aria-pressed":t.state.transitionState==="expanded",children:t.state.transitionState==="expanded"?"Hide Side Panel":"Show Side Panel"})]})]})};H.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  panel: createStyles({
    alignItems: 'center',
    padding: system.padding.md,
  }),
  panelHeading: createStyles({
    color: system.color.fg.muted.strong,
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const ExternalControl = () => {
  const model = useSidePanelModel({
    initialTransitionState: 'collapsed',
    labelId: 'tasks-panel-label',
  });

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel model={model}>
        <SidePanel.ToggleButton aria-label="Collapse View" />
        <SidePanel.Heading size="small" cs={stylesOverride.panelHeading}>
          Task Panel
        </SidePanel.Heading>
        {model.state.transitionState === 'expanded' && (
          <Flex cs={stylesOverride.panel}>Contents</Flex>
        )}
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Control the panel externally
        </Text>
        <SecondaryButton
          onClick={
            model.state.transitionState === 'expanded' ? model.events.collapse : model.events.expand
          }
          aria-pressed={model.state.transitionState === 'expanded'}
        >
          {model.state.transitionState === 'expanded' ? 'Hide Side Panel' : 'Show Side Panel'}
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
`;const v={viewport:i({height:r(320)}),panelContainer:i({marginInlineStart:"auto"}),panel:i({alignItems:"center",justifyContent:"flex-end",padding:k.md}),main:i({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},G=()=>{const t=P({origin:"end"});return e.jsxs(a,{model:t,className:v.panelContainer,children:[e.jsx(a.ToggleButton,{"aria-label":"Collapse View"}),e.jsx(s,{cs:v.panel,children:e.jsx(a.Heading,{size:"small",children:"Tasks Panel"})})]})},O=()=>{const{direction:t,toggleDirection:n}=W();return e.jsx($,{dir:t,children:e.jsxs(s,{cs:v.viewport,children:[e.jsxs(s,{as:"main",cs:v.main,children:[e.jsx(c,{as:"p",typeLevel:"body.large",children:"Toggle the content direction"}),e.jsxs(T,{onClick:n,children:["Set to ",t==="ltr"?"Right-to-Left":"Left-to-Right"]})]}),e.jsx(G,{})]})})};O.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    marginInlineStart: 'auto',
  }),
  panel: createStyles({
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: system.padding.md,
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

const RightPanel = () => {
  const model = useSidePanelModel({
    origin: 'end',
  });

  return (
    <SidePanel model={model} className={stylesOverride.panelContainer}>
      <SidePanel.ToggleButton aria-label="Collapse View" />
      <Flex cs={stylesOverride.panel}>
        <SidePanel.Heading size="small">Tasks Panel</SidePanel.Heading>
      </Flex>
    </SidePanel>
  );
};

export const RightOrigin = () => {
  const {direction, toggleDirection} = useDirection();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewport}>
        <Flex as="main" cs={stylesOverride.main}>
          <Text as="p" typeLevel="body.large">
            Toggle the content direction
          </Text>
          <SecondaryButton onClick={toggleDirection}>
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </Flex>

        <RightPanel />
      </Flex>
    </CanvasProvider>
  );
};
`;const p={accentIcon:i({marginInlineEnd:w.md}),pageContainer:i({gap:w.md,height:r(320)}),panelContainer:i({alignItems:"center",padding:k.md}),panelHeading:i({color:b.fg.default}),mainContent:i({alignItems:"center",justifyContent:"center",flexBasis:"auto",flex:1})},A=()=>e.jsxs(s,{cs:p.pageContainer,children:[e.jsx(a,{initialTransitionState:"expanded",children:e.jsxs(s,{cs:p.panelContainer,children:[e.jsx(V,{icon:z,cs:p.accentIcon}),e.jsx(a.Heading,{size:"small",cs:p.panelHeading,children:"Tasks Panel"})]})}),e.jsx(s,{as:"main",cs:p.mainContent,children:e.jsx(c,{as:"p",typeLevel:"body.large",children:"This is the main content section."})})]});A.__RAW__=`import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  accentIcon: createStyles({
    marginInlineEnd: system.gap.md,
  }),
  pageContainer: createStyles({
    gap: system.gap.md,
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    alignItems: 'center',
    padding: system.padding.md,
  }),
  panelHeading: createStyles({
    color: system.color.fg.default,
  }),
  mainContent: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 'auto',
    flex: 1,
  }),
};

export const AlwaysOpen = () => {
  return (
    <Flex cs={stylesOverride.pageContainer}>
      <SidePanel initialTransitionState="expanded">
        <Flex cs={stylesOverride.panelContainer}>
          <AccentIcon icon={rocketIcon} cs={stylesOverride.accentIcon} />
          <SidePanel.Heading size="small" cs={stylesOverride.panelHeading}>
            Tasks Panel
          </SidePanel.Heading>
        </Flex>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.mainContent}>
        <Text as="p" typeLevel="body.large">
          This is the main content section.
        </Text>
      </Flex>
    </Flex>
  );
};
`;const _={viewport:i({height:r(320)}),main:i({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},F=()=>{const[t,n]=N.useState("expanded"),l=P({onStateTransition:R=>{n(R),console.log("Expanded changed to:",R)}});return e.jsxs(s,{cs:_.viewport,children:[e.jsxs(a,{model:l,children:[e.jsx(a.ToggleButton,{"aria-label":"Collapse View"}),e.jsx(a.Heading,{hidden:!0,size:"small",children:"Hidden Title"})]}),e.jsx(s,{as:"main",cs:_.main,children:e.jsxs(c,{as:"p",typeLevel:"body.large",children:["Side panel is ",t,"."]})})]})};F.__RAW__=`import * as React from 'react';

import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  SidePanel,
  SidePanelTransitionStates,
  useSidePanelModel,
} from '@workday/canvas-kit-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const OnStateTransition = () => {
  const [transitionState, setTransitionState] =
    React.useState<SidePanelTransitionStates>('expanded');

  const model = useSidePanelModel({
    onStateTransition: state => {
      setTransitionState(state);
      console.log('Expanded changed to:', state);
    },
  });

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel model={model}>
        <SidePanel.ToggleButton aria-label="Collapse View" />
        <SidePanel.Heading hidden size="small">
          Hidden Title
        </SidePanel.Heading>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side panel is {transitionState}.
        </Text>
      </Flex>
    </Flex>
  );
};
`;function L(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...M(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(U,{of:Q}),`
`,e.jsxs(n.h1,{id:"canvas-kit-side-panel-",children:["Canvas Kit Side Panel ",e.jsx(Y,{type:"new"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"}),` is a collapsible container that anchors to the left or right side of the screen. It uses
the model pattern for state management and is fully accessible.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://design.workday.com/components/containers/side-panel",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(n.h2,{id:"migrating-from-preview",children:"Migrating from Preview"}),`
`,e.jsxs(n.p,{children:["If you're migrating from ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react/side-panel"}),`, here are the key API
changes:`]}),`
`,e.jsx(n.h3,{id:"import-changes",children:"Import Changes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before (preview-react)
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';

// After (react)
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
`})}),`
`,e.jsx(n.h3,{id:"hook-api-changes",children:"Hook API Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsxs(n.th,{children:["Preview (",e.jsx(n.code,{children:"useSidePanel"}),")"]}),e.jsxs(n.th,{children:["Main (",e.jsx(n.code,{children:"useSidePanelModel"}),")"]})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"initialExpanded: boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"initialTransitionState: 'expanded' | 'collapsed'"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"origin: 'left' | 'right'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"origin: 'start' | 'end'"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"expanded: boolean"})]}),e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"model.state.transitionState"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"setExpanded(bool)"})]}),e.jsxs(n.td,{children:["Use ",e.jsx(n.code,{children:"model.events.expand()"})," / ",e.jsx(n.code,{children:"model.events.collapse()"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"panelProps"})," to spread"]}),e.jsxs(n.td,{children:["Props applied automatically via ",e.jsx(n.code,{children:"elemPropsHook"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"labelProps"})," to spread"]}),e.jsxs(n.td,{children:["Use ",e.jsx(n.code,{children:"id={model.state.labelId}"})," on label element"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"controlProps"})," to spread"]}),e.jsxs(n.td,{children:["Props applied automatically to ",e.jsx(n.code,{children:"SidePanel.ToggleButton"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"component-api-changes",children:"Component API Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Preview"}),e.jsx(n.th,{children:"Main"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<SidePanel {...panelProps}>"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<SidePanel model={model}>"})," or just ",e.jsx(n.code,{children:"<SidePanel>"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<SidePanel.ToggleButton {...controlProps} />"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<SidePanel.ToggleButton />"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<Heading {...labelProps}>"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<SidePanel.Heading>Panel Title</SidePanel.Heading>"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"expanded"})," prop on SidePanel"]}),e.jsxs(n.td,{children:["Managed by model's ",e.jsx(n.code,{children:"transitionState"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"touched"})," prop on SidePanel"]}),e.jsx(n.td,{children:"Managed internally"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onExpandedChange"})," callback"]}),e.jsxs(n.td,{children:["Use ",e.jsx(n.code,{children:"onStateTransition"})," and derive expanded state"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onStateTransition"})," on component"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onStateTransition"})," on model config"]})]})]})]}),`
`,e.jsx(n.h3,{id:"code-migration-example",children:"Code Migration Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before (preview-react)
const {expanded, panelProps, labelProps, controlProps} = useSidePanel({
  initialExpanded: false,
});

<SidePanel {...panelProps} origin="right" onExpandedChange={exp => console.log(exp)}>
  <SidePanel.ToggleButton {...controlProps} />
  <Heading {...labelProps}>Panel Title</Heading>
  {expanded && <Content />}
</SidePanel>;

// After (react)
const model = useSidePanelModel({
  initialTransitionState: 'collapsed',
  origin: 'end',
  onStateTransition: state => {
    const isExpanded = state === 'expanded' || state === 'expanding';
    console.log(isExpanded);
  },
});

<SidePanel model={model}>
  <SidePanel.ToggleButton />
  <SidePanel.Heading>Panel Title</SidePanel.Heading>
  {model.state.transitionState === 'expanded' && <Content />}
</SidePanel>;
`})}),`
`,e.jsx(n.h3,{id:"checking-expanded-state",children:"Checking Expanded State"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before (preview-react)
if (expanded) {
  /* ... */
}

// After (react) - for exact state
if (model.state.transitionState === 'expanded') {
  /* ... */
}

// After (react) - including animation states
const isExpanded =
  model.state.transitionState === 'expanded' || model.state.transitionState === 'expanding';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"})," is composed of three parts:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The panel container (with an optional ",e.jsx(n.code,{children:"model"})," prop)"]}),`
`,e.jsxs(n.li,{children:["A heading (",e.jsx(n.code,{children:"SidePanel.Heading"}),") for the panel that is visually hidden when the panel is collapsed"]}),`
`,e.jsxs(n.li,{children:["A toggle button (",e.jsx(n.code,{children:"SidePanel.ToggleButton"}),") to control the expand / collapse states"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Bidirectional support is built into ",e.jsx(n.code,{children:"SidePanel"}),`. As seen in the example below, CSS Flexbox flips the
page layout and the panel's contents. `,e.jsx(n.code,{children:"SidePanel"}),` also has logic to flip the position and direction
of the `,e.jsx(n.code,{children:"ToggleButton"}),` as well as the direction of the expand / collapse animation. If you're using
CSS Flexbox for layouts and using the provided components, you shouldn't have to provide any custom
logic or styling for bidirectional support.`]}),`
`,e.jsx(o,{code:C}),`
`,e.jsx(n.h3,{id:"hidden-name",children:"Hidden Name"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"}),"'s ",e.jsx(n.code,{children:"<section>"}),` element container should always have an accessible name to help screen
reader users understand the purpose of the panel. For this reason, we recommend using the
`,e.jsx(n.code,{children:"SidePanel.Heading"})," component and setting the ",e.jsx(n.code,{children:"hidden"})," prop to ",e.jsx(n.code,{children:"true"}),`. This will visually hide the
heading while keeping it accessible to screen readers.`]}),`
`,e.jsx(o,{code:B}),`
`,e.jsx(n.h3,{id:"alternate-variant",children:"Alternate Variant"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"})," has one variant, ",e.jsx(n.code,{children:"alternate"}),`, which you can supply as a top-level prop. Default depth of
`,e.jsx(n.code,{children:"alternate"})," variant is 5, if ",e.jsx(n.code,{children:"alternate"}),` SidePanel has an overlay behavior the depth 6 should be
used (this case is covered in the Examples section).`]}),`
`,e.jsx(o,{code:I}),`
`,e.jsx(n.h3,{id:"external-control",children:"External Control"}),`
`,e.jsxs(n.p,{children:["Sometimes you'll want to control ",e.jsx(n.code,{children:"SidePanel"}),`'s expand / collapse behavior from outside the
component. You can use the model's events (`,e.jsx(n.code,{children:"model.events.expand()"})," and ",e.jsx(n.code,{children:"model.events.collapse()"}),`) to
programmatically control the panel.`]}),`
`,e.jsx(n.h4,{id:"notes-about-accessibility",children:"Notes about accessibility"}),`
`,e.jsx(n.p,{children:"When using external controls, be mindful of accessibility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"aria-pressed"})," on toggle buttons to indicate the current state"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SidePanel.ToggleButton"})," inside the panel automatically receives the correct ARIA attributes"]}),`
`,e.jsxs(n.li,{children:["External buttons should have their own accessible labels (don't rely on ",e.jsx(n.code,{children:"aria-labelledby"}),` pointing
to the panel's label)`]}),`
`]}),`
`,e.jsxs(n.p,{children:["In the following example, we use the model's ",e.jsx(n.code,{children:"transitionState"}),` to determine the button's pressed
state and call `,e.jsx(n.code,{children:"model.events.expand()"})," or ",e.jsx(n.code,{children:"model.events.collapse()"})," on click."]}),`
`,e.jsx(o,{code:H}),`
`,e.jsx(n.h3,{id:"right-origin",children:"Right Origin"}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.code,{children:"SidePanel"})," uses a ",e.jsx(n.code,{children:"start"}),` origin (left in LTR, right in RTL). This sets the
`,e.jsx(n.code,{children:"ToggleButton"}),`'s position and direction as well as the direction of the animation. You can set the
origin to `,e.jsx(n.code,{children:'"end"'})," to flip these. The origin uses logical properties (",e.jsx(n.code,{children:"start"}),"/",e.jsx(n.code,{children:"end"}),`) for proper
bidirectional support.`]}),`
`,e.jsx(o,{code:O}),`
`,e.jsx(n.h3,{id:"always-open",children:"Always Open"}),`
`,e.jsxs(n.p,{children:["If you do not need ",e.jsx(n.code,{children:"SidePanel"}),"'s expand / collapse behavior, you can simply omit the ",e.jsx(n.code,{children:"ToggleButton"}),"."]}),`
`,e.jsx(o,{code:A}),`
`,e.jsx(n.h3,{id:"deriving-expanded-state",children:"Deriving Expanded State"}),`
`,e.jsxs(n.p,{children:["If you need a simple boolean ",e.jsx(n.code,{children:"expanded"})," state (similar to the preview-react ",e.jsx(n.code,{children:"onExpandedChange"}),`
callback), you can derive it from the `,e.jsx(n.code,{children:"transitionState"})," using the ",e.jsx(n.code,{children:"onStateTransition"}),` callback on
the model.`]}),`
`,e.jsx(n.h3,{id:"onstatetransition",children:"onStateTransition"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"onStateTransition"}),` callback is called whenever the panel's transition state changes. This
includes all four states: `,e.jsx(n.code,{children:"expanding"}),", ",e.jsx(n.code,{children:"expanded"}),", ",e.jsx(n.code,{children:"collapsing"}),", and ",e.jsx(n.code,{children:"collapsed"}),`. You can pass this
callback directly to the `,e.jsx(n.code,{children:"SidePanel"})," component or to the ",e.jsx(n.code,{children:"useSidePanelModel"})," hook."]}),`
`,e.jsx(n.p,{children:"The transition flow is:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Collapsing"}),": ",e.jsx(n.code,{children:"expanded"})," → ",e.jsx(n.code,{children:"collapsing"})," → ",e.jsx(n.code,{children:"collapsed"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expanding"}),": ",e.jsx(n.code,{children:"collapsed"})," → ",e.jsx(n.code,{children:"expanding"})," → ",e.jsx(n.code,{children:"expanded"})]}),`
`]}),`
`,e.jsx(n.p,{children:"This is useful for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Triggering side effects when the panel state changes"}),`
`,e.jsx(n.li,{children:"Syncing the panel state with external state management"}),`
`,e.jsx(n.li,{children:"Animating child components based on the transition state"}),`
`]}),`
`,e.jsx(o,{code:F}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"})," renders a ",e.jsx(n.code,{children:"<section>"})," element with an accessible name provided by ",e.jsx(n.code,{children:"aria-labelledby"}),`,
which references the `,e.jsx(n.code,{children:"SidePanel.Heading"}),` component. This ensures screen reader users understand the
purpose of the panel.`]}),`
`,e.jsx(n.h4,{id:"panel-and-heading",children:"Panel and Heading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SidePanel.Heading"})," provides the accessible name for the panel via ",e.jsx(n.code,{children:"aria-labelledby"})]}),`
`,e.jsx(n.li,{children:`When the panel is collapsed, the heading is automatically hidden visually but remains accessible
to screen readers`}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"hidden"})," prop on ",e.jsx(n.code,{children:"SidePanel.Heading"})," if you want the heading always visually hidden"]}),`
`]}),`
`,e.jsx(n.h4,{id:"toggle-button",children:"Toggle Button"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SidePanel.ToggleButton"})," automatically includes ",e.jsx(n.code,{children:"aria-controls"})," (references the panel's ",e.jsx(n.code,{children:"id"}),`),
`,e.jsx(n.code,{children:"aria-pressed"})," (indicates current state), and ",e.jsx(n.code,{children:"aria-describedby"})," (references the panel's heading)"]}),`
`,e.jsxs(n.li,{children:["Developers must provide a static ",e.jsx(n.code,{children:"aria-label"})," string on ",e.jsx(n.code,{children:"SidePanel.ToggleButton"}),` to describe the
button's purpose (e.g., "Collapse View"). Avoid using ambiguous terms like "Toggle" in the label.
Since `,e.jsx(n.code,{children:"aria-pressed"})," communicates the state, avoid dynamically updating ",e.jsx(n.code,{children:"aria-label"})]}),`
`,e.jsxs(n.li,{children:["The button includes a Tooltip with customizable text via ",e.jsx(n.code,{children:"tooltipTextExpand"}),` and
`,e.jsx(n.code,{children:"tooltipTextCollapse"}),' props (defaults: "Expand View" and "Collapse View")']}),`
`,e.jsxs(n.li,{children:["For optimal keyboard navigation, place ",e.jsx(n.code,{children:"SidePanel.ToggleButton"}),` as the first focusable element in
the panel`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(h,{name:"SidePanel",fileName:"/react/"}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usesidepanelmodel",children:"useSidePanelModel"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useSidePanelModel"}),` hook creates a model for managing the SidePanel's state and events. You can
pass this model to the `,e.jsx(n.code,{children:"SidePanel"})," component, or let the component create one internally."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {useSidePanelModel} from '@workday/canvas-kit-react/side-panel';

// Create a model with custom configuration
const model = useSidePanelModel({
  initialTransitionState: 'collapsed',
  origin: 'end',
  onStateTransition: state => console.log('State:', state),
});

// Access state
model.state.transitionState; // 'expanded' | 'expanding' | 'collapsed' | 'collapsing'
model.state.panelId; // unique ID for the panel
model.state.labelId; // unique ID for the label

// Trigger events
model.events.expand(); // Set to expanded (no animation)
model.events.collapse(); // Set to collapsed (no animation)
model.events.handleAnimationStart(); // Start expand/collapse animation
`})}),`
`,e.jsx(h,{name:"useSidePanelModel",fileName:"/react/"}),`
`,e.jsx(n.h3,{id:"usesidepanelcontainer",children:"useSidePanelContainer"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useSidePanelContainer"}),` elemProps hook provides the necessary props for the SidePanel container
element, including `,e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"aria-labelledby"}),", and ",e.jsx(n.code,{children:"onTransitionEnd"}),"."]}),`
`,e.jsx(h,{name:"useSidePanelContainer",fileName:"/react/"}),`
`,e.jsx(n.h3,{id:"usesidepaneltogglebutton",children:"useSidePanelToggleButton"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useSidePanelToggleButton"}),` elemProps hook provides ARIA attributes for the toggle
button, including `,e.jsx(n.code,{children:"aria-controls"}),", ",e.jsx(n.code,{children:"aria-pressed"}),", and ",e.jsx(n.code,{children:"aria-describedby"}),"."]}),`
`,e.jsx(h,{name:"useSidePanelToggleButton",fileName:"/react/"}),`
`,e.jsx(n.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(X,{file:"SidePanel.spec.ts",initialSpecs:null,name:"Side Panel"})]})}function J(t={}){const{wrapper:n}={...M(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(L,{...t})}):L(t)}const Q={title:"Components/Containers/Side Panel (New)",component:a,tags:["autodocs"],parameters:{docs:{page:J}}},m={render:C},g={render:B},j={render:I},u={render:H},S={render:O},y={render:A},f={render:F};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: HeadingExample
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: AlternatePanelExample
}`,...j.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ExternalControlExample
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: RightOriginExample
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: AlwaysOpenExample
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: OnStateTransitionExample
}`,...f.parameters?.docs?.source}}};const Bn=["Basic","Heading","AlternatePanel","ExternalControl","RightOrigin","AlwaysOpen","OnStateTransition"];export{j as AlternatePanel,y as AlwaysOpen,m as Basic,u as ExternalControl,g as Heading,f as OnStateTransition,S as RightOrigin,Bn as __namedExportsOrder,Q as default};
