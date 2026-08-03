import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-ESmbJpvJ.js";import{E as p}from"./union-C7oNDQNC.js";import"./index-IfJi-UCQ.js";import{S as n}from"./StaticStates-VZBJ0TJs.js";import{C as m}from"./ComponentStatesTable-lYSTiezT.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{D as d}from"./DeleteButton-C4DcqQO8.js";import"./iframe-DtS5-yNa.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./px2rem-C0KbprIx.js";import"./components-eQ_txa-f.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-CbQX6SBJ.js";import"./Text-BLaZcOr9.js";import"./mergeStyles-C5CqGCLQ.js";import"./Box-5BC0dNqB.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./cornerShape-B7b4ymMc.js";import"./index-DE-upP0k.js";import"./Card-BsFqe5CX.js";import"./ExternalHyperlink-BB6WUMYJ.js";import"./Hyperlink-C1HZBOiW.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CMbqORtK.js";import"./BaseButton-CivL5PJl.js";import"./Button-wmECgaEK.js";import"./lerna-DP3jw_1V.js";import"./CanvasProvider-CFtqHR-b.js";import"./index-pMzza0x6.js";import"./Tooltip-B8mUJnbM.js";import"./useTooltip-CS5bngwT.js";import"./getTransformFromPlacement-C8S8FYK9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-Dxv9jUxq.js";import"./Popper-DYfGvA07.js";import"./TertiaryButton-C_EvQ6Qu.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-gK2o1_HT.js";import"./ColorPicker-BXGUHqxL.js";import"./ColorInput-CiSvL7NF.js";import"./check-small-BqSDQIle.js";import"./TextInput-ChkYUV9e.js";import"./types-DXdjelYI.js";import"./FormField-CC8jg04Q.js";import"./check-Ds6vsrAM.js";import"./Expandable-BSiDPhTP.js";import"./Avatar-DBO0rhtW.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DMvuxPp6.js";import"./Popup-CdIMi-8Z.js";import"./x-B1faap_l.js";import"./usePopupTarget-wbqfrIA1.js";import"./useInitialFocus-70_5kNba.js";import"./useReturnFocus-CNQf_iaV.js";import"./useFocusRedirect-2jfUi4it.js";import"./Breadcrumbs-BYAN7ccz.js";import"./useOverflowListTarget-BMAUIgft.js";import"./useListItemRegister-tmhAPbAN.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D_vEOnvj.js";import"./OverflowTooltip-BAg5tNv1.js";import"./useListItemSelect-C0k6gewm.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DOA8e2vA.js";import"./Table-Bvawp_fh.js";const u=Object.freeze(Object.defineProperty({__proto__:null,get Docs(){return r},get __namedExportsOrder(){return f},get default(){return v}},Symbol.toStringTag,{value:"Module"})),b=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}],s=o=>e.jsx(n,{theme:o.theme,children:e.jsx(m,{rowProps:c({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:b,children:t=>e.jsx(d,{...t,children:"Test"})})});s.__RAW__=`import React from 'react';

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
`,e.jsx(p,{code:s})]})}function h(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(a,{...o})}):a(o)}const v={title:"Hooks and Utilities/Testing",tags:["autodocs"],parameters:{docs:{page:h}}},r={render:s};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Basic
}`,...r.parameters?.docs?.source}}};const f=["Docs"];export{r as Docs,f as __namedExportsOrder,v as default};
