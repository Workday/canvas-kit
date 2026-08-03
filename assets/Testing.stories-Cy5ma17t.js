import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-CCLYCUcL.js";import{E as p}from"./union-Bg3XhQW7.js";import"./index-IfJi-UCQ.js";import{S as n}from"./StaticStates-XUJ2_8LI.js";import{C as m}from"./ComponentStatesTable-B7insrPl.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{D as d}from"./DeleteButton-DMh2YAjh.js";import"./iframe-fcNsQbLG.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DDXGuKaN.js";import"./Svg-DOtJrqB4.js";import"./px2rem-C0KbprIx.js";import"./components-v7JqqvMM.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-Bn_llku6.js";import"./Text-CGhXLC3-.js";import"./mergeStyles-DWcFsH6q.js";import"./Box-DBboduCF.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-BeyF4dmz.js";import"./grid-LhDFLHVE.js";import"./cornerShape-BqAy_znZ.js";import"./index-DE-upP0k.js";import"./Card-BJfcBlnp.js";import"./ExternalHyperlink-CSl8fQT7.js";import"./Hyperlink-7twjq9QK.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DetvBox6.js";import"./BaseButton-CwcWTppN.js";import"./Button-DIqyR1HD.js";import"./lerna-L2hz15L8.js";import"./CanvasProvider-BdAnrRrV.js";import"./index-D-t2nnqG.js";import"./Tooltip-CIXsZY9p.js";import"./useTooltip-CG-QuIwi.js";import"./getTransformFromPlacement-CgsYHD9j.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-NA8gEnpq.js";import"./Popper-BCGrei36.js";import"./TertiaryButton-DpmPS0az.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DvEPox1F.js";import"./ColorPicker-Cgb9Hdi5.js";import"./ColorInput-Cg14RZWE.js";import"./check-small-BqSDQIle.js";import"./TextInput-DNMBfMVj.js";import"./types-DXdjelYI.js";import"./FormField-DuShvnld.js";import"./check-Ds6vsrAM.js";import"./Expandable-DhTfPAUC.js";import"./Avatar-BGfd4l2y.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-C18U_xj5.js";import"./Popup-DWq72ULl.js";import"./x-B1faap_l.js";import"./usePopupTarget-BbuiYqPz.js";import"./useInitialFocus-CDRlabme.js";import"./useReturnFocus-BxLABu8v.js";import"./useFocusRedirect-CQwafUeW.js";import"./Breadcrumbs-CWYu4039.js";import"./useOverflowListTarget-BzIX5IBr.js";import"./useListItemRegister-BxAZRU-B.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DNxUV_OH.js";import"./OverflowTooltip-BlFalyvz.js";import"./useListItemSelect-CuPw5UTK.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-vbsWUH5O.js";import"./Table-BK509mjt.js";const u=Object.freeze(Object.defineProperty({__proto__:null,get Docs(){return r},get __namedExportsOrder(){return f},get default(){return v}},Symbol.toStringTag,{value:"Module"})),b=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}],s=o=>e.jsx(n,{theme:o.theme,children:e.jsx(m,{rowProps:c({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:b,children:t=>e.jsx(d,{...t,children:"Test"})})});s.__RAW__=`import React from 'react';

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
