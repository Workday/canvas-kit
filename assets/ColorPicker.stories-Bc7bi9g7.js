import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{C as s,d as a}from"./ColorPicker-CBKqyMLA.js";import{r as p}from"./index-IfJi-UCQ.js";import{S as C}from"./StaticStates-CZoSR_67.js";import{C as d}from"./ComponentStatesTable-jhhL0fUQ.js";import"./ColorInput-BagXndnK.js";import"./check-small-CEmhQ7AS.js";import"./types-wqmYQQWa.js";import"./index-C5MVqyzH.js";import"./cs-DvbI9OYs.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./components-DlilqqSw.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./mergeStyles-DCTLot6K.js";import"./Box-CfIP0C5s.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./useConstant-CUZppmaV.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./TypeLevelComponents-C7vP30km.js";import"./Text-Tayi47N3.js";import"./index-CYsyLHR7.js";import"./FormField-BYE5lD9z.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./check-BG7HONvH.js";import"./SecondaryButton-BfP_SOlX.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-Cg4j9RPw.js";import"./CanvasProvider-0Y3auRRO.js";const l=()=>{const t=p.useRef(null),[i,m]=p.useState(""),c=u=>{m(u),t.current?.focus()};return e.jsxs("div",{className:"App",children:[e.jsx(s,{showCustomHexInput:!0,onColorChange:c}),e.jsx("label",{htmlFor:"test",children:"Text Area"}),e.jsx("textarea",{id:"test",style:{color:i},ref:t})]})};l.__RAW__=`import * as React from 'react';

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
`;const Y={title:"Testing/Preview/Color Picker",component:s},o={render:l},n=()=>{},r={parameters:{chromatic:{disable:!1,pauseAnimationAtEnd:!0}},render:()=>e.jsx(C,{children:e.jsx(d,{rowProps:[{label:"Default",props:{}},{label:"with Hex Input",props:{showCustomHexInput:!0}},{label:"With Reset",props:{resetColor:a.blueberry400,resetLabel:"Reset",onColorReset:n}},{label:"With Reset and Hex Input",props:{showCustomHexInput:!0,resetColor:a.blueberry400,resetLabel:"Reset",onColorReset:n}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(s,{...t,onColorChange:n})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Z=["InputInteraction","ColorPickerStates"];export{r as ColorPickerStates,o as InputInteraction,Z as __namedExportsOrder,Y as default};
