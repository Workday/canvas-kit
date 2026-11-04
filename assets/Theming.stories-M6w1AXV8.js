import v from"./Theming-CG0hOBcp.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-CnwanEes.js";import{C as o}from"./Card-D23lSHWe.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-BKQ_YlZQ.js";import{T as n}from"./TextInput-DWXGfW5o.js";import{P as p}from"./PrimaryButton-CI87QQqq.js";import{p as y}from"./px2rem-C0KbprIx.js";import{S as x,P as f,T as C,O as T,m as k,U as j}from"./index-CFEs8r9D.js";import"./index-3YbjYt95.js";import"./index-D3TQGW5C.js";import"./iframe-BoPhJQVk.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-1renWLLW.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DxdGt8lR.js";import"./Svg-P4I-l01h.js";import"./components-B2Q2g_kO.js";import"./StatusIndicator-Dm96L8Go.js";import"./Text-BLlhCS-c.js";import"./mergeStyles-Cj6q-U5f.js";import"./Box-Dk0W8wtP.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-3jl45ffO.js";import"./grid-Ch81PKOz.js";import"./cornerShape-CbzTqdgH.js";import"./index-C_4iH04t.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-5r9TtsQy.js";import"./Hyperlink-D-wi_N3A.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-ENoIoFrq.js";import"./BaseButton-B2qpNNxq.js";import"./Button-oKB08GyB.js";import"./lerna-BK2--YZE.js";import"./Tooltip-MCJZgr7x.js";import"./useTooltip-jA6eKExB.js";import"./getTransformFromPlacement-mFHZLDM3.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BoOh5Dla.js";import"./Popper-CkxhCgtJ.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-DQiMlgW6.js";import"./TypeLevelComponents-B7PFv6S9.js";import"./ColorPicker-BgcUXhZi.js";import"./ColorInput-Bs4NdKtj.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-B_fHYgtb.js";import"./Avatar-BlKvUt6W.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cx8FKbXT.js";import"./Popup-B1ZpsWi8.js";import"./x-B1faap_l.js";import"./usePopupTarget-BmFbxqTK.js";import"./useInitialFocus-BfTzQk0Y.js";import"./useReturnFocus-DJjyGDVU.js";import"./useFocusRedirect-DZsVo1k6.js";import"./Breadcrumbs-C-yJBYZy.js";import"./useOverflowListItemMeasure-BrthcQ5p.js";import"./useListItemRegister-CWvR7y0-.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D31M8F2f.js";import"./OverflowTooltip-BDjV_6T0.js";import"./useListItemRovingFocus-DV_jor0K.js";import"./useListItemSelect-DQ743t_N.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BLLBMKkA.js";import"./Flex-DqxeIv6k.js";import"./Table-DzVM0tKr.js";import"./sanaTheme-euqTrdAJ.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(o,{children:[r.jsx(o.Heading,{children:"RTL Support"}),r.jsxs(o.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
