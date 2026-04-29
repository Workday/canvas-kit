import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{r as m}from"./index-IfJi-UCQ.js";import{T as n}from"./ToolbarIconButton-Dsjm_clV.js";import{c as i}from"./comment-Dgf5S17c.js";import{z as p}from"./zoom-in-Bc7bgsxX.js";import{T as s}from"./ToolbarDropdownButton-Bom9DRNr.js";import{M as t}from"./Menu-Blawm5fT.js";import{T as d}from"./Tooltip-De1KsO5U.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Box-DFWPfIf0.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./components-XIe_upcR.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Dttt6jO3.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./chevron-down-small-BrY2vkBl.js";import"./useListItemSelect-D10U8d3g.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-p8F4NfJ4.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./CanvasProvider-CbBD4ERB.js";import"./Card-ywil38vv.js";import"./Text-8N36XMNq.js";import"./OverflowTooltip-B7jd-TXK.js";import"./useFocusRedirect-ETf1Gakg.js";import"./useReturnFocus-BgzhEoBI.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-B7GfDsu7.js";import"./SecondaryButton-oNuQLwcg.js";import"./Button-Cp7fe3Zs.js";import"./chevron-right-small-CQ6vqfU4.js";const mo={title:"Components/Buttons/Toolbar",component:n,parameters:{ReadmePath:"react/button"}},e={render:()=>{const[l,a]=m.useState(),c=()=>{a(!l)};return o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,disabled:!0}),o.jsx("h3",{children:"Toggleable Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,toggled:l,onClick:c})]})}},r={render:()=>o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Dropdown Button with Menu"}),o.jsxs(t,{children:[o.jsx(d,{title:"Expand",children:o.jsx(t.Target,{as:s,icon:p,onClick:()=>{console.log("Expand icon clicked")}})}),o.jsx(t.Popper,{children:o.jsx(t.Card,{children:o.jsxs(t.List,{children:[o.jsx(t.Item,{onClick:()=>{console.log("Expand All clicked")},children:"Expand All"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to Leaf Level clicked")},children:"Expand to Leaf Level"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to nth Level clicked")},children:"Expand to nth Level"})]})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const po=["ToolbarIconButtonStory","ToolbarDropdownButtonStory"];export{r as ToolbarDropdownButtonStory,e as ToolbarIconButtonStory,po as __namedExportsOrder,mo as default};
