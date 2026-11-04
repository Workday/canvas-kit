import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-DmZSpJ20.js";import{E as t}from"./Expandable-B_fHYgtb.js";import{u as l}from"./useDisclosureModel-ySjWLcPL.js";import{S as p}from"./StaticStates-yYC-il65.js";import{C as n}from"./ComponentStatesTable-C27aY8YY.js";import{d}from"./index-C_4iH04t.js";import{C as b}from"./CanvasProvider-CnwanEes.js";import"./cs-CmRirKzJ.js";import"./Avatar-BlKvUt6W.js";import"./components-B2Q2g_kO.js";import"./mergeStyles-Cj6q-U5f.js";import"./Box-Dk0W8wtP.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-3jl45ffO.js";import"./grid-Ch81PKOz.js";import"./models-CHTjB2ql.js";import"./chevron-up-CAo1sqci.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DxdGt8lR.js";import"./Svg-P4I-l01h.js";import"./px2rem-C0KbprIx.js";import"./TypeLevelComponents-B7PFv6S9.js";import"./Text-BLlhCS-c.js";import"./cornerShape-CbzTqdgH.js";import"./useUniqueId-BoA5684E.js";import"./index-CFEs8r9D.js";function m(r){return r.parameters={...r.parameters,chromatic:{disable:!1}},r}m({title:"Testing/Expandable",component:t});const G={title:"Testing/Containers/Expandable",component:t,parameters:{chromatic:{disable:!1}}},i=()=>{const r=l();return e.jsx(p,{children:e.jsx(n,{rowProps:[{label:"No Avatar",props:{}},{label:"Avatar",props:{avatar:!0}},{label:"Depth",props:{depth:d[3]}},{label:"RTL",props:{dir:"rtl"}}],columnProps:[{label:"Closed",props:{visibility:"hidden",id:"1"}},{label:"Opened",props:{visibility:"visible",id:"1"}}],children:a=>{const s={visibility:a.visibility,id:a.id};return e.jsx(b,{dir:a?.dir,children:e.jsxs(t,{model:{...r,state:s},cs:{boxShadow:a.depth},children:[e.jsxs(t.Target,{headingLevel:"h2",children:[e.jsx(t.Icon,{iconPosition:"start"}),a.avatar&&e.jsx(t.Avatar,{name:"Logan McNeil"}),e.jsx(t.Title,{children:"Hello"})]}),e.jsx(t.Content,{children:"Content"})]})})}})})},o=()=>{const r=l();return e.jsx(p,{children:e.jsx(n,{rowProps:[{label:"No Avatar",props:{}},{label:"Avatar",props:{avatar:!0}},{label:"Depth",props:{depth:d[3]}},{label:"RTL",props:{dir:"rtl"}}],columnProps:[{label:"Closed",props:{visibility:"hidden",id:"1"}},{label:"Opened",props:{visibility:"visible",id:"1"}}],children:a=>{const s={visibility:a.visibility,id:a.id};return e.jsx(b,{dir:a?.dir,children:e.jsxs(t,{model:{...r,state:s},cs:{boxShadow:a.depth},children:[e.jsxs(t.Target,{headingLevel:"h3",children:[a?.avatar&&e.jsx(t.Avatar,{name:"Logan McNeil"}),e.jsx(t.Title,{children:"Hello"}),e.jsx(t.Icon,{iconPosition:"end"})]}),e.jsx(t.Content,{children:"Content"})]})})}})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const model = useDisclosureModel();
  return <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'No Avatar',
      props: {}
    }, {
      label: 'Avatar',
      props: {
        avatar: true
      }
    }, {
      label: 'Depth',
      props: {
        depth: system.depth[3]
      }
    }, {
      label: 'RTL',
      props: {
        dir: 'rtl'
      }
    }]} columnProps={[{
      label: 'Closed',
      props: {
        visibility: 'hidden',
        id: '1'
      }
    }, {
      label: 'Opened',
      props: {
        visibility: 'visible',
        id: '1'
      }
    }]}>
        {props => {
        const state = {
          visibility: props.visibility,
          id: props.id
        };
        return <CanvasProvider dir={props?.dir}>
              <Expandable model={{
            ...model,
            state
          }} cs={{
            boxShadow: props.depth
          }}>
                <Expandable.Target headingLevel="h2">
                  <Expandable.Icon iconPosition="start" />
                  {props.avatar && <Expandable.Avatar name="Logan McNeil" />}
                  <Expandable.Title>Hello</Expandable.Title>
                </Expandable.Target>
                <Expandable.Content>Content</Expandable.Content>
              </Expandable>
            </CanvasProvider>;
      }}
      </ComponentStatesTable>
    </StaticStates>;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const model = useDisclosureModel();
  return <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'No Avatar',
      props: {}
    }, {
      label: 'Avatar',
      props: {
        avatar: true
      }
    }, {
      label: 'Depth',
      props: {
        depth: system.depth[3]
      }
    }, {
      label: 'RTL',
      props: {
        dir: 'rtl'
      }
    }]} columnProps={[{
      label: 'Closed',
      props: {
        visibility: 'hidden',
        id: '1'
      }
    }, {
      label: 'Opened',
      props: {
        visibility: 'visible',
        id: '1'
      }
    }]}>
        {props => {
        const state = {
          visibility: props.visibility,
          id: props.id
        };
        return <CanvasProvider dir={props?.dir}>
              <Expandable model={{
            ...model,
            state
          }} cs={{
            boxShadow: props.depth
          }}>
                <Expandable.Target headingLevel="h3">
                  {props?.avatar && <Expandable.Avatar name="Logan McNeil" />}
                  <Expandable.Title>Hello</Expandable.Title>
                  <Expandable.Icon iconPosition="end" />
                </Expandable.Target>
                <Expandable.Content>Content</Expandable.Content>
              </Expandable>
            </CanvasProvider>;
      }}
      </ComponentStatesTable>
    </StaticStates>;
}`,...o.parameters?.docs?.source}}};const J=["StartIcon","EndIcon"];export{o as EndIcon,i as StartIcon,J as __namedExportsOrder,G as default};
