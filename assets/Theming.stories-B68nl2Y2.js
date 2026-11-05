import v from"./Theming-BqMaKBbN.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-CmQuC1n5.js";import{C as o}from"./Card-TTTo4zHB.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-BT_PZm_j.js";import{T as n}from"./TextInput-COM6UplY.js";import{P as p}from"./PrimaryButton-CyIy4kuw.js";import{p as y}from"./px2rem-C0KbprIx.js";import{S as x,P as f,T as C,O as T,m as k,U as j}from"./index-CFEs8r9D.js";import"./index-3YbjYt95.js";import"./index-CyGZXPEz.js";import"./iframe-Dine_4aU.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-BUCG8cdu.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DgkB3O3q.js";import"./Svg-CXKlNM9V.js";import"./components-B5QHr9xs.js";import"./StatusIndicator-BRiOfW_b.js";import"./Text-56KUGy0I.js";import"./mergeStyles-Bfd74k5F.js";import"./Box-CyjvvVBh.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BhWEOOmD.js";import"./grid-Bo2FCXCg.js";import"./cornerShape-B1y71wLF.js";import"./index-C_4iH04t.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-CMouN1zW.js";import"./Hyperlink-CiXICWo2.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-F9hk8ScV.js";import"./BaseButton-B7Cdo6oA.js";import"./Button-uPfdKrkI.js";import"./lerna-DSxFu7Tr.js";import"./Tooltip-CHIJ5lTV.js";import"./useTooltip-CDZrIDIK.js";import"./getTransformFromPlacement-CeI32Hr4.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BNAhz6K3.js";import"./Popper-BKWt9U5M.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BL6wVU0w.js";import"./TypeLevelComponents-BkRTrtYq.js";import"./ColorPicker-YR0REnsY.js";import"./ColorInput-CgQJxHhX.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-DpOIWmb-.js";import"./Avatar-Bsyc2LpW.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DQuIuKWH.js";import"./Popup-COb6F4Ts.js";import"./x-B1faap_l.js";import"./usePopupTarget-Cco7peXe.js";import"./useInitialFocus-DcT3-Ce6.js";import"./useReturnFocus-DWZj3b3a.js";import"./useFocusRedirect-Xc3xIpjr.js";import"./Breadcrumbs-DxCbAS4P.js";import"./useOverflowListItemMeasure-ynDmS6wO.js";import"./useListItemRegister-BqQBHrTO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BetwLbDT.js";import"./OverflowTooltip-BPWo0foa.js";import"./useListItemRovingFocus-BdbIpBLB.js";import"./useListItemSelect-CjGaW9lx.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CTkziXOc.js";import"./Flex-DzCPbc6Q.js";import"./Table-BYK6-5dH.js";import"./sanaTheme-8Di6K9v6.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(o,{children:[r.jsx(o.Heading,{children:"RTL Support"}),r.jsxs(o.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
