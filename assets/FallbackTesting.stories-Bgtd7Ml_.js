import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{D as t}from"./Dialog-Ct1V3OJb.js";import{G as r}from"./Grid-DHP7ZVNH.js";import{c as a}from"./cs-CmRirKzJ.js";import{P as i}from"./PrimaryButton-fbLUk4lq.js";import{p as n,a as s}from"./index-C_4iH04t.js";import{c as e}from"./CanvasProvider-wRa9Af4a.js";import{F as d}from"./index-CFEs8r9D.js";import"./index-IfJi-UCQ.js";import"./components-BZZbendq.js";import"./Popup-CcIfSHXM.js";import"./getTransformFromPlacement-C8z0KlTw.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./Card-CE7R42ky.js";import"./mergeStyles-BrOzO49v.js";import"./Box-DNrttudE.js";import"./index-BR_jJr7N.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-DLEP31EQ.js";import"./grid-DWoMPrqj.js";import"./Text-B-az9lgp.js";import"./cornerShape-CpTbNqpe.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-DTfVcNph.js";import"./BaseButton-qatokQZh.js";import"./SystemIcon-D383ry7W.js";import"./Svg-YYj-hmuy.js";import"./types-wqmYQQWa.js";import"./Button-Bb-9X2_s.js";import"./TertiaryButton-CLwGezHZ.js";import"./x-B1faap_l.js";import"./Popper-BGpHDNvg.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./isElementRTL-lizwOp5U.js";import"./usePopupTarget-D7LypT8H.js";import"./useInitialFocus-C2C4yxbj.js";import"./useReturnFocus-DN6tr14e.js";import"./useCloseOnEscape-BTQA5nou.js";import"./useFocusRedirect-Drl4v-g8.js";const g=a({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:e.subtract("100vh",s.xxl),width:e.subtract("100vw",d)}),c=a({gridArea:"topButton",justifySelf:"center"}),p=a({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),m=a({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),u=a({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),no={title:"Testing/Popups/Dialog",component:t},l=()=>o.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:o.jsxs(r,{cs:g,children:[o.jsxs(t,{children:[o.jsx(t.Target,{cs:c,as:i,children:"Placement Top"}),o.jsx(t.Popper,{placement:"top",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:u,as:i,children:"Placement Left"}),o.jsx(t.Popper,{placement:"left",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:p,as:i,children:"Placement Right"}),o.jsx(t.Popper,{placement:"right",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:m,as:i,children:"Placement Bottom"}),o.jsx(t.Popper,{placement:"bottom",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]})]})});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <div data-testid="scroll-area-fallback-placement">
      <Grid cs={grid}>
        <Dialog>
          <Dialog.Target cs={topButton} as={PrimaryButton}>
            Placement Top
          </Dialog.Target>
          <Dialog.Popper placement="top">
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading cs={{
              paddingBlockStart: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Dialog.ButtonGroup>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
              </Dialog.ButtonGroup>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
        <Dialog>
          <Dialog.Target cs={leftButton} as={PrimaryButton}>
            Placement Left
          </Dialog.Target>
          <Dialog.Popper placement="left">
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading cs={{
              paddingBlockStart: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Dialog.ButtonGroup>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
              </Dialog.ButtonGroup>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
        <Dialog>
          <Dialog.Target cs={rightButton} as={PrimaryButton}>
            Placement Right
          </Dialog.Target>
          <Dialog.Popper placement="right">
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading cs={{
              paddingBlockStart: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Dialog.ButtonGroup>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
              </Dialog.ButtonGroup>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
        <Dialog>
          <Dialog.Target cs={bottomButton} as={PrimaryButton}>
            Placement Bottom
          </Dialog.Target>
          <Dialog.Popper placement="bottom">
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading cs={{
              paddingBlockStart: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Dialog.ButtonGroup>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
              </Dialog.ButtonGroup>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      </Grid>
    </div>;
}`,...l.parameters?.docs?.source}}};const lo=["DialogWithFallbackPlacements"];export{l as DialogWithFallbackPlacements,lo as __namedExportsOrder,no as default};
