import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-BuzUoXuP.js";import{E as n}from"./union-B_YdO4Rn.js";import"./index-IfJi-UCQ.js";import{S as p}from"./StaticStates-CZ2YX_U8.js";import{C as m}from"./ComponentStatesTable-CT0Mvh3Z.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{D as d}from"./DeleteButton-BczRWt7T.js";import"./iframe-CqQaqg02.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BHdFM4gJ.js";import"./Svg-BweBcPJP.js";import"./px2rem-C0KbprIx.js";import"./components-BmHbwbhb.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-NDpFz6Y6.js";import"./Text-BmRVJVDA.js";import"./mergeStyles-QRcURb9q.js";import"./Box-mcEjmPIp.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-YMVbti20.js";import"./grid-WMWBj9Hm.js";import"./index-5dfzm_kn.js";import"./Card-Do4F3jna.js";import"./ExternalHyperlink-CK2LQ_ab.js";import"./Hyperlink-Dk9GtM2m.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-DgWyxuYl.js";import"./BaseButton-CnjstBv9.js";import"./Button-Bi-j31bu.js";import"./lerna-MRK8lqbN.js";import"./CanvasProvider-DrUGAeqB.js";import"./index-5mrAZJYD.js";import"./Tooltip-hfy8Ol31.js";import"./useTooltip-P-OrPrqM.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-aGu2neH7.js";import"./Popper-CkRntUYs.js";import"./TertiaryButton-fEWojvdf.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BCUDE-Iz.js";import"./ColorPicker-ZJsE9F3r.js";import"./ColorInput-Bnr3B3QM.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-VSHHKRMb.js";import"./types-DXdjelYI.js";import"./FormField-CJii8RnW.js";import"./check-Bvurkvei.js";import"./Expandable-DN7QfFSE.js";import"./Avatar-DdwObW3m.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-Cje_mGxc.js";import"./Popup-1ipA4aUs.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-CHZojcSk.js";import"./useInitialFocus-DYhXH2-D.js";import"./useReturnFocus-DND-TDO8.js";import"./useFocusRedirect-D10zBWnf.js";import"./Breadcrumbs-DFy0zo5O.js";import"./useOverflowListTarget-CN1RWLjZ.js";import"./useListItemSelect-E9NNzeRO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-B017jkPL.js";import"./OverflowTooltip-CFPJJQRu.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-C02s6o63.js";import"./Table-Dwt5GicB.js";const u=Object.freeze(Object.defineProperty({__proto__:null,get Docs(){return r},get __namedExportsOrder(){return f},get default(){return v}},Symbol.toStringTag,{value:"Module"})),b=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}],s=o=>e.jsx(p,{theme:o.theme,children:e.jsx(m,{rowProps:c({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:b,children:t=>e.jsx(d,{...t,children:"Test"})})});s.__RAW__=`import React from 'react';

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
