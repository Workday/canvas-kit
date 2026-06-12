import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as V}from"./index-3YbjYt95.js";import{ae as z}from"./index-B2C7rmFn.js";import{E as o,c as K}from"./union-eOGSKZEK.js";import{e as s}from"./index-IfJi-UCQ.js";import{B as r}from"./Banner-BuBW8zlx.js";import{T as H}from"./Tooltip-CzZcX2Y2.js";import{B as j}from"./Box-CLV6-Kkt.js";import{a as g,g as W}from"./index-5dfzm_kn.js";import{c as b,b as a,h as U,a as O,e as Y,k as q}from"./cs-rfTTo7Bg.js";import{C as v,u as G}from"./CanvasProvider-BVhQjIv1.js";import{C as $,k as F,M as J}from"./index-5mrAZJYD.js";import{F as Q}from"./Flex-DpKPWY6h.js";import{p as Z}from"./px2rem-C0KbprIx.js";import{S as nn}from"./SecondaryButton-CTF8Fi1r.js";import{c as en}from"./useReturnFocus-C7Sy0adc.js";import{l as rn}from"./loop-DQc7AX2j.js";import"./iframe-D4Efgt29.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DZBrYDtT.js";import"./Svg-BFncuboW.js";import"./components-BVJ_SRGC.js";import"./StatusIndicator-Bg1veQjl.js";import"./Text-BovdUPDw.js";import"./mergeStyles-C9x5j2GJ.js";import"./flex-DGHVjhOk.js";import"./grid-B6HHSpgk.js";import"./Card-L5C4mvPc.js";import"./ExternalHyperlink-BxqNEZXy.js";import"./Hyperlink-CGRoTyb9.js";import"./external-link-BZdacz1K.js";import"./lerna-DK4aXPLo.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./TertiaryButton-DHjKYrKv.js";import"./BaseButton-Dvq7agdb.js";import"./Button-B9VNs4ec.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DTiXkIGW.js";import"./ColorPicker-CDirxSmu.js";import"./ColorInput-8Ea4Hmx8.js";import"./check-small-C7Z-gSGs.js";import"./index-cOyo4dAr.js";import"./TextInput-Ceg3N6Pn.js";import"./types-DXdjelYI.js";import"./FormField-BL4AJQ6D.js";import"./check-Bvurkvei.js";import"./Expandable-DfLORrAy.js";import"./Avatar-D90D_7jU.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BKqT5D54.js";import"./Popup-Dk1z8kMN.js";import"./x-D9WWWeCM.js";import"./Popper-C6MnqFuv.js";import"./usePopupTarget-BHRI4C2s.js";import"./useInitialFocus-CrksNl1r.js";import"./useCloseOnEscape-DDGeg4uB.js";import"./useFocusRedirect-Cw1DKcYL.js";import"./Breadcrumbs-CdmUHHNT.js";import"./useOverflowListTarget-C_ltmWUW.js";import"./useListItemSelect-B-HnPEYj.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CK_KWNaR.js";import"./useTooltip-Bzvcg0O-.js";import"./OverflowTooltip-6ZCm7qHA.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-BAHHR8bZ.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";const w=()=>n.jsxs(r,{children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Warnings"}),n.jsx(r.ActionText,{children:"Show Details"})]});w.__RAW__=`import React from 'react';

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
`;const S=()=>n.jsxs(r,{onClick:()=>console.log("clicked banner"),children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Warnings"}),n.jsx(r.ActionText,{})]});S.__RAW__=`import React from 'react';

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
`;const T=()=>n.jsxs(r,{hasError:!0,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Errors"}),n.jsx(r.ActionText,{})]});T.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';

export const Error = () => {
  return (
    <Banner hasError={true}>
      <Banner.Icon />
      <Banner.Label>3 Errors</Banner.Label>
      <Banner.ActionText />
    </Banner>
  );
};
`;const A=()=>n.jsx(H,{title:"Warning",children:n.jsx(r,{width:"4em",children:n.jsx(r.Icon,{})})});A.__RAW__=`import React from 'react';

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
`;const tn=b({position:"absolute",right:0}),R=()=>n.jsx(j,{cs:{height:g.xxl},children:n.jsxs(r,{hasError:!0,isSticky:!0,cs:tn,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Errors"}),n.jsx(r.ActionText,{})]})});R.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  position: 'absolute',
  right: 0,
});

export const Sticky = () => {
  return (
    <Box cs={{height: system.size.xxl}}>
      <Banner hasError={true} isSticky={true} cs={containerStyles}>
        <Banner.Icon />
        <Banner.Label>3 Errors</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </Box>
  );
};
`;const E=()=>{const t={canvas:{palette:{alert:{main:a(F),dark:a($)}}}};return n.jsx(v,{theme:t,children:n.jsxs(r,{children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Items"}),n.jsx(r.ActionText,{})]})})};E.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';
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
`;const I=()=>{const t={canvas:{palette:{error:{main:a(F),dark:a($),contrast:a(J)}}}};return n.jsx(v,{theme:t,children:n.jsxs(r,{hasError:!0,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Items"}),n.jsx(r.ActionText,{})]})})};I.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';
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
`;const _=()=>{const t=s.useRef(null),e=()=>{en(t.current)};return n.jsxs(Q,{cs:{gap:Z(12),alignItems:"flex-start",flexDirection:"column"},children:[n.jsxs(r,{ref:t,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 Warnings"}),n.jsx(r.ActionText,{})]}),n.jsx(nn,{onClick:e,children:"Focus Banner"})]})};_.__RAW__=`import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {px2rem} from '@workday/canvas-kit-styling';

export const RefForwarding = () => {
  const bannerRef = React.useRef<HTMLButtonElement>(null);

  const focusBanner = () => {
    changeFocus(bannerRef.current);
  };

  return (
    <Flex cs={{gap: px2rem(12), alignItems: 'flex-start', flexDirection: 'column'}}>
      <Banner ref={bannerRef}>
        <Banner.Icon />
        <Banner.Label>3 Warnings</Banner.Label>
        <Banner.ActionText />
      </Banner>
      <SecondaryButton onClick={focusBanner}>Focus Banner</SecondaryButton>
    </Flex>
  );
};
`;const on=b({position:"absolute",right:0,overflow:"hidden"}),B=Y("width","rerun"),an=q({"0%":{transform:`translateX(${a(B.width)})`},"100%":{transform:`translateX(0 * ${a(B.rerun)})`}}),sn=O({base:{marginBlock:W.xs,marginInlineStart:W.xs,marginInlineEnd:0,animationName:an,animationDuration:".3s",animationTimingFunction:"ease-out"}}),L=()=>{const t=G(),e=s.useRef(null),D=s.useRef(null),[M,X]=s.useState(0),[y,N]=s.useState(1);return s.useLayoutEffect(()=>{const i=e.current.offsetWidth;X(t.canvas.direction==="rtl"?i*-1:i)},[t.canvas.direction,y]),n.jsx(j,{cs:{height:g.xxl},children:n.jsx("div",{className:on,ref:D,children:n.jsx("div",{...U({},[sn(),B({width:`${M}px`,rerun:`${y}`})]),children:n.jsxs(r,{onClick:()=>N(i=>i+1),hasError:!0,isSticky:!0,ref:e,children:[n.jsx(r.Icon,{icon:rn}),n.jsx(r.Label,{children:"Click to run animation"}),n.jsx(r.ActionText,{})]})},y)})})};L.__RAW__=`import React from 'react';

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
`;const cn=b({position:"absolute",right:0}),C=()=>n.jsx(v,{dir:"rtl",children:n.jsx(j,{cs:{height:g.xxl},children:n.jsxs(r,{isSticky:!0,cs:cn,children:[n.jsx(r.Icon,{}),n.jsx(r.Label,{children:"3 אזהרות"}),n.jsx(r.ActionText,{})]})})});C.__RAW__=`import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  position: 'absolute',
  right: 0,
});

export const StickyRTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Box cs={{height: system.size.xxl}}>
        <Banner isSticky={true} cs={containerStyles}>
          <Banner.Icon />
          <Banner.Label>3 אזהרות</Banner.Label>
          <Banner.ActionText />
        </Banner>
      </Box>
    </CanvasProvider>
  );
};
`;function P(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...V(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(z,{of:dn}),`
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
`,n.jsx(o,{code:S}),`
`,n.jsx(e.h3,{id:"action-text",children:"Action Text"}),`
`,n.jsxs(e.p,{children:["Use the children of ",n.jsx(e.code,{children:"Banner.ActionText"})," to customize the action text contained in the ",n.jsx(e.code,{children:"Banner"}),`. The
text has default value of `,n.jsx(e.code,{children:"View All"}),"."]}),`
`,n.jsx(o,{code:w}),`
`,n.jsx(e.h3,{id:"error-type",children:"Error Type"}),`
`,n.jsxs(e.p,{children:["Set the ",n.jsx(e.code,{children:"hasError"})," prop of the ",n.jsx(e.code,{children:"Banner"}),` to designate the severity of the message presented in the
banner. This will change the defualt icon to `,n.jsx(e.code,{children:"exclamationCircleIcon"}),"."]}),`
`,n.jsx(o,{code:T}),`
`,n.jsx(e.h3,{id:"icon-banner",children:"Icon Banner"}),`
`,n.jsxs(e.p,{children:["When only using an icon in the ",n.jsx(e.code,{children:"Banner"}),", use our ",n.jsx(e.code,{children:"Tooltip"}),` component to both show a visible text
alternative, and assign an `,n.jsx(e.code,{children:"aria-label"})," string to the child ",n.jsx(e.code,{children:"Banner"}),"."]}),`
`,n.jsx(o,{code:A}),`
`,n.jsx(e.h3,{id:"sticky",children:"Sticky"}),`
`,n.jsxs(e.p,{children:["Set the ",n.jsx(e.code,{children:"isSticky"})," prop of the ",n.jsx(e.code,{children:"Banner"}),` to display it along the right edge of the page. When true,
the `,n.jsx(e.code,{children:"Banner.ActionText"}),` will be hidden. Some basic styles will be applied, but you will still need
to manually set the css `,n.jsx(e.code,{children:"position"})," value."]}),`
`,n.jsx(o,{code:R}),`
`,n.jsxs(e.p,{children:["You can use keyframes to animate the ",n.jsx(e.code,{children:"Banner"})," in."]}),`
`,n.jsx(o,{code:L}),`
`,n.jsx(e.h3,{id:"refforwarding",children:"RefForwarding"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Banner"})," supports ref forwarding. It will forward ref to its underlying button element."]}),`
`,n.jsx(o,{code:_}),`
`,n.jsx(e.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,n.jsx(e.p,{children:"Banner supports right-to-left languages when specified in the CanvasProvider theme."}),`
`,n.jsx(o,{code:C}),`
`,n.jsx(e.h3,{id:"themed-banners",children:"Themed Banners"}),`
`,n.jsxs(e.p,{children:["Banners use the ",n.jsx(e.code,{children:"useThemedPalette"})," hook for themeing. By default, your alert theme is used. ",n.jsx(e.code,{children:"main"}),`
will be used for the background, `,n.jsx(e.code,{children:"dark"})," for the hover background, and ",n.jsx(e.code,{children:"contrast"})," for the text."]}),`
`,n.jsx(o,{code:E}),`
`,n.jsxs(e.p,{children:["If you set the ",n.jsx(e.code,{children:"hasError"})," prop, the banner will use your error theme."]}),`
`,n.jsx(o,{code:I}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(K,{name:"Banner",fileName:"/react/"})]})}function mn(t={}){const{wrapper:e}={...V(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(P,{...t})}):P(t)}const dn={title:"Components/Indicators/Banner",component:r,tags:["autodocs"],parameters:{docs:{page:mn}}},c={render:w},m={render:S},d={render:T},l={render:A},p={render:R},h={render:E},x={render:I},u={render:_},f={render:L},k={render:C};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: StickyRTLExample
}`,...k.parameters?.docs?.source}}};const Fe=["ActionText","Basic","Error","IconBanner","Sticky","ThemedAlert","ThemedError","RefForwarding","StickyAnimation","StickyRTL"];export{c as ActionText,m as Basic,d as Error,l as IconBanner,u as RefForwarding,p as Sticky,f as StickyAnimation,k as StickyRTL,h as ThemedAlert,x as ThemedError,Fe as __namedExportsOrder,dn as default};
