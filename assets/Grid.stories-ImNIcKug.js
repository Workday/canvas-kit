import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{G as e}from"./Grid-Dy0-mOpP.js";import{S as t}from"./StaticStates-C3PP-oGP.js";import{C as i}from"./ComponentStatesTable-BRHqVBDw.js";import"./index-IfJi-UCQ.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./Box-DK2fs61P.js";import"./useConstant-CUZppmaV.js";import"./components-CBw5fIQ6.js";import"./grid-D_wPoeTG.js";import"./CanvasProvider-DXZI2yoo.js";import"./index-5dfzm_kn.js";import"./index-5mrAZJYD.js";const S={title:"Testing/Layout/Grid",component:e,parameters:{chromatic:{disable:!1}}},o={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Grid States"}),r.jsx(t,{children:r.jsx(i,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Row",props:{gridAutoFlow:"column",border:"solid 2px",borderColor:"blackPepper500",padding:"16px",gridGap:"s"}},{label:"Column",props:{gridAutoFlow:"row",border:"solid 2px",borderColor:"blackPepper500",padding:"16px",gridGap:"s"}},{label:"Template Column",props:{flexDirection:"row",gridTemplateColumns:"repeat(2, 1fr)",border:"solid 2px",borderColor:"blackPepper500",padding:"16px",gridGap:"s"}}],children:n=>r.jsxs(e,{...n,children:[r.jsx(e,{border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s",children:"1"}),r.jsx(e,{border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s",children:"2"}),r.jsx(e,{border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s",children:"3"}),r.jsx(e,{border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s",children:"4"})]})})})]})},d={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Grid UI Layout"}),r.jsx(t,{children:r.jsx(i,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"UI - Grid Area",props:{gridTemplateAreas:"'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",gridTemplateColumns:"1fr 3fr",gridTemplateRows:"auto 300px auto",border:"solid 2px",borderColor:"blackPepper500",padding:"16px",gridGap:"s"}}],children:n=>r.jsxs(e,{...n,children:[r.jsx(e,{gridArea:"Header",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s",children:"Header"}),r.jsx(e,{gridArea:"SideBar",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s",children:"SideBar"}),r.jsx(e,{gridArea:"BodyContent",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s",children:"BodyContent"}),r.jsx(e,{gridArea:"Footer",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s",children:"Footer"})]})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Grid States</h2>
        <StaticStates>
          <ComponentStatesTable columnProps={[{
          label: 'Default',
          props: {}
        }]} rowProps={[{
          label: 'Row',
          props: {
            gridAutoFlow: 'column',
            border: 'solid 2px',
            borderColor: 'blackPepper500',
            padding: '16px',
            gridGap: 's'
          }
        }, {
          label: 'Column',
          props: {
            gridAutoFlow: 'row',
            border: 'solid 2px',
            borderColor: 'blackPepper500',
            padding: '16px',
            gridGap: 's'
          }
        }, {
          label: 'Template Column',
          props: {
            flexDirection: 'row',
            gridTemplateColumns: 'repeat(2, 1fr)',
            border: 'solid 2px',
            borderColor: 'blackPepper500',
            padding: '16px',
            gridGap: 's'
          }
        }]}>
            {props => {
            return <Grid {...props}>
                  <Grid border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" paddingY="xxs" paddingX="s">
                    1
                  </Grid>
                  <Grid border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" paddingY="xxs" paddingX="s">
                    2
                  </Grid>
                  <Grid border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" paddingY="xxs" paddingX="s">
                    3
                  </Grid>
                  <Grid border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" paddingY="xxs" paddingX="s">
                    4
                  </Grid>
                </Grid>;
          }}
          </ComponentStatesTable>
        </StaticStates>
      </>;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Grid UI Layout</h2>
        <StaticStates>
          <ComponentStatesTable columnProps={[{
          label: 'Default',
          props: {}
        }]} rowProps={[{
          label: 'UI - Grid Area',
          props: {
            gridTemplateAreas: "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
            gridTemplateColumns: '1fr 3fr',
            gridTemplateRows: 'auto 300px auto',
            border: 'solid 2px',
            borderColor: 'blackPepper500',
            padding: '16px',
            gridGap: 's'
          }
        }]}>
            {props => {
            return <Grid {...props}>
                  <Grid gridArea="Header" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" paddingY="xxs" paddingX="s">
                    Header
                  </Grid>
                  <Grid gridArea="SideBar" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" paddingY="xxs" paddingX="s">
                    SideBar
                  </Grid>
                  <Grid gridArea="BodyContent" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" paddingY="xxs" paddingX="s">
                    BodyContent
                  </Grid>
                  <Grid gridArea="Footer" border="solid 2px" alignItems="center" justifyContent="center" borderColor="cinnamon500" paddingY="xxs" paddingX="s">
                    Footer
                  </Grid>
                </Grid>;
          }}
          </ComponentStatesTable>
        </StaticStates>
      </>;
  }
}`,...d.parameters?.docs?.source}}};const h=["GridStates","GridUILayout"];export{o as GridStates,d as GridUILayout,h as __namedExportsOrder,S as default};
