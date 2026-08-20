import v from"./Theming-3mobk5IV.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-BhcD6OFZ.js";import{C as e}from"./Card-CjRV3_45.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-BbTV5drn.js";import{T as n}from"./TextInput-FDN0LuCb.js";import{P as p}from"./PrimaryButton-iMzeVJHW.js";import{p as y}from"./px2rem-C0KbprIx.js";import{r as x,j as f,q as C,p as T,m as k,u as j}from"./index-D-t2nnqG.js";import"./index-3YbjYt95.js";import"./index-DzkF99zR.js";import"./iframe-C9_LcRX6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-BTuEGROh.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CznyzdLa.js";import"./Svg-DpPQdFHV.js";import"./components-WZi6LWjd.js";import"./StatusIndicator-DGnYvsnj.js";import"./Text-Bea_87QG.js";import"./mergeStyles-C7rR1M8O.js";import"./Box-8nFq7jwp.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DzaubaG6.js";import"./grid-CQvZVltP.js";import"./cornerShape-DLCpy5rz.js";import"./index-DE-upP0k.js";import"./ExternalHyperlink-QuoTvtLz.js";import"./Hyperlink-DEJ7_UTD.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CdfwS4EL.js";import"./BaseButton-DvzFkALc.js";import"./Button-0EZFZE1C.js";import"./lerna-gpPqhtvW.js";import"./Tooltip-BA5V-_Lr.js";import"./useTooltip-BagWJqAy.js";import"./getTransformFromPlacement-C4BElB4Q.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-Ba4phxpK.js";import"./Popper-Dfod5tHK.js";import"./TertiaryButton-BJZB5OgW.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-CI1UQDA-.js";import"./ColorPicker-IgPh6eU1.js";import"./ColorInput-D8PKKm1C.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-DNSSdp3u.js";import"./Avatar-xvTe6Ek1.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DAj-dA4U.js";import"./Popup-DXtZzhoD.js";import"./x-B1faap_l.js";import"./usePopupTarget-B1OlaCJM.js";import"./useInitialFocus-BcGiMGIV.js";import"./useReturnFocus-BgGx7-9x.js";import"./useFocusRedirect-Cv0dKCjs.js";import"./Breadcrumbs-DKZwkX-O.js";import"./useOverflowListTarget-SRdAHth-.js";import"./useListItemRegister-DJGV2aRR.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BJR-E_KQ.js";import"./OverflowTooltip-DZFsSb7W.js";import"./useListItemSelect-DSbsrAcj.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-nv1ynLdk.js";import"./Table-CB_tF4IX.js";import"./sanaTheme-QE96eMnl.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(e,{children:[r.jsx(e.Heading,{children:"RTL Support"}),r.jsxs(e.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
