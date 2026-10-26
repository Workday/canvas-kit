import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as n}from"./customThemes-rOjM0Wko.js";import"./CanvasProviderDecorator-DQQAphd1.js";import{F as e}from"./FormField-BXVS88YR.js";import{S as i}from"./StaticStates-BdRsZfIL.js";import{C as l}from"./ComponentStatesTable-C1qPt6t3.js";import{p as s}from"./permutateProps-CtMwpv-x.js";import{T as p}from"./TextInput-BGtphxVN.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-CpK17MWY.js";import"./index-C_4iH04t.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./components-DZ7gcnmf.js";import"./mergeStyles-BP16ssCo.js";import"./Box-B7TbbpGF.js";import"./index-DX07rvw8.js";import"./flex-8HjEV6uK.js";import"./grid-DRnqgMjx.js";import"./Text-Dq1Khk-W.js";import"./types-DXdjelYI.js";import"./px2rem-C0KbprIx.js";import"./cornerShape-BGmLOcIR.js";const O={title:"Testing/Inputs/Form Field",component:e,parameters:{chromatic:{disable:!1}}},o=()=>r.jsx(i,{children:r.jsx(l,{rowProps:[{label:"Required",props:{isRequired:!0}},{label:"Horizontal Start",props:{orientation:"horizontalStart"}},{label:"Grow",props:{grow:!0}},{label:"Horizontal End",props:{orientation:"horizontalEnd"}}],columnProps:s({error:[{value:void 0,label:"Default"},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]}),children:a=>r.jsxs(e,{...a,children:[r.jsx(e.Label,{children:"Label"}),r.jsxs(e.Field,{children:[r.jsx(e.Input,{as:p}),r.jsx(e.Hint,{children:"Helpful text goes here."})]})]})})}),t=()=>r.jsx(o,{});t.parameters={canvasProviderDecorator:{theme:n}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
