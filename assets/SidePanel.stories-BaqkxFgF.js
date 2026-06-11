import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as Z}from"./index-3YbjYt95.js";import{ae as te}from"./index-ZDSBk99o.js";import{S as oe,E as d,c as q}from"./union-DLCtkVd1.js";import{S as re}from"./Specifications-id1YWunX.js";import{A as ee,i as ne}from"./rocket-kn30mxs2.js";import{u as m,S as s}from"./SidePanel-C6D0YPQs.js";import{F as r}from"./Flex-Dl-NBLHf.js";import{c as o}from"./cs-rfTTo7Bg.js";import{H as y}from"./TypeLevelComponents-B17xCNlQ.js";import{T as x}from"./Text-CNr-2DGz.js";import{c as R,p as f,g as E}from"./index-5dfzm_kn.js";import{p as h}from"./px2rem-C0KbprIx.js";import{r as D}from"./index-IfJi-UCQ.js";import{h as g,C as L}from"./CanvasProvider-BQB8fFIR.js";import{S as F}from"./SecondaryButton-D_K1Afrv.js";import{A as _}from"./AccessibleHide-DUXHKbXN.js";import{I as p}from"./InformationHighlight-BEJvTavs.js";import"./iframe-DJNB-Vr3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-92MeLroz.js";import"./Svg-DoDc3G3m.js";import"./components-Cg1FZO0_.js";import"./StatusIndicator-DW1RpUtJ.js";import"./mergeStyles-BV4VEc_Y.js";import"./Box-CwNlJ1ig.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CaNYx-IV.js";import"./grid-DWhi-gWI.js";import"./Card-BzyZlNCL.js";import"./ExternalHyperlink-F3Ezqcg9.js";import"./Hyperlink-BMBSNX69.js";import"./external-link-BZdacz1K.js";import"./lerna-gnzzElkd.js";import"./Tooltip-BxoQKBOc.js";import"./useTooltip-It9frGRS.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BBMl_xav.js";import"./Popper-CbopsOaM.js";import"./TertiaryButton-CBkDxGlV.js";import"./BaseButton-DWX5ERqj.js";import"./Button-DgUbiQZw.js";import"./index-5mrAZJYD.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-Bkxnxvxt.js";import"./ColorInput-DPMCVQeB.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-D0_TvPek.js";import"./types-DXdjelYI.js";import"./FormField-BUFxQ-TR.js";import"./check-Bvurkvei.js";import"./Expandable-Dymk71e9.js";import"./Avatar-CH00W5X3.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-C-Z-l4zf.js";import"./Popup-BHgY7kD_.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-ddP-JAq8.js";import"./useInitialFocus-DVpTgpWA.js";import"./useReturnFocus-BcWGL8OV.js";import"./useFocusRedirect-BTh85vHi.js";import"./Breadcrumbs-CPGCzSS3.js";import"./useOverflowListTarget-BmFjGYrm.js";import"./useListItemSelect-3vvqn41X.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D9vTtPgP.js";import"./OverflowTooltip-XrtqALdT.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-CJIYknPE.js";import"./index-DQ1Wqo_y.js";import"./extend-BPwMWEGU.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";const u={accentIcon:o({marginInlineEnd:E.md}),pageContainer:o({gap:E.md,height:h(320)}),panelContainer:o({alignItems:"center",padding:f.md}),panelHeading:o({color:R.fg.default}),mainContent:o({alignItems:"center",justifyContent:"center",flexBasis:"auto",flex:1})},$=()=>{const{panelProps:t,labelProps:n}=m();return e.jsxs(r,{cs:u.pageContainer,children:[e.jsx(s,{...t,children:e.jsxs(r,{cs:u.panelContainer,children:[e.jsx(ee,{icon:ne,cs:u.accentIcon}),e.jsx(y,{size:"small",cs:u.panelHeading,...n,children:"Tasks Panel"})]})}),e.jsx(r,{as:"main",cs:u.mainContent,children:e.jsx(x,{as:"p",typeLevel:"body.large",children:"This is the main content section."})})]})};$.__RAW__=`import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
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
  const {panelProps, labelProps} = useSidePanel();

  return (
    <Flex cs={stylesOverride.pageContainer}>
      <SidePanel {...panelProps}>
        <Flex cs={stylesOverride.panelContainer}>
          <AccentIcon icon={rocketIcon} cs={stylesOverride.accentIcon} />
          <Heading size="small" cs={stylesOverride.panelHeading} {...labelProps}>
            Tasks Panel
          </Heading>
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
`;function N(t=g.LTR){const[n,a]=D.useState(t);return{direction:n,toggleDirection(){n===g.LTR?a(g.RTL):a(g.LTR)},setLTR(){a(g.LTR)},setRTL(){a(g.RTL)}}}const S={viewPortContainer:o({height:h(320)}),panel:o({alignItems:"center",padding:f.md}),accentIcon:o({marginInlineEnd:E.md}),mainContent:o({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},M=()=>{const{direction:t,toggleDirection:n}=N(),{expanded:a,panelProps:i,labelProps:l,controlProps:c}=m();return e.jsx(L,{dir:t,children:e.jsxs(r,{cs:S.viewPortContainer,children:[e.jsxs(s,{...i,children:[e.jsx(s.ToggleButton,{...c}),e.jsxs(r,{cs:S.panel,children:[a&&e.jsx(r,{cs:S.accentIcon,children:e.jsx(ee,{icon:ne})}),e.jsx(y,{size:"small",...l,hidden:a?void 0:!0,children:"Tasks Panel"})]})]}),e.jsxs(r,{as:"main",cs:S.mainContent,children:[e.jsx(x,{as:"p",typeLevel:"body.large",children:"Toggle the content direction"}),e.jsxs(F,{onClick:n,children:["Set to ",t==="ltr"?"Right-to-Left":"Left-to-Right"]})]})]})})};M.__RAW__=`import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useDirection} from './useDirection';

const stylesOverride = {
  viewPortContainer: createStyles({
    height: px2rem(320),
  }),
  panel: createStyles({
    alignItems: 'center',
    padding: system.padding.md,
  }),
  accentIcon: createStyles({
    marginInlineEnd: system.gap.md,
  }),
  mainContent: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const Basic = () => {
  const {direction, toggleDirection} = useDirection();
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewPortContainer}>
        <SidePanel {...panelProps}>
          <SidePanel.ToggleButton {...controlProps} />
          <Flex cs={stylesOverride.panel}>
            {expanded && (
              <Flex cs={stylesOverride.accentIcon}>
                <AccentIcon icon={rocketIcon} />
              </Flex>
            )}
            <Heading size="small" {...labelProps} hidden={!expanded ? true : undefined}>
              Tasks Panel
            </Heading>
          </Flex>
        </SidePanel>
        <Flex as="main" cs={stylesOverride.mainContent}>
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
`;const P={viewport:o({height:h(320)}),panel:o({alignItems:"center",padding:f.md}),panelHeading:o({color:R.fg.muted.strong}),main:o({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},z=()=>{const{expanded:t,panelProps:n,labelProps:a,controlProps:i}=m({initialExpanded:!1}),[l,c]=D.useState(t?"expanded":"collapsed");return e.jsxs(r,{cs:P.viewport,children:[e.jsx(s,{...n,onExpandedChange:H=>{console.log(`expanded prop is: ${H?"true":"false"}`)},onStateTransition:c,children:l==="expanded"&&e.jsx(r,{cs:P.panel,children:e.jsx(y,{size:"small",cs:P.panelHeading,...a,children:"Tasks Panel"})})}),e.jsxs(r,{as:"main",cs:P.main,children:[e.jsx(x,{as:"p",typeLevel:"body.large",children:"Control the panel externally"}),e.jsx(F,{onClick:i.onClick,"aria-pressed":t,children:"Show Side Panel"})]})]})};z.__RAW__=`import * as React from 'react';

import {
  SidePanel,
  SidePanelTransitionStates,
  useSidePanel,
} from '@workday/canvas-kit-preview-react/side-panel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
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

/*
 * NOTE TO DEV:
 * Spreading the \`controlProps\` onto an external control creates serious accessibility issues.
 * - \`aria-labelledby\` id reference is invalid when the SidePanel is collapsed
 * - \`aria-labelledby\` will change the name of "Toggle Side Panel" button to "Tasks Panel"
 * - \`aria-expanded\` won't make sense to screen reader users when the expanded SidePanel content isn't following the control
 * - \`aria-controls\` is unsupported by screen readers and will not allow users to navigate to the controlled content
 *
 * SOLUTION:
 * - Pass the \`controlProps\` click handler function down to the external control component.
 * - Add a toggle state to Button components with \`aria-pressed\` for screen readers,
 * - OR use a similar toggle input like Checkbox or Switch.
 */
export const ExternalControl = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel({initialExpanded: false});
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel
        {...panelProps}
        onExpandedChange={expanded => {
          console.log(\`expanded prop is: \${expanded ? 'true' : 'false'}\`);
        }}
        onStateTransition={setPanelState}
      >
        {panelState === 'expanded' && (
          <Flex cs={stylesOverride.panel}>
            <Heading size="small" cs={stylesOverride.panelHeading} {...labelProps}>
              Tasks Panel
            </Heading>
          </Flex>
        )}
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Control the panel externally
        </Text>
        <SecondaryButton onClick={controlProps.onClick} aria-pressed={expanded}>
          Show Side Panel
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
`;const G={viewport:o({height:h(320)}),main:o({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},W=()=>{const{panelProps:t,labelProps:n,controlProps:a}=m();return e.jsxs(r,{cs:G.viewport,children:[e.jsxs(s,{...t,onExpandedChange:i=>{console.log(`expanded prop is: ${i?"true":"false"}`)},onStateTransition:i=>{console.log(`Side Panel is ${i}`)},children:[e.jsx(s.ToggleButton,{...a}),e.jsx(_,{...n,children:"Hidden Title"})]}),e.jsx(r,{as:"main",cs:G.main,children:e.jsx(x,{as:"p",typeLevel:"body.large",children:"Side Panel with a hidden title text."})})]})};W.__RAW__=`import * as React from 'react';

import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
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

export const HiddenName = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel
        {...panelProps}
        onExpandedChange={expanded => {
          console.log(\`expanded prop is: \${expanded ? 'true' : 'false'}\`);
        }}
        onStateTransition={state => {
          console.log(\`Side Panel is \${state}\`);
        }}
      >
        <SidePanel.ToggleButton {...controlProps} />
        <AccessibleHide {...labelProps}>Hidden Title</AccessibleHide>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side Panel with a hidden title text.
        </Text>
      </Flex>
    </Flex>
  );
};
`;const J={viewport:o({height:h(320)}),main:o({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},V=()=>{const{expanded:t,panelProps:n,labelProps:a,controlProps:i}=m(),l=c=>{console.log(`Side panel is ${c?"expanded":"collapsed"}`)};return e.jsxs(r,{cs:J.viewport,children:[e.jsxs(s,{...n,onExpandedChange:l,children:[e.jsx(s.ToggleButton,{...i}),e.jsx(_,{...a,children:"Hidden Title"})]}),e.jsx(r,{as:"main",cs:J.main,children:e.jsxs(x,{as:"p",typeLevel:"body.large",children:["Side panel is ",t?"expanded":"collapsed","."]})})]})};V.__RAW__=`import * as React from 'react';

import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
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

export const OnExpandedChange = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  const handleExpandedChange = (expanded: boolean) => {
    console.log(\`Side panel is \${expanded ? 'expanded' : 'collapsed'}\`);
  };

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel {...panelProps} onExpandedChange={handleExpandedChange}>
        <SidePanel.ToggleButton {...controlProps} />
        <AccessibleHide {...labelProps}>Hidden Title</AccessibleHide>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side panel is {expanded ? 'expanded' : 'collapsed'}.
        </Text>
      </Flex>
    </Flex>
  );
};
`;const Q={viewport:o({height:h(320)}),main:o({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},X=()=>{const{panelProps:t,labelProps:n,controlProps:a}=m(),[i,l]=D.useState("expanded"),c=H=>{l(H)};return e.jsxs(r,{cs:Q.viewport,children:[e.jsxs(s,{...t,onStateTransition:c,children:[e.jsx(s.ToggleButton,{...a}),e.jsx(_,{...n,children:"Hidden Title"})]}),e.jsx(r,{as:"main",cs:Q.main,children:e.jsxs(x,{as:"p",typeLevel:"body.large",children:["Side panel is ",i,"."]})})]})};X.__RAW__=`import * as React from 'react';

import {
  SidePanel,
  SidePanelTransitionStates,
  useSidePanel,
} from '@workday/canvas-kit-preview-react/side-panel';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
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
  const {panelProps, labelProps, controlProps} = useSidePanel();
  const [transitionState, setTransitionState] =
    React.useState<SidePanelTransitionStates>('expanded');

  const handleStateTransition = (transition: SidePanelTransitionStates) => {
    setTransitionState(transition);
  };

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel {...panelProps} onStateTransition={handleStateTransition}>
        <SidePanel.ToggleButton {...controlProps} />
        <AccessibleHide {...labelProps}>Hidden Title</AccessibleHide>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side panel is {transitionState}.
        </Text>
      </Flex>
    </Flex>
  );
};
`;const B={viewport:o({height:h(320)}),panelContainer:o({marginInlineStart:"auto"}),panel:o({alignItems:"center",justifyContent:"flex-end",padding:f.md}),main:o({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},ae=()=>{const{expanded:t,panelProps:n,labelProps:a,controlProps:i}=m();return e.jsxs(s,{...n,origin:"right",className:B.panelContainer,children:[e.jsx(s.ToggleButton,{...i}),e.jsx(r,{cs:B.panel,children:e.jsx(y,{size:"small",hidden:t?void 0:!0,...a,children:"Tasks Panel"})})]})},U=()=>{const{direction:t,toggleDirection:n}=N();return e.jsx(L,{dir:t,children:e.jsxs(r,{cs:B.viewport,children:[e.jsxs(r,{as:"main",cs:B.main,children:[e.jsx(x,{as:"p",typeLevel:"body.large",children:"Toggle the content direction"}),e.jsxs(F,{onClick:n,children:["Set to ",t==="ltr"?"Right-to-Left":"Left-to-Right"]})]}),e.jsx(ae,{})]})})};U.__RAW__=`import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
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
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <SidePanel {...panelProps} origin="right" className={stylesOverride.panelContainer}>
      <SidePanel.ToggleButton {...controlProps} />
      <Flex cs={stylesOverride.panel}>
        <Heading size="small" hidden={!expanded ? true : undefined} {...labelProps}>
          Tasks Panel
        </Heading>
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
`;const A={viewport:o({height:h(320),backgroundColor:R.bg.alt.default}),panel:o({alignItems:"center",padding:f.md}),main:o({alignItems:"center",justifyContent:"center",flexDirection:"column",flex:1,flexBasis:"auto"})},K=()=>{const{direction:t,toggleDirection:n}=N(),{expanded:a,panelProps:i,labelProps:l,controlProps:c}=m();return e.jsx(L,{dir:t,children:e.jsxs(r,{cs:A.viewport,children:[e.jsxs(s,{...i,variant:"alternate",children:[e.jsx(s.ToggleButton,{...c}),e.jsx(r,{cs:A.panel,children:e.jsx(y,{size:"small",hidden:a?void 0:!0,...l,children:"Alternate Panel"})})]}),e.jsxs(r,{as:"main",cs:A.main,children:[e.jsx(x,{as:"p",typeLevel:"body.large",children:"Toggle the content direction"}),e.jsxs(F,{onClick:n,children:["Set to ",t==="ltr"?"Right-to-Left":"Left-to-Right"]})]})]})})};K.__RAW__=`import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
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
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewport}>
        <SidePanel {...panelProps} variant="alternate">
          <SidePanel.ToggleButton {...controlProps} />
          <Flex cs={stylesOverride.panel}>
            <Heading size="small" hidden={!expanded ? true : undefined} {...labelProps}>
              Alternate Panel
            </Heading>
          </Flex>
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
`;function Y(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...Z(),...t.components};return p||j("InformationHighlight",!1),p.Body||j("InformationHighlight.Body",!0),p.Icon||j("InformationHighlight.Icon",!0),p.Link||j("InformationHighlight.Link",!0),e.jsxs(e.Fragment,{children:[e.jsx(te,{of:se}),`
`,e.jsxs(n.h1,{id:"canvas-kit-side-panel-",children:["Canvas Kit Side Panel ",e.jsx(oe,{type:"deprecated"})]}),`
`,e.jsxs(p,{className:"sb-unstyled",variant:"caution",cs:{p:{marginBlock:0}},children:[e.jsx(p.Icon,{}),e.jsx(p.Body,{children:e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"}),` in Preview has been deprecated and will be removed in a future major version. Please
use `,e.jsx(n.code,{children:"SidePanel"})," in Labs instead."]})}),e.jsx(p.Link,{href:"https://workday.github.io/canvas-kit/?path=/docs/labs-side-panel--docs",children:e.jsx(n.p,{children:"View SidePanel Docs"})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"})," is a collapsible container that anchors to the left or right side of the screen."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://design.workday.com/components/containers/side-panel",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-preview-react
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"})," is composed of three parts:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The panel container"}),`
`,e.jsx(n.li,{children:"An accessible name (either on a visible element or hidden)"}),`
`,e.jsx(n.li,{children:"A toggle button to control the expand / collapse states"}),`
`]}),`
`,e.jsxs(n.p,{children:["Bidirectional support is built into ",e.jsx(n.code,{children:"SidePanel"}),`. As seen in the example below, CSS Flexbox flips the
page layout and the panel's contents. `,e.jsx(n.code,{children:"SidePanel"}),` also has logic to flip the position and direction
of the `,e.jsx(n.code,{children:"ToggleButton"}),` as well as the direction of the expand / collapse animation. If you're using
CSS Flexbox for layouts and using the provided components, you shouldn't have to provide any custom
logic or styling for bidirecitonal support.`]}),`
`,e.jsx(d,{code:M}),`
`,e.jsx(n.h3,{id:"hidden-name",children:"Hidden Name"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"})," must always have an accessible label for both the HTML ",e.jsx(n.code,{children:"<section>"}),` container and the
`,e.jsx(n.code,{children:"ToggleButton"}),". The ",e.jsx(n.code,{children:"labelProps"}),` component must always be present in the DOM in order for the
`,e.jsx(n.code,{children:"panelProps"})," and ",e.jsx(n.code,{children:"controlProps"})," component labels to be assigned properly. A ",e.jsx(n.code,{children:"hidden"}),` attribute can
be applied to the `,e.jsx(n.code,{children:"labelProps"}),` component. In the example below, we are demonstrating the
`,e.jsx(n.code,{children:"AccessibleHide"}),` component that relies on CSS properties to visually hide text for screen readers
only.`]}),`
`,e.jsx(d,{code:W}),`
`,e.jsx(n.h3,{id:"alternate-variant",children:"Alternate Variant"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SidePanel"})," has one variant, ",e.jsx(n.code,{children:"alternate"}),`, which you can supply as a top-level prop. Default depth of
`,e.jsx(n.code,{children:"alternate"})," variant is 5, if ",e.jsx(n.code,{children:"alternate"}),` SidePanel has an overlay behavior the depth 6 should be
used (this case is covered in the Examples section).`]}),`
`,e.jsx(d,{code:K}),`
`,e.jsx(n.h3,{id:"external-control",children:"External Control"}),`
`,e.jsxs(n.p,{children:["Sometimes you'll want to control ",e.jsx(n.code,{children:"SidePanel"}),`'s' expand / collapse behavior from outside the
component. In that case, you can use the `,e.jsx(n.code,{children:"controlProps"})," supplied by the ",e.jsx(n.code,{children:"useSidePanel"})," hook."]}),`
`,e.jsx(n.h4,{id:"notes-about-accessibility",children:"Notes about accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"controlProps"})," object delivers ARIA attributes to a component under the following assumptions:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"The control is an icon button that does not already have an accessible name"}),`
`,e.jsxs(n.li,{children:["The control appears at (or near) the top of the expandable content in the ",e.jsx(n.code,{children:"SidePanel"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Spreading the ",e.jsx(n.code,{children:"controlProps"})," onto an external control can introduce serious accessibility issues:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"})," HTML ",e.jsx(n.code,{children:"id"}),` reference may become invalid when the SidePanel is collapsed, or when
the `,e.jsx(n.code,{children:"labelProps"})," component isn't present in the DOM."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"})," will change the name of ",e.jsx(n.code,{children:"controlProps"}),` component to the title of the
`,e.jsx(n.code,{children:"SidePanel"}),`. (This may be undesirable. For example, the "Show Side Panel" button will be
overwritten with the "Tasks Panel" heading.)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-expanded"})," won't make sense to screen reader users when the expanded ",e.jsx(n.code,{children:"SidePanel"}),` content
isn't logically following the control.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"}),` is unsupported by screen readers and will not allow users to navigate to the
controlled content.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["In the following example, the ",e.jsx(n.code,{children:"controlProps"}),` click handler function is passed down to the
`,e.jsx(n.code,{children:"SecondaryButton"})," and a toggle state was added to the button using the ",e.jsx(n.code,{children:"aria-pressed"})," property."]}),`
`,e.jsx(d,{code:z}),`
`,e.jsx(n.h3,{id:"right-origin",children:"Right Origin"}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.code,{children:"SidePanel"})," uses a ",e.jsx(n.code,{children:"left"})," origin. This sets the ",e.jsx(n.code,{children:"ToggleButton"}),`'s position and direction
as well as the direction of the animation. But you can set `,e.jsx(n.code,{children:"SidePanel"}),"'s origin to ",e.jsx(n.code,{children:'"right"'}),` to flip
these. As with the left-origin panel, all right-origin styles have bidirecitonal support.`]}),`
`,e.jsx(d,{code:U}),`
`,e.jsx(n.h3,{id:"always-open",children:"Always Open"}),`
`,e.jsxs(n.p,{children:["If you do not need ",e.jsx(n.code,{children:"SidePanel"}),"'s' expand / collapse behavior, you can simply omit the ",e.jsx(n.code,{children:"controlProps"}),`
and `,e.jsx(n.code,{children:"ToggleButton"}),"."]}),`
`,e.jsx(d,{code:$}),`
`,e.jsxs(n.p,{children:["The majority of ",e.jsx(n.code,{children:"SidePanel"}),`'s logic and funcitonality lives in this container component. Most of
this functionality has been described in the examples above, but there a couple specific callbacks
worth mentioning here.`]}),`
`,e.jsx(n.h3,{id:"onexpandedchange",children:"onExpandedChange"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"onExpandedChange"})," callback is called when the boolean ",e.jsx(n.code,{children:"expanded"}),` state is updated. This is a
handy way to hook into these updates to trigger side-effects. Below is an example:`]}),`
`,e.jsx(d,{code:V}),`
`,e.jsx(n.h3,{id:"onstatetransition",children:"onStateTransition"}),`
`,e.jsxs(n.p,{children:["While ",e.jsx(n.code,{children:"onExpandedChange"}),` works well for discrete boolean state changes, there may be occasions where
you also need transition states. In these situations, `,e.jsx(n.code,{children:"onStateTransition"}),` is a better fit. This
callback it called on all state transitions and returns the current transtion state. This can be one
of four `,e.jsx(n.code,{children:"SidePanelTransitionStates"}),", ",e.jsx(n.code,{children:"expanding"}),", ",e.jsx(n.code,{children:"expanded"}),", ",e.jsx(n.code,{children:"collapsing"}),", and ",e.jsx(n.code,{children:"collapsed"}),`. Below
is an example:`]}),`
`,e.jsx(d,{code:X}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(q,{name:"SidePanel",fileName:"/preview-react/"}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usesidepanel",children:"useSidePanel"}),`
`,e.jsx(q,{name:"useSidePanel",fileName:"/preview-react/"}),`
`,e.jsx(n.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(re,{file:"./cypress/component/SidePanelPreview.spec.tsx",name:"Side Panel"})]})}function ie(t={}){const{wrapper:n}={...Z(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(Y,{...t})}):Y(t)}function j(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const se={title:"Preview/Side Panel (Deprecated)",component:s,tags:["autodocs"],parameters:{docs:{page:ie}}},v={render:M},w={render:W},k={render:K},b={render:z},T={render:U},C={render:$},O={render:V},I={render:X};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: HiddenNameExample
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: AlternatePanelExample
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ExternalControlExample
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: RightOriginExample
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: AlwaysOpenExample
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: OnExpandedChangeExample
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: OnStateTransitionExample
}`,...I.parameters?.docs?.source}}};const zn=["Basic","HiddenName","AlternatePanel","ExternalControl","RightOrigin","AlwaysOpen","OnExpandedChange","OnStateTransition"];export{k as AlternatePanel,C as AlwaysOpen,v as Basic,b as ExternalControl,w as HiddenName,O as OnExpandedChange,I as OnStateTransition,T as RightOrigin,zn as __namedExportsOrder,se as default};
