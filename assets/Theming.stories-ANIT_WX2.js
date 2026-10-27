import v from"./Theming-BWBRo7Ck.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-DJRItNr0.js";import{C as o}from"./Card-C94ti1ug.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-D3X-JdP0.js";import{T as n}from"./TextInput-DX-uTB_8.js";import{P as p}from"./PrimaryButton-DwExYjzD.js";import{p as y}from"./px2rem-C0KbprIx.js";import{S as x,P as f,T as C,O as T,m as k,U as j}from"./index-CFEs8r9D.js";import"./index-3YbjYt95.js";import"./index-8zTmtzg_.js";import"./iframe-DzHAWDep.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-Dw3119xp.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./components-CxXDZKlX.js";import"./StatusIndicator-C0c7vbAG.js";import"./Text-BU7lo9qQ.js";import"./mergeStyles-Cwq7MPiu.js";import"./Box-AXoeqAfR.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./cornerShape-CSfH3EMK.js";import"./index-C_4iH04t.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-DG35H1Wq.js";import"./Hyperlink-DuzNLKMl.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-ClDLkqd4.js";import"./BaseButton-CXgunvHx.js";import"./Button-BKwQ9p25.js";import"./lerna-DluDaNV7.js";import"./Tooltip-DUI0SA_T.js";import"./useTooltip-PjORsXZm.js";import"./getTransformFromPlacement-kDQSMLcK.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-CJ8QJI5q.js";import"./Popper-mGIbWNdd.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BjIo91oe.js";import"./TypeLevelComponents-CWBiLbMZ.js";import"./ColorPicker-4zrYiXHt.js";import"./ColorInput-BSxd7JdF.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-CSlI0MMa.js";import"./Avatar-CKiAmiHa.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-BY9hL40t.js";import"./Popup-Buqd_rCX.js";import"./x-B1faap_l.js";import"./usePopupTarget-BrzAvJUE.js";import"./useInitialFocus-DA01W-5V.js";import"./useReturnFocus-CgwmYqfY.js";import"./useFocusRedirect-DlsmGhp1.js";import"./Breadcrumbs-CtAhx_Hv.js";import"./useOverflowListItemMeasure-DU3HTtaC.js";import"./useListItemRegister-cbpcI0J1.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-pYQJPHtt.js";import"./OverflowTooltip-CfbyETTq.js";import"./useListItemRovingFocus-9AyEy-B6.js";import"./useListItemSelect-BVXjgXJV.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-Dl_Li4_V.js";import"./Flex-BL4S5dy0.js";import"./Table-CI-MHtGM.js";import"./sanaTheme-Ck-dng9s.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(o,{children:[r.jsx(o.Heading,{children:"RTL Support"}),r.jsxs(o.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {arrowRightSmallIcon} from '@workday/canvas-system-icons-web';

const rtlStyles = createStyles({
  paddingInlineStart: px2rem(64),
});

const rtlButtonStyles = createStyles({
  ':dir(rtl)': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

const App = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Card>
      <Card.Heading>RTL Support</Card.Heading>
      <Card.Body cs={rtlStyles}>
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} onChange={handleChange} value={value} />
          </FormField.Field>
        </FormField>
        <PrimaryButton cs={rtlButtonStyles} iconPosition="end" icon={arrowRightSmallIcon}>
          RTL
        </PrimaryButton>
      </Card.Body>
    </Card>
  );
};

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <App />
    </CanvasProvider>
  );
};
`;const P=()=>r.jsx(i,{theme:{canvas:{palette:{primary:{main:j},alert:{main:k},common:{focusOutline:T,alertInner:C,alertOuter:f,errorInner:x}}}},children:r.jsxs(o,{children:[r.jsx(o.Heading,{children:"Theming"}),r.jsxs(o.Body,{children:[r.jsx(p,{children:"Theming"}),r.jsxs(t,{error:"caution",children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n})})]})]})]})}),d=()=>r.jsx("div",{children:r.jsx(P,{})});d.__RAW__=`import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {base} from '@workday/canvas-tokens-web';

const App = () => {
  return (
    <CanvasProvider
      theme={{
        canvas: {
          palette: {
            primary: {
              main: base.green600,
            },
            alert: {
              main: base.magenta600,
            },
            common: {
              focusOutline: base.purple500,
              alertInner: base.magenta400,
              alertOuter: base.magenta500,
              errorInner: base.red500,
            },
          },
        },
      }}
    >
      <Card>
        <Card.Heading>Theming</Card.Heading>
        <Card.Body>
          <PrimaryButton>Theming</PrimaryButton>
          <FormField error="caution">
            <FormField.Label>Email</FormField.Label>
            <FormField.Field>
              <FormField.Input as={TextInput} />
            </FormField.Field>
          </FormField>
        </Card.Body>
      </Card>
    </CanvasProvider>
  );
};

export const Theming = () => {
  return (
    <div>
      <App />
    </div>
  );
};
`;const nt={title:"Features/Theming",parameters:{docs:{page:v}}},e={render:d},a={render:s};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ThemingExample
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...a.parameters?.docs?.source}}};const pt=["Theming","RTL"];export{a as RTL,e as Theming,pt as __namedExportsOrder,nt as default};
