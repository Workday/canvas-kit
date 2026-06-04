import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as d}from"./index--z2N7-PX.js";import{E as c}from"./union-n-7dzONm.js";import"./index-IfJi-UCQ.js";import{c as l}from"./components-AX32LNYc.js";import{B as a}from"./Box-BPraYaO3.js";import{h as m,c as h}from"./cs-rfTTo7Bg.js";import{d as x,p as u,s as y}from"./index-5dfzm_kn.js";import"./iframe-Dx-CHDDP.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BoCe_uUf.js";import"./Svg-BEZEbUw_.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-DMeWFEeG.js";import"./Text-ypSk16zO.js";import"./mergeStyles-BAqoDFu5.js";import"./flex-BT-UZmhF.js";import"./grid-CpPShNRZ.js";import"./Card-CPSdbjS9.js";import"./ExternalHyperlink-Nfk04Z_Q.js";import"./Hyperlink-C4PAqEAN.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BGDiW78O.js";import"./BaseButton-DzH1x21V.js";import"./Button-BNyLbu3E.js";import"./lerna-CuyvlN3k.js";import"./CanvasProvider-DcYN8xn4.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-DHZOvFA4.js";import"./useTooltip-DUbvqIp1.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-D7zKS4W4.js";import"./Popper-JKy5AP_Q.js";import"./TertiaryButton-CpHRrsEL.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BJXiuS_X.js";import"./ColorPicker--BYu3XHM.js";import"./ColorInput-CUBvL6aw.js";import"./check-small-C7Z-gSGs.js";import"./index-N3xz2Kqy.js";import"./TextInput-B9QSeSVf.js";import"./types-DXdjelYI.js";import"./FormField-Chgp6eTg.js";import"./check-Bvurkvei.js";import"./Expandable-BEZ8kJZO.js";import"./Avatar-B-RlkJJo.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DBRggp1D.js";import"./Popup-CGhsNsKu.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DxD_7TBA.js";import"./useInitialFocus-BHYQXBWz.js";import"./useReturnFocus-judg8Hd8.js";import"./useFocusRedirect-Ctgd8e1U.js";import"./Breadcrumbs-CtgwqpfC.js";import"./useOverflowListTarget-Dyds5S33.js";import"./useListItemSelect-gTjksZb8.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CsL8z9ai.js";import"./OverflowTooltip-B8mlvvwE.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-9CW8KzBl.js";import"./Table-DYubww76.js";const j=h({borderRadius:y.md,padding:u.md,boxShadow:x[1]}),f=l("div")({displayName:"CustomCard",Component:(r,e,p)=>o.jsx(a,{as:p,ref:e,...m(r,j)})}),s=()=>o.jsx(f,{children:"Hello, Box!"});s.__RAW__=`import {createComponent} from '@workday/canvas-kit-react/common';
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
}`,...t.parameters?.docs?.source}}};const Uo=["Basic"];export{t as Basic,Uo as __namedExportsOrder,g as default};
