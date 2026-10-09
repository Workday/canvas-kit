import v from"./Theming-0po2SXym.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-BrxZQKSv.js";import{C as e}from"./Card-LdN1cFuM.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-VgCVX73-.js";import{T as n}from"./TextInput-Z2WzeqSp.js";import{P as p}from"./PrimaryButton-Bk-2K5As.js";import{p as y}from"./px2rem-C0KbprIx.js";import{S as x,P as f,T as C,O as T,m as k,U as j}from"./index-kj8ZfNNN.js";import"./index-3YbjYt95.js";import"./index-Doa-QxuI.js";import"./iframe-CLGV_KSm.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-DzyZDnKb.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Dn8ry8Fs.js";import"./Svg-EhlVkbPa.js";import"./components-B1mGnJpp.js";import"./StatusIndicator-BMJ1ZyCI.js";import"./Text-Bka4LqhJ.js";import"./mergeStyles-DOP9Jdsg.js";import"./Box-Ds0y4SrM.js";import"./index-5enOfKoO.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-CToZMAna.js";import"./grid-CxoxzKOV.js";import"./cornerShape-nJoLwGwG.js";import"./index-jCBjnmNg.js";import"./ExternalHyperlink-BaQ7xN4B.js";import"./Hyperlink-MlcMBt7S.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CW8bmGIW.js";import"./BaseButton-ozivwaWz.js";import"./Button-Ho16nQOa.js";import"./lerna-CgoCzEyy.js";import"./Tooltip-BjSVQ3IO.js";import"./useTooltip-DgIB_12S.js";import"./getTransformFromPlacement-CnzpioCY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-CpP-Bvvu.js";import"./Popper-CbntXY40.js";import"./TertiaryButton-BUc32dy7.js";import"./TypeLevelComponents-BJf3-Pkz.js";import"./ColorPicker-NRPJj_lR.js";import"./ColorInput-BHKYQ0Xk.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-CqnAKlqv.js";import"./Avatar-BziiGdMZ.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-CqVCkqXL.js";import"./Popup-Cz_26RbY.js";import"./x-B1faap_l.js";import"./usePopupTarget-DVpri5Fh.js";import"./useInitialFocus-C0w0UsTD.js";import"./useReturnFocus-pD0NUvMs.js";import"./useFocusRedirect-2pSmmBYq.js";import"./Breadcrumbs-DAIp0cp5.js";import"./useOverflowListItemMeasure-CElAmIVh.js";import"./useListItemRegister-BISehTrv.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BZaYLoxG.js";import"./OverflowTooltip-Rh19x-4O.js";import"./useListItemSelect-PsQk8-v0.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BmDJXbYD.js";import"./Flex-C8PqO4VF.js";import"./Table-CNg7RdO7.js";import"./sanaTheme-C8YdT_tm.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(e,{children:[r.jsx(e.Heading,{children:"RTL Support"}),r.jsxs(e.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
`;const P=()=>r.jsx(i,{theme:{canvas:{palette:{primary:{main:j},alert:{main:k},common:{focusOutline:T,alertInner:C,alertOuter:f,errorInner:x}}}},children:r.jsxs(e,{children:[r.jsx(e.Heading,{children:"Theming"}),r.jsxs(e.Body,{children:[r.jsx(p,{children:"Theming"}),r.jsxs(t,{error:"caution",children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n})})]})]})]})}),d=()=>r.jsx("div",{children:r.jsx(P,{})});d.__RAW__=`import {PrimaryButton} from '@workday/canvas-kit-react/button';
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
`;const at={title:"Features/Theming",parameters:{docs:{page:v}}},o={render:d},a={render:s};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ThemingExample
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...a.parameters?.docs?.source}}};const it=["Theming","RTL"];export{a as RTL,o as Theming,it as __namedExportsOrder,at as default};
