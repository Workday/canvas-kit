import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{P as o}from"./Popup-FGUZYXID.js";import{S as m}from"./StaticStates-kDyV_ZDH.js";import{C as u}from"./ComponentStatesTable-jhhL0fUQ.js";import{u as l}from"./getTransformFromPlacement-Dk4LTPXM.js";import{C as i}from"./CanvasProvider-CbBD4ERB.js";import{m as c}from"./index-DKOKnxgv.js";import{P as s}from"./PrimaryButton-_EBa_erW.js";import"./index-IfJi-UCQ.js";import"./components-XIe_upcR.js";import"./Card-ywil38vv.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./Text-8N36XMNq.js";import"./index-CYsyLHR7.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-oNuQLwcg.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./types-wqmYQQWa.js";import"./Button-Cp7fe3Zs.js";import"./TertiaryButton-DaDaXMfE.js";import"./x-BnLC6lG-.js";import"./Popper-BRmPGiuC.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./usePopupTarget-B7GfDsu7.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";const oe={title:"Testing/Popups/Popup",component:o,parameters:{chromatic:{disable:!1}}},p={render:()=>e.jsx(m,{children:e.jsx(u,{rowProps:[{label:"Default",props:{}},{label:"On Close",props:{hasCloseIcon:!0}},{label:"With Heading",props:{heading:"Delete Item"}},{label:"With zero padding",props:{heading:"Delete Item",hasCloseIcon:!0,padding:"zero"}},{label:"With small padding",props:{heading:"Delete Item",hasCloseIcon:!0,padding:"s"}},{label:"With no depth",props:{heading:"Delete Item",hasCloseIcon:!0,depth:"none"}},{label:"With depth value set to 1",props:{heading:"Delete Item",hasCloseIcon:!0,depth:1}},{label:"With depth value set to 2",props:{heading:"Delete Item",hasCloseIcon:!0,depth:2}},{label:"With depth value set to 3",props:{heading:"Delete Item",hasCloseIcon:!0,depth:3}},{label:"With depth value set to 4",props:{heading:"Delete Item",hasCloseIcon:!0,depth:4}},{label:"With depth value set to 5",props:{heading:"Delete Item",hasCloseIcon:!0,depth:5}},{label:"With depth value set to 6",props:{heading:"Delete Item",hasCloseIcon:!0,depth:6}},{label:"With custom width",props:{heading:"Delete Item",hasCloseIcon:!0,width:300}},{label:"With small close icon",props:{heading:"Delete Item",hasCloseIcon:!0,width:300,closeIconSize:"small"}}],columnProps:[{label:"Default",props:{}}],children:({heading:t,hasCloseIcon:n,closeIconSize:d,...h})=>e.jsxs(o.Card,{style:{animation:"none"},...h,children:[n?e.jsx(o.CloseIcon,{"aria-label":"",size:d}):null,t?e.jsx(o.Heading,{children:t}):null,e.jsx(o.Body,{children:"Your workbook was successfully processed."})]})})})},a={render:()=>{const t=l({initialVisibility:"visible"});return e.jsx(i,{dir:"rtl",children:e.jsxs(o,{model:t,children:[e.jsx(o.Target,{style:{display:"none"}}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{style:{animation:"none"},width:300,children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"למחוק פריט"}),e.jsx(o.Body,{children:"האם ברצונך למחוק פריט זה"})]})})]})})}},r={render:()=>{const t=l({initialVisibility:"visible"});return e.jsx(i,{theme:{canvas:{palette:{primary:{main:c}}}},children:e.jsxs(o,{model:t,children:[e.jsx(o.Target,{as:s,children:"Primary Button"}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{style:{animation:"none"},width:300,children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"Title"}),e.jsx(o.Body,{children:"Body"}),e.jsx(s,{children:"Primary Button"})]})})]})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Default',
      props: {}
    }, {
      label: 'On Close',
      props: {
        hasCloseIcon: true
      }
    }, {
      label: 'With Heading',
      props: {
        heading: 'Delete Item'
      }
    }, {
      label: 'With zero padding',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        padding: 'zero'
      }
    }, {
      label: 'With small padding',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        padding: 's'
      }
    }, {
      label: 'With no depth',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        depth: 'none'
      }
    }, {
      label: 'With depth value set to 1',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        depth: 1
      }
    }, {
      label: 'With depth value set to 2',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        depth: 2
      }
    }, {
      label: 'With depth value set to 3',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        depth: 3
      }
    }, {
      label: 'With depth value set to 4',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        depth: 4
      }
    }, {
      label: 'With depth value set to 5',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        depth: 5
      }
    }, {
      label: 'With depth value set to 6',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        depth: 6
      }
    }, {
      label: 'With custom width',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        width: 300
      }
    }, {
      label: 'With small close icon',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        width: 300,
        closeIconSize: 'small'
      }
    }]} columnProps={[{
      label: 'Default',
      props: {}
    }]}>
        {({
        heading,
        hasCloseIcon,
        closeIconSize,
        ...props
      }) => <Popup.Card style={{
        animation: 'none'
      }} {...props}>
            {hasCloseIcon ? <Popup.CloseIcon aria-label="" size={closeIconSize} /> : null}
            {heading ? <Popup.Heading>{heading}</Popup.Heading> : null}
            <Popup.Body>Your workbook was successfully processed.</Popup.Body>
          </Popup.Card>}
      </ComponentStatesTable>
    </StaticStates>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const model = usePopupModel({
      initialVisibility: 'visible'
    });
    return <CanvasProvider dir="rtl">
        <Popup model={model}>
          <Popup.Target style={{
          display: 'none'
        }}></Popup.Target>
          <Popup.Popper>
            <Popup.Card style={{
            animation: 'none'
          }} width={300}>
              <Popup.CloseIcon aria-label="" />
              <Popup.Heading>למחוק פריט</Popup.Heading>
              <Popup.Body>האם ברצונך למחוק פריט זה</Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </CanvasProvider>;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const model = usePopupModel({
      initialVisibility: 'visible'
    });
    return <CanvasProvider theme={{
      canvas: {
        palette: {
          primary: {
            main: base.magenta600
          }
        }
      }
    }}>
        <Popup model={model}>
          <Popup.Target as={PrimaryButton}>Primary Button</Popup.Target>
          <Popup.Popper>
            <Popup.Card style={{
            animation: 'none'
          }} width={300}>
              <Popup.CloseIcon aria-label="" />
              <Popup.Heading>Title</Popup.Heading>
              <Popup.Body>Body</Popup.Body>
              <PrimaryButton>Primary Button</PrimaryButton>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </CanvasProvider>;
  }
}`,...r.parameters?.docs?.source}}};const te=["PopupStates","PopupRTL","PopupThemed"];export{a as PopupRTL,p as PopupStates,r as PopupThemed,te as __namedExportsOrder,oe as default};
