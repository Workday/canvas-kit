import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{r as m}from"./index-IfJi-UCQ.js";import{T as n}from"./ToolbarIconButton-Dek52rlf.js";import{c as i}from"./comment-D-QUfcnv.js";import{z as p}from"./zoom-in-CZYLgRzZ.js";import{T as s}from"./ToolbarDropdownButton-OD0fblX-.js";import{M as t}from"./Menu-DHE2CAff.js";import{T as d}from"./Tooltip-BrBbQMlI.js";import"./BaseButton-9fY3LWrU.js";import"./Box-8rtctY3X.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./useConstant-B_SD0x5s.js";import"./components-d5Lq2N3r.js";import"./SystemIcon-BcDZsE52.js";import"./Svg-ZtmPf1WS.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Bv4mj65-.js";import"./flex-C1nlk4Q5.js";import"./grid-kt9rUtwL.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useListItemRegister-DRuomJPi.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-DFpy6Eid.js";import"./CanvasProvider-C8GkxeBT.js";import"./index-DE-upP0k.js";import"./index-D-t2nnqG.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-gRyGftt9.js";import"./useCloseOnEscape-D0RFoaOv.js";import"./Popper-Cm0FFZPA.js";import"./Card-Cgn41sLF.js";import"./Text-DMwz83mg.js";import"./cornerShape-DnGoKixo.js";import"./OverflowTooltip-C7AH6CXC.js";import"./useListItemSelect-BwZQ88Wp.js";import"./useReturnFocus-B9CbcNi8.js";import"./useFocusRedirect-ClVmmyIj.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-CeDO4AGg.js";import"./SecondaryButton-edyy8Yyq.js";import"./Button-CHFUbppk.js";import"./chevron-right-small-Ng-H0z5q.js";const co={title:"Components/Buttons/Toolbar",component:n,parameters:{ReadmePath:"react/button"}},e={render:()=>{const[l,a]=m.useState(),c=()=>{a(!l)};return o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,disabled:!0}),o.jsx("h3",{children:"Toggleable Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,toggled:l,onClick:c})]})}},r={render:()=>o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Dropdown Button with Menu"}),o.jsxs(t,{children:[o.jsx(d,{title:"Expand",children:o.jsx(t.Target,{as:s,icon:p,onClick:()=>{console.log("Expand icon clicked")}})}),o.jsx(t.Popper,{children:o.jsx(t.Card,{children:o.jsxs(t.List,{children:[o.jsx(t.Item,{onClick:()=>{console.log("Expand All clicked")},children:"Expand All"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to Leaf Level clicked")},children:"Expand to Leaf Level"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to nth Level clicked")},children:"Expand to nth Level"})]})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
