import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{C as s,d as a}from"./ColorPicker-Cl-khmes.js";import{r as p}from"./index-IfJi-UCQ.js";import{S as C}from"./StaticStates-4xvHslkC.js";import{C as d}from"./ComponentStatesTable-C5axFSBq.js";import"./ColorInput-40B_w6YB.js";import"./check-small-BqSDQIle.js";import"./types-wqmYQQWa.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./SystemIcon-sIhpLqFT.js";import"./Svg-BEkl6RqF.js";import"./px2rem-C0KbprIx.js";import"./components-d5ekN04B.js";import"./cornerShape-D4s9iH9i.js";import"./TextInput-XGsJxoL2.js";import"./types-DXdjelYI.js";import"./mergeStyles-BbM8eln0.js";import"./Box-BoBigmVy.js";import"./useConstant-B_SD0x5s.js";import"./flex-D5XhsXiq.js";import"./grid-BMAUH4x5.js";import"./TypeLevelComponents-DDShjP3S.js";import"./Text-B_9J6dtZ.js";import"./index-jCBjnmNg.js";import"./FormField-Bet0BX5r.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-Dq_wtC7v.js";import"./BaseButton-Cq0-Z1xK.js";import"./Button-Cji_lOEg.js";import"./CanvasProvider-P3Lb2Rl1.js";import"./index-kj8ZfNNN.js";const l=()=>{const t=p.useRef(null),[i,m]=p.useState(""),c=u=>{m(u),t.current?.focus()};return e.jsxs("div",{className:"App",children:[e.jsx(s,{showCustomHexInput:!0,onColorChange:c}),e.jsx("label",{htmlFor:"test",children:"Text Area"}),e.jsx("textarea",{id:"test",style:{color:i},ref:t})]})};l.__RAW__=`import * as React from 'react';

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
