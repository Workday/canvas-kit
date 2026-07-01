import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as u}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-CpUtERD4.js";import{R as p,a as r}from"./RadioGroup-DQVZeZlX.js";import{S as b}from"./StaticStates-BzuYGXxn.js";import{C as c}from"./ComponentStatesTable-BYD1NK26.js";import{p as t}from"./permutateProps-CtMwpv-x.js";import{F as a}from"./FormField-BoRh7RQq.js";import"./CanvasProvider-DsukrmKC.js";import"./index-5dfzm_kn.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./index-N3xz2Kqy.js";import"./components-zZF9u2s8.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./LabelText-C38kbPj_.js";import"./Text-Dp9AQPhJ.js";import"./mergeStyles-CBSbM0IM.js";import"./Box-jRVkubPC.js";import"./flex-4pGh-j7a.js";import"./grid-BJ8bTTH_.js";import"./px2rem-C0KbprIx.js";import"./types-DXdjelYI.js";import"./models-CHTjB2ql.js";const W={title:"Testing/Inputs/Radio",component:p,parameters:{chromatic:{disable:!1}}},o=e.jsxs(a.Input,{as:p,name:"contact",value:"email",children:[e.jsx(r,{id:"1",value:"email",label:"E-mail"}),e.jsx(r,{id:"2",value:"phone",label:"Phone"}),e.jsx(r,{id:"3",value:"fax",label:"Fax (disabled)",disabled:!0}),e.jsx(r,{id:"4",value:"mail",label:"Mail (US Postal Service aka USPS), a longer than normal label"})]}),i=()=>e.jsxs("div",{children:[e.jsx("h3",{children:"Radio"}),e.jsx(b,{children:e.jsx(c,{rowProps:t({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}]}),columnProps:t({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},l=>!(l.disabled&&!["","hover"].includes(l.className))),children:l=>e.jsx(r,{...l,onChange:()=>{},label:"Radio"})})}),e.jsx("h3",{children:"Radio Group"}),e.jsx(b,{children:e.jsx(c,{rowProps:t({error:[{value:void 0,label:"No Error"},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]}),columnProps:[{label:"Left Label",props:{label:"Contact",orientation:"horizontalStart"}},{label:"Top Label",props:{label:"Contact"}}],children:l=>e.jsxs(a,{as:"fieldset",...l,children:[e.jsx(a.Label,{children:l.label}),l.orientation==="horizontalStart"?e.jsxs(a.Field,{children:[o,l.error&&e.jsx(a.Hint,{children:"hintText"})]}):e.jsx(e.Fragment,{children:e.jsxs(a.Field,{children:[o,l.error&&e.jsx(a.Hint,{children:"hintText"})]})})]})})}),e.jsx("h3",{children:"Radio Group (grow)"}),e.jsx(b,{children:e.jsx(c,{rowProps:t({error:[{value:void 0,label:"No Error"},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]}),columnProps:[{label:"Grow",props:{label:"Contact",grow:!0}}],children:l=>e.jsxs(a,{as:"fieldset",...l,cs:{width:l.grow?"100%":void 0},children:[e.jsx(a.Label,{children:l.label}),o,l.orientation==="horizontal"&&e.jsxs(a.Field,{children:[o," ",l.error&&e.jsx(a.Hint,{children:"hintText"})]}),l.error&&e.jsx(a.Hint,{children:"hintText"})]})})}),e.jsx("h3",{children:"RadioGroup (wrapping)"}),e.jsxs("div",{style:{maxWidth:480},children:[e.jsxs(a,{orientation:"horizontalStart",as:"fieldset",children:[e.jsx(a.Label,{as:"legend",children:"Really long label. Really long label. Really long label. Really long label. Really long label. Really long label."}),o]}),e.jsxs(a,{as:"fieldset",children:[e.jsx(a.Label,{as:"legend",children:"Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label."}),o]})]})]}),s=()=>e.jsx("div",{children:e.jsx(b,{children:e.jsx(c,{rowProps:t({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}]}),columnProps:t({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},l=>!(l.disabled&&!["","hover"].includes(l.className))),children:l=>e.jsx("div",{style:{backgroundColor:"#0875e1",padding:"12px",borderRadius:"4px"},children:e.jsx(r,{...l,variant:"inverse",onChange:()=>{},label:"Radio"})})})})}),n=()=>e.jsx(i,{});n.parameters={canvasProviderDecorator:{theme:u}};const d=()=>e.jsx(s,{});d.parameters={canvasProviderDecorator:{theme:u}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <div>
    <h3>Radio</h3>
    <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      checked: [{
        value: true,
        label: 'Checked'
      }, {
        value: false,
        label: 'Unchecked'
      }]
    })} columnProps={permutateProps({
      className: [{
        label: 'Default',
        value: ''
      }, {
        label: 'Hover',
        value: 'hover'
      }, {
        label: 'Focus',
        value: 'focus'
      }, {
        label: 'Focus Hover',
        value: 'focus hover'
      }, {
        label: 'Active',
        value: 'active'
      }, {
        label: 'Active Hover',
        value: 'active hover'
      }],
      disabled: [{
        label: '',
        value: false
      }, {
        label: 'Disabled',
        value: true
      }]
    }, props => {
      if (props.disabled && !['', 'hover'].includes(props.className)) {
        return false;
      }
      return true;
    })}>
        {props => <Radio {...props} onChange={() => {}} // eslint-disable-line no-empty-function
      label="Radio" />}
      </ComponentStatesTable>
    </StaticStates>

    <h3>Radio Group</h3>
    <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      error: [{
        value: undefined,
        label: 'No Error'
      }, {
        value: 'caution',
        label: 'Caution'
      }, {
        value: 'error',
        label: 'Error'
      }]
    })} columnProps={[{
      label: 'Left Label',
      props: {
        label: 'Contact',
        orientation: 'horizontalStart'
      }
    }, {
      label: 'Top Label',
      props: {
        label: 'Contact'
      }
    }]}>
        {props => <FormField as="fieldset" {...props}>
            <FormField.Label>{props.label}</FormField.Label>
            {props.orientation === 'horizontalStart' ? <FormField.Field>
                {testGroup}
                {props.error && <FormField.Hint>hintText</FormField.Hint>}
              </FormField.Field> : <>
                <FormField.Field>
                  {testGroup}
                  {props.error && <FormField.Hint>hintText</FormField.Hint>}
                </FormField.Field>
              </>}
          </FormField>}
      </ComponentStatesTable>
    </StaticStates>
    <h3>Radio Group (grow)</h3>
    <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      error: [{
        value: undefined,
        label: 'No Error'
      }, {
        value: 'caution',
        label: 'Caution'
      }, {
        value: 'error',
        label: 'Error'
      }]
    })} columnProps={[{
      label: 'Grow',
      props: {
        label: 'Contact',
        grow: true
      }
    }]}>
        {props => <FormField as="fieldset" {...props} cs={{
        width: props.grow ? '100%' : undefined
      }}>
            <FormField.Label>{props.label}</FormField.Label>
            {testGroup}
            {props.orientation === 'horizontal' && <FormField.Field>
                {testGroup} {props.error && <FormField.Hint>hintText</FormField.Hint>}
              </FormField.Field>}
            {props.error && <FormField.Hint>hintText</FormField.Hint>}
          </FormField>}
      </ComponentStatesTable>
    </StaticStates>

    <h3>RadioGroup (wrapping)</h3>
    <div style={{
    maxWidth: 480
  }}>
      <FormField orientation="horizontalStart" as="fieldset">
        <FormField.Label as="legend">
          Really long label. Really long label. Really long label. Really long label. Really long
          label. Really long label.
        </FormField.Label>
        {testGroup}
      </FormField>
      <FormField as="fieldset">
        <FormField.Label as="legend">
          Really long label. Really long label. Really long label. Really long label. Really long
          label. Really long label. Really long label. Really long label. Really long label. Really
          long label. Really long label. Really long label. Really long label. Really long label.
          Really long label. Really long label. Really long label. Really long label. Really long
          label. Really long label. Really long label. Really long label. Really long label. Really
          long label. Really long label. Really long label.
        </FormField.Label>
        {testGroup}
      </FormField>
    </div>
  </div>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div>
    <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      checked: [{
        value: true,
        label: 'Checked'
      }, {
        value: false,
        label: 'Unchecked'
      }]
    })} columnProps={permutateProps({
      className: [{
        label: 'Default',
        value: ''
      }, {
        label: 'Hover',
        value: 'hover'
      }, {
        label: 'Focus',
        value: 'focus'
      }, {
        label: 'Focus Hover',
        value: 'focus hover'
      }, {
        label: 'Active',
        value: 'active'
      }, {
        label: 'Active Hover',
        value: 'active hover'
      }],
      disabled: [{
        label: '',
        value: false
      }, {
        label: 'Disabled',
        value: true
      }]
    }, props => {
      if (props.disabled && !['', 'hover'].includes(props.className)) {
        return false;
      }
      return true;
    })}>
        {props => <div style={{
        backgroundColor: '#0875e1',
        padding: '12px',
        borderRadius: '4px'
      }}>
            <Radio {...props} variant="inverse" onChange={() => {}} // eslint-disable-line no-empty-function
        label="Radio" />
          </div>}
      </ComponentStatesTable>
    </StaticStates>
  </div>`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => <RadioStates />",...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => <InverseRadioStates />",...d.parameters?.docs?.source}}};const M=["RadioStates","InverseRadioStates","RadioThemedStates","RadioInverseThemedStates"];export{s as InverseRadioStates,d as RadioInverseThemedStates,i as RadioStates,n as RadioThemedStates,M as __namedExportsOrder,W as default};
