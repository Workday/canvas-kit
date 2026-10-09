import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{D as t}from"./Dialog-CqVCkqXL.js";import{G as r}from"./Grid-Dzbr3775.js";import{c as a}from"./cs-CmRirKzJ.js";import{P as i}from"./PrimaryButton-Bk-2K5As.js";import{p as n,a as s}from"./index-jCBjnmNg.js";import{c as e}from"./CanvasProvider-BrxZQKSv.js";import{F as d}from"./index-kj8ZfNNN.js";import"./index-IfJi-UCQ.js";import"./components-B1mGnJpp.js";import"./Popup-Cz_26RbY.js";import"./getTransformFromPlacement-CnzpioCY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./Card-LdN1cFuM.js";import"./mergeStyles-DOP9Jdsg.js";import"./Box-Ds0y4SrM.js";import"./index-5enOfKoO.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-CToZMAna.js";import"./grid-CxoxzKOV.js";import"./Text-Bka4LqhJ.js";import"./cornerShape-nJoLwGwG.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-CW8bmGIW.js";import"./BaseButton-ozivwaWz.js";import"./SystemIcon-Dn8ry8Fs.js";import"./Svg-EhlVkbPa.js";import"./types-wqmYQQWa.js";import"./Button-Ho16nQOa.js";import"./TertiaryButton-BUc32dy7.js";import"./x-B1faap_l.js";import"./Popper-CbntXY40.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./usePopupTarget-DVpri5Fh.js";import"./useInitialFocus-C0w0UsTD.js";import"./useReturnFocus-pD0NUvMs.js";import"./useCloseOnEscape-CpP-Bvvu.js";import"./useFocusRedirect-2pSmmBYq.js";const g=a({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:e.subtract("100vh",s.xxl),width:e.subtract("100vw",d)}),c=a({gridArea:"topButton",justifySelf:"center"}),p=a({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),m=a({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),u=a({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),ao={title:"Testing/Popups/Dialog",component:t},l=()=>o.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:o.jsxs(r,{cs:g,children:[o.jsxs(t,{children:[o.jsx(t.Target,{cs:c,as:i,children:"Placement Top"}),o.jsx(t.Popper,{placement:"top",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:u,as:i,children:"Placement Left"}),o.jsx(t.Popper,{placement:"left",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:p,as:i,children:"Placement Right"}),o.jsx(t.Popper,{placement:"right",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]}),o.jsxs(t,{children:[o.jsx(t.Target,{cs:m,as:i,children:"Placement Bottom"}),o.jsx(t.Popper,{placement:"bottom",children:o.jsxs(t.Card,{children:[o.jsx(t.CloseIcon,{"aria-label":"Close"}),o.jsx(t.Heading,{cs:{paddingBlockStart:n.md},children:"This is dialog heading"}),o.jsx(t.Body,{children:"This is dialog body."}),o.jsxs(t.ButtonGroup,{children:[o.jsx(t.CloseButton,{children:"Cancel"}),o.jsx(t.CloseButton,{as:i,children:"Submit"})]})]})})]})]})});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const no=["DialogWithFallbackPlacements"];export{l as DialogWithFallbackPlacements,no as __namedExportsOrder,ao as default};
