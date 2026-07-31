import v from"./Theming-DiIaFPo5.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-Dyk6_koI.js";import{C as e}from"./Card-DQX9cl5b.js";import{c as m}from"./cs-rfTTo7Bg.js";import{F as t}from"./FormField-B1XM9ifG.js";import{T as n}from"./TextInput-CWt214xj.js";import{P as p}from"./PrimaryButton-Bcznomnt.js";import{p as y}from"./px2rem-C0KbprIx.js";import{r as x,g as f,j as C,p as T,m as k,k as j}from"./index-pMzza0x6.js";import"./index-3YbjYt95.js";import"./index-2g7o55Lu.js";import"./iframe-CkV2tTZR.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-iCIczOlU.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CB7CmGUd.js";import"./Svg-CP9vwvqP.js";import"./components-txAqe3Xu.js";import"./StatusIndicator-SPKXyFiI.js";import"./Text-8v3W_t7V.js";import"./mergeStyles-Cv57vH8h.js";import"./Box-Ber3xeq6.js";import"./index-DM_3aIAw.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-CRSWLfxc.js";import"./grid-B_hxfS-k.js";import"./cornerShape-Dinnbk8k.js";import"./index-DE-upP0k.js";import"./ExternalHyperlink-bWuOmnq5.js";import"./Hyperlink-DNvgug16.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-B7xFUuvh.js";import"./BaseButton-rNx6-AYy.js";import"./Button-BYuL_yBu.js";import"./lerna-BvyFb88h.js";import"./Tooltip-CdEf-_DY.js";import"./useTooltip-C_HOqEa8.js";import"./getTransformFromPlacement-CFlQb2fd.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-jYphKC7B.js";import"./Popper-C6ZR4iXf.js";import"./TertiaryButton-BZz6yk-h.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-CvpwAY8L.js";import"./ColorPicker-CQ3ZyT3x.js";import"./ColorInput-C0VEHooJ.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-Bpb-r6ZR.js";import"./Avatar-BgW0J2wG.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-D1kMuRoK.js";import"./Popup-bjprdV6s.js";import"./x-B1faap_l.js";import"./usePopupTarget-bzvdH9Sb.js";import"./useInitialFocus-vPZJUziU.js";import"./useReturnFocus-BXvf5LDo.js";import"./useFocusRedirect-BruntT9u.js";import"./Breadcrumbs-BiCRG6gL.js";import"./useOverflowListTarget-cBHTq9o8.js";import"./useListItemRegister-Y_tBv-cO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-EokhkDTU.js";import"./OverflowTooltip-BUtHsD4O.js";import"./useListItemSelect-DcPcEq_C.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DL0_xNzt.js";import"./Table-CDnpMcZX.js";import"./sanaTheme-B2AnWScY.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(e,{children:[r.jsx(e.Heading,{children:"RTL Support"}),r.jsxs(e.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
