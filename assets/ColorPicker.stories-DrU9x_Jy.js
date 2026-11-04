import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{C as s,d as a}from"./ColorPicker-BgcUXhZi.js";import{r as p}from"./index-IfJi-UCQ.js";import{S as C}from"./StaticStates-yYC-il65.js";import{C as d}from"./ComponentStatesTable-C27aY8YY.js";import"./ColorInput-Bs4NdKtj.js";import"./check-small-BqSDQIle.js";import"./types-wqmYQQWa.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./SystemIcon-DxdGt8lR.js";import"./Svg-P4I-l01h.js";import"./px2rem-C0KbprIx.js";import"./components-B2Q2g_kO.js";import"./cornerShape-CbzTqdgH.js";import"./TextInput-DWXGfW5o.js";import"./types-DXdjelYI.js";import"./mergeStyles-Cj6q-U5f.js";import"./Box-Dk0W8wtP.js";import"./useConstant-B_SD0x5s.js";import"./flex-3jl45ffO.js";import"./grid-Ch81PKOz.js";import"./TypeLevelComponents-B7PFv6S9.js";import"./Text-BLlhCS-c.js";import"./index-C_4iH04t.js";import"./FormField-BKQ_YlZQ.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-ENoIoFrq.js";import"./BaseButton-B2qpNNxq.js";import"./Button-oKB08GyB.js";import"./CanvasProvider-CnwanEes.js";import"./index-CFEs8r9D.js";const l=()=>{const t=p.useRef(null),[i,m]=p.useState(""),c=u=>{m(u),t.current?.focus()};return e.jsxs("div",{className:"App",children:[e.jsx(s,{showCustomHexInput:!0,onColorChange:c}),e.jsx("label",{htmlFor:"test",children:"Text Area"}),e.jsx("textarea",{id:"test",style:{color:i},ref:t})]})};l.__RAW__=`import * as React from 'react';

import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';

export const InputInteraction = () => {
  const textAreaRef = React.useRef(null);
  const [color, setColor] = React.useState('');
  const handleColorChange = (c: string) => {
    setColor(c);
    textAreaRef.current?.focus();
  };
  return (
    <div className="App">
      <ColorPicker showCustomHexInput onColorChange={handleColorChange} />
      <label htmlFor="test">Text Area</label>
      <textarea id="test" style={{color: color}} ref={textAreaRef} />
    </div>
  );
};
`;const V={title:"Testing/Preview/Color Picker",component:s},o={render:l},n=()=>{},r={parameters:{chromatic:{disable:!1,pauseAnimationAtEnd:!0}},render:()=>e.jsx(C,{children:e.jsx(d,{rowProps:[{label:"Default",props:{}},{label:"with Hex Input",props:{showCustomHexInput:!0}},{label:"With Reset",props:{resetColor:a.blueberry400,resetLabel:"Reset",onColorReset:n}},{label:"With Reset and Hex Input",props:{showCustomHexInput:!0,resetColor:a.blueberry400,resetLabel:"Reset",onColorReset:n}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(s,{...t,onColorChange:n})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: InputInteractionExample
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false,
      pauseAnimationAtEnd: true
    }
  },
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Default',
      props: {}
    }, {
      label: 'with Hex Input',
      props: {
        showCustomHexInput: true
      }
    }, {
      label: 'With Reset',
      props: {
        resetColor: defaultColorSet.blueberry400,
        resetLabel: 'Reset',
        onColorReset: noop
      }
    }, {
      label: 'With Reset and Hex Input',
      props: {
        showCustomHexInput: true,
        resetColor: defaultColorSet.blueberry400,
        resetLabel: 'Reset',
        onColorReset: noop
      }
    }]} columnProps={[{
      label: 'Default',
      props: {}
    }]}>
        {props => <ColorPicker {...props} onColorChange={noop} />}
      </ComponentStatesTable>
    </StaticStates>
}`,...r.parameters?.docs?.source}}};const X=["InputInteraction","ColorPickerStates"];export{r as ColorPickerStates,o as InputInteraction,X as __namedExportsOrder,V as default};
