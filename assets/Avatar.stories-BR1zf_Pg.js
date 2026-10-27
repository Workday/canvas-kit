import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as A}from"./index-aEeHz9Bw.js";import{E as o,c as S}from"./union-f4T5dsiJ.js";import"./index-IfJi-UCQ.js";import{A as a,B as y}from"./Avatar-DKnvW9j1.js";import{c as p}from"./cs-CmRirKzJ.js";import{p as b}from"./px2rem-C0KbprIx.js";import{a4 as z,a5 as _}from"./index-kj8ZfNNN.js";import{T as w}from"./Text-C_lkQW3l.js";import{g as d}from"./index-C_4iH04t.js";import"./iframe-WG7MwSjI.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cik2pv8M.js";import"./Svg-q-fWRgLZ.js";import"./components-OdKcSStU.js";import"./StatusIndicator-CMxRGCF-.js";import"./mergeStyles-HRRReKI7.js";import"./Box-BQWSASz1.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Cq2SI08U.js";import"./grid-C8fI_h8P.js";import"./cornerShape-XgYWEUxE.js";import"./Card-D9Eclt62.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-D_7UWhFo.js";import"./Hyperlink-IDIZQje_.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CmtnR6ND.js";import"./BaseButton-nXUBoAD8.js";import"./Button-B9EDavVx.js";import"./lerna-CmscxKJq.js";import"./CanvasProvider-Bg8Y7PHJ.js";import"./Tooltip-IYVFXsMi.js";import"./useTooltip-Ck_Cs2o9.js";import"./getTransformFromPlacement-BXTUPqrg.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-8wiZHMtw.js";import"./Popper-BausaQH8.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CrPUVetV.js";import"./TypeLevelComponents-DG2bfmmo.js";import"./ColorPicker-z_PcGJof.js";import"./ColorInput-BAAUbclU.js";import"./check-small-BqSDQIle.js";import"./TextInput-CD4VtYJu.js";import"./types-DXdjelYI.js";import"./FormField-2yV80SkC.js";import"./check-Ds6vsrAM.js";import"./Expandable-CGDkUYTi.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Co3A0ahW.js";import"./Popup-BsDV9DrA.js";import"./x-B1faap_l.js";import"./usePopupTarget-AlYo2KDF.js";import"./useInitialFocus-BwgZZeE4.js";import"./useReturnFocus-svAEukqR.js";import"./useFocusRedirect-DrSAXKeK.js";import"./Breadcrumbs-CJar9PFX.js";import"./useOverflowListItemMeasure-BqOuADzY.js";import"./useListItemRegister-CXT_DnuF.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DYLwIYhl.js";import"./OverflowTooltip-DGNnz-0s.js";import"./useListItemRovingFocus-WV5pVo7q.js";import"./useListItemSelect-CTP_l593.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-COeWx1fT.js";import"./Flex-YefXsFY4.js";import"./Table-CkLnbDNv.js";const x=()=>e.jsx(a,{name:"John Doe"});x.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

export const Basic = () => {
  return <Avatar name="John Doe" />;
};
`;const D=p({cursor:"pointer",backgroundColor:_,color:z,borderRadius:"50%",border:"none",padding:"0",margin:"0",display:"flex",alignItems:"center",span:{cursor:"pointer"}}),h=()=>e.jsx(y,{size:b(56),cs:D,as:"button",onClick:()=>console.log("clicked"),children:e.jsx(y.Name,{name:"John Doe Jane"})});h.__RAW__=`import {BaseAvatar} from '@workday/canvas-kit-react/avatar';
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
`;const E=""+new URL("nicholas-avatar-CDSXduJt.jpg",import.meta.url).href,I=p({display:"inline-flex",gap:d.sm,alignItems:"center"}),v=()=>e.jsxs("div",{className:I,children:[e.jsx(a,{name:"Nicholas Smith",isDecorative:!0,url:E,objectFit:"cover",size:"small"}),e.jsx(w,{children:"Nicholas Smith"})]});v.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
`;const u=()=>e.jsx(a,{name:"Happy Doggo",url:"https://picsum.photos/id/237/300/200",objectFit:"cover",size:"medium"});u.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

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
`;const B=p({display:"inline-flex",gap:d.sm}),j=()=>e.jsxs("div",{className:B,children:[e.jsx(a,{name:"John Doe",size:"extraExtraSmall"}),e.jsx(a,{name:"Logan McNeil",size:"extraSmall"}),e.jsx(a,{name:"Wonder Woman",size:"small"}),e.jsx(a,{name:"Iron Man",size:"medium"}),e.jsx(a,{name:"Peter Parker",size:"large"}),e.jsx(a,{name:"Bruce Banner",size:"extraLarge"}),e.jsx(a,{name:"Elektra",size:"extraExtraLarge"})]});j.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
`;const C=p({display:"inline-flex",gap:d.sm}),g=()=>e.jsxs("div",{className:C,children:[e.jsx(a,{name:"John Doe",variant:"blue"}),e.jsx(a,{name:"Logan McNeil",variant:"amber"}),e.jsx(a,{name:"Wonder Woman",variant:"teal"}),e.jsx(a,{name:"Elektra",variant:"purple"}),e.jsx(a,{name:"Mary Jane",variant:"magenta"}),e.jsx(a,{name:"Green Arrow",variant:"green"})]});g.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
`;function f(t){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...k(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Avatar",component:a,of:W}),`
`,e.jsx(r.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:["The most basic usage requires only a ",e.jsx(r.code,{children:"name"}),` prop. The component automatically extracts and displays
the initials. If you want to display a different set of initials, you can use the
`,e.jsx(r.code,{children:"preferredInitials"})," prop."]}),`
`,e.jsx(o,{code:x}),`
`,e.jsx(r.h3,{id:"image-avatar",children:"Image Avatar"}),`
`,e.jsxs(r.p,{children:["You can display a profile image by providing the ",e.jsx(r.code,{children:"url"})," prop."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["Note: The ",e.jsx(r.code,{children:"url"})," and the ",e.jsx(r.code,{children:"name"})," prop is required for the image avatar. The ",e.jsx(r.code,{children:"name"}),` is used for the
`,e.jsx(r.code,{children:"alt"})," attribute on the image."]}),`
`]}),`
`,e.jsx(r.h4,{id:"image-fallback-behavior",children:"Image Fallback Behavior"}),`
`,e.jsx(r.p,{children:"The Avatar component includes intelligent fallback handling:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["While the image loads, the user's initials are displayed using the ",e.jsx(r.code,{children:"name"})," prop"]}),`
`,e.jsx(r.li,{children:"If the image fails to load, initials remain visible"}),`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"name"})," prop serves as both the alt text and fallback content"]}),`
`]}),`
`,e.jsx(o,{code:u}),`
`,e.jsx(r.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsx(r.p,{children:"The Avatar component supports the following sizes:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"extraExtraSmall"})," is 24px x 24px"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"extraSmall"})," is 32px x 32px"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"small"})," is 40px x 40px"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"medium"})," is 48px x 48px"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"large"})," is 72px x 72px"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"extraLarge"})," is 96px x 96px"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"extraExtraLarge"})," is 120px x 120px"]}),`
`]}),`
`,e.jsx(o,{code:j}),`
`,e.jsx(r.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(r.p,{children:"Choose from four predefined color schemes:"}),`
`,e.jsx(o,{code:g}),`
`,e.jsx(r.h3,{id:"advanced-custom-component",children:"Advanced Custom Component"}),`
`,e.jsxs(r.p,{children:["For complete control over styling and behavior, use the ",e.jsx(r.code,{children:"BaseAvatar"})," component:"]}),`
`,e.jsx(o,{code:h}),`
`,e.jsx(r.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["If the Avatar is purely decorative, you can set the ",e.jsx(r.code,{children:"isDecorative"})," prop to ",e.jsx(r.code,{children:"true"}),` to prevent the
`,e.jsx(r.code,{children:"name"})," prop from being forwarded to the ",e.jsx(r.code,{children:"alt"})," attribute of the image."]}),`
`,e.jsx(o,{code:v}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(S,{name:"Avatar",fileName:"/react/",hideDescription:!0})]})}function N(t={}){const{wrapper:r}={...k(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(f,{...t})}):f(t)}const W={title:"Components/Indicators/Avatar",component:a,tags:["autodocs"],parameters:{docs:{page:N}}},n={render:x},s={render:u},i={render:j},c={render:g},m={render:h},l={render:v};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ImageExample
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: SizeExample
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: VariantExample
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: DecorativeExample
}`,...l.parameters?.docs?.source}}};const mr=["Basic","Image","Size","Variant","Custom","Decorative"];export{n as Basic,m as Custom,l as Decorative,s as Image,i as Size,c as Variant,mr as __namedExportsOrder,W as default};
