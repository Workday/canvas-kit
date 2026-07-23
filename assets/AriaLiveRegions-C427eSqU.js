import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as w}from"./index-3YbjYt95.js";import{ae as B}from"./index-CSvw2ERc.js";import{E as d}from"./union-B2oVtxQj.js";import{e as l}from"./index-IfJi-UCQ.js";import{A as m}from"./AriaLiveRegion-C6xmtFfH.js";import{H as _,B as y}from"./TypeLevelComponents-9vqCSdj5.js";import{F as x}from"./Flex-BtxoTnIe.js";import{c as s}from"./cs-rfTTo7Bg.js";import{F as i}from"./FormField-CuMN0F-G.js";import{T as v}from"./TextInput-BqzMEWjb.js";import{g as u,p as R,c as p,a as $}from"./index-5dfzm_kn.js";import{p as j}from"./px2rem-C0KbprIx.js";import{P as A}from"./PrimaryButton-DFjCNuV2.js";import{T as k}from"./Text-ChJY5-bw.js";import{c as U}from"./getTransformFromPlacement-BtpPb64q.js";import{A as L}from"./AccessibleHide-DEbNq_JX.js";import{T as D}from"./TextArea-B-u6TNOf.js";import"./iframe-DdBxMp3v.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cl7xWrYQ.js";import"./Svg-C5I5ANGp.js";import"./components-DpSuslmU.js";import"./StatusIndicator--GoNMKts.js";import"./mergeStyles-C_QAuicJ.js";import"./Box-CsR_RSm3.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-jx6OknuD.js";import"./grid-CcdDoURF.js";import"./Card-XTiXx2KK.js";import"./ExternalHyperlink-Boscsj5x.js";import"./Hyperlink-BdNi6F1F.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-B2U_-e8k.js";import"./BaseButton-Cxong-p3.js";import"./Button-nWZozxrK.js";import"./lerna-DQp-x30A.js";import"./CanvasProvider-DpLmysIw.js";import"./index-B2vXpe_3.js";import"./Tooltip-Bl36ujuq.js";import"./useTooltip-C2YBnwHS.js";import"./useCloseOnEscape-Cypl0byB.js";import"./Popper-C7B_3yZW.js";import"./useUniqueId-DC-hMIDg.js";import"./TertiaryButton-ByhN6lyv.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-CXARiljT.js";import"./ColorInput-Byz8Zax5.js";import"./check-small-C7Z-gSGs.js";import"./check-Bvurkvei.js";import"./Expandable-Cr4FzK8l.js";import"./Avatar-CprVxumJ.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-a5nE6ygN.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-Dw25Pzb0.js";import"./Popup-CDwSIdQW.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DQCsp6uf.js";import"./useInitialFocus-ciFwhbKv.js";import"./useReturnFocus-BuTlku1f.js";import"./useFocusRedirect-BCC-7TkN.js";import"./Breadcrumbs-DEpoDjrK.js";import"./useOverflowListTarget-C9VCjOPk.js";import"./useListItemSelect-Ci7QLXCM.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DbO2UTSI.js";import"./OverflowTooltip-MH-FLdNq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-CPnsNSsD.js";import"./types-DXdjelYI.js";const f=["Apples","Oranges","Bananas","Lemons","Limes","Strawberries","Raspberries","Blackberries"],O=s({border:`${j(1)} solid ${p.brand.focus.caution.outer}`,backgroundColor:p.brand.surface.caution.strong,padding:R.xs}),W=s({paddingInlineStart:"0"}),V=s({listStyle:"none",paddingInlineStart:"0"}),N=s({gap:u.md});let g=f;const C=()=>{const[n,t]=l.useState("");function o(r){g=f.filter(a=>a.toUpperCase().indexOf(r.target.value.toUpperCase())>=0),t(r.target.value)}return e.jsxs(e.Fragment,{children:[e.jsxs(x,{cs:N,children:[e.jsx(_,{size:"small",children:"Fruits"}),e.jsx(m,{children:e.jsx(y,{size:"small",cs:O,children:`Showing ${g.length} of ${f.length}`})})]}),e.jsxs(i,{children:[e.jsx(i.Label,{children:"Filter Items:"}),e.jsx(i.Input,{as:v,value:n,onChange:o})]}),e.jsx("ul",{className:W,children:g.map(r=>e.jsx(y,{size:"small",as:"li",cs:V,children:r},r))})]})};C.__RAW__=`import React from 'react';

import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const fruits = [
  'Apples',
  'Oranges',
  'Bananas',
  'Lemons',
  'Limes',
  'Strawberries',
  'Raspberries',
  'Blackberries',
];

const liveRegionStyle = createStyles({
  border: \`\${px2rem(1)} solid \${system.color.brand.focus.caution.outer}\`,
  backgroundColor: system.color.brand.surface.caution.strong,
  padding: system.padding.xs,
});

const listStyles = createStyles({
  paddingInlineStart: '0',
});

const listItemStyles = createStyles({
  listStyle: 'none',
  paddingInlineStart: '0',
});

const flexStyles = createStyles({
  gap: system.gap.md,
});

let filteredFruits = fruits;

export const FilterListWithLiveStatus = () => {
  const [filter, setFilter] = React.useState('');
  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    filteredFruits = fruits.filter(i => i.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0);
    setFilter(e.target.value);
  }

  return (
    <>
      <Flex cs={flexStyles}>
        <Heading size="small">Fruits</Heading>
        <AriaLiveRegion>
          <BodyText size="small" cs={liveRegionStyle}>
            {\`Showing \${filteredFruits.length} of \${fruits.length}\`}
          </BodyText>
        </AriaLiveRegion>
      </Flex>
      <FormField>
        <FormField.Label>Filter Items:</FormField.Label>
        <FormField.Input as={TextInput} value={filter} onChange={handleFilter} />
      </FormField>
      <ul className={listStyles}>
        {filteredFruits.map(i => (
          <BodyText size="small" as="li" cs={listItemStyles} key={i}>
            {i}
          </BodyText>
        ))}
      </ul>
    </>
  );
};
`;const X=s({border:`${j(1)} solid ${p.brand.focus.caution.outer}`,backgroundColor:p.brand.surface.caution.strong,padding:R.md,display:"block",marginBlock:u.md,width:U.multiply($.xxl,7)}),z=s({gap:u.md,alignItems:"center"});let b="This is an ARIA Live Region!";const T=()=>{const[n,t]=l.useState("");function o(a){t(a.target.value)}function r(a){a.preventDefault(),b=n,t("")}return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx(k,{cs:X,children:b})}),e.jsxs(x,{as:"form","aria-label":"Visible Live Region",onSubmit:r,cs:z,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Type your message:"}),e.jsx(i.Input,{as:v,onChange:o,value:n})]}),e.jsx(A,{type:"submit",children:"Send Message"})]})]})};T.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {calc, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const liveRegionStyle = createStyles({
  border: \`\${px2rem(1)} solid \${system.color.brand.focus.caution.outer}\`,
  backgroundColor: system.color.brand.surface.caution.strong,
  padding: system.padding.md,
  display: 'block',
  marginBlock: system.gap.md,
  width: calc.multiply(system.size.xxl, 7),
});

const flexGapStyles = createStyles({
  gap: system.gap.md,
  alignItems: 'center',
});

let liveRegionStr = 'This is an ARIA Live Region!';

export const VisibleLiveRegion = () => {
  const [message, setMessage] = React.useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    liveRegionStr = message;
    setMessage('');
  }

  return (
    <>
      <AriaLiveRegion>
        <Text cs={liveRegionStyle}>{liveRegionStr}</Text>
      </AriaLiveRegion>
      <Flex
        as="form"
        aria-label="Visible Live Region"
        onSubmit={handleSendMessage}
        cs={flexGapStyles}
      >
        <FormField>
          <FormField.Label>Type your message:</FormField.Label>
          <FormField.Input as={TextInput} onChange={handleChange} value={message} />
        </FormField>
        <PrimaryButton type="submit">Send Message</PrimaryButton>
      </Flex>
    </>
  );
};
`;let S="";const P=s({gap:u.md,alignItems:"center"}),I=()=>{const[n,t]=l.useState("");function o(a){t(a.target.value)}function r(a){a.preventDefault(),S=n,t("")}return e.jsxs(e.Fragment,{children:[e.jsxs(x,{as:"form","aria-label":"Hidden Live Region",onSubmit:r,cs:P,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Type your message:"}),e.jsx(i.Input,{as:v,onChange:o,value:n})]}),e.jsx(A,{type:"submit",children:"Send Message"})]}),e.jsx(m,{children:e.jsx(k,{as:L,children:S})})]})};I.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

let liveRegionStr = '';

const flexStyles = createStyles({
  gap: system.gap.md,
  alignItems: 'center',
});

export const HiddenLiveRegion = () => {
  const [message, setMessage] = React.useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    liveRegionStr = message;
    setMessage('');
  }

  return (
    <>
      <Flex as="form" aria-label="Hidden Live Region" onSubmit={handleSendMessage} cs={flexStyles}>
        <FormField>
          <FormField.Label>Type your message:</FormField.Label>
          <FormField.Input as={TextInput} onChange={handleChange} value={message} />
        </FormField>
        <PrimaryButton type="submit">Send Message</PrimaryButton>
      </Flex>
      <AriaLiveRegion>
        <Text as={AccessibleHide}>{liveRegionStr}</Text>
      </AriaLiveRegion>
    </>
  );
};
`;const c=200,G=2e3,M=()=>{const[n,t]=l.useState(""),[o,r]=l.useState(""),a=`${n.length} of ${c} characters`,E=h=>{t(h.target.value)},H=()=>{r("")};return l.useEffect(()=>{if(n.length===c){r(`Character limit reached. ${n.length} of ${c} characters`);return}const h=setTimeout(()=>{r(`${n.length} of ${c} characters`)},G);return()=>clearTimeout(h)},[n.length]),e.jsxs(i,{children:[e.jsx(i.Label,{children:"Comments"}),e.jsxs(i.Field,{children:[e.jsx(i.Input,{as:D,onChange:E,onBlur:H,value:n,maxLength:c}),e.jsx(i.Hint,{children:a}),e.jsx(m,{as:L,children:o})]})]})};M.__RAW__=`import React from 'react';

import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

const MAX_CHARACTERS = 200;
const DEBOUNCE_DELAY = 2000; // 2 seconds after user stops typing

export const CommentBoxWithCharLimit = () => {
  const [value, setValue] = React.useState('');
  const [liveUpdateStr, setLiveUpdateStr] = React.useState('');
  const hintTextStr = \`\${value.length} of \${MAX_CHARACTERS} characters\`;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setLiveUpdateStr('');
  };

  React.useEffect(() => {
    // Immediately announce when limit is reached (bypass debounce)
    if (value.length === MAX_CHARACTERS) {
      setLiveUpdateStr(\`Character limit reached. \${value.length} of \${MAX_CHARACTERS} characters\`);
      return;
    }

    // Otherwise, debounce the updates
    const timer = setTimeout(() => {
      setLiveUpdateStr(\`\${value.length} of \${MAX_CHARACTERS} characters\`);
    }, DEBOUNCE_DELAY);
    return () => clearTimeout(timer);
  }, [value.length]);

  return (
    <FormField>
      <FormField.Label>Comments</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextArea}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          maxLength={MAX_CHARACTERS}
        />
        <FormField.Hint>{hintTextStr}</FormField.Hint>
        <AriaLiveRegion as={AccessibleHide}>{liveUpdateStr}</AriaLiveRegion>
      </FormField.Field>
    </FormField>
  );
};
`;function F(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...w(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Guides/Accessibility/ARIA Live Regions",component:m}),`
`,e.jsx(t.h1,{id:"aria-live-regions",children:"ARIA Live Regions"}),`
`,e.jsxs(t.p,{children:["These examples are provided to demonstrate a variety of different use cases for the ",e.jsx(t.code,{children:"AriaLiveRegion"}),`
component. For the full experience, get started by first turning on your favorite screen reading
software. On Windows, we recommend the open source
`,e.jsx(t.a,{href:"https://www.nvaccess.org/download/",rel:"nofollow",children:"NVDA (Non-Visual Desktop Access)"}),` software, or
`,e.jsx(t.a,{href:"https://support.freedomscientific.com/Downloads/JAWS",rel:"nofollow",children:"JAWS (Job Access With Speech)"}),` if you have
purchased a license. MacOS and iOS include VoiceOver, which can be turned on in your settings.`]}),`
`,e.jsx(t.p,{children:`Live regions work by designating specific DOM nodes for screen readers to monitor for any content
updates inside the node. When an update occurs, screen readers will announce the update to users in
real time, based on a few rules:`}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"polite"})," will “politely” wait for users to finish what they are doing before announcing an update"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"assertive"})," will interrupt what users are doing (or reading) by immediately announcing an update"]}),`
`]}),`
`,e.jsx(t.h3,{id:"caution-dont-get-carried-away",children:"CAUTION: Don't get carried away"}),`
`,e.jsx(t.p,{children:"Key things to understand about live regions:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:`A live region update will only be announced once. Users are unable to repeat them or re-examine
them if the announcement was not understood.`}),`
`,e.jsx(t.li,{children:`Users may be able to pause a live region announcement, but they cannot prevent a live region
announcement from occurring. Sending frequent, repetitive, or simply too much information to a
live region can be very disruptive to users.`}),`
`,e.jsx(t.li,{children:`Users cannot act on, or navigate to, a live region. Live regions must only contain plain text.
(No images, links, buttons, or other input.)`}),`
`,e.jsx(t.li,{children:`Support for live regions is limited across platforms, browsers, and screen reader software. Real
time announcements may not be perfectly reliable.`}),`
`]}),`
`,e.jsx(t.h2,{id:"visible-live-regions",children:"Visible Live Regions"}),`
`,e.jsx(t.p,{children:`Live regions can be applied to dynamic text on the UI. When the dynamic text is updated, screen
readers can describe the text update in live time as it occurs. In the example below, type text into
the input field and activate the "Send Message" button. Listen and observe the screen reader
automatically announce the text update.`}),`
`,e.jsx(d,{code:T}),`
`,e.jsx(t.h2,{id:"hidden-live-regions",children:"Hidden Live Regions"}),`
`,e.jsx(t.p,{children:`Live regions don't need to be visible UI text, they can be used to assist the non-visual listening
experience when moving the keyboard focus to a new element on screen isn't feasible.`}),`
`,e.jsx(d,{code:I}),`
`,e.jsx(t.h2,{id:"filtering-lists-with-a-live-status",children:"Filtering lists with a live status"}),`
`,e.jsx(t.p,{children:`In this example, a live region is applied to a short UI text describing the number of items shown in
the list. As you type characters into the input, listen for the screen reader to automatically
describe how many items in the list are shown.`}),`
`,e.jsx(d,{code:C}),`
`,e.jsxs(t.h2,{id:"debouncing-an-arialiveregion-textarea-with-character-limit",children:["Debouncing an ",e.jsx(t.code,{children:"AriaLiveRegion"}),": ",e.jsx(t.code,{children:"TextArea"})," with character limit"]}),`
`,e.jsx(t.p,{children:`Using a live region to announce the character count of a text area can help screen reader users
track their progress. However, announcing on every keystroke would be extremely disruptive—imagine
hearing "5 of 200 characters... 6 of 200 characters... 7 of 200 characters" for each letter typed!
In this example, we've implemented debouncing to wait 2 seconds after the user stops typing before
announcing the count.`}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Turn on a screen reader for this experience."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Used the ",e.jsx(t.code,{children:"as={AccessibleHide}"})," prop to hide the live region from view with CSS"]}),`
`,e.jsx(t.li,{children:"The live region will only update when a 2 second timer expires after the last keystroke"}),`
`,e.jsx(t.li,{children:`If users have reached the maximum number of characters, the live region will update immediately to
inform users that they have reached the limit`}),`
`,e.jsx(t.li,{children:"The live region will be cleared on blur events when users leave the field"}),`
`]}),`
`,e.jsx(d,{code:M})]})}function St(n={}){const{wrapper:t}={...w(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(F,{...n})}):F(n)}export{St as default};
