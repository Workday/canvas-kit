import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-ptkQrNmD.js";import{E as t}from"./Expandable-B8ouJUPQ.js";import{u as l}from"./useDisclosureModel-ySjWLcPL.js";import{S as p}from"./StaticStates-NN4j7BUW.js";import{C as n}from"./ComponentStatesTable-CW7qWVhz.js";import{d}from"./index-jCBjnmNg.js";import{C as b}from"./CanvasProvider-BbG-5C5A.js";import"./cs-CmRirKzJ.js";import"./Avatar-DpjWt6WB.js";import"./components-C-u5XlZP.js";import"./mergeStyles-BvjK7w08.js";import"./Box-DPiecUlT.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-D3fQ-Ask.js";import"./grid-CjiGZO2E.js";import"./models-CHTjB2ql.js";import"./chevron-up-CAo1sqci.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BMs2fJzK.js";import"./Svg-DjTVHMAG.js";import"./px2rem-C0KbprIx.js";import"./TypeLevelComponents-CEixL3Wy.js";import"./Text-E1mbx0_d.js";import"./cornerShape-GrTbfZsL.js";import"./useUniqueId-BoA5684E.js";import"./index-kj8ZfNNN.js";function m(r){return r.parameters={...r.parameters,chromatic:{disable:!1}},r}m({title:"Testing/Expandable",component:t});const G={title:"Testing/Containers/Expandable",component:t,parameters:{chromatic:{disable:!1}}},i=()=>{const r=l();return e.jsx(p,{children:e.jsx(n,{rowProps:[{label:"No Avatar",props:{}},{label:"Avatar",props:{avatar:!0}},{label:"Depth",props:{depth:d[3]}},{label:"RTL",props:{dir:"rtl"}}],columnProps:[{label:"Closed",props:{visibility:"hidden",id:"1"}},{label:"Opened",props:{visibility:"visible",id:"1"}}],children:a=>{const s={visibility:a.visibility,id:a.id};return e.jsx(b,{dir:a?.dir,children:e.jsxs(t,{model:{...r,state:s},cs:{boxShadow:a.depth},children:[e.jsxs(t.Target,{headingLevel:"h2",children:[e.jsx(t.Icon,{iconPosition:"start"}),a.avatar&&e.jsx(t.Avatar,{name:"Logan McNeil"}),e.jsx(t.Title,{children:"Hello"})]}),e.jsx(t.Content,{children:"Content"})]})})}})})},o=()=>{const r=l();return e.jsx(p,{children:e.jsx(n,{rowProps:[{label:"No Avatar",props:{}},{label:"Avatar",props:{avatar:!0}},{label:"Depth",props:{depth:d[3]}},{label:"RTL",props:{dir:"rtl"}}],columnProps:[{label:"Closed",props:{visibility:"hidden",id:"1"}},{label:"Opened",props:{visibility:"visible",id:"1"}}],children:a=>{const s={visibility:a.visibility,id:a.id};return e.jsx(b,{dir:a?.dir,children:e.jsxs(t,{model:{...r,state:s},cs:{boxShadow:a.depth},children:[e.jsxs(t.Target,{headingLevel:"h3",children:[a?.avatar&&e.jsx(t.Avatar,{name:"Logan McNeil"}),e.jsx(t.Title,{children:"Hello"}),e.jsx(t.Icon,{iconPosition:"end"})]}),e.jsx(t.Content,{children:"Content"})]})})}})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
