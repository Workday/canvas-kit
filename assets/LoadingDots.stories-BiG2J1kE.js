import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as b}from"./index-3YbjYt95.js";import{ae as R}from"./index-DHWTzE-b.js";import{E as s,c as _}from"./union-D2wJ6UB9.js";import{e as j}from"./index-IfJi-UCQ.js";import{L as r}from"./LoadingDots-95OiodVz.js";import{C as I}from"./CanvasProvider-CbBD4ERB.js";import{F as E}from"./Flex-BKzcw9XF.js";import{c as i,a as L}from"./cs-DvbI9OYs.js";import{S as T}from"./SecondaryButton-oNuQLwcg.js";import{A as W}from"./AriaLiveRegion-CWuZfRzy.js";import{A as B}from"./AccessibleHide-Cq2Hwwgv.js";import{p as O,c as p,g as h,s as $}from"./index-CYsyLHR7.js";import{a as S}from"./index-DKOKnxgv.js";import{G as M}from"./Graphic-EeMx0STH.js";import{p as C}from"./px2rem-C0KbprIx.js";import"./iframe-DW6TaI9H.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./components-XIe_upcR.js";import"./StatusIndicator-vcmfDllK.js";import"./Text-8N36XMNq.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./Card-ywil38vv.js";import"./ExternalHyperlink-D7iOffGf.js";import"./Hyperlink-Cmi71RJg.js";import"./external-link-Bfm4m86M.js";import"./lerna-j6nxiWIt.js";import"./Tooltip-De1KsO5U.js";import"./useTooltip-p8F4NfJ4.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./TertiaryButton-DaDaXMfE.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./Button-Cp7fe3Zs.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Co8mkrwa.js";import"./ColorPicker-DLb8Wvti.js";import"./ColorInput-CnFM3Rd0.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-nG1V2_dd.js";import"./types-DXdjelYI.js";import"./FormField-U6jJIaHC.js";import"./check-BG7HONvH.js";import"./Expandable-BA5P8o_t.js";import"./Avatar-GkuXop0D.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-XwlCiuK9.js";import"./Popup-FGUZYXID.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-B7GfDsu7.js";import"./useInitialFocus-CouubvfO.js";import"./useReturnFocus-BgzhEoBI.js";import"./useFocusRedirect-ETf1Gakg.js";import"./Breadcrumbs-CIeTVgOV.js";import"./useOverflowListTarget-Esi-iaKN.js";import"./useListItemSelect-D10U8d3g.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Blawm5fT.js";import"./OverflowTooltip-B7jd-TXK.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-ZC-rbz82.js";const g=()=>e.jsx(r,{});g.__RAW__=`import React from 'react';

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
}`,...m.parameters?.docs?.source}}};const Ct=["Basic","RTL","Accessible","CustomShape","CustomColorAndAnimation","Inverse"];export{c as Accessible,a as Basic,l as CustomColorAndAnimation,d as CustomShape,m as Inverse,n as RTL,Ct as __namedExportsOrder,U as default};
