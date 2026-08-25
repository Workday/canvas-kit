import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as d}from"./index-Bp1vAbJe.js";import{E as c}from"./union-Csj3bYC6.js";import"./index-IfJi-UCQ.js";import{c as l}from"./components-DIXe_rXl.js";import{B as a}from"./Box-BwSubRt6.js";import{h as m,c as h}from"./cs-CmRirKzJ.js";import{d as x,p as u,s as y}from"./index-DE-upP0k.js";import"./iframe-DUz6TVNi.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bc5FTqSz.js";import"./Svg-CDh6670a.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-BmiiDMjj.js";import"./Text-Cdlm4YRv.js";import"./mergeStyles-C3mqUtmC.js";import"./flex-1BnMPfFj.js";import"./grid-DeBl5Muz.js";import"./cornerShape-DO7zpd3K.js";import"./Card-CLZCJsGP.js";import"./ExternalHyperlink-ezvqZYmg.js";import"./Hyperlink-DAuEViNw.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-rEEjUScI.js";import"./BaseButton-D8zYHbxs.js";import"./Button-BuO9pq7_.js";import"./lerna-DjshtMtA.js";import"./CanvasProvider-BTLvcapT.js";import"./index-D-t2nnqG.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./Tooltip-DC2MIugw.js";import"./useTooltip-COXD4t91.js";import"./getTransformFromPlacement-CVuX70VQ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useCloseOnEscape-Pga8fWKh.js";import"./Popper-BRbe_tz9.js";import"./TertiaryButton-GhfgKIvV.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BFh8CuXH.js";import"./ColorPicker-B3hCckRJ.js";import"./ColorInput-T4JGhPAB.js";import"./check-small-BqSDQIle.js";import"./index-DX07rvw8.js";import"./TextInput-rOV0Sdab.js";import"./types-DXdjelYI.js";import"./FormField-Dq_eL3Ph.js";import"./check-Ds6vsrAM.js";import"./Expandable-BSMWoT5r.js";import"./Avatar-Hn8J_kPA.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Bg-DdY8-.js";import"./Popup-B3eOes-q.js";import"./x-B1faap_l.js";import"./usePopupTarget-KBNzPGUp.js";import"./useInitialFocus-DzxHd3wF.js";import"./useReturnFocus-CL2JvsSp.js";import"./useFocusRedirect-Cqk2nVwG.js";import"./Breadcrumbs-CRhNXeMi.js";import"./useOverflowListTarget-Cqie2m_G.js";import"./useListItemRegister-NCGS7HKL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DT2pOe49.js";import"./OverflowTooltip-CieFzTnq.js";import"./useListItemSelect-C_0Ny6tb.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CyhOkoOt.js";import"./Table-D9NIGuz3.js";const j=h({borderRadius:y.md,padding:u.md,boxShadow:x[1]}),f=l("div")({displayName:"CustomCard",Component:(r,e,p)=>o.jsx(a,{as:p,ref:e,...m(r,j)})}),s=()=>o.jsx(f,{children:"Hello, Box!"});s.__RAW__=`import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {createStyles, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

interface CustomCardProps extends BoxProps {
  // custom Card props go here
}

const customCardStyles = createStyles({
  borderRadius: system.shape.md,
  padding: system.padding.md,
  boxShadow: system.depth[1],
});

const CustomCard = createComponent('div')({
  displayName: 'CustomCard',
  Component: (props: CustomCardProps, ref, Element) => {
    return <Box as={Element} ref={ref} {...handleCsProp(props, customCardStyles)} />;
  },
});

export const Basic = () => {
  return <CustomCard>Hello, Box!</CustomCard>;
};
`;function n(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
`,o.jsx(e.h1,{id:"box",children:"Box"}),`
`,o.jsxs(e.blockquote,{children:[`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note"}),`: Some of the content on this page may be outdated and may not follow the latest CK style
guidance. Please use care when making updates and carefully review any changes. Prefer using the
`,o.jsx(e.code,{children:"createStyles"})," or ",o.jsx(e.code,{children:"createStencil"}),` utilities along with the latest design tokens to set styles.
This page will be updated soon.`]}),`
`]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Box"}),` is a primitive component that provides a common, ergonomic API around Canvas design tokens. It
is highly flexible, and its primary purpose is to build other components.`]}),`
`,o.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,o.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(e.h3,{id:"basic-example",children:"Basic Example"}),`
`,o.jsx(c,{code:s}),`
`,o.jsx(e.h2,{id:"props",children:"Props"}),`
`,o.jsxs(e.h3,{id:"the-as-prop",children:["The ",o.jsx(e.code,{children:"As"})," Prop"]}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"as"}),` prop allows you to override the underlying element of a component or combine it with
another component. By default, `,o.jsx(e.code,{children:"Box"})," will render a ",o.jsx(e.code,{children:"div"}),` element, but sometimes that's not what you
want. Below, we have a `,o.jsx(e.code,{children:"Box"}),` that we want to render as a semantic anchor element. The most
noticeable transformation is that `,o.jsx(e.code,{children:"Box"}),` renders as a link. But also notice that while it still
supports all `,o.jsx(e.code,{children:"BoxProps"})," such as ",o.jsx(e.code,{children:"padding"}),`, it also supports semantic anchor element props such as
`,o.jsx(e.code,{children:"href"}),"."]}),`
`,o.jsx(e.h3,{id:"style-props",children:"Style Props"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Box"})," exposes ",o.jsx(e.a,{href:"?path=/docs/features-style-props--docs",children:"style props"}),` that allow you
to modify styles in an ergonomic way across components. To learn more about individual sets of `,o.jsx(e.code,{children:"Box"}),`
style props, consult the lists below.`]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#background",children:"Background Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#border",children:"Border Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#color",children:"Color Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#depth",children:"Depth Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#flex-item",children:"Flex Item Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#grid-item",children:"Grid Item Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#layout",children:"Layout Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#other",children:"Other Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#position",children:"Position Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#space",children:"Space Style Props"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"?path=/docs/features-style-props--docs#text",children:"Text Style Props"})}),`
`]})]})}function C(r={}){const{wrapper:e}={...i(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}const g={title:"Components/Layout/Box",component:a,tags:["autodocs"],parameters:{docs:{page:C}}},t={render:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...t.parameters?.docs?.source}}};const $o=["Basic"];export{t as Basic,$o as __namedExportsOrder,g as default};
