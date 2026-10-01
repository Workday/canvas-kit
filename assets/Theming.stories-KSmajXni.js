import v from"./Theming-Iqw41fIK.js";import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{a as F}from"./arrow-right-small-BM2P7hno.js";import{C as i}from"./CanvasProvider-DGWqlLHc.js";import{C as e}from"./Card-DW5XrHM7.js";import{c as m}from"./cs-CmRirKzJ.js";import{F as t}from"./FormField-CM8Jgz8d.js";import{T as n}from"./TextInput-CYlTcryX.js";import{P as p}from"./PrimaryButton-CbdXFTSo.js";import{p as y}from"./px2rem-C0KbprIx.js";import{S as x,P as f,T as C,O as T,m as k,U as j}from"./index-kj8ZfNNN.js";import"./index-3YbjYt95.js";import"./index-CiaMWYbr.js";import"./iframe-CNhLLaFO.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./union-CTmlbt7X.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-vXgIF5zT.js";import"./Svg-BzLA6oZ0.js";import"./components-DTthHGKT.js";import"./StatusIndicator-CJKCReNn.js";import"./Text-DTfwe_zT.js";import"./mergeStyles-DKqoPbSL.js";import"./Box-B-CSScYU.js";import"./index-DsKuT9Xg.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Db6l7LhR.js";import"./grid-BuNt6bVu.js";import"./cornerShape-DWAANhH5.js";import"./index-jCBjnmNg.js";import"./ExternalHyperlink-BLw2aCRE.js";import"./Hyperlink-CCm-F-d2.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-Bqr8EMWQ.js";import"./BaseButton-CV6FwbLE.js";import"./Button-DGnEnmhD.js";import"./lerna-qk1XUpFu.js";import"./Tooltip-DcG7yoNZ.js";import"./useTooltip-CgLpdJvj.js";import"./getTransformFromPlacement-D0miBKMZ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BEuuUG2L.js";import"./Popper-ChXqbTlz.js";import"./TertiaryButton-D4l0taVd.js";import"./TypeLevelComponents-DTn-DeHR.js";import"./ColorPicker-CM2G7Ub4.js";import"./ColorInput-DfZVZ3Rj.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-D3y34LVc.js";import"./Avatar-D-X49Bur.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-ByMeJm8M.js";import"./Popup-BtVu20Qn.js";import"./x-B1faap_l.js";import"./usePopupTarget-BPF2zy8a.js";import"./useInitialFocus-DX321HoV.js";import"./useReturnFocus-LUunQ5Ks.js";import"./useFocusRedirect-Cz4pbmhj.js";import"./Breadcrumbs-Ds8bIXCz.js";import"./useOverflowListTarget-GAudhvjB.js";import"./useListItemRegister-B15KThaE.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CPFz14_c.js";import"./OverflowTooltip-D-tSVQDC.js";import"./useListItemSelect---b-W7HL.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DMNHdeEQ.js";import"./Table-CHfHzS4h.js";import"./sanaTheme-CdqtBuCA.js";import"./types-DXdjelYI.js";const S=m({paddingInlineStart:y(64)}),I=m({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),w=()=>{const[l,c]=h.useState(""),u=g=>{c(g.target.value)};return r.jsxs(e,{children:[r.jsx(e.Heading,{children:"RTL Support"}),r.jsxs(e.Body,{cs:S,children:[r.jsxs(t,{children:[r.jsx(t.Label,{children:"Email"}),r.jsx(t.Field,{children:r.jsx(t.Input,{as:n,onChange:u,value:l})})]}),r.jsx(p,{cs:I,iconPosition:"end",icon:F,children:"RTL"})]})]})},s=()=>r.jsx(i,{dir:"rtl",children:r.jsx(w,{})});s.__RAW__=`import React from 'react';

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
`;const ot={title:"Features/Theming",parameters:{docs:{page:v}}},o={render:d},a={render:s};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ThemingExample
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...a.parameters?.docs?.source}}};const at=["Theming","RTL"];export{a as RTL,o as Theming,at as __namedExportsOrder,ot as default};
