import v from"./Theming-AolPjfCV.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-axEgo6e1.js";import{C as o}from"./Card-DyIEc58y.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-BpfHNciE.js";import{T as n}from"./TextInput-DakYh1Kw.js";import{P as p}from"./PrimaryButton-DRJvl6QF.js";import{p as y}from"./px2rem-C0KbprIx.js";import{S as x,P as f,T as C,O as T,m as k,U as j}from"./index-CFEs8r9D.js";import"./index-3YbjYt95.js";import"./index-7c7aP5Tf.js";import"./iframe-B3_snEwa.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-c9Pl4GuD.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-C-9MyzEr.js";import"./Svg-rOw8jW07.js";import"./components-S5bC6fZi.js";import"./StatusIndicator-Djim6Lil.js";import"./Text-DNDYTuHT.js";import"./mergeStyles-Dk0M9lrR.js";import"./Box-B4eyyvuU.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-KgQM1qcC.js";import"./grid-CK5kpvEI.js";import"./cornerShape-BMV-HxmE.js";import"./index-C_4iH04t.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-OUPfD5y-.js";import"./Hyperlink-CoWZ0EMi.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-aeALGU57.js";import"./BaseButton-6gpeVhIx.js";import"./Button-2Oi_8-Fb.js";import"./lerna-86MGNygZ.js";import"./Tooltip-D2mxiWLP.js";import"./useTooltip-Cgsa4tFw.js";import"./getTransformFromPlacement-QV_saiu5.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-B4YT-A7Z.js";import"./Popper-DthqIkuE.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CJlYwh7s.js";import"./TypeLevelComponents-DmdCDKVS.js";import"./ColorPicker-H_dioD_A.js";import"./ColorInput-DCqvSUHi.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-CKpifHcF.js";import"./Avatar-BCTqwRCB.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cj35v0pp.js";import"./Popup-BEpU_wKx.js";import"./x-B1faap_l.js";import"./usePopupTarget-SKx5oDcQ.js";import"./useInitialFocus-BWETe4MH.js";import"./useReturnFocus-DnG6180h.js";import"./useFocusRedirect-DjYJjijD.js";import"./Breadcrumbs-DNdn0Zq4.js";import"./useOverflowListItemMeasure-W50cfnSd.js";import"./useListItemRegister-B6CuK0fQ.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DpkUyS6S.js";import"./OverflowTooltip-Cm441jpv.js";import"./useListItemRovingFocus-Cpz-9FpV.js";import"./useListItemSelect-CjOf9PN3.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CffHZBEi.js";import"./Flex-CRc_8oDC.js";import"./Table-BATvsA9V.js";import"./sanaTheme-Cjzvl406.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(o,{children:[r.jsx(o.Heading,{children:"RTL Support"}),r.jsxs(o.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
