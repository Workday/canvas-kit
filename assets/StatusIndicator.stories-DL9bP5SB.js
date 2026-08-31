import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as f}from"./index-3YbjYt95.js";import{ae as L}from"./index-6so-KoFu.js";import{E as r,c as k}from"./union-DePjNdvf.js";import"./index-IfJi-UCQ.js";import{S as n}from"./StatusIndicator-BBvMXJDU.js";import{d as A}from"./document-sparkle-CDmOGnz-.js";import{c as i}from"./cs-CmRirKzJ.js";import{c as v,g as x}from"./index-DE-upP0k.js";import{y as C,z as U}from"./index-D-t2nnqG.js";import{s as O}from"./SystemIcon-DQIl41_4.js";import{c as s}from"./cloud-arrow-up-BLHe5iIq.js";import{F as a}from"./Flex-Bya8Tutq.js";import{O as _}from"./OverflowTooltip-BnIGiGVa.js";import"./iframe-DNLsrC-Y.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./Card-Cixb7JwI.js";import"./components-J2matnwI.js";import"./mergeStyles-Dzkg_44R.js";import"./Box-C28byrRl.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Cgcx0XP-.js";import"./grid-D3GOPfSf.js";import"./Text-CjirTJMi.js";import"./cornerShape-DaLncuks.js";import"./ExternalHyperlink-CaaD5lbQ.js";import"./Hyperlink-DzsL2-aa.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-D5Cqn9Jg.js";import"./BaseButton-CLmEjkXA.js";import"./Button-MuaWtoCf.js";import"./px2rem-C0KbprIx.js";import"./lerna-BGQ5QfjI.js";import"./CanvasProvider-D99BixEQ.js";import"./Tooltip-DN54ALip.js";import"./useTooltip-BR1ydcPP.js";import"./getTransformFromPlacement-BMTXYfgW.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BX8xl9NG.js";import"./Popper--Mi8Hc-7.js";import"./TertiaryButton-aMR34MRB.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-C3guoDTA.js";import"./ColorPicker-D3uc791o.js";import"./ColorInput-BfZSPql0.js";import"./check-small-BqSDQIle.js";import"./TextInput-COgKXSBT.js";import"./types-DXdjelYI.js";import"./FormField-A4L1nD1D.js";import"./check-Ds6vsrAM.js";import"./Expandable-Bg296Eln.js";import"./Avatar-BLxuPixd.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-CCIu0N-w.js";import"./Popup-CFzYh4ki.js";import"./x-B1faap_l.js";import"./usePopupTarget-CRuM6ip6.js";import"./useInitialFocus-BtBWSoKu.js";import"./useReturnFocus-BNRSSHBJ.js";import"./useFocusRedirect-CCL3wKTy.js";import"./Breadcrumbs-CN2fVURZ.js";import"./useOverflowListTarget-I_Pk7uEi.js";import"./useListItemRegister-DiZ5PIQz.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DEcAZBQ-.js";import"./useListItemSelect-DWWKuB8D.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Table-B_FupndC.js";import"./Svg-BNbEZ3E8.js";const j=()=>e.jsx(n,{children:e.jsx(n.Label,{children:"Unpublished"})});j.__RAW__=`import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';

export const Basic = () => {
  return (
    <StatusIndicator>
      <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
    </StatusIndicator>
  );
};
`;const E=i({background:C,[O.vars.color]:v.fg.inverse,color:v.fg.inverse}),I=()=>e.jsxs(n,{cs:E,children:[e.jsx(n.Icon,{icon:A,size:"xxs"}),e.jsx(n.Label,{children:"AI Content"})]});I.__RAW__=`import React from 'react';

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
`;const R=i({gap:x.md}),S=()=>e.jsxs(a,{cs:R,children:[e.jsxs(n,{emphasis:"high",children:[e.jsx(n.Icon,{icon:s}),e.jsx(n.Label,{children:"High Emphasis"})]}),e.jsxs(n,{emphasis:"low",children:[e.jsx(n.Icon,{icon:s}),e.jsx(n.Label,{children:"Low Emphasis"})]})]});S.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
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
`;const T=i({gap:x.md}),b=()=>e.jsxs(a,{cs:T,children:[e.jsxs(n,{children:[e.jsx(n.Icon,{icon:s}),e.jsx(n.Label,{children:"Unpublished"})]}),e.jsxs(n,{variant:"positive",children:[e.jsx(n.Label,{children:"published"}),e.jsx(n.Icon,{icon:s})]})]});b.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
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
        <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator variant="positive">
        <StatusIndicator.Label>published</StatusIndicator.Label>
        <StatusIndicator.Icon icon={cloudArrowUpIcon} />
      </StatusIndicator>
    </Flex>
  );
};
`;const F=i({maxWidth:U}),g=()=>e.jsx(_,{children:e.jsxs(n,{tabIndex:0,cs:F,children:[e.jsx(n.Icon,{icon:s}),e.jsx(n.Label,{children:"Your workbook is currently in process of saving"})]})});g.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
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
`;const p={parentContainerStyles:i({gap:x.md,flexDirection:"column"}),innerContainerStyles:i({gap:x.md})},y=()=>e.jsxs(a,{cs:p.parentContainerStyles,children:[e.jsxs(a,{cs:p.innerContainerStyles,children:[e.jsxs(n,{children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{variant:"caution",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{variant:"info",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor "}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{variant:"positive",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{variant:"critical",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{variant:"transparent",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]})]}),e.jsxs(a,{cs:p.innerContainerStyles,children:[e.jsxs(n,{emphasis:"high",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{emphasis:"high",variant:"caution",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{emphasis:"high",variant:"info",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor "}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{emphasis:"high",variant:"positive",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{emphasis:"high",variant:"critical",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]}),e.jsxs(n,{emphasis:"high",variant:"transparent",children:[e.jsx(n.Label,{children:"Lorem ipsum dolor"}),e.jsx(n.Icon,{icon:s})]})]})]});y.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
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
`;function w(o){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(L,{of:q}),`
`,e.jsx(t.h1,{id:"canvas-kit-status-indicator",children:"Canvas Kit Status Indicator"}),`
`,e.jsx(t.p,{children:"Status Indicators help the user quickly identify the status of a task, action, or page element."}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-preview-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"StatusIndicator"})," includes a container ",e.jsx(t.code,{children:"StatusIndicator"}),` component and the following subcomponents
which can be composed in a variety of ways: `,e.jsx(t.code,{children:"StatusIndicator.Label"})," and ",e.jsx(t.code,{children:"StatusIndicator.Icon"}),"."]}),`
`,e.jsxs(t.p,{children:["A basic ",e.jsx(t.code,{children:"StatusIndicator"})," with a ",e.jsx(t.code,{children:"StatusIndicator.Label"}),` will render text with a gray background and
low emphasis.`]}),`
`,e.jsx(r,{code:j}),`
`,e.jsx(t.h3,{id:"emphasis",children:"Emphasis"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"emphasis"})," prop of ",e.jsx(t.code,{children:"StatusIndicator"}),` to adjust the contrast between the text and background
color. Emphasis is typically used to convey more visual urgency.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"emphasis"})," accepts ",e.jsx(t.code,{children:"high"})," or ",e.jsx(t.code,{children:"low"}),"."]}),`
`,e.jsx(r,{code:S}),`
`,e.jsx(t.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"StatusIndicator.Icon"})," to add an icon to the ",e.jsx(t.code,{children:"StatusIndicator"}),` as a visual decorator. The
position of the icon may be adjusted depending on where you place it in the markup.`]}),`
`,e.jsx(r,{code:b}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Accessibility Note"}),`: In this example, the icon is used as a decoration and is intentionally
hidden from screen readers. If you're using icons to convey additional information, add
`,e.jsx(t.code,{children:'role="img"'})," and a translated ",e.jsx(t.code,{children:"aria-label"})," string to ",e.jsx(t.code,{children:"StatusIndicator.Icon"}),"."]}),`
`]}),`
`,e.jsx(t.h3,{id:"overflow",children:"Overflow"}),`
`,e.jsxs(t.p,{children:["We ",e.jsx(t.strong,{children:"strongly"})," discourage using text in a ",e.jsx(t.code,{children:"StatusIndicator"}),` which will cause it to exceed its
maximum width of `,e.jsx(t.code,{children:"200px"}),`. In situations where this cannot be avoided and text must be overflowed, we
suggest wrapping `,e.jsx(t.code,{children:"StatusIndicator"})," in an ",e.jsx(t.code,{children:"OverflowTooltip"})," and applying ",e.jsx(t.code,{children:"tabIndex={0}"}),` to it so the
overflowed text is accessible via keyboard and mouse. You may also override the default `,e.jsx(t.code,{children:"maxWidth"}),`
of `,e.jsx(t.code,{children:"StatusIndicator"})," via ",e.jsx(t.a,{href:"?path=/docs/features-style-props--docs",children:"style props"}),"."]}),`
`,e.jsx(r,{code:g}),`
`,e.jsx(t.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"variant"})," prop of ",e.jsx(t.code,{children:"StatusIndicator"})," to adjust its background color. ",e.jsx(t.code,{children:"variant"}),` accepts the
following values:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"neutral"})," (default; ",e.jsx(t.code,{children:"gray"})," is a deprecated alias)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"caution"})," (",e.jsx(t.code,{children:"orange"})," is a deprecated alias)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"info"})," (",e.jsx(t.code,{children:"blue"})," is a deprecated alias)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"positive"})," (",e.jsx(t.code,{children:"green"})," is a deprecated alias)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"critical"})," (",e.jsx(t.code,{children:"red"})," is a deprecated alias)"]}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"transparent"})}),`
`]}),`
`,e.jsxs(t.p,{children:["The background color dictated by the ",e.jsx(t.code,{children:"variant"})," will be dark or light based on the ",e.jsx(t.code,{children:"emphasis"}),`.
`,e.jsx(t.code,{children:"variant"})," and ",e.jsx(t.code,{children:"emphasis"}),` change color only—they do not change the accessible name. Put the status
meaning in `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})}),"."]}),`
`,e.jsx(r,{code:y}),`
`,e.jsx(t.h3,{id:"custom-example",children:"Custom Example"}),`
`,e.jsxs(t.p,{children:["You can customize both the icon and color of the ",e.jsx(t.code,{children:"StatusIndicator"})," to create a custom variant."]}),`
`,e.jsx(r,{code:I}),`
`,e.jsx(t.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(t.p,{children:["Status Indicator and its subcomponents support custom styling via the ",e.jsx(t.code,{children:"cs"}),` prop. For more
information, check our
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"StatusIndicator"})," is a compact, ",e.jsx(t.strong,{children:"non-interactive"}),` status label. The accessibility goal is that
assistive technology users get the same status meaning as sighted users from
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})})," text—not from color, emphasis, or a decorative icon."]}),`
`,e.jsx(t.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(t.p,{children:["The following matches the ",e.jsx(t.a,{href:"#basic-example",children:"Basic Example"}),`: a container and a visible label. Icon is
optional.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';

<StatusIndicator>
  <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
</StatusIndicator>;
`})}),`
`,e.jsxs(t.p,{children:["Always include ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})}),` with concise text that names the status. Do not rely on
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"variant"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"emphasis"})}),", or ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Icon"})})," as the only indicator of meaning."]}),`
`,e.jsx(t.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(t.p,{children:["Canvas Kit applies visual layout and color through ",e.jsx(t.code,{children:"statusIndicatorStencil"}),` when you compose
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})}),", and optionally ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Icon"})}),`. It
does `,e.jsx(t.strong,{children:"not"})," apply ",e.jsx(t.code,{children:'role="img"'})," or an accessible name on the icon. ",e.jsx(t.strong,{children:"Do not duplicate them"}),` in
consuming code. Only add icon ARIA when the informative-icon requirement below applies.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"ARIA and DOM"})," (",e.jsx(t.em,{children:"applied by subcomponents"}),"):"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator"})}),": renders a ",e.jsx(t.code,{children:"div"})," (override with ",e.jsx(t.code,{children:"as"})," if needed). Default ",e.jsx(t.code,{children:"maxWidth"}),` is
`,e.jsx(t.code,{children:"200px"}),". Default ",e.jsx(t.code,{children:"variant"})," is ",e.jsx(t.code,{children:"neutral"}),"; default ",e.jsx(t.code,{children:"emphasis"})," is ",e.jsx(t.code,{children:"low"}),". No ARIA role is set."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})}),": renders a ",e.jsx(t.code,{children:"span"})," with bold subtext, ",e.jsx(t.code,{children:"white-space: nowrap"}),`,
`,e.jsx(t.code,{children:"overflow: hidden"}),", and ",e.jsx(t.code,{children:"text-overflow: ellipsis"}),`. Truncation is visual; the full text remains in
the accessibility tree.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Icon"})}),": renders ",e.jsx(t.code,{children:"SystemIcon"})," at size ",e.jsx(t.code,{children:"20"}),". It does ",e.jsx(t.strong,{children:"not"})," set ",e.jsx(t.code,{children:'role="img"'}),` or
`,e.jsx(t.code,{children:"aria-label"}),". If ",e.jsx(t.code,{children:"icon.type"})," is missing, the icon renders nothing."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Keyboard"})," (",e.jsx(t.em,{children:"not a control by default"}),"):"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator"})})," is not in the tab order. There is no built-in keyboard behavior."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Screen reader expectations"})," (",e.jsx(t.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Assistive technology should announce the ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})}),` text as the content of the
indicator`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"variant"})," and ",e.jsx(t.code,{children:"emphasis"})," are ",e.jsx(t.strong,{children:"not"})," announced"]}),`
`,e.jsxs(t.li,{children:["A decorative ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Icon"})})," (no ",e.jsx(t.code,{children:'role="img"'}),`) should not add a separate accessible
name`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-tooltip--docs#tooltips-on-overflowing-content",rel:"nofollow",children:e.jsx(t.strong,{children:"OverflowTooltip"})}),`
uses `,e.jsx(t.code,{children:'type="muted"'})," and does not set ",e.jsx(t.code,{children:"aria-label"}),` on the target—the accessible name stays the
element's text content`]}),`
`]}),`
`,e.jsx(t.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(t.p,{children:["Required in application code for an accessible Status Indicator. Rows marked ",e.jsx(t.em,{children:"(conditional)"}),` apply
only when the situation matches—otherwise omit.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"If no design spec is provided:"})," include a visible ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})}),`; keep the icon
decorative (omit `,e.jsx(t.code,{children:'role="img"'})," and ",e.jsx(t.code,{children:"aria-label"}),"); omit ",e.jsx(t.code,{children:"tabIndex"})," and ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"OverflowTooltip"})}),`. Prefer
short label text so truncation is unnecessary.`]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Requirement"}),e.jsx(t.th,{children:"How to satisfy"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Visible status text"}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})}),' with translated text that names the status (for example, "Unpublished", not color alone)']})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Color is not the only indicator"}),e.jsxs(t.td,{children:["Use ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"variant"})})," / ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"emphasis"})})," only as visual reinforcement of the label. See ",e.jsx(t.a,{href:"https://www.w3.org/WAI/WCAG22/Techniques/failures/F81",rel:"nofollow",children:"Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only"})]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Decorative icon ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Icon"})})," with ",e.jsx(t.code,{children:"icon={...}"})," and ",e.jsx(t.strong,{children:"no"})," ",e.jsx(t.code,{children:'role="img"'})," when the icon only supports the label visually"]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Informative icon ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:["On ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Icon"})}),", set ",e.jsx(t.code,{children:'role="img"'})," and a translated ",e.jsx(t.code,{children:"aria-label"})," that adds meaning ",e.jsx(t.strong,{children:"beyond"})," the label text"]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Overflowed label ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:["Avoid exceeding the ",e.jsx(t.code,{children:"200px"})," max width. If truncation cannot be avoided, wrap ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator"})})," in ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"OverflowTooltip"})})," and set ",e.jsx(t.code,{children:"tabIndex={0}"})," so keyboard and mouse users can reveal the full text. See the ",e.jsx(t.a,{href:"#overflow",children:"Overflow example"})]})]})]})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Informative icon"})," ",e.jsx(t.em,{children:"(conditional)"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';

<StatusIndicator>
  <StatusIndicator.Icon role="img" aria-label="Waiting to sync" icon={cloudArrowUpIcon} />
  <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
</StatusIndicator>;
`})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"REQUIRED:"})," visible ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})})," whose text conveys the status"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"CONDITIONAL:"})," ",e.jsx(t.code,{children:'role="img"'})," + translated ",e.jsx(t.code,{children:"aria-label"})," on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Icon"})}),`,
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"OverflowTooltip"})})," + ",e.jsx(t.code,{children:"tabIndex={0}"})]}),`
`]}),`
`,e.jsx(t.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(t.p,{children:["Do ",e.jsx(t.strong,{children:"not"})," generate code that does the following (see ",e.jsx(t.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Omit ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Label"})})," or use an empty label, relying on ",e.jsx(t.code,{children:"variant"}),", ",e.jsx(t.code,{children:"emphasis"}),`, or an
icon for meaning`]}),`
`,e.jsxs(t.li,{children:["Set ",e.jsx(t.code,{children:'role="img"'})," on a decorative ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator.Icon"})}),", or set ",e.jsx(t.code,{children:'role="img"'}),` without a
translated `,e.jsx(t.code,{children:"aria-label"}),"—that can expose an unnamed image to assistive technology. See ",e.jsx(t.strong,{children:`Decorative
icon`})," and ",e.jsx(t.strong,{children:"Informative icon"})," in ",e.jsx(t.strong,{children:"Accessibility Requirements"})]}),`
`,e.jsxs(t.li,{children:["Duplicate the label text as ",e.jsx(t.code,{children:"aria-label"})," on the icon when the icon adds no extra meaning"]}),`
`,e.jsxs(t.li,{children:["Add ",e.jsx(t.code,{children:'role="status"'}),", ",e.jsx(t.code,{children:"aria-live"}),", or ",e.jsx(t.code,{children:"aria-label"})," on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"StatusIndicator"})}),` by default—Canvas Kit
does not wire these, and they change how assistive technology treats a static label. If a design
requires announcing asynchronous updates, see
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-aria-live-regions--docs",rel:"nofollow",children:"ARIA Live Regions"})]}),`
`,e.jsxs(t.li,{children:["Truncate label text without ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"OverflowTooltip"})})," and ",e.jsx(t.code,{children:"tabIndex={0}"}),` when keyboard users must read
the overflow`]}),`
`]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(k,{name:"StatusIndicator",fileName:"/preview-react/"})]})}function D(o={}){const{wrapper:t}={...f(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(w,{...o})}):w(o)}const q={title:"Preview/Status Indicator",component:n,tags:["autodocs"],parameters:{docs:{page:D}}},c={render:j},d={render:S},l={render:b},h={render:g},u={render:y},m={render:I};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: EmphasisExample
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: IconExample
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: OverflowExample
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: VariantsExample
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...m.parameters?.docs?.source}}};const ht=["Basic","Emphasis","Icon","Overflow","Variants","Custom"];export{c as Basic,m as Custom,d as Emphasis,l as Icon,h as Overflow,u as Variants,ht as __namedExportsOrder,q as default};
