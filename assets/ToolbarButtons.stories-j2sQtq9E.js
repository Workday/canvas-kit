import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{r as m}from"./index-IfJi-UCQ.js";import{T as n}from"./ToolbarIconButton-DQQlGkzo.js";import{c as i}from"./comment-Dgf5S17c.js";import{z as p}from"./zoom-in-Bc7bgsxX.js";import{T as s}from"./ToolbarDropdownButton-C6EX38OB.js";import{M as t}from"./Menu-BIIZhJne.js";import{T as d}from"./Tooltip-BChPPqz6.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Box-CfIP0C5s.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./components-DlilqqSw.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-DCTLot6K.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./chevron-down-small-BrY2vkBl.js";import"./useListItemSelect-D_3E8f4q.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-DDaYfV4J.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./Popper-DTfQE2mh.js";import"./CanvasProvider-0Y3auRRO.js";import"./Card-Dd5fhXE2.js";import"./Text-Tayi47N3.js";import"./OverflowTooltip-xP33ONM-.js";import"./useFocusRedirect-DOtUfDeI.js";import"./useReturnFocus-Xz-_vB17.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-BtGg5hr7.js";import"./SecondaryButton-BfP_SOlX.js";import"./Button-Cg4j9RPw.js";import"./chevron-right-small-CQ6vqfU4.js";const mo={title:"Components/Buttons/Toolbar",component:n,parameters:{ReadmePath:"react/button"}},e={render:()=>{const[l,a]=m.useState(),c=()=>{a(!l)};return o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,disabled:!0}),o.jsx("h3",{children:"Toggleable Toolbar Icon Button"}),o.jsx(n,{"aria-label":"Activity Stream",icon:i,toggled:l,onClick:c})]})}},r={render:()=>o.jsxs("div",{className:"story",children:[o.jsx("h3",{children:"Toolbar Dropdown Button with Menu"}),o.jsxs(t,{children:[o.jsx(d,{title:"Expand",children:o.jsx(t.Target,{as:s,icon:p,onClick:()=>{console.log("Expand icon clicked")}})}),o.jsx(t.Popper,{children:o.jsx(t.Card,{children:o.jsxs(t.List,{children:[o.jsx(t.Item,{onClick:()=>{console.log("Expand All clicked")},children:"Expand All"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to Leaf Level clicked")},children:"Expand to Leaf Level"}),o.jsx(t.Item,{onClick:()=>{console.log("Expand to nth Level clicked")},children:"Expand to nth Level"})]})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
