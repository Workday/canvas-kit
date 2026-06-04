import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{F as r}from"./Flex-9CW8KzBl.js";import{S as s}from"./StaticStates-BT1TFmrJ.js";import{C as t}from"./ComponentStatesTable-19kzZAkK.js";import"./index-IfJi-UCQ.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./Box-BPraYaO3.js";import"./useConstant-CUZppmaV.js";import"./components-AX32LNYc.js";import"./flex-BT-UZmhF.js";import"./CanvasProvider-DcYN8xn4.js";import"./index-5dfzm_kn.js";import"./index-5mrAZJYD.js";const R={title:"Testing/Layout/Flex",component:r,parameters:{chromatic:{disable:!1}}},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Flex LTR States"}),e.jsx(s,{dir:"ltr",children:e.jsx(t,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Row",props:{flexDirection:"row",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Row Reverse",props:{flexDirection:"row-reverse",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column",props:{flexDirection:"column",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column Reverse",props:{flexDirection:"column-reverse",border:"solid 2px",borderColor:"blackPepper500"}}],children:n=>e.jsxs(r,{...n,children:[e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"1"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"2"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"3"})]})})})]})},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Flex RTL States"}),e.jsx(s,{dir:"rtl",children:e.jsx(t,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Row",props:{flexDirection:"row",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Row-Reverse",props:{flexDirection:"row-reverse",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column",props:{flexDirection:"column",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column-Reverse",props:{flexDirection:"column-reverse",border:"solid 2px",borderColor:"blackPepper500"}}],children:n=>e.jsxs(r,{...n,children:[e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"1"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"2"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"3"})]})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Flex LTR States</h2>
        <StaticStates dir="ltr">
          <ComponentStatesTable columnProps={[{
          label: 'Default',
          props: {}
        }]} rowProps={[{
          label: 'Row',
          props: {
            flexDirection: 'row',
            border: 'solid 2px',
            borderColor: 'blackPepper500'
          }
        }, {
          label: 'Row Reverse',
          props: {
            flexDirection: 'row-reverse',
            border: 'solid 2px',
            borderColor: 'blackPepper500'
          }
        }, {
          label: 'Column',
          props: {
            flexDirection: 'column',
            border: 'solid 2px',
            borderColor: 'blackPepper500'
          }
        }, {
          label: 'Column Reverse',
          props: {
            flexDirection: 'column-reverse',
            border: 'solid 2px',
            borderColor: 'blackPepper500'
          }
        }]}>
            {props => {
            return <Flex {...props}>
                  <Flex flex="1 1 auto" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" margin="xxs" paddingY="xxs" paddingX="s">
                    1
                  </Flex>
                  <Flex flex="1 1 auto" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" margin="xxs" paddingY="xxs" paddingX="s">
                    2
                  </Flex>
                  <Flex flex="1 1 auto" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" margin="xxs" paddingY="xxs" paddingX="s">
                    3
                  </Flex>
                </Flex>;
          }}
          </ComponentStatesTable>
        </StaticStates>
      </>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Flex RTL States</h2>
        <StaticStates dir="rtl">
          <ComponentStatesTable columnProps={[{
          label: 'Default',
          props: {}
        }]} rowProps={[{
          label: 'Row',
          props: {
            flexDirection: 'row',
            border: 'solid 2px',
            borderColor: 'blackPepper500'
          }
        }, {
          label: 'Row-Reverse',
          props: {
            flexDirection: 'row-reverse',
            border: 'solid 2px',
            borderColor: 'blackPepper500'
          }
        }, {
          label: 'Column',
          props: {
            flexDirection: 'column',
            border: 'solid 2px',
            borderColor: 'blackPepper500'
          }
        }, {
          label: 'Column-Reverse',
          props: {
            flexDirection: 'column-reverse',
            border: 'solid 2px',
            borderColor: 'blackPepper500'
          }
        }]}>
            {props => {
            return <Flex {...props}>
                  <Flex flex="1 1 auto" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" margin="xxs" paddingY="xxs" paddingX="s">
                    1
                  </Flex>
                  <Flex flex="1 1 auto" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" margin="xxs" paddingY="xxs" paddingX="s">
                    2
                  </Flex>
                  <Flex flex="1 1 auto" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" margin="xxs" paddingY="xxs" paddingX="s">
                    3
                  </Flex>
                </Flex>;
          }}
          </ComponentStatesTable>
        </StaticStates>
      </>;
  }
}`,...l.parameters?.docs?.source}}};const P=["FlexLTRStates","FlexRTLStates"];export{o as FlexLTRStates,l as FlexRTLStates,P as __namedExportsOrder,R as default};
