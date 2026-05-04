import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{F as r}from"./Flex-BB_s4g0f.js";import{S as t}from"./StaticStates-DCoU3VgY.js";import{C as s}from"./ComponentStatesTable-jhhL0fUQ.js";import"./index-IfJi-UCQ.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./Box-DFceh3YA.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./components-1G01j-He.js";import"./flex-gl4iW82j.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-BJ-OMKNq.js";import"./index-CYsyLHR7.js";import"./styled-BsZD6Etj.js";const w={title:"Testing/Layout/Flex",component:r,parameters:{chromatic:{disable:!1}}},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Flex LTR States"}),e.jsx(t,{dir:"ltr",children:e.jsx(s,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Row",props:{flexDirection:"row",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Row Reverse",props:{flexDirection:"row-reverse",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column",props:{flexDirection:"column",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column Reverse",props:{flexDirection:"column-reverse",border:"solid 2px",borderColor:"blackPepper500"}}],children:n=>e.jsxs(r,{...n,children:[e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"1"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"2"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"3"})]})})})]})},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Flex RTL States"}),e.jsx(t,{dir:"rtl",children:e.jsx(s,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Row",props:{flexDirection:"row",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Row-Reverse",props:{flexDirection:"row-reverse",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column",props:{flexDirection:"column",border:"solid 2px",borderColor:"blackPepper500"}},{label:"Column-Reverse",props:{flexDirection:"column-reverse",border:"solid 2px",borderColor:"blackPepper500"}}],children:n=>e.jsxs(r,{...n,children:[e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"1"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"2"}),e.jsx(r,{flex:"1 1 auto",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",margin:"xxs",paddingY:"xxs",paddingX:"s",children:"3"})]})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const D=["FlexLTRStates","FlexRTLStates"];export{o as FlexLTRStates,l as FlexRTLStates,D as __namedExportsOrder,w as default};
