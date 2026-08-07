import v from"./Theming-DuOonNOV.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-DdO1WlAt.js";import{C as e}from"./Card-DDm1QNJW.js";import{c as m}from"./cs-rfTTo7Bg.js";import{F as t}from"./FormField-Dh5rDXbA.js";import{T as n}from"./TextInput-CU54u6m7.js";import{P as p}from"./PrimaryButton-BkNYQqnU.js";import{p as y}from"./px2rem-C0KbprIx.js";import{r as x,j as f,q as C,p as T,m as k,u as j}from"./index-D-t2nnqG.js";import"./index-3YbjYt95.js";import"./index-DHdkpn9w.js";import"./iframe-C_SNZhod.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-ls_uGRfb.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-UJ9OPPb9.js";import"./Svg-Cc5-gT4z.js";import"./components-B4DZ8g90.js";import"./StatusIndicator-D6zHTMAP.js";import"./Text-CAccDmIu.js";import"./mergeStyles-CUPRrJkW.js";import"./Box-BaFZjabm.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-CrH9MJhc.js";import"./grid-CN935qo4.js";import"./cornerShape-DGOP016T.js";import"./index-DE-upP0k.js";import"./ExternalHyperlink-BgJPqBfx.js";import"./Hyperlink-COH45fDD.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CCmDRu-A.js";import"./BaseButton-czmqmkC7.js";import"./Button-DnR17H7r.js";import"./lerna-DAq45o8_.js";import"./Tooltip-C3hAUChH.js";import"./useTooltip-Cvv7sRRu.js";import"./getTransformFromPlacement-B3Csma22.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BLfd2avo.js";import"./Popper-B6X95Cve.js";import"./TertiaryButton-0VfU9K2Q.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-QXkHLNB4.js";import"./ColorPicker-DcQLQ_on.js";import"./ColorInput-BdBS2jcq.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-dKw8g2tl.js";import"./Avatar-BUC8I7hq.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-CHhe4XSu.js";import"./Popup-ClWggkJH.js";import"./x-B1faap_l.js";import"./usePopupTarget-DRVzC7Qb.js";import"./useInitialFocus-Cry9le_a.js";import"./useReturnFocus-CV2fMmZe.js";import"./useFocusRedirect-Cd8NqdP1.js";import"./Breadcrumbs-BtEJi5Zw.js";import"./useOverflowListTarget-CsU6UKd2.js";import"./useListItemRegister-BVx6_ur1.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DOi9TejJ.js";import"./OverflowTooltip-jar4KUuN.js";import"./useListItemSelect-Dvj5x4Ys.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-BO94ulUX.js";import"./Table-B_l1jwJG.js";import"./sanaTheme-BtgRJzTD.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(e,{children:[r.jsx(e.Heading,{children:"RTL Support"}),r.jsxs(e.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
`;const R=()=>r.jsx(i,{theme:{canvas:{palette:{primary:{main:j},alert:{main:k},common:{focusOutline:T,alertInner:C,alertOuter:f,errorInner:x}}}},children:r.jsxs(e,{children:[r.jsx(e.Heading,{children:"Theming"}),r.jsxs(e.Body,{children:[r.jsx(p,{children:"Theming"}),r.jsxs(t,{error:"caution",children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n})})]})]})]})}),d=()=>r.jsx("div",{children:r.jsx(R,{})});d.__RAW__=`import {PrimaryButton} from '@workday/canvas-kit-react/button';
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
`;const it={title:"Features/Theming",parameters:{docs:{page:v}}},o={render:d},a={render:s};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ThemingExample
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...a.parameters?.docs?.source}}};const mt=["Theming","RTL"];export{a as RTL,o as Theming,mt as __namedExportsOrder,it as default};
