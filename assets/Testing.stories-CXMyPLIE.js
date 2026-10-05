import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-DF9Ggjdz.js";import{E as n}from"./union-2luBZJC5.js";import"./index-IfJi-UCQ.js";import{S as p}from"./StaticStates-C8PNmvhX.js";import{C as m}from"./ComponentStatesTable-BGs2PIsA.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{D as d}from"./DeleteButton-D7lzdGIL.js";import"./iframe-D8j4w_od.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bprhvld6.js";import"./Svg-Cf-JAqGF.js";import"./px2rem-C0KbprIx.js";import"./components-CSN_KxHX.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-DNu_SPzg.js";import"./Text-BxYrzwL9.js";import"./mergeStyles-CrKfjMZ1.js";import"./Box-DebRNAPR.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DSGq5Zo5.js";import"./grid-Db0Kv7HN.js";import"./cornerShape-BeK2DPVP.js";import"./index-jCBjnmNg.js";import"./Card-BlbEtVCh.js";import"./ExternalHyperlink-BIzPchcs.js";import"./Hyperlink-CyWEgMZu.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CC5NDP49.js";import"./BaseButton-BmnV2apc.js";import"./Button-BmDyQ_0V.js";import"./lerna-dE9_d90c.js";import"./CanvasProvider-Ce6SqFpo.js";import"./index-kj8ZfNNN.js";import"./Tooltip-D1g1a8So.js";import"./useTooltip-Bk1NBL5b.js";import"./getTransformFromPlacement-C0H7XrZY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-CHcRDM8i.js";import"./Popper-BMBM4fBh.js";import"./TertiaryButton-Ng42FoqW.js";import"./TypeLevelComponents-C9UvwkIr.js";import"./ColorPicker-CYt52KkP.js";import"./ColorInput-C3jnUfrR.js";import"./check-small-BqSDQIle.js";import"./TextInput-Ley04CKf.js";import"./types-DXdjelYI.js";import"./FormField-BCMc2Lm9.js";import"./check-Ds6vsrAM.js";import"./Expandable-DBYZI0lK.js";import"./Avatar-D4w5MqCC.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-C_7pURTd.js";import"./Popup-C13Xc0gr.js";import"./x-B1faap_l.js";import"./usePopupTarget-8XLAjRU5.js";import"./useInitialFocus-bLTg3kQA.js";import"./useReturnFocus-nFq-J5O1.js";import"./useFocusRedirect-DKub_36o.js";import"./Breadcrumbs-DI-DGb6t.js";import"./useOverflowListTarget-BZoNQBpX.js";import"./useListItemRegister-CGyUiflc.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DZ-Dz4t0.js";import"./OverflowTooltip-Dy_iAyJn.js";import"./useListItemSelect-DyiPCdbs.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-Cyn9vvSA.js";import"./Table-DhtTSpoO.js";const u=Object.freeze(Object.defineProperty({__proto__:null,get Docs(){return r},get __namedExportsOrder(){return f},get default(){return v}},Symbol.toStringTag,{value:"Module"})),b=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}],s=o=>e.jsx(p,{theme:o.theme,children:e.jsx(m,{rowProps:c({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:b,children:t=>e.jsx(d,{...t,children:"Test"})})});s.__RAW__=`import React from 'react';

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
