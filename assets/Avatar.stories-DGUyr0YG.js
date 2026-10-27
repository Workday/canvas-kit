import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as A}from"./index-3YbjYt95.js";import{ae as w}from"./index-8zTmtzg_.js";import{E as t,c as _}from"./union-Dw3119xp.js";import"./index-IfJi-UCQ.js";import{A as r,B as k}from"./Avatar-CKiAmiHa.js";import{c as o}from"./cs-CmRirKzJ.js";import{p as D}from"./px2rem-C0KbprIx.js";import{aw as z,ax as I}from"./index-CFEs8r9D.js";import{T as b}from"./Text-BU7lo9qQ.js";import{g as x}from"./index-C_4iH04t.js";import"./iframe-DzHAWDep.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./components-CxXDZKlX.js";import"./StatusIndicator-C0c7vbAG.js";import"./mergeStyles-Cwq7MPiu.js";import"./Box-AXoeqAfR.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./cornerShape-CSfH3EMK.js";import"./Card-C94ti1ug.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-DG35H1Wq.js";import"./Hyperlink-DuzNLKMl.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-ClDLkqd4.js";import"./BaseButton-CXgunvHx.js";import"./Button-BKwQ9p25.js";import"./lerna-DluDaNV7.js";import"./CanvasProvider-DJRItNr0.js";import"./Tooltip-DUI0SA_T.js";import"./useTooltip-PjORsXZm.js";import"./getTransformFromPlacement-kDQSMLcK.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-CJ8QJI5q.js";import"./Popper-mGIbWNdd.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BjIo91oe.js";import"./TypeLevelComponents-CWBiLbMZ.js";import"./ColorPicker-4zrYiXHt.js";import"./ColorInput-BSxd7JdF.js";import"./check-small-BqSDQIle.js";import"./TextInput-DX-uTB_8.js";import"./types-DXdjelYI.js";import"./FormField-D3X-JdP0.js";import"./check-Ds6vsrAM.js";import"./Expandable-CSlI0MMa.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-BY9hL40t.js";import"./Popup-Buqd_rCX.js";import"./x-B1faap_l.js";import"./usePopupTarget-BrzAvJUE.js";import"./useInitialFocus-DA01W-5V.js";import"./useReturnFocus-CgwmYqfY.js";import"./useFocusRedirect-DlsmGhp1.js";import"./Breadcrumbs-CtAhx_Hv.js";import"./useOverflowListItemMeasure-DU3HTtaC.js";import"./useListItemRegister-cbpcI0J1.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-pYQJPHtt.js";import"./OverflowTooltip-CfbyETTq.js";import"./useListItemRovingFocus-9AyEy-B6.js";import"./useListItemSelect-BVXjgXJV.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-Dl_Li4_V.js";import"./Flex-BL4S5dy0.js";import"./Table-CI-MHtGM.js";const h=()=>e.jsx(r,{name:"John Doe"});h.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

export const Basic = () => {
  return <Avatar name="John Doe" />;
};
`;const N=o({cursor:"pointer",backgroundColor:I,color:z,borderRadius:"50%",border:"none",padding:"0",margin:"0",display:"flex",alignItems:"center",span:{cursor:"pointer"}}),v=()=>e.jsx(k,{size:D(56),cs:N,as:"button",onClick:()=>console.log("clicked"),children:e.jsx(k.Name,{name:"John Doe Jane"})});v.__RAW__=`import {BaseAvatar} from '@workday/canvas-kit-react/avatar';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

const customStyles = createStyles({
  cursor: 'pointer',
  backgroundColor: base.magenta300,
  color: base.magenta700,
  borderRadius: '50%',
  border: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  span: {
    cursor: 'pointer',
  },
});

export const Custom = () => {
  return (
    <BaseAvatar
      size={px2rem(56)}
      cs={customStyles}
      as="button"
      onClick={() => console.log('clicked')}
    >
      <BaseAvatar.Name name="John Doe Jane" />
    </BaseAvatar>
  );
};
`;const E=""+new URL("nicholas-avatar-CDSXduJt.jpg",import.meta.url).href,B=o({display:"inline-flex",gap:x.sm,alignItems:"center"}),u=()=>e.jsxs("div",{className:B,children:[e.jsx(r,{name:"Nicholas Smith",isDecorative:!0,url:E,objectFit:"cover",size:"small"}),e.jsx(b,{children:"Nicholas Smith"})]});u.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// @ts-ignore
import nicholasAvatar from './nicholas-avatar.jpg';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.sm,
  alignItems: 'center',
});
export const Decorative = () => {
  return (
    <div className={containerStyles}>
      <Avatar
        name="Nicholas Smith"
        isDecorative
        url={nicholasAvatar}
        objectFit="cover"
        size="small"
      />
      <Text>Nicholas Smith</Text>
    </div>
  );
};
`;const C=o({display:"inline-flex",gap:x.sm,alignItems:"center"}),g=()=>e.jsxs("div",{className:C,children:[e.jsx(r,{name:"Nicholas Smith",isDecorative:!0,size:"small"}),e.jsx(b,{children:"Nicholas Smith"})]});g.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.sm,
  alignItems: 'center',
});
export const DecorativeInitials = () => {
  return (
    <div className={containerStyles}>
      <Avatar name="Nicholas Smith" isDecorative size="small" />
      <Text>Nicholas Smith</Text>
    </div>
  );
};
`;const j=()=>e.jsx(r,{name:"Happy Doggo",url:"https://picsum.photos/id/237/300/200",objectFit:"cover",size:"medium"});j.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

export const Image = () => {
  return (
    <Avatar
      name="Happy Doggo"
      url={'https://picsum.photos/id/237/300/200'}
      objectFit="cover"
      size="medium"
    />
  );
};
`;const T=o({display:"inline-flex",gap:x.sm}),y=()=>e.jsxs("div",{className:T,children:[e.jsx(r,{name:"John Doe",size:"extraExtraSmall"}),e.jsx(r,{name:"Logan McNeil",size:"extraSmall"}),e.jsx(r,{name:"Wonder Woman",size:"small"}),e.jsx(r,{name:"Iron Man",size:"medium"}),e.jsx(r,{name:"Peter Parker",size:"large"}),e.jsx(r,{name:"Bruce Banner",size:"extraLarge"}),e.jsx(r,{name:"Elektra",size:"extraExtraLarge"})]});y.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.sm,
});

export const Size = () => {
  return (
    <div className={containerStyles}>
      <Avatar name="John Doe" size="extraExtraSmall" />
      <Avatar name="Logan McNeil" size="extraSmall" />
      <Avatar name="Wonder Woman" size="small" />
      <Avatar name="Iron Man" size="medium" />
      <Avatar name="Peter Parker" size="large" />
      <Avatar name="Bruce Banner" size="extraLarge" />
      <Avatar name="Elektra" size="extraExtraLarge" />
    </div>
  );
};
`;const W=o({display:"inline-flex",gap:x.sm}),f=()=>e.jsxs("div",{className:W,children:[e.jsx(r,{name:"John Doe",variant:"blue"}),e.jsx(r,{name:"Logan McNeil",variant:"amber"}),e.jsx(r,{name:"Wonder Woman",variant:"teal"}),e.jsx(r,{name:"Elektra",variant:"purple"}),e.jsx(r,{name:"Mary Jane",variant:"magenta"}),e.jsx(r,{name:"Green Arrow",variant:"green"})]});f.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.sm,
});

export const Variant = () => {
  return (
    <div className={containerStyles}>
      <Avatar name="John Doe" variant="blue" />
      <Avatar name="Logan McNeil" variant="amber" />
      <Avatar name="Wonder Woman" variant="teal" />
      <Avatar name="Elektra" variant="purple" />
      <Avatar name="Mary Jane" variant="magenta" />
      <Avatar name="Green Arrow" variant="green" />
    </div>
  );
};
`;function S(s){const a={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...A(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Avatar",component:r,of:J}),`
`,e.jsx(a.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(a.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(a.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(a.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(a.p,{children:["The most basic usage requires only a ",e.jsx(a.code,{children:"name"}),` prop. The component automatically extracts and displays
the initials. If you want to display a different set of initials, you can use the
`,e.jsx(a.code,{children:"preferredInitials"})," prop."]}),`
`,e.jsx(t,{code:h}),`
`,e.jsx(a.h3,{id:"image-avatar",children:"Image Avatar"}),`
`,e.jsxs(a.p,{children:["You can display a profile image by providing the ",e.jsx(a.code,{children:"url"})," prop."]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["Note: The ",e.jsx(a.code,{children:"url"})," and the ",e.jsx(a.code,{children:"name"})," prop is required for the image avatar. The ",e.jsx(a.code,{children:"name"}),` is used for the
`,e.jsx(a.code,{children:"alt"})," attribute on the image."]}),`
`]}),`
`,e.jsx(a.h4,{id:"image-fallback-behavior",children:"Image Fallback Behavior"}),`
`,e.jsx(a.p,{children:"The Avatar component includes intelligent fallback handling:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["While the image loads, the user's initials are displayed using the ",e.jsx(a.code,{children:"name"})," prop"]}),`
`,e.jsx(a.li,{children:"If the image fails to load, initials remain visible"}),`
`,e.jsxs(a.li,{children:["The ",e.jsx(a.code,{children:"name"})," prop serves as both the alt text and fallback content"]}),`
`]}),`
`,e.jsx(t,{code:j}),`
`,e.jsx(a.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsx(a.p,{children:"The Avatar component supports the following sizes:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"extraExtraSmall"})," is 24px x 24px"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"extraSmall"})," is 32px x 32px"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"small"})," is 40px x 40px"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"medium"})," is 48px x 48px"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"large"})," is 72px x 72px"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"extraLarge"})," is 96px x 96px"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"extraExtraLarge"})," is 120px x 120px"]}),`
`]}),`
`,e.jsx(t,{code:y}),`
`,e.jsx(a.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(a.p,{children:"Choose from four predefined color schemes:"}),`
`,e.jsx(t,{code:f}),`
`,e.jsx(a.h3,{id:"advanced-custom-component",children:"Advanced Custom Component"}),`
`,e.jsxs(a.p,{children:["For complete control over styling and behavior, use the ",e.jsx(a.code,{children:"BaseAvatar"})," component:"]}),`
`,e.jsx(t,{code:v}),`
`,e.jsx(a.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(a.p,{children:["If the Avatar is rendered next to the user's name, set ",e.jsx(a.code,{children:"isDecorative"})," to ",e.jsx(a.code,{children:"true"}),` to hide the image
and fallback initials from assistive technology. This avoids announcing the same name twice.`]}),`
`,e.jsx(t,{code:u}),`
`,e.jsx(a.p,{children:"The same applies when no image is provided:"}),`
`,e.jsx(t,{code:g}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(_,{name:"Avatar",fileName:"/react/",hideDescription:!0})]})}function M(s={}){const{wrapper:a}={...A(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(S,{...s})}):S(s)}const J={title:"Components/Indicators/Avatar",component:r,tags:["autodocs"],parameters:{docs:{page:M}}},i={render:h},n={render:j},c={render:y},m={render:f},l={render:v},p={render:u},d={render:g};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: ImageExample
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: SizeExample
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: VariantExample
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: DecorativeExample
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: DecorativeInitialsExample
}`,...d.parameters?.docs?.source}}};const da=["Basic","Image","Size","Variant","Custom","Decorative","DecorativeInitials"];export{i as Basic,l as Custom,p as Decorative,d as DecorativeInitials,n as Image,c as Size,m as Variant,da as __namedExportsOrder,J as default};
