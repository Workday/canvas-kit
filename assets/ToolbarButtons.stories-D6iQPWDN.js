import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{r as m}from"./index-IfJi-UCQ.js";import{T as n}from"./ToolbarIconButton-CBH4_9gf.js";import{c as i}from"./comment-D-QUfcnv.js";import{z as p}from"./zoom-in-CZYLgRzZ.js";import{T as s}from"./ToolbarDropdownButton-CjxU-1m9.js";import{M as t}from"./Menu-ysMRmlXP.js";import{T as d}from"./Tooltip-CvEbeSVk.js";import"./BaseButton-C42PrzLn.js";import"./Box-BTogCL2M.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./useConstant-B_SD0x5s.js";import"./components-DYsyV1GU.js";import"./SystemIcon-B9G-90F0.js";import"./Svg-DNoJzoAH.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-BvUVBTqR.js";import"./flex-BQOSV42r.js";import"./grid-B7Ycm_WM.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useListItemRegister-BmbSpdFv.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-DwxZ_0Dc.js";import"./CanvasProvider-COPbPVH-.js";import"./index-DE-upP0k.js";import"./index-kj8ZfNNN.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DH-VqcRx.js";import"./useCloseOnEscape-tFE-9m7i.js";import"./Popper-DUm4UslN.js";import"./Card-CcGayy-Q.js";import"./Text-DiRXiAON.js";import"./cornerShape-BMI6yems.js";import"./OverflowTooltip-BVSeqFGz.js";import"./useListItemSelect-leprgA_P.js";import"./useReturnFocus-C_BttsAq.js";import"./useFocusRedirect-C4iMN_AU.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-BP28LsTa.js";import"./SecondaryButton-H0uYbs_P.js";import"./Button-BnD-Jg0r.js";import"./chevron-right-small-Ng-H0z5q.js";const co={title:"Components/Buttons/Toolbar",component:n,parameters:{ReadmePath:"react/button"}},e={render:()=>{const[l,a]=m.useState(),c=()=>{a(!l)};return o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,disabled:!0}),o.jsx("h3",{children:"Toggleable Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,toggled:l,onClick:c})]})}},r={render:()=>o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Dropdown Button with Menu"}),o.jsxs(t,{children:[o.jsx(d,{title:"Expand",children:o.jsx(t.Target,{as:s,icon:p,onClick:()=>{console.log("Expand icon clicked")}})}),o.jsx(t.Popper,{children:o.jsx(t.Card,{children:o.jsxs(t.List,{children:[o.jsx(t.Item,{onClick:()=>{console.log("Expand All clicked")},children:"Expand All"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to Leaf Level clicked")},children:"Expand to Leaf Level"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to nth Level clicked")},children:"Expand to nth Level"})]})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };
    return <div className="story">
        <h3>Toolbar Icon Button</h3>
        <ToolbarIconButton aria-label="Activity Stream" icon={commentIcon} />
        <ToolbarIconButton aria-label="Activity Stream" icon={commentIcon} disabled={true} />
        <h3>Toggleable Toolbar Icon Button</h3>
        <ToolbarIconButton aria-label="Activity Stream" icon={commentIcon} toggled={toggled} onClick={handleToggle} />
      </div>;
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story">
      <h3>Toolbar Dropdown Button with Menu</h3>
      <Menu>
        <Tooltip title="Expand">
          <Menu.Target as={ToolbarDropdownButton} icon={zoomInIcon} onClick={() => {
          console.log('Expand icon clicked');
        }}></Menu.Target>
        </Tooltip>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Item onClick={() => {
              console.log('Expand All clicked');
            }}>
                Expand All
              </Menu.Item>
              <Menu.Item onClick={() => {
              console.log('Expand to Leaf Level clicked');
            }}>
                Expand to Leaf Level
              </Menu.Item>
              <Menu.Item onClick={() => {
              console.log('Expand to nth Level clicked');
            }}>
                Expand to nth Level
              </Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    </div>
}`,...r.parameters?.docs?.source}}};const mo=["ToolbarIconButtonStory","ToolbarDropdownButtonStory"];export{r as ToolbarDropdownButtonStory,e as ToolbarIconButtonStory,mo as __namedExportsOrder,co as default};
