import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-Cr11k6DC.js";import{E as t}from"./Expandable-DU8m2Z7u.js";import{u as l}from"./useDisclosureModel-a5nE6ygN.js";import{S as p}from"./StaticStates-C-HyzpWw.js";import{C as n}from"./ComponentStatesTable-4iWB-WT1.js";import{d}from"./index-5dfzm_kn.js";import{C as b}from"./CanvasProvider-BlMVDzJE.js";import"./cs-rfTTo7Bg.js";import"./Avatar-D7pjJDyI.js";import"./components-DitCssni.js";import"./mergeStyles-CxEFJuxU.js";import"./Box-DEOrcYtQ.js";import"./index-DmIRx617.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./models-CHTjB2ql.js";import"./chevron-up-BKywTRZX.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./px2rem-C0KbprIx.js";import"./TypeLevelComponents-DmEJltuv.js";import"./Text-BDAVcU1f.js";import"./useUniqueId-DC-hMIDg.js";import"./index-5mrAZJYD.js";function m(r){return r.parameters={...r.parameters,chromatic:{disable:!1}},r}m({title:"Testing/Expandable",component:t});const F={title:"Testing/Containers/Expandable",component:t,parameters:{chromatic:{disable:!1}}},i=()=>{const r=l();return e.jsx(p,{children:e.jsx(n,{rowProps:[{label:"No Avatar",props:{}},{label:"Avatar",props:{avatar:!0}},{label:"Depth",props:{depth:d[3]}},{label:"RTL",props:{dir:"rtl"}}],columnProps:[{label:"Closed",props:{visibility:"hidden",id:"1"}},{label:"Opened",props:{visibility:"visible",id:"1"}}],children:a=>{const s={visibility:a.visibility,id:a.id};return e.jsx(b,{dir:a?.dir,children:e.jsxs(t,{model:{...r,state:s},cs:{boxShadow:a.depth},children:[e.jsxs(t.Target,{headingLevel:"h2",children:[e.jsx(t.Icon,{iconPosition:"start"}),a.avatar&&e.jsx(t.Avatar,{name:"Logan McNeil"}),e.jsx(t.Title,{children:"Hello"})]}),e.jsx(t.Content,{children:"Content"})]})})}})})},o=()=>{const r=l();return e.jsx(p,{children:e.jsx(n,{rowProps:[{label:"No Avatar",props:{}},{label:"Avatar",props:{avatar:!0}},{label:"Depth",props:{depth:d[3]}},{label:"RTL",props:{dir:"rtl"}}],columnProps:[{label:"Closed",props:{visibility:"hidden",id:"1"}},{label:"Opened",props:{visibility:"visible",id:"1"}}],children:a=>{const s={visibility:a.visibility,id:a.id};return e.jsx(b,{dir:a?.dir,children:e.jsxs(t,{model:{...r,state:s},cs:{boxShadow:a.depth},children:[e.jsxs(t.Target,{headingLevel:"h3",children:[a?.avatar&&e.jsx(t.Avatar,{name:"Logan McNeil"}),e.jsx(t.Title,{children:"Hello"}),e.jsx(t.Icon,{iconPosition:"end"})]}),e.jsx(t.Content,{children:"Content"})]})})}})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const G=["StartIcon","EndIcon"];export{o as EndIcon,i as StartIcon,G as __namedExportsOrder,F as default};
