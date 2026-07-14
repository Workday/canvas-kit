import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{e as f,r as b}from"./index-IfJi-UCQ.js";import{d as e,C as d}from"./ColorPicker-CDRVOXJG.js";import{u as h}from"./getTransformFromPlacement-BtpPb64q.js";import{u as P,a as S}from"./useInitialFocus-CxEazES6.js";import{u as I}from"./useCloseOnEscape-Ci8oPZu-.js";import{u as y,c as R}from"./useReturnFocus-D1Qs81ZF.js";import{P as a}from"./Popup-C7rWMGxh.js";import{F as k}from"./FormField-I1tQCnQg.js";import{C as T}from"./ColorInput-Bd0nnyvQ.js";import{d as v,p as F,g as x}from"./index-5dfzm_kn.js";import{b as E}from"./background-color-CVF2Md9H.js";import{T as L}from"./TertiaryButton-BROdkGKz.js";import"./cs-rfTTo7Bg.js";import"./TypeLevelComponents-DcuzfFnP.js";import"./Text-CSA8kpWB.js";import"./components-Dyf4Q_nV.js";import"./mergeStyles-DA3z7m0v.js";import"./Box-Dji2xsFp.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CoK9Wr5Y.js";import"./grid-BEk7oOv6.js";import"./px2rem-C0KbprIx.js";import"./check-Bvurkvei.js";import"./types-wqmYQQWa.js";import"./SecondaryButton-CFAfozPp.js";import"./BaseButton-B0mfYlEf.js";import"./SystemIcon-CcQdM6y6.js";import"./Svg-CDIwIDn-.js";import"./Button-6WgYUb9O.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Popper-BRNkOZhn.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-DKylCnBg.js";import"./index-B2vXpe_3.js";import"./Card-C0w1QPqP.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-Cgr2fBV0.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-CGpXr3az.js";import"./types-DXdjelYI.js";const w=()=>{const o=e.blueberry400,[l,s]=f.useState(o),[p,u]=f.useState(o),[g,C]=f.useState(o),t=h();P(t),I(t),S(t),y(t);const V=()=>{s(o),C(o),u(o),t.events.hide(),R(t.state.targetRef.current)},j=[e.cinnamon400,e.cantaloupe400,e.sourLemon400,e.greenApple400,e.blueberry400,e.pomegranate400,e.frenchVanilla100,e.frenchVanilla200,e.frenchVanilla400,e.blackPepper100,e.blackPepper400,e.blackPepper600],O=n=>{console.log("blur",n.currentTarget,n.relatedTarget,t.state.stackRef.current),!t.state.stackRef.current||t.state.stackRef.current.contains(n.relatedTarget)};return r.jsx(a,{model:t,children:r.jsxs(k,{children:[r.jsx(k.Label,{children:"Choose a color"}),r.jsx(k.Input,{as:a.Target.as(T),onChange:n=>C(n.target.value),onValidColorChange:n=>{u(n.toUpperCase()),s(n.toUpperCase())},value:g,showCheck:p===l||g===l,onFocus:t.events.show,onBlur:O}),r.jsx(a.Popper,{children:r.jsx(a.Card,{cs:{marginBlockStart:x.sm,padding:F.md,boxShadow:v[3]},children:r.jsx(a.Body,{children:r.jsx(d,{resetColor:e.blueberry400,resetLabel:"Reset",onColorChange:n=>{C(n.toUpperCase()),s(n.toUpperCase()),t.events.hide(),t.state.targetRef.current?.focus()},onColorReset:V,value:l,colorSet:j})})})})]})})};w.__RAW__=`import React from 'react';

import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {system} from '@workday/canvas-tokens-web';

import {defaultColorSet} from '../../lib/defaultColorSet';

export const ColorInputPopup = () => {
  const defaultColor = defaultColorSet.blueberry400;

  const [color, setColor] = React.useState(defaultColor);
  const [colorInputValidColor, setColorInputValidColor] = React.useState(defaultColor);
  const [colorInputValue, setColorInputValue] = React.useState(defaultColor);
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  const resetColor = () => {
    setColor(defaultColor);
    setColorInputValue(defaultColor);
    setColorInputValidColor(defaultColor);
    model.events.hide();
    changeFocus(model.state.targetRef.current);
  };

  const colorSet = [
    defaultColorSet.cinnamon400,
    defaultColorSet.cantaloupe400,
    defaultColorSet.sourLemon400,
    defaultColorSet.greenApple400,
    defaultColorSet.blueberry400,
    defaultColorSet.pomegranate400,
    defaultColorSet.frenchVanilla100,
    defaultColorSet.frenchVanilla200,
    defaultColorSet.frenchVanilla400,
    defaultColorSet.blackPepper100,
    defaultColorSet.blackPepper400,
    defaultColorSet.blackPepper600,
  ];

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('blur', e.currentTarget, e.relatedTarget, model.state.stackRef.current);
    if (
      !model.state.stackRef.current ||
      !model.state.stackRef.current.contains(e.relatedTarget as Node)
    ) {
      // model.events.hide();
    }
  };

  return (
    <Popup model={model}>
      <FormField>
        <FormField.Label>Choose a color</FormField.Label>
        <FormField.Input
          as={Popup.Target.as(ColorInput)}
          onChange={e => setColorInputValue(e.target.value)}
          onValidColorChange={color => {
            setColorInputValidColor(color.toUpperCase());
            setColor(color.toUpperCase());
          }}
          value={colorInputValue}
          showCheck={colorInputValidColor === color || colorInputValue === color}
          onFocus={model.events.show}
          onBlur={onBlur}
        />
        <Popup.Popper>
          <Popup.Card
            cs={{
              marginBlockStart: system.gap.sm,
              padding: system.padding.md,
              boxShadow: system.depth[3],
            }}
          >
            <Popup.Body>
              <ColorPicker
                resetColor={defaultColorSet.blueberry400}
                resetLabel={'Reset'}
                onColorChange={color => {
                  setColorInputValue(color.toUpperCase());
                  setColor(color.toUpperCase());
                  model.events.hide();
                  model.state.targetRef.current?.focus();
                }}
                onColorReset={resetColor}
                value={color}
                colorSet={colorSet}
              />
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </FormField>
    </Popup>
  );
};
`;const B=()=>{const o=h(),[l,s]=b.useState("");P(o),I(o),S(o),y(o);const p=b.useCallback(u=>{s(u.toUpperCase()),o.events.hide(),R(o.state.targetRef.current)},[o.events,o.state.targetRef]);return r.jsxs(a,{model:o,children:[r.jsx(a.Target,{as:L,icon:E,"aria-label":"Select Background Color"}),r.jsx(a.Popper,{children:r.jsx(a.Card,{cs:{marginBlockStart:x.sm,padding:F.md,boxShadow:v[3]},children:r.jsx(a.Body,{children:r.jsx(d,{resetColor:e.blueberry400,resetLabel:"Reset",showCustomHexInput:!0,onColorChange:p,onColorReset:()=>p(e.blueberry400),onSubmitClick:o.events.hide,value:l})})})})]})};B.__RAW__=`import * as React from 'react';

import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {backgroundColorIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {defaultColorSet} from '../../lib/defaultColorSet';

export const IconButtonPopup = () => {
  const model = usePopupModel();
  const [color, setColor] = React.useState('');

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  const handleSubmit = React.useCallback(
    (submitColor: string) => {
      setColor(submitColor.toUpperCase());
      model.events.hide();
      changeFocus(model.state.targetRef.current);
    },
    [model.events, model.state.targetRef]
  );

  return (
    <Popup model={model}>
      <Popup.Target
        as={TertiaryButton}
        icon={backgroundColorIcon}
        aria-label="Select Background Color"
      />
      <Popup.Popper>
        <Popup.Card
          cs={{
            marginBlockStart: system.gap.sm,
            padding: system.padding.md,
            boxShadow: system.depth[3],
          }}
        >
          <Popup.Body>
            <ColorPicker
              resetColor={defaultColorSet.blueberry400}
              resetLabel={'Reset'}
              showCustomHexInput={true}
              onColorChange={handleSubmit}
              onColorReset={() => handleSubmit(defaultColorSet.blueberry400)}
              onSubmitClick={model.events.hide}
              value={color}
            />
          </Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`;const U=()=>{},Vo={title:"Preview/Color Picker",component:d,parameters:{ReadmePath:"preview-react/color-picker"}},c={name:"Default",render:()=>r.jsx(d,{onColorChange:U})},m={name:"Icon button Popup",render:B},i={name:"Color Input Popup",render:w};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <ColorPicker onColorChange={noop} />
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Icon button Popup',
  render: IconButtonPopupExample
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Color Input Popup',
  render: ColorInputPopupExample
}`,...i.parameters?.docs?.source}}};const jo=["Default","IconButtonPopup","ColorInputPopup"];export{i as ColorInputPopup,c as Default,m as IconButtonPopup,jo as __namedExportsOrder,Vo as default};
