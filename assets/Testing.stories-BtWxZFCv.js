import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-B6fkcVLD.js";import{E as n}from"./union-ClL_876f.js";import"./index-IfJi-UCQ.js";import{S as p}from"./StaticStates-DkF3QLuR.js";import{C as m}from"./ComponentStatesTable-846vHFyq.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{D as d}from"./DeleteButton-DGWkLXDw.js";import"./iframe-B6opyFNd.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BIB-oP8f.js";import"./Svg-DLcqTVF1.js";import"./px2rem-C0KbprIx.js";import"./components-CyZuQxpO.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-Bf2UpqNs.js";import"./Text-DKU2C7b1.js";import"./mergeStyles-aso8A0iZ.js";import"./Box-CwXb8fLy.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BIdFUmPB.js";import"./grid-D3lEMqUx.js";import"./cornerShape-yNJyCN49.js";import"./index-jCBjnmNg.js";import"./Card-CoXliinI.js";import"./ExternalHyperlink-BpYqe13n.js";import"./Hyperlink-BUL29Ia-.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-A4fXFx92.js";import"./BaseButton-CrTTH5H6.js";import"./Button-DO73SKPJ.js";import"./lerna-DC-Z0Puc.js";import"./CanvasProvider-Bqk713r3.js";import"./index-kj8ZfNNN.js";import"./Tooltip-CP8JYkBk.js";import"./useTooltip-DN37OKCw.js";import"./getTransformFromPlacement-0qQtHERt.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DyvvklAr.js";import"./Popper-C66rtqtU.js";import"./TertiaryButton-DuUtK6N9.js";import"./TypeLevelComponents-CtYssDYi.js";import"./ColorPicker-2DeMsRBe.js";import"./ColorInput-DeZdlMuu.js";import"./check-small-BqSDQIle.js";import"./TextInput-DclCrAl0.js";import"./types-DXdjelYI.js";import"./FormField-CUGIfhLA.js";import"./check-Ds6vsrAM.js";import"./Expandable-BeepAr82.js";import"./Avatar-CJ0o31B3.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DM7StFmr.js";import"./Popup-DAfCb3bS.js";import"./x-B1faap_l.js";import"./usePopupTarget-CQC5ukAW.js";import"./useInitialFocus-C4xih9GH.js";import"./useReturnFocus-D0HWm8uP.js";import"./useFocusRedirect-By4wnPeH.js";import"./Breadcrumbs-DGcunV28.js";import"./useOverflowListItemMeasure-gHrhREA1.js";import"./useListItemRegister-BJAb2Ovp.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CSlla02l.js";import"./OverflowTooltip-CVI4hM79.js";import"./useListItemSelect-qe93IIGJ.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-x8Ixeici.js";import"./Flex-B9mDs0fH.js";import"./Table-C3SPLJSE.js";const u=Object.freeze(Object.defineProperty({__proto__:null,get Docs(){return r},get __namedExportsOrder(){return f},get default(){return v}},Symbol.toStringTag,{value:"Module"})),b=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}],s=o=>e.jsx(p,{theme:o.theme,children:e.jsx(m,{rowProps:c({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:b,children:t=>e.jsx(d,{...t,children:"Test"})})});s.__RAW__=`import React from 'react';

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
