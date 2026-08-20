import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{C as s,d as a}from"./ColorPicker-IgPh6eU1.js";import{r as p}from"./index-IfJi-UCQ.js";import{S as C}from"./StaticStates-DQfAotsh.js";import{C as d}from"./ComponentStatesTable-u_KZtbcZ.js";import"./ColorInput-D8PKKm1C.js";import"./check-small-BqSDQIle.js";import"./types-wqmYQQWa.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./SystemIcon-CznyzdLa.js";import"./Svg-DpPQdFHV.js";import"./px2rem-C0KbprIx.js";import"./components-WZi6LWjd.js";import"./cornerShape-DLCpy5rz.js";import"./TextInput-FDN0LuCb.js";import"./types-DXdjelYI.js";import"./mergeStyles-C7rR1M8O.js";import"./Box-8nFq7jwp.js";import"./useConstant-B_SD0x5s.js";import"./flex-DzaubaG6.js";import"./grid-CQvZVltP.js";import"./TypeLevelComponents-CI1UQDA-.js";import"./Text-Bea_87QG.js";import"./index-DE-upP0k.js";import"./FormField-BbTV5drn.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-CdfwS4EL.js";import"./BaseButton-DvzFkALc.js";import"./Button-0EZFZE1C.js";import"./CanvasProvider-BhcD6OFZ.js";import"./index-D-t2nnqG.js";const l=()=>{const t=p.useRef(null),[i,m]=p.useState(""),c=u=>{m(u),t.current?.focus()};return e.jsxs("div",{className:"App",children:[e.jsx(s,{showCustomHexInput:!0,onColorChange:c}),e.jsx("label",{htmlFor:"test",children:"Text Area"}),e.jsx("textarea",{id:"test",style:{color:i},ref:t})]})};l.__RAW__=`import * as React from 'react';

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
