import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{B as t}from"./Box-CfIP0C5s.js";import{C as i}from"./ComponentStatesTable-jhhL0fUQ.js";import{C as a}from"./CanvasProvider-0Y3auRRO.js";import"./index-IfJi-UCQ.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./components-DlilqqSw.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./index-CYsyLHR7.js";const P={title:"Testing/Layout/Box",component:t,parameters:{chromatic:{disable:!1}}},e={backgroundColor:"soap400",depth:2,display:"inline-block",paddingY:"xxs",position:"relative"},n={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"Note: Standard Props have no bidirectional support"}),r.jsx(i,{columnProps:[{label:"Standard Props",props:{...e,borderLeft:"solid 4px",borderLeftColor:"cinnamon500",borderRight:"solid 8px",borderRightColor:"sourLemon500",left:"8px",marginLeft:"m",paddingLeft:"s",paddingRight:"l"}},{label:"Logical Props",props:{...e,borderInlineStart:"solid 4px",borderInlineStartColor:"cinnamon500",borderInlineEnd:"solid 8px",borderInlineEndColor:"sourLemon500",insetInlineStart:"8px",marginInlineStart:"m",paddingInlineStart:"s",paddingInlineEnd:"l"}}],rowProps:[{label:"LTR",props:{dir:"ltr"}},{label:"RTL",props:{dir:"rtl"}}],children:o=>r.jsx(a,{dir:o.dir,children:r.jsx(t,{...o,children:"Box"})})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <p>Note: Standard Props have no bidirectional support</p>
        <ComponentStatesTable columnProps={[{
        label: 'Standard Props',
        props: {
          ...cellDefaultProps,
          borderLeft: 'solid 4px',
          borderLeftColor: 'cinnamon500',
          borderRight: 'solid 8px',
          borderRightColor: 'sourLemon500',
          left: '8px',
          marginLeft: 'm',
          paddingLeft: 's',
          paddingRight: 'l'
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
}`,...n.parameters?.docs?.source}}};const h=["BoxStates"];export{n as BoxStates,h as __namedExportsOrder,P as default};
