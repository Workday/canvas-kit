import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as A}from"./index-Bt0ZT3SD.js";import{E as o,c as S}from"./union-Bu_N9WXY.js";import"./index-IfJi-UCQ.js";import{A as r,B as y}from"./Avatar-CIyKq2y9.js";import{c as p}from"./cs-CmRirKzJ.js";import{p as b}from"./px2rem-C0KbprIx.js";import{a4 as z,a5 as _}from"./index-kj8ZfNNN.js";import{T as w}from"./Text-BIkiFigH.js";import{g as d}from"./index-DE-upP0k.js";import"./iframe-DXeK7ayo.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cq4gQLtq.js";import"./Svg-B7LpI5Ot.js";import"./components-BhvJ7593.js";import"./StatusIndicator-DZ56N-RC.js";import"./mergeStyles-DdZlnWAB.js";import"./Box-D7WyyqaD.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DYbdw5oo.js";import"./grid-_KjJYSbp.js";import"./cornerShape-Bs4J36FI.js";import"./Card-DEc3Wxgt.js";import"./ExternalHyperlink-B5so04zA.js";import"./Hyperlink-B8rhjoRx.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DITlekqi.js";import"./BaseButton-Dl76ZFMd.js";import"./Button-nYhq3GW1.js";import"./lerna-DHBIFgqa.js";import"./CanvasProvider-Dhhaerje.js";import"./Tooltip-urVsYTZI.js";import"./useTooltip-C-iRaiUv.js";import"./getTransformFromPlacement-kqEJ7--H.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DhBoTrcv.js";import"./Popper-N9Opn6Uu.js";import"./TertiaryButton-B5A-OQqG.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BNRlM0Dx.js";import"./ColorPicker-BKzNbucK.js";import"./ColorInput-d6VNAKZK.js";import"./check-small-BqSDQIle.js";import"./TextInput-6REj-qFy.js";import"./types-DXdjelYI.js";import"./FormField-Y066M9m4.js";import"./check-Ds6vsrAM.js";import"./Expandable-C9yPpdV7.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-QAU_t2kV.js";import"./Popup-BRRFZVVA.js";import"./x-B1faap_l.js";import"./usePopupTarget-B79Gw_dR.js";import"./useInitialFocus-CWikZd6W.js";import"./useReturnFocus-B6I8OHUQ.js";import"./useFocusRedirect-CQuHxJ26.js";import"./Breadcrumbs-7YLlPqeC.js";import"./useOverflowListTarget-BgzVplWe.js";import"./useListItemRegister-CAj1jmo7.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Be0OJ5CA.js";import"./OverflowTooltip-CZdROVrr.js";import"./useListItemSelect-C1yP7QL7.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DhgDVhul.js";import"./Table-CnDNRyoO.js";const x=()=>e.jsx(r,{name:"John Doe"});x.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

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
`;const E=""+new URL("nicholas-avatar-CDSXduJt.jpg",import.meta.url).href,I=p({display:"inline-flex",gap:d.sm,alignItems:"center"}),v=()=>e.jsxs("div",{className:I,children:[e.jsx(r,{name:"Nicholas Smith",isDecorative:!0,url:E,objectFit:"cover",size:"small"}),e.jsx(w,{children:"Nicholas Smith"})]});v.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
`;const u=()=>e.jsx(r,{name:"Happy Doggo",url:"https://picsum.photos/id/237/300/200",objectFit:"cover",size:"medium"});u.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

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
`;const B=p({display:"inline-flex",gap:d.sm}),j=()=>e.jsxs("div",{className:B,children:[e.jsx(r,{name:"John Doe",size:"extraExtraSmall"}),e.jsx(r,{name:"Logan McNeil",size:"extraSmall"}),e.jsx(r,{name:"Wonder Woman",size:"small"}),e.jsx(r,{name:"Iron Man",size:"medium"}),e.jsx(r,{name:"Peter Parker",size:"large"}),e.jsx(r,{name:"Bruce Banner",size:"extraLarge"}),e.jsx(r,{name:"Elektra",size:"extraExtraLarge"})]});j.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
`;const C=p({display:"inline-flex",gap:d.sm}),g=()=>e.jsxs("div",{className:C,children:[e.jsx(r,{name:"John Doe",variant:"blue"}),e.jsx(r,{name:"Logan McNeil",variant:"amber"}),e.jsx(r,{name:"Wonder Woman",variant:"teal"}),e.jsx(r,{name:"Elektra",variant:"purple"}),e.jsx(r,{name:"Mary Jane",variant:"magenta"}),e.jsx(r,{name:"Green Arrow",variant:"green"})]});g.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';
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
`;function f(t){const a={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...k(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Avatar",component:r,of:W}),`
`,e.jsx(a.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(a.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(a.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(a.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(a.p,{children:["The most basic usage requires only a ",e.jsx(a.code,{children:"name"}),` prop. The component automatically extracts and displays
the initials. If you want to display a different set of initials, you can use the
`,e.jsx(a.code,{children:"preferredInitials"})," prop."]}),`
`,e.jsx(o,{code:x}),`
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
`,e.jsx(o,{code:u}),`
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
`,e.jsx(o,{code:j}),`
`,e.jsx(a.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(a.p,{children:"Choose from four predefined color schemes:"}),`
`,e.jsx(o,{code:g}),`
`,e.jsx(a.h3,{id:"advanced-custom-component",children:"Advanced Custom Component"}),`
`,e.jsxs(a.p,{children:["For complete control over styling and behavior, use the ",e.jsx(a.code,{children:"BaseAvatar"})," component:"]}),`
`,e.jsx(o,{code:h}),`
`,e.jsx(a.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(a.p,{children:["If the Avatar is purely decorative, you can set the ",e.jsx(a.code,{children:"isDecorative"})," prop to ",e.jsx(a.code,{children:"true"}),` to prevent the
`,e.jsx(a.code,{children:"name"})," prop from being forwarded to the ",e.jsx(a.code,{children:"alt"})," attribute of the image."]}),`
`,e.jsx(o,{code:v}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(S,{name:"Avatar",fileName:"/react/",hideDescription:!0})]})}function N(t={}){const{wrapper:a}={...k(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(f,{...t})}):f(t)}const W={title:"Components/Indicators/Avatar",component:r,tags:["autodocs"],parameters:{docs:{page:N}}},n={render:x},s={render:u},i={render:j},c={render:g},m={render:h},l={render:v};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const sa=["Basic","Image","Size","Variant","Custom","Decorative"];export{n as Basic,m as Custom,l as Decorative,s as Image,i as Size,c as Variant,sa as __namedExportsOrder,W as default};
