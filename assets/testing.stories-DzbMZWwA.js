import{j as s}from"./jsx-runtime-Bu6AqWCO.js";import{T as c}from"./Toast-3Jye9QUk.js";import{c as e}from"./check-Ds6vsrAM.js";import{e as l}from"./exclamation-circle-BNuxaliX.js";import{S as m}from"./StaticStates-eh1XVmRp.js";import{C as d}from"./ComponentStatesTable-CeuTS0Hq.js";import{c as o}from"./index-DE-upP0k.js";import"./index-IfJi-UCQ.js";import"./components-J2matnwI.js";import"./Flex-Bya8Tutq.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./Box-C28byrRl.js";import"./useConstant-B_SD0x5s.js";import"./flex-Cgcx0XP-.js";import"./mergeStyles-Dzkg_44R.js";import"./grid-D3GOPfSf.js";import"./Popup-CFzYh4ki.js";import"./getTransformFromPlacement-BMTXYfgW.js";import"./CanvasProvider-D99BixEQ.js";import"./index-D-t2nnqG.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./Card-Cixb7JwI.js";import"./Text-CjirTJMi.js";import"./cornerShape-DaLncuks.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-D5Cqn9Jg.js";import"./BaseButton-CLmEjkXA.js";import"./SystemIcon-DQIl41_4.js";import"./Svg-BNbEZ3E8.js";import"./types-wqmYQQWa.js";import"./Button-MuaWtoCf.js";import"./TertiaryButton-aMR34MRB.js";import"./x-B1faap_l.js";import"./Popper--Mi8Hc-7.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./usePopupTarget-CRuM6ip6.js";import"./Hyperlink-DzsL2-aa.js";import"./TypeLevelComponents-C3guoDTA.js";const co={title:"Testing/Popups/Toast",component:c,parameters:{chromatic:{disable:!1}}},r={render:()=>s.jsx(m,{children:s.jsx(d,{rowProps:[{label:"Default",props:{mode:"polite",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With Icon",props:{mode:"polite",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"On Close",props:{mode:"alert",hasCloseIcon:!0,icon:l,iconColor:o.fg.danger.default,message:"Your workbook has an error."}},{label:"With Action",props:{mode:"dialog",hasAction:!0,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With small padding",props:{mode:"polite",hasCloseIcon:!0,padding:"0px",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With no depth",props:{mode:"polite",hasCloseIcon:!0,depth:"none",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 1",props:{mode:"polite",hasCloseIcon:!0,depth:1,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 2",props:{mode:"polite",hasCloseIcon:!0,depth:2,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 3",props:{mode:"polite",hasCloseIcon:!0,depth:3,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 4",props:{mode:"polite",hasCloseIcon:!0,depth:4,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 5",props:{mode:"polite",hasCloseIcon:!0,depth:5,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 6",props:{mode:"polite",hasCloseIcon:!0,depth:6,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With custom width",props:{mode:"polite",hasCloseIcon:!0,width:300,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With short mesage",props:{mode:"alert",hasCloseIcon:!0,width:300,icon:l,iconColor:o.fg.danger.default,message:"There was an error"}}],columnProps:[{label:"Default",props:{}}],children:({mode:a,hasCloseIcon:p,hasAction:i,icon:u,iconColor:n,...t})=>s.jsxs(c,{mode:a,...t,children:[s.jsx(c.Icon,{icon:u,color:n}),s.jsxs(c.Body,{children:[s.jsx(c.Message,{children:t.message}),i&&s.jsx(c.Link,{href:"#href",children:"Custom Link"})]}),p&&s.jsx(c.CloseIcon,{"aria-label":"Close"})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const ro=["ToastStates"];export{r as ToastStates,ro as __namedExportsOrder,co as default};
