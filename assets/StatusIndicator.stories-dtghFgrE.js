import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as g}from"./index-3YbjYt95.js";import{ae as L}from"./index-Ca_ueJdC.js";import{E as e,c as k}from"./union-BR0v2gRB.js";import"./index-IfJi-UCQ.js";import{S as r}from"./StatusIndicator-gZMUeaRL.js";import{d as A}from"./document-sparkle-D0ET3kT5.js";import{c as n}from"./cs-rfTTo7Bg.js";import{c as v,g as h}from"./index-5dfzm_kn.js";import{Y as C,Z as U}from"./index-5mrAZJYD.js";import{s as _}from"./SystemIcon-BvGZwaoD.js";import{c as a}from"./cloud-arrow-up-DRlXmxwS.js";import{F as i}from"./Flex-CJiYBkIy.js";import{O as E}from"./OverflowTooltip-ChALVole.js";import"./iframe-Df90AzKP.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./Card-BRu6KPxh.js";import"./components-BzxOW7QS.js";import"./mergeStyles-B5xtJ_PZ.js";import"./Box-C3Rh3_8o.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-EgKYzApj.js";import"./grid-BOSAf611.js";import"./Text-BLiLRwwF.js";import"./ExternalHyperlink-CRU638AJ.js";import"./Hyperlink-B-efvBlO.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-C6dc0I17.js";import"./BaseButton-DYGlcZck.js";import"./Button-gB-pg0yL.js";import"./px2rem-C0KbprIx.js";import"./lerna-BEf4wwJd.js";import"./CanvasProvider-C7QCbs6E.js";import"./Tooltip-CAR6Ep96.js";import"./useTooltip-BL-xww8B.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-bxAGnail.js";import"./Popper-Bj4tFU_w.js";import"./TertiaryButton-SwgvdX0A.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BgBOz6pU.js";import"./ColorPicker-06B5oV7m.js";import"./ColorInput-fMEaTT1j.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-EU9rhnK_.js";import"./types-DXdjelYI.js";import"./FormField-DNE698zQ.js";import"./check-Bvurkvei.js";import"./Expandable-E7IaUtAA.js";import"./Avatar-BQAjuJh4.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DVmqDXHq.js";import"./Popup-hBLQdfHd.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-B9mkdgty.js";import"./useInitialFocus-DsaG8QeM.js";import"./useReturnFocus-DxgM6tpN.js";import"./useFocusRedirect-DY41H3s1.js";import"./Breadcrumbs-DbSrMfri.js";import"./useOverflowListTarget-BdPxwRdQ.js";import"./useListItemSelect-BJNBLcmr.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-eJWTGk8_.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-DepMuJNO.js";import"./Svg-j63L436u.js";const x=()=>t.jsx(r,{children:t.jsx(r.Label,{children:"Unpublished"})});x.__RAW__=`import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';

export const Basic = () => {
  return (
    <StatusIndicator>
      <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
    </StatusIndicator>
  );
};
`;const O=n({background:C,[_.vars.color]:v.fg.inverse,color:v.fg.inverse}),S=()=>t.jsxs(r,{cs:O,children:[t.jsx(r.Icon,{icon:A,size:"xxs"}),t.jsx(r.Label,{children:"AI Content"})]});S.__RAW__=`import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStyles} from '@workday/canvas-kit-styling';
import {documentSparkleIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

const customStyles = createStyles({
  background: base.blue900,
  [systemIconStencil.vars.color]: system.color.fg.inverse,
  color: system.color.fg.inverse,
});

export const Custom = () => {
  return (
    <StatusIndicator cs={customStyles}>
      <StatusIndicator.Icon icon={documentSparkleIcon} size="xxs" />
      <StatusIndicator.Label>AI Content</StatusIndicator.Label>
    </StatusIndicator>
  );
};
`;const F=n({gap:h.md}),j=()=>t.jsxs(i,{cs:F,children:[t.jsxs(r,{emphasis:"high",children:[t.jsx(r.Icon,{icon:a}),t.jsx(r.Label,{children:"High Emphasis"})]}),t.jsxs(r,{emphasis:"low",children:[t.jsx(r.Icon,{icon:a}),t.jsx(r.Label,{children:"Low Emphasis"})]})]});j.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.gap.md,
});

export const Emphasis = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <StatusIndicator emphasis="high">
        <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        <StatusIndicator.Label>High Emphasis</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator emphasis="low">
        <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        <StatusIndicator.Label>Low Emphasis</StatusIndicator.Label>
      </StatusIndicator>
    </Flex>
  );
};
`;const W=n({gap:h.md}),y=()=>t.jsxs(i,{cs:W,children:[t.jsxs(r,{children:[t.jsx(r.Icon,{"aria-label":"unpublished",icon:a}),t.jsx(r.Label,{children:"Unpublished"})]}),t.jsxs(r,{variant:"positive",children:[t.jsx(r.Label,{children:"published"}),t.jsx(r.Icon,{"aria-label":"published",icon:a})]})]});y.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.gap.md,
});

export const Icon = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <StatusIndicator>
        <StatusIndicator.Icon aria-label="unpublished" icon={cloudArrowUpIcon} />
        <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator variant="positive">
        <StatusIndicator.Label>published</StatusIndicator.Label>
        <StatusIndicator.Icon aria-label="published" icon={cloudArrowUpIcon} />
      </StatusIndicator>
    </Flex>
  );
};
`;const R=n({maxWidth:U}),b=()=>t.jsx(E,{children:t.jsxs(r,{tabIndex:0,cs:R,children:[t.jsx(r.Icon,{icon:a}),t.jsx(r.Label,{children:"Your workbook is currently in process of saving"})]})});b.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';
import {base} from '@workday/canvas-tokens-web';

const statusIndicatorStyles = createStyles({
  maxWidth: base.size1200,
});

export const Overflow = () => {
  return (
    <OverflowTooltip>
      <StatusIndicator tabIndex={0} cs={statusIndicatorStyles}>
        <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        <StatusIndicator.Label>
          Your workbook is currently in process of saving
        </StatusIndicator.Label>
      </StatusIndicator>
    </OverflowTooltip>
  );
};
`;const I={parentContainerStyles:n({gap:h.md,flexDirection:"column"}),innerContainerStyles:n({gap:h.md})},w=()=>t.jsxs(i,{cs:I.parentContainerStyles,children:[t.jsxs(i,{cs:I.innerContainerStyles,children:[t.jsxs(r,{children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{variant:"caution",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{variant:"info",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor "}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{variant:"positive",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{variant:"critical",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{variant:"transparent",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]})]}),t.jsxs(i,{cs:I.innerContainerStyles,children:[t.jsxs(r,{emphasis:"high",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{emphasis:"high",variant:"caution",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{emphasis:"high",variant:"info",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor "}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{emphasis:"high",variant:"positive",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{emphasis:"high",variant:"critical",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]}),t.jsxs(r,{emphasis:"high",variant:"transparent",children:[t.jsx(r.Label,{children:"Lorem ipsum dolor"}),t.jsx(r.Icon,{icon:a})]})]})]});w.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    gap: system.gap.md,
    flexDirection: 'column',
  }),
  innerContainerStyles: createStyles({
    gap: system.gap.md,
  }),
};

export const Variants = () => {
  return (
    <Flex cs={styleOverrides.parentContainerStyles}>
      <Flex cs={styleOverrides.innerContainerStyles}>
        <StatusIndicator>
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator variant="caution">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator variant="info">
          <StatusIndicator.Label>Lorem ipsum dolor </StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator variant="positive">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator variant="critical">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator variant="transparent">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
      </Flex>
      <Flex cs={styleOverrides.innerContainerStyles}>
        <StatusIndicator emphasis="high">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="caution">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="info">
          <StatusIndicator.Label>Lorem ipsum dolor </StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="positive">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="critical">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="transparent">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        </StatusIndicator>
      </Flex>
    </Flex>
  );
};
`;function f(s){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...g(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(L,{of:z}),`
`,t.jsx(o.h1,{id:"canvas-kit-status-indicator",children:"Canvas Kit Status Indicator"}),`
`,t.jsx(o.p,{children:"Status Indicators help the user quickly identify the status of a task, action, or page element."}),`
`,t.jsx(o.h2,{id:"installation",children:"Installation"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-preview-react
`})}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h3,{id:"basic-example",children:"Basic Example"}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"StatusIndicator"})," includes a container ",t.jsx(o.code,{children:"StatusIndicator"}),` component and the following subcomponents
which can be composed in a variety of ways: `,t.jsx(o.code,{children:"StatusIndicator.Label"})," and ",t.jsx(o.code,{children:"StatusIndicator.Icon"}),"."]}),`
`,t.jsxs(o.p,{children:["A basic ",t.jsx(o.code,{children:"StatusIndicator"})," with a ",t.jsx(o.code,{children:"StatusIndicator.Label"}),` will render text with a gray background and
low emphasis.`]}),`
`,t.jsx(e,{code:x}),`
`,t.jsx(o.h3,{id:"emphasis",children:"Emphasis"}),`
`,t.jsxs(o.p,{children:["Set the ",t.jsx(o.code,{children:"emphasis"})," prop of ",t.jsx(o.code,{children:"StatusIndicator"}),` to adjust the contrast between the text and background
color. Emphasis is typically used to convey more visual urgency.`]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"emphasis"})," accepts ",t.jsx(o.code,{children:"high"})," or ",t.jsx(o.code,{children:"low"}),"."]}),`
`,t.jsx(e,{code:j}),`
`,t.jsx(o.h3,{id:"icon",children:"Icon"}),`
`,t.jsxs(o.p,{children:["Use ",t.jsx(o.code,{children:"StatusIndicator.Icon"})," to add an icon to the ",t.jsx(o.code,{children:"StatusIndicator"}),` as a visual decorator. The
position of the icon may be adjusted depending on where you place it in the markup.`]}),`
`,t.jsx(e,{code:y}),`
`,t.jsx(o.h3,{id:"overflow",children:"Overflow"}),`
`,t.jsxs(o.p,{children:["We ",t.jsx(o.strong,{children:"strongly"})," discourage using text in a ",t.jsx(o.code,{children:"StatusIndicator"}),` which will cause it to exceed its
maximum width of `,t.jsx(o.code,{children:"200px"}),`. In situations where this cannot be avoided and text must be overflowed, we
suggest wrapping `,t.jsx(o.code,{children:"StatusIndicator"})," in an ",t.jsx(o.code,{children:"OverflowTooltip"})," and applying ",t.jsx(o.code,{children:"tabIndex={0}"}),` to it so the
overflowed text is accessible via keyboard and mouse. You may also override the default `,t.jsx(o.code,{children:"maxWidth"}),`
of `,t.jsx(o.code,{children:"StatusIndicator"})," via ",t.jsx(o.a,{href:"?path=/docs/features-style-props--docs",children:"style props"}),"."]}),`
`,t.jsx(e,{code:b}),`
`,t.jsx(o.h3,{id:"variants",children:"Variants"}),`
`,t.jsxs(o.p,{children:["Set the ",t.jsx(o.code,{children:"variant"})," prop of ",t.jsx(o.code,{children:"StatusIndicator"})," to adjust its background color. ",t.jsx(o.code,{children:"variant"}),` accepts the
following values:`]}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:t.jsx(o.code,{children:"gray"})}),`
`,t.jsx(o.li,{children:t.jsx(o.code,{children:"orange"})}),`
`,t.jsx(o.li,{children:t.jsx(o.code,{children:"blue"})}),`
`,t.jsx(o.li,{children:t.jsx(o.code,{children:"green"})}),`
`,t.jsx(o.li,{children:t.jsx(o.code,{children:"red"})}),`
`,t.jsx(o.li,{children:t.jsx(o.code,{children:"transparent"})}),`
`]}),`
`,t.jsxs(o.p,{children:["The background color dictated by the ",t.jsx(o.code,{children:"variant"})," will be dark or light based on the ",t.jsx(o.code,{children:"emphasis"}),"."]}),`
`,t.jsx(e,{code:w}),`
`,t.jsx(o.h3,{id:"custom-example",children:"Custom Example"}),`
`,t.jsxs(o.p,{children:["You can customize both the icon and color of the ",t.jsx(o.code,{children:"StatusIndicator"})," to create a custom variant."]}),`
`,t.jsx(e,{code:S}),`
`,t.jsx(o.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,t.jsxs(o.p,{children:["Status Indicator and its subcomponents support custom styling via the ",t.jsx(o.code,{children:"cs"}),` prop. For more
information, check our
`,t.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,t.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(k,{name:"StatusIndicator",fileName:"/preview-react/"})]})}function T(s={}){const{wrapper:o}={...g(),...s.components};return o?t.jsx(o,{...s,children:t.jsx(f,{...s})}):f(s)}const z={title:"Preview/Status Indicator",component:r,tags:["autodocs"],parameters:{docs:{page:T}}},c={render:x},d={render:j},l={render:y},p={render:b},m={render:w},u={render:S};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: EmphasisExample
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: IconExample
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: OverflowExample
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: VariantsExample
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...u.parameters?.docs?.source}}};const lo=["Basic","Emphasis","Icon","Overflow","Variants","Custom"];export{c as Basic,u as Custom,d as Emphasis,l as Icon,p as Overflow,m as Variants,lo as __namedExportsOrder,z as default};
