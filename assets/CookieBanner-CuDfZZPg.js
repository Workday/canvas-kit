import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as c}from"./index-3YbjYt95.js";import{ae as y}from"./index-Ce1Wcj17.js";import{E as C}from"./union-DYG_1Dhz.js";import"./index-IfJi-UCQ.js";import{c as g,h as d,a as u}from"./cs-CmRirKzJ.js";import{c as f}from"./components-dzPj21Gy.js";import{T as h}from"./TertiaryButton-DO37jVwm.js";import{P as k}from"./PrimaryButton-4TCSUBdk.js";import{p as m}from"./px2rem-C0KbprIx.js";import{p as a,d as b,c as p,t as B,g as i}from"./index-jCBjnmNg.js";import"./iframe-DgE1WNGV.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CTUsj8TD.js";import"./Svg-DvDsbIKv.js";import"./StatusIndicator-HuVj55QL.js";import"./Text-BZ18Rj60.js";import"./mergeStyles-GqD3_A5P.js";import"./Box-DsxcKhHC.js";import"./index-DZtdzgZp.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BKEnktnP.js";import"./grid-B0yCnV-C.js";import"./cornerShape-JvYjpjdp.js";import"./Card-CIlF8weM.js";import"./ExternalHyperlink-B_3urMIC.js";import"./Hyperlink-BnhZ1iqR.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BshSgfsU.js";import"./BaseButton-B8gT3S4k.js";import"./Button--R7xcJ39.js";import"./lerna-BuNPLYrH.js";import"./CanvasProvider-BziuWf85.js";import"./index-kj8ZfNNN.js";import"./Tooltip-08h0EB5u.js";import"./useTooltip-D7ZZfUuA.js";import"./getTransformFromPlacement-D0JsQZex.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-TVPAhJIC.js";import"./Popper-BG2qD-j2.js";import"./TypeLevelComponents-BsU4u7Uu.js";import"./ColorPicker-Df_cFdIM.js";import"./ColorInput-CJnfkSTl.js";import"./check-small-BqSDQIle.js";import"./TextInput-CeruIY1A.js";import"./types-DXdjelYI.js";import"./FormField-Dek4O1p1.js";import"./check-Ds6vsrAM.js";import"./Expandable-BT4mmXjj.js";import"./Avatar-CuzFtv7p.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DqeJmrP8.js";import"./Popup-4CjerSEi.js";import"./x-B1faap_l.js";import"./usePopupTarget-BDnM4W41.js";import"./useInitialFocus-uIdhUuvF.js";import"./useReturnFocus-DnOTNNs9.js";import"./useFocusRedirect-CeQbwPD5.js";import"./Breadcrumbs-B6Ll38U3.js";import"./useOverflowListTarget-D8NNk0Fq.js";import"./useListItemRegister-C0ytVt37.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DQBNaCd9.js";import"./OverflowTooltip-7JBYHmIQ.js";import"./useListItemSelect-jQIl0zkF.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-49n7B--O.js";import"./Table-BAvZydaq.js";const w=g({minHeight:m(84),margin:m(12),position:"relative"}),I=u({base:{...B.subtext.md,backgroundColor:p.surface.default,borderBlockStart:`1px solid ${p.border.default}`,display:"flex",boxShadow:b[1],padding:a.lg,alignItems:"center",justifyContent:"space-between",position:"absolute",bottom:0,left:0,right:0,zIndex:99,transition:"transform 0.2s ease-out","@media (max-width: 450px)":{flexDirection:"column",alignItems:"stretch",textAlign:"center",padding:`${a.md} 0`}},modifiers:{isClosed:{true:{transform:"translateY(100%)"}}}}),S=u({base:{marginInline:i.md,"@media (max-width: 450px)":{"&:not(:first-of-type)":{marginBlockStart:i.md,"> *":{flex:1}}}},modifiers:{isRow:{true:{display:"flex","> *":{marginInlineStart:i.md}}}}}),j=f("div")({displayName:"CookieBanner.Item",Component:({isRow:t,...n},o,r)=>e.jsx(r,{ref:o,...d(n,S({isRow:t}))})}),s=f("div")({displayName:"CookieBanner",Component:({isClosed:t,...n},o,r)=>e.jsx(r,{ref:o,...d(n,I({isClosed:t}))}),subComponents:{Item:j}}),x=()=>e.jsx("div",{className:w,children:e.jsxs(s,{isClosed:!1,children:[e.jsx(s.Item,{children:`We use cookies to ensure that we give you the best experience on our website. 
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
