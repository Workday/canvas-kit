import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as b}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-DmgbDNsk.js";import{I as r}from"./InputGroup-BV-5Wj3X.js";import{s as i}from"./search-INhyn6-E.js";import{x as d}from"./x-small-DK7gM0f7.js";import{T as s}from"./TextInput-D51etMr3.js";import{S as h}from"./StaticStates-B5cSwtfE.js";import{C as v}from"./ComponentStatesTable-COHvqMuo.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import{p as u}from"./px2rem-C0KbprIx.js";import{C as S}from"./CanvasProvider-mU4xaRYK.js";import{S as I}from"./SystemIcon-B8HVQN6j.js";import{T as m}from"./TertiaryButton-BPITVf5W.js";import{c as p}from"./index-5dfzm_kn.js";import"./cs-rfTTo7Bg.js";import"./components-hLI4Y7BG.js";import"./models-CHTjB2ql.js";import"./mergeStyles-dbpHOiQg.js";import"./Box-CZFE0ixi.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DNq8_MY_.js";import"./grid-2x3NJxAi.js";import"./types-wqmYQQWa.js";import"./types-DXdjelYI.js";import"./index-5mrAZJYD.js";import"./Svg-Q2G_Ux-O.js";import"./BaseButton-CYxOiuNN.js";import"./Button-4v0JWwSY.js";const Z={title:"Testing/Inputs/Text Input",component:s,parameters:{chromatic:{disable:!1}}},t=()=>e.jsx(h,{children:e.jsx(v,{rowProps:c({value:[{value:"Input value",label:"With Value"},{value:"",label:"No Value"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:s.ErrorType.Caution,label:"Caution"},{value:s.ErrorType.Error,label:"Error"}]},n=>!(n.value===""&&!n.placeholder)),columnProps:c({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},n=>!(n.disabled&&!["","hover"].includes(n.className))),children:n=>e.jsx(s,{...n,cs:{minWidth:u(60),width:u(100)},onChange:()=>{}})})}),a=()=>e.jsx(t,{});a.parameters={canvasProviderDecorator:{theme:b}};const o=()=>e.jsx(h,{children:e.jsx(v,{rowProps:[{label:"Start",props:{start:[e.jsx(r.InnerStart,{children:e.jsx(I,{icon:i,size:"sm"})})]}},{label:"End",props:{end:[e.jsx(r.InnerEnd,{children:e.jsx(m,{role:"presentation",icon:d,size:"small",tabIndex:-1})})]}},{label:"Both",props:{start:[e.jsx(r.InnerStart,{children:e.jsx(I,{icon:i,size:"sm"})})],end:[e.jsx(r.InnerEnd,{children:e.jsx(m,{role:"presentation",icon:d,size:"small",tabIndex:-1})})]}},{label:"Multiple",props:{start:[e.jsx(r.InnerStart,{children:e.jsx("span",{children:"1"})}),e.jsx(r.InnerStart,{children:e.jsx("span",{children:"2"})}),e.jsx(r.InnerStart,{children:e.jsx("span",{children:"3"})})],end:[e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"4"})}),e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"5"})}),e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"6"})})]}},{label:"ClearButton w/ value",props:{placeholder:"Placeholder",value:"Some Value",start:[],end:[e.jsx(r.InnerEnd,{children:e.jsx(r.ClearButton,{})})]}},{label:"ClearButton w/o value",props:{placeholder:"",value:"",start:[],end:[e.jsx(r.InnerEnd,{children:e.jsx(r.ClearButton,{})})]}},{label:"Variable Width",props:{end:[e.jsx(r.InnerEnd,{width:"10px",cs:{background:p.surface.info.strong},children:e.jsx("span",{children:"1"})}),e.jsx(r.InnerEnd,{width:"20px",cs:{background:p.surface.warning.strong},children:e.jsx("span",{children:"2"})}),e.jsx(r.InnerEnd,{width:"30px",cs:{background:p.surface.success.strong},children:e.jsx("span",{children:"3"})})]}}],columnProps:[{label:"LTR",props:{dir:"ltr"}},{label:"RTL",props:{dir:"rtl"}}],children:({value:n,placeholder:x,...l})=>e.jsx(S,{dir:l.dir,children:e.jsxs(r,{cs:{width:u(300),justifyContent:"end"},children:[l.start,e.jsx(r.Input,{placeholder:x,value:n??"Very Long Text. Very Long Text. Very Long Text."}),l.end]})})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
      {props => <TextInput {...props} cs={{
      minWidth: px2rem(60),
      width: px2rem(100)
    }} onChange={() => {}} // eslint-disable-line no-empty-function
    />}
    </ComponentStatesTable>
  </StaticStates>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <TextInputStates />",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={[{
    label: 'Start',
    props: {
      start: [<InputGroup.InnerStart>
                <SystemIcon icon={searchIcon} size="sm" />
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
                <SystemIcon icon={searchIcon} size="sm" />
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
          <InputGroup cs={{
        width: px2rem(300),
        justifyContent: 'end'
      }}>
            {props.start}
            <InputGroup.Input placeholder={placeholder} value={value ?? 'Very Long Text. Very Long Text. Very Long Text.'} />
            {props.end}
          </InputGroup>
        </CanvasProvider>}
    </ComponentStatesTable>
  </StaticStates>`,...o.parameters?.docs?.source}}};const $=["TextInputStates","TextInputThemedStates","InputGroupStates"];export{o as InputGroupStates,t as TextInputStates,a as TextInputThemedStates,$ as __namedExportsOrder,Z as default};
