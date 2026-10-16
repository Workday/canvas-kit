import v from"./Theming-C-xHe2Gg.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-BHb5_c8k.js";import{C as o}from"./Card-CEBuJOSv.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField--j1qiwmN.js";import{T as n}from"./TextInput-C3mJl_eO.js";import{P as p}from"./PrimaryButton-By7VUXg8.js";import{p as y}from"./px2rem-C0KbprIx.js";import{S as x,P as f,T as C,O as T,m as k,U as j}from"./index-kj8ZfNNN.js";import"./index-3YbjYt95.js";import"./index-EBgFcv5i.js";import"./iframe-B7df14hJ.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-BB63apep.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CUbzRY0K.js";import"./Svg-DEIkz5dS.js";import"./components-BIe4YBQT.js";import"./StatusIndicator-COFktHaJ.js";import"./Text-CNQ2hnGj.js";import"./mergeStyles-DdaEVkWU.js";import"./Box-Iypa-ysL.js";import"./index-5enOfKoO.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BwCXUuSV.js";import"./grid-DXeFpVCA.js";import"./cornerShape-SMDvHRmU.js";import"./index--KWQvxqz.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-BvCIMCCX.js";import"./Hyperlink-DdjEfQT-.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-KazAI8Tn.js";import"./BaseButton-C49WX9Rc.js";import"./Button-IFDag6rZ.js";import"./lerna-C1CB0Xoi.js";import"./Tooltip-CSGy_WI_.js";import"./useTooltip-DzymDaaP.js";import"./getTransformFromPlacement-CBrFg0vm.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-p6BLzHcP.js";import"./Popper-CqSBbT2S.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CYMp_DqV.js";import"./TypeLevelComponents-BIf-Sb8C.js";import"./ColorPicker-fgt1yNAi.js";import"./ColorInput-Cec_SRld.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-vowNc99p.js";import"./Avatar-aL9vVSpj.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cs0Aoz0c.js";import"./Popup-C8V0gvhY.js";import"./x-B1faap_l.js";import"./usePopupTarget-D6mRuUoU.js";import"./useInitialFocus-Cyj9VBtN.js";import"./useReturnFocus-CdbVNFA8.js";import"./useFocusRedirect-B06ozcxf.js";import"./Breadcrumbs-CSWDmukJ.js";import"./useOverflowListItemMeasure--2JoF_M1.js";import"./useListItemRegister-CVfhnkS0.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-C93fbBQV.js";import"./OverflowTooltip-q2DzOlhE.js";import"./useListItemRovingFocus-BNNvfPJ2.js";import"./useListItemSelect-D6fgT6R_.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CNKhJ8da.js";import"./Flex-Pvt9KTg5.js";import"./Table-CTN-R6cb.js";import"./sanaTheme-ZLzVEuG4.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(o,{children:[r.jsx(o.Heading,{children:"RTL Support"}),r.jsxs(o.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
