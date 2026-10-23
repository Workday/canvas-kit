import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as R}from"./index-3YbjYt95.js";import{ae as D}from"./index-3CvKOOe7.js";import{E as a,c as t}from"./union-BqFu7U-7.js";import{S as T}from"./Specifications-DfnIUlD7.js";import{A as l,c as i,a as j,d as w,e as z,b as W,f as L}from"./AccessoryMedia-Mt2mQVuO.js";import{c as n}from"./check-Ds6vsrAM.js";import{p as V}from"./txt-geollWoP.js";import{c,a as P}from"./cs-CmRirKzJ.js";import{g as o,c as u}from"./index--KWQvxqz.js";import{S as U}from"./TypeLevelComponents-Bl0gasSR.js";import{p as X}from"./px2rem-C0KbprIx.js";import"./index-IfJi-UCQ.js";import"./iframe-TB_Swh2I.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-HqVC_1La.js";import"./Svg-DpRbd5ao.js";import"./components-Dg6r_l6g.js";import"./StatusIndicator-C8pZMrF4.js";import"./Text-DhPJPWok.js";import"./mergeStyles-DQAIS8xD.js";import"./Box-MKWQ5iJf.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-l0maHnrZ.js";import"./grid-D9_inQjb.js";import"./cornerShape-BJAVQ3D-.js";import"./Card-DxWkS5DO.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-D4cbvtWK.js";import"./Hyperlink-BVc2lRj-.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-Czy1ozWJ.js";import"./BaseButton-B4zfOmRB.js";import"./Button-UegFhBzX.js";import"./lerna-CtOujTcn.js";import"./CanvasProvider-Dlka2NIO.js";import"./index-kj8ZfNNN.js";import"./Tooltip-C376o-je.js";import"./useTooltip-DcVSVBYt.js";import"./getTransformFromPlacement-BqfTyZs9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DNAp0b8d.js";import"./Popper-DPlZjLFd.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-i-tHOusL.js";import"./ColorPicker-ZxXXDXOc.js";import"./ColorInput-BsO5T6cJ.js";import"./check-small-BqSDQIle.js";import"./TextInput-DvgP4PT9.js";import"./types-DXdjelYI.js";import"./FormField-BWSFJLvh.js";import"./Expandable-Dk9Ea4ra.js";import"./Avatar-DFRqPldJ.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-CzT9CmZh.js";import"./Popup-Dphd2uRb.js";import"./x-B1faap_l.js";import"./usePopupTarget-B4UGit2X.js";import"./useInitialFocus-C4NbykSC.js";import"./useReturnFocus-BF5s776m.js";import"./useFocusRedirect-BkTwukrZ.js";import"./Breadcrumbs-CslN1-Eo.js";import"./useOverflowListItemMeasure-WxAN-Sv9.js";import"./useListItemRegister-CNN0mL98.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Gyv5iPUB.js";import"./OverflowTooltip-3VMgvUdj.js";import"./useListItemRovingFocus-omXicuh4.js";import"./useListItemSelect-cQcAgf8O.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BFrXu8JM.js";import"./Flex-DsFvUQdM.js";import"./Table-BcPSszzv.js";import"./stack-CwCrIbZb.js";const q=c({display:"flex",alignItems:"center",gap:o.sm,flexWrap:"wrap"}),k=()=>e.jsxs("div",{className:q,children:[e.jsx(l,{icon:n,variant:"blue"}),e.jsx(i,{type:"pdf"}),e.jsx(j,{icon:V,src:"https://picsum.photos/seed/accessory/200/200"})]});k.__RAW__=`import {
  AccessoryFile,
  AccessoryIcon,
  AccessoryMedia,
} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon, playCircleIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
  flexWrap: 'wrap',
});

export const Basic = () => (
  <div className={rowStyles}>
    <AccessoryIcon icon={checkIcon} variant="blue" />
    <AccessoryFile type="pdf" />
    <AccessoryMedia icon={playCircleIcon} src="https://picsum.photos/seed/accessory/200/200" />
  </div>
);
`;const G=c({display:"flex",alignItems:"center",gap:o.sm}),S=()=>e.jsxs("div",{className:G,children:[e.jsx(w,{date:30,month:"Apr"}),e.jsx(w,{date:1,month:"May"}),e.jsx(w,{date:24,month:"Dec"})]});S.__RAW__=`import {AccessoryCalendar} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

export const Calendar = () => (
  <div className={rowStyles}>
    <AccessoryCalendar date={30} month="Apr" />
    <AccessoryCalendar date={1} month="May" />
    <AccessoryCalendar date={24} month="Dec" />
  </div>
);
`;const K=c({display:"flex",flexDirection:"column",gap:o.md}),$=c({display:"flex",alignItems:"center",gap:o.sm}),A=c({display:"flex",flexDirection:"column",alignItems:"center",gap:o.xs}),O=P({base:{[z.vars.iconColor]:u.fg.inverse,[z.vars.tileBackground]:u.accent.info}}),E="data:image/svg+xml,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80">
      <rect width="160" height="80" fill="#1c2833"/>
      <circle cx="40" cy="40" r="22" fill="#243140"/>
      <circle cx="80" cy="28" r="18" fill="#0e1620"/>
      <circle cx="118" cy="48" r="24" fill="#2c3a48"/>
    </svg>`),b=()=>e.jsxs("div",{className:K,children:[e.jsxs("div",{className:$,children:[e.jsx(j,{icon:n,src:E}),e.jsx(j,{icon:n,objectFit:"contain",src:E})]}),e.jsxs("div",{className:$,children:[e.jsx("div",{className:A,children:e.jsx(i,{type:"pdf"})}),e.jsx("div",{className:A,children:e.jsx(i,{background:u.accent.warning,color:u.fg.warning.strong,type:"pdf"})}),e.jsx("div",{className:A,children:e.jsx(i,{cs:O(),type:"pdf"})})]})]});b.__RAW__=`import {
  AccessoryFile,
  AccessoryMedia,
  accessoryStencil,
} from '@workday/canvas-kit-labs-react/accessory';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const columnStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.md,
});

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

const labelStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: system.gap.xs,
});

const customFileStencil = createStencil({
  base: {
    [accessoryStencil.vars.iconColor]: system.color.fg.inverse,
    [accessoryStencil.vars.tileBackground]: system.color.accent.info,
  },
});

const photo =
  'data:image/svg+xml,' +
  encodeURIComponent(
    \`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80">
      <rect width="160" height="80" fill="#1c2833"/>
      <circle cx="40" cy="40" r="22" fill="#243140"/>
      <circle cx="80" cy="28" r="18" fill="#0e1620"/>
      <circle cx="118" cy="48" r="24" fill="#2c3a48"/>
    </svg>\`
  );

export const Custom = () => (
  <div className={columnStyles}>
    <div className={rowStyles}>
      <AccessoryMedia icon={checkIcon} src={photo} />
      <AccessoryMedia icon={checkIcon} objectFit="contain" src={photo} />
    </div>
    <div className={rowStyles}>
      <div className={labelStyles}>
        <AccessoryFile type="pdf" />
      </div>
      <div className={labelStyles}>
        <AccessoryFile
          background={system.color.accent.warning}
          color={system.color.fg.warning.strong}
          type="pdf"
        />
      </div>
      <div className={labelStyles}>
        <AccessoryFile cs={customFileStencil()} type="pdf" />
      </div>
    </div>
  </div>
);
`;const H=c({display:"flex",alignItems:"center",gap:o.sm}),I=()=>e.jsxs("div",{className:H,children:[e.jsx(W,{size:"medium",url:"workday.com"}),e.jsx(W,{url:"design.workday.com"})]});I.__RAW__=`import {AccessoryFavicon} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

export const Favicon = () => (
  <div className={rowStyles}>
    <AccessoryFavicon size="medium" url="workday.com" />
    <AccessoryFavicon url="design.workday.com" />
  </div>
);
`;const J=c({display:"flex",alignItems:"center",gap:o.sm,flexWrap:"wrap"}),Q=["pdf","spreadsheet","document","presentation","video","file","txt"],F=()=>e.jsxs("div",{className:J,children:[Q.map(r=>e.jsx(i,{type:r},r)),e.jsx(i,{size:"large",type:"pdf"})]});F.__RAW__=`import {AccessoryFile, AccessoryFileType} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
  flexWrap: 'wrap',
});

const types: AccessoryFileType[] = [
  'pdf',
  'spreadsheet',
  'document',
  'presentation',
  'video',
  'file',
  'txt',
];

export const File = () => (
  <div className={rowStyles}>
    {types.map(type => (
      <AccessoryFile key={type} type={type} />
    ))}
    <AccessoryFile size="large" type="pdf" />
  </div>
);
`;const Y=c({display:"flex",alignItems:"center",gap:o.sm}),_=()=>e.jsxs("div",{className:Y,children:[e.jsx(l,{icon:n}),e.jsx(l,{icon:n,variant:"blue"})]});_.__RAW__=`import {AccessoryIcon} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

export const Icon = () => (
  <div className={rowStyles}>
    <AccessoryIcon icon={checkIcon} />
    <AccessoryIcon icon={checkIcon} variant="blue" />
  </div>
);
`;const C=()=>e.jsx(j,{src:"https://picsum.photos/seed/accessory/200/200"});C.__RAW__=`import {AccessoryMedia} from '@workday/canvas-kit-labs-react/accessory';

export const Media = () => <AccessoryMedia src="https://picsum.photos/seed/accessory/200/200" />;
`;const Z=c({display:"flex",flexDirection:"column",gap:o.md}),ee=c({display:"flex",alignItems:"center",gap:o.md,p:{minWidth:X(104),margin:0}}),se=["extraSmall","small","medium","large","extraLarge"],N=()=>e.jsx("div",{className:Z,children:se.map(r=>e.jsxs("div",{className:ee,children:[e.jsx(U,{size:"large",children:r}),e.jsx(l,{icon:n,size:r})]},r))});N.__RAW__=`import {AccessoryIcon} from '@workday/canvas-kit-labs-react/accessory';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.md,
});

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.md,
  p: {
    minWidth: px2rem(104),
    margin: 0,
  },
});

const sizes = ['extraSmall', 'small', 'medium', 'large', 'extraLarge'] as const;

export const Sizes = () => (
  <div className={containerStyles}>
    {sizes.map(size => (
      <div className={rowStyles} key={size}>
        <Subtext size="large">{size}</Subtext>
        <AccessoryIcon icon={checkIcon} size={size} />
      </div>
    ))}
  </div>
);
`;const re=c({display:"flex",alignItems:"center",gap:o.sm,flexWrap:"wrap"}),ce=["grey","green","blue","purple","amber","magenta","red","orange","outline"],M=()=>e.jsx("div",{className:re,children:ce.map(r=>e.jsx(l,{icon:n,variant:r},r))});M.__RAW__=`import {AccessoryIcon, AccessoryIconVariant} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
  flexWrap: 'wrap',
});

const variants: AccessoryIconVariant[] = [
  'grey',
  'green',
  'blue',
  'purple',
  'amber',
  'magenta',
  'red',
  'orange',
  'outline',
];

export const Variants = () => (
  <div className={rowStyles}>
    {variants.map(variant => (
      <AccessoryIcon key={variant} icon={checkIcon} variant={variant} />
    ))}
  </div>
);
`;function B(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...R(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{of:ae}),`
`,e.jsx(s.h1,{id:"canvas-kit-accessory",children:"Canvas Kit Accessory"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Accessory"}),` is the small rounded visual that sits beside text, most often the leading element in a
list item or other row. It keeps every thumbnail in one consistent shape and size, so a list of
mixed content still feels uniform.`]}),`
`,e.jsxs(s.p,{children:[`It can show a system icon, a file type, an image, a site favicon, a calendar date, or fully custom
content — whichever suits the row. Prefer `,e.jsx(s.code,{children:"AccessoryIcon"}),", ",e.jsx(s.code,{children:"AccessoryFile"}),", ",e.jsx(s.code,{children:"AccessoryMedia"}),`,
`,e.jsx(s.code,{children:"AccessoryFavicon"}),", or ",e.jsx(s.code,{children:"AccessoryCalendar"}),", which each extend the shared ",e.jsx(s.code,{children:"Accessory"})," props (",e.jsx(s.code,{children:"size"}),`,
`,e.jsx(s.code,{children:"color"}),", ",e.jsx(s.code,{children:"background"}),`)
and render that shell. Use `,e.jsx(s.code,{children:"Accessory"}),` itself for custom content, such as a gradient icon.
Accessories are decorative and always hidden from
assistive technology. They do not handle clicks or focus.`]}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-labs-react
`})}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Accessory"}),` is only the tile — size and corner radius. It does not render a visual by itself. Use a
targeted accessory instead: `,e.jsx(s.code,{children:"AccessoryIcon"})," for a system icon, ",e.jsx(s.code,{children:"AccessoryFile"}),` for a file type,
`,e.jsx(s.code,{children:"AccessoryMedia"})," for an image (optionally with an icon on a scrim), ",e.jsx(s.code,{children:"AccessoryFavicon"}),` for a site
favicon, or `,e.jsx(s.code,{children:"AccessoryCalendar"}),` for a month and day. Put custom content inside
`,e.jsx(s.code,{children:"Accessory"})," when none of those fit the row."]}),`
`,e.jsx(a,{code:k}),`
`,e.jsx(s.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"AccessoryIcon"})," renders a system icon in the tile. ",e.jsx(s.code,{children:"variant"})," sets the fill and icon color."]}),`
`,e.jsx(a,{code:_}),`
`,e.jsx(s.h3,{id:"media",children:"Media"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"AccessoryMedia"})," fills the tile with an image. The image stays hidden until it loads. Pass ",e.jsx(s.code,{children:"icon"}),`
to center a glyph on a contrast scrim.`]}),`
`,e.jsx(a,{code:C}),`
`,e.jsx(s.h3,{id:"favicon",children:"Favicon"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"AccessoryFavicon"}),` resolves a brand mark from a site URL or domain. The browser requests that mark
from Google's favicon service, which receives the hostname and the user's IP. The image uses
`,e.jsx(s.code,{children:'referrerPolicy="no-referrer"'}),", so the app origin is not sent. At ",e.jsx(s.code,{children:"large"})," and ",e.jsx(s.code,{children:"extraLarge"}),` the mark
sits inset in an outlined tile. At `,e.jsx(s.code,{children:"medium"})," and smaller it fills the tile."]}),`
`,e.jsx(a,{code:I}),`
`,e.jsx(s.h3,{id:"file",children:"File"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"AccessoryFile"})," renders a file type through the shared icon graphic. ",e.jsx(s.code,{children:"type"}),` chooses the glyph and
is a stencil modifier for the fill and icon color. Colored types keep their accent fill at every
size. `,e.jsx(s.code,{children:"file"})," and ",e.jsx(s.code,{children:"txt"})," use ",e.jsx(s.code,{children:"surface.alt"})," and a default border."]}),`
`,e.jsx(a,{code:F}),`
`,e.jsx(s.h3,{id:"calendar",children:"Calendar"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"AccessoryCalendar"})," stacks a month label over the day. Pass ",e.jsx(s.code,{children:"month"})," and ",e.jsx(s.code,{children:"date"}),`. The month uses a
critical color. The day uses the default foreground color. Both scale with `,e.jsx(s.code,{children:"size"}),"."]}),`
`,e.jsx(a,{code:S}),`
`,e.jsx(s.h3,{id:"custom",children:"Custom"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"Accessory"}),` when the row needs content that is not a system icon, file type, image, or favicon.
Set
`,e.jsx(s.code,{children:"accessoryStencil.vars.iconColor"})," and ",e.jsx(s.code,{children:"accessoryStencil.vars.tileBackground"}),` to recolor the tile.
The icon `,e.jsx(s.code,{children:"data-part"})," keeps the tile's corner radius."]}),`
`,e.jsx(a,{code:b}),`
`,e.jsx(s.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," is a shared ",e.jsx(s.code,{children:"Accessory"})," prop on each component. ",e.jsx(s.code,{children:"extraLarge"})," (40px) is the default."]}),`
`,e.jsx(a,{code:N}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"variant"})," is set on ",e.jsx(s.code,{children:"AccessoryIcon"}),`. It pairs an icon color with a tile fill. The fill is painted
at `,e.jsx(s.code,{children:"medium"}),", ",e.jsx(s.code,{children:"large"}),", and ",e.jsx(s.code,{children:"extraLarge"}),". ",e.jsx(s.code,{children:"outline"})," adds a default border at those larger sizes."]}),`
`,e.jsx(a,{code:M}),`
`,e.jsx(s.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["Accessory components are presentational and always ",e.jsx(s.code,{children:"aria-hidden"}),". Images use an empty ",e.jsx(s.code,{children:"alt"}),` because
assistive technology does not see content inside that tile. Name the item in adjacent text instead
of on the accessory. They are not buttons and do not take click or keyboard handlers.`]}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(s.h3,{id:"accessory",children:"Accessory"}),`
`,e.jsx(t,{name:"Accessory",fileName:"/labs-react/"}),`
`,e.jsx(s.h3,{id:"accessoryicon",children:"AccessoryIcon"}),`
`,e.jsx(t,{name:"AccessoryIcon",fileName:"/labs-react/"}),`
`,e.jsx(s.h3,{id:"accessoryfile",children:"AccessoryFile"}),`
`,e.jsx(t,{name:"AccessoryFile",fileName:"/labs-react/"}),`
`,e.jsx(s.h3,{id:"accessorymedia",children:"AccessoryMedia"}),`
`,e.jsx(t,{name:"AccessoryMedia",fileName:"/labs-react/"}),`
`,e.jsx(s.h3,{id:"accessoryfavicon",children:"AccessoryFavicon"}),`
`,e.jsx(t,{name:"AccessoryFavicon",fileName:"/labs-react/"}),`
`,e.jsx(s.h3,{id:"accessorycalendar",children:"AccessoryCalendar"}),`
`,e.jsx(t,{name:"AccessoryCalendar",fileName:"/labs-react/"}),`
`,e.jsx(s.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(T,{file:"./cypress/component/Accessory.spec.tsx",initialSpecs:{type:"file",name:"Accessory",children:[{type:"describe",name:"Accessory",children:[{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the Media story is rendered",children:[{type:"it",name:"should render the image"}]}]}]},name:"Accessory"})]})}function oe(r={}){const{wrapper:s}={...R(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(B,{...r})}):B(r)}const ae={title:"Labs/Accessory",component:L,tags:["autodocs"],parameters:{docs:{page:oe}}},d={render:k},m={render:_},p={render:C},y={render:I},h={render:F},x={render:S},f={render:b},g={render:N},v={render:M};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: IconExample
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: MediaExample
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: FaviconExample
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: FileExample
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: CalendarExample
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: SizesExample
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: VariantsExample
}`,...v.parameters?.docs?.source}}};const Ds=["Basic","Icon","Media","Favicon","File","Calendar","Custom","Sizes","Variants"];export{d as Basic,x as Calendar,f as Custom,y as Favicon,h as File,m as Icon,p as Media,g as Sizes,v as Variants,Ds as __namedExportsOrder,ae as default};
