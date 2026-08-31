import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as x}from"./index-3YbjYt95.js";import{ae as D}from"./index-6so-KoFu.js";import{E as d}from"./union-DePjNdvf.js";import{e as v}from"./index-IfJi-UCQ.js";import{i as c}from"./info-DJgWrsaO.js";import{u as S,D as i}from"./Dialog-CCIu0N-w.js";import{u as g,a as f}from"./useInitialFocus-BtBWSoKu.js";import{u as y}from"./useCloseOnEscape-BX8xl9NG.js";import{u as M}from"./useFocusRedirect-CCL3wKTy.js";import{u as F}from"./useReturnFocus-BNRSSHBJ.js";import{u as b}from"./useUniqueId-BoA5684E.js";import{F as r}from"./Flex-Bya8Tutq.js";import{F as a}from"./FormField-A4L1nD1D.js";import{c as l}from"./cs-CmRirKzJ.js";import{T as m}from"./Tooltip-DN54ALip.js";import{T as p}from"./TertiaryButton-aMR34MRB.js";import{p as n,g as s}from"./index-DE-upP0k.js";import{H as k}from"./Hyperlink-DzsL2-aa.js";import{T as u}from"./TextInput-COgKXSBT.js";import{u as B}from"./useFocusTrap-wvwhdqO9.js";import{u as H}from"./getTransformFromPlacement-BMTXYfgW.js";import{P as R}from"./PrimaryButton-omOTtCoc.js";import"./iframe-DNLsrC-Y.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DQIl41_4.js";import"./Svg-BNbEZ3E8.js";import"./px2rem-C0KbprIx.js";import"./components-J2matnwI.js";import"./StatusIndicator-BBvMXJDU.js";import"./Text-CjirTJMi.js";import"./mergeStyles-Dzkg_44R.js";import"./Box-C28byrRl.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Cgcx0XP-.js";import"./grid-D3GOPfSf.js";import"./cornerShape-DaLncuks.js";import"./Card-Cixb7JwI.js";import"./ExternalHyperlink-CaaD5lbQ.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-D5Cqn9Jg.js";import"./BaseButton-CLmEjkXA.js";import"./Button-MuaWtoCf.js";import"./lerna-BGQ5QfjI.js";import"./CanvasProvider-D99BixEQ.js";import"./index-D-t2nnqG.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-C3guoDTA.js";import"./ColorPicker-D3uc791o.js";import"./ColorInput-BfZSPql0.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-Bg296Eln.js";import"./Avatar-BLxuPixd.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Breadcrumbs-CN2fVURZ.js";import"./useOverflowListTarget-I_Pk7uEi.js";import"./useListItemRegister-DiZ5PIQz.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DEcAZBQ-.js";import"./useTooltip-BR1ydcPP.js";import"./Popper--Mi8Hc-7.js";import"./OverflowTooltip-BnIGiGVa.js";import"./useListItemSelect-DWWKuB8D.js";import"./usePopupTarget-CRuM6ip6.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Table-B_FupndC.js";import"./Popup-CFzYh4ki.js";import"./x-B1faap_l.js";import"./types-DXdjelYI.js";const L=l({flexDirection:"row",gap:s.sm}),N=l({minWidth:"unset",width:"100%"});function j(){const t=S();g(t),y(t),f(t),M(t),F(t);const o=b();return e.jsx(r,{children:e.jsxs(a,{children:[e.jsxs(r,{className:L,children:[e.jsx(a.Label,{className:N,id:o,children:"Country"}),e.jsxs(i,{model:t,children:[e.jsx(m,{title:"More Info",children:e.jsx(i.Target,{as:p,size:"small",icon:c,"aria-describedby":o})}),e.jsx(i.Popper,{placement:"right",children:e.jsxs(i.Card,{children:[e.jsx(i.CloseIcon,{"aria-label":"Close"}),e.jsx(i.Heading,{cs:{paddingBlockStart:n.xxl},children:"Information"}),e.jsx(i.Body,{children:"This dialog does not trap focus, so tabbing out of it will cause it to close"}),e.jsx(r,{cs:{gap:s.md,padding:n.xs,marginBlockStart:s.sm},children:e.jsx(k,{href:"/",children:"Link"})})]})})]})]}),e.jsx(a.Field,{children:e.jsx(a.Input,{as:u})})]})})}j.__RAW__=`import React from 'react';

import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  flexDirection: 'row',
  gap: system.gap.sm,
});

const labelStyles = createStyles({
  minWidth: 'unset',
  width: '100%',
});

export function ContextualHelpDialogFocusRedirect() {
  const dialogModel = useDialogModel();
  useCloseOnOutsideClick(dialogModel);
  useCloseOnEscape(dialogModel);
  useInitialFocus(dialogModel);
  useFocusRedirect(dialogModel);
  useReturnFocus(dialogModel);

  const labelId = useUniqueId();

  return (
    <Flex>
      <FormField>
        <Flex className={containerStyles}>
          <FormField.Label className={labelStyles} id={labelId}>
            Country
          </FormField.Label>
          <Dialog model={dialogModel}>
            <Tooltip title="More Info">
              <Dialog.Target
                as={TertiaryButton}
                size="small"
                icon={infoIcon}
                aria-describedby={labelId}
              />
            </Tooltip>
            <Dialog.Popper placement="right">
              <Dialog.Card>
                <Dialog.CloseIcon aria-label="Close" />
                <Dialog.Heading cs={{paddingBlockStart: system.padding.xxl}}>
                  Information
                </Dialog.Heading>
                <Dialog.Body>
                  This dialog does not trap focus, so tabbing out of it will cause it to close
                </Dialog.Body>
                <Flex
                  cs={{
                    gap: system.gap.md,
                    padding: system.padding.xs,
                    marginBlockStart: system.gap.sm,
                  }}
                >
                  <Hyperlink href="/">Link</Hyperlink>
                </Flex>
              </Dialog.Card>
            </Dialog.Popper>
          </Dialog>
        </Flex>
        <FormField.Field>
          <FormField.Input as={TextInput} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
}
`;const O=l({flexDirection:"row",gap:s.sm}),P=l({minWidth:"unset",width:"100%"});function w(){const t=H();g(t),y(t),f(t),B(t),F(t);const o=b();return e.jsx(r,{children:e.jsxs(a,{children:[e.jsxs(r,{className:O,children:[e.jsx(a.Label,{className:P,id:o,children:"Name"}),e.jsxs(i,{model:t,children:[e.jsx(m,{title:"More Info",children:e.jsx(i.Target,{as:p,size:"small",icon:c,"aria-describedby":o})}),e.jsx(i.Popper,{placement:"right",children:e.jsxs(i.Card,{children:[e.jsx(i.CloseIcon,{"aria-label":"Close"}),e.jsx(i.Heading,{cs:{paddingBlockStart:n.xl},children:"Information"}),e.jsx(i.Body,{children:"This dialog traps focus. Focus will only return to the rest of the page when the dialog is closed"}),e.jsx(r,{cs:{gap:s.md,padding:n.xs,marginBlockStart:s.sm},children:e.jsx(k,{href:"/",children:"Link"})})]})})]})]}),e.jsx(a.Field,{children:e.jsx(a.Input,{as:u})})]})})}w.__RAW__=`import React from 'react';

import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  flexDirection: 'row',
  gap: system.gap.sm,
});

const labelStyles = createStyles({
  minWidth: 'unset',
  width: '100%',
});

export function ContextualHelpDialogFocusTrap() {
  const dialogModel = usePopupModel();
  useCloseOnOutsideClick(dialogModel);
  useCloseOnEscape(dialogModel);
  useInitialFocus(dialogModel);
  useFocusTrap(dialogModel);
  useReturnFocus(dialogModel);

  const labelId = useUniqueId();

  return (
    <Flex>
      <FormField>
        <Flex className={containerStyles}>
          <FormField.Label className={labelStyles} id={labelId}>
            Name
          </FormField.Label>
          <Dialog model={dialogModel}>
            <Tooltip title="More Info">
              <Dialog.Target
                as={TertiaryButton}
                size="small"
                icon={infoIcon}
                aria-describedby={labelId}
              />
            </Tooltip>
            <Dialog.Popper placement="right">
              <Dialog.Card>
                <Dialog.CloseIcon aria-label="Close" />
                <Dialog.Heading cs={{paddingBlockStart: system.padding.xl}}>
                  Information
                </Dialog.Heading>
                <Dialog.Body>
                  This dialog traps focus. Focus will only return to the rest of the page when the
                  dialog is closed
                </Dialog.Body>
                <Flex
                  cs={{
                    gap: system.gap.md,
                    padding: system.padding.xs,
                    marginBlockStart: system.gap.sm,
                  }}
                >
                  <Hyperlink href="/">Link</Hyperlink>
                </Flex>
              </Dialog.Card>
            </Dialog.Popper>
          </Dialog>
        </Flex>
        <FormField.Field>
          <FormField.Input as={TextInput} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
}
`;const _=l({flexDirection:"column"}),E=l({flexDirection:"row",gap:s.xs,alignItems:"center"});function I(){const[t,o]=v.useState(""),C=T=>{o(T.target.value)};return e.jsxs(r,{className:_,children:[e.jsxs(a,{isRequired:!0,children:[e.jsx(a.Label,{children:"Favorite Food"}),e.jsx(a.Input,{as:u,onChange:C})]}),e.jsxs(r,{className:E,children:[e.jsx(R,{disabled:!t,children:"Submit"}),e.jsx(m,{title:"All fields must be filled before submitting",placement:"right",children:e.jsx(p,{icon:c,size:"small","aria-label":"Info",disabled:!!t})})]})]})}I.__RAW__=`import React from 'react';

import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const outerContainerStyles = createStyles({
  flexDirection: 'column',
});

const buttonContainerStyles = createStyles({
  flexDirection: 'row',
  gap: system.gap.xs,
  alignItems: 'center',
});

export function ContextualHelpTooltip() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex className={outerContainerStyles}>
      <FormField isRequired>
        <FormField.Label>Favorite Food</FormField.Label>
        <FormField.Input as={TextInput} onChange={handleChange}></FormField.Input>
      </FormField>
      <Flex className={buttonContainerStyles}>
        <PrimaryButton disabled={!value}>Submit</PrimaryButton>
        <Tooltip title="All fields must be filled before submitting" placement="right">
          <TertiaryButton icon={infoIcon} size="small" aria-label="Info" disabled={!!value} />
        </Tooltip>
      </Flex>
    </Flex>
  );
}
`;function h(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...x(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Guides/Accessibility/Examples/Contextual Help"}),`
`,e.jsx(o.h2,{id:"contextual-help",children:"Contextual Help"}),`
`,e.jsx(o.h3,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(o.p,{children:["A Canvas Kit ",e.jsx(o.code,{children:"Tooltip"}),` can be used to provide additional information about why an element is
disabled. We should not, however, put one directly onto a disabled element because disabled elements
do not receive focus (meaning the tooltip content is not accessible to keyboard users). Instead, we
should provide a button next to the disabled element and apply the `,e.jsx(o.code,{children:"Tooltip"})," to the button."]}),`
`,e.jsx(o.p,{children:e.jsxs(o.strong,{children:["Note: We should avoid passing the ",e.jsx(o.code,{children:"type"})," prop to the ",e.jsx(o.code,{children:"Tooltip"}),`. The default behavior is to assign
an `,e.jsx(o.code,{children:"aria-label"})," to the button (which is what we want)"]})}),`
`,e.jsx(d,{code:I}),`
`,e.jsx(o.h3,{id:"contextual-help-popup-without-focus-trap",children:"Contextual Help Popup Without Focus Trap"}),`
`,e.jsxs(o.p,{children:["If one would like to provide a bit more content than a ",e.jsx(o.code,{children:"Tooltip"}),` will allow (such as buttons or
links) a popup should be used. In this example, a `,e.jsx(o.code,{children:"Dialog"}),` is used in conjunction with the
`,e.jsx(o.code,{children:"useFocusRedirect"}),` hook to display some text and a link. It will not trap focus; instead, it will
close and focus the next element if the user tabs out or clicks away. A `,e.jsx(o.code,{children:"Tooltip"}),` is still used on
the `,e.jsx(o.code,{children:"Dialog.Target"})," component so that it remains accessible for screen readers."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Dialog"})," inserts an invisible ",e.jsx(o.code,{children:"<div>"})," element right after the button with an ",e.jsx(o.code,{children:"aria-owns"}),` attribute
pointing to the `,e.jsx(o.code,{children:"Dialog.Card"}),`. This allows screen readers to read the popup contents in a logical
order with the target. In other words, the screen reader will announce the `,e.jsx(o.code,{children:"Dialog"}),` right after the
open button instead of out of order.`]}),`
`,e.jsxs(o.p,{children:["Additionally, we apply ",e.jsx(o.code,{children:"aria-describedby"})," to our ",e.jsx(o.code,{children:"Dialog.Target"}),` to associate it with the
`,e.jsx(o.code,{children:"FormField.Label"}),"."]}),`
`,e.jsx(d,{code:j}),`
`,e.jsx(o.h3,{id:"contextual-help-dialog-with-focus-trap",children:"Contextual Help Dialog With Focus Trap"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"useFocusTrap"})," hook can be used in contextual help where trapping focus within the ",e.jsx(o.code,{children:"Dialog"}),` is
the goal. In this case, focus will remain in the `,e.jsx(o.code,{children:"Dialog"}),` until it is closed. This example is
otherwise identical to the one above.`]}),`
`,e.jsx(d,{code:w})]})}function xo(t={}){const{wrapper:o}={...x(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(h,{...t})}):h(t)}export{xo as default};
