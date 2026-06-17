import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{C as s,d as a}from"./ColorPicker-jYr8j44j.js";import{r as p}from"./index-IfJi-UCQ.js";import{S as C}from"./StaticStates-C-HyzpWw.js";import{C as d}from"./ComponentStatesTable-4iWB-WT1.js";import"./ColorInput-BFzKHuzz.js";import"./check-small-C7Z-gSGs.js";import"./types-wqmYQQWa.js";import"./index-DmIRx617.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./px2rem-C0KbprIx.js";import"./components-DitCssni.js";import"./TextInput-DVgi3nRK.js";import"./types-DXdjelYI.js";import"./mergeStyles-CxEFJuxU.js";import"./Box-DEOrcYtQ.js";import"./useConstant-CUZppmaV.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./TypeLevelComponents-DmEJltuv.js";import"./Text-BDAVcU1f.js";import"./index-5dfzm_kn.js";import"./FormField-C3WtjF-e.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./check-Bvurkvei.js";import"./SecondaryButton-BpQ17X7-.js";import"./BaseButton-MNe7k-Ow.js";import"./Button-Dptie1iu.js";import"./CanvasProvider-BlMVDzJE.js";import"./index-5mrAZJYD.js";const l=()=>{const t=p.useRef(null),[i,m]=p.useState(""),c=u=>{m(u),t.current?.focus()};return e.jsxs("div",{className:"App",children:[e.jsx(s,{showCustomHexInput:!0,onColorChange:c}),e.jsx("label",{htmlFor:"test",children:"Text Area"}),e.jsx("textarea",{id:"test",style:{color:i},ref:t})]})};l.__RAW__=`import * as React from 'react';

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
`;const U={title:"Testing/Preview/Color Picker",component:s},o={render:l},n=()=>{},r={parameters:{chromatic:{disable:!1,pauseAnimationAtEnd:!0}},render:()=>e.jsx(C,{children:e.jsx(d,{rowProps:[{label:"Default",props:{}},{label:"with Hex Input",props:{showCustomHexInput:!0}},{label:"With Reset",props:{resetColor:a.blueberry400,resetLabel:"Reset",onColorReset:n}},{label:"With Reset and Hex Input",props:{showCustomHexInput:!0,resetColor:a.blueberry400,resetLabel:"Reset",onColorReset:n}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(s,{...t,onColorChange:n})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const V=["InputInteraction","ColorPickerStates"];export{r as ColorPickerStates,o as InputInteraction,V as __namedExportsOrder,U as default};
