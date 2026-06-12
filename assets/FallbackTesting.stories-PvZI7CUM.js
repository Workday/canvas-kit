import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{D as a}from"./Dialog-BKqT5D54.js";import{G as g}from"./Grid-Cus1gcGp.js";import{c as s}from"./cs-rfTTo7Bg.js";import{P as t}from"./PrimaryButton-BTEKtRon.js";import{p as i,g as n,a as d}from"./index-5dfzm_kn.js";import{F as l}from"./Flex-DpKPWY6h.js";import{c as r}from"./getTransformFromPlacement-BtpPb64q.js";import{a as m}from"./index-5mrAZJYD.js";import"./index-IfJi-UCQ.js";import"./components-BVJ_SRGC.js";import"./Popup-Dk1z8kMN.js";import"./Card-L5C4mvPc.js";import"./mergeStyles-C9x5j2GJ.js";import"./Box-CLV6-Kkt.js";import"./index-cOyo4dAr.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DGHVjhOk.js";import"./grid-B6HHSpgk.js";import"./Text-BovdUPDw.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-CTF8Fi1r.js";import"./BaseButton-Dvq7agdb.js";import"./SystemIcon-DZBrYDtT.js";import"./Svg-BFncuboW.js";import"./types-wqmYQQWa.js";import"./Button-B9VNs4ec.js";import"./TertiaryButton-DHjKYrKv.js";import"./x-D9WWWeCM.js";import"./Popper-C6MnqFuv.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-BVhQjIv1.js";import"./usePopupTarget-BHRI4C2s.js";import"./useInitialFocus-CrksNl1r.js";import"./useReturnFocus-C7Sy0adc.js";import"./models-CHTjB2ql.js";import"./useCloseOnEscape-DDGeg4uB.js";import"./useFocusRedirect-Cw1DKcYL.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useUniqueId-DC-hMIDg.js";const c=s({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:r.subtract("100vh",d.xxl),width:r.subtract("100vw",m)}),p=s({gridArea:"topButton",justifySelf:"center"}),B=s({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),h=s({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),u=s({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),so={title:"Testing/Popups/Dialog",component:a},e=()=>o.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:o.jsxs(g,{cs:c,children:[o.jsxs(a,{children:[o.jsx(a.Target,{cs:p,as:t,children:"Placement Top"}),o.jsx(a.Popper,{placement:"top",children:o.jsxs(a.Card,{children:[o.jsx(a.CloseIcon,{"aria-label":"Close"}),o.jsx(a.Heading,{cs:{paddingBlockStart:i.md},children:"This is dialog heading"}),o.jsx(a.Body,{children:"This is dialog body."}),o.jsxs(l,{cs:{gap:n.sm,padding:i.xs,marginBlockStart:n.sm},children:[o.jsx(a.CloseButton,{as:t,children:"Submit"}),o.jsx(a.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(a,{children:[o.jsx(a.Target,{cs:u,as:t,children:"Placement Left"}),o.jsx(a.Popper,{placement:"left",children:o.jsxs(a.Card,{children:[o.jsx(a.CloseIcon,{"aria-label":"Close"}),o.jsx(a.Heading,{cs:{paddingBlockStart:i.md},children:"This is dialog heading"}),o.jsx(a.Body,{children:"This is dialog body."}),o.jsxs(l,{cs:{gap:n.sm,padding:i.xs,marginBlockStart:n.sm},children:[o.jsx(a.CloseButton,{as:t,children:"Submit"}),o.jsx(a.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(a,{children:[o.jsx(a.Target,{cs:B,as:t,children:"Placement Right"}),o.jsx(a.Popper,{placement:"right",children:o.jsxs(a.Card,{children:[o.jsx(a.CloseIcon,{"aria-label":"Close"}),o.jsx(a.Heading,{cs:{paddingBlockStart:i.md},children:"This is dialog heading"}),o.jsx(a.Body,{children:"This is dialog body."}),o.jsxs(l,{cs:{gap:n.sm,padding:i.xs,marginBlockStart:n.sm},children:[o.jsx(a.CloseButton,{as:t,children:"Submit"}),o.jsx(a.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(a,{children:[o.jsx(a.Target,{cs:h,as:t,children:"Placement Bottom"}),o.jsx(a.Popper,{placement:"bottom",children:o.jsxs(a.Card,{children:[o.jsx(a.CloseIcon,{"aria-label":"Close"}),o.jsx(a.Heading,{cs:{paddingBlockStart:i.md},children:"This is dialog heading"}),o.jsx(a.Body,{children:"This is dialog body."}),o.jsxs(l,{cs:{gap:n.sm,padding:i.xs,marginBlockStart:n.sm},children:[o.jsx(a.CloseButton,{as:t,children:"Submit"}),o.jsx(a.CloseButton,{children:"Cancel"})]})]})})]})]})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
              <Flex cs={{
              gap: system.gap.sm,
              padding: system.padding.xs,
              marginBlockStart: system.gap.sm
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
              paddingBlockStart: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{
              gap: system.gap.sm,
              padding: system.padding.xs,
              marginBlockStart: system.gap.sm
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
              paddingBlockStart: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{
              gap: system.gap.sm,
              padding: system.padding.xs,
              marginBlockStart: system.gap.sm
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
              paddingBlockStart: system.padding.md
            }}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{
              gap: system.gap.sm,
              padding: system.padding.xs,
              marginBlockStart: system.gap.sm
            }}>
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      </Grid>
    </div>;
}`,...e.parameters?.docs?.source}}};const lo=["DialogWithFallbackPlacements"];export{e as DialogWithFallbackPlacements,lo as __namedExportsOrder,so as default};
