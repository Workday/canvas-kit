import{j as s}from"./jsx-runtime-Bu6AqWCO.js";import{T as c}from"./Toast-CE_Gtic9.js";import{c as e}from"./check-Ds6vsrAM.js";import{e as l}from"./exclamation-circle-BNuxaliX.js";import{S as m}from"./StaticStates-D17zGD2m.js";import{C as d}from"./ComponentStatesTable-C41opddR.js";import{c as o}from"./index-C_4iH04t.js";import"./index-IfJi-UCQ.js";import"./components-CYP9NeI-.js";import"./Flex-D_NCz1SB.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./Box-CnfAPO8a.js";import"./useConstant-B_SD0x5s.js";import"./flex-BQ2dge_k.js";import"./mergeStyles-CKlw0c7j.js";import"./grid-92Zbaa_D.js";import"./Popup-DP2Q4Rip.js";import"./getTransformFromPlacement-CQhU5Ns9.js";import"./CanvasProvider-CF14T0i9.js";import"./index-CFEs8r9D.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./Card-CbxxBIYl.js";import"./Text-C3NU_mns.js";import"./cornerShape-VSFpHIfk.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-d13vBCKw.js";import"./BaseButton-xzvUa-Ri.js";import"./SystemIcon-DH6nxozh.js";import"./Svg-D1dbi2br.js";import"./types-wqmYQQWa.js";import"./Button-BZ4Q3VL_.js";import"./TertiaryButton-DizXonei.js";import"./x-B1faap_l.js";import"./Popper-CH8vOlWw.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./isElementRTL-lizwOp5U.js";import"./usePopupTarget-C4hhXT-q.js";import"./Hyperlink-D-Dy_Jxf.js";import"./TypeLevelComponents-CndumxZN.js";const ro={title:"Testing/Popups/Toast",component:c,parameters:{chromatic:{disable:!1}}},r={render:()=>s.jsx(m,{children:s.jsx(d,{rowProps:[{label:"Default",props:{mode:"polite",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With Icon",props:{mode:"polite",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"On Close",props:{mode:"alert",hasCloseIcon:!0,icon:l,iconColor:o.fg.danger.default,message:"Your workbook has an error."}},{label:"With Action",props:{mode:"dialog",hasAction:!0,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With small padding",props:{mode:"polite",hasCloseIcon:!0,padding:"0px",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With no depth",props:{mode:"polite",hasCloseIcon:!0,depth:"none",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 1",props:{mode:"polite",hasCloseIcon:!0,depth:1,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 2",props:{mode:"polite",hasCloseIcon:!0,depth:2,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 3",props:{mode:"polite",hasCloseIcon:!0,depth:3,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 4",props:{mode:"polite",hasCloseIcon:!0,depth:4,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 5",props:{mode:"polite",hasCloseIcon:!0,depth:5,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 6",props:{mode:"polite",hasCloseIcon:!0,depth:6,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With custom width",props:{mode:"polite",hasCloseIcon:!0,width:300,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With short mesage",props:{mode:"alert",hasCloseIcon:!0,width:300,icon:l,iconColor:o.fg.danger.default,message:"There was an error"}}],columnProps:[{label:"Default",props:{}}],children:({mode:a,hasCloseIcon:p,hasAction:i,icon:u,iconColor:n,...t})=>s.jsxs(c,{mode:a,...t,children:[s.jsx(c.Icon,{icon:u,color:n}),s.jsxs(c.Body,{children:[s.jsx(c.Message,{children:t.message}),i&&s.jsx(c.Link,{href:"#href",children:"Custom Link"})]}),p&&s.jsx(c.CloseIcon,{"aria-label":"Close"})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StaticStates>
        <ComponentStatesTable rowProps={[{
        label: 'Default',
        props: {
          mode: 'polite',
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With Icon',
        props: {
          mode: 'polite',
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'On Close',
        props: {
          mode: 'alert',
          hasCloseIcon: true,
          icon: exclamationCircleIcon,
          iconColor: system.color.fg.danger.default,
          message: 'Your workbook has an error.'
        }
      }, {
        label: 'With Action',
        props: {
          mode: 'dialog',
          hasAction: true,
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With small padding',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          padding: '0px',
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With no depth',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          depth: 'none',
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With depth value set to 1',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          depth: 1,
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With depth value set to 2',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          depth: 2,
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With depth value set to 3',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          depth: 3,
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With depth value set to 4',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          depth: 4,
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With depth value set to 5',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          depth: 5,
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With depth value set to 6',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          depth: 6,
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With custom width',
        props: {
          mode: 'polite',
          hasCloseIcon: true,
          width: 300,
          icon: checkIcon,
          iconColor: system.color.fg.success.default,
          message: 'Your workbook was successfully processed.'
        }
      }, {
        label: 'With short mesage',
        props: {
          mode: 'alert',
          hasCloseIcon: true,
          width: 300,
          icon: exclamationCircleIcon,
          iconColor: system.color.fg.danger.default,
          message: 'There was an error'
        }
      }]} columnProps={[{
        label: 'Default',
        props: {}
      }]}>
          {({
          mode,
          hasCloseIcon,
          hasAction,
          icon,
          iconColor,
          ...props
        }) => <Toast mode={mode} {...props}>
              <Toast.Icon icon={icon} color={iconColor} />
              <Toast.Body>
                <Toast.Message>{props.message}</Toast.Message>
                {hasAction && <Toast.Link href="#href">Custom Link</Toast.Link>}
              </Toast.Body>
              {hasCloseIcon && <Toast.CloseIcon aria-label="Close" />}
            </Toast>}
        </ComponentStatesTable>
      </StaticStates>;
  }
}`,...r.parameters?.docs?.source}}};const to=["ToastStates"];export{r as ToastStates,to as __namedExportsOrder,ro as default};
