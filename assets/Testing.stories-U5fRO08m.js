import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-ByKK2ZVj.js";import{E as n}from"./union-D4Npie0B.js";import"./index-IfJi-UCQ.js";import{S as p}from"./StaticStates-4xvHslkC.js";import{C as m}from"./ComponentStatesTable-C5axFSBq.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{D as d}from"./DeleteButton-DvqW7wh6.js";import"./iframe-B4egJ2yK.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-sIhpLqFT.js";import"./Svg-BEkl6RqF.js";import"./px2rem-C0KbprIx.js";import"./components-d5ekN04B.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-BH4xYMT4.js";import"./Text-B_9J6dtZ.js";import"./mergeStyles-BbM8eln0.js";import"./Box-BoBigmVy.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-D5XhsXiq.js";import"./grid-BMAUH4x5.js";import"./cornerShape-D4s9iH9i.js";import"./index-jCBjnmNg.js";import"./Card-C3YPv8PR.js";import"./ExternalHyperlink-BAP_ajky.js";import"./Hyperlink-DogG_b3k.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-Dq_wtC7v.js";import"./BaseButton-Cq0-Z1xK.js";import"./Button-Cji_lOEg.js";import"./lerna-Bw7zwFz3.js";import"./CanvasProvider-P3Lb2Rl1.js";import"./index-kj8ZfNNN.js";import"./Tooltip-DfuQ4oU_.js";import"./useTooltip-D9NUSYDV.js";import"./getTransformFromPlacement-C0brky5f.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-U3rCa1ez.js";import"./Popper-60Ht2BWw.js";import"./TertiaryButton-DKUjcWbc.js";import"./TypeLevelComponents-DDShjP3S.js";import"./ColorPicker-Cl-khmes.js";import"./ColorInput-40B_w6YB.js";import"./check-small-BqSDQIle.js";import"./TextInput-XGsJxoL2.js";import"./types-DXdjelYI.js";import"./FormField-Bet0BX5r.js";import"./check-Ds6vsrAM.js";import"./Expandable-DjUS88Ki.js";import"./Avatar-C5xvvNZK.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-s4ClsmXe.js";import"./Popup-jwoUED7-.js";import"./x-B1faap_l.js";import"./usePopupTarget-CiglE-au.js";import"./useInitialFocus-CLFzlfY2.js";import"./useReturnFocus-BiEDvkpe.js";import"./useFocusRedirect-CGyB5QUA.js";import"./Breadcrumbs-D3SRqBX_.js";import"./useOverflowListTarget-CCMwSaIK.js";import"./useListItemRegister-CkI4Pnda.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Gxy5lB3g.js";import"./OverflowTooltip-D-ZVvEYp.js";import"./useListItemSelect-Buc4Eu3l.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-EvLpNqv5.js";import"./Table-YrR-Iqiw.js";const u=Object.freeze(Object.defineProperty({__proto__:null,get Docs(){return r},get __namedExportsOrder(){return f},get default(){return v}},Symbol.toStringTag,{value:"Module"})),b=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}],s=o=>e.jsx(p,{theme:o.theme,children:e.jsx(m,{rowProps:c({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:b,children:t=>e.jsx(d,{...t,children:"Test"})})});s.__RAW__=`import React from 'react';

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
