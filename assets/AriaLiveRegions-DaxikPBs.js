import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as w}from"./index-3YbjYt95.js";import{ae as B}from"./index-DHWTzE-b.js";import{E as d}from"./union-D2wJ6UB9.js";import{e as l}from"./index-IfJi-UCQ.js";import{A as m}from"./AriaLiveRegion-CWuZfRzy.js";import{H as _,B as y}from"./TypeLevelComponents-Co8mkrwa.js";import{F as x}from"./Flex-BKzcw9XF.js";import{c as s}from"./cs-DvbI9OYs.js";import{F as i}from"./FormField-U6jJIaHC.js";import{T as v}from"./TextInput-nG1V2_dd.js";import{g as u,p as R,c as p,a as $}from"./index-CYsyLHR7.js";import{p as j}from"./px2rem-C0KbprIx.js";import{P as L}from"./PrimaryButton-_EBa_erW.js";import{T as A}from"./Text-8N36XMNq.js";import{c as U}from"./getTransformFromPlacement-Dk4LTPXM.js";import{A as k}from"./AccessibleHide-Cq2Hwwgv.js";import{T as D}from"./TextArea-_PK1Sadp.js";import"./iframe-DW6TaI9H.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./components-XIe_upcR.js";import"./StatusIndicator-vcmfDllK.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./Card-ywil38vv.js";import"./ExternalHyperlink-D7iOffGf.js";import"./Hyperlink-Cmi71RJg.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-oNuQLwcg.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-Cp7fe3Zs.js";import"./lerna-j6nxiWIt.js";import"./CanvasProvider-CbBD4ERB.js";import"./Tooltip-De1KsO5U.js";import"./useTooltip-p8F4NfJ4.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./useUniqueId-DC-hMIDg.js";import"./TertiaryButton-DaDaXMfE.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-DLb8Wvti.js";import"./ColorInput-CnFM3Rd0.js";import"./check-small-CEmhQ7AS.js";import"./check-BG7HONvH.js";import"./Expandable-BA5P8o_t.js";import"./Avatar-GkuXop0D.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-a5nE6ygN.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-XwlCiuK9.js";import"./Popup-FGUZYXID.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-B7GfDsu7.js";import"./useInitialFocus-CouubvfO.js";import"./useReturnFocus-BgzhEoBI.js";import"./useFocusRedirect-ETf1Gakg.js";import"./Breadcrumbs-CIeTVgOV.js";import"./useOverflowListTarget-Esi-iaKN.js";import"./useListItemSelect-D10U8d3g.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Blawm5fT.js";import"./OverflowTooltip-B7jd-TXK.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-ZC-rbz82.js";import"./types-DXdjelYI.js";const f=["Apples","Oranges","Bananas","Lemons","Limes","Strawberries","Raspberries","Blackberries"],O=s({border:`${j(1)} solid ${p.brand.focus.caution.outer}`,backgroundColor:p.brand.surface.caution.strong,padding:R.xs}),W=s({paddingLeft:"0"}),V=s({listStyle:"none",paddingLeft:"0"}),N=s({gap:u.md});let g=f;const C=()=>{const[n,t]=l.useState("");function a(r){g=f.filter(o=>o.toUpperCase().indexOf(r.target.value.toUpperCase())>=0),t(r.target.value)}return e.jsxs(e.Fragment,{children:[e.jsxs(x,{cs:N,children:[e.jsx(_,{size:"small",children:"Fruits"}),e.jsx(m,{children:e.jsx(y,{size:"small",cs:O,children:`Showing ${g.length} of ${f.length}`})})]}),e.jsxs(i,{children:[e.jsx(i.Label,{children:"Filter Items:"}),e.jsx(i.Input,{as:v,value:n,onChange:a})]}),e.jsx("ul",{className:W,children:g.map(r=>e.jsx(y,{size:"small",as:"li",cs:V,children:r},r))})]})};C.__RAW__=`import React from 'react';

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
  paddingLeft: '0',
});

const listItemStyles = createStyles({
  listStyle: 'none',
  paddingLeft: '0',
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
`;const X=s({border:`${j(1)} solid ${p.brand.focus.caution.outer}`,backgroundColor:p.brand.surface.caution.strong,padding:R.md,display:"block",marginBlock:u.md,width:U.multiply($.xxl,7)}),z=s({gap:u.md,alignItems:"center"});let b="This is an ARIA Live Region!";const T=()=>{const[n,t]=l.useState("");function a(o){t(o.target.value)}function r(o){o.preventDefault(),b=n,t("")}return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx(A,{cs:X,children:b})}),e.jsxs(x,{as:"form","aria-label":"Visible Live Region",onSubmit:r,cs:z,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Type your message:"}),e.jsx(i.Input,{as:v,onChange:a,value:n})]}),e.jsx(L,{type:"submit",children:"Send Message"})]})]})};T.__RAW__=`import React from 'react';

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
`;let F="";const P=s({gap:u.md,alignItems:"center"}),I=()=>{const[n,t]=l.useState("");function a(o){t(o.target.value)}function r(o){o.preventDefault(),F=n,t("")}return e.jsxs(e.Fragment,{children:[e.jsxs(x,{as:"form","aria-label":"Hidden Live Region",onSubmit:r,cs:P,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Type your message:"}),e.jsx(i.Input,{as:v,onChange:a,value:n})]}),e.jsx(L,{type:"submit",children:"Send Message"})]}),e.jsx(m,{children:e.jsx(A,{as:k,children:F})})]})};I.__RAW__=`import React from 'react';

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
`;const c=200,G=2e3,M=()=>{const[n,t]=l.useState(""),[a,r]=l.useState(""),o=`${n.length} of ${c} characters`,E=h=>{t(h.target.value)},H=()=>{r("")};return l.useEffect(()=>{if(n.length===c){r(`Character limit reached. ${n.length} of ${c} characters`);return}const h=setTimeout(()=>{r(`${n.length} of ${c} characters`)},G);return()=>clearTimeout(h)},[n.length]),e.jsxs(i,{children:[e.jsx(i.Label,{children:"Comments"}),e.jsxs(i.Field,{children:[e.jsx(i.Input,{as:D,onChange:E,onBlur:H,value:n,maxLength:c}),e.jsx(i.Hint,{children:o}),e.jsx(m,{as:k,children:a})]})]})};M.__RAW__=`import React from 'react';

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
`;function S(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...w(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Guides/Accessibility/ARIA Live Regions",component:m}),`
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
`,e.jsx(d,{code:M})]})}function Rt(n={}){const{wrapper:t}={...w(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(S,{...n})}):S(n)}export{Rt as default};
