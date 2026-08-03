import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as S}from"./index-CCLYCUcL.js";import{E as a,c as I}from"./union-Bg3XhQW7.js";import"./index-IfJi-UCQ.js";import{K as s}from"./KBD-DxoyYy5D.js";import{c as n}from"./cs-rfTTo7Bg.js";import{B as v,S as o}from"./TypeLevelComponents-DvEPox1F.js";import{p as w,g as i}from"./index-DE-upP0k.js";import{c as C}from"./sparkle-QHHyJsRv.js";import{T as z}from"./Tooltip-CIXsZY9p.js";import{S as T}from"./SecondaryButton-DetvBox6.js";import{p as b}from"./px2rem-C0KbprIx.js";import"./iframe-fcNsQbLG.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./SystemIcon-DDXGuKaN.js";import"./Svg-DOtJrqB4.js";import"./components-v7JqqvMM.js";import"./types-wqmYQQWa.js";import"./StatusIndicator-Bn_llku6.js";import"./Text-CGhXLC3-.js";import"./mergeStyles-DWcFsH6q.js";import"./Box-DBboduCF.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-BeyF4dmz.js";import"./grid-LhDFLHVE.js";import"./cornerShape-BqAy_znZ.js";import"./Card-BJfcBlnp.js";import"./ExternalHyperlink-CSl8fQT7.js";import"./Hyperlink-7twjq9QK.js";import"./external-link-ChL2h1Cn.js";import"./lerna-L2hz15L8.js";import"./CanvasProvider-BdAnrRrV.js";import"./index-D-t2nnqG.js";import"./TertiaryButton-DpmPS0az.js";import"./BaseButton-CwcWTppN.js";import"./Button-DIqyR1HD.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-Cgb9Hdi5.js";import"./ColorInput-Cg14RZWE.js";import"./check-small-BqSDQIle.js";import"./TextInput-DNMBfMVj.js";import"./types-DXdjelYI.js";import"./FormField-DuShvnld.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./check-Ds6vsrAM.js";import"./Expandable-DhTfPAUC.js";import"./Avatar-BGfd4l2y.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-C18U_xj5.js";import"./Popup-DWq72ULl.js";import"./getTransformFromPlacement-CgsYHD9j.js";import"./x-B1faap_l.js";import"./Popper-BCGrei36.js";import"./usePopupTarget-BbuiYqPz.js";import"./useInitialFocus-CDRlabme.js";import"./useReturnFocus-BxLABu8v.js";import"./useCloseOnEscape-NA8gEnpq.js";import"./useFocusRedirect-CQwafUeW.js";import"./Breadcrumbs-CWYu4039.js";import"./useOverflowListTarget-BzIX5IBr.js";import"./useListItemRegister-BxAZRU-B.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DNxUV_OH.js";import"./useTooltip-CG-QuIwi.js";import"./OverflowTooltip-BlFalyvz.js";import"./useListItemSelect-CuPw5UTK.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-vbsWUH5O.js";import"./Table-BK509mjt.js";const _=n({gap:i.md,display:"flex",flexDirection:"column"}),j=()=>e.jsxs("div",{className:_,children:[e.jsxs(v,{size:"small",cs:{marginBlock:0},children:["Press",e.jsx(s,{cs:{marginInline:w.xxs},children:e.jsx(s.Item,{children:"F"})}),"to pay respects."]}),e.jsxs(s,{children:[e.jsx(s.Item,{"aria-label":"Command",children:"⌘"}),e.jsx(s.Item,{children:"C"})]}),e.jsxs(s,{"aria-keyshortcuts":"Shift+P",children:[e.jsx(s.Item,{children:"Shift"}),e.jsx("span",{children:"+"}),e.jsx(s.Item,{children:"P"})]}),e.jsx(s,{"aria-keyshortcuts":"Shift+P",children:e.jsx(s.Item,{children:e.jsxs(s,{variant:"plain",children:[e.jsx(s.Item,{children:"Shift"}),e.jsx("span",{children:"+"}),e.jsx(s.Item,{children:"P"})]})})})]});j.__RAW__=`import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
});

export const Basic = () => {
  return (
    <div className={containerStyles}>
      <BodyText size="small" cs={{marginBlock: 0}}>
        Press
        <KBD cs={{marginInline: system.padding.xxs}}>
          <KBD.Item>F</KBD.Item>
        </KBD>
        to pay respects.
      </BodyText>
      <KBD>
        <KBD.Item aria-label="Command">⌘</KBD.Item>
        <KBD.Item>C</KBD.Item>
      </KBD>
      <KBD aria-keyshortcuts="Shift+P">
        <KBD.Item>Shift</KBD.Item>
        <span>+</span>
        <KBD.Item>P</KBD.Item>
      </KBD>
      <KBD aria-keyshortcuts="Shift+P">
        <KBD.Item>
          <KBD variant="plain">
            <KBD.Item>Shift</KBD.Item>
            <span>+</span>
            <KBD.Item>P</KBD.Item>
          </KBD>
        </KBD.Item>
      </KBD>
    </div>
  );
};
`;const N=n({display:"flex",alignItems:"center",gap:i.xs,p:{margin:0}}),y=()=>e.jsx(z,{title:e.jsxs("div",{className:N,children:[e.jsx(o,{size:"large",children:"Copy to clipboard"}),e.jsx(s,{children:e.jsx(s.Item,{children:e.jsxs(s,{variant:"plain",children:[e.jsx(s.Item,{"aria-label":"Command",children:"⌘"}),e.jsx(s.Item,{children:"C"})]})})})]}),children:e.jsx(T,{icon:C,"aria-keyshortcuts":"Command+C"})});y.__RAW__=`import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Subtext} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {copyIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const flexContainer = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.xs,
  p: {
    margin: 0,
  },
});

export const InTooltip = () => {
  return (
    <Tooltip
      title={
        <div className={flexContainer}>
          <Subtext size="large">Copy to clipboard</Subtext>
          <KBD>
            <KBD.Item>
              <KBD variant="plain">
                <KBD.Item aria-label="Command">⌘</KBD.Item>
                <KBD.Item>C</KBD.Item>
              </KBD>
            </KBD.Item>
          </KBD>
        </div>
      }
    >
      <SecondaryButton icon={copyIcon} aria-keyshortcuts="Command+C" />
    </Tooltip>
  );
};
`;const P=n({gap:i.md,display:"flex",flexDirection:"column"}),R=["⌘","Shift","P"],u=()=>e.jsx("div",{className:P,children:e.jsx(s,{items:R,children:r=>e.jsx(s.Item,{children:r})})});u.__RAW__=`import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
});

const items = ['⌘', 'Shift', 'P'];

export const Items = () => {
  return (
    <div className={containerStyles}>
      <KBD items={items}>{item => <KBD.Item>{item}</KBD.Item>}</KBD>
    </div>
  );
};
`;const A=n({gap:i.md,display:"flex",flexDirection:"column"}),D=()=>e.jsxs("div",{className:A,dir:"rtl",children:[e.jsx(s,{children:e.jsx(s.Item,{children:"F"})}),e.jsxs(s,{children:[e.jsx(s.Item,{children:"⌘"}),e.jsx(s.Item,{children:"C"})]}),e.jsxs(s,{children:[e.jsx(s.Item,{children:"Shift"}),e.jsx("span",{children:"+"}),e.jsx(s.Item,{children:"P"})]}),e.jsx(s,{as:"span",children:e.jsx(s.Item,{children:e.jsxs(s,{variant:"plain",children:[e.jsx(s.Item,{children:"Shift"}),e.jsx("span",{children:"+"}),e.jsx(s.Item,{children:"P"})]})})})]});D.__RAW__=`import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
});

export const RTL = () => {
  return (
    <div className={containerStyles} dir="rtl">
      <KBD>
        <KBD.Item>F</KBD.Item>
      </KBD>
      <KBD>
        <KBD.Item>⌘</KBD.Item>
        <KBD.Item>C</KBD.Item>
      </KBD>
      <KBD>
        <KBD.Item>Shift</KBD.Item>
        <span>+</span>
        <KBD.Item>P</KBD.Item>
      </KBD>
      <KBD as="span">
        <KBD.Item>
          <KBD variant="plain">
            <KBD.Item>Shift</KBD.Item>
            <span>+</span>
            <KBD.Item>P</KBD.Item>
          </KBD>
        </KBD.Item>
      </KBD>
    </div>
  );
};
`;const E=n({gap:i.md,display:"flex",flexDirection:"column"}),x=n({display:"flex",alignItems:"center",gap:i.md,p:{minWidth:b(104),margin:0}}),B=()=>e.jsxs("div",{className:E,children:[e.jsxs("div",{className:x,children:[e.jsx(o,{size:"large",children:"Large Size"}),e.jsxs(s,{size:"large",children:[e.jsx(s.Item,{children:"⌘"}),e.jsx(s.Item,{children:"C"})]})]}),e.jsxs("div",{className:x,children:[e.jsx(o,{size:"medium",children:"Medium Size"}),e.jsxs(s,{size:"medium",children:[e.jsx(s.Item,{children:"Shift"}),e.jsx("span",{children:"+"}),e.jsx(s.Item,{children:"A"})]})]}),e.jsxs("div",{className:x,children:[e.jsx(o,{size:"small",children:"Small Size"}),e.jsxs(s,{size:"small",children:[e.jsx(s.Item,{children:"Ctrl"}),e.jsx(s.Item,{children:"V"})]})]})]});B.__RAW__=`import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
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

export const Size = () => {
  return (
    <div className={containerStyles}>
      <div className={rowStyles}>
        <Subtext size="large">Large Size</Subtext>
        <KBD size="large">
          <KBD.Item>⌘</KBD.Item>
          <KBD.Item>C</KBD.Item>
        </KBD>
      </div>
      <div className={rowStyles}>
        <Subtext size="medium">Medium Size</Subtext>
        <KBD size="medium">
          <KBD.Item>Shift</KBD.Item>
          <span>+</span>
          <KBD.Item>A</KBD.Item>
        </KBD>
      </div>
      <div className={rowStyles}>
        <Subtext size="small">Small Size</Subtext>
        <KBD size="small">
          <KBD.Item>Ctrl</KBD.Item>
          <KBD.Item>V</KBD.Item>
        </KBD>
      </div>
    </div>
  );
};
`;const L=n({gap:i.md,display:"flex",flexDirection:"column",p:{minWidth:b(104),margin:0}}),g=n({display:"flex",alignItems:"center",gap:i.md}),K=()=>e.jsxs("div",{className:L,children:[e.jsxs("div",{className:g,children:[e.jsx(o,{size:"large",children:"Default Variant"}),e.jsxs(s,{variant:"default",children:[e.jsx(s.Item,{children:"⌘"}),e.jsx(s.Item,{children:"C"})]})]}),e.jsxs("div",{className:g,children:[e.jsx(o,{size:"large",children:"Plain Variant"}),e.jsxs(s,{variant:"plain",children:[e.jsx(s.Item,{children:"Shift"}),e.jsx("span",{children:"+"}),e.jsx(s.Item,{children:"A"})]})]})]});K.__RAW__=`import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
  p: {
    minWidth: px2rem(104),
    margin: 0,
  },
});

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.md,
});

export const Variant = () => {
  return (
    <div className={containerStyles}>
      <div className={rowStyles}>
        <Subtext size="large">Default Variant</Subtext>
        <KBD variant="default">
          <KBD.Item>⌘</KBD.Item>
          <KBD.Item>C</KBD.Item>
        </KBD>
      </div>
      <div className={rowStyles}>
        <Subtext size="large">Plain Variant</Subtext>
        <KBD variant="plain">
          <KBD.Item>Shift</KBD.Item>
          <span>+</span>
          <KBD.Item>A</KBD.Item>
        </KBD>
      </div>
    </div>
  );
};
`;function f(r){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(S,{of:W}),`
`,e.jsx(t.h1,{id:"kbd",children:"KBD"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"KBD"}),` is a compound component used to visually represent keyboard input, such as keys or keyboard
shortcuts.`]}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-labs-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"KBD"})," is a container that wraps one or more ",e.jsx(t.code,{children:"KBD.Item"})," components. Each ",e.jsx(t.code,{children:"KBD.Item"}),` represents a
single keyboard key.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Important:"})," When displaying a group of keyboard keys (such as ",e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"C"}),`),
`,e.jsx(t.strong,{children:"do not"})," place that combination as a text into a single ",e.jsx(t.code,{children:"KBD.Item"}),` (for example,
`,e.jsx(t.code,{children:"<KBD.Item>Ctrl + C</KBD.Item>"}),`). Doing so will cause issues with RTL (right-to-left) positioning
and keyboard shortcut display. Instead, wrap each key in its own `,e.jsx(t.code,{children:"KBD.Item"}),` and group them inside
a `,e.jsx(t.code,{children:"KBD"})," container. This ensures correct rendering and layout in both LTR and RTL environments."]}),`
`]}),`
`,e.jsx(a,{code:j}),`
`,e.jsx(t.h3,{id:"dynamic-items",children:"Dynamic Items"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"KBD"})," is built on the ",e.jsx(t.a,{href:"?path=/docs/features-collections--docs",children:"Collection API"}),`. Instead
of rendering `,e.jsx(t.code,{children:"KBD.Item"})," components statically, you can pass an array of strings to the ",e.jsx(t.code,{children:"items"}),` prop
and provide a render prop as the children. Each string represents the label of a single keyboard
key.`]}),`
`,e.jsx(a,{code:u}),`
`,e.jsx(t.h3,{id:"rtl-example",children:"RTL Example"}),`
`,e.jsxs(t.p,{children:["You can also use the ",e.jsx(t.code,{children:"KBD"}),` component in right-to-left (RTL) layouts. This is helpful for languages
that are read from right to left.`]}),`
`,e.jsx(a,{code:D}),`
`,e.jsx(t.h3,{id:"size",children:"Size"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"KBD"})," component supports different sizes. You can adjust the size using the ",e.jsx(t.code,{children:"size"}),` prop with
options like `,e.jsx(t.code,{children:"small"}),", ",e.jsx(t.code,{children:"medium"}),", and ",e.jsx(t.code,{children:"large"})," to suit various UI needs. The ",e.jsx(t.code,{children:"size"}),` is shared with each
`,e.jsx(t.code,{children:"KBD.Item"})," through the model."]}),`
`,e.jsx(a,{code:B}),`
`,e.jsx(t.h3,{id:"variant",children:"Variant"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"KBD"})," component supports different variants through the ",e.jsx(t.code,{children:"variant"})," prop. Use ",e.jsx(t.code,{children:"default"}),` for the
standard style or `,e.jsx(t.code,{children:"plain"})," for a more minimal appearance. The ",e.jsx(t.code,{children:"variant"}),` is shared with each
`,e.jsx(t.code,{children:"KBD.Item"})," through the model."]}),`
`,e.jsx(a,{code:K}),`
`,e.jsx(t.h3,{id:"in-tooltip",children:"In Tooltip"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"KBD"})," can be used inside a ",e.jsx(t.code,{children:"Tooltip"}),` to communicate the keyboard shortcut associated with an
interactive control. Pair it with descriptive text so the shortcut is easy to understand.`]}),`
`,e.jsx(a,{code:y}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"KBD"})," is ",e.jsx(t.strong,{children:"presentational and semantic text"}),". It renders a ",e.jsx(t.code,{children:"kbd"}),` element so assistive technology
can recognize the content as keyboard input, but it does `,e.jsx(t.strong,{children:"not"}),` make a keyboard shortcut work or
expose it to the browser. It is the visual/semantic representation of a key, not the accessibility
contract for a functioning shortcut.`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"aria-keyshortcuts"})," isn't supposed to go on the presentational KBD wrapper, it should be on the interactive control with the key listener."]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"<KBD.Item>"}),' components that use glyphs need translated aria-label strings. (E.g. "Command", "Control", etc.)']}),`
`]}),`
`,e.jsx(t.h3,{id:"provide-spoken-labels-for-symbolic-or-abbreviated-keys",children:"Provide spoken labels for symbolic or abbreviated keys"}),`
`,e.jsxs(t.p,{children:["Glyphs and abbreviations such as ",e.jsx("kbd",{children:"⌘"}),", ",e.jsx("kbd",{children:"⌥"}),", ",e.jsx("kbd",{children:"⇧"}),", and arrow keys are ",e.jsx(t.strong,{children:`not
announced reliably`})," across screen reader, browser, and OS combinations. When a ",e.jsx(t.code,{children:"KBD.Item"}),` contains
a symbol or abbreviation, add an `,e.jsx(t.code,{children:"aria-label"}),` with the spoken name of the key so it is announced
consistently:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<KBD>
  <KBD.Item aria-label="Command">⌘</KBD.Item>
  <KBD.Item>C</KBD.Item>
</KBD>
`})}),`
`,e.jsxs(t.p,{children:["Plain alphanumeric keys (such as ",e.jsx(t.code,{children:"C"}),` above) read correctly on their own and don't need an
`,e.jsx(t.code,{children:"aria-label"}),"."]}),`
`,e.jsx(t.h3,{id:"expose-the-actual-shortcut-on-the-control-it-triggers",children:"Expose the actual shortcut on the control it triggers"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"KBD"}),` only documents a shortcut visually. If the shortcut is functional, also expose it on the
relevant interactive control using
`,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts",rel:"nofollow",children:e.jsx(t.code,{children:"aria-keyshortcuts"})}),`
so assistive technology can communicate it to users:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<button aria-keyshortcuts="Command+C">
  Copy
  <KBD>
    <KBD.Item aria-label="Command">⌘</KBD.Item>
    <KBD.Item>C</KBD.Item>
  </KBD>
</button>
`})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(I,{name:"KBD",hideDescription:!0}),`
`,e.jsx(t.h2,{id:"model",children:"Model"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"KBD"})," uses a ",e.jsx(t.code,{children:"useKBDModel"})," to track the keyboard keys (",e.jsx(t.code,{children:"items"}),") and to share the ",e.jsx(t.code,{children:"size"}),` and
`,e.jsx(t.code,{children:"variant"})," with each ",e.jsx(t.code,{children:"KBD.Item"}),`. If you need direct access to the model's state, you can create it
yourself with `,e.jsx(t.code,{children:"useKBDModel"})," and pass it to ",e.jsx(t.code,{children:"KBD"})," via the ",e.jsx(t.code,{children:"model"})," prop."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const model = useKBDModel({
  size: 'large',
  variant: 'plain',
  items: ['⌘', 'C'],
});

<KBD model={model}>{item => <KBD.Item>{item}</KBD.Item>}</KBD>;
`})}),`
`,e.jsx(I,{name:"useKBDModel",hideDescription:!0})]})}function M(r={}){const{wrapper:t}={...k(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(f,{...r})}):f(r)}const W={title:"Labs/KBD",tags:["autodocs"],parameters:{docs:{page:M}}},c={render:j},l={render:D},d={render:B},m={render:K},p={render:u},h={render:y};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: SizeExample
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: VariantExample
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ItemsExample
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: InTooltipExample
}`,...h.parameters?.docs?.source}}};const xt=["Basic","RTL","Size","Variant","Items","InTooltip"];export{c as Basic,h as InTooltip,p as Items,l as RTL,d as Size,m as Variant,xt as __namedExportsOrder,W as default};
