import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{D as a}from"./Dialog-Cq79yI01.js";import{G as g}from"./Grid-D4VkdVek.js";import{c as s}from"./cs-rfTTo7Bg.js";import{P as t}from"./PrimaryButton-BbV_besx.js";import{p as i,g as n,a as d}from"./index-5dfzm_kn.js";import{F as l}from"./Flex-3MZwcTIN.js";import{c as r}from"./getTransformFromPlacement-BtpPb64q.js";import{a as m}from"./index-B2vXpe_3.js";import"./index-IfJi-UCQ.js";import"./components-Dyf4Q_nV.js";import"./Popup-C7rWMGxh.js";import"./Card-C0w1QPqP.js";import"./mergeStyles-DA3z7m0v.js";import"./Box-Dji2xsFp.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CoK9Wr5Y.js";import"./grid-BEk7oOv6.js";import"./Text-CSA8kpWB.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-CFAfozPp.js";import"./BaseButton-B0mfYlEf.js";import"./SystemIcon-CcQdM6y6.js";import"./Svg-CDIwIDn-.js";import"./types-wqmYQQWa.js";import"./Button-6WgYUb9O.js";import"./TertiaryButton-BROdkGKz.js";import"./x-D9WWWeCM.js";import"./Popper-BRNkOZhn.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-DKylCnBg.js";import"./usePopupTarget-Cgr2fBV0.js";import"./useInitialFocus-CxEazES6.js";import"./useReturnFocus-D1Qs81ZF.js";import"./models-CHTjB2ql.js";import"./useCloseOnEscape-Ci8oPZu-.js";import"./useFocusRedirect-CbmVYS2o.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useUniqueId-DC-hMIDg.js";const c=s({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:r.subtract("100vh",d.xxl),width:r.subtract("100vw",m)}),p=s({gridArea:"topButton",justifySelf:"center"}),B=s({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),h=s({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),u=s({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),so={title:"Testing/Popups/Dialog",component:a},e=()=>o.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:o.jsxs(g,{cs:c,children:[o.jsxs(a,{children:[o.jsx(a.Target,{cs:p,as:t,children:"Placement Top"}),o.jsx(a.Popper,{placement:"top",children:o.jsxs(a.Card,{children:[o.jsx(a.CloseIcon,{"aria-label":"Close"}),o.jsx(a.Heading,{cs:{paddingBlockStart:i.md},children:"This is dialog heading"}),o.jsx(a.Body,{children:"This is dialog body."}),o.jsxs(l,{cs:{gap:n.sm,padding:i.xs,marginBlockStart:n.sm},children:[o.jsx(a.CloseButton,{as:t,children:"Submit"}),o.jsx(a.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(a,{children:[o.jsx(a.Target,{cs:u,as:t,children:"Placement Left"}),o.jsx(a.Popper,{placement:"left",children:o.jsxs(a.Card,{children:[o.jsx(a.CloseIcon,{"aria-label":"Close"}),o.jsx(a.Heading,{cs:{paddingBlockStart:i.md},children:"This is dialog heading"}),o.jsx(a.Body,{children:"This is dialog body."}),o.jsxs(l,{cs:{gap:n.sm,padding:i.xs,marginBlockStart:n.sm},children:[o.jsx(a.CloseButton,{as:t,children:"Submit"}),o.jsx(a.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(a,{children:[o.jsx(a.Target,{cs:B,as:t,children:"Placement Right"}),o.jsx(a.Popper,{placement:"right",children:o.jsxs(a.Card,{children:[o.jsx(a.CloseIcon,{"aria-label":"Close"}),o.jsx(a.Heading,{cs:{paddingBlockStart:i.md},children:"This is dialog heading"}),o.jsx(a.Body,{children:"This is dialog body."}),o.jsxs(l,{cs:{gap:n.sm,padding:i.xs,marginBlockStart:n.sm},children:[o.jsx(a.CloseButton,{as:t,children:"Submit"}),o.jsx(a.CloseButton,{children:"Cancel"})]})]})})]}),o.jsxs(a,{children:[o.jsx(a.Target,{cs:h,as:t,children:"Placement Bottom"}),o.jsx(a.Popper,{placement:"bottom",children:o.jsxs(a.Card,{children:[o.jsx(a.CloseIcon,{"aria-label":"Close"}),o.jsx(a.Heading,{cs:{paddingBlockStart:i.md},children:"This is dialog heading"}),o.jsx(a.Body,{children:"This is dialog body."}),o.jsxs(l,{cs:{gap:n.sm,padding:i.xs,marginBlockStart:n.sm},children:[o.jsx(a.CloseButton,{as:t,children:"Submit"}),o.jsx(a.CloseButton,{children:"Cancel"})]})]})})]})]})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
