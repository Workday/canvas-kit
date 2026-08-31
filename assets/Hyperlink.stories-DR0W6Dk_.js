import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{C as l}from"./utils-CFK74a-G.js";import{H as a}from"./Hyperlink-DTQzeeu5.js";import{S as p}from"./StaticStates-DA20hqGR.js";import{C as s}from"./ComponentStatesTable-Cl7Bbm7N.js";import{p as t}from"./permutateProps-CtMwpv-x.js";import{B as i}from"./Box-8rtctY3X.js";import{t as m,c as n}from"./index-DE-upP0k.js";import"./index-IfJi-UCQ.js";import"./index-B_I-HGCT.js";import"./types-wqmYQQWa.js";import"./alarm-clock-BIDBo4OF.js";import"./filter-BongfaZF.js";import"./arrow-up-cj8CsvT6.js";import"./arrow-right-small-BM2P7hno.js";import"./inbox-CU_FvG8D.js";import"./background-color-C7KFBqdd.js";import"./bar-chart-Cu39Kmxt.js";import"./ribbon-BnhZWvQ1.js";import"./book-user-BARqsbvA.js";import"./caret-down-CIbq0Fta.js";import"./sparkle-QHHyJsRv.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./chevron-left-small-CQqUhIms.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./chevron-right-small-Ng-H0z5q.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-up-CAo1sqci.js";import"./cloud-arrow-up-BLHe5iIq.js";import"./cloud-CWYpfnlZ.js";import"./comment-D-QUfcnv.js";import"./configure-BFfrsK69.js";import"./skip-CJ-51P2v.js";import"./document-sparkle-CDmOGnz-.js";import"./exclamation-circle-BNuxaliX.js";import"./exclamation-triangle-BLgzpFfC.js";import"./extend-BphcO0BU.js";import"./external-link-ChL2h1Cn.js";import"./tokens-B3ySzdML.js";import"./list-view-Cvwi-fm3.js";import"./image-BcikXLB9.js";import"./info-sparkle-DMlR_cMO.js";import"./info-DJgWrsaO.js";import"./layers-BWn7B7pb.js";import"./loop-CaelTW-v.js";import"./mail-BtFtNYGc.js";import"./notifications-DjQnQviY.js";import"./pattern-DRcz2FVG.js";import"./pie-chart-12vFx6CY.js";import"./plus-CZKxhJ9E.js";import"./related-actions-vertical-D0z7OuPs.js";import"./related-actions-BBat1SFr.js";import"./reset-CJq3chgj.js";import"./save-as-CICFkjvN.js";import"./search-DlWaqbP4.js";import"./star-Ce2GIgKL.js";import"./sidebar-right-DcfakxVR.js";import"./stack-CwCrIbZb.js";import"./trash-E_Z-JrHx.js";import"./user-Tu8DwaZY.js";import"./visible-D4wRHkHl.js";import"./x-small-Cfgu7dLY.js";import"./x-B1faap_l.js";import"./zoom-in-CZYLgRzZ.js";import"./cs-CmRirKzJ.js";import"./components-d5Lq2N3r.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./CanvasProvider-C8GkxeBT.js";import"./index-D-t2nnqG.js";import"./index-DWHOiqdi.js";import"./useConstant-B_SD0x5s.js";const Ae={title:"Testing/Buttons/Button/Hyperlink",component:a,parameters:{chromatic:{disable:!1}}},r={render:()=>e.jsx(p,{children:e.jsx(s,{rowProps:t({variant:[{label:"Default",value:void 0},{label:"Inverse",value:"inverse"},{label:"Secondary",value:"secondary"}],linkType:[{label:"Inline",value:void 0},{label:"Standalone",value:"standalone"}]}),columnProps:t({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"},{label:"Visited",value:"visited"}]}),children:o=>e.jsx(l,{blue:o.variant==="inverse",children:e.jsx(i,{cs:{...m.subtext.lg},children:e.jsxs(i,{as:"span",cs:{color:o.variant==="inverse"?n.fg.inverse:void 0},children:["Here's a ",e.jsx(a,{...o,children:"Link"})," to something"]})})})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      variant: [{
        label: 'Default',
        value: undefined
      }, {
        label: 'Inverse',
        value: 'inverse'
      }, {
        label: 'Secondary',
        value: 'secondary'
      }],
      linkType: [{
        label: 'Inline',
        value: undefined
      }, {
        label: 'Standalone',
        value: 'standalone'
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
