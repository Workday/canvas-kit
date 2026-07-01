import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{C as t}from"./Card-D79lI0U4.js";import{S as i}from"./StaticStates-BzuYGXxn.js";import{C as d}from"./ComponentStatesTable-BYD1NK26.js";import{p as e,d as l,c as m}from"./index-5dfzm_kn.js";import{p as o}from"./px2rem-C0KbprIx.js";import{b as r}from"./cs-rfTTo7Bg.js";import"./index-IfJi-UCQ.js";import"./components-zZF9u2s8.js";import"./mergeStyles-CBSbM0IM.js";import"./Box-jRVkubPC.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-4pGh-j7a.js";import"./grid-BJ8bTTH_.js";import"./Text-Dp9AQPhJ.js";import"./CanvasProvider-DsukrmKC.js";import"./index-5mrAZJYD.js";const _={title:"Testing/Containers/Card",component:t,parameters:{chromatic:{disable:!1}}},s={render:()=>n.jsx(i,{children:n.jsx(d,{rowProps:[{label:"Without Heading",props:{heading:!1}},{label:"Borderless",props:{variant:"borderless"}},{label:"Tonal",props:{variant:"tonal"}},{label:"With Heading",props:{}},{label:"With custom padding (0px)",props:{cs:{padding:"0"}}},{label:"With custom padding (16px)",props:{cs:{padding:e.md}}},{label:"With custom gap (0px)",props:{cs:{gap:"0"}}},{label:"With custom box shadow (system.depth[1])",props:{cs:{boxShadow:l[1]}}},{label:"With custom width (300px)",props:{cs:{width:o(300)}}},{label:"With custom height (400px)",props:{cs:{height:o(400)}}}],columnProps:[{label:"Components",props:{}}],children:({heading:p=!0,...a})=>n.jsx("div",{style:{background:a.variant!=="tonal"?r(m.surface.raised):void 0,padding:r(e.md)},children:n.jsxs(t,{...a,children:[p&&n.jsx(t.Heading,{children:"Delete Item"}),n.jsx(t.Body,{children:"Card Content"})]})})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Without Heading',
      props: {
        heading: false
      }
    }, {
      label: 'Borderless',
      props: {
        variant: 'borderless'
      }
    }, {
      label: 'Tonal',
      props: {
        variant: 'tonal'
      }
    }, {
      label: 'With Heading',
      props: {}
    }, {
      label: 'With custom padding (0px)',
      props: {
        cs: {
          padding: '0'
        }
      }
    }, {
      label: 'With custom padding (16px)',
      props: {
        cs: {
          padding: system.padding.md
        }
      }
    }, {
      label: 'With custom gap (0px)',
      props: {
        cs: {
          gap: '0'
        }
      }
    }, {
      label: 'With custom box shadow (system.depth[1])',
      props: {
        cs: {
          boxShadow: system.depth[1]
        }
      }
    }, {
      label: 'With custom width (300px)',
      props: {
        cs: {
          width: px2rem(300)
        }
      }
    }, {
      label: 'With custom height (400px)',
      props: {
        cs: {
          height: px2rem(400)
        }
      }
    }]} columnProps={[{
      label: 'Components',
      props: {}
    }]}>
        {({
        heading = true,
        ...props
      }) => <div style={{
        background: props.variant !== 'tonal' ? cssVar(system.color.surface.raised) : undefined,
        padding: cssVar(system.padding.md)
      }}>
            <Card {...props}>
              {heading && <Card.Heading>Delete Item</Card.Heading>}
              <Card.Body>Card Content</Card.Body>
            </Card>
          </div>}
      </ComponentStatesTable>
    </StaticStates>
}`,...s.parameters?.docs?.source}}};const k=["CardStates"];export{s as CardStates,k as __namedExportsOrder,_ as default};
