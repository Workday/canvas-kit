import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{S,E as o,c as A}from"./union-D2wJ6UB9.js";import"./index-IfJi-UCQ.js";import{ae as b}from"./index-DHWTzE-b.js";import{A as a,B as y}from"./Avatar-GkuXop0D.js";import{c as p}from"./cs-DvbI9OYs.js";import{p as z}from"./px2rem-C0KbprIx.js";import{$ as _,a0 as w}from"./index-DKOKnxgv.js";import{T as D}from"./Text-8N36XMNq.js";import{g as d}from"./index-CYsyLHR7.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./components-XIe_upcR.js";import"./StatusIndicator-vcmfDllK.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./Card-ywil38vv.js";import"./ExternalHyperlink-D7iOffGf.js";import"./Hyperlink-Cmi71RJg.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-oNuQLwcg.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./Button-Cp7fe3Zs.js";import"./lerna-j6nxiWIt.js";import"./CanvasProvider-CbBD4ERB.js";import"./Tooltip-De1KsO5U.js";import"./useTooltip-p8F4NfJ4.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./TertiaryButton-DaDaXMfE.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Co8mkrwa.js";import"./ColorPicker-DLb8Wvti.js";import"./ColorInput-CnFM3Rd0.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-nG1V2_dd.js";import"./types-DXdjelYI.js";import"./FormField-U6jJIaHC.js";import"./check-BG7HONvH.js";import"./Expandable-BA5P8o_t.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-XwlCiuK9.js";import"./Popup-FGUZYXID.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-B7GfDsu7.js";import"./useInitialFocus-CouubvfO.js";import"./useReturnFocus-BgzhEoBI.js";import"./useFocusRedirect-ETf1Gakg.js";import"./Breadcrumbs-CIeTVgOV.js";import"./useOverflowListTarget-Esi-iaKN.js";import"./useListItemSelect-D10U8d3g.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Blawm5fT.js";import"./OverflowTooltip-B7jd-TXK.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-BKzcw9XF.js";import"./Table-ZC-rbz82.js";import"./iframe-DW6TaI9H.js";import"../sb-preview/runtime.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";const x=()=>e.jsx(a,{name:"John Doe"});x.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

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
`;function f(t){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...k(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Avatar",component:a,of:L}),`
`,e.jsxs(r.h1,{id:"avatar-",children:["Avatar ",e.jsx(S,{type:"promoted"})]}),`
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
`,e.jsx(A,{name:"Avatar",fileName:"/react/",hideDescription:!0})]})}function W(t={}){const{wrapper:r}={...k(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(f,{...t})}):f(t)}const L={title:"Components/Indicators/Avatar (Promoted)",component:a,tags:["autodocs"],parameters:{docs:{page:W}}},s={render:x},n={render:v},i={render:j},c={render:g},m={render:h},l={render:u};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const cr=["Basic","Image","Size","Variant","Custom","Decorative"];export{s as Basic,m as Custom,l as Decorative,n as Image,i as Size,c as Variant,cr as __namedExportsOrder,L as default};
