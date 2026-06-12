import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-DBq-bKNH.js";import{E as n}from"./union-Be9rDMMk.js";import"./index-IfJi-UCQ.js";import{S as p}from"./StaticStates-DF6UD9Bz.js";import{C as m}from"./ComponentStatesTable-DLyRxOon.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{D as d}from"./DeleteButton-B3eYcj2f.js";import"./iframe-DXg0DlW2.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DhrNLeMh.js";import"./Svg-CETa_jpJ.js";import"./px2rem-C0KbprIx.js";import"./components-Brs-n4xu.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-Cc53Z2IO.js";import"./Text-Wbz4nGCV.js";import"./mergeStyles-O1wR0AIL.js";import"./Box-BgCI5sd_.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DYfwNNEA.js";import"./grid-B_3TtziO.js";import"./index-5dfzm_kn.js";import"./Card-Ba6PTVVO.js";import"./ExternalHyperlink-xxhmXAY-.js";import"./Hyperlink-BRpfifrY.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-IhTOZCNo.js";import"./BaseButton-vzANskSl.js";import"./Button-bpU0n2vS.js";import"./lerna-OmgWyvc9.js";import"./CanvasProvider-D8vzr9bq.js";import"./index-5mrAZJYD.js";import"./Tooltip-D7xImHEM.js";import"./useTooltip-XhI66PCE.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BKEK7bto.js";import"./Popper-Dy7hTIGp.js";import"./TertiaryButton-CBwNFKa9.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-CIBGvpAI.js";import"./ColorPicker-D7SbIGKk.js";import"./ColorInput-_j3kG8ND.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-CoIjA8o7.js";import"./types-DXdjelYI.js";import"./FormField-__V0Kwkv.js";import"./check-Bvurkvei.js";import"./Expandable-xNBVXfd8.js";import"./Avatar-pqpnZil-.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BxqBLAN3.js";import"./Popup-ApgKQGjm.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DEBYrGeR.js";import"./useInitialFocus-D0VoJzQ7.js";import"./useReturnFocus-DLPQ2oar.js";import"./useFocusRedirect-CEfsHOpw.js";import"./Breadcrumbs-7XlqmwEo.js";import"./useOverflowListTarget-DlHX0lzH.js";import"./useListItemSelect-yxjUQCSx.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DtctES1o.js";import"./OverflowTooltip-nF9pOVYl.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-DpDv5-ef.js";import"./Table-1kiKUF8g.js";const u=Object.freeze(Object.defineProperty({__proto__:null,get Docs(){return r},get __namedExportsOrder(){return f},get default(){return v}},Symbol.toStringTag,{value:"Module"})),b=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}],s=o=>e.jsx(p,{theme:o.theme,children:e.jsx(m,{rowProps:c({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:b,children:t=>e.jsx(d,{...t,children:"Test"})})});s.__RAW__=`import React from 'react';

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
