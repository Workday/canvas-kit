import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{t as b,c as S}from"./customThemes-C11tdrWd.js";import"./CanvasProviderDecorator-CTq3y2Hq.js";import{I as r}from"./InputGroup-0_A98R4s.js";import{s as d}from"./search-DlWaqbP4.js";import{x as c}from"./x-small-Cfgu7dLY.js";import{T as s}from"./TextInput-CWt214xj.js";import{S as v}from"./StaticStates-zOyvF3kU.js";import{C as x}from"./ComponentStatesTable-BmPWoFYu.js";import{p as m}from"./permutateProps-CtMwpv-x.js";import{p as i}from"./px2rem-C0KbprIx.js";import{C as f}from"./CanvasProvider-Dyk6_koI.js";import{S as I}from"./SystemIcon-CB7CmGUd.js";import{T as h}from"./TertiaryButton-BZz6yk-h.js";import{c as u}from"./index-DE-upP0k.js";import"./index-pMzza0x6.js";import"./cs-rfTTo7Bg.js";import"./components-txAqe3Xu.js";import"./models-CHTjB2ql.js";import"./mergeStyles-Cv57vH8h.js";import"./Box-Ber3xeq6.js";import"./index-DM_3aIAw.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-CRSWLfxc.js";import"./grid-B_hxfS-k.js";import"./types-wqmYQQWa.js";import"./types-DXdjelYI.js";import"./cornerShape-Dinnbk8k.js";import"./Svg-CP9vwvqP.js";import"./BaseButton-rNx6-AYy.js";import"./Button-BYuL_yBu.js";const ee={title:"Testing/Inputs/Text Input",component:s,parameters:{chromatic:{disable:!1}}},t=({theme:l}={})=>e.jsx(v,{theme:b(l),children:e.jsx(x,{rowProps:m({value:[{value:"Input value",label:"With Value"},{value:"",label:"No Value"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:s.ErrorType.Caution,label:"Caution"},{value:s.ErrorType.Error,label:"Error"}]},n=>!(n.value===""&&!n.placeholder)),columnProps:m({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},n=>!(n.disabled&&!["","hover"].includes(n.className))),children:n=>e.jsx(s,{...n,cs:{minWidth:i(60),width:i(100)},onChange:()=>{}})})}),a=()=>e.jsx(t,{theme:S}),o=()=>e.jsx(v,{children:e.jsx(x,{rowProps:[{label:"Start",props:{start:[e.jsx(r.InnerStart,{children:e.jsx(I,{icon:d,size:"sm"})})]}},{label:"End",props:{end:[e.jsx(r.InnerEnd,{children:e.jsx(h,{role:"presentation",icon:c,size:"small",tabIndex:-1})})]}},{label:"Both",props:{start:[e.jsx(r.InnerStart,{children:e.jsx(I,{icon:d,size:"sm"})})],end:[e.jsx(r.InnerEnd,{children:e.jsx(h,{role:"presentation",icon:c,size:"small",tabIndex:-1})})]}},{label:"Multiple",props:{start:[e.jsx(r.InnerStart,{children:e.jsx("span",{children:"1"})}),e.jsx(r.InnerStart,{children:e.jsx("span",{children:"2"})}),e.jsx(r.InnerStart,{children:e.jsx("span",{children:"3"})})],end:[e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"4"})}),e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"5"})}),e.jsx(r.InnerEnd,{children:e.jsx("span",{children:"6"})})]}},{label:"ClearButton w/ value",props:{placeholder:"Placeholder",value:"Some Value",start:[],end:[e.jsx(r.InnerEnd,{children:e.jsx(r.ClearButton,{})})]}},{label:"ClearButton w/o value",props:{placeholder:"",value:"",start:[],end:[e.jsx(r.InnerEnd,{children:e.jsx(r.ClearButton,{})})]}},{label:"Variable Width",props:{end:[e.jsx(r.InnerEnd,{width:"10px",cs:{background:u.surface.info.strong},children:e.jsx("span",{children:"1"})}),e.jsx(r.InnerEnd,{width:"20px",cs:{background:u.surface.warning.strong},children:e.jsx("span",{children:"2"})}),e.jsx(r.InnerEnd,{width:"30px",cs:{background:u.surface.success.strong},children:e.jsx("span",{children:"3"})})]}}],columnProps:[{label:"LTR",props:{dir:"ltr"}},{label:"RTL",props:{dir:"rtl"}}],children:({value:l,placeholder:n,...p})=>e.jsx(f,{dir:p.dir,children:e.jsxs(r,{cs:{width:i(300),justifyContent:"end"},children:[p.start,e.jsx(r.Input,{placeholder:n,value:l??"Very Long Text. Very Long Text. Very Long Text."}),p.end]})})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  theme
} = {}) => <StaticStates theme={toCanvasProviderTheme(theme)}>
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
  </StaticStates>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <TextInputStates theme={customColorTheme} />",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...o.parameters?.docs?.source}}};const re=["TextInputStates","TextInputThemedStates","InputGroupStates"];export{o as InputGroupStates,t as TextInputStates,a as TextInputThemedStates,re as __namedExportsOrder,ee as default};
