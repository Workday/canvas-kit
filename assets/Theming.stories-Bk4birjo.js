import v from"./Theming-BRzaiKWl.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-Be6HVxzw.js";import{C as e}from"./Card-C3heqCcP.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-BiaCDQV5.js";import{T as n}from"./TextInput-B7vaA5N_.js";import{P as p}from"./PrimaryButton-CJyzN3jH.js";import{p as y}from"./px2rem-C0KbprIx.js";import{r as x,j as f,q as C,p as T,m as k,u as j}from"./index-D-t2nnqG.js";import"./index-3YbjYt95.js";import"./index-BCiGnoTk.js";import"./iframe-DWCDe_x6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-8h_Xf_No.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-F3AlfABP.js";import"./Svg-6EIr0d9x.js";import"./components-QZ7dJnr4.js";import"./StatusIndicator-Be3rQhba.js";import"./Text-CdOGUfGH.js";import"./mergeStyles-D3Z96jzH.js";import"./Box-Dc1pfcXO.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-CyrACzA_.js";import"./grid-DMacGXHk.js";import"./cornerShape-CVHz5m1w.js";import"./index-DE-upP0k.js";import"./ExternalHyperlink-D3gR3jJm.js";import"./Hyperlink-BZ9W3Fk6.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BGyt1esh.js";import"./BaseButton-pemrIgdX.js";import"./Button-CDNcbL7j.js";import"./lerna-DB45JsV5.js";import"./Tooltip-U2tnhRa0.js";import"./useTooltip-orIgUyl1.js";import"./getTransformFromPlacement-CbMUg7Oi.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BQzJDd4G.js";import"./Popper-f9ns0Sd-.js";import"./TertiaryButton-DXbHFTEG.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-CCSxXy9m.js";import"./ColorPicker-CSxsZNdj.js";import"./ColorInput-BpB1R8cm.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-Ci8XCDoK.js";import"./Avatar-j8_OhbVi.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-By6shbEp.js";import"./Popup-DHNL6Hcr.js";import"./x-B1faap_l.js";import"./usePopupTarget-B4T79vh-.js";import"./useInitialFocus-CmnJqZCO.js";import"./useReturnFocus-DXs5RuoH.js";import"./useFocusRedirect-CVdK8X6L.js";import"./Breadcrumbs-BqRTHTV0.js";import"./useOverflowListTarget-DTGbXQ1C.js";import"./useListItemRegister-WXULtWeZ.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D82m_70B.js";import"./OverflowTooltip-CttNFr_Y.js";import"./useListItemSelect-DxOFzkf-.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DCBZ_c12.js";import"./Table-6YYdSO2F.js";import"./sanaTheme-BnD2d_40.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(e,{children:[r.jsx(e.Heading,{children:"RTL Support"}),r.jsxs(e.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
`;const at={title:"Features/Theming",parameters:{docs:{page:v}}},o={render:d},a={render:s};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ThemingExample
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...a.parameters?.docs?.source}}};const it=["Theming","RTL"];export{a as RTL,o as Theming,it as __namedExportsOrder,at as default};
