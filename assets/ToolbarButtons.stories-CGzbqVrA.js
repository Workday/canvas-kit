import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{r as m}from"./index-IfJi-UCQ.js";import{T as n}from"./ToolbarIconButton-YxlHxlWx.js";import{c as i}from"./comment-D-QUfcnv.js";import{z as p}from"./zoom-in-CZYLgRzZ.js";import{T as s}from"./ToolbarDropdownButton-V72QILny.js";import{M as t}from"./Menu-DT2pOe49.js";import{T as d}from"./Tooltip-DC2MIugw.js";import"./BaseButton-D8zYHbxs.js";import"./Box-BwSubRt6.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./useConstant-B_SD0x5s.js";import"./components-DIXe_rXl.js";import"./SystemIcon-Bc5FTqSz.js";import"./Svg-CDh6670a.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-C3mqUtmC.js";import"./flex-1BnMPfFj.js";import"./grid-DeBl5Muz.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useListItemRegister-NCGS7HKL.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-CVuX70VQ.js";import"./CanvasProvider-BTLvcapT.js";import"./index-DE-upP0k.js";import"./index-D-t2nnqG.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-COXD4t91.js";import"./useCloseOnEscape-Pga8fWKh.js";import"./Popper-BRbe_tz9.js";import"./Card-CLZCJsGP.js";import"./Text-Cdlm4YRv.js";import"./cornerShape-DO7zpd3K.js";import"./OverflowTooltip-CieFzTnq.js";import"./useListItemSelect-C_0Ny6tb.js";import"./useReturnFocus-CL2JvsSp.js";import"./useFocusRedirect-Cqk2nVwG.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-KBNzPGUp.js";import"./SecondaryButton-rEEjUScI.js";import"./Button-BuO9pq7_.js";import"./chevron-right-small-Ng-H0z5q.js";const co={title:"Components/Buttons/Toolbar",component:n,parameters:{ReadmePath:"react/button"}},e={render:()=>{const[l,a]=m.useState(),c=()=>{a(!l)};return o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,disabled:!0}),o.jsx("h3",{children:"Toggleable Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,toggled:l,onClick:c})]})}},r={render:()=>o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Dropdown Button with Menu"}),o.jsxs(t,{children:[o.jsx(d,{title:"Expand",children:o.jsx(t.Target,{as:s,icon:p,onClick:()=>{console.log("Expand icon clicked")}})}),o.jsx(t.Popper,{children:o.jsx(t.Card,{children:o.jsxs(t.List,{children:[o.jsx(t.Item,{onClick:()=>{console.log("Expand All clicked")},children:"Expand All"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to Leaf Level clicked")},children:"Expand to Leaf Level"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to nth Level clicked")},children:"Expand to nth Level"})]})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
