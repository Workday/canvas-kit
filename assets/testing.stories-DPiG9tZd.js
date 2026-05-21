import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{b as g}from"./index-5mrAZJYD.js";import{c as l,p as t}from"./index-5dfzm_kn.js";import{C as s}from"./CountBadge-ylfrr1It.js";import{C as p}from"./ComponentStatesTable-B-CByvzT.js";import{a as i}from"./cs-rfTTo7Bg.js";import"./index-IfJi-UCQ.js";import"./components-TQGor17P.js";const E={title:"Testing/Indicators/Badge/CountBadge",component:s,parameters:{ReadmePath:"react/badge",chromatic:{disable:!1}}},v=i({base:{padding:t.xs,backgroundColor:l.surface.alt.default},modifiers:{variant:{inverse:{backgroundColor:l.brand.accent.primary}}}}),r={render:()=>n.jsx(p,{columnProps:[{label:"Single Digit",props:{count:1}},{label:"Double Digit",props:{count:23}},{label:"Triple Digit",props:{count:456}},{label:"Greater than 999",props:{count:1e3}},{label:"Custom Limit",props:{count:100,limit:100}}],rowProps:[{label:"Default High Emphasis",props:{}},{label:"Default Low Emphasis",props:{emphasis:"low"}},{label:"Inverse High Emphasis",props:{variant:"inverse"}},{label:"Inverse Low Emphasis",props:{emphasis:"low",variant:"inverse"}}],children:e=>n.jsx("div",{...v({variant:e.variant}),children:n.jsx(s,{...e})})})},h=i({vars:{backgroundColor:""},base:({backgroundColor:e})=>({padding:t.md,backgroundColor:e})}),a={render:()=>{const e=["amber","blue","coral","green","indigo","neutral","orange","magenta","purple","red","slate","teal"],c=["100","200","300","400","500","600","700","800","900"].reverse(),m=e.map(o=>({label:o,props:{emphasis:"low",variant:"inverse",count:1,color:o}})),u=c.map(o=>({label:o,props:{colorScale:o}}));return n.jsx(p,{columnProps:u,rowProps:m,children:({color:o,colorScale:d,...b})=>n.jsx("div",{...h({backgroundColor:g[`${o}${d}`]}),children:n.jsx(s,{...b})})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ComponentStatesTable columnProps={[{
      label: 'Single Digit',
      props: {
        count: 1
      }
    }, {
      label: 'Double Digit',
      props: {
        count: 23
      }
    }, {
      label: 'Triple Digit',
      props: {
        count: 456
      }
    }, {
      label: 'Greater than 999',
      props: {
        count: 1000
      }
    }, {
      label: 'Custom Limit',
      props: {
        count: 100,
        limit: 100
      }
    }]} rowProps={[{
      label: 'Default High Emphasis',
      props: {}
    }, {
      label: 'Default Low Emphasis',
      props: {
        emphasis: 'low'
      }
    }, {
      label: 'Inverse High Emphasis',
      props: {
        variant: 'inverse'
      }
    }, {
      label: 'Inverse Low Emphasis',
      props: {
        emphasis: 'low',
        variant: 'inverse'
      }
    }]}>
        {props => <div {...blockStyles({
        variant: props.variant
      })}>
            <CountBadge {...props} />
          </div>}
      </ComponentStatesTable>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = ['amber', 'blue', 'coral', 'green', 'indigo', 'neutral', 'orange', 'magenta', 'purple', 'red', 'slate', 'teal'];
    const colorScales = ['100', '200', '300', '400', '500', '600', '700', '800', '900'].reverse();
    const colorProps = colors.map(color => ({
      label: color,
      props: {
        emphasis: 'low',
        variant: 'inverse',
        count: 1,
        color
      }
    }));
    const colorScaleProps = colorScales.map(colorScale => ({
      label: colorScale,
      props: {
        colorScale
      }
    }));
    return <ComponentStatesTable columnProps={colorScaleProps} rowProps={colorProps}>
        {({
        color,
        colorScale,
        ...props
      }) => <div {...innerBlockStyles({
        backgroundColor: base[\`\${color}\${colorScale}\`]
      })}>
            <CountBadge {...props} />
          </div>}
      </ComponentStatesTable>;
  }
}`,...a.parameters?.docs?.source}}};const T=["CountBadgeStates","CountBadgeInverseBgTest"];export{a as CountBadgeInverseBgTest,r as CountBadgeStates,T as __namedExportsOrder,E as default};
