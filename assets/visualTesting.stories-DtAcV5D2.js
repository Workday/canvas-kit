import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as n}from"./customThemes-D7636rx0.js";import"./CanvasProviderDecorator-BirNoDt5.js";import{F as e}from"./FormField-BiaCDQV5.js";import{S as i}from"./StaticStates-_2QSyM1Q.js";import{C as l}from"./ComponentStatesTable-Drsmbeok.js";import{p as s}from"./permutateProps-CtMwpv-x.js";import{T as p}from"./TextInput-B7vaA5N_.js";import"./index-D-t2nnqG.js";import"./CanvasProvider-Be6HVxzw.js";import"./index-DE-upP0k.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./components-QZ7dJnr4.js";import"./mergeStyles-D3Z96jzH.js";import"./Box-Dc1pfcXO.js";import"./index-DX07rvw8.js";import"./flex-CyrACzA_.js";import"./grid-DMacGXHk.js";import"./Text-CdOGUfGH.js";import"./types-DXdjelYI.js";import"./px2rem-C0KbprIx.js";import"./cornerShape-CVHz5m1w.js";const O={title:"Testing/Inputs/Form Field",component:e,parameters:{chromatic:{disable:!1}}},o=()=>r.jsx(i,{children:r.jsx(l,{rowProps:[{label:"Required",props:{isRequired:!0}},{label:"Horizontal Start",props:{orientation:"horizontalStart"}},{label:"Grow",props:{grow:!0}},{label:"Horizontal End",props:{orientation:"horizontalEnd"}}],columnProps:s({error:[{value:void 0,label:"Default"},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]}),children:a=>r.jsxs(e,{...a,children:[r.jsx(e.Label,{children:"Label"}),r.jsxs(e.Field,{children:[r.jsx(e.Input,{as:p}),r.jsx(e.Hint,{children:"Helpful text goes here."})]})]})})}),t=()=>r.jsx(o,{});t.parameters={canvasProviderDecorator:{theme:n}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
