import v from"./Theming-D1tEk2rv.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-BdAnrRrV.js";import{C as e}from"./Card-BJfcBlnp.js";import{c as m}from"./cs-rfTTo7Bg.js";import{F as t}from"./FormField-DuShvnld.js";import{T as n}from"./TextInput-DNMBfMVj.js";import{P as p}from"./PrimaryButton-BWDe35uQ.js";import{p as y}from"./px2rem-C0KbprIx.js";import{r as x,j as f,q as C,p as T,m as k,u as j}from"./index-D-t2nnqG.js";import"./index-3YbjYt95.js";import"./index-CCLYCUcL.js";import"./iframe-fcNsQbLG.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-Bg3XhQW7.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DDXGuKaN.js";import"./Svg-DOtJrqB4.js";import"./components-v7JqqvMM.js";import"./StatusIndicator-Bn_llku6.js";import"./Text-CGhXLC3-.js";import"./mergeStyles-DWcFsH6q.js";import"./Box-DBboduCF.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-BeyF4dmz.js";import"./grid-LhDFLHVE.js";import"./cornerShape-BqAy_znZ.js";import"./index-DE-upP0k.js";import"./ExternalHyperlink-CSl8fQT7.js";import"./Hyperlink-7twjq9QK.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DetvBox6.js";import"./BaseButton-CwcWTppN.js";import"./Button-DIqyR1HD.js";import"./lerna-L2hz15L8.js";import"./Tooltip-CIXsZY9p.js";import"./useTooltip-CG-QuIwi.js";import"./getTransformFromPlacement-CgsYHD9j.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-NA8gEnpq.js";import"./Popper-BCGrei36.js";import"./TertiaryButton-DpmPS0az.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DvEPox1F.js";import"./ColorPicker-Cgb9Hdi5.js";import"./ColorInput-Cg14RZWE.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-DhTfPAUC.js";import"./Avatar-BGfd4l2y.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-C18U_xj5.js";import"./Popup-DWq72ULl.js";import"./x-B1faap_l.js";import"./usePopupTarget-BbuiYqPz.js";import"./useInitialFocus-CDRlabme.js";import"./useReturnFocus-BxLABu8v.js";import"./useFocusRedirect-CQwafUeW.js";import"./Breadcrumbs-CWYu4039.js";import"./useOverflowListTarget-BzIX5IBr.js";import"./useListItemRegister-BxAZRU-B.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DNxUV_OH.js";import"./OverflowTooltip-BlFalyvz.js";import"./useListItemSelect-CuPw5UTK.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-vbsWUH5O.js";import"./Table-BK509mjt.js";import"./sanaTheme-CBUPkmgi.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(e,{children:[r.jsx(e.Heading,{children:"RTL Support"}),r.jsxs(e.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
