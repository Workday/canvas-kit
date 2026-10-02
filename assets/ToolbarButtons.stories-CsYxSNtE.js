import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as y}from"./index-3YbjYt95.js";import{ae as S}from"./index-ByKK2ZVj.js";import{E as w,c as v}from"./union-D4Npie0B.js";import{S as F}from"./Specifications-DBoPG8kq.js";import{e as b}from"./index-IfJi-UCQ.js";import{u as x,n as B,a as C}from"./useListItemRegister-CkI4Pnda.js";import{b as L,i as M,u as D,l as R}from"./underline-u76_9Rbu.js";import{u as P,S as a}from"./Select-CDPxDDH7.js";import{T as j}from"./ToolbarIconButton-Bg9Ce9YI.js";import{u as H}from"./useUniqueId-BoA5684E.js";import{u as E,D as r}from"./Dialog-s4ClsmXe.js";import{g as K,b as N,d as U}from"./components-d5ekN04B.js";import{T as s}from"./Tooltip-DfuQ4oU_.js";import{c as k,h as _}from"./cs-CmRirKzJ.js";import{F as l}from"./FormField-Bet0BX5r.js";import{T}from"./TextInput-XGsJxoL2.js";import{P as A}from"./PrimaryButton-BgoAh-FZ.js";import{c as z,p as G,g as W}from"./index-jCBjnmNg.js";import{u as q}from"./Menu-Gxy5lB3g.js";import"./iframe-B4egJ2yK.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-sIhpLqFT.js";import"./Svg-BEkl6RqF.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-BH4xYMT4.js";import"./Text-B_9J6dtZ.js";import"./mergeStyles-BbM8eln0.js";import"./Box-BoBigmVy.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-D5XhsXiq.js";import"./grid-BMAUH4x5.js";import"./cornerShape-D4s9iH9i.js";import"./Card-C3YPv8PR.js";import"./ExternalHyperlink-BAP_ajky.js";import"./Hyperlink-DogG_b3k.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-Dq_wtC7v.js";import"./BaseButton-Cq0-Z1xK.js";import"./Button-Cji_lOEg.js";import"./lerna-Bw7zwFz3.js";import"./CanvasProvider-P3Lb2Rl1.js";import"./index-kj8ZfNNN.js";import"./TertiaryButton-DKUjcWbc.js";import"./TypeLevelComponents-DDShjP3S.js";import"./ColorPicker-Cl-khmes.js";import"./ColorInput-40B_w6YB.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-DjUS88Ki.js";import"./Avatar-C5xvvNZK.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Breadcrumbs-D3SRqBX_.js";import"./useOverflowListTarget-CCMwSaIK.js";import"./bundle.esm-C4XAbbi1.js";import"./useMount-CAK2BN3_.js";import"./OverflowTooltip-D-ZVvEYp.js";import"./useTooltip-D9NUSYDV.js";import"./getTransformFromPlacement-C0brky5f.js";import"./useCloseOnEscape-U3rCa1ez.js";import"./Popper-60Ht2BWw.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-EvLpNqv5.js";import"./Table-YrR-Iqiw.js";import"./Combobox-Cso3yZuR.js";import"./usePopupTarget-CiglE-au.js";import"./useComboboxInputConstrained-FvL0Npok.js";import"./InputGroup-C3iRkXZj.js";import"./x-small-Cfgu7dLY.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./Popup-jwoUED7-.js";import"./x-B1faap_l.js";import"./useInitialFocus-CLFzlfY2.js";import"./useReturnFocus-BiEDvkpe.js";import"./useFocusRedirect-CGyB5QUA.js";import"./types-DXdjelYI.js";import"./useListItemSelect-Buc4Eu3l.js";const X=[{id:"normal",text:"Normal Text"},{id:"heading-1",text:"Heading 1"},{id:"heading-2",text:"Heading 2"},{id:"heading-3",text:"Heading 3"}],O=k({display:"flex",alignItems:"center",gap:W.sm,padding:G.sm}),u=k({"&[aria-pressed='true'], &[aria-pressed='true']:hover, &[aria-pressed='true']:active, &[aria-pressed='true']:focus-visible":{borderColor:z.brand.border.primary}}),I=U(q,C),J=K("div")({displayName:"TextFormattingToolbar",modelHook:x})((t,e)=>o.jsx(e,{..._(t,O),role:"toolbar","aria-label":"Text Formatting"})),c=N(j)({displayName:"TextFormattingToolbar.Button",modelHook:x,elemPropsHook:I})((t,e)=>o.jsx(e,{...t})),Q=({toolbarModel:t})=>{const e=P({items:X,initialSelectedIds:["normal"]}),{onKeyDown:d,...p}=I(t,{"data-id":"text-style"});return o.jsxs(a,{model:e,children:[o.jsx(s,{title:"Text Style",children:o.jsx(a.Input,{...p,onKeyDown:n=>{e.state.visibility==="hidden"&&d(n)}})}),o.jsx(a.Popper,{children:o.jsx(a.Card,{children:o.jsx(a.List,{children:n=>o.jsx(a.Item,{children:n.text})})})})]})},g=()=>{const t=x({orientation:"horizontal",navigation:B}),e=H(),d=b.useRef(null),p=E({initialFocusRef:d}),[n,h]=b.useState({bold:!1,italic:!1,underline:!1});return o.jsxs(J,{model:t,children:[o.jsx(Q,{toolbarModel:t}),o.jsx(s,{title:"Bold",children:o.jsx(c,{cs:u,"data-id":"bold",icon:L,toggled:n.bold,onClick:()=>h(i=>({...i,bold:!i.bold}))})}),o.jsx(s,{title:"Italic",children:o.jsx(c,{cs:u,"data-id":"italic",icon:M,toggled:n.italic,onClick:()=>h(i=>({...i,italic:!i.italic}))})}),o.jsx(s,{title:"Underline",children:o.jsx(c,{cs:u,"data-id":"underline",icon:D,toggled:n.underline,onClick:()=>h(i=>({...i,underline:!i.underline}))})}),o.jsxs(r,{model:p,children:[o.jsx(s,{title:"Insert Link",children:o.jsx(r.Target,{as:c,id:e,"data-id":"link",icon:R})}),o.jsx(r.Popper,{children:o.jsxs(r.Card,{"aria-labelledby":e,children:[o.jsxs(r.Body,{children:[o.jsxs(l,{children:[o.jsx(l.Label,{children:"Link Text"}),o.jsx(l.Input,{as:T,ref:d})]}),o.jsxs(l,{children:[o.jsx(l.Label,{children:"URL"}),o.jsx(l.Input,{as:T,type:"url"})]})]}),o.jsxs(r.ButtonGroup,{children:[o.jsx(r.CloseButton,{children:"Cancel"}),o.jsx(r.CloseButton,{as:A,children:"Apply"})]})]})})]})]})};g.__RAW__=`import React from 'react';

import {
  PrimaryButton,
  ToolbarIconButton,
  ToolbarIconButtonProps,
} from '@workday/canvas-kit-react/button';
import {
  navigationManager,
  useListItemRegister,
  useListItemRovingFocus,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createContainer,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {CSProps, createStyles, handleCsProp} from '@workday/canvas-kit-styling';
import {boldIcon, italicsIcon, linkIcon, underlineIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const textStyles = [
  {id: 'normal', text: 'Normal Text'},
  {id: 'heading-1', text: 'Heading 1'},
  {id: 'heading-2', text: 'Heading 2'},
  {id: 'heading-3', text: 'Heading 3'},
];

const toolbarStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
  padding: system.padding.sm,
});

const toggledToolbarButtonStyles = createStyles({
  "&[aria-pressed='true'], &[aria-pressed='true']:hover, &[aria-pressed='true']:active, &[aria-pressed='true']:focus-visible":
    {
      borderColor: system.color.brand.border.primary,
    },
});

const useToolbarItem = composeHooks(useListItemRovingFocus, useListItemRegister);

const Toolbar = createContainer('div')({
  displayName: 'TextFormattingToolbar',
  modelHook: useListModel,
})<CSProps>((elemProps, Element) => {
  return (
    <Element
      {...handleCsProp(elemProps, toolbarStyles)}
      role="toolbar"
      aria-label="Text Formatting"
    />
  );
});

const ToolbarButton = createSubcomponent(ToolbarIconButton)({
  displayName: 'TextFormattingToolbar.Button',
  modelHook: useListModel,
  elemPropsHook: useToolbarItem,
})<ToolbarIconButtonProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});

const TextStyleSelect = ({toolbarModel}: {toolbarModel: ReturnType<typeof useListModel>}) => {
  const selectModel = useSelectModel({
    items: textStyles,
    initialSelectedIds: ['normal'],
  });
  const {onKeyDown: onToolbarKeyDown, ...toolbarItemProps} = useToolbarItem(toolbarModel, {
    'data-id': 'text-style',
  });

  return (
    <Select model={selectModel}>
      <Tooltip title="Text Style">
        <Select.Input
          {...toolbarItemProps}
          onKeyDown={event => {
            if (selectModel.state.visibility === 'hidden') {
              onToolbarKeyDown(event);
            }
          }}
        />
      </Tooltip>
      <Select.Popper>
        <Select.Card>
          <Select.List>{item => <Select.Item>{item.text}</Select.Item>}</Select.List>
        </Select.Card>
      </Select.Popper>
    </Select>
  );
};

export const TextFormattingToolbar = () => {
  const toolbarModel = useListModel({
    orientation: 'horizontal',
    navigation: navigationManager,
  });
  const linkButtonId = useUniqueId();
  const linkTextRef = React.useRef<HTMLInputElement>(null);
  const dialogModel = useDialogModel({initialFocusRef: linkTextRef});
  const [formats, setFormats] = React.useState({
    bold: false,
    italic: false,
    underline: false,
  });

  return (
    <Toolbar model={toolbarModel}>
      <TextStyleSelect toolbarModel={toolbarModel} />
      <Tooltip title="Bold">
        <ToolbarButton
          cs={toggledToolbarButtonStyles}
          data-id="bold"
          icon={boldIcon}
          toggled={formats.bold}
          onClick={() => setFormats(formats => ({...formats, bold: !formats.bold}))}
        />
      </Tooltip>
      <Tooltip title="Italic">
        <ToolbarButton
          cs={toggledToolbarButtonStyles}
          data-id="italic"
          icon={italicsIcon}
          toggled={formats.italic}
          onClick={() => setFormats(formats => ({...formats, italic: !formats.italic}))}
        />
      </Tooltip>
      <Tooltip title="Underline">
        <ToolbarButton
          cs={toggledToolbarButtonStyles}
          data-id="underline"
          icon={underlineIcon}
          toggled={formats.underline}
          onClick={() => setFormats(formats => ({...formats, underline: !formats.underline}))}
        />
      </Tooltip>
      <Dialog model={dialogModel}>
        <Tooltip title="Insert Link">
          <Dialog.Target as={ToolbarButton} id={linkButtonId} data-id="link" icon={linkIcon} />
        </Tooltip>
        <Dialog.Popper>
          <Dialog.Card aria-labelledby={linkButtonId}>
            <Dialog.Body>
              <FormField>
                <FormField.Label>Link Text</FormField.Label>
                <FormField.Input as={TextInput} ref={linkTextRef} />
              </FormField>
              <FormField>
                <FormField.Label>URL</FormField.Label>
                <FormField.Input as={TextInput} type="url" />
              </FormField>
            </Dialog.Body>
            <Dialog.ButtonGroup>
              <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              <Dialog.CloseButton as={PrimaryButton}>Apply</Dialog.CloseButton>
            </Dialog.ButtonGroup>
          </Dialog.Card>
        </Dialog.Popper>
      </Dialog>
    </Toolbar>
  );
};
`;function f(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...y(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(S,{of:Y}),`
`,o.jsx(e.h1,{id:"canvas-kit-toolbar",children:"Canvas Kit Toolbar"}),`
`,o.jsxs(e.p,{children:[`Canvas Kit does not ship a Toolbar component. Build one by composing
`,o.jsx(e.a,{href:"?path=/docs/components-buttons--docs",children:o.jsx(e.code,{children:"ToolbarIconButton"})}),`,
`,o.jsx(e.a,{href:"?path=/docs/components-inputs-select--docs",children:"Select"}),`,
`,o.jsx(e.a,{href:"?path=/docs/components-popups-tooltip--docs",children:"Tooltip"}),`, and
`,o.jsx(e.a,{href:"?path=/docs/components-popups-dialog--docs",children:"Dialog"}),` inside a group that uses the
`,o.jsx(e.a,{href:"?path=/docs/features-collections--docs",children:"collection system"})," for keyboard navigation."]}),`
`,o.jsxs(e.p,{children:[`The example below follows the
`,o.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/",rel:"nofollow",children:"W3C Toolbar pattern"}),`: one tab stop for the
group, and arrow keys to move between controls.`]}),`
`,o.jsx(e.h2,{id:"basic-example",children:"Basic Example"}),`
`,o.jsx(e.p,{children:"The Text Formatting toolbar is a horizontal group of five controls:"}),`
`,o.jsxs(e.ol,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.strong,{children:"Text Style"})," — a ",o.jsx(e.code,{children:"Select"}),` with Normal Text, Heading 1, Heading 2, and Heading 3. Normal Text
starts selected.`]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.strong,{children:"Bold, Italic, and Underline"})," — ",o.jsx(e.code,{children:"ToolbarIconButton"})," toggles. ",o.jsx(e.code,{children:"toggled"})," sets ",o.jsx(e.code,{children:"aria-pressed"}),`. The
example adds a brand border while a toggle is on, on top of the button's pressed background.`]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.strong,{children:"Insert Link"})," — a ",o.jsx(e.code,{children:"ToolbarIconButton"})," used as ",o.jsx(e.code,{children:"Dialog.Target"}),`. The dialog is non-modal and
contains Link Text and URL fields. Focus moves to Link Text when it opens.`]}),`
`]}),`
`,o.jsxs(e.p,{children:["Each control is the single child of a ",o.jsx(e.code,{children:"Tooltip"}),". The default tooltip type is ",o.jsx(e.code,{children:"label"}),", so the ",o.jsx(e.code,{children:"title"}),`
becomes that control's accessible name. Do not also set `,o.jsx(e.code,{children:"aria-label"})," on the control."]}),`
`,o.jsxs(e.p,{children:["The group itself is named with ",o.jsx(e.code,{children:'aria-label="Text Formatting"'})," on an element with ",o.jsx(e.code,{children:'role="toolbar"'}),"."]}),`
`,o.jsxs(e.p,{children:["Keyboard movement comes from ",o.jsx(e.code,{children:"useListModel"})," with ",o.jsx(e.code,{children:'orientation="horizontal"'}),` and
`,o.jsx(e.code,{children:"navigation={navigationManager}"}),". ",o.jsx(e.code,{children:"navigationManager"}),` stops at the first and last control instead of
wrapping. Each control registers with `,o.jsx(e.code,{children:"useListItemRovingFocus"})," and ",o.jsx(e.code,{children:"useListItemRegister"}),`, which
keeps a single tab stop and moves it with the arrow keys. Give every control a stable `,o.jsx(e.code,{children:"data-id"}),"."]}),`
`,o.jsxs(e.p,{children:["The Text Style ",o.jsx(e.code,{children:"Select"}),` has its own arrow-key behavior. Left and Right move through the toolbar only
while its menu is closed. While the menu is open, Left and Right do nothing, and Home and End move
within the menu.`]}),`
`,o.jsx(w,{code:g}),`
`,o.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"ToolbarIconButton"}),` is the icon button used inside the example. The toolbar container, roving tab
stop, and link dialog are composed in the example. They are not separate exported components.`]}),`
`,o.jsx(v,{name:"ToolbarIconButton",fileName:"/react/"}),`
`,o.jsx(e.h2,{id:"specifications",children:"Specifications"}),`
`,o.jsx(F,{file:"./cypress/component/Toolbar.spec.tsx",initialSpecs:{type:"file",name:"Toolbar",children:[{type:"describe",name:"Toolbar",children:[{type:"describe",name:"given the Text Formatting toolbar is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when focus is on the Text Style select",children:[{type:"it",name:"should move focus through the toolbar with the arrow keys"},{type:"describe",name:"when the down arrow key is pressed",children:[{type:"it",name:"should show the text style options"}]}]},{type:"describe",name:"when the Bold button is clicked",children:[{type:"it",name:"should toggle the button on"}]},{type:"describe",name:"when the Link button is clicked",children:[{type:"it",name:"should open the link dialog with its text fields"}]}]}]}]},name:"Toolbar"})]})}function V(t={}){const{wrapper:e}={...y(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}const Y={title:"Components/Buttons/Toolbar",component:j,tags:["autodocs"],parameters:{ReadmePath:"react/button",docs:{page:V}}},m={render:g};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: TextFormattingToolbar
}`,...m.parameters?.docs?.source}}};const Pe=["TextFormatting"];export{m as TextFormatting,Pe as __namedExportsOrder,Y as default};
