import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as c}from"./index-3YbjYt95.js";import{ae as y}from"./index-CSvw2ERc.js";import{E as C}from"./union-B2oVtxQj.js";import"./index-IfJi-UCQ.js";import{c as g,h as d,a as u}from"./cs-rfTTo7Bg.js";import{c as f}from"./components-DpSuslmU.js";import{T as h}from"./TertiaryButton-ByhN6lyv.js";import{P as k}from"./PrimaryButton-DFjCNuV2.js";import{p as m}from"./px2rem-C0KbprIx.js";import{p as a,d as b,c as p,t as B,g as i}from"./index-5dfzm_kn.js";import"./iframe-DdBxMp3v.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cl7xWrYQ.js";import"./Svg-C5I5ANGp.js";import"./StatusIndicator--GoNMKts.js";import"./Text-ChJY5-bw.js";import"./mergeStyles-C_QAuicJ.js";import"./Box-CsR_RSm3.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-jx6OknuD.js";import"./grid-CcdDoURF.js";import"./Card-XTiXx2KK.js";import"./ExternalHyperlink-Boscsj5x.js";import"./Hyperlink-BdNi6F1F.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-B2U_-e8k.js";import"./BaseButton-Cxong-p3.js";import"./Button-nWZozxrK.js";import"./lerna-DQp-x30A.js";import"./CanvasProvider-DpLmysIw.js";import"./index-B2vXpe_3.js";import"./Tooltip-Bl36ujuq.js";import"./useTooltip-C2YBnwHS.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-Cypl0byB.js";import"./Popper-C7B_3yZW.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-9vqCSdj5.js";import"./ColorPicker-CXARiljT.js";import"./ColorInput-Byz8Zax5.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-BqzMEWjb.js";import"./types-DXdjelYI.js";import"./FormField-CuMN0F-G.js";import"./check-Bvurkvei.js";import"./Expandable-Cr4FzK8l.js";import"./Avatar-CprVxumJ.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-Dw25Pzb0.js";import"./Popup-CDwSIdQW.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DQCsp6uf.js";import"./useInitialFocus-ciFwhbKv.js";import"./useReturnFocus-BuTlku1f.js";import"./useFocusRedirect-BCC-7TkN.js";import"./Breadcrumbs-DEpoDjrK.js";import"./useOverflowListTarget-C9VCjOPk.js";import"./useListItemSelect-Ci7QLXCM.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DbO2UTSI.js";import"./OverflowTooltip-MH-FLdNq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-BtxoTnIe.js";import"./Table-CPnsNSsD.js";const w=g({minHeight:m(84),margin:m(12),position:"relative"}),I=u({base:{...B.subtext.md,backgroundColor:p.surface.default,borderBlockStart:`1px solid ${p.border.default}`,display:"flex",boxShadow:b[1],padding:a.lg,alignItems:"center",justifyContent:"space-between",position:"absolute",bottom:0,left:0,right:0,zIndex:99,transition:"transform 0.2s ease-out","@media (max-width: 450px)":{flexDirection:"column",alignItems:"stretch",textAlign:"center",padding:`${a.md} 0`}},modifiers:{isClosed:{true:{transform:"translateY(100%)"}}}}),S=u({base:{marginInline:i.md,"@media (max-width: 450px)":{"&:not(:first-of-type)":{marginBlockStart:i.md,"> *":{flex:1}}}},modifiers:{isRow:{true:{display:"flex","> *":{marginInlineStart:i.md}}}}}),j=f("div")({displayName:"CookieBanner.Item",Component:({isRow:t,...n},o,r)=>e.jsx(r,{ref:o,...d(n,S({isRow:t}))})}),s=f("div")({displayName:"CookieBanner",Component:({isClosed:t,...n},o,r)=>e.jsx(r,{ref:o,...d(n,I({isClosed:t}))}),subComponents:{Item:j}}),x=()=>e.jsx("div",{className:w,children:e.jsxs(s,{isClosed:!1,children:[e.jsx(s.Item,{children:`We use cookies to ensure that we give you the best experience on our website. 
    If you continue without changing your settings, we'll assume that you are willing to receive cookies.`}),e.jsxs(s.Item,{isRow:!0,children:[e.jsx(h,{children:"Settings"}),e.jsx(k,{children:"Continue"})]})]})});x.__RAW__=`import * as React from 'react';

import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  createStencil,
  createStyles,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

interface BannerProps extends CSProps {
  isClosed?: boolean;
}

interface ItemProps {
  isRow?: boolean;
}

const exampleContainerStyles = createStyles({
  minHeight: px2rem(84),
  margin: px2rem(12),
  position: 'relative',
});

const bannerStyles = createStencil({
  base: {
    ...system.type.subtext.md,
    backgroundColor: system.color.surface.default,
    borderBlockStart: \`1px solid \${system.color.border.default}\`,
    display: 'flex',
    boxShadow: system.depth[1],
    padding: system.padding.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    transition: 'transform 0.2s ease-out',
    '@media (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      textAlign: 'center',
      padding: \`\${system.padding.md} 0\`,
    },
  },
  modifiers: {
    isClosed: {
      true: {
        transform: 'translateY(100%)',
      },
    },
  },
});

const bannerItemStyles = createStencil({
  base: {
    marginInline: system.gap.md,
    '@media (max-width: 450px)': {
      '&:not(:first-of-type)': {
        marginBlockStart: system.gap.md,
        '> *': {
          flex: 1,
        },
      },
    },
  },
  modifiers: {
    isRow: {
      true: {
        display: 'flex',
        '> *': {
          marginInlineStart: system.gap.md,
        },
      },
    },
  },
});

const CookieBannerItem = createComponent('div')({
  displayName: 'CookieBanner.Item',
  Component: ({isRow, ...elProps}: ItemProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elProps, bannerItemStyles({isRow}))} />
  ),
});

const CookieBanner = createComponent('div')({
  displayName: 'CookieBanner',
  Component: ({isClosed, ...props}: BannerProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(props, bannerStyles({isClosed}))} />
  ),
  subComponents: {Item: CookieBannerItem},
});

export const BasicExample = () => {
  const DefaultNotice = \`We use cookies to ensure that we give you the best experience on our website. 
    If you continue without changing your settings, we'll assume that you are willing to receive cookies.\`;

  return (
    <div className={exampleContainerStyles}>
      <CookieBanner isClosed={false}>
        <CookieBanner.Item>{DefaultNotice}</CookieBanner.Item>
        <CookieBanner.Item isRow>
          <TertiaryButton>Settings</TertiaryButton>
          <PrimaryButton>Continue</PrimaryButton>
        </CookieBanner.Item>
      </CookieBanner>
    </div>
  );
};
`;function l(t){const n={h1:"h1",h2:"h2",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Examples/Cookie Banner"}),`
`,e.jsx(n.h1,{id:"canvas-kit-examples",children:"Canvas Kit Examples"}),`
`,e.jsx(n.h2,{id:"cookiebanner",children:"CookieBanner"}),`
`,e.jsx(C,{code:x})]})}function Ue(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{Ue as default};
