import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{B as t}from"./Box-D7WyyqaD.js";import{C as i}from"./ComponentStatesTable-DiybU44D.js";import{C as l}from"./CanvasProvider-Dhhaerje.js";import"./index-IfJi-UCQ.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./useConstant-B_SD0x5s.js";import"./components-BhvJ7593.js";import"./index-DE-upP0k.js";import"./index-kj8ZfNNN.js";const C={title:"Testing/Layout/Box",component:t,parameters:{chromatic:{disable:!1}}},e={backgroundColor:"soap400",depth:2,display:"inline-block",paddingY:"xxs",position:"relative"},r={render:()=>n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Note: Standard Props have no bidirectional support"}),n.jsx(i,{columnProps:[{label:"Standard Props",props:{...e,borderInlineStart:"solid 4px",borderInlineStartColor:"cinnamon500",borderInlineEnd:"solid 8px",borderInlineEndColor:"sourLemon500",left:"8px",marginInlineStart:"m",paddingInlineStart:"s",paddingInlineEnd:"l"}},{label:"Logical Props",props:{...e,borderInlineStart:"solid 4px",borderInlineStartColor:"cinnamon500",borderInlineEnd:"solid 8px",borderInlineEndColor:"sourLemon500",insetInlineStart:"8px",marginInlineStart:"m",paddingInlineStart:"s",paddingInlineEnd:"l"}}],rowProps:[{label:"LTR",props:{dir:"ltr"}},{label:"RTL",props:{dir:"rtl"}}],children:o=>n.jsx(l,{dir:o.dir,children:n.jsx(t,{...o,children:"Box"})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <p>Note: Standard Props have no bidirectional support</p>
        <ComponentStatesTable columnProps={[{
        label: 'Standard Props',
        props: {
          ...cellDefaultProps,
          borderInlineStart: 'solid 4px',
          borderInlineStartColor: 'cinnamon500',
          borderInlineEnd: 'solid 8px',
          borderInlineEndColor: 'sourLemon500',
          left: '8px',
          marginInlineStart: 'm',
          paddingInlineStart: 's',
          paddingInlineEnd: 'l'
        }
      }, {
        label: 'Logical Props',
        props: {
          ...cellDefaultProps,
          borderInlineStart: 'solid 4px',
          borderInlineStartColor: 'cinnamon500',
          borderInlineEnd: 'solid 8px',
          borderInlineEndColor: 'sourLemon500',
          insetInlineStart: '8px',
          marginInlineStart: 'm',
          paddingInlineStart: 's',
          paddingInlineEnd: 'l'
        }
      }]} rowProps={[{
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
          {props => {
          return <CanvasProvider dir={props.dir}>
                <Box {...props}>Box</Box>
              </CanvasProvider>;
        }}
        </ComponentStatesTable>
      </>;
  }
}`,...r.parameters?.docs?.source}}};const P=["BoxStates"];export{r as BoxStates,P as __namedExportsOrder,C as default};
