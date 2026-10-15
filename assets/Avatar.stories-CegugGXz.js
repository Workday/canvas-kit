import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as A}from"./index-Dtg6sxOr.js";import{E as o,c as S}from"./union-Bu5y51Jw.js";import"./index-IfJi-UCQ.js";import{A as a,B as y}from"./Avatar-BRtwnXeF.js";import{c as p}from"./cs-CmRirKzJ.js";import{p as b}from"./px2rem-C0KbprIx.js";import{a4 as z,a5 as _}from"./index-kj8ZfNNN.js";import{T as w}from"./Text-CugBmzts.js";import{g as d}from"./index--KWQvxqz.js";import"./iframe-BzH13H1g.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BX_--XLu.js";import"./Svg-B-_8_IoS.js";import"./components-CwPiNTv7.js";import"./StatusIndicator-BySetVzd.js";import"./mergeStyles-DQZ8xltm.js";import"./Box-C6YWxsyC.js";import"./index-JH7P-Oob.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-uWNpiXvQ.js";import"./grid-Z1baOhTC.js";import"./cornerShape-BEKlmC6c.js";import"./Card-B2DoyM2M.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-Bdp9qCly.js";import"./Hyperlink-DgJFJPY5.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CFAJ63K0.js";import"./BaseButton-C2ONQDdO.js";import"./Button-B-0xbtvO.js";import"./lerna-GZstQbIg.js";import"./CanvasProvider-Djg5GzKY.js";import"./Tooltip-CQPKhAAY.js";import"./useTooltip-B_3p7ft8.js";import"./getTransformFromPlacement-DEiEIaBA.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DWBt8FsA.js";import"./Popper-4YHzsBrp.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BikcaN9F.js";import"./TypeLevelComponents-CSa7FUvh.js";import"./ColorPicker-BdEUtvxE.js";import"./ColorInput-DKTanmyb.js";import"./check-small-BqSDQIle.js";import"./TextInput-sO79edZw.js";import"./types-DXdjelYI.js";import"./FormField-BSejoj2I.js";import"./check-Ds6vsrAM.js";import"./Expandable-D_r7YpVh.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-B6sm9GAG.js";import"./Popup-0QW6T8tx.js";import"./x-B1faap_l.js";import"./usePopupTarget-KuiEmhEU.js";import"./useInitialFocus-DsdvJ4qs.js";import"./useReturnFocus-DY0PlNcI.js";import"./useFocusRedirect-CQqurwgn.js";import"./Breadcrumbs-B1-oFzbX.js";import"./useOverflowListItemMeasure-GsXFYpda.js";import"./useListItemRegister-54CK_IPo.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BhzHIyri.js";import"./OverflowTooltip-TaXlUV6y.js";import"./useListItemRovingFocus-DPhFhJfQ.js";import"./useListItemSelect-C8xhwn2K.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-ouYGJ4Om.js";import"./Flex-Do_QVoLp.js";import"./Table-DEKO1qFY.js";const x=()=>e.jsx(a,{name:"John Doe"});x.__RAW__=`import {Avatar} from '@workday/canvas-kit-react/avatar';

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
