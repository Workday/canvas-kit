import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as W}from"./index-3YbjYt95.js";import{ae as N}from"./index-BSRpa7hw.js";import{E as o,c as K}from"./union-Bq_fV67W.js";import{e as s}from"./index-IfJi-UCQ.js";import{B as r}from"./Banner-DlzmSNP2.js";import{T as z}from"./Tooltip-BudaSkJa.js";import{s as P}from"./styled-BsZD6Etj.js";import{B as j}from"./Box-CWkwzNZI.js";import{b as a,c as H,h as U,a as O,f as Y,k as q}from"./cs-DvbI9OYs.js";import{C as g}from"./CanvasProvider-D16Zuzp0.js";import{A as V,k as F,K as G}from"./index-DKOKnxgv.js";import{F as J}from"./Flex-BkMcjleh.js";import{S as Q}from"./SecondaryButton-Bx4f9n21.js";import{c as Z}from"./useReturnFocus-aYhb8KiC.js";import{l as nn}from"./loop-CVTaP6Fy.js";import{u as en}from"./useTheme-DY7-Bclm.js";import{a as rn,g as L}from"./index-CYsyLHR7.js";import"./iframe-8Z9hyj8f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./px2rem-C0KbprIx.js";import"./components-BLZqCckY.js";import"./StatusIndicator-U7ucHK-B.js";import"./Text-7hsxTSvc.js";import"./mergeStyles-CkJ8NvhI.js";import"./flex-BpVYzPsg.js";import"./grid-COFwODL4.js";import"./Card-CYT1E1UX.js";import"./ExternalHyperlink-BSF-vMXy.js";import"./Hyperlink-p5yKhX3z.js";import"./external-link-Bfm4m86M.js";import"./lerna-BUmYmoMg.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./TertiaryButton-OzUplWoq.js";import"./BaseButton-CGvKmIsu.js";import"./Button-C6qfAYgQ.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-A6AqS-F4.js";import"./ColorPicker-Cj3xwnjd.js";import"./ColorInput-BG1qZf2V.js";import"./check-small-CEmhQ7AS.js";import"./index-dYq3mHEV.js";import"./TextInput-m8J5Siyi.js";import"./types-DXdjelYI.js";import"./FormField-BfuouWYS.js";import"./check-BG7HONvH.js";import"./Expandable-D9HGP5Kq.js";import"./Avatar-Czgyc0aL.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-E1OLV4AN.js";import"./Popup-og1nacMu.js";import"./x-BnLC6lG-.js";import"./Popper-C7XE30xe.js";import"./usePopupTarget-Dr3aQv5b.js";import"./useInitialFocus-Div5K5su.js";import"./useCloseOnEscape-CMzgaKMd.js";import"./useFocusRedirect-C0Fm-5_Z.js";import"./Breadcrumbs-DopxVY5N.js";import"./useOverflowListTarget-B6jukdWw.js";import"./useListItemSelect-Byv0QwGY.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CJ_9ofNm.js";import"./useTooltip-C8VhxzUk.js";import"./OverflowTooltip-fVEU-mtQ.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-BLIPrW4Z.js";import"./exclamation-circle-Be30iaM7.js";import"./exclamation-triangle-C8Vr-J7R.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";const b=()=>n.jsxs(r,{children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Warnings"}),n.jsx(r.ActionText,{children:"Show Details"})]});b.__RAW__=`import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';

export const ActionText = () => {
  return (
    <Banner>
      <Banner.Icon />
      <Banner.Label>3 Warnings</Banner.Label>
      <Banner.ActionText>Show Details</Banner.ActionText>
    </Banner>
  );
};
`;const v=()=>n.jsxs(r,{onClick:()=>console.log("clicked banner"),children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Warnings"}),n.jsx(r.ActionText,{})]});v.__RAW__=`import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';

export const Basic = () => {
  return (
    <Banner onClick={() => console.log('clicked banner')}>
      <Banner.Icon />
      <Banner.Label>3 Warnings</Banner.Label>
      <Banner.ActionText />
    </Banner>
  );
};
`;const S=()=>n.jsxs(r,{hasError:!0,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Errors"}),n.jsx(r.ActionText,{})]});S.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';

export const Error = () => {
  return (
    <Banner hasError={true}>
      <Banner.Icon />
      <Banner.Label>3 Errors</Banner.Label>
      <Banner.ActionText />
    </Banner>
  );
};
`;const w=()=>n.jsx(z,{title:"Warning",children:n.jsx(r,{width:"4em",children:n.jsx(r.Icon,{})})});w.__RAW__=`import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {styled} from '@workday/canvas-kit-react/common';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const IconBanner = () => {
  return (
    <Tooltip title="Warning">
      <Banner width="4em">
        <Banner.Icon />
      </Banner>
    </Tooltip>
  );
};
`;const tn=P(r)({position:"absolute",right:0}),T=()=>n.jsx(j,{height:64,children:n.jsxs(tn,{hasError:!0,isSticky:!0,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Errors"}),n.jsx(r.ActionText,{})]})});T.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';
import {styled} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

const StyledBanner = styled(Banner)({
  position: 'absolute',
  right: 0,
});

export const Sticky = () => {
  return (
    <Box height={64}>
      <StyledBanner hasError={true} isSticky={true}>
        <Banner.Icon />
        <Banner.Label>3 Errors</Banner.Label>
        <Banner.ActionText />
      </StyledBanner>
    </Box>
  );
};
`;const A=()=>{const t={canvas:{palette:{alert:{main:a(F),dark:a(V)}}}};return n.jsx(g,{theme:t,children:n.jsxs(r,{children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Items"}),n.jsx(r.ActionText,{})]})})};A.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {cssVar} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

export const ThemedAlert = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        alert: {
          main: cssVar(base.green600),
          dark: cssVar(base.green800),
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <Banner>
        <Banner.Icon />
        <Banner.Label>3 Items</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </CanvasProvider>
  );
};
`;const R=()=>{const t={canvas:{palette:{error:{main:a(F),dark:a(V),contrast:a(G)}}}};return n.jsx(g,{theme:t,children:n.jsxs(r,{hasError:!0,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Items"}),n.jsx(r.ActionText,{})]})})};R.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {cssVar} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

export const ThemedError = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        error: {
          main: cssVar(base.green600),
          dark: cssVar(base.green800),
          contrast: cssVar(base.red25),
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <Banner hasError={true}>
        <Banner.Icon />
        <Banner.Label>3 Items</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </CanvasProvider>
  );
};
`;const E=()=>{const t=s.useRef(null),e=()=>{Z(t.current)};return n.jsxs(J,{flexDirection:"column",gap:"xs",alignItems:"flex-start",children:[n.jsxs(r,{ref:t,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Warnings"}),n.jsx(r.ActionText,{})]}),n.jsx(Q,{onClick:e,children:"Focus Banner"})]})};E.__RAW__=`import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

export const RefForwarding = () => {
  const bannerRef = React.useRef<HTMLButtonElement>(null);

  const focusBanner = () => {
    changeFocus(bannerRef.current);
  };

  return (
    <Flex flexDirection="column" gap="xs" alignItems="flex-start">
      <Banner ref={bannerRef}>
        <Banner.Icon />
        <Banner.Label>3 Warnings</Banner.Label>
        <Banner.ActionText />
      </Banner>
      <SecondaryButton onClick={focusBanner}>Focus Banner</SecondaryButton>
    </Flex>
  );
};
`;const on=H({position:"absolute",right:0,overflow:"hidden"}),y=Y("width","rerun"),an=q({"0%":{transform:`translateX(${a(y.width)})`},"100%":{transform:`translateX(0 * ${a(y.rerun)})`}}),sn=O({base:{marginBlock:L.xs,marginInlineStart:L.xs,marginInlineEnd:0,animationName:an,animationDuration:".3s",animationTimingFunction:"ease-out"}}),I=()=>{const t=en(),e=s.useRef(null),$=s.useRef(null),[D,M]=s.useState(0),[k,X]=s.useState(1);return s.useLayoutEffect(()=>{const i=e.current.offsetWidth;M(t.canvas.direction==="rtl"?i*-1:i)},[t.canvas.direction,k]),n.jsx(j,{cs:{height:rn.xxl},children:n.jsx("div",{className:on,ref:$,children:n.jsx("div",{...U({},[sn(),y({width:`${D}px`,rerun:`${k}`})]),children:n.jsxs(r,{onClick:()=>X(i=>i+1),hasError:!0,isSticky:!0,ref:e,children:[n.jsx(r.Icon,{icon:nn}),n.jsx(r.Label,{children:"Click to run animation"}),n.jsx(r.ActionText,{})]})},k)})})};I.__RAW__=`import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {useTheme} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {
  createStencil,
  createStyles,
  createVars,
  cssVar,
  handleCsProp,
  keyframes,
} from '@workday/canvas-kit-styling';
import {loopIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  position: 'absolute',
  right: 0,
  overflow: 'hidden',
});
const stickyAnimationVars = createVars('width', 'rerun');
const stickAnimationKeyframes = keyframes({
  '0%': {
    transform: \`translateX(\${cssVar(stickyAnimationVars.width)})\`,
  },
  '100%': {
    transform: \`translateX(0 * \${cssVar(stickyAnimationVars.rerun)})\`,
  },
});

const stickyAnimationStencil = createStencil({
  base: {
    marginBlock: system.gap.xs,
    marginInlineStart: system.gap.xs,
    marginInlineEnd: 0,
    animationName: stickAnimationKeyframes,
    animationDuration: '.3s',
    animationTimingFunction: 'ease-out',
  },
});

export const StickyAnimation = () => {
  const theme = useTheme();
  const bannerRef = React.useRef<HTMLButtonElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [bannerWidth, setBannerWidth] = React.useState(0);

  const [rerun, setRerun] = React.useState(1); // Only needed for demo purposes

  React.useLayoutEffect(() => {
    const width = bannerRef.current.offsetWidth;
    setBannerWidth(theme.canvas.direction === 'rtl' ? width * -1 : width);
  }, [theme.canvas.direction, rerun]);

  return (
    <Box cs={{height: system.size.xxl}}>
      <div className={containerStyles} ref={containerRef}>
        <div
          key={rerun}
          {...handleCsProp({}, [
            stickyAnimationStencil(),
            stickyAnimationVars({width: \`\${bannerWidth}px\`, rerun: \`\${rerun}\`}),
          ])}
        >
          <Banner
            onClick={() => setRerun(r => r + 1)}
            hasError={true}
            isSticky={true}
            ref={bannerRef}
          >
            <Banner.Icon icon={loopIcon} />
            <Banner.Label>Click to run animation</Banner.Label>
            <Banner.ActionText />
          </Banner>
        </div>
      </div>
    </Box>
  );
};
`;const cn=P(r)({position:"absolute",right:0}),_=()=>n.jsx(g,{dir:"rtl",children:n.jsx(j,{height:64,children:n.jsxs(cn,{isSticky:!0,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 אזהרות"}),n.jsx(r.ActionText,{})]})})});_.__RAW__=`import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, styled} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

const StyledStickyBanner = styled(Banner)({
  position: 'absolute',
  right: 0,
});

export const StickyRTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Box height={64}>
        <StyledStickyBanner isSticky={true}>
          <Banner.Icon />
          <Banner.Label>3 אזהרות</Banner.Label>
          <Banner.ActionText />
        </StyledStickyBanner>
      </Box>
    </CanvasProvider>
  );
};
`;function C(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...W(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(N,{of:dn}),`
`,n.jsx(e.h1,{id:"canvas-kit-banner",children:"Canvas Kit Banner"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Banner"})," is a ",n.jsx(e.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`
used surface important information and feedback to the user about a task, action, or state.`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://design.workday.com/components/indicators/banners",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"basic-example",children:"Basic Example"}),`
`,n.jsxs(e.p,{children:["Use the children of ",n.jsx(e.code,{children:"Banner.Label"})," to set the main text for the ",n.jsx(e.code,{children:"Banner"}),"."]}),`
`,n.jsx(o,{code:v}),`
`,n.jsx(e.h3,{id:"action-text",children:"Action Text"}),`
`,n.jsxs(e.p,{children:["Use the children of ",n.jsx(e.code,{children:"Banner.ActionText"})," to customize the action text contained in the ",n.jsx(e.code,{children:"Banner"}),`. The
text has default value of `,n.jsx(e.code,{children:"View All"}),"."]}),`
`,n.jsx(o,{code:b}),`
`,n.jsx(e.h3,{id:"error-type",children:"Error Type"}),`
`,n.jsxs(e.p,{children:["Set the ",n.jsx(e.code,{children:"hasError"})," prop of the ",n.jsx(e.code,{children:"Banner"}),` to designate the severity of the message presented in the
banner. This will change the defualt icon to `,n.jsx(e.code,{children:"exclamationCircleIcon"}),"."]}),`
`,n.jsx(o,{code:S}),`
`,n.jsx(e.h3,{id:"icon-banner",children:"Icon Banner"}),`
`,n.jsxs(e.p,{children:["When only using an icon in the ",n.jsx(e.code,{children:"Banner"}),", use our ",n.jsx(e.code,{children:"Tooltip"}),` component to both show a visible text
alternative, and assign an `,n.jsx(e.code,{children:"aria-label"})," string to the child ",n.jsx(e.code,{children:"Banner"}),"."]}),`
`,n.jsx(o,{code:w}),`
`,n.jsx(e.h3,{id:"sticky",children:"Sticky"}),`
`,n.jsxs(e.p,{children:["Set the ",n.jsx(e.code,{children:"isSticky"})," prop of the ",n.jsx(e.code,{children:"Banner"}),` to display it along the right edge of the page. When true,
the `,n.jsx(e.code,{children:"Banner.ActionText"}),` will be hidden. Some basic styles will be applied, but you will still need
to manually set the css `,n.jsx(e.code,{children:"position"})," value."]}),`
`,n.jsx(o,{code:T}),`
`,n.jsxs(e.p,{children:["You can use keyframes to animate the ",n.jsx(e.code,{children:"Banner"})," in."]}),`
`,n.jsx(o,{code:I}),`
`,n.jsx(e.h3,{id:"refforwarding",children:"RefForwarding"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Banner"})," supports ref forwarding. It will forward ref to its underlying button element."]}),`
`,n.jsx(o,{code:E}),`
`,n.jsx(e.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,n.jsx(e.p,{children:"Banner supports right-to-left languages when specified in the CanvasProvider theme."}),`
`,n.jsx(o,{code:_}),`
`,n.jsx(e.h3,{id:"themed-banners",children:"Themed Banners"}),`
`,n.jsxs(e.p,{children:["Banners use the ",n.jsx(e.code,{children:"useThemedPalette"})," hook for themeing. By default, your alert theme is used. ",n.jsx(e.code,{children:"main"}),`
will be used for the background, `,n.jsx(e.code,{children:"dark"})," for the hover background, and ",n.jsx(e.code,{children:"contrast"})," for the text."]}),`
`,n.jsx(o,{code:A}),`
`,n.jsxs(e.p,{children:["If you set the ",n.jsx(e.code,{children:"hasError"})," prop, the banner will use your error theme."]}),`
`,n.jsx(o,{code:R}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(K,{name:"Banner",fileName:"/react/"})]})}function mn(t={}){const{wrapper:e}={...W(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(C,{...t})}):C(t)}const dn={title:"Components/Indicators/Banner",component:r,tags:["autodocs"],parameters:{docs:{page:mn}}},c={render:b},m={render:v},d={render:S},l={render:w},p={render:T},h={render:A},x={render:R},u={render:E},f={render:I},B={render:_};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ActionTextExample
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: IconBannerExample
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: StickyExample
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ThemedAlertExample
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ThemedErrorExample
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: StickyAnimationExample
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: StickyRTLExample
}`,...B.parameters?.docs?.source}}};const Xe=["ActionText","Basic","Error","IconBanner","Sticky","ThemedAlert","ThemedError","RefForwarding","StickyAnimation","StickyRTL"];export{c as ActionText,m as Basic,d as Error,l as IconBanner,u as RefForwarding,p as Sticky,f as StickyAnimation,B as StickyRTL,h as ThemedAlert,x as ThemedError,Xe as __namedExportsOrder,dn as default};
