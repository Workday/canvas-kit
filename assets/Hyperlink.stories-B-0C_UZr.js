import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{C as p}from"./utils-5pWqp8Jx.js";import{H as a}from"./Hyperlink-p5yKhX3z.js";import{S as m}from"./StaticStates-BCLTLQi1.js";import{C as s}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as o}from"./permutateProps-CtMwpv-x.js";import{B as i}from"./Box-CWkwzNZI.js";import{t as l,c as n}from"./index-CYsyLHR7.js";import"./index-IfJi-UCQ.js";import"./index-CmsrPPWg.js";import"./types-wqmYQQWa.js";import"./alarm-clock-CmIxBBgT.js";import"./arrow-up-A_gCb8P_.js";import"./filter-VIQ5o9QZ.js";import"./arrow-right-small-BrG6xl2D.js";import"./inbox-eL1rb3CQ.js";import"./background-color-csLLX-5Y.js";import"./bar-chart-C99CnfMR.js";import"./ribbon-iYyZgieg.js";import"./book-user-CZewYCDE.js";import"./caret-down-Cl5hWN9L.js";import"./caret-down-small-CQgB4GlK.js";import"./check-BG7HONvH.js";import"./sparkle-DWb20mIY.js";import"./check-small-CEmhQ7AS.js";import"./chevron-left-small-BnU5BosP.js";import"./chevron-down-small-BrY2vkBl.js";import"./chevron-right-small-CQ6vqfU4.js";import"./chevron-up-D6Ci4o5O.js";import"./cloud-CStfyKh-.js";import"./cloud-arrow-up-Cy6LSuPb.js";import"./comment-Dgf5S17c.js";import"./configure-BTjrxQBR.js";import"./skip-DuPkin2p.js";import"./document-sparkle-3x5Uo3zv.js";import"./exclamation-circle-Be30iaM7.js";import"./exclamation-triangle-C8Vr-J7R.js";import"./extend-DXQzslqV.js";import"./external-link-Bfm4m86M.js";import"./list-view-CRL_wtIR.js";import"./image-CIDOgCED.js";import"./info-B24MaYO9.js";import"./loop-CVTaP6Fy.js";import"./mail-C8yLM76X.js";import"./notifications-CoKr7ErK.js";import"./pattern-C2D-U5BG.js";import"./pie-chart-BUSgJEOU.js";import"./plus-BSkOQ6An.js";import"./related-actions-DlhfUCCz.js";import"./related-actions-vertical-BIB0AGxg.js";import"./reset-D2F6NOZm.js";import"./save-as-D0nYPbc3.js";import"./search-DC_v2gTw.js";import"./star-DFwyCNQo.js";import"./stack-BhgEyuPa.js";import"./trash-BJh0QDR6.js";import"./user-B0WnwSMs.js";import"./visible-strikethrough-BTykRsGT.js";import"./x-BnLC6lG-.js";import"./x-small-BxvQm8EX.js";import"./zoom-in-Bc7bgsxX.js";import"./cs-DvbI9OYs.js";import"./components-BLZqCckY.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-D16Zuzp0.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./index-dYq3mHEV.js";import"./useConstant-CUZppmaV.js";const Ae={title:"Testing/Buttons/Button/Hyperlink",component:a,parameters:{chromatic:{disable:!1}}},r={render:()=>e.jsx(m,{children:e.jsx(s,{rowProps:o({variant:[{label:"Default",value:void 0},{label:"Inverse",value:"inverse"}]}),columnProps:o({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"},{label:"Visited",value:"visited"}]}),children:t=>e.jsx(p,{blue:t.variant==="inverse",children:e.jsx(i,{cs:{...l.subtext.lg},children:e.jsxs(i,{as:"span",cs:{color:t.variant==="inverse"?n.fg.inverse:void 0},children:["Here's a ",e.jsx(a,{...t,children:"Link"})," to something"]})})})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      variant: [{
        label: 'Default',
        value: undefined
      }, {
        label: 'Inverse',
        value: 'inverse'
      }]
    })} columnProps={permutateProps({
      className: [{
        label: 'Default',
        value: ''
      }, {
        label: 'Hover',
        value: 'hover'
      }, {
        label: 'Focus',
        value: 'focus'
      }, {
        label: 'Focus Hover',
        value: 'focus hover'
      }, {
        label: 'Active',
        value: 'active'
      }, {
        label: 'Active Hover',
        value: 'active hover'
      }, {
        label: 'Visited',
        value: 'visited'
      }]
    })}>
        {(props: any) => <Container blue={props.variant === 'inverse'}>
            <Box cs={{
          ...system.type.subtext.lg
        }}>
              <Box as="span" cs={{
            color: props.variant === 'inverse' ? system.color.fg.inverse : undefined
          }}>
                Here's a <Hyperlink {...props}>Link</Hyperlink> to something
              </Box>
            </Box>
          </Container>}
      </ComponentStatesTable>
    </StaticStates>
}`,...r.parameters?.docs?.source}}};const De=["HyperlinkStates"];export{r as HyperlinkStates,De as __namedExportsOrder,Ae as default};
