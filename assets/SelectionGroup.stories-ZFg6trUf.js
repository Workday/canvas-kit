import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as T}from"./index-3YbjYt95.js";import{ae as W}from"./index-S9heEjDB.js";import{E as n,c as M}from"./union-CGwT1W6h.js";import{S as R}from"./Specifications-DBht-23B.js";import{S as i}from"./SelectionGroup-C9u1YtGu.js";import{e as b}from"./index-IfJi-UCQ.js";import{F as r}from"./FormField-BXVS88YR.js";import{B as y}from"./TypeLevelComponents-C6i28M72.js";import{g as s}from"./index-C_4iH04t.js";import"./iframe-S3lnlYF6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-cR52np-F.js";import"./Svg-DFTRPJbR.js";import"./px2rem-C0KbprIx.js";import"./components-DZ7gcnmf.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-C6NFPG1W.js";import"./Text-Dq1Khk-W.js";import"./mergeStyles-BP16ssCo.js";import"./Box-B7TbbpGF.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-8HjEV6uK.js";import"./grid-DRnqgMjx.js";import"./cornerShape-BGmLOcIR.js";import"./Card-pug6xZRz.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-BronfvHJ.js";import"./Hyperlink-DU4GTsRr.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BL-2qZhc.js";import"./BaseButton-2zF5edCR.js";import"./Button-B_EzzA5D.js";import"./lerna-aI6qZ1Pt.js";import"./CanvasProvider-CpK17MWY.js";import"./index-kj8ZfNNN.js";import"./Tooltip-BNsvzMEy.js";import"./useTooltip-8i7Cvrt6.js";import"./getTransformFromPlacement-poA3VaOa.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-A5y8RNhV.js";import"./Popper-BDxfDxqg.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BebqiWQV.js";import"./ColorPicker-DLxyxiLV.js";import"./ColorInput-esCkCWDf.js";import"./check-small-BqSDQIle.js";import"./TextInput-BGtphxVN.js";import"./types-DXdjelYI.js";import"./check-Ds6vsrAM.js";import"./Expandable-CLnd3WvE.js";import"./Avatar-BtCXASBk.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DUa_iSsH.js";import"./Popup-CV8ldnuW.js";import"./x-B1faap_l.js";import"./usePopupTarget-CS4HpMJ7.js";import"./useInitialFocus-_tj4wGMI.js";import"./useReturnFocus-DPvPMlN0.js";import"./useFocusRedirect-C1VGxkGF.js";import"./Breadcrumbs-BTFqkqg8.js";import"./useOverflowListItemMeasure-CKlONU9D.js";import"./useListItemRegister-nqCV-JIK.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DmvIlmjb.js";import"./OverflowTooltip-Dub9MCHf.js";import"./useListItemRovingFocus-1AH9fBkM.js";import"./useListItemSelect-Deg3rTQQ.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BnWTTXkN.js";import"./Flex-CMmK1k0_.js";import"./Table-DzmDGUvd.js";import"./square-CipQDLeF.js";const G=()=>e.jsx(i,{mode:"single",children:e.jsxs(i.List,{"aria-label":"Preferred contact method (select one)",children:[e.jsx(i.Item,{"data-id":"email",children:"Email"}),e.jsx(i.Item,{"data-id":"phone",children:"Phone"}),e.jsx(i.Item,{"data-id":"text",children:"Text Message"})]})});G.__RAW__=`import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const Basic = () => (
  <SelectionGroup mode="single">
    <SelectionGroup.List aria-label="Preferred contact method (select one)">
      <SelectionGroup.Item data-id="email">Email</SelectionGroup.Item>
      <SelectionGroup.Item data-id="phone">Phone</SelectionGroup.Item>
      <SelectionGroup.Item data-id="text">Text Message</SelectionGroup.Item>
    </SelectionGroup.List>
  </SelectionGroup>
);
`;const w=()=>{const[o,t]=b.useState(["deep-dish"]);return e.jsxs(r,{error:"caution",as:"fieldset",children:[e.jsx(r.Label,{as:"legend",children:"Select Your Pizza Crust (Select one)"}),e.jsx(r.Input,{as:i,mode:"single",selectedIds:o,onSelect:a=>t([a.id]),children:e.jsxs(i.List,{"aria-label":"Pizza crust options (select one)",children:[e.jsx(i.Item,{"data-id":"deep-dish",children:"Deep Dish"}),e.jsx(i.Item,{"data-id":"thin",children:"Thin"}),e.jsx(i.Item,{"data-id":"gluten-free",children:"Gluten Free"})]})}),e.jsx(r.Hint,{children:"Deep dish is an extra $2.99"})]})};w.__RAW__=`import React from 'react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Caution = () => {
  const [selected, setSelected] = React.useState(['deep-dish']);

  return (
    <FormField error="caution" as="fieldset">
      <FormField.Label as="legend">Select Your Pizza Crust (Select one)</FormField.Label>
      <FormField.Input
        as={SelectionGroup}
        mode="single"
        selectedIds={selected}
        onSelect={data => setSelected([data.id])}
      >
        <SelectionGroup.List aria-label="Pizza crust options (select one)">
          <SelectionGroup.Item data-id="deep-dish">Deep Dish</SelectionGroup.Item>
          <SelectionGroup.Item data-id="thin">Thin</SelectionGroup.Item>
          <SelectionGroup.Item data-id="gluten-free">Gluten Free</SelectionGroup.Item>
        </SelectionGroup.List>
      </FormField.Input>
      <FormField.Hint>Deep dish is an extra $2.99</FormField.Hint>
    </FormField>
  );
};
`;const f=()=>e.jsx(i,{mode:"single",width:"column",initialSelectedIds:["option-a"],children:e.jsxs(i.List,{"aria-label":"Column width selection group (select one)",children:[e.jsx(i.Item,{"data-id":"option-a",children:"Option A with a longer descriptive label"}),e.jsx(i.Item,{"data-id":"option-b",children:"Option B with a longer descriptive label"}),e.jsx(i.Item,{"data-id":"option-c",children:"Option C with a longer descriptive label"})]})});f.__RAW__=`import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const ColumnWidth = () => (
  <SelectionGroup mode="single" width="column" initialSelectedIds={['option-a']}>
    <SelectionGroup.List aria-label="Column width selection group (select one)">
      <SelectionGroup.Item data-id="option-a">
        Option A with a longer descriptive label
      </SelectionGroup.Item>
      <SelectionGroup.Item data-id="option-b">
        Option B with a longer descriptive label
      </SelectionGroup.Item>
      <SelectionGroup.Item data-id="option-c">
        Option C with a longer descriptive label
      </SelectionGroup.Item>
    </SelectionGroup.List>
  </SelectionGroup>
);
`;const v=()=>e.jsx(i,{mode:"single",width:"content",initialSelectedIds:["short"],children:e.jsxs(i.List,{"aria-label":"Content width selection group (select one)",children:[e.jsx(i.Item,{"data-id":"short",children:"Short"}),e.jsx(i.Item,{"data-id":"medium-length",children:"Medium Length"}),e.jsx(i.Item,{"data-id":"a-much-longer-label",children:"A Much Longer Label"})]})});v.__RAW__=`import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const ContentWidth = () => (
  <SelectionGroup mode="single" width="content" initialSelectedIds={['short']}>
    <SelectionGroup.List aria-label="Content width selection group (select one)">
      <SelectionGroup.Item data-id="short">Short</SelectionGroup.Item>
      <SelectionGroup.Item data-id="medium-length">Medium Length</SelectionGroup.Item>
      <SelectionGroup.Item data-id="a-much-longer-label">A Much Longer Label</SelectionGroup.Item>
    </SelectionGroup.List>
  </SelectionGroup>
);
`;const F=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{size:"small",cs:{marginBlockEnd:s.xs},children:"The whole group is disabled"}),e.jsx(i,{mode:"single",disabled:!0,initialSelectedIds:["option-a"],children:e.jsxs(i.List,{"aria-label":"Fully disabled selection group (select one)",children:[e.jsx(i.Item,{"data-id":"option-a",children:"Option A"}),e.jsx(i.Item,{"data-id":"option-b",children:"Option B"}),e.jsx(i.Item,{"data-id":"option-c",children:"Option C"})]})}),e.jsx(y,{size:"small",cs:{marginBlockStart:s.md,marginBlockEnd:s.xs},children:"A single item is disabled"}),e.jsx(i,{mode:"single",nonInteractiveIds:["option-c"],initialSelectedIds:["option-a"],children:e.jsxs(i.List,{"aria-label":"Partially disabled selection group (select one)",children:[e.jsx(i.Item,{"data-id":"option-a",children:"Option A"}),e.jsx(i.Item,{"data-id":"option-b",children:"Option B"}),e.jsx(i.Item,{"data-id":"option-c",children:"Option C"})]})})]});F.__RAW__=`import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const Disabled = () => (
  <>
    <BodyText size="small" cs={{marginBlockEnd: system.gap.xs}}>
      The whole group is disabled
    </BodyText>
    <SelectionGroup mode="single" disabled initialSelectedIds={['option-a']}>
      <SelectionGroup.List aria-label="Fully disabled selection group (select one)">
        <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-b">Option B</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
      </SelectionGroup.List>
    </SelectionGroup>

    <BodyText size="small" cs={{marginBlockStart: system.gap.md, marginBlockEnd: system.gap.xs}}>
      A single item is disabled
    </BodyText>
    <SelectionGroup
      mode="single"
      nonInteractiveIds={['option-c']}
      initialSelectedIds={['option-a']}
    >
      <SelectionGroup.List aria-label="Partially disabled selection group (select one)">
        <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-b">Option B</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
      </SelectionGroup.List>
    </SelectionGroup>
  </>
);
`;const k=()=>e.jsx(i,{mode:"single",width:"equal",initialSelectedIds:["short"],children:e.jsxs(i.List,{"aria-label":"Equal width selection group (select one)",children:[e.jsx(i.Item,{"data-id":"short",children:"Short"}),e.jsx(i.Item,{"data-id":"medium-length",children:"Medium Length"}),e.jsx(i.Item,{"data-id":"a-much-longer-label",children:"A Much Longer Label"})]})});k.__RAW__=`import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const EqualWidth = () => (
  <SelectionGroup mode="single" width="equal" initialSelectedIds={['short']}>
    <SelectionGroup.List aria-label="Equal width selection group (select one)">
      <SelectionGroup.Item data-id="short">Short</SelectionGroup.Item>
      <SelectionGroup.Item data-id="medium-length">Medium Length</SelectionGroup.Item>
      <SelectionGroup.Item data-id="a-much-longer-label">A Much Longer Label</SelectionGroup.Item>
    </SelectionGroup.List>
  </SelectionGroup>
);
`;const L=()=>{const[o,t]=b.useState([]);return e.jsxs(r,{error:"error",as:"fieldset",children:[e.jsx(r.Label,{as:"legend",children:"Select Your Pizza Crust (Select one)"}),e.jsx(r.Input,{as:i,mode:"single",selectedIds:o,onSelect:a=>t([a.id]),children:e.jsxs(i.List,{"aria-label":"Pizza crust options (select one)",children:[e.jsx(i.Item,{"data-id":"deep-dish",children:"Deep Dish"}),e.jsx(i.Item,{"data-id":"thin",children:"Thin"}),e.jsx(i.Item,{"data-id":"gluten-free",children:"Gluten Free"})]})}),e.jsx(r.Hint,{children:"Please select a crust to continue"})]})};L.__RAW__=`import React from 'react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Error = () => {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <FormField error="error" as="fieldset">
      <FormField.Label as="legend">Select Your Pizza Crust (Select one)</FormField.Label>
      <FormField.Input
        as={SelectionGroup}
        mode="single"
        selectedIds={selected}
        onSelect={data => setSelected([data.id])}
      >
        <SelectionGroup.List aria-label="Pizza crust options (select one)">
          <SelectionGroup.Item data-id="deep-dish">Deep Dish</SelectionGroup.Item>
          <SelectionGroup.Item data-id="thin">Thin</SelectionGroup.Item>
          <SelectionGroup.Item data-id="gluten-free">Gluten Free</SelectionGroup.Item>
        </SelectionGroup.List>
      </FormField.Input>
      <FormField.Hint>Please select a crust to continue</FormField.Hint>
    </FormField>
  );
};
`;const _=()=>{const[o,t]=b.useState(["monday"]),a=j=>{t(I=>I.includes(j.id)?I.filter(A=>A!==j.id):I.concat(j.id))};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{as:"fieldset",children:[e.jsx(r.Label,{as:"legend",children:"Available Days (Select all that apply)"}),e.jsx(r.Input,{as:i,mode:"multiple",selectedIds:o,onSelect:a,children:e.jsxs(i.List,{"aria-label":"Available days (select all that apply)",children:[e.jsx(i.Item,{"data-id":"monday",children:"Monday"}),e.jsx(i.Item,{"data-id":"tuesday",children:"Tuesday"}),e.jsx(i.Item,{"data-id":"wednesday",children:"Wednesday"}),e.jsx(i.Item,{"data-id":"thursday",children:"Thursday"}),e.jsx(i.Item,{"data-id":"friday",children:"Friday"})]})})]}),e.jsxs(y,{size:"small",cs:{marginBlockStart:s.md},children:["Selected: ",o.join(", ")||"None"]})]})};_.__RAW__=`import React from 'react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const MultiSelect = () => {
  const [selected, setSelected] = React.useState<string[]>(['monday']);

  const handleSelect = (data: {id: string}) => {
    setSelected(previous =>
      previous.includes(data.id) ? previous.filter(id => id !== data.id) : previous.concat(data.id)
    );
  };

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Available Days (Select all that apply)</FormField.Label>
        <FormField.Input
          as={SelectionGroup}
          mode="multiple"
          selectedIds={selected}
          onSelect={handleSelect}
        >
          <SelectionGroup.List aria-label="Available days (select all that apply)">
            <SelectionGroup.Item data-id="monday">Monday</SelectionGroup.Item>
            <SelectionGroup.Item data-id="tuesday">Tuesday</SelectionGroup.Item>
            <SelectionGroup.Item data-id="wednesday">Wednesday</SelectionGroup.Item>
            <SelectionGroup.Item data-id="thursday">Thursday</SelectionGroup.Item>
            <SelectionGroup.Item data-id="friday">Friday</SelectionGroup.Item>
          </SelectionGroup.List>
        </FormField.Input>
      </FormField>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: {selected.join(', ') || 'None'}
      </BodyText>
    </>
  );
};
`;const C=()=>e.jsx("div",{dir:"rtl",children:e.jsx(i,{mode:"single",initialSelectedIds:["option-b"],children:e.jsxs(i.List,{"aria-label":"اختر واحدا",children:[e.jsx(i.Item,{"data-id":"option-a",children:"الخيار أ"}),e.jsx(i.Item,{"data-id":"option-b",children:"الخيار ب"}),e.jsx(i.Item,{"data-id":"option-c",children:"الخيار ج"})]})})});C.__RAW__=`import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const RTL = () => (
  <div dir="rtl">
    <SelectionGroup mode="single" initialSelectedIds={['option-b']}>
      <SelectionGroup.List aria-label="اختر واحدا">
        <SelectionGroup.Item data-id="option-a">الخيار أ</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-b">الخيار ب</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-c">الخيار ج</SelectionGroup.Item>
      </SelectionGroup.List>
    </SelectionGroup>
  </div>
);
`;const E=()=>{const[o,t]=b.useState("email");return e.jsxs(e.Fragment,{children:[e.jsxs(r,{as:"fieldset",children:[e.jsx(r.Label,{as:"legend",children:"Preferred Contact Method (Select one)"}),e.jsx(r.Input,{as:i,mode:"single",selectedIds:[o],onSelect:a=>t(a.id),children:e.jsxs(i.List,{"aria-label":"Preferred contact method (select one)",children:[e.jsx(i.Item,{"data-id":"email",children:"Email"}),e.jsx(i.Item,{"data-id":"phone",children:"Phone"}),e.jsx(i.Item,{"data-id":"text",children:"Text Message"})]})})]}),e.jsxs(y,{size:"small",cs:{marginBlockStart:s.md},children:["Selected: ",o]})]})};E.__RAW__=`import React from 'react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const SingleSelect = () => {
  const [selected, setSelected] = React.useState('email');

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Preferred Contact Method (Select one)</FormField.Label>
        <FormField.Input
          as={SelectionGroup}
          mode="single"
          selectedIds={[selected]}
          onSelect={data => setSelected(data.id)}
        >
          <SelectionGroup.List aria-label="Preferred contact method (select one)">
            <SelectionGroup.Item data-id="email">Email</SelectionGroup.Item>
            <SelectionGroup.Item data-id="phone">Phone</SelectionGroup.Item>
            <SelectionGroup.Item data-id="text">Text Message</SelectionGroup.Item>
          </SelectionGroup.List>
        </FormField.Input>
      </FormField>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: {selected}
      </BodyText>
    </>
  );
};
`;function B(o){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...T(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(W,{of:P}),`
`,e.jsx(t.h1,{id:"canvas-kit-selection-group",children:"Canvas Kit Selection Group"}),`
`,e.jsxs(t.p,{children:[`Selection Group is a
`,e.jsx(t.a,{href:"/getting-started/for-developers/resources/compound-components/",children:"compound component"}),` that lets users
select one or more options from a predefined list using chip-style controls with a lightweight glyph
indicator.`]}),`
`,e.jsx(t.p,{children:`Reach for Selection Group instead of standard radio buttons or checkboxes when a larger, more
scannable tap target and a lighter visual footprint are preferred. It works best with roughly seven
or fewer options and short, concise labels.`}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-labs-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SelectionGroup"})," includes a container ",e.jsx(t.code,{children:"SelectionGroup"}),` component and the following subcomponents:
`,e.jsx(t.code,{children:"SelectionGroup.List"})," and ",e.jsx(t.code,{children:"SelectionGroup.Item"}),"."]}),`
`,e.jsx(n,{code:G}),`
`,e.jsx(t.h3,{id:"single-select",children:"Single Select"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:'mode="single"'}),` to allow only one selection at a time. Single-select groups use a circle glyph
and behave like a radio group: they have a single tab stop and arrow keys move both focus and
selection.`]}),`
`,e.jsx(n,{code:E}),`
`,e.jsx(t.h3,{id:"multi-select",children:"Multi Select"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:'mode="multiple"'}),` to allow more than one selection. Multi-select groups use a square glyph and
behave like a checkbox group, where every item is its own tab stop. The group label must state that
multiple selections are allowed.`]}),`
`,e.jsx(n,{code:_}),`
`,e.jsx(t.h3,{id:"width-variations",children:"Width Variations"}),`
`,e.jsx(t.p,{children:"All items within a group use the same sizing method — don't mix sizing methods within one group."}),`
`,e.jsx(t.h4,{id:"content-width",children:"Content Width"}),`
`,e.jsx(t.p,{children:"Each item is sized to its own label, so items within a group may differ in width."}),`
`,e.jsx(n,{code:v}),`
`,e.jsx(t.h4,{id:"equal-width",children:"Equal Width"}),`
`,e.jsx(t.p,{children:"Every item is sized to match the width of the longest label, so all items end up the same width."}),`
`,e.jsx(n,{code:k}),`
`,e.jsx(t.h4,{id:"column-width",children:"Column Width"}),`
`,e.jsx(t.p,{children:`Every item spans the full width of the column. Best for longer labels, or when the group is the
primary input on the page.`}),`
`,e.jsx(n,{code:f}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"disabled"})," prop on ",e.jsx(t.code,{children:"SelectionGroup"}),` to disable the entire group. To disable individual
items, pass their ids to `,e.jsx(t.code,{children:"nonInteractiveIds"})," so that keyboard navigation skips over them as well."]}),`
`,e.jsx(n,{code:F}),`
`,e.jsx(t.h3,{id:"error",children:"Error"}),`
`,e.jsxs(t.p,{children:[`Notification states apply to the whole group rather than to individual items. Wrapping the group in
a `,e.jsx(t.code,{children:"FormField"})," with ",e.jsx(t.code,{children:'error="error"'}),` applies the error state and associates the hint text with the
group. This is the recommended approach, because `,e.jsx(t.code,{children:"FormField"}),` also renders the visible hint text,
sets `,e.jsx(t.code,{children:"aria-invalid"}),", and points the group's ",e.jsx(t.code,{children:"aria-describedby"})," at that text."]}),`
`,e.jsxs(t.p,{children:["You can set ",e.jsx(t.code,{children:'error="error"'})," directly on ",e.jsx(t.code,{children:"SelectionGroup"})," when you aren't using ",e.jsx(t.code,{children:"FormField"}),`, but the
prop only changes the group's border color. Color on its own is not an accessible way to
communicate a notification state, so pair it with your own visible text and pass that element's id
to `,e.jsx(t.code,{children:"aria-describedby"})," on ",e.jsx(t.code,{children:"SelectionGroup"}),"."]}),`
`,e.jsx(n,{code:L}),`
`,e.jsx(t.h3,{id:"caution",children:"Caution"}),`
`,e.jsx(n,{code:w}),`
`,e.jsx(t.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SelectionGroup"})," supports right-to-left languages when specified in the ",e.jsx(t.code,{children:"CanvasProvider"})," ",e.jsx(t.code,{children:"theme"}),` or
via the `,e.jsx(t.code,{children:"dir"})," attribute on a parent element."]}),`
`,e.jsx(n,{code:C}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Single-select groups render ",e.jsx(t.code,{children:'role="radiogroup"'})," with ",e.jsx(t.code,{children:'role="radio"'})," items and ",e.jsx(t.code,{children:"aria-checked"}),`, and
follow the `,e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",rel:"nofollow",children:"radio group keyboard pattern"}),`: one
tab stop for the group, with arrow keys moving focus and selection together.`]}),`
`,e.jsxs(t.li,{children:["Multi-select groups render ",e.jsx(t.code,{children:'role="group"'})," with ",e.jsx(t.code,{children:'role="checkbox"'})," items and ",e.jsx(t.code,{children:"aria-checked"}),`, and
follow the `,e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",rel:"nofollow",children:"checkbox keyboard pattern"}),`: every
item is in the tab order and `,e.jsx("kbd",{children:"Space"})," toggles it."]}),`
`,e.jsxs(t.li,{children:[`The icon always renders, in both modes and in both selected states. Selection is communicated by
the checkmark inside the icon `,e.jsx(t.em,{children:"and"})," a color change, never by color alone."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"aria-invalid"})," is only set on a single-select group. The ",e.jsx(t.code,{children:"group"}),` role that a multi-select group
renders does not allow the attribute, so a multi-select group communicates its error state
through the text referenced by `,e.jsx(t.code,{children:"aria-describedby"}),". Make sure that text names the problem."]}),`
`,e.jsxs(t.li,{children:["A group label is required. Provide it with ",e.jsx(t.code,{children:"aria-label"})," or ",e.jsx(t.code,{children:"aria-labelledby"}),` on
`,e.jsx(t.code,{children:"SelectionGroup.List"}),", or wrap the group in a ",e.jsx(t.code,{children:"FormField"}),` with a visible label. The label must
state the selection mode — "Select one" versus "Select all that apply" — so the mode is clear
before interacting.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(M,{name:"SelectionGroup",fileName:"/labs-react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(R,{file:"./cypress/component/SelectionGroup.spec.tsx",initialSpecs:{type:"file",name:"SelectionGroup",children:[{type:"describe",name:"SelectionGroup",children:[{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should not have any axe errors"}]},{type:"describe",name:"given the Basic story is rendered",children:[{type:"it",name:"should render a radiogroup"},{type:"it",name:"should start with nothing selected"},{type:"describe",name:"when an item is clicked",children:[{type:"it",name:"should select that item"},{type:"it",name:"should deselect the item when another is clicked"}]},{type:"describe",name:"when navigating with the keyboard",children:[{type:"it",name:"should move focus to the next item with the right arrow key"},{type:"it",name:"should move selection along with focus, as a radio group does"},{type:"it",name:"should have a single tab stop for the whole group"}]}]},{type:"describe",name:"given the MultiSelect story is rendered",children:[{type:"it",name:"should keep every item in the tab order, as a checkbox group does"},{type:"it",name:"should allow more than one item to be selected"},{type:"it",name:"should deselect an item when it is clicked again"}]},{type:"describe",name:"given the Disabled story is rendered",children:[{type:"it",name:"should disable every item when the whole group is disabled"},{type:"it",name:"should only disable the non-interactive item in a partially disabled group"}]},{type:"describe",name:"given the EqualWidth story is rendered",children:[{type:"it",name:"should render every item at the same width"}]},{type:"describe",name:"given the Error story is rendered",children:[{type:"it",name:"should mark the group as invalid"},{type:"it",name:"should associate the hint text with the group"}]}]}]},name:"SelectionGroup"})]})}function z(o={}){const{wrapper:t}={...T(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(B,{...o})}):B(o)}const P={title:"Labs/Selection Group",component:i,tags:["autodocs"],parameters:{docs:{page:z}}},l={render:G},d={render:E},c={render:_},p={render:v},m={render:k},h={render:f},u={render:F},x={render:L},S={render:w},g={render:C};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: SingleSelectExample
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: MultiSelectExample
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ContentWidthExample
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: EqualWidthExample
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ColumnWidthExample
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...g.parameters?.docs?.source}}};const gt=["Basic","SingleSelect","MultiSelect","ContentWidth","EqualWidth","ColumnWidth","Disabled","Error","Caution","RTL"];export{l as Basic,S as Caution,h as ColumnWidth,p as ContentWidth,u as Disabled,m as EqualWidth,x as Error,c as MultiSelect,g as RTL,d as SingleSelect,gt as __namedExportsOrder,P as default};
