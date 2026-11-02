import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{D as t}from"./Dialog-B0yZ8yYN.js";import{G as r}from"./Grid-Bxi_VOfp.js";import{c as a}from"./cs-CmRirKzJ.js";import{P as i}from"./PrimaryButton-BPTIya5W.js";import{p as n,a as s}from"./index-C_4iH04t.js";import{c as e}from"./CanvasProvider-CF14T0i9.js";import{F as d}from"./index-CFEs8r9D.js";import"./index-IfJi-UCQ.js";import"./components-CYP9NeI-.js";import"./Popup-DP2Q4Rip.js";import"./getTransformFromPlacement-CQhU5Ns9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./Card-CbxxBIYl.js";import"./mergeStyles-CKlw0c7j.js";import"./Box-CnfAPO8a.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-BQ2dge_k.js";import"./grid-92Zbaa_D.js";import"./Text-C3NU_mns.js";import"./cornerShape-VSFpHIfk.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-d13vBCKw.js";import"./BaseButton-xzvUa-Ri.js";import"./SystemIcon-DH6nxozh.js";import"./Svg-D1dbi2br.js";import"./types-wqmYQQWa.js";import"./Button-BZ4Q3VL_.js";import"./TertiaryButton-DizXonei.js";import"./x-B1faap_l.js";import"./Popper-CH8vOlWw.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./isElementRTL-lizwOp5U.js";import"./usePopupTarget-C4hhXT-q.js";import"./useInitialFocus-CSTv9I-c.js";import"./useReturnFocus-0FcjaGTk.js";import"./useCloseOnEscape-RHSc1xTq.js";import"./useFocusRedirect-CGBrr3mg.js";const g=a({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:e.subtract("100vh",s.xxl),width:e.subtract("100vw",d)}),c=a({gridArea:"topButton",justifySelf:"center"}),p=a({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),m=a({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),u=a({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),no={title:"Testing/Popups/Dialog",component:t},l=()=>o.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:o.jsxs(r,{cs:g,children:[o.jsxs(t,{children:[o.jsx(t.Target,{cs:c,as:i,children:"Placement Top"}),o.jsx(t.Popper,{placement:"top",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:u,as:i,children:"Placement Left"}),o.jsx(t.Popper,{placement:"left",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:p,as:i,children:"Placement Right"}),o.jsx(t.Popper,{placement:"right",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:m,as:i,children:"Placement Bottom"}),o.jsx(t.Popper,{placement:"bottom",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]})]})});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
