import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{S as t}from"./SelectionGroup-BNIJHxx_.js";import{S as s}from"./StaticStates-BjShJKff.js";import{C as p}from"./ComponentStatesTable-DXLLOxjV.js";import{p as c}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./square-CipQDLeF.js";import"./types-wqmYQQWa.js";import"./components-CwPiNTv7.js";import"./SystemIcon-BX_--XLu.js";import"./Svg-B-_8_IoS.js";import"./px2rem-C0KbprIx.js";import"./cs-CmRirKzJ.js";import"./useListItemRegister-54CK_IPo.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./useListItemRovingFocus-DPhFhJfQ.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemSelect-C8xhwn2K.js";import"./cornerShape-BEKlmC6c.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./CanvasProvider-Djg5GzKY.js";import"./index--KWQvxqz.js";import"./index-kj8ZfNNN.js";const H={title:"Testing/Labs/Selection Group",component:t,parameters:{chromatic:{disable:!1}}},d=[{label:"Default",props:{}},{label:"Hover",props:{itemProps:{className:"hover"}}},{label:"Focus",props:{itemProps:{className:"focus"}}},{label:"Active",props:{itemProps:{className:"active"}}},{label:"Disabled",props:{disabled:!0}}],i={render:()=>e.jsx(s,{children:e.jsx(p,{rowProps:c({initialSelectedIds:[{value:[],label:"Nothing selected"},{value:["option-a"],label:"First selected"},{value:["option-b"],label:"Second selected"}]}),columnProps:d,children:({itemProps:o,...n})=>e.jsx(t,{shouldSelect:()=>!1,mode:"single",width:"content",...n,children:e.jsxs(t.List,{"aria-label":"Single select states",children:[e.jsx(t.Item,{"data-id":"option-a",children:"Option A"}),e.jsx(t.Item,{"data-id":"option-b",...o,children:"Option B"}),e.jsx(t.Item,{"data-id":"option-c",children:"Option C"})]})})})})},r={render:()=>e.jsx(s,{children:e.jsx(p,{rowProps:c({initialSelectedIds:[{value:[],label:"Nothing selected"},{value:["option-a"],label:"First selected"},{value:["option-a","option-b"],label:"First and second selected"}]}),columnProps:d,children:({itemProps:o,...n})=>e.jsx(t,{shouldSelect:()=>!1,mode:"multiple",width:"content",...n,children:e.jsxs(t.List,{"aria-label":"Multi select states",children:[e.jsx(t.Item,{"data-id":"option-a",children:"Option A"}),e.jsx(t.Item,{"data-id":"option-b",...o,children:"Option B"}),e.jsx(t.Item,{"data-id":"option-c",children:"Option C"})]})})})})},l={render:()=>e.jsx(s,{children:e.jsx(p,{rowProps:[{label:"Content",props:{width:"content"}},{label:"Equal",props:{width:"equal"}},{label:"Column",props:{width:"column"}}],columnProps:[{label:"",props:{}}],children:o=>e.jsx(t,{shouldSelect:()=>!1,mode:"single",initialSelectedIds:["short"],...o,children:e.jsxs(t.List,{"aria-label":"Width states",children:[e.jsx(t.Item,{"data-id":"short",children:"Short"}),e.jsx(t.Item,{"data-id":"medium",children:"Medium Length"}),e.jsx(t.Item,{"data-id":"long",children:"A Much Longer Label"})]})})})})},a={render:()=>e.jsx(s,{children:e.jsx(p,{rowProps:[{label:"Default",props:{}},{label:"Error",props:{error:"error"}},{label:"Caution",props:{error:"caution"}}],columnProps:[{label:"",props:{}}],children:o=>e.jsx(t,{shouldSelect:()=>!1,mode:"single",initialSelectedIds:["option-a"],width:"content",...o,children:e.jsxs(t.List,{"aria-label":"Notification states",children:[e.jsx(t.Item,{"data-id":"option-a",children:"Option A"}),e.jsx(t.Item,{"data-id":"option-b",children:"Option B"})]})})})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      initialSelectedIds: [{
        value: [],
        label: 'Nothing selected'
      }, {
        value: ['option-a'],
        label: 'First selected'
      }, {
        value: ['option-b'],
        label: 'Second selected'
      }]
    })} columnProps={stateTableColumnProps}>
        {({
        itemProps,
        ...props
      }) => <SelectionGroup shouldSelect={() => false} mode="single" width="content" {...props}>
            <SelectionGroup.List aria-label="Single select states">
              <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-b" {...itemProps}>
                Option B
              </SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
            </SelectionGroup.List>
          </SelectionGroup>}
      </ComponentStatesTable>
    </StaticStates>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      initialSelectedIds: [{
        value: [],
        label: 'Nothing selected'
      }, {
        value: ['option-a'],
        label: 'First selected'
      }, {
        value: ['option-a', 'option-b'],
        label: 'First and second selected'
      }]
    })} columnProps={stateTableColumnProps}>
        {({
        itemProps,
        ...props
      }) => <SelectionGroup shouldSelect={() => false} mode="multiple" width="content" {...props}>
            <SelectionGroup.List aria-label="Multi select states">
              <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-b" {...itemProps}>
                Option B
              </SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
            </SelectionGroup.List>
          </SelectionGroup>}
      </ComponentStatesTable>
    </StaticStates>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Content',
      props: {
        width: 'content'
      }
    }, {
      label: 'Equal',
      props: {
        width: 'equal'
      }
    }, {
      label: 'Column',
      props: {
        width: 'column'
      }
    }]} columnProps={[{
      label: '',
      props: {}
    }]}>
        {props => <SelectionGroup shouldSelect={() => false} mode="single" initialSelectedIds={['short']} {...props}>
            <SelectionGroup.List aria-label="Width states">
              <SelectionGroup.Item data-id="short">Short</SelectionGroup.Item>
              <SelectionGroup.Item data-id="medium">Medium Length</SelectionGroup.Item>
              <SelectionGroup.Item data-id="long">A Much Longer Label</SelectionGroup.Item>
            </SelectionGroup.List>
          </SelectionGroup>}
      </ComponentStatesTable>
    </StaticStates>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Default',
      props: {}
    }, {
      label: 'Error',
      props: {
        error: 'error'
      }
    }, {
      label: 'Caution',
      props: {
        error: 'caution'
      }
    }]} columnProps={[{
      label: '',
      props: {}
    }]}>
        {props => <SelectionGroup shouldSelect={() => false} mode="single" initialSelectedIds={['option-a']} width="content" {...props}>
            <SelectionGroup.List aria-label="Notification states">
              <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-b">Option B</SelectionGroup.Item>
            </SelectionGroup.List>
          </SelectionGroup>}
      </ComponentStatesTable>
    </StaticStates>
}`,...a.parameters?.docs?.source}}};const R=["SingleSelectStates","MultiSelectStates","WidthStates","NotificationStates"];export{r as MultiSelectStates,a as NotificationStates,i as SingleSelectStates,l as WidthStates,R as __namedExportsOrder,H as default};
