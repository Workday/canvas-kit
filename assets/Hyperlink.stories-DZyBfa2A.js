import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{C as p}from"./utils-Bk1778zm.js";import{H as a}from"./Hyperlink-BdNi6F1F.js";import{S as s}from"./StaticStates-E1fiKQgj.js";import{C as m}from"./ComponentStatesTable-CWstLoqz.js";import{p as o}from"./permutateProps-CtMwpv-x.js";import{B as i}from"./Box-CsR_RSm3.js";import{t as l,c as n}from"./index-5dfzm_kn.js";import"./index-IfJi-UCQ.js";import"./index-kV3bYgAf.js";import"./types-wqmYQQWa.js";import"./alarm-clock-jr3gNh4D.js";import"./arrow-up-D2H_pH5-.js";import"./filter-BPp11omr.js";import"./arrow-right-small-DUWH78qP.js";import"./inbox-BZ9JNbvp.js";import"./background-color-CVF2Md9H.js";import"./bar-chart-DqKXWqud.js";import"./ribbon-fcGfKC8v.js";import"./book-user-CRg3yIqc.js";import"./caret-down-BgZrvgzo.js";import"./caret-down-small-UmNc4PEr.js";import"./check-Bvurkvei.js";import"./sparkle-BveIfg6z.js";import"./check-small-C7Z-gSGs.js";import"./chevron-left-small-Yz6QpAF-.js";import"./chevron-down-small-BMZE52uy.js";import"./chevron-right-small-DxmMaev8.js";import"./chevron-up-BKywTRZX.js";import"./cloud-BgDG3pZp.js";import"./cloud-arrow-up-DRlXmxwS.js";import"./comment-C3DEtO6j.js";import"./configure-D1HKcHKs.js";import"./skip-D5JFDhka.js";import"./document-sparkle-D0ET3kT5.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./extend-BPwMWEGU.js";import"./external-link-BZdacz1K.js";import"./list-view-Dvh4q5qX.js";import"./image-CyEEJvno.js";import"./info-CEjWPFpM.js";import"./loop-DQc7AX2j.js";import"./mail-D1VSn3Ge.js";import"./notifications-BSXm4WVy.js";import"./pattern-DYi6EyfQ.js";import"./pie-chart-BM_yXTX0.js";import"./plus-E0HzoyQR.js";import"./related-actions-TP4TzHu6.js";import"./related-actions-vertical-BIgm-twu.js";import"./reset-CNB1hIzV.js";import"./save-as-x_rvPVCc.js";import"./search-INhyn6-E.js";import"./star-CXHW6a0n.js";import"./stack-RthV30X2.js";import"./trash-B7JH7-p5.js";import"./user-KhAHIDko.js";import"./visible-strikethrough-RoVoB_SP.js";import"./x-D9WWWeCM.js";import"./x-small-DK7gM0f7.js";import"./zoom-in-BpSdwQhW.js";import"./cs-rfTTo7Bg.js";import"./components-DpSuslmU.js";import"./CanvasProvider-DpLmysIw.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-B2vXpe_3.js";import"./index-COdRIEp6.js";import"./useConstant-CUZppmaV.js";const Be={title:"Testing/Buttons/Button/Hyperlink",component:a,parameters:{chromatic:{disable:!1}}},r={render:()=>e.jsx(s,{children:e.jsx(m,{rowProps:o({variant:[{label:"Default",value:void 0},{label:"Inverse",value:"inverse"}]}),columnProps:o({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"},{label:"Visited",value:"visited"}]}),children:t=>e.jsx(p,{blue:t.variant==="inverse",children:e.jsx(i,{cs:{...l.subtext.lg},children:e.jsxs(i,{as:"span",cs:{color:t.variant==="inverse"?n.fg.inverse:void 0},children:["Here's a ",e.jsx(a,{...t,children:"Link"})," to something"]})})})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Ce=["HyperlinkStates"];export{r as HyperlinkStates,Ce as __namedExportsOrder,Be as default};
