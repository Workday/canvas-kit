import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{C as s}from"./Card-CEyROzcv.js";import{S as i}from"./StaticStates-DCoU3VgY.js";import{C as d}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as o,d as l,c as m}from"./index-CYsyLHR7.js";import{p as r}from"./px2rem-C0KbprIx.js";import{b as e}from"./cs-DvbI9OYs.js";import"./index-IfJi-UCQ.js";import"./components-1G01j-He.js";import"./mergeStyles-BK8Hz87n.js";import"./Box-DFceh3YA.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./Text-DRUbleCp.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-BJ-OMKNq.js";import"./styled-BsZD6Etj.js";const E={title:"Testing/Containers/Card",component:s,parameters:{chromatic:{disable:!1}}},t={render:()=>n.jsx(i,{children:n.jsx(d,{rowProps:[{label:"Without Heading",props:{heading:!1}},{label:"Borderless",props:{variant:"borderless"}},{label:"Tonal",props:{variant:"tonal"}},{label:"With Heading",props:{}},{label:"With custom padding (0px)",props:{cs:{padding:"0"}}},{label:"With custom padding (16px)",props:{cs:{padding:o.md}}},{label:"With custom gap (0px)",props:{cs:{gap:"0"}}},{label:"With custom box shadow (system.depth[1])",props:{cs:{boxShadow:l[1]}}},{label:"With custom width (300px)",props:{cs:{width:r(300)}}},{label:"With custom height (400px)",props:{cs:{height:r(400)}}}],columnProps:[{label:"Components",props:{}}],children:({heading:p=!0,...a})=>n.jsx("div",{style:{background:a.variant!=="tonal"?e(m.surface.raised):void 0,padding:e(o.md)},children:n.jsxs(s,{...a,children:[p&&n.jsx(s.Heading,{children:"Delete Item"}),n.jsx(s.Body,{children:"Card Content"})]})})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const I=["CardStates"];export{t as CardStates,I as __namedExportsOrder,E as default};
