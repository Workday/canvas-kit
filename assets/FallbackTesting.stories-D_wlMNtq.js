import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{D as i}from"./Dialog-DjQbCvjl.js";import{G as g}from"./Grid-DlHvjuaC.js";import{c as s}from"./cs-DvbI9OYs.js";import{P as a}from"./PrimaryButton-WPKcJ4ml.js";import{p as n,g as t,a as d}from"./index-CYsyLHR7.js";import{F as e}from"./Flex-hE1PVdSE.js";import{c as r}from"./getTransformFromPlacement-Dk4LTPXM.js";import{a as p}from"./index-DKOKnxgv.js";import"./index-IfJi-UCQ.js";import"./components-CXVvXGX8.js";import"./Popup-CSV3rOyv.js";import"./Card-jS6NBqm3.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./Text-Dt7EG7Lz.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-DBrzjuE9.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./types-wqmYQQWa.js";import"./Button-_9ty_XDZ.js";import"./TertiaryButton-Byu4oUFZ.js";import"./x-BnLC6lG-.js";import"./Popper-CGqk9_xm.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-BRuur9nH.js";import"./usePopupTarget-ukAEISND.js";import"./useInitialFocus-D6f9kMrD.js";import"./useReturnFocus-CF7XwcyY.js";import"./models-CHTjB2ql.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./useFocusRedirect-CjUSvw7a.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useUniqueId-DC-hMIDg.js";const m=s({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:r.subtract("100vh",d.xxl),width:r.subtract("100vw",p)}),c=s({gridArea:"topButton",justifySelf:"center"}),h=s({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),u=s({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),D=s({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),ro={title:"Testing/Popups/Dialog",component:i},l=()=>o.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:o.jsxs(g,{cs:m,children:[o.jsxs(i,{children:[o.jsx(i.Target,{cs:c,as:a,children:"Placement Top"}),o.jsx(i.Popper,{placement:"top",children:o.jsxs(i.Card,{children:[o.jsx(i.CloseIcon,{"aria-label":"Close"}),o.jsx(i.Heading,{cs:{paddingTop:n.md},children:"This is dialog heading"}),o.jsx(i.Body,{children:"This is dialog body."}),o.jsxs(e,{cs:{gap:t.sm,padding:n.xs,marginTop:t.sm},children:[o.jsx(i.CloseButton,{as:a,children:"Submit"}),o.jsx(i.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(i,{children:[o.jsx(i.Target,{cs:D,as:a,children:"Placement Left"}),o.jsx(i.Popper,{placement:"left",children:o.jsxs(i.Card,{children:[o.jsx(i.CloseIcon,{"aria-label":"Close"}),o.jsx(i.Heading,{cs:{paddingTop:n.md},children:"This is dialog heading"}),o.jsx(i.Body,{children:"This is dialog body."}),o.jsxs(e,{cs:{gap:t.sm,padding:n.xs,marginTop:t.sm},children:[o.jsx(i.CloseButton,{as:a,children:"Submit"}),o.jsx(i.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(i,{children:[o.jsx(i.Target,{cs:h,as:a,children:"Placement Right"}),o.jsx(i.Popper,{placement:"right",children:o.jsxs(i.Card,{children:[o.jsx(i.CloseIcon,{"aria-label":"Close"}),o.jsx(i.Heading,{cs:{paddingTop:n.md},children:"This is dialog heading"}),o.jsx(i.Body,{children:"This is dialog body."}),o.jsxs(e,{cs:{gap:t.sm,padding:n.xs,marginTop:t.sm},children:[o.jsx(i.CloseButton,{as:a,children:"Submit"}),o.jsx(i.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(i,{children:[o.jsx(i.Target,{cs:u,as:a,children:"Placement Bottom"}),o.jsx(i.Popper,{placement:"bottom",children:o.jsxs(i.Card,{children:[o.jsx(i.CloseIcon,{"aria-label":"Close"}),o.jsx(i.Heading,{cs:{paddingTop:n.md},children:"This is dialog heading"}),o.jsx(i.Body,{children:"This is dialog body."}),o.jsxs(e,{cs:{gap:t.sm,padding:n.xs,marginTop:t.sm},children:[o.jsx(i.CloseButton,{as:a,children:"Submit"}),o.jsx(i.CloseButton,{children:"Cancel"})]})]})})]})]})});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
              paddingTop: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{
              gap: system.gap.sm,
              padding: system.padding.xs,
              marginTop: system.gap.sm
            }}>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
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
              paddingTop: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{
              gap: system.gap.sm,
              padding: system.padding.xs,
              marginTop: system.gap.sm
            }}>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
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
              paddingTop: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{
              gap: system.gap.sm,
              padding: system.padding.xs,
              marginTop: system.gap.sm
            }}>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
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
              paddingTop: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{
              gap: system.gap.sm,
              padding: system.padding.xs,
              marginTop: system.gap.sm
            }}>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      </Grid>
    </div>;
}`,...l.parameters?.docs?.source}}};const go=["DialogWithFallbackPlacements"];export{l as DialogWithFallbackPlacements,go as __namedExportsOrder,ro as default};
