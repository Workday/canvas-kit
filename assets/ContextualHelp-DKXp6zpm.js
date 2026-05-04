import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as g}from"./index-3YbjYt95.js";import{E as c}from"./union-DvKeCgka.js";import{e as D}from"./index-IfJi-UCQ.js";import{i as p}from"./info-B24MaYO9.js";import{F as r}from"./Flex-BB_s4g0f.js";import{c as l}from"./cs-DvbI9OYs.js";import{F as a}from"./FormField-Bjws_Dzr.js";import{T as m}from"./TextInput-CdyX2CFM.js";import{P as v}from"./PrimaryButton-Cnd4N9Ks.js";import{T as u}from"./Tooltip-Btv9iUgu.js";import{T as h}from"./TertiaryButton-jo8ThkBe.js";import{g as s,p as d}from"./index-CYsyLHR7.js";import{u as M,D as i}from"./Dialog-DSu3fjoQ.js";import{u as f,a as y}from"./useInitialFocus-DXIqVwzr.js";import{u as F}from"./useCloseOnEscape-BOBxCx8K.js";import{u as S}from"./useFocusRedirect-Beo767rE.js";import{u as b}from"./useReturnFocus-BsryDfnL.js";import{u as w}from"./useUniqueId-DC-hMIDg.js";import{H as j}from"./Hyperlink-x6e3UOri.js";import{u as H}from"./useFocusTrap--wi-tGTx.js";import{u as R}from"./getTransformFromPlacement-Dk4LTPXM.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./px2rem-C0KbprIx.js";import"./components-1G01j-He.js";import"./StatusIndicator-BIh9noB6.js";import"./Text-DRUbleCp.js";import"./mergeStyles-BK8Hz87n.js";import"./Box-DFceh3YA.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./Card-CEyROzcv.js";import"./ExternalHyperlink-DnFL28k4.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-CMLUii7y.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-BQ1TZXwZ.js";import"./lerna-Dg0W5Fbg.js";import"./CanvasProvider-BJ-OMKNq.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bw_WRa4H.js";import"./ColorPicker-C8FThZKW.js";import"./ColorInput-Bkpr30Lr.js";import"./check-small-CEmhQ7AS.js";import"./check-BG7HONvH.js";import"./Expandable-70Ub1HQc.js";import"./Avatar-tCwg6Ua1.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-a5nE6ygN.js";import"./chevron-up-D6Ci4o5O.js";import"./Breadcrumbs-_0m6ah8y.js";import"./useOverflowListTarget-CtqJJeXl.js";import"./useListItemSelect-DuQmMHZs.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CIvTapno.js";import"./useTooltip-C6jxCkQj.js";import"./Popper-CvC-z2TH.js";import"./OverflowTooltip-hamrGFdg.js";import"./usePopupTarget-C0UKjDnR.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-Cx_ITbAR.js";import"./types-DXdjelYI.js";import"./Popup-CfPbpWF4.js";import"./x-BnLC6lG-.js";const B=l({flexDirection:"column"}),L=l({flexDirection:"row",gap:s.xs,alignItems:"center"});function k(){const[t,o]=D.useState(""),n=C=>{o(C.target.value)};return e.jsxs(r,{className:B,children:[e.jsxs(a,{isRequired:!0,children:[e.jsx(a.Label,{children:"Favorite Food"}),e.jsx(a.Input,{as:m,onChange:n})]}),e.jsxs(r,{className:L,children:[e.jsx(v,{disabled:!t,children:"Submit"}),e.jsx(u,{title:"All fields must be filled before submitting",placement:"right",children:e.jsx(h,{icon:p,size:"small","aria-label":"Info",disabled:!!t})})]})]})}k.__RAW__=`import React from 'react';

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
`;const N=l({flexDirection:"row",gap:s.sm}),O=l({minWidth:"unset",width:"100%"});function T(){const t=M();f(t),F(t),y(t),S(t),b(t);const o=w();return e.jsx(r,{children:e.jsxs(a,{children:[e.jsxs(r,{className:N,children:[e.jsx(a.Label,{className:O,id:o,children:"Country"}),e.jsxs(i,{model:t,children:[e.jsx(u,{title:"More Info",children:e.jsx(i.Target,{as:h,size:"small",icon:p,"aria-describedby":o})}),e.jsx(i.Popper,{placement:"right",children:e.jsxs(i.Card,{children:[e.jsx(i.CloseIcon,{"aria-label":"Close"}),e.jsx(i.Heading,{cs:{paddingTop:d.xxl},children:"Information"}),e.jsx(i.Body,{children:"This dialog does not trap focus, so tabbing out of it will cause it to close"}),e.jsx(r,{cs:{gap:s.md,padding:d.xs,marginTop:s.sm},children:e.jsx(j,{href:"/",children:"Link"})})]})})]})]}),e.jsx(a.Field,{children:e.jsx(a.Input,{as:m})})]})})}T.__RAW__=`import React from 'react';

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
                <Dialog.Heading cs={{paddingTop: system.padding.xxl}}>Information</Dialog.Heading>
                <Dialog.Body>
                  This dialog does not trap focus, so tabbing out of it will cause it to close
                </Dialog.Body>
                <Flex
                  cs={{gap: system.gap.md, padding: system.padding.xs, marginTop: system.gap.sm}}
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
`;const P=l({flexDirection:"row",gap:s.sm}),_=l({minWidth:"unset",width:"100%"});function I(){const t=R();f(t),F(t),y(t),H(t),b(t);const o=w();return e.jsx(r,{children:e.jsxs(a,{children:[e.jsxs(r,{className:P,children:[e.jsx(a.Label,{className:_,id:o,children:"Name"}),e.jsxs(i,{model:t,children:[e.jsx(u,{title:"More Info",children:e.jsx(i.Target,{as:h,size:"small",icon:p,"aria-describedby":o})}),e.jsx(i.Popper,{placement:"right",children:e.jsxs(i.Card,{children:[e.jsx(i.CloseIcon,{"aria-label":"Close"}),e.jsx(i.Heading,{cs:{paddingTop:d.xl},children:"Information"}),e.jsx(i.Body,{children:"This dialog traps focus. Focus will only return to the rest of the page when the dialog is closed"}),e.jsx(r,{cs:{gap:s.md,padding:d.xs,marginTop:s.sm},children:e.jsx(j,{href:"/",children:"Link"})})]})})]})]}),e.jsx(a.Field,{children:e.jsx(a.Input,{as:m})})]})})}I.__RAW__=`import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
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
                <Dialog.Heading cs={{paddingTop: system.padding.xl}}>Information</Dialog.Heading>
                <Dialog.Body>
                  This dialog traps focus. Focus will only return to the rest of the page when the
                  dialog is closed
                </Dialog.Body>
                <Flex
                  cs={{gap: system.gap.md, padding: system.padding.xs, marginTop: system.gap.sm}}
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
`;function x(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...g(),...t.components},{Meta:n}=o;return n||E("Meta"),e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Guides/Accessibility/Examples/Contextual Help"}),`
`,e.jsx(o.h2,{id:"contextual-help",children:"Contextual Help"}),`
`,e.jsx(o.h3,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(o.p,{children:["A Canvas Kit ",e.jsx(o.code,{children:"Tooltip"}),` can be used to provide additional information about why an element is disabled.
We should not, however, put one directly onto a disabled element because disabled elements do not receive focus
(meaning the tooltip content is not accessible to keyboard users). Instead, we should provide a button next to the disabled
element and apply the `,e.jsx(o.code,{children:"Tooltip"})," to the button."]}),`
`,e.jsx(o.p,{children:e.jsxs(o.strong,{children:["Note: We should avoid passing the ",e.jsx(o.code,{children:"type"})," prop to the ",e.jsx(o.code,{children:"Tooltip"}),". The default behavior is to assign an ",e.jsx(o.code,{children:"aria-label"}),` to the button
(which is what we want)`]})}),`
`,e.jsx(c,{code:k}),`
`,e.jsx(o.h3,{id:"contextual-help-popup-without-focus-trap",children:"Contextual Help Popup Without Focus Trap"}),`
`,e.jsxs(o.p,{children:["If one would like to provide a bit more content than a ",e.jsx(o.code,{children:"Tooltip"}),` will allow (such as buttons or links) a popup should be used.
In this example, a `,e.jsx(o.code,{children:"Dialog"})," is used in conjunction with the ",e.jsx(o.code,{children:"useFocusRedirect"}),` hook to display some text and a link. It will
not trap focus; instead, it will close and focus the next element if the user tabs out or clicks away. A `,e.jsx(o.code,{children:"Tooltip"}),` is still
used on the `,e.jsx(o.code,{children:"Dialog.Target"})," component so that it remains accessible for screen readers."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Dialog"})," inserts an invisible ",e.jsx(o.code,{children:"<div>"})," element right after the button with an ",e.jsx(o.code,{children:"aria-owns"}),` attribute pointing to the
`,e.jsx(o.code,{children:"Dialog.Card"}),`. This allows screen readers to read the popup contents in a logical order with the target. In other words, the
screen reader will announce the `,e.jsx(o.code,{children:"Dialog"})," right after the open button instead of out of order."]}),`
`,e.jsxs(o.p,{children:["Additionally, we apply ",e.jsx(o.code,{children:"aria-describedby"})," to our ",e.jsx(o.code,{children:"Dialog.Target"})," to associate it with the ",e.jsx(o.code,{children:"FormField.Label"}),"."]}),`
`,e.jsx(c,{code:T}),`
`,e.jsx(o.h3,{id:"contextual-help-dialog-with-focus-trap",children:"Contextual Help Dialog With Focus Trap"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"useFocusTrap"})," hook can be used in contextual help where trapping focus within the ",e.jsx(o.code,{children:"Dialog"}),` is the goal. In this case,
focus will remain in the `,e.jsx(o.code,{children:"Dialog"})," until it is closed. This example is otherwise identical to the one above."]}),`
`,e.jsx(c,{code:I})]})}function po(t={}){const{wrapper:o}={...g(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(x,{...t})}):x(t)}function E(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{po as default};
