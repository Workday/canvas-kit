import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{F as r}from"./Flex-DhgDVhul.js";import{S as s}from"./StaticStates-DaA3gwTJ.js";import{C as t}from"./ComponentStatesTable-DiybU44D.js";import"./index-IfJi-UCQ.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./Box-D7WyyqaD.js";import"./useConstant-B_SD0x5s.js";import"./components-BhvJ7593.js";import"./flex-DYbdw5oo.js";import"./CanvasProvider-Dhhaerje.js";import"./index-DE-upP0k.js";import"./index-kj8ZfNNN.js";const R={title:"Testing/Layout/Flex",component:r,parameters:{chromatic:{disable:!1}}},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Flex LTR States"}),e.jsx(s,{dir:"ltr",children:e.jsx(t,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Row",props:{flexDirection:"row",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Row Reverse",props:{flexDirection:"row-reverse",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column",props:{flexDirection:"column",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column Reverse",props:{flexDirection:"column-reverse",border:"solid 2px",borderColor:"blackPepper500"}}],children:n=>e.jsxs(r,{...n,children:[e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"1"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"2"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"3"})]})})})]})},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Flex RTL States"}),e.jsx(s,{dir:"rtl",children:e.jsx(t,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Row",props:{flexDirection:"row",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Row-Reverse",props:{flexDirection:"row-reverse",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column",props:{flexDirection:"column",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column-Reverse",props:{flexDirection:"column-reverse",border:"solid 2px",borderColor:"blackPepper500"}}],children:n=>e.jsxs(r,{...n,children:[e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"1"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"2"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"3"})]})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
