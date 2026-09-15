import v from"./Theming-BlcHiW-o.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-Bsmzj5m5.js";import{C as e}from"./Card-DzhLlfJA.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-BFV0xoAp.js";import{T as n}from"./TextInput-DWIaRQL-.js";import{P as p}from"./PrimaryButton-BssyuXom.js";import{p as y}from"./px2rem-C0KbprIx.js";import{S as x,P as f,T as C,O as T,m as k,U as j}from"./index-kj8ZfNNN.js";import"./index-3YbjYt95.js";import"./index-B6_fZJIH.js";import"./iframe-C5jHHwC4.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-73eBhY97.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CFi1VLoO.js";import"./Svg-BS_Dvh6q.js";import"./components-DppiPmWT.js";import"./StatusIndicator-BadRR8Ou.js";import"./Text-C5D3Ht9T.js";import"./mergeStyles-0aQAs1eh.js";import"./Box-AGfoWgij.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-bOHHmX-t.js";import"./grid-DtbHyXmR.js";import"./cornerShape-C5U5sQXc.js";import"./index-udXzHylk.js";import"./ExternalHyperlink-uYYbfEzo.js";import"./Hyperlink-T26S0cW3.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BD2FVi4i.js";import"./BaseButton-CKzS3UNH.js";import"./Button-BYCIT0TJ.js";import"./lerna-BfH53aY9.js";import"./Tooltip-9ICStd_k.js";import"./useTooltip-CsgEKIvN.js";import"./getTransformFromPlacement-xNvjyxNY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DqbNoIGf.js";import"./Popper-xemT1TtK.js";import"./TertiaryButton-CyD_x8wF.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-jZfo-0ua.js";import"./ColorPicker-Bf6aRSJA.js";import"./ColorInput-DSCHnU6T.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-K-4Ybhc9.js";import"./Avatar-juNxhmne.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DzCYEDbr.js";import"./Popup-CLuCYqLn.js";import"./x-B1faap_l.js";import"./usePopupTarget-CifT6Oya.js";import"./useInitialFocus-C3yNoxbC.js";import"./useReturnFocus-DDQ4-kU9.js";import"./useFocusRedirect-BoLF_I5b.js";import"./Breadcrumbs-Cc0Qvzn9.js";import"./useOverflowListTarget-DEnwFStT.js";import"./useListItemRegister-BtedmPXX.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DtS_Zcjq.js";import"./OverflowTooltip-CtkxcgW5.js";import"./useListItemSelect-Cwl5Guz1.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-iKGzF7_i.js";import"./Table-qLELy8Y1.js";import"./sanaTheme-BMF-FlaW.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(e,{children:[r.jsx(e.Heading,{children:"RTL Support"}),r.jsxs(e.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
