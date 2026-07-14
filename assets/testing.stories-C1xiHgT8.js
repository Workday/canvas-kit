import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as h}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-DtF0hq1d.js";import{R as o}from"./RadioGroup-RNlh7cKn.js";import{S as u}from"./StaticStates-MSWr8SnM.js";import{C as p}from"./ComponentStatesTable-CFexaReD.js";import{p as r}from"./permutateProps-CtMwpv-x.js";import{F as a}from"./FormFieldGroup-Bzwv6LYs.js";import{b}from"./cs-rfTTo7Bg.js";import{s as R,p as g,c as F}from"./index-5dfzm_kn.js";import"./CanvasProvider-DKylCnBg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-B2vXpe_3.js";import"./components-Dyf4Q_nV.js";import"./Flex-3MZwcTIN.js";import"./index-N3xz2Kqy.js";import"./Box-Dji2xsFp.js";import"./useConstant-CUZppmaV.js";import"./flex-CoK9Wr5Y.js";import"./mergeStyles-DA3z7m0v.js";import"./grid-BEk7oOv6.js";import"./models-CHTjB2ql.js";import"./Text-CSA8kpWB.js";import"./FormField-I1tQCnQg.js";import"./useUniqueId-DC-hMIDg.js";const m="Helpful text goes here.",v="error-desc-id",q={title:"Testing/Preview/Radio",component:o,parameters:{chromatic:{disable:!1}}},s=e.jsxs(a.List,{as:o,name:"contact",value:"email",children:[e.jsx(a.Input,{as:o.RadioButton,id:"1",value:"email",children:"Email"}),e.jsx(a.Input,{as:o.RadioButton,id:"2",value:"phone",children:"Phone"}),e.jsx(a.Input,{as:o.RadioButton,id:"3",disabled:!0,value:"fax",children:"Fax (disabled)"}),e.jsx(a.Input,{as:o.RadioButton,id:"4",value:"mail",children:'"Mail (US Postal Service aka USPS), a longer than normal label"'})]}),t={render:()=>e.jsxs("div",{children:[e.jsx(u,{children:e.jsx(p,{rowProps:r({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}]}),columnProps:r({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},l=>!(l.disabled&&!["","hover"].includes(l.className))),children:l=>e.jsxs(o,{children:[e.jsx(o.RadioButton,{disabled:l.disabled,...l,children:"Email"}),e.jsx(o.RadioButton,{disabled:l.disabled,...l,children:"Phone"})]})})}),e.jsx("h3",{children:"Radio Group"}),e.jsx(u,{children:e.jsx(p,{rowProps:r({error:[{value:void 0,label:"No Error"},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]}),columnProps:[{label:"Horizontal Start",props:{label:"Contact",labelPosition:"horizontalStart"}},{label:"Top Label",props:{label:"Contact",labelPosition:"vertical"}},{label:"Horizontal End",props:{label:"Contact",labelPosition:"horizontalEnd"}}],children:l=>e.jsxs(a,{id:v,orientation:l.labelPosition,error:l.error,children:[e.jsx(a.Label,{children:l.label}),e.jsxs(a.Field,{children:[s,e.jsx(a.Hint,{children:typeof l.error<"u"?m:void 0})]})]})})}),e.jsx("h3",{children:"Radio Group (grow)"}),e.jsx(u,{children:e.jsx(p,{rowProps:r({error:[{value:void 0,label:"No Error"},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]}),columnProps:[{label:"Grow",props:{label:"Contact",grow:!0}}],children:l=>e.jsxs(a,{id:v,orientation:"vertical",error:l.error,children:[e.jsx(a.Label,{children:l.label}),e.jsxs(a.Field,{children:[s,e.jsx(a.Hint,{children:typeof l.error<"u"?m:void 0})]})]})})}),e.jsx("h3",{children:"RadioGroup (wrapping)"}),e.jsxs("div",{style:{maxWidth:480},children:[e.jsxs(a,{orientation:"horizontalStart",children:[e.jsx(a.Label,{children:"Really long label. Really long label. Really long label. Really long label. Really long label. Really long label."}),e.jsx(a.Field,{children:s})]}),e.jsxs(a,{children:[e.jsx(a.Label,{children:"Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label."}),e.jsx(a.Field,{children:s})]})]})]})},i={render:()=>e.jsx("div",{children:e.jsx(u,{children:e.jsx(p,{rowProps:r({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}]}),columnProps:r({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},l=>!(l.disabled&&!["","hover"].includes(l.className))),children:({disabled:l,...c})=>e.jsx("div",{style:{backgroundColor:b(F.surface.contrast.default),padding:b(g.sm),borderRadius:b(R.sm)},children:e.jsxs(o,{children:[e.jsxs(o.Label,{disabled:l,variant:"inverse",children:[e.jsx(o.Label.Input,{...c}),e.jsx(o.Label.Text,{children:"Email"})]}),e.jsxs(o.Label,{disabled:l,variant:"inverse",children:[e.jsx(o.Label.Input,{...c}),e.jsx(o.Label.Text,{children:"Phone"})]})]})})})})})},n={parameters:{canvasProviderDecorator:{theme:h}},render:t.render},d={parameters:{canvasProviderDecorator:{theme:h}},render:i.render};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
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
            {props => <RadioGroup>
                <RadioGroup.RadioButton disabled={props.disabled} {...props}>
                  Email
                </RadioGroup.RadioButton>
                <RadioGroup.RadioButton disabled={props.disabled} {...props}>
                  Phone
                </RadioGroup.RadioButton>
              </RadioGroup>}
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
          label: 'Horizontal Start',
          props: {
            label: 'Contact',
            labelPosition: 'horizontalStart'
          }
        }, {
          label: 'Top Label',
          props: {
            label: 'Contact',
            labelPosition: 'vertical'
          }
        }, {
          label: 'Horizontal End',
          props: {
            label: 'Contact',
            labelPosition: 'horizontalEnd'
          }
        }]}>
            {props => <FormFieldGroup id={hintId} orientation={props.labelPosition} error={props.error}>
                <FormFieldGroup.Label>{props.label}</FormFieldGroup.Label>
                <FormFieldGroup.Field>
                  {testGroup}
                  <FormFieldGroup.Hint>
                    {typeof props.error !== 'undefined' ? hintText : undefined}
                  </FormFieldGroup.Hint>
                </FormFieldGroup.Field>
              </FormFieldGroup>}
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
            {props => <FormFieldGroup id={hintId} orientation={'vertical'} error={props.error}>
                <FormFieldGroup.Label>{props.label}</FormFieldGroup.Label>
                <FormFieldGroup.Field>
                  {testGroup}
                  <FormFieldGroup.Hint>
                    {typeof props.error !== 'undefined' ? hintText : undefined}
                  </FormFieldGroup.Hint>
                </FormFieldGroup.Field>
              </FormFieldGroup>}
          </ComponentStatesTable>
        </StaticStates>
        <h3>RadioGroup (wrapping)</h3>
        <div style={{
        maxWidth: 480
      }}>
          <FormFieldGroup orientation="horizontalStart">
            <FormFieldGroup.Label>
              Really long label. Really long label. Really long label. Really long label. Really
              long label. Really long label.
            </FormFieldGroup.Label>
            <FormFieldGroup.Field>{testGroup}</FormFieldGroup.Field>
          </FormFieldGroup>
          <FormFieldGroup>
            <FormFieldGroup.Label>
              Really long label. Really long label. Really long label. Really long label. Really
              long label. Really long label. Really long label. Really long label. Really long
              label. Really long label. Really long label. Really long label. Really long label.
              Really long label. Really long label. Really long label. Really long label. Really
              long label. Really long label. Really long label. Really long label. Really long
              label. Really long label. Really long label. Really long label. Really long label.
            </FormFieldGroup.Label>
            <FormFieldGroup.Field>{testGroup}</FormFieldGroup.Field>
          </FormFieldGroup>
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div>
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
          {({
          disabled,
          ...props
        }) => <div style={{
          backgroundColor: cssVar(system.color.surface.contrast.default),
          padding: cssVar(system.padding.sm),
          borderRadius: cssVar(system.shape.sm)
        }}>
              <RadioGroup>
                <RadioGroup.Label disabled={disabled} variant="inverse">
                  <RadioGroup.Label.Input {...props} />
                  <RadioGroup.Label.Text>Email</RadioGroup.Label.Text>
                </RadioGroup.Label>
                <RadioGroup.Label disabled={disabled} variant="inverse">
                  <RadioGroup.Label.Input {...props} />
                  <RadioGroup.Label.Text>Phone</RadioGroup.Label.Text>
                </RadioGroup.Label>
              </RadioGroup>
            </div>}
        </ComponentStatesTable>
      </StaticStates>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme
    }
  },
  render: RadioStates.render
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme
    }
  },
  render: InverseRadioStates.render
}`,...d.parameters?.docs?.source}}};const J=["RadioStates","InverseRadioStates","RadioThemedStates","RadioInverseThemedStates"];export{i as InverseRadioStates,d as RadioInverseThemedStates,t as RadioStates,n as RadioThemedStates,J as __namedExportsOrder,q as default};
