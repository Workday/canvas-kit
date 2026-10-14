import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{P as o}from"./Popup-DAfCb3bS.js";import{S as P}from"./StaticStates-DkF3QLuR.js";import{C as b}from"./ComponentStatesTable-846vHFyq.js";import{p as I,d as s}from"./index-jCBjnmNg.js";import{p as i}from"./px2rem-C0KbprIx.js";import{u as n}from"./getTransformFromPlacement-0qQtHERt.js";import{C as d}from"./CanvasProvider-Bqk713r3.js";import{m as g}from"./index-kj8ZfNNN.js";import{P as l}from"./PrimaryButton-DekPaoL0.js";import"./index-IfJi-UCQ.js";import"./components-CyZuQxpO.js";import"./Card-CoXliinI.js";import"./mergeStyles-aso8A0iZ.js";import"./Box-CwXb8fLy.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./useConstant-B_SD0x5s.js";import"./flex-BIdFUmPB.js";import"./grid-D3lEMqUx.js";import"./Text-DKU2C7b1.js";import"./cornerShape-yNJyCN49.js";import"./SecondaryButton-A4fXFx92.js";import"./BaseButton-CrTTH5H6.js";import"./SystemIcon-BIB-oP8f.js";import"./Svg-DLcqTVF1.js";import"./types-wqmYQQWa.js";import"./Button-DO73SKPJ.js";import"./TertiaryButton-DuUtK6N9.js";import"./x-B1faap_l.js";import"./Popper-C66rtqtU.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./usePopupTarget-CQC5ukAW.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";const se={title:"Testing/Popups/Popup",component:o,parameters:{chromatic:{disable:!1}}},a={render:()=>e.jsx(P,{children:e.jsx(b,{rowProps:[{label:"Default",props:{}},{label:"On Close",props:{hasCloseIcon:!0}},{label:"With Heading",props:{heading:"Delete Item"}},{label:"With zero padding",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{padding:"0"}}},{label:"With small padding",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{padding:I.md}}},{label:"With no depth",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:"none"}}},{label:"With depth value set to 1",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[1]}}},{label:"With depth value set to 2",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[2]}}},{label:"With depth value set to 3",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[3]}}},{label:"With depth value set to 4",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[4]}}},{label:"With depth value set to 5",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[5]}}},{label:"With depth value set to 6",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{boxShadow:s[6]}}},{label:"With custom width",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{width:i(300)}}},{label:"With small close icon",props:{heading:"Delete Item",hasCloseIcon:!0,cs:{width:i(300)},closeIconSize:"small"}}],columnProps:[{label:"Default",props:{}}],children:({heading:t,hasCloseIcon:m,closeIconSize:h,cs:c,...u})=>e.jsxs(o.Card,{cs:[{animation:"none"},c],...u,children:[m?e.jsx(o.CloseIcon,{"aria-label":"",size:h}):null,t?e.jsx(o.Heading,{children:t}):null,e.jsx(o.Body,{children:"Your workbook was successfully processed."})]})})})},p={render:()=>{const t=n({initialVisibility:"visible"});return e.jsx(d,{dir:"rtl",children:e.jsxs(o,{model:t,children:[e.jsx(o.Target,{cs:{display:"none"}}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{cs:{animation:"none",width:i(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"למחוק פריט"}),e.jsx(o.Body,{children:"האם ברצונך למחוק פריט זה"})]})})]})})}},r={render:()=>{const t=n({initialVisibility:"visible"});return e.jsx(d,{theme:{canvas:{palette:{primary:{main:g}}}},children:e.jsxs(o,{model:t,children:[e.jsx(o.Target,{as:l,children:"Primary Button"}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{cs:{animation:"none",width:i(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"Title"}),e.jsx(o.Body,{children:"Body"}),e.jsx(l,{children:"Primary Button"})]})})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const ae=["PopupStates","PopupRTL","PopupThemed"];export{p as PopupRTL,a as PopupStates,r as PopupThemed,ae as __namedExportsOrder,se as default};
