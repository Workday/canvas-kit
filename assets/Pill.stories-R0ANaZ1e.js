import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as W}from"./index-3YbjYt95.js";import{ae as N}from"./index-DIQMCiGF.js";import{E as o,c as O}from"./union-Cec5qZNs.js";import{e as p}from"./index-IfJi-UCQ.js";import{c,a as z}from"./cs-CmRirKzJ.js";import{P as r,p as i,a as n}from"./Pill-BcrApiHt.js";import{g as d,c as s}from"./index-DE-upP0k.js";import{t as B}from"./test-avatar-CzmOzyKG.js";import{B as j}from"./TypeLevelComponents-CXDvcd40.js";import{U as h,a6 as a}from"./index-kj8ZfNNN.js";import{s as m}from"./SystemIcon-BLgBEqk_.js";import"./iframe-CMFxQtog.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./StatusIndicator-BJDjHtBX.js";import"./components-BMCKvV6D.js";import"./Text-CEC2A_mA.js";import"./mergeStyles-C74BFx3R.js";import"./Box-BvZYftND.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Dh-2nxfI.js";import"./grid-BTRczyN_.js";import"./cornerShape-eLjhIHRX.js";import"./Card-B9eZGSHh.js";import"./ExternalHyperlink-DQ4sJqPN.js";import"./Hyperlink-Ds51UX2b.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DgdzuJR6.js";import"./BaseButton-BeCPCXur.js";import"./Button-COJQCftZ.js";import"./px2rem-C0KbprIx.js";import"./lerna-AHTeRD0S.js";import"./CanvasProvider-CPCp_Ehm.js";import"./Tooltip-B420ykOm.js";import"./useTooltip-Chl-REmY.js";import"./getTransformFromPlacement-UfTaJmmz.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-CJ6fr6xg.js";import"./Popper-CmWYFnEn.js";import"./TertiaryButton-B4HeqPGM.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-9KmrppHl.js";import"./ColorInput-DcwH74F9.js";import"./check-small-BqSDQIle.js";import"./TextInput-CU5hZATb.js";import"./types-DXdjelYI.js";import"./FormField-BvDYKEIK.js";import"./check-Ds6vsrAM.js";import"./Expandable-Bj0gYpmS.js";import"./Avatar-zjOTsow4.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-F8LdpWbU.js";import"./Popup-bHQMqJYH.js";import"./x-B1faap_l.js";import"./usePopupTarget-BdeWD7Tb.js";import"./useInitialFocus-C3mdE506.js";import"./useReturnFocus-Pt3SXujB.js";import"./useFocusRedirect-S8kpqCKm.js";import"./Breadcrumbs-BtItqZWr.js";import"./useOverflowListTarget-DmzamKwX.js";import"./useListItemRegister-Be67Xqtb.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DqXfse-G.js";import"./OverflowTooltip-D74rm3_f.js";import"./useListItemSelect-BqFexkDg.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CYgv2SGi.js";import"./Table-DUhjK8Ob.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./Svg-CcyJcMxT.js";const E=c({display:"flex",gap:d.sm}),k=()=>e.jsxs("div",{className:E,id:"read-only-list",children:[e.jsx(r,{variant:"readOnly",children:"Read-only"}),e.jsx(r,{variant:"readOnly",cs:{maxWidth:150},children:"Read-only but with super long text in case you want to read a paragraph in a Pill which we don't recommend"})]});k.__RAW__=`import {Pill} from '@workday/canvas-kit-react/pill';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
});

export const WithReadOnly = () => (
  <div className={flexStyles} id="read-only-list">
    <Pill variant="readOnly">Read-only</Pill>
    <Pill variant="readOnly" cs={{maxWidth: 150}}>
      Read-only but with super long text in case you want to read a paragraph in a Pill which we
      don't recommend
    </Pill>
  </div>
);
`;const $=c({display:"flex",gap:d.sm}),S=()=>{const[l,t]=p.useState("");return e.jsxs("div",{children:[e.jsxs("div",{className:$,children:[e.jsxs(r,{onClick:()=>t("The first pill is clicked!"),children:[e.jsx(r.Avatar,{name:"Regina Skeltor",url:B}),e.jsx(r.Label,{children:"Regina Skeltor"})]}),e.jsxs(r,{disabled:!0,children:[e.jsx(r.Avatar,{name:"Regina Skeltor"}),e.jsx(r.Label,{children:"Regina Skeltor"})]})]}),e.jsx(j,{size:"medium",children:l})]})};S.__RAW__=`// @ts-ignore: Cannot find module error
import React from 'react';

import {Pill} from '@workday/canvas-kit-react/pill';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
});

export const WithAvatar = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Avatar name="Regina Skeltor" url={testAvatar} />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill disabled>
          <Pill.Avatar name="Regina Skeltor" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};
`;const D=c({display:"flex",gap:d.sm}),P=()=>{const[l,t]=p.useState("");return e.jsxs("div",{children:[e.jsxs("div",{className:D,children:[e.jsxs(r,{onClick:()=>t("The first pill is clicked!"),children:[e.jsx(r.Icon,{"aria-label":"Add user"}),e.jsx(r.Label,{children:"Regina Skeltor"})]}),e.jsxs(r,{disabled:!0,children:[e.jsx(r.Icon,{"aria-label":"Add user"}),e.jsx(r.Label,{children:"Regina Skeltor"})]})]}),e.jsx(j,{size:"medium",children:l})]})};P.__RAW__=`import React from 'react';

import {Pill} from '@workday/canvas-kit-react/pill';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
});

export const Basic = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill disabled>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};
`;const M=c({display:"flex",gap:d.sm}),C=()=>{const[l,t]=p.useState("");return e.jsxs("div",{children:[e.jsxs("div",{className:M,children:[e.jsxs(r,{onClick:()=>t("The first pill is clicked!"),children:["Shoes",e.jsx(r.Count,{children:"30"})]}),e.jsxs(r,{disabled:!0,children:["Shoes",e.jsx(r.Count,{children:"30"})]})]}),e.jsx(j,{size:"medium",children:l})]})};C.__RAW__=`import React from 'react';

import {Pill} from '@workday/canvas-kit-react/pill';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
});

export const WithCount = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          Shoes
          <Pill.Count>30</Pill.Count>
        </Pill>
        <Pill disabled>
          Shoes
          <Pill.Count>30</Pill.Count>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};
`;const X=c({display:"flex",gap:d.sm}),w=()=>{const[l,t]=p.useState("");return e.jsxs("div",{children:[e.jsxs("div",{className:X,children:[e.jsxs(r,{variant:"removable",children:[e.jsx(r.Label,{children:"Pink Shirts"}),e.jsx(r.IconButton,{"aria-label":"Remove",onClick:()=>t("The first pill is clicked!")})]}),e.jsxs(r,{variant:"removable",children:[e.jsx(r.Avatar,{name:"Avatar",url:B}),e.jsx(r.Label,{children:"Carolyn Grimaldi"}),e.jsx(r.IconButton,{"aria-label":"Remove",onClick:()=>t("The second pill is clicked!")})]}),e.jsxs(r,{variant:"removable",disabled:!0,children:[e.jsx(r.Label,{children:"This is a category that should not exist because it is too long"}),e.jsx(r.IconButton,{"aria-label":"Remove"})]})]}),e.jsx(j,{size:"medium",children:l})]})};w.__RAW__=`import React from 'react';

import {Pill} from '@workday/canvas-kit-react/pill';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
});

export const WithRemovable = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill variant="removable">
          <Pill.Label>Pink Shirts</Pill.Label>
          <Pill.IconButton
            aria-label="Remove"
            onClick={() => setText('The first pill is clicked!')}
          />
        </Pill>
        <Pill variant="removable">
          <Pill.Avatar name="Avatar" url={testAvatar} />
          <Pill.Label>Carolyn Grimaldi</Pill.Label>
          <Pill.IconButton
            aria-label="Remove"
            onClick={() => setText('The second pill is clicked!')}
          />
        </Pill>
        <Pill variant="removable" disabled>
          <Pill.Label>This is a category that should not exist because it is too long</Pill.Label>
          <Pill.IconButton aria-label="Remove" />
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};
`;const Y=["Shoes","Pants","Dress Shoes","Color","Accessories","Luxury","Casual","Hats","Beanies","Glasses","Jewelry"],G=c({display:"flex",flexWrap:"wrap",gap:d.sm}),R=()=>{const[l,t]=p.useState(Y);return e.jsx("div",{className:G,children:l.map((I,L)=>e.jsxs(r,{variant:"removable",children:[e.jsx(r.Label,{children:I}),e.jsx(r.IconButton,{"aria-label":"Remove",onClick:()=>t(l.filter(_=>_!==I))})]},L))})};R.__RAW__=`import React from 'react';

import {Pill} from '@workday/canvas-kit-react/pill';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const data = [
  'Shoes',
  'Pants',
  'Dress Shoes',
  'Color',
  'Accessories',
  'Luxury',
  'Casual',
  'Hats',
  'Beanies',
  'Glasses',
  'Jewelry',
];

const flexWrapStyles = createStyles({
  display: 'flex',
  flexWrap: 'wrap',
  gap: system.gap.sm,
});

export const WithList = () => {
  const [items, setItems] = React.useState(data);

  return (
    <div className={flexWrapStyles}>
      {items.map((cat, index) => {
        return (
          <Pill key={index} variant="removable">
            <Pill.Label>{cat}</Pill.Label>
            <Pill.IconButton
              aria-label="Remove"
              onClick={() => setItems(items.filter(i => i !== cat))}
            />
          </Pill>
        );
      })}
    </div>
  );
};
`;const F=z({base:{[i.vars.background]:h,[i.vars.border]:a,[i.vars.label]:s.fg.inverse,[m.vars.color]:s.fg.inverse,[n.vars.backgroundColor]:h,[n.vars.borderColor]:h,"&:hover, &.hover":{[i.vars.background]:a,[i.vars.label]:s.fg.inverse,[n.vars.backgroundColor]:a,[m.vars.color]:s.fg.inverse,[n.vars.borderColor]:a},"&:active, &.active":{[i.vars.background]:a,[i.vars.label]:s.fg.inverse,[m.vars.color]:s.fg.inverse,[n.vars.backgroundColor]:a},"&:focus, &.focus, &:focus-visible":{[i.vars.background]:a,[i.vars.label]:s.fg.inverse,[m.vars.color]:s.fg.inverse,[n.vars.backgroundColor]:a},"&:disabled, &.disabled":{[i.vars.background]:h,[i.vars.label]:s.fg.inverse,[m.vars.color]:s.fg.inverse}}}),T=()=>e.jsx("div",{children:e.jsxs(r,{cs:F(),children:[e.jsx(r.Icon,{"aria-label":"Add user"}),e.jsx(r.Label,{children:"Custom Pill Color"}),e.jsx(r.Count,{children:"10"})]})});T.__RAW__=`import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Pill, pillCountStencil, pillStencil} from '@workday/canvas-kit-react/pill';
import {createStencil} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const customPillStencil = createStencil({
  base: {
    [pillStencil.vars.background]: base.green600,
    [pillStencil.vars.border]: base.green800,
    [pillStencil.vars.label]: system.color.fg.inverse,
    [systemIconStencil.vars.color]: system.color.fg.inverse,
    [pillCountStencil.vars.backgroundColor]: base.green600,
    [pillCountStencil.vars.borderColor]: base.green600,

    '&:hover, &.hover': {
      [pillStencil.vars.background]: base.green800,
      [pillStencil.vars.label]: system.color.fg.inverse,
      [pillCountStencil.vars.backgroundColor]: base.green800,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
      [pillCountStencil.vars.borderColor]: base.green800,
    },
    '&:active, &.active': {
      [pillStencil.vars.background]: base.green800,
      [pillStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
      [pillCountStencil.vars.backgroundColor]: base.green800,
    },
    '&:focus, &.focus, &:focus-visible': {
      [pillStencil.vars.background]: base.green800,
      [pillStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
      [pillCountStencil.vars.backgroundColor]: base.green800,
    },
    '&:disabled, &.disabled': {
      [pillStencil.vars.background]: base.green600,
      [pillStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
  },
});

export const CustomStyles = () => {
  return (
    <div>
      <Pill cs={customPillStencil()}>
        <Pill.Icon aria-label="Add user" />
        <Pill.Label>Custom Pill Color</Pill.Label>
        <Pill.Count>10</Pill.Count>
      </Pill>
    </div>
  );
};
`;function A(l){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...W(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(N,{of:J}),`
`,e.jsx(t.h1,{id:"canvas-kit-pill",children:"Canvas Kit Pill"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Pill"}),`s are static or interactive indicators that allow users to input, filter, or label
information.`]}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Pill"}),`s are used to visually label objects on a page for quick recognition. They’re offered as both
static (read-only) and interactive elements. They allow users to filter a list or table, or label
information to help with scanning and organization.`]}),`
`,e.jsx(t.h3,{id:"basic-pills",children:"Basic Pills"}),`
`,e.jsx(t.p,{children:`By default a Pill is considered interactive. All leading elements (icons or avatars) are intended to
be descriptive, helping support the label. Do not rely on the leading element to indicate the
interaction behavior.`}),`
`,e.jsx(t.h4,{id:"icon",children:"Icon"}),`
`,e.jsxs(t.p,{children:["You can render an icon inside the ",e.jsx(t.code,{children:"Pill"})," with ",e.jsx(t.code,{children:"Pill.Icon"}),". It will render a ",e.jsx(t.code,{children:"plusIcon"}),` by default,
but it can be customized by providing an icon to the `,e.jsx(t.code,{children:"icon"})," prop. Because it uses ",e.jsx(t.code,{children:"SystemIcon"}),` under
the hood, you also have access to all `,e.jsx(t.code,{children:"SystemIconProps"}),"."]}),`
`,e.jsx(t.h4,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["You must provide an ",e.jsx(t.code,{children:"aria-label"})," to the ",e.jsx(t.code,{children:"Pill.Icon"})," for proper accessibility."]}),`
`,e.jsx(o,{code:P}),`
`,e.jsx(t.h4,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(t.p,{children:["You can render an avatar image inside the ",e.jsx(t.code,{children:"Pill"})," with ",e.jsx(t.code,{children:"Pill.Avatar"}),`. It should appear before the
`,e.jsx(t.code,{children:"Pill"})," text. Because it uses ",e.jsx(t.code,{children:"Avatar"})," under the hood, you also have access to all ",e.jsx(t.code,{children:"AvatarProps"}),"."]}),`
`,e.jsx(o,{code:S}),`
`,e.jsx(t.h4,{id:"count",children:"Count"}),`
`,e.jsx(t.p,{children:`The count appears after the label. It is usually associated with the label. If you have a category,
the count will directly correlate to that category.`}),`
`,e.jsx(o,{code:C}),`
`,e.jsx(t.h3,{id:"read-only",children:"Read Only"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"readOnly"})," variant is a non-interactive element that is used to display information."]}),`
`,e.jsxs(t.p,{children:["You can define a read only ",e.jsx(t.code,{children:"Pill"})," by providing a ",e.jsx(t.code,{children:"variant='readOnly'"})," prop."]}),`
`,e.jsx(o,{code:k}),`
`,e.jsx(t.h3,{id:"removable-pills",children:"Removable Pills"}),`
`,e.jsxs(t.p,{children:["Removable ",e.jsx(t.code,{children:"Pill"}),"s display an ",e.jsx(t.code,{children:"X"}),` icon after the label. They have a smaller, more specific focus
state and click target to be more intentional about their actions and to avoid unintended removal.`]}),`
`,e.jsxs(t.p,{children:["You can define a removable ",e.jsx(t.code,{children:"Pill"})," by providing a ",e.jsx(t.code,{children:"variant='removable'"})," prop."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Pill variant="removable">
  Pink Shirts
  <Pill.IconButton onClick={() => console.warn('clicked')} />
</Pill>
`})}),`
`,e.jsxs(t.p,{children:["In this case, we use a ",e.jsx(t.code,{children:"Pill.IconButton"})," because the ",e.jsx(t.code,{children:"X"}),` becomes the focusable and clickable
element.`]}),`
`,e.jsxs(t.p,{children:["The default icon for ",e.jsx(t.code,{children:"Pill.IconButton"})," is ",e.jsx(t.code,{children:"xSmallIcon"}),` but this can also be overwritten by passing
an `,e.jsx(t.code,{children:"icon"})," prop to ",e.jsx(t.code,{children:"Pill.IconButton"})]}),`
`,e.jsx(o,{code:w}),`
`,e.jsx(t.h3,{id:"list-of-pills",children:"List of Pills"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Pill"}),`s can often represent multiple pieces of information such as a filtered list of categories or
skills.`]}),`
`,e.jsxs(t.p,{children:["In order to achieve this, use our ",e.jsx(t.code,{children:"Flex"})," component to wrap each ",e.jsx(t.code,{children:"Pill"}),` and space them out
accordingly.`]}),`
`,e.jsx(o,{code:R}),`
`,e.jsx(t.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Pill"})," supports custom styling via the ",e.jsx(t.code,{children:"cs"}),` prop. For more information, check our
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),`
or view the example below.`]}),`
`,e.jsx(o,{code:T}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(O,{name:"Pill",fileName:"/react/"})]})}function H(l={}){const{wrapper:t}={...W(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(A,{...l})}):A(l)}const J={title:"Components/Indicators/Pill",component:r,tags:["autodocs"],parameters:{docs:{page:H}}},x={render:k},v={render:S},u={render:P},y={render:C},b={render:w},f={render:R},g={render:T};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: WithReadOnlyExample
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: WithAvatarExample
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: WithCountExample
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: WithRemovableExample
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: WithListExample
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: CustomStylesExample
}`,...g.parameters?.docs?.source}}};const St=["WithReadOnly","WithAvatar","Basic","WithCount","WithRemovable","WithList","CustomStyles"];export{u as Basic,g as CustomStyles,v as WithAvatar,y as WithCount,f as WithList,x as WithReadOnly,b as WithRemovable,St as __namedExportsOrder,J as default};
