import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{C as a}from"./Card-Cixb7JwI.js";import{S as d}from"./StaticStates-eh1XVmRp.js";import{C as l}from"./ComponentStatesTable-CeuTS0Hq.js";import{p as r,d as m,c as o}from"./index-DE-upP0k.js";import{p}from"./px2rem-C0KbprIx.js";import{b as s}from"./cs-CmRirKzJ.js";import"./index-IfJi-UCQ.js";import"./components-J2matnwI.js";import"./mergeStyles-Dzkg_44R.js";import"./Box-C28byrRl.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Cgcx0XP-.js";import"./grid-D3GOPfSf.js";import"./Text-CjirTJMi.js";import"./cornerShape-DaLncuks.js";import"./CanvasProvider-D99BixEQ.js";import"./index-D-t2nnqG.js";const _={title:"Testing/Containers/Card",component:a,parameters:{chromatic:{disable:!1}}},t={render:()=>n.jsx(d,{children:n.jsx(l,{rowProps:[{label:"Without Heading",props:{heading:!1}},{label:"Default",props:{variant:""}},{label:"Alt",props:{variant:"alt"}},{label:"Tonal",props:{variant:"tonal"}},{label:"With Heading",props:{}},{label:"With custom padding (0px)",props:{cs:{padding:"0"}}},{label:"With custom padding (16px)",props:{cs:{padding:r.md}}},{label:"With custom gap (0px)",props:{cs:{gap:"0"}}},{label:"With custom box shadow (system.depth[1])",props:{cs:{boxShadow:m[1]}}},{label:"With custom width (300px)",props:{cs:{width:p(300)}}},{label:"With custom height (400px)",props:{cs:{height:p(400)}}}],columnProps:[{label:"Components",props:{}}],children:({heading:i=!0,...e})=>n.jsx("div",{style:{background:e.variant!=="alt"?s(o.surface.raised):s(o.bg.alt.default),padding:s(r.md)},children:n.jsxs(a,{...e,children:[i&&n.jsx(a.Heading,{children:"Delete Item"}),n.jsx(a.Body,{children:"Card Content"})]})})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Without Heading',
      props: {
        heading: false
      }
    }, {
      label: 'Default',
      props: {
        variant: ''
      }
    }, {
      label: 'Alt',
      props: {
        variant: 'alt'
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
        background: props.variant !== 'alt' ? cssVar(system.color.surface.raised) : cssVar(system.color.bg.alt.default),
        padding: cssVar(system.padding.md)
      }}>
            <Card {...props}>
              {heading && <Card.Heading>Delete Item</Card.Heading>}
              <Card.Body>Card Content</Card.Body>
            </Card>
          </div>}
      </ComponentStatesTable>
    </StaticStates>
}`,...t.parameters?.docs?.source}}};const k=["CardStates"];export{t as CardStates,k as __namedExportsOrder,_ as default};
