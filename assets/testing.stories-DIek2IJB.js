import{j as s}from"./jsx-runtime-Bu6AqWCO.js";import{T as c}from"./Toast-BcP9QE5Y.js";import{c as e}from"./check-Ds6vsrAM.js";import{e as l}from"./exclamation-circle-BNuxaliX.js";import{S as m}from"./StaticStates-NN4j7BUW.js";import{C as d}from"./ComponentStatesTable-CW7qWVhz.js";import{c as o}from"./index-jCBjnmNg.js";import"./index-IfJi-UCQ.js";import"./components-C-u5XlZP.js";import"./Flex-MD8ztUuE.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./Box-DPiecUlT.js";import"./useConstant-B_SD0x5s.js";import"./flex-D3fQ-Ask.js";import"./mergeStyles-BvjK7w08.js";import"./grid-CjiGZO2E.js";import"./Popup-DHHij2SR.js";import"./getTransformFromPlacement-zAUyyV0p.js";import"./CanvasProvider-BbG-5C5A.js";import"./index-kj8ZfNNN.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./Card-BoTCiqhj.js";import"./Text-E1mbx0_d.js";import"./cornerShape-GrTbfZsL.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-_qeYjrAX.js";import"./BaseButton-Dxm_UnOM.js";import"./SystemIcon-BMs2fJzK.js";import"./Svg-DjTVHMAG.js";import"./types-wqmYQQWa.js";import"./Button-LNRLXUt7.js";import"./TertiaryButton-6nacfvfA.js";import"./x-B1faap_l.js";import"./Popper-CNXZYbqs.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./usePopupTarget-DKTpT4Od.js";import"./Hyperlink-DlKRVOfH.js";import"./TypeLevelComponents-CEixL3Wy.js";const co={title:"Testing/Popups/Toast",component:c,parameters:{chromatic:{disable:!1}}},r={render:()=>s.jsx(m,{children:s.jsx(d,{rowProps:[{label:"Default",props:{mode:"polite",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With Icon",props:{mode:"polite",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"On Close",props:{mode:"alert",hasCloseIcon:!0,icon:l,iconColor:o.fg.danger.default,message:"Your workbook has an error."}},{label:"With Action",props:{mode:"dialog",hasAction:!0,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With small padding",props:{mode:"polite",hasCloseIcon:!0,padding:"0px",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With no depth",props:{mode:"polite",hasCloseIcon:!0,depth:"none",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 1",props:{mode:"polite",hasCloseIcon:!0,depth:1,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 2",props:{mode:"polite",hasCloseIcon:!0,depth:2,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 3",props:{mode:"polite",hasCloseIcon:!0,depth:3,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 4",props:{mode:"polite",hasCloseIcon:!0,depth:4,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 5",props:{mode:"polite",hasCloseIcon:!0,depth:5,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 6",props:{mode:"polite",hasCloseIcon:!0,depth:6,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With custom width",props:{mode:"polite",hasCloseIcon:!0,width:300,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With short mesage",props:{mode:"alert",hasCloseIcon:!0,width:300,icon:l,iconColor:o.fg.danger.default,message:"There was an error"}}],columnProps:[{label:"Default",props:{}}],children:({mode:a,hasCloseIcon:p,hasAction:i,icon:u,iconColor:n,...t})=>s.jsxs(c,{mode:a,...t,children:[s.jsx(c.Icon,{icon:u,color:n}),s.jsxs(c.Body,{children:[s.jsx(c.Message,{children:t.message}),i&&s.jsx(c.Link,{href:"#href",children:"Custom Link"})]}),p&&s.jsx(c.CloseIcon,{"aria-label":"Close"})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
