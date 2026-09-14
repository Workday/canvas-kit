import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as n}from"./customThemes-CCxpLVmD.js";import"./CanvasProviderDecorator-Cly3GlMn.js";import{F as e}from"./FormField-FxMf8jZG.js";import{S as i}from"./StaticStates-DZVd41Ka.js";import{C as l}from"./ComponentStatesTable-KZUjJnAl.js";import{p as s}from"./permutateProps-CtMwpv-x.js";import{T as p}from"./TextInput-ZTnGvziz.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-COPbPVH-.js";import"./index-DE-upP0k.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./components-DYsyV1GU.js";import"./mergeStyles-BvUVBTqR.js";import"./Box-BTogCL2M.js";import"./index-DX07rvw8.js";import"./flex-BQOSV42r.js";import"./grid-B7Ycm_WM.js";import"./Text-DiRXiAON.js";import"./types-DXdjelYI.js";import"./px2rem-C0KbprIx.js";import"./cornerShape-BMI6yems.js";const O={title:"Testing/Inputs/Form Field",component:e,parameters:{chromatic:{disable:!1}}},o=()=>r.jsx(i,{children:r.jsx(l,{rowProps:[{label:"Required",props:{isRequired:!0}},{label:"Horizontal Start",props:{orientation:"horizontalStart"}},{label:"Grow",props:{grow:!0}},{label:"Horizontal End",props:{orientation:"horizontalEnd"}}],columnProps:s({error:[{value:void 0,label:"Default"},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]}),children:a=>r.jsxs(e,{...a,children:[r.jsx(e.Label,{children:"Label"}),r.jsxs(e.Field,{children:[r.jsx(e.Input,{as:p}),r.jsx(e.Hint,{children:"Helpful text goes here."})]})]})})}),t=()=>r.jsx(o,{});t.parameters={canvasProviderDecorator:{theme:n}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={[{
    label: 'Required',
    props: {
      isRequired: true
    }
  }, {
    label: 'Horizontal Start',
    props: {
      orientation: 'horizontalStart'
    }
  }, {
    label: 'Grow',
    props: {
      grow: true
    }
  }, {
    label: 'Horizontal End',
    props: {
      orientation: 'horizontalEnd'
    }
  }]} columnProps={permutateProps({
    error: [{
      value: undefined,
      label: 'Default'
    }, {
      value: 'caution',
      label: 'Caution'
    }, {
      value: 'error',
      label: 'Error'
    }]
  })}>
      {props => <FormField {...props}>
          <FormField.Label>Label</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} />
            <FormField.Hint>Helpful text goes here.</FormField.Hint>
          </FormField.Field>
        </FormField>}
    </ComponentStatesTable>
  </StaticStates>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => <FormFieldStates />",...t.parameters?.docs?.source}}};const k=["FormFieldStates","FormFieldThemedStates"];export{o as FormFieldStates,t as FormFieldThemedStates,k as __namedExportsOrder,O as default};
