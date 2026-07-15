import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as S}from"./index-qPwveHR6.js";import{S as A,E as o,c as b}from"./union-Bnamea8Z.js";import"./index-IfJi-UCQ.js";import{A as a,B as y}from"./Avatar-DAJhoyPY.js";import{c as p}from"./cs-rfTTo7Bg.js";import{p as z}from"./px2rem-C0KbprIx.js";import{a1 as _,a2 as w}from"./index-B2vXpe_3.js";import{T as D}from"./Text-zAHvGL5L.js";import{g as d}from"./index-5dfzm_kn.js";import"./iframe-BY-DvtE3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CYWKtt5g.js";import"./Svg-BOmEZWs3.js";import"./components-cPv92EHK.js";import"./StatusIndicator-s9ptt1Pz.js";import"./mergeStyles-DVElzyr1.js";import"./Box-Bb5t4hxz.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-BhZmNYDG.js";import"./grid-Bmsznp5n.js";import"./Card-CTuFKHAr.js";import"./ExternalHyperlink-cu9qP6r4.js";import"./Hyperlink-ZSJz4P_M.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-iAWsqLt2.js";import"./BaseButton-CRjk8TEB.js";import"./Button-CFrxsNin.js";import"./lerna-BNQZfm36.js";import"./CanvasProvider-Ci5riZhq.js";import"./Tooltip-CErWRtkn.js";import"./useTooltip-C4SyLK8A.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CoecPvtE.js";import"./Popper-hn4sGAKm.js";import"./TertiaryButton-COS4TZ7R.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DEQbTSqj.js";import"./ColorPicker-BQihjF3C.js";import"./ColorInput-Cv6UNp1e.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-BsHYcEiN.js";import"./types-DXdjelYI.js";import"./FormField-0Nk9m9UE.js";import"./check-Bvurkvei.js";import"./Expandable-Cy6N2xzw.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BhenD216.js";import"./Popup-D9be8Sr5.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BKN39EIm.js";import"./useInitialFocus-Cco8M7Xz.js";import"./useReturnFocus-Bw0byDkw.js";import"./useFocusRedirect-C1CWQjrd.js";import"./Breadcrumbs-rsTi76HN.js";import"./useOverflowListTarget-BanEKIKR.js";import"./useListItemSelect-B5Qd5LzX.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DL7TM4pR.js";import"./OverflowTooltip-8foSh-Ir.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-sM1mmQLC.js";import"./Table-pGLjoovN.js";const x=()=>e.jsx(a,{name:"John Doe"});x.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

export const Basic = () => {
  return <Avatar name="John Doe" />;
};
`;const E=p({cursor:"pointer",backgroundColor:w,color:_,borderRadius:"50%",border:"none",padding:"0",margin:"0",display:"flex",alignItems:"center",span:{cursor:"pointer"}}),h=()=>e.jsx(y,{size:z(56),cs:E,as:"button",onClick:()=>console.log("clicked"),children:e.jsx(y.Name,{name:"John Doe Jane"})});h.__RAW__=`import {BaseAvatar} from '@workday/canvas-kit-react/avatar';
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
`;const I=""+new URL("nicholas-avatar-CDSXduJt.jpg",import.meta.url).href,B=p({display:"inline-flex",gap:d.sm,alignItems:"center"}),u=()=>e.jsxs("div",{className:B,children:[e.jsx(a,{name:"Nicholas Smith",isDecorative:!0,url:I,objectFit:"cover",size:"small"}),e.jsx(D,{children:"Nicholas Smith"})]});u.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
`;const v=()=>e.jsx(a,{name:"Happy Doggo",url:"https://picsum.photos/id/237/300/200",objectFit:"cover",size:"medium"});v.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

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
`;const C=p({display:"inline-flex",gap:d.sm}),j=()=>e.jsxs("div",{className:C,children:[e.jsx(a,{name:"John Doe",size:"extraExtraSmall"}),e.jsx(a,{name:"Logan McNeil",size:"extraSmall"}),e.jsx(a,{name:"Wonder Woman",size:"small"}),e.jsx(a,{name:"Iron Man",size:"medium"}),e.jsx(a,{name:"Peter Parker",size:"large"}),e.jsx(a,{name:"Bruce Banner",size:"extraLarge"}),e.jsx(a,{name:"Elektra",size:"extraExtraLarge"})]});j.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
`;const N=p({display:"inline-flex",gap:d.sm}),g=()=>e.jsxs("div",{className:N,children:[e.jsx(a,{name:"John Doe",variant:"blue"}),e.jsx(a,{name:"Logan McNeil",variant:"amber"}),e.jsx(a,{name:"Wonder Woman",variant:"teal"}),e.jsx(a,{name:"Elektra",variant:"purple"})]});g.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
    </div>
  );
};
`;function f(t){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...k(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"Avatar",component:a,of:L}),`
`,e.jsxs(r.h1,{id:"avatar-",children:["Avatar ",e.jsx(A,{type:"promoted"})]}),`
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
`,e.jsx(o,{code:v}),`
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
`,e.jsx(o,{code:u}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(b,{name:"Avatar",fileName:"/react/",hideDescription:!0})]})}function W(t={}){const{wrapper:r}={...k(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(f,{...t})}):f(t)}const L={title:"Components/Indicators/Avatar (Promoted)",component:a,tags:["autodocs"],parameters:{docs:{page:W}}},s={render:x},n={render:v},i={render:j},c={render:g},m={render:h},l={render:u};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: ImageExample
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: SizeExample
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: VariantExample
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: DecorativeExample
}`,...l.parameters?.docs?.source}}};const sr=["Basic","Image","Size","Variant","Custom","Decorative"];export{s as Basic,m as Custom,l as Decorative,n as Image,i as Size,c as Variant,sr as __namedExportsOrder,L as default};
