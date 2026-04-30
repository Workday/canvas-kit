import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as x}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-DOXLYjiu.js";import{I as r}from"./InputGroup-lEhq0HRb.js";import{s as u}from"./search-DC_v2gTw.js";import{x as i}from"./x-small-BxvQm8EX.js";import{T as l}from"./TextInput-6zwAIbi7.js";import{S as m}from"./StaticStates-CBZqM5Fo.js";import{C as h}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as d}from"./permutateProps-CtMwpv-x.js";import{C as b}from"./CanvasProvider-BRuur9nH.js";import{S as c}from"./SystemIcon-Bp_gYX7o.js";import{T as I}from"./TertiaryButton-Byu4oUFZ.js";import{c as p}from"./index-CYsyLHR7.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-DKOKnxgv.js";import"./components-CXVvXGX8.js";import"./models-CHTjB2ql.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./types-wqmYQQWa.js";import"./types-DXdjelYI.js";import"./px2rem-C0KbprIx.js";import"./styled-BsZD6Etj.js";import"./Svg-Z79y1CtT.js";import"./BaseButton-DlhoOuWR.js";import"./Button-_9ty_XDZ.js";const ee={title:"Testing/Inputs/Text Input",component:l,parameters:{chromatic:{disable:!1}}},t=()=>e.jsx(m,{children:e.jsx(h,{rowProps:d({value:[{value:"Input value",label:"With Value"},{value:"",label:"No Value"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:l.ErrorType.Caution,label:"Caution"},{value:l.ErrorType.Error,label:"Error"}]},n=>!(n.value===""&&!n.placeholder)),columnProps:d({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},n=>!(n.disabled&&!["","hover"].includes(n.className))),children:n=>e.jsx(l,{...n,style:{minWidth:60,width:100},onChange:()=>{}})})}),a=()=>e.jsx(t,{});a.parameters={canvasProviderDecorator:{theme:x}};const o=()=>e.jsx(m,{children:e.jsx(h,{rowProps:[{label:"Start",props:{start:[e.jsx(r.InnerStart,{children:e.jsx(c,{icon:u,size:"small"})})]}},{label:"End",props:{end:[e.jsx(r.InnerEnd,{children:e.jsx(I,{role:"presentation",icon:i,size:"small",tabIndex:-1})})]}},{label:"Both",props:{start:[e.jsx(r.InnerStart,{children:e.jsx(c,{icon:u,size:"small"})})],end:[e.jsx(r.InnerEnd,{children:e.jsx(I,{role:"presentation",icon:i,size:"small",tabIndex:-1})})]}},{label:"Multiple",props:{start:[e.jsx(r.InnerStart,{children:e.jsx("span",{children:"1"})}),e.jsx(r.InnerStart,{children:e.jsx("span",{children:"2"})}),e.jsx(r.InnerStart,{children:e.jsx("span",{children:"3"})})],end:[e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"4"})}),e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"5"})}),e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"6"})})]}},{label:"ClearButton w/ value",props:{placeholder:"Placeholder",value:"Some Value",start:[],end:[e.jsx(r.InnerEnd,{children:e.jsx(r.ClearButton,{})})]}},{label:"ClearButton w/o value",props:{placeholder:"",value:"",start:[],end:[e.jsx(r.InnerEnd,{children:e.jsx(r.ClearButton,{})})]}},{label:"Variable Width",props:{end:[e.jsx(r.InnerEnd,{width:"10px",cs:{background:p.surface.info.strong},children:e.jsx("span",{children:"1"})}),e.jsx(r.InnerEnd,{width:"20px",cs:{background:p.surface.warning.strong},children:e.jsx("span",{children:"2"})}),e.jsx(r.InnerEnd,{width:"30px",cs:{background:p.surface.success.strong},children:e.jsx("span",{children:"3"})})]}}],columnProps:[{label:"LTR",props:{dir:"ltr"}},{label:"RTL",props:{dir:"rtl"}}],children:({value:n,placeholder:v,...s})=>e.jsx(b,{dir:s.dir,children:e.jsxs(r,{width:300,children:[s.start,e.jsx(r.Input,{placeholder:v,value:n??"Very Long Text. Very Long Text. Very Long Text."}),s.end]})})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    value: [{
      value: 'Input value',
      label: 'With Value'
    }, {
      value: '',
      label: 'No Value'
    }],
    placeholder: [{
      value: 'Placeholder',
      label: 'Placeholder'
    }],
    error: [{
      value: undefined,
      label: ''
    }, {
      value: TextInput.ErrorType.Caution,
      label: 'Caution'
    }, {
      value: TextInput.ErrorType.Error,
      label: 'Error'
    }]
  }, props => {
    if (props.value === '' && !props.placeholder) {
      return false;
    }
    return true;
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
      {props => <TextInput {...props} style={{
      minWidth: 60,
      width: 100
    }} onChange={() => {}} // eslint-disable-line no-empty-function
    />}
    </ComponentStatesTable>
  </StaticStates>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <TextInputStates />",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={[{
    label: 'Start',
    props: {
      start: [<InputGroup.InnerStart>
                <SystemIcon icon={searchIcon} size="small" />
              </InputGroup.InnerStart>]
    }
  }, {
    label: 'End',
    props: {
      end: [<InputGroup.InnerEnd>
                <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />
              </InputGroup.InnerEnd>]
    }
  }, {
    label: 'Both',
    props: {
      start: [<InputGroup.InnerStart>
                <SystemIcon icon={searchIcon} size="small" />
              </InputGroup.InnerStart>],
      end: [<InputGroup.InnerEnd>
                <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />
              </InputGroup.InnerEnd>]
    }
  }, {
    label: 'Multiple',
    props: {
      start: [<InputGroup.InnerStart>
                <span>1</span>
              </InputGroup.InnerStart>, <InputGroup.InnerStart>
                <span>2</span>
              </InputGroup.InnerStart>, <InputGroup.InnerStart>
                <span>3</span>
              </InputGroup.InnerStart>],
      end: [<InputGroup.InnerEnd>
                <span>4</span>
              </InputGroup.InnerEnd>, <InputGroup.InnerEnd>
                <span>5</span>
              </InputGroup.InnerEnd>, <InputGroup.InnerEnd>
                <span>6</span>
              </InputGroup.InnerEnd>]
    }
  }, {
    label: 'ClearButton w/ value',
    props: {
      placeholder: 'Placeholder',
      value: 'Some Value',
      start: [],
      end: [<InputGroup.InnerEnd>
                <InputGroup.ClearButton />
              </InputGroup.InnerEnd>]
    }
  }, {
    label: 'ClearButton w/o value',
    props: {
      placeholder: '',
      value: '',
      start: [],
      end: [<InputGroup.InnerEnd>
                <InputGroup.ClearButton />
              </InputGroup.InnerEnd>]
    }
  }, {
    label: 'Variable Width',
    props: {
      end: [<InputGroup.InnerEnd width="10px" cs={{
        background: system.color.surface.info.strong
      }}>
                <span>1</span>
              </InputGroup.InnerEnd>, <InputGroup.InnerEnd width="20px" cs={{
        background: system.color.surface.warning.strong
      }}>
                <span>2</span>
              </InputGroup.InnerEnd>, <InputGroup.InnerEnd width="30px" cs={{
        background: system.color.surface.success.strong
      }}>
                <span>3</span>
              </InputGroup.InnerEnd>]
    }
  }]} columnProps={[{
    label: 'LTR',
    props: {
      dir: 'ltr'
    }
  }, {
    label: 'RTL',
    props: {
      dir: 'rtl'
    }
  }]}>
      {({
      value,
      placeholder,
      ...props
    }) => <CanvasProvider dir={props.dir}>
          <InputGroup width={300}>
            {props.start}
            <InputGroup.Input placeholder={placeholder} value={value ?? 'Very Long Text. Very Long Text. Very Long Text.'} />
            {props.end}
          </InputGroup>
        </CanvasProvider>}
    </ComponentStatesTable>
  </StaticStates>`,...o.parameters?.docs?.source}}};const re=["TextInputStates","TextInputThemedStates","InputGroupStates"];export{o as InputGroupStates,t as TextInputStates,a as TextInputThemedStates,re as __namedExportsOrder,ee as default};
