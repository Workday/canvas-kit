import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as c}from"./index-3YbjYt95.js";import{ae as y}from"./index-ByKK2ZVj.js";import{E as C}from"./union-D4Npie0B.js";import"./index-IfJi-UCQ.js";import{c as g,h as d,a as u}from"./cs-CmRirKzJ.js";import{c as f}from"./components-d5ekN04B.js";import{T as h}from"./TertiaryButton-DKUjcWbc.js";import{P as k}from"./PrimaryButton-BgoAh-FZ.js";import{p as m}from"./px2rem-C0KbprIx.js";import{p as a,d as b,c as p,t as B,g as i}from"./index-jCBjnmNg.js";import"./iframe-B4egJ2yK.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-sIhpLqFT.js";import"./Svg-BEkl6RqF.js";import"./StatusIndicator-BH4xYMT4.js";import"./Text-B_9J6dtZ.js";import"./mergeStyles-BbM8eln0.js";import"./Box-BoBigmVy.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-D5XhsXiq.js";import"./grid-BMAUH4x5.js";import"./cornerShape-D4s9iH9i.js";import"./Card-C3YPv8PR.js";import"./ExternalHyperlink-BAP_ajky.js";import"./Hyperlink-DogG_b3k.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-Dq_wtC7v.js";import"./BaseButton-Cq0-Z1xK.js";import"./Button-Cji_lOEg.js";import"./lerna-Bw7zwFz3.js";import"./CanvasProvider-P3Lb2Rl1.js";import"./index-kj8ZfNNN.js";import"./Tooltip-DfuQ4oU_.js";import"./useTooltip-D9NUSYDV.js";import"./getTransformFromPlacement-C0brky5f.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-U3rCa1ez.js";import"./Popper-60Ht2BWw.js";import"./TypeLevelComponents-DDShjP3S.js";import"./ColorPicker-Cl-khmes.js";import"./ColorInput-40B_w6YB.js";import"./check-small-BqSDQIle.js";import"./TextInput-XGsJxoL2.js";import"./types-DXdjelYI.js";import"./FormField-Bet0BX5r.js";import"./check-Ds6vsrAM.js";import"./Expandable-DjUS88Ki.js";import"./Avatar-C5xvvNZK.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-s4ClsmXe.js";import"./Popup-jwoUED7-.js";import"./x-B1faap_l.js";import"./usePopupTarget-CiglE-au.js";import"./useInitialFocus-CLFzlfY2.js";import"./useReturnFocus-BiEDvkpe.js";import"./useFocusRedirect-CGyB5QUA.js";import"./Breadcrumbs-D3SRqBX_.js";import"./useOverflowListTarget-CCMwSaIK.js";import"./useListItemRegister-CkI4Pnda.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Gxy5lB3g.js";import"./OverflowTooltip-D-ZVvEYp.js";import"./useListItemSelect-Buc4Eu3l.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-EvLpNqv5.js";import"./Table-YrR-Iqiw.js";const w=g({minHeight:m(84),margin:m(12),position:"relative"}),I=u({base:{...B.subtext.md,backgroundColor:p.surface.default,borderBlockStart:`1px solid ${p.border.default}`,display:"flex",boxShadow:b[1],padding:a.lg,alignItems:"center",justifyContent:"space-between",position:"absolute",bottom:0,left:0,right:0,zIndex:99,transition:"transform 0.2s ease-out","@media (max-width: 450px)":{flexDirection:"column",alignItems:"stretch",textAlign:"center",padding:`${a.md} 0`}},modifiers:{isClosed:{true:{transform:"translateY(100%)"}}}}),S=u({base:{marginInline:i.md,"@media (max-width: 450px)":{"&:not(:first-of-type)":{marginBlockStart:i.md,"> *":{flex:1}}}},modifiers:{isRow:{true:{display:"flex","> *":{marginInlineStart:i.md}}}}}),j=f("div")({displayName:"CookieBanner.Item",Component:({isRow:t,...n},o,r)=>e.jsx(r,{ref:o,...d(n,S({isRow:t}))})}),s=f("div")({displayName:"CookieBanner",Component:({isClosed:t,...n},o,r)=>e.jsx(r,{ref:o,...d(n,I({isClosed:t}))}),subComponents:{Item:j}}),x=()=>e.jsx("div",{className:w,children:e.jsxs(s,{isClosed:!1,children:[e.jsx(s.Item,{children:`We use cookies to ensure that we give you the best experience on our website. 
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
`,e.jsx(C,{code:x})]})}function Ve(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{Ve as default};
