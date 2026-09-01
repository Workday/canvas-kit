import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{T as d}from"./Text-CEC2A_mA.js";import{S as r}from"./StaticStates-PSus6iXa.js";import{C as a}from"./ComponentStatesTable-ToMmswkK.js";import{f as v,b as S,c as u}from"./index-DE-upP0k.js";import{K as b}from"./index-kj8ZfNNN.js";import{B as t}from"./Box-BvZYftND.js";import{p as h}from"./px2rem-C0KbprIx.js";import{c as x}from"./cs-CmRirKzJ.js";import{T as g,H as f,S as z,B as T}from"./TypeLevelComponents-CXDvcd40.js";import{L as w}from"./LabelText-C5zszHRX.js";import"./index-IfJi-UCQ.js";import"./components-BMCKvV6D.js";import"./mergeStyles-C74BFx3R.js";import"./flex-Dh-2nxfI.js";import"./grid-BTRczyN_.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./CanvasProvider-CPCp_Ehm.js";import"./index-DWHOiqdi.js";import"./useConstant-B_SD0x5s.js";const s=x({backgroundColor:u.brand.accent.primary}),R={title:"Testing/Containers/Text",component:d,parameters:{chromatic:{disable:!1}}},o={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Default",props:{}},{label:"With font-size as a token value of 8",props:{cs:{fontSize:8}}},{label:"With regular font-size value of 1.25rem",props:{cs:{fontSize:"1.25rem"}}},{label:"With regular font-weight value of 400",props:{cs:{fontWeight:400}}},{label:"With font-weight as a token value of normal",props:{cs:{fontWeight:v.normal},as:"h3"}},{label:"With monospace font-family value",props:{cs:{fontFamily:S.mono}}},{label:"With color",props:{cs:{color:b}}},{label:"With variant",props:{variant:"error"}},{label:"With letter-spacing of 0.5rem",props:{cs:{letterSpacing:"0.5rem"}}},{label:"With line-height of 2.5rem",props:{cs:{lineHeight:"2.5rem"}}},{label:"Aligned to the right",props:{cs:{textAlign:"right"}}},{label:"With text-decoration",props:{cs:{textDecoration:"underline"}}},{label:"Transformed to uppercase",props:{cs:{textTransform:"uppercase"}}},{label:"With text-shadow",props:{cs:{textShadow:`2px 2px ${b}`}}},{label:"With white-space changed to nowrap",props:{cs:{whiteSpace:"nowrap"}}},{label:"With word-break changed to break-all",props:{cs:{wordBreak:"break-all"}}}],columnProps:[{label:"Examples",props:{}}],children:n=>e.jsx(t,{cs:{width:h(350)},children:e.jsx(d,{as:"p",...n,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})})})},l={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Small Size",props:{size:"small"}},{label:"Medium Size",props:{size:"medium"}},{label:"Large Size",props:{size:"large"}}],columnProps:[{label:"Default",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(g,{...n,children:"Lorem ipsum title."})})})})},i={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Small Size",props:{size:"small"}},{label:"Medium Size",props:{size:"medium"}},{label:"Large Size",props:{size:"large"}}],columnProps:[{label:"Examples",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(f,{...n,children:"Lorem ipsum title."})})})})},p={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Small Size",props:{size:"small"}},{label:"Medium Size",props:{size:"medium"}},{label:"Large Size",props:{size:"large"}}],columnProps:[{label:"Examples",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(z,{...n,children:"Lorem ipsum title."})})})})},m={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Small Size",props:{size:"small"}},{label:"Medium Size",props:{size:"medium"}},{label:"Large Size",props:{size:"large"}}],columnProps:[{label:"Examples",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(T,{...n,children:"Lorem ipsum title."})})})})},c={render:()=>e.jsx(r,{children:e.jsx(a,{rowProps:[{label:"Default",props:{}},{label:"Disabled",props:{disabled:!0}}],columnProps:[{label:"Examples",props:{}},{label:"Hint variant",props:{variant:"hint"}},{label:"Error variant",props:{variant:"error"}},{label:"Inverse variant",props:{variant:"inverse"}}],children:n=>e.jsx(t,{className:n.variant==="inverse"?s:"",children:e.jsx(w,{...n,children:"Lorem ipsum title."})})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const q=["TextStates","TitleStates","HeadingStates","SubtextStates","BodyTextStates","LabelStates"];export{m as BodyTextStates,i as HeadingStates,c as LabelStates,p as SubtextStates,o as TextStates,l as TitleStates,q as __namedExportsOrder,R as default};
