import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{T as d}from"./Text-CA4K3XqV.js";import{S as r}from"./StaticStates-DwtqWt-S.js";import{C as a}from"./ComponentStatesTable-BdkfeyRI.js";import{f as v,b as S,c as u}from"./index-5dfzm_kn.js";import{d as b}from"./index-5mrAZJYD.js";import{B as t}from"./Box-B8SJpSaU.js";import{p as h}from"./px2rem-C0KbprIx.js";import{c as x}from"./cs-rfTTo7Bg.js";import{T as g,H as f,S as z,B as T}from"./TypeLevelComponents-Bx9MbsnZ.js";import{L as w}from"./LabelText-CQDbmqsB.js";import"./index-IfJi-UCQ.js";import"./components-CiYq2Ux-.js";import"./mergeStyles-BwsTBQHe.js";import"./flex-DEpQdPd9.js";import"./grid-Bptupakt.js";import"./CanvasProvider-BQueJlPh.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-N3xz2Kqy.js";import"./useConstant-CUZppmaV.js";const s=x({backgroundColor:u.brand.accent.primary}),q={title:"Testing/Containers/Text",component:d,parameters:{chromatic:{disable:!1}}},o={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Default",props:{}},{label:"With font-size as a token value of 8",props:{cs:{fontSize:8}}},{label:"With regular font-size value of 1.25rem",props:{cs:{fontSize:"1.25rem"}}},{label:"With regular font-weight value of 400",props:{cs:{fontWeight:400}}},{label:"With font-weight as a token value of normal",props:{cs:{fontWeight:v.normal},as:"h3"}},{label:"With monospace font-family value",props:{cs:{fontFamily:S.mono}}},{label:"With color",props:{cs:{color:b}}},{label:"With variant",props:{variant:"error"}},{label:"With letter-spacing of 0.5rem",props:{cs:{letterSpacing:"0.5rem"}}},{label:"With line-height of 2.5rem",props:{cs:{lineHeight:"2.5rem"}}},{label:"Aligned to the right",props:{cs:{textAlign:"right"}}},{label:"With text-decoration",props:{cs:{textDecoration:"underline"}}},{label:"Transformed to uppercase",props:{cs:{textTransform:"uppercase"}}},{label:"With text-shadow",props:{cs:{textShadow:`2px 2px ${b}`}}},{label:"With white-space changed to nowrap",props:{cs:{whiteSpace:"nowrap"}}},{label:"With word-break changed to break-all",props:{cs:{wordBreak:"break-all"}}}],columnProps:[{label:"Examples",props:{}}],children:n=>e.jsx(t,{cs:{width:h(350)},children:e.jsx(d,{as:"p",...n,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})})})},l={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Small Size",props:{size:"small"}},{label:"Medium Size",props:{size:"medium"}},{label:"Large Size",props:{size:"large"}}],columnProps:[{label:"Default",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(g,{...n,children:"Lorem ipsum title."})})})})},i={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Small Size",props:{size:"small"}},{label:"Medium Size",props:{size:"medium"}},{label:"Large Size",props:{size:"large"}}],columnProps:[{label:"Examples",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(f,{...n,children:"Lorem ipsum title."})})})})},p={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Small Size",props:{size:"small"}},{label:"Medium Size",props:{size:"medium"}},{label:"Large Size",props:{size:"large"}}],columnProps:[{label:"Examples",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(z,{...n,children:"Lorem ipsum title."})})})})},m={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Small Size",props:{size:"small"}},{label:"Medium Size",props:{size:"medium"}},{label:"Large Size",props:{size:"large"}}],columnProps:[{label:"Examples",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(T,{...n,children:"Lorem ipsum title."})})})})},c={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Default",props:{}},{label:"Disabled",props:{disabled:!0}}],columnProps:[{label:"Examples",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(w,{...n,children:"Lorem ipsum title."})})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Default',
      props: {}
    }, {
      label: 'With font-size as a token value of 8',
      props: {
        cs: {
          fontSize: 8
        }
      }
    }, {
      label: 'With regular font-size value of 1.25rem',
      props: {
        cs: {
          fontSize: '1.25rem'
        }
      }
    }, {
      label: 'With regular font-weight value of 400',
      props: {
        cs: {
          fontWeight: 400
        }
      }
    }, {
      label: 'With font-weight as a token value of normal',
      props: {
        cs: {
          fontWeight: system.fontWeight.normal
        },
        as: 'h3'
      }
    }, {
      label: 'With monospace font-family value',
      props: {
        cs: {
          fontFamily: system.fontFamily.mono
        }
      }
    }, {
      label: 'With color',
      props: {
        cs: {
          color: base.blue100
        }
      }
    }, {
      label: 'With variant',
      props: {
        variant: 'error'
      }
    }, {
      label: 'With letter-spacing of 0.5rem',
      props: {
        cs: {
          letterSpacing: '0.5rem'
        }
      }
    }, {
      label: 'With line-height of 2.5rem',
      props: {
        cs: {
          lineHeight: '2.5rem'
        }
      }
    }, {
      label: 'Aligned to the right',
      props: {
        cs: {
          textAlign: 'right'
        }
      }
    }, {
      label: 'With text-decoration',
      props: {
        cs: {
          textDecoration: 'underline'
        }
      }
    }, {
      label: 'Transformed to uppercase',
      props: {
        cs: {
          textTransform: 'uppercase'
        }
      }
    }, {
      label: 'With text-shadow',
      props: {
        cs: {
          textShadow: \`2px 2px \${base.blue100}\`
        }
      }
    }, {
      label: 'With white-space changed to nowrap',
      props: {
        cs: {
          whiteSpace: 'nowrap'
        }
      }
    }, {
      label: 'With word-break changed to break-all',
      props: {
        cs: {
          wordBreak: 'break-all'
        }
      }
    }]} columnProps={[{
      label: 'Examples',
      props: {}
    }]}>
        {props => <Box cs={{
        width: px2rem(350)
      }}>
            <Text as="p" {...props}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>}
      </ComponentStatesTable>
    </StaticStates>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Small Size',
      props: {
        size: 'small'
      }
    }, {
      label: 'Medium Size',
      props: {
        size: 'medium'
      }
    }, {
      label: 'Large Size',
      props: {
        size: 'large'
      }
    }]} columnProps={[{
      label: 'Default',
      props: {}
    }, {
      label: 'Hint variant',
      props: {
        variant: 'hint'
      }
    }, {
      label: 'Error variant',
      props: {
        variant: 'error'
      }
    }, {
      label: 'Inverse variant',
      props: {
        variant: 'inverse'
      }
    }]}>
        {(props: TypeStateProp) => <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <Title {...props}>Lorem ipsum title.</Title>
          </Box>}
      </ComponentStatesTable>
    </StaticStates>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Small Size',
      props: {
        size: 'small'
      }
    }, {
      label: 'Medium Size',
      props: {
        size: 'medium'
      }
    }, {
      label: 'Large Size',
      props: {
        size: 'large'
      }
    }]} columnProps={[{
      label: 'Examples',
      props: {}
    }, {
      label: 'Hint variant',
      props: {
        variant: 'hint'
      }
    }, {
      label: 'Error variant',
      props: {
        variant: 'error'
      }
    }, {
      label: 'Inverse variant',
      props: {
        variant: 'inverse'
      }
    }]}>
        {(props: TypeStateProp) => <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <Heading {...props}>Lorem ipsum title.</Heading>
          </Box>}
      </ComponentStatesTable>
    </StaticStates>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Small Size',
      props: {
        size: 'small'
      }
    }, {
      label: 'Medium Size',
      props: {
        size: 'medium'
      }
    }, {
      label: 'Large Size',
      props: {
        size: 'large'
      }
    }]} columnProps={[{
      label: 'Examples',
      props: {}
    }, {
      label: 'Hint variant',
      props: {
        variant: 'hint'
      }
    }, {
      label: 'Error variant',
      props: {
        variant: 'error'
      }
    }, {
      label: 'Inverse variant',
      props: {
        variant: 'inverse'
      }
    }]}>
        {(props: TypeStateProp) => <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <Subtext {...props}>Lorem ipsum title.</Subtext>
          </Box>}
      </ComponentStatesTable>
    </StaticStates>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Small Size',
      props: {
        size: 'small'
      }
    }, {
      label: 'Medium Size',
      props: {
        size: 'medium'
      }
    }, {
      label: 'Large Size',
      props: {
        size: 'large'
      }
    }]} columnProps={[{
      label: 'Examples',
      props: {}
    }, {
      label: 'Hint variant',
      props: {
        variant: 'hint'
      }
    }, {
      label: 'Error variant',
      props: {
        variant: 'error'
      }
    }, {
      label: 'Inverse variant',
      props: {
        variant: 'inverse'
      }
    }]}>
        {(props: TypeStateProp) => <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <BodyText {...props}>Lorem ipsum title.</BodyText>
          </Box>}
      </ComponentStatesTable>
    </StaticStates>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Default',
      props: {}
    }, {
      label: 'Disabled',
      props: {
        disabled: true
      }
    }]} columnProps={[{
      label: 'Examples',
      props: {}
    }, {
      label: 'Hint variant',
      props: {
        variant: 'hint'
      }
    }, {
      label: 'Error variant',
      props: {
        variant: 'error'
      }
    }, {
      label: 'Inverse variant',
      props: {
        variant: 'inverse'
      }
    }]}>
        {(props: TypeStateProp) => <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <LabelText {...props}>Lorem ipsum title.</LabelText>
          </Box>}
      </ComponentStatesTable>
    </StaticStates>
}`,...c.parameters?.docs?.source}}};const G=["TextStates","TitleStates","HeadingStates","SubtextStates","BodyTextStates","LabelStates"];export{m as BodyTextStates,i as HeadingStates,c as LabelStates,p as SubtextStates,o as TextStates,l as TitleStates,G as __namedExportsOrder,q as default};
