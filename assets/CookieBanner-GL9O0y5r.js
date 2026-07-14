import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as c}from"./index-3YbjYt95.js";import{ae as y}from"./index-B7XXfe5h.js";import{E as C}from"./union-CniGnSAc.js";import"./index-IfJi-UCQ.js";import{c as g,h as d,a as u}from"./cs-rfTTo7Bg.js";import{c as f}from"./components-BC9eTosh.js";import{T as h}from"./TertiaryButton-UTJ3hnV1.js";import{P as k}from"./PrimaryButton-D5v02UCx.js";import{p as m}from"./px2rem-C0KbprIx.js";import{p as a,d as b,c as p,t as B,g as i}from"./index-5dfzm_kn.js";import"./iframe-JaH-B26f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-gewk2tVd.js";import"./Svg-pWcUwgKK.js";import"./StatusIndicator-C4zEgVH_.js";import"./Text-DCWkG9qZ.js";import"./mergeStyles-BwvcP3zW.js";import"./Box-Berqkg0s.js";import"./index-CjGALPG9.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-kD_kQJ4m.js";import"./grid-L1dbhipu.js";import"./Card-CK3I0y_S.js";import"./ExternalHyperlink-DDmFkxfC.js";import"./Hyperlink-CiQjeIy9.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BSYdFPfk.js";import"./BaseButton-DI27SrsM.js";import"./Button-CSRY-Hl0.js";import"./lerna-DBkctN9J.js";import"./CanvasProvider-ZQW06Ivv.js";import"./index-5mrAZJYD.js";import"./Tooltip-DPxT0V2w.js";import"./useTooltip-ZpvAqNNz.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-uv5na6lZ.js";import"./Popper-DUTAU7yt.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bp1jFajF.js";import"./ColorPicker-CM2304tH.js";import"./ColorInput-D3n6ss_X.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-CvOUSrVy.js";import"./types-DXdjelYI.js";import"./FormField-DBJ6kUEd.js";import"./check-Bvurkvei.js";import"./Expandable-BZ-zBmSc.js";import"./Avatar-6NXN_wUR.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DJ3Ch2nb.js";import"./Popup-CjJtetoF.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BMD-7lNA.js";import"./useInitialFocus-BCQsnoIT.js";import"./useReturnFocus-42FhoN3N.js";import"./useFocusRedirect-C7USV4J8.js";import"./Breadcrumbs-DA3HxUJk.js";import"./useOverflowListTarget-upDRG8Jc.js";import"./useListItemSelect-kam_5bXK.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-FGPO3Mka.js";import"./OverflowTooltip-D71sFiRJ.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-D4H0wg8Z.js";import"./Table-Bjb3VJLc.js";const w=g({minHeight:m(84),margin:m(12),position:"relative"}),I=u({base:{...B.subtext.md,backgroundColor:p.surface.default,borderBlockStart:`1px solid ${p.border.default}`,display:"flex",boxShadow:b[1],padding:a.lg,alignItems:"center",justifyContent:"space-between",position:"absolute",bottom:0,left:0,right:0,zIndex:99,transition:"transform 0.2s ease-out","@media (max-width: 450px)":{flexDirection:"column",alignItems:"stretch",textAlign:"center",padding:`${a.md} 0`}},modifiers:{isClosed:{true:{transform:"translateY(100%)"}}}}),S=u({base:{marginInline:i.md,"@media (max-width: 450px)":{"&:not(:first-of-type)":{marginBlockStart:i.md,"> *":{flex:1}}}},modifiers:{isRow:{true:{display:"flex","> *":{marginInlineStart:i.md}}}}}),j=f("div")({displayName:"CookieBanner.Item",Component:({isRow:t,...n},o,r)=>e.jsx(r,{ref:o,...d(n,S({isRow:t}))})}),s=f("div")({displayName:"CookieBanner",Component:({isClosed:t,...n},o,r)=>e.jsx(r,{ref:o,...d(n,I({isClosed:t}))}),subComponents:{Item:j}}),x=()=>e.jsx("div",{className:w,children:e.jsxs(s,{isClosed:!1,children:[e.jsx(s.Item,{children:`We use cookies to ensure that we give you the best experience on our website. 
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
