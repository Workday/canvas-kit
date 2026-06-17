import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{P as o}from"./Popup-o70LrEa3.js";import{S as P}from"./StaticStates-C-HyzpWw.js";import{C as b}from"./ComponentStatesTable-4iWB-WT1.js";import{p as I,d as s}from"./index-5dfzm_kn.js";import{p as l}from"./px2rem-C0KbprIx.js";import{u as n}from"./getTransformFromPlacement-BtpPb64q.js";import{C as d}from"./CanvasProvider-BlMVDzJE.js";import{c as g}from"./index-5mrAZJYD.js";import{P as i}from"./PrimaryButton-BadDvs2U.js";import"./index-IfJi-UCQ.js";import"./components-DitCssni.js";import"./Card-CaPe9j_I.js";import"./mergeStyles-CxEFJuxU.js";import"./Box-DEOrcYtQ.js";import"./index-DmIRx617.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./useConstant-CUZppmaV.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./Text-BDAVcU1f.js";import"./SecondaryButton-BpQ17X7-.js";import"./BaseButton-MNe7k-Ow.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./types-wqmYQQWa.js";import"./Button-Dptie1iu.js";import"./TertiaryButton-B_PXBCfh.js";import"./x-D9WWWeCM.js";import"./Popper-CfI3sZZj.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./usePopupTarget-X7rx-n4X.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";const te={title:"Testing/Popups/Popup",component:o,parameters:{chromatic:{disable:!1}}},a={render:()=>e.jsx(P,{children:e.jsx(b,{rowProps:[{label:"Default",props:{}},{label:"On Close",props:{hasCloseIcon:!0}},{label:"With Heading",props:{heading:"Delete Item"}},{label:"With zero padding",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{padding:"0"}}},{label:"With small padding",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{padding:I.md}}},{label:"With no depth",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:"none"}}},{label:"With depth value set to 1",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[1]}}},{label:"With depth value set to 2",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[2]}}},{label:"With depth value set to 3",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[3]}}},{label:"With depth value set to 4",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[4]}}},{label:"With depth value set to 5",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[5]}}},{label:"With depth value set to 6",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[6]}}},{label:"With custom width",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{width:l(300)}}},{label:"With small close icon",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{width:l(300)},closeIconSize:"small"}}],columnProps:[{label:"Default",props:{}}],children:({heading:t,hasCloseIcon:m,closeIconSize:h,cs:c,...u})=>e.jsxs(o.Card,{cs:[{animation:"none"},c],...u,children:[m?e.jsx(o.CloseIcon,{"aria-label":"",size:h}):null,t?e.jsx(o.Heading,{children:t}):null,e.jsx(o.Body,{children:"Your workbook was successfully processed."})]})})})},p={render:()=>{const t=n({initialVisibility:"visible"});return e.jsx(d,{dir:"rtl",children:e.jsxs(o,{model:t,children:[e.jsx(o.Target,{cs:{display:"none"}}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{cs:{animation:"none",width:l(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"למחוק פריט"}),e.jsx(o.Body,{children:"האם ברצונך למחוק פריט זה"})]})})]})})}},r={render:()=>{const t=n({initialVisibility:"visible"});return e.jsx(d,{theme:{canvas:{palette:{primary:{main:g}}}},children:e.jsxs(o,{model:t,children:[e.jsx(o.Target,{as:i,children:"Primary Button"}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{cs:{animation:"none",width:l(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"Title"}),e.jsx(o.Body,{children:"Body"}),e.jsx(i,{children:"Primary Button"})]})})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        cs: {
          padding: '0'
        }
      }
    }, {
      label: 'With small padding',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          padding: system.padding.md
        }
      }
    }, {
      label: 'With no depth',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          boxShadow: 'none'
        }
      }
    }, {
      label: 'With depth value set to 1',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          boxShadow: system.depth[1]
        }
      }
    }, {
      label: 'With depth value set to 2',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          boxShadow: system.depth[2]
        }
      }
    }, {
      label: 'With depth value set to 3',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          boxShadow: system.depth[3]
        }
      }
    }, {
      label: 'With depth value set to 4',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          boxShadow: system.depth[4]
        }
      }
    }, {
      label: 'With depth value set to 5',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          boxShadow: system.depth[5]
        }
      }
    }, {
      label: 'With depth value set to 6',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          boxShadow: system.depth[6]
        }
      }
    }, {
      label: 'With custom width',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          width: px2rem(300)
        }
      }
    }, {
      label: 'With small close icon',
      props: {
        heading: 'Delete Item',
        hasCloseIcon: true,
        cs: {
          width: px2rem(300)
        },
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
        cs,
        ...props
      }) => <Popup.Card cs={[{
        animation: 'none'
      }, cs]} {...props}>
            {hasCloseIcon ? <Popup.CloseIcon aria-label="" size={closeIconSize} /> : null}
            {heading ? <Popup.Heading>{heading}</Popup.Heading> : null}
            <Popup.Body>Your workbook was successfully processed.</Popup.Body>
          </Popup.Card>}
      </ComponentStatesTable>
    </StaticStates>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const model = usePopupModel({
      initialVisibility: 'visible'
    });
    return <CanvasProvider dir="rtl">
        <Popup model={model}>
          <Popup.Target cs={{
          display: 'none'
        }}></Popup.Target>
          <Popup.Popper>
            <Popup.Card cs={{
            animation: 'none',
            width: px2rem(300)
          }}>
              <Popup.CloseIcon aria-label="" />
              <Popup.Heading>למחוק פריט</Popup.Heading>
              <Popup.Body>האם ברצונך למחוק פריט זה</Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </CanvasProvider>;
  }
}`,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
            <Popup.Card cs={{
            animation: 'none',
            width: px2rem(300)
          }}>
              <Popup.CloseIcon aria-label="" />
              <Popup.Heading>Title</Popup.Heading>
              <Popup.Body>Body</Popup.Body>
              <PrimaryButton>Primary Button</PrimaryButton>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </CanvasProvider>;
  }
}`,...r.parameters?.docs?.source}}};const se=["PopupStates","PopupRTL","PopupThemed"];export{p as PopupRTL,a as PopupStates,r as PopupThemed,se as __namedExportsOrder,te as default};
