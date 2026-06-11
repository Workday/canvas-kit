import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-D_439bJA.js";import{E as n}from"./union-BSIFUzl1.js";import"./index-IfJi-UCQ.js";import{S as p}from"./StaticStates-DwtqWt-S.js";import{C as m}from"./ComponentStatesTable-BdkfeyRI.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{D as d}from"./DeleteButton-aJIbaDkt.js";import"./iframe-Bg3fn7F7.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CqoDT-XF.js";import"./Svg-DzPS_4Gv.js";import"./px2rem-C0KbprIx.js";import"./components-CiYq2Ux-.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-C8jbXgkY.js";import"./Text-CA4K3XqV.js";import"./mergeStyles-BwsTBQHe.js";import"./Box-B8SJpSaU.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DEpQdPd9.js";import"./grid-Bptupakt.js";import"./index-5dfzm_kn.js";import"./Card-DDnCZU17.js";import"./ExternalHyperlink-BEkECOId.js";import"./Hyperlink-hH57UZrX.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-C6alAkIu.js";import"./BaseButton-S0EZlBKg.js";import"./Button-BbxM350c.js";import"./lerna-3jXlGHbP.js";import"./CanvasProvider-BQueJlPh.js";import"./index-5mrAZJYD.js";import"./Tooltip-mrjIWVKX.js";import"./useTooltip-CyGI518_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CAWOQb5n.js";import"./Popper-D7IcO7QV.js";import"./TertiaryButton-B6R6H9oz.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bx9MbsnZ.js";import"./ColorPicker-C-xEOXaD.js";import"./ColorInput-CgDc74ap.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-B1Ypq4wN.js";import"./types-DXdjelYI.js";import"./FormField-DSLSWaJe.js";import"./check-Bvurkvei.js";import"./Expandable-BIVbTN1o.js";import"./Avatar-B01Yb7M-.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-CWlxB9Wd.js";import"./Popup-BfsH9ToG.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DlVqELN8.js";import"./useInitialFocus-BIZxfhHD.js";import"./useReturnFocus-Bl2nSnaE.js";import"./useFocusRedirect-DEmWqwJT.js";import"./Breadcrumbs-BYBFQdcu.js";import"./useOverflowListTarget-uhQngC8a.js";import"./useListItemSelect-BuLc9fuA.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CiGVN38M.js";import"./OverflowTooltip-C8EirudH.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-CcubAYil.js";import"./Table-C8kjqThE.js";const u=Object.freeze(Object.defineProperty({__proto__:null,get Docs(){return r},get __namedExportsOrder(){return f},get default(){return v}},Symbol.toStringTag,{value:"Module"})),b=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}],s=o=>e.jsx(p,{theme:o.theme,children:e.jsx(m,{rowProps:c({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:b,children:t=>e.jsx(d,{...t,children:"Test"})})});s.__RAW__=`import React from 'react';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';

export const stateTableColumnProps = [
  {label: 'Default ', props: {className: '', disabled: false}},
  {label: 'Default Disabled', props: {className: '', disabled: true}},
  {label: 'Hover ', props: {className: 'hover', disabled: false}},
  {label: 'Hover Disabled', props: {className: 'hover', disabled: true}},
  {label: 'Focus ', props: {className: 'focus', disabled: false}},
  {label: 'Focus Hover ', props: {className: 'focus hover', disabled: false}},
  {label: 'Active ', props: {className: 'active', disabled: false}},
  {label: 'Active Hover ', props: {className: 'active hover', disabled: false}},
];

export const Basic = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => <DeleteButton {...props}>Test</DeleteButton>}
    </ComponentStatesTable>
  </StaticStates>
);
`;function a(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:u}),`
`,e.jsx(t.h1,{id:"testing",children:"Testing"}),`
`,e.jsx(t.p,{children:"A package that provides components and utilities for testing"}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"StaticStates"})," in conjunction with ",e.jsx(t.code,{children:"ComponentStatesTable"}),` allows consumers to visually test their
components in different states. Below is an example of how we're using these to create a visual
table of a `,e.jsx(t.code,{children:"DeleteButton"})," component with different prop values and visual states."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"StaticStates"})," serves similarly as a context provider where is wraps children in a ",e.jsx(t.code,{children:"CanvasProvider"}),`
exposing a `,e.jsx(t.code,{children:"theme"})," prop."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ComponentStatesTable"})," allows consumers to built up a visual table based on row and column props."]}),`
`,e.jsx(n,{code:s})]})}function h(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(a,{...o})}):a(o)}const v={title:"Hooks and Utilities/Testing",tags:["autodocs"],parameters:{docs:{page:h}}},r={render:s};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Basic
}`,...r.parameters?.docs?.source}}};const f=["Docs"];export{r as Docs,f as __namedExportsOrder,v as default};
