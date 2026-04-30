import{j as s}from"./jsx-runtime-Bu6AqWCO.js";import{T as c}from"./Toast-tNSOpiGH.js";import{c as e}from"./check-BG7HONvH.js";import{e as l}from"./exclamation-circle-Be30iaM7.js";import{S as m}from"./StaticStates-CBZqM5Fo.js";import{C as d}from"./ComponentStatesTable-jhhL0fUQ.js";import{c as o}from"./index-CYsyLHR7.js";import"./index-IfJi-UCQ.js";import"./components-CXVvXGX8.js";import"./Flex-hE1PVdSE.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./Box-BI0lR_iD.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./mergeStyles-UZCXOJf5.js";import"./grid-CZ8P1z9H.js";import"./Popup-CSV3rOyv.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Card-jS6NBqm3.js";import"./Text-Dt7EG7Lz.js";import"./index-DKOKnxgv.js";import"./px2rem-C0KbprIx.js";import"./SecondaryButton-DBrzjuE9.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./types-wqmYQQWa.js";import"./Button-_9ty_XDZ.js";import"./TertiaryButton-Byu4oUFZ.js";import"./x-BnLC6lG-.js";import"./Popper-CGqk9_xm.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-BRuur9nH.js";import"./usePopupTarget-ukAEISND.js";import"./Hyperlink-nKvi0fIc.js";import"./TypeLevelComponents-DgctLa3l.js";const to={title:"Testing/Popups/Toast",component:c,parameters:{chromatic:{disable:!1}}},r={render:()=>s.jsx(m,{children:s.jsx(d,{rowProps:[{label:"Default",props:{mode:"polite",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With Icon",props:{mode:"polite",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"On Close",props:{mode:"alert",hasCloseIcon:!0,icon:l,iconColor:o.fg.danger.default,message:"Your workbook has an error."}},{label:"With Action",props:{mode:"dialog",hasAction:!0,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With small padding",props:{mode:"polite",hasCloseIcon:!0,padding:"0px",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With no depth",props:{mode:"polite",hasCloseIcon:!0,depth:"none",icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 1",props:{mode:"polite",hasCloseIcon:!0,depth:1,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 2",props:{mode:"polite",hasCloseIcon:!0,depth:2,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 3",props:{mode:"polite",hasCloseIcon:!0,depth:3,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 4",props:{mode:"polite",hasCloseIcon:!0,depth:4,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 5",props:{mode:"polite",hasCloseIcon:!0,depth:5,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With depth value set to 6",props:{mode:"polite",hasCloseIcon:!0,depth:6,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With custom width",props:{mode:"polite",hasCloseIcon:!0,width:300,icon:e,iconColor:o.fg.success.default,message:"Your workbook was successfully processed."}},{label:"With short mesage",props:{mode:"alert",hasCloseIcon:!0,width:300,icon:l,iconColor:o.fg.danger.default,message:"There was an error"}}],columnProps:[{label:"Default",props:{}}],children:({mode:a,hasCloseIcon:p,hasAction:i,icon:u,iconColor:n,...t})=>s.jsxs(c,{mode:a,...t,children:[s.jsx(c.Icon,{icon:u,color:n}),s.jsxs(c.Body,{children:[s.jsx(c.Message,{children:t.message}),i&&s.jsx(c.Link,{href:"#href",children:"Custom Link"})]}),p&&s.jsx(c.CloseIcon,{"aria-label":"Close"})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const lo=["ToastStates"];export{r as ToastStates,lo as __namedExportsOrder,to as default};
