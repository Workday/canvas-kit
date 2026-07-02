import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as b}from"./index-3YbjYt95.js";import{ae as R}from"./index-BH6-T5Fm.js";import{E as s,c as _}from"./union-DR2Z0s37.js";import{e as j}from"./index-IfJi-UCQ.js";import{L as r}from"./LoadingDots-7BY7FcjH.js";import{C as I}from"./CanvasProvider-Cat-zekw.js";import{F as E}from"./Flex-D43wiz_3.js";import{c as i,a as L}from"./cs-rfTTo7Bg.js";import{S as T}from"./SecondaryButton-D21U7TXs.js";import{A as W}from"./AriaLiveRegion-DBWugjb-.js";import{A as B}from"./AccessibleHide-CzUnyX4s.js";import{p as O,c as p,g as h,s as $}from"./index-5dfzm_kn.js";import{a as S}from"./index-5mrAZJYD.js";import{G as M}from"./Graphic-iOMVA11Q.js";import{p as C}from"./px2rem-C0KbprIx.js";import"./iframe-RxBVwp_9.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B1B40VHJ.js";import"./Svg-B1oD29TK.js";import"./components-BqmIVDob.js";import"./StatusIndicator-Cm6b5U4i.js";import"./Text-D8J8K_1c.js";import"./mergeStyles-C1JfmJPH.js";import"./Box-CJXmlKLo.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CrUgoYEh.js";import"./grid-JWGbC98F.js";import"./Card-BAZTDQ08.js";import"./ExternalHyperlink-COY7uH1o.js";import"./Hyperlink-DM9nt0cU.js";import"./external-link-BZdacz1K.js";import"./lerna-DYfSuDO-.js";import"./Tooltip-KF7CDyyD.js";import"./useTooltip-BAcHo7bk.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CGAh7luF.js";import"./Popper-DvolcCfW.js";import"./TertiaryButton-8Oz2X5p2.js";import"./BaseButton-CWdtGLox.js";import"./Button-CzlJSUFG.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-8ikVfi4T.js";import"./ColorPicker-ymS550hz.js";import"./ColorInput-B4443PlB.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-BPKs8XRx.js";import"./types-DXdjelYI.js";import"./FormField-DTwmrFCP.js";import"./check-Bvurkvei.js";import"./Expandable-UqH_awct.js";import"./Avatar-CcIhLJWM.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DTKoYaho.js";import"./Popup-DnNjYX6x.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BAdISRT5.js";import"./useInitialFocus-DOJx7Wga.js";import"./useReturnFocus-Bl9ijLih.js";import"./useFocusRedirect-Dt5zlBE3.js";import"./Breadcrumbs-Cqwjwy56.js";import"./useOverflowListTarget-DvPXkaQq.js";import"./useListItemSelect-DyeyZH9P.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-V8lePgxC.js";import"./OverflowTooltip-CXGK4oOq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-C3oC02Mn.js";const g=()=>e.jsx(r,{});g.__RAW__=`import React from 'react';

import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

export const Basic = () => {
  return <LoadingDots />;
};
`;const u=()=>e.jsx(I,{dir:"rtl",children:e.jsx(r,{})});u.__RAW__=`import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <LoadingDots />
    </CanvasProvider>
  );
};
`;const k={parentContainer:i({gap:h.md}),loadingStyles:i({backgroundColor:p.accent.muted.default,padding:O.sm})},y=()=>{const[o,t]=j.useState("idle");j.useEffect(()=>{const D=setTimeout(()=>{o==="loading"&&t("success")},4e3);return()=>{clearTimeout(D)}},[o]);const A=()=>{t("loading")};return e.jsxs(E,{cs:k.parentContainer,children:[e.jsx(T,{onClick:A,children:"Start"}),e.jsxs(W,{"aria-label":"Loading",children:[o==="loading"&&e.jsx(r,{cs:k.loadingStyles,role:"img",variant:"inverse","aria-label":"Please wait..."}),o==="success"&&e.jsx(B,{children:"Complete."})]})]})};y.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainer: createStyles({
    gap: system.gap.md,
  }),
  loadingStyles: createStyles({
    backgroundColor: system.color.accent.muted.default,
    padding: system.padding.sm,
  }),
};

export const Accessible = () => {
  const [loadingState, setLoadingState] = React.useState('idle');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingState === 'loading') {
        setLoadingState('success');
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [loadingState]);

  const handleLoad = () => {
    setLoadingState('loading');
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <SecondaryButton onClick={handleLoad}>Start</SecondaryButton>
      <AriaLiveRegion aria-label="Loading">
        {loadingState === 'loading' && (
          <LoadingDots
            cs={styleOverrides.loadingStyles}
            role="img"
            variant="inverse"
            aria-label="Please wait..."
          />
        )}
        {loadingState === 'success' && <AccessibleHide>Complete.</AccessibleHide>}
      </AriaLiveRegion>
    </Flex>
  );
};
`;const N={parentContainer:i({display:"flex",gap:h.md})},P=L({base:{borderRadius:$.full,backgroundColor:p.surface.contrast.strong,height:S,width:S,alignItems:"center",justifyContent:"center",display:"flex"}}),x=()=>e.jsx("div",{className:N.parentContainer,children:e.jsx(r,{variant:"inverse",cs:P()})});x.__RAW__=`import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainer: createStyles({
    display: 'flex',
    gap: system.gap.md,
  }),
};

const loadingStencil = createStencil({
  base: {
    borderRadius: system.shape.full,
    backgroundColor: system.color.surface.contrast.strong,
    height: base.size1000,
    width: base.size1000,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});

export const CustomShape = () => {
  return (
    <div className={styleOverrides.parentContainer}>
      <LoadingDots variant="inverse" cs={loadingStencil()} />
    </div>
  );
};
`;const F={parentContainer:i({display:"flex",gap:h.md})},f=()=>e.jsx("div",{className:F.parentContainer,children:e.jsx(r,{loadingDotColor:p.brand.fg.primary.default,animationDurationMs:"60ms"})});f.__RAW__=`import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainer: createStyles({
    display: 'flex',
    gap: system.gap.md,
  }),
};

export const CustomColorAndAnimation = () => {
  return (
    <div className={styleOverrides.parentContainer}>
      <LoadingDots
        loadingDotColor={system.color.brand.fg.primary.default}
        animationDurationMs="60ms"
      />
    </div>
  );
};
`;const H=L({base:{background:p.surface.overlay.scrim,alignItems:"center",justifyContent:"center",display:"flex",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%"}}),z=i({position:"relative",width:C(200),height:C(200)}),v=()=>e.jsxs("div",{className:z,children:[e.jsx(r,{variant:"inverse",cs:H()}),e.jsx(M,{alt:"A magnifying glass",width:200,src:{url:"https://picsum.photos/200"},srcset:"https://picsum.photos/200 200w, https://picsum.photos/200 200w, https://picsum.photos/800 800w, https://picsum.photos/1200 1200w"})]});v.__RAW__=`import {Graphic} from '@workday/canvas-kit-react/icon';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const loadingStencil = createStencil({
  base: {
    background: system.color.surface.overlay.scrim,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
  },
});

const containerStyles = createStyles({
  position: 'relative',
  width: px2rem(200),
  height: px2rem(200),
});

export const Inverse = () => {
  return (
    <div className={containerStyles}>
      <LoadingDots variant="inverse" cs={loadingStencil()} />
      <Graphic
        alt="A magnifying glass"
        width={200}
        src={{
          url: 'https://picsum.photos/200',
        }}
        srcset="https://picsum.photos/200 200w, https://picsum.photos/200 200w, https://picsum.photos/800 800w, https://picsum.photos/1200 1200w"
      />
    </div>
  );
};
`;function w(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...b(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(R,{of:U}),`
`,e.jsx(t.h1,{id:"canvas-kit-loading-dots",children:"Canvas Kit Loading Dots"}),`
`,e.jsx(t.p,{children:`Loading Dots make users aware that content is currently being loaded, processing, or that change
will occur on the page.`}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://canvas.workdaydesign.com/components/indicators/loading-dots/",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(t.p,{children:"Use Loading Dots to identify when a specific area of the page is loading (i.e. the content within a card)."}),`
`,e.jsx(s,{code:g}),`
`,e.jsx(t.h3,{id:"inverse-variant",children:"Inverse Variant"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:'variant="inverse"'})," prop when the loading dots are on a dark background or image."]}),`
`,e.jsx(s,{code:v}),`
`,e.jsx(t.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,e.jsx(s,{code:u}),`
`,e.jsx(t.h3,{id:"custom-shape",children:"Custom Shape"}),`
`,e.jsx(s,{code:x}),`
`,e.jsx(t.h3,{id:"custom-color-and-animation",children:"Custom Color and Animation"}),`
`,e.jsx(s,{code:f}),`
`,e.jsx(t.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(t.p,{children:["Loading Dots supports custom styling via the ",e.jsx(t.code,{children:"cs"}),` prop. For more information, check our
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsxs(t.p,{children:["Custom styling is also supported through the ",e.jsx(t.a,{href:"#props",children:"Loading Dots documented props below"}),"."]}),`
`,e.jsx(t.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:[`Sometimes, letting users know when content has finished loading is just as important as asking users
to "please wait" while content is loading. The disappearance of an animation is information that
might need description. In this example, we are using `,e.jsx(t.code,{children:"AriaLiveRegion"})," and ",e.jsx(t.code,{children:"AccessibleHide"}),`
components included in Canvas to describe both the appearance and disappearance of `,e.jsx(t.code,{children:"LoadingDots"}),"."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"When idle, render an empty live region"}),`
`,e.jsxs(t.li,{children:["When loading, render ",e.jsx(t.code,{children:"LoadingDots"})," inside the live region,"]}),`
`,e.jsxs(t.li,{children:["When complete, render ",e.jsx(t.code,{children:"AccessibleHide"}),' inside the live region expressing "Complete!"']}),`
`,e.jsxs(t.li,{children:["We can assign a name to ",e.jsx(t.code,{children:"AriaLiveRegion"})," component by passing in ",e.jsx(t.code,{children:'aria-label="Loading"'})]}),`
`,e.jsxs(t.li,{children:["We can declare ",e.jsx(t.code,{children:"LoadingDots"})," a labeled graphic by passing ",e.jsx(t.code,{children:'role="img"'}),` and
`,e.jsx(t.code,{children:'aria-label="Please wait..."'})," into the component"]}),`
`]}),`
`,e.jsx(s,{code:y}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(_,{name:"LoadingDots",fileName:"/react/"})]})}function G(o={}){const{wrapper:t}={...b(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(w,{...o})}):w(o)}const U={title:"Components/Indicators/Loading Dots",component:r,tags:["autodocs"],parameters:{docs:{page:G}}},a={render:g},n={render:u},c={render:y},d={render:x},l={render:f},m={render:v};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: AccessibleExample
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: CustomShapeExample
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: CustomColorAndAnimationExample
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: InverseExample
}`,...m.parameters?.docs?.source}}};const vt=["Basic","RTL","Accessible","CustomShape","CustomColorAndAnimation","Inverse"];export{c as Accessible,a as Basic,l as CustomColorAndAnimation,d as CustomShape,m as Inverse,n as RTL,vt as __namedExportsOrder,U as default};
