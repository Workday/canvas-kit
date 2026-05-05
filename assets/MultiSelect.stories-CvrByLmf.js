import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as Y}from"./index-3YbjYt95.js";import{ae as J}from"./index-BSRpa7hw.js";import{E as p}from"./union-Bq_fV67W.js";import{e as u,r as Q}from"./index-IfJi-UCQ.js";import{M as n,u as L}from"./MultiSelect-CRfXRAV4.js";import{F as o}from"./FormField-BfuouWYS.js";import{C as k}from"./CanvasProvider-D16Zuzp0.js";import{c as w}from"./cs-DvbI9OYs.js";import{p as P}from"./index-CYsyLHR7.js";import{p as Z,a as ee,s as te,b as ne,d as ie}from"./skip-DuPkin2p.js";import{u as X}from"./useComboboxLoader-BwVUKkBI.js";import{S as U}from"./Menu-CJ_9ofNm.js";import{F as B}from"./Flex-BkMcjleh.js";import{S as z}from"./SecondaryButton-Bx4f9n21.js";import{P as re}from"./PrimaryButton-Df7swaDK.js";import"./iframe-8Z9hyj8f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./px2rem-C0KbprIx.js";import"./components-BLZqCckY.js";import"./StatusIndicator-U7ucHK-B.js";import"./Text-7hsxTSvc.js";import"./mergeStyles-CkJ8NvhI.js";import"./Box-CWkwzNZI.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-dYq3mHEV.js";import"./useConstant-CUZppmaV.js";import"./flex-BpVYzPsg.js";import"./grid-COFwODL4.js";import"./Card-CYT1E1UX.js";import"./ExternalHyperlink-BSF-vMXy.js";import"./Hyperlink-p5yKhX3z.js";import"./external-link-Bfm4m86M.js";import"./lerna-BUmYmoMg.js";import"./Tooltip-BudaSkJa.js";import"./useTooltip-C8VhxzUk.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CMzgaKMd.js";import"./Popper-C7XE30xe.js";import"./TertiaryButton-OzUplWoq.js";import"./BaseButton-CGvKmIsu.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-C6qfAYgQ.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-A6AqS-F4.js";import"./ColorPicker-Cj3xwnjd.js";import"./ColorInput-BG1qZf2V.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-m8J5Siyi.js";import"./types-DXdjelYI.js";import"./check-BG7HONvH.js";import"./Expandable-D9HGP5Kq.js";import"./Avatar-Czgyc0aL.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-E1OLV4AN.js";import"./Popup-og1nacMu.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-Dr3aQv5b.js";import"./useInitialFocus-Div5K5su.js";import"./useReturnFocus-aYhb8KiC.js";import"./useFocusRedirect-C0Fm-5_Z.js";import"./Breadcrumbs-DopxVY5N.js";import"./useOverflowListTarget-B6jukdWw.js";import"./useListItemSelect-Byv0QwGY.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-fVEU-mtQ.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-BLIPrW4Z.js";import"./Combobox-BGL4mWtr.js";import"./Pill-DKLI761q.js";import"./plus-BSkOQ6An.js";import"./x-small-BxvQm8EX.js";import"./InputGroup-DJWrZgsR.js";import"./search-DC_v2gTw.js";import"./caret-down-small-CQgB4GlK.js";import"./useComboboxInputConstrained-BrqON3w-.js";import"./useListLoader-DR-o4XEV.js";const oe=["Cheese","Olives","Onions","Pepperoni","Peppers"],K=()=>e.jsx(e.Fragment,{children:e.jsx(n,{items:oe,initialSelectedIds:["Olives","Onions","Pepperoni"],children:e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Toppings"}),e.jsx(o.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:i=>e.jsx(n.Item,{"data-id":i,children:e.jsx(n.Item.Text,{children:i})})})})})]})})});K.__RAW__=`import React from 'react';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {FormField} from '@workday/canvas-kit-react/form-field';

const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];

export const Basic = () => {
  return (
    <>
      <MultiSelect items={items} initialSelectedIds={['Olives', 'Onions', 'Pepperoni']}>
        <FormField orientation="horizontalStart">
          <FormField.Label>Toppings</FormField.Label>
          <FormField.Input
            as={MultiSelect.Input}
            placeholder="Select Multiple"
            removeLabel="Remove"
          />
          <MultiSelect.Popper>
            <MultiSelect.Card>
              <MultiSelect.List>
                {item => (
                  <MultiSelect.Item data-id={item}>
                    <MultiSelect.Item.Text>{item}</MultiSelect.Item.Text>
                  </MultiSelect.Item>
                )}
              </MultiSelect.List>
            </MultiSelect.Card>
          </MultiSelect.Popper>
        </FormField>
      </MultiSelect>
    </>
  );
};
`;const le=["Cheese","Olives","Onions","Pepperoni","Peppers"],T=()=>e.jsx(e.Fragment,{children:e.jsx(n,{items:le,initialSelectedIds:["Olives","Onions","Pepperoni"],children:e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Toppings"}),e.jsx(o.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove",disabled:!0}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:i=>e.jsx(n.Item,{"data-id":i,children:e.jsx(n.Item.Text,{children:i})})})})})]})})});T.__RAW__=`import React from 'react';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {FormField} from '@workday/canvas-kit-react/form-field';

const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];

export const Disabled = () => {
  return (
    <>
      <MultiSelect items={items} initialSelectedIds={['Olives', 'Onions', 'Pepperoni']}>
        <FormField orientation="horizontalStart">
          <FormField.Label>Toppings</FormField.Label>
          <FormField.Input
            as={MultiSelect.Input}
            placeholder="Select Multiple"
            removeLabel="Remove"
            disabled
          />
          <MultiSelect.Popper>
            <MultiSelect.Card>
              <MultiSelect.List>
                {item => (
                  <MultiSelect.Item data-id={item}>
                    <MultiSelect.Item.Text>{item}</MultiSelect.Item.Text>
                  </MultiSelect.Item>
                )}
              </MultiSelect.List>
            </MultiSelect.Card>
          </MultiSelect.Popper>
        </FormField>
      </MultiSelect>
    </>
  );
};
`;const se=["Cheese","Olives","Onions","Pepperoni","Peppers"],R=()=>{const i=L({items:se,initialSelectedIds:[]});return e.jsx(e.Fragment,{children:e.jsx(n,{model:i,children:e.jsxs(o,{orientation:"horizontalStart",error:i.state.selectedIds.length<1?"error":i.state.selectedIds.length>3?"caution":void 0,children:[e.jsx(o.Label,{children:"Toppings"}),e.jsxs(o.Field,{children:[e.jsx(o.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:t=>e.jsx(n.Item,{"data-id":t,children:e.jsx(n.Item.Text,{children:t})})})})}),e.jsx(o.Hint,{children:i.state.selectedIds.length<1?"Select at least one topping.":i.state.selectedIds.length>3?"More than 3 toppings cost extra.":void 0})]})]})})})};R.__RAW__=`import React from 'react';

import {MultiSelect, useMultiSelectModel} from '@workday/canvas-kit-preview-react/multi-select';
import {FormField} from '@workday/canvas-kit-react/form-field';

const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];

export const Error = () => {
  const model = useMultiSelectModel({
    items,
    initialSelectedIds: [],
  });
  return (
    <>
      <MultiSelect model={model}>
        <FormField
          orientation="horizontalStart"
          error={
            model.state.selectedIds.length < 1
              ? 'error'
              : model.state.selectedIds.length > 3
                ? 'caution'
                : undefined
          }
        >
          <FormField.Label>Toppings</FormField.Label>
          <FormField.Field>
            <FormField.Input
              as={MultiSelect.Input}
              placeholder="Select Multiple"
              removeLabel="Remove"
            />
            <MultiSelect.Popper>
              <MultiSelect.Card>
                <MultiSelect.List>
                  {item => (
                    <MultiSelect.Item data-id={item}>
                      <MultiSelect.Item.Text>{item}</MultiSelect.Item.Text>
                    </MultiSelect.Item>
                  )}
                </MultiSelect.List>
              </MultiSelect.Card>
            </MultiSelect.Popper>

            <FormField.Hint>
              {model.state.selectedIds.length < 1
                ? 'Select at least one topping.'
                : model.state.selectedIds.length > 3
                  ? 'More than 3 toppings cost extra.'
                  : undefined}
            </FormField.Hint>
          </FormField.Field>
        </FormField>
      </MultiSelect>
    </>
  );
};
`;const ae=w({padding:P.md}),A=[{id:"1",text:"Cheese"},{id:"2",text:"Olives"},{id:"3",text:"Onions"},{id:"4",text:"Pepperoni"},{id:"5",text:"Peppers"}],O=()=>{const[i,t]=u.useState(""),[s,d]=u.useState("");return e.jsx(k,{children:e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:r=>{console.log("form submitted"),r.preventDefault()},children:e.jsx("main",{className:ae,children:e.jsx(n,{items:A,getId:r=>r.id,getTextValue:r=>r.text,children:e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Toppings"}),e.jsx(o.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove",name:"toppings",onChange:r=>{const a=r.currentTarget.value;t(a),d(a.split(", ").map(l=>A.find(c=>c.id===l)?.text||"Not Found").join(", "))},value:i}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{"data-id":r.id,children:e.jsx(n.Item.Text,{children:r.text})})})})})]})})})}),e.jsxs("div",{children:["Selected IDs: ",i]}),e.jsxs("div",{children:["Selected Labels: ",s]})]})})};O.__RAW__=`import React from 'react';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const mainContentStyles = createStyles({
  padding: system.padding.md,
});

const items = [
  {id: '1', text: 'Cheese'},
  {id: '2', text: 'Olives'},
  {id: '3', text: 'Onions'},
  {id: '4', text: 'Pepperoni'},
  {id: '5', text: 'Peppers'},
];

export const Complex = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');
  return (
    <CanvasProvider>
      <>
        <form
          onSubmit={e => {
            console.log('form submitted');
            e.preventDefault();
          }}
        >
          <main className={mainContentStyles}>
            <MultiSelect items={items} getId={i => i.id} getTextValue={i => i.text}>
              <FormField orientation="horizontalStart">
                <FormField.Label>Toppings</FormField.Label>
                <FormField.Input
                  as={MultiSelect.Input}
                  placeholder="Select Multiple"
                  removeLabel="Remove"
                  name="toppings"
                  onChange={e => {
                    const value = e.currentTarget.value;
                    setValue(value);
                    setLabel(
                      value
                        .split(', ')
                        .map(item => items.find(i => i.id === item)?.text || 'Not Found')
                        .join(', ')
                    );
                  }}
                  value={value}
                />
                <MultiSelect.Popper>
                  <MultiSelect.Card>
                    <MultiSelect.List>
                      {item => (
                        <MultiSelect.Item data-id={item.id}>
                          <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                        </MultiSelect.Item>
                      )}
                    </MultiSelect.List>
                  </MultiSelect.Card>
                </MultiSelect.Popper>
              </FormField>
            </MultiSelect>
          </main>
        </form>
        <div>Selected IDs: {value}</div>
        <div>Selected Labels: {label}</div>
      </>
    </CanvasProvider>
  );
};
`;const ce=[{id:"1",text:"Pause",icon:Z},{id:"2",text:"Play",icon:ee},{id:"3",text:"Skip",icon:te},{id:"4",text:"Previous",icon:ne}],_=()=>e.jsx(n,{items:ce,children:e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Controls"}),e.jsx(o.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:i=>e.jsxs(n.Item,{"data-id":i.id,children:[e.jsx(n.Item.Icon,{icon:i.icon}),e.jsx(n.Item.Text,{children:i.text}),e.jsx(n.Item.Icon,{icon:ie})]})})})})]})});_.__RAW__=`import React from 'react';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {
  dashboardGridFillIcon,
  pauseIcon,
  playIcon,
  previousIcon,
  skipIcon,
} from '@workday/canvas-system-icons-web';

const items = [
  {id: '1', text: 'Pause', icon: pauseIcon},
  {id: '2', text: 'Play', icon: playIcon},
  {id: '3', text: 'Skip', icon: skipIcon},
  {id: '4', text: 'Previous', icon: previousIcon},
];

export const Icons = () => {
  return (
    <MultiSelect items={items}>
      <FormField orientation="horizontalStart">
        <FormField.Label>Controls</FormField.Label>
        <FormField.Input
          as={MultiSelect.Input}
          placeholder="Select Multiple"
          removeLabel="Remove"
        />
        <MultiSelect.Popper>
          <MultiSelect.Card>
            <MultiSelect.List>
              {item => (
                <MultiSelect.Item data-id={item.id}>
                  <MultiSelect.Item.Icon icon={item.icon} />
                  <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                  <MultiSelect.Item.Icon icon={dashboardGridFillIcon} />
                </MultiSelect.Item>
              )}
            </MultiSelect.List>
          </MultiSelect.Card>
        </MultiSelect.Popper>
      </FormField>
    </MultiSelect>
  );
};
`;const de=w({padding:P.md}),N=["Red","Blue","Purple","Green","Pink"],V=["Apple","Orange","Banana","Grape","Lemon","Lime"],me=Array(1e3).fill("").map((i,t)=>({id:`${t+1}`,text:`${N[t%N.length]} ${V[t%V.length]} ${t+1}`})),$=()=>{const[i,t]=u.useState(""),{model:s,loader:d}=X({total:0,initialSelectedIds:["3","5"],pageSize:500,async load({pageNumber:r,pageSize:a,filter:l}){return new Promise(c=>{setTimeout(()=>{const m=(r-1)*a,h=m+a,x=me.filter(C=>l===""||typeof l!="string"?!0:C.text.toLowerCase().includes(l.toLowerCase())),F=x.length,y=x.slice(m,h);c({items:y,total:F})},300)})},onShow(){d.load()}},L);return Q.useEffect(()=>{d.load()},[d]),e.jsx(k,{children:e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:r=>{console.log("form submitted"),r.preventDefault()},children:e.jsx("main",{className:de,children:e.jsx(n,{model:s,children:e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Fruits"}),e.jsx(o.Input,{as:n.SearchInput,placeholder:"Search",removeLabel:"Remove",name:"toppings",onChange:r=>{t(r.currentTarget.value)},value:i}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{children:[s.state.items.length===0&&e.jsx(U,{as:"span",children:"No Results Found"}),s.state.items.length>0&&e.jsx(n.List,{cs:{maxHeight:200},children:r=>r?e.jsx(n.Item,{"data-id":r.id,children:e.jsx(n.Item.Text,{children:r.text})}):void 0})]})})]})})})}),e.jsxs("div",{children:["Selected: ",i]})]})})};$.__RAW__=`import React, {useEffect} from 'react';

import {MultiSelect, useMultiSelectModel} from '@workday/canvas-kit-preview-react/multi-select';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {useComboboxLoader} from '@workday/canvas-kit-react/combobox';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const mainContentStyles = createStyles({
  padding: system.padding.md,
});

const colors = ['Red', 'Blue', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return {
      id: \`\${index + 1}\`,
      text: \`\${colors[index % colors.length]} \${fruits[index % fruits.length]} \${index + 1}\`,
    };
  });

export const InitialSelectedItems = () => {
  const [value, setValue] = React.useState('');

  const {model, loader} = useComboboxLoader(
    {
      // You can start with any number that makes sense.
      total: 0,
      initialSelectedIds: ['3', '5'],

      // Pick whatever number makes sense for your API
      pageSize: 500,

      // A load function that will be called by the loader. You must return a promise that returns
      // an object like \`{items: [], total: 0}\`. The \`items\` will be merged into the loader's cache
      async load({pageNumber, pageSize, filter}) {
        return new Promise<LoadReturn<(typeof options)[0]>>(resolve => {
          // simulate a server response by resolving after a period of time
          setTimeout(() => {
            // simulate paging and filtering based on pre-computed items
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;
            const filteredItems = options.filter(item => {
              if (filter === '' || typeof filter !== 'string') {
                return true;
              }
              return item.text.toLowerCase().includes(filter.toLowerCase());
            });

            const total = filteredItems.length;
            const items = filteredItems.slice(start, end);

            resolve({
              items,
              total,
            });
          }, 300);
        });
      },
      onShow() {
        // The \`shouldLoad\` cancels while the combobox menu is hidden, so let's load when it is
        // visible
        loader.load();
      },
    },
    useMultiSelectModel
  );

  useEffect(() => {
    loader.load();
  }, [loader]);

  return (
    <CanvasProvider>
      <>
        <form
          onSubmit={e => {
            console.log('form submitted');
            e.preventDefault();
          }}
        >
          <main className={mainContentStyles}>
            <MultiSelect model={model}>
              <FormField orientation="horizontalStart">
                <FormField.Label>Fruits</FormField.Label>
                <FormField.Input
                  as={MultiSelect.SearchInput}
                  placeholder="Search"
                  removeLabel="Remove"
                  name="toppings"
                  onChange={e => {
                    setValue(e.currentTarget.value);
                  }}
                  value={value}
                />
                <MultiSelect.Popper>
                  <MultiSelect.Card>
                    {model.state.items.length === 0 && (
                      <StyledMenuItem as="span">No Results Found</StyledMenuItem>
                    )}
                    {model.state.items.length > 0 && (
                      <MultiSelect.List cs={{maxHeight: 200}}>
                        {item =>
                          item ? (
                            <MultiSelect.Item data-id={item.id}>
                              <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                            </MultiSelect.Item>
                          ) : undefined
                        }
                      </MultiSelect.List>
                    )}
                  </MultiSelect.Card>
                </MultiSelect.Popper>
              </FormField>
            </MultiSelect>
          </main>
        </form>
        <div>Selected: {value}</div>
      </>
    </CanvasProvider>
  );
};
`;const G=[{id:"1",text:"Cheese"},{id:"2",text:"Olives"},{id:"3",text:"Onions"},{id:"4",text:"Pepperoni"},{id:"5",text:"Peppers"}],E=()=>{const i=u.useRef(null),[t,s]=u.useState("1"),[d,r]=u.useState("Cheese");function a(l){const c=l.currentTarget.value;s(c),r(c.split(", ").map(m=>G.find(h=>h.id===m)?.text||"Not Found").join(", "))}return e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:l=>{console.log("form submitted"),l.preventDefault()},ref:i,children:e.jsxs(B,{gap:"s",flexDirection:"column",children:[e.jsx(n,{items:G,children:e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Toppings"}),e.jsx(o.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove",name:"toppings",onChange:a,value:t}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:l=>e.jsx(n.Item,{"data-id":l.id,children:e.jsx(n.Item.Text,{children:l.text})})})})})]})}),e.jsxs(B,{gap:"s",children:[e.jsx(z,{onClick:l=>{s("1, 2, 3")},children:'Set to "Cheese, Olives, Onions" via React `value`'}),e.jsx(z,{onClick:l=>{const c=i.current.querySelector("[name=toppings]");c.value="1, 2"},children:'Set to "Cheese, Olives" via DOM `value`'})]}),e.jsx("div",{children:e.jsx(re,{type:"submit",children:"Submit"})}),e.jsxs("div",{children:["Selected ID: ",t]}),e.jsxs("div",{children:["Selected Label: ",d]})]})})})};E.__RAW__=`import React from 'react';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';

const items = [
  {id: '1', text: 'Cheese'},
  {id: '2', text: 'Olives'},
  {id: '3', text: 'Onions'},
  {id: '4', text: 'Pepperoni'},
  {id: '5', text: 'Peppers'},
];

export const Controlled = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [value, setValue] = React.useState('1');
  const [label, setLabel] = React.useState('Cheese');

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setValue(value);
    setLabel(
      value
        .split(', ')
        .map(item => items.find(i => i.id === item)?.text || 'Not Found')
        .join(', ')
    );
  }

  return (
    <>
      <form
        onSubmit={e => {
          console.log('form submitted');
          e.preventDefault();
        }}
        ref={formRef}
      >
        <Flex gap="s" flexDirection="column">
          <MultiSelect items={items}>
            <FormField orientation="horizontalStart">
              <FormField.Label>Toppings</FormField.Label>
              <FormField.Input
                as={MultiSelect.Input}
                placeholder="Select Multiple"
                removeLabel="Remove"
                name="toppings"
                onChange={handleOnChange}
                value={value}
              />
              <MultiSelect.Popper>
                <MultiSelect.Card>
                  <MultiSelect.List>
                    {item => (
                      <MultiSelect.Item data-id={item.id}>
                        <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                      </MultiSelect.Item>
                    )}
                  </MultiSelect.List>
                </MultiSelect.Card>
              </MultiSelect.Popper>
            </FormField>
          </MultiSelect>
          <Flex gap="s">
            <SecondaryButton
              onClick={e => {
                setValue('1, 2, 3');
              }}
            >
              Set to "Cheese, Olives, Onions" via React \`value\`
            </SecondaryButton>
            <SecondaryButton
              onClick={e => {
                const input = formRef.current.querySelector('[name=toppings]') as HTMLInputElement;
                input.value = '1, 2';
              }}
            >
              Set to "Cheese, Olives" via DOM \`value\`
            </SecondaryButton>
          </Flex>
          <div>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </div>
          <div>Selected ID: {value}</div>
          <div>Selected Label: {label}</div>
        </Flex>
      </form>
    </>
  );
};
`;const pe=w({padding:P.md}),H=["Red","Blue","Purple","Green","Pink"],W=["Apple","Orange","Banana","Grape","Lemon","Lime"],ue=Array(1e3).fill("").map((i,t)=>({id:`${t+1}`,text:`${H[t%H.length]} ${W[t%W.length]} ${t+1}`})),D=()=>{const[i,t]=u.useState(""),{model:s,loader:d}=X({total:0,pageSize:20,async load({pageNumber:r,pageSize:a,filter:l}){return new Promise(c=>{setTimeout(()=>{const m=(r-1)*a,h=m+a,x=ue.filter(C=>l===""||typeof l!="string"?!0:C.text.toLowerCase().includes(l.toLowerCase())),F=x.length,y=x.slice(m,h);c({items:y,total:F})},300)})},onShow(){d.load()}},L);return e.jsx(k,{children:e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:r=>{console.log("form submitted"),r.preventDefault()},children:e.jsx("main",{className:pe,children:e.jsx(n,{model:s,children:e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Fruits"}),e.jsx(o.Input,{as:n.SearchInput,placeholder:"Search",removeLabel:"Remove",name:"toppings",onChange:r=>{t(r.currentTarget.value)},value:i}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{children:[s.state.items.length===0&&e.jsx(U,{as:"span",children:"No Results Found"}),s.state.items.length>0&&e.jsx(n.List,{cs:{maxHeight:200},children:r=>r?e.jsx(n.Item,{"data-id":r.id,children:e.jsx(n.Item.Text,{children:r.text})}):void 0})]})})]})})})}),e.jsxs("div",{children:["Selected: ",i]})]})})};D.__RAW__=`import React from 'react';

import {MultiSelect, useMultiSelectModel} from '@workday/canvas-kit-preview-react/multi-select';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {useComboboxLoader} from '@workday/canvas-kit-react/combobox';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const mainContentStyles = createStyles({
  padding: system.padding.md,
});

const colors = ['Red', 'Blue', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return {
      id: \`\${index + 1}\`,
      text: \`\${colors[index % colors.length]} \${fruits[index % fruits.length]} \${index + 1}\`,
    };
  });

export const Searching = () => {
  const [value, setValue] = React.useState('');

  const {model, loader} = useComboboxLoader(
    {
      // You can start with any number that makes sense.
      total: 0,

      // Pick whatever number makes sense for your API
      pageSize: 20,

      // A load function that will be called by the loader. You must return a promise that returns
      // an object like \`{items: [], total: 0}\`. The \`items\` will be merged into the loader's cache
      async load({pageNumber, pageSize, filter}) {
        return new Promise<LoadReturn<(typeof options)[0]>>(resolve => {
          // simulate a server response by resolving after a period of time
          setTimeout(() => {
            // simulate paging and filtering based on pre-computed items
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;
            const filteredItems = options.filter(item => {
              if (filter === '' || typeof filter !== 'string') {
                return true;
              }
              return item.text.toLowerCase().includes(filter.toLowerCase());
            });

            const total = filteredItems.length;
            const items = filteredItems.slice(start, end);

            resolve({
              items,
              total,
            });
          }, 300);
        });
      },
      onShow() {
        // The \`shouldLoad\` cancels while the combobox menu is hidden, so let's load when it is
        // visible
        loader.load();
      },
    },
    useMultiSelectModel
  );

  return (
    <CanvasProvider>
      <>
        <form
          onSubmit={e => {
            console.log('form submitted');
            e.preventDefault();
          }}
        >
          <main className={mainContentStyles}>
            <MultiSelect model={model}>
              <FormField orientation="horizontalStart">
                <FormField.Label>Fruits</FormField.Label>
                <FormField.Input
                  as={MultiSelect.SearchInput}
                  placeholder="Search"
                  removeLabel="Remove"
                  name="toppings"
                  onChange={e => {
                    setValue(e.currentTarget.value);
                  }}
                  value={value}
                />
                <MultiSelect.Popper>
                  <MultiSelect.Card>
                    {model.state.items.length === 0 && (
                      <StyledMenuItem as="span">No Results Found</StyledMenuItem>
                    )}
                    {model.state.items.length > 0 && (
                      <MultiSelect.List cs={{maxHeight: 200}}>
                        {item =>
                          item ? (
                            <MultiSelect.Item data-id={item.id}>
                              <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                            </MultiSelect.Item>
                          ) : undefined
                        }
                      </MultiSelect.List>
                    )}
                  </MultiSelect.Card>
                </MultiSelect.Popper>
              </FormField>
            </MultiSelect>
          </main>
        </form>
        <div>Selected: {value}</div>
      </>
    </CanvasProvider>
  );
};
`;function q(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...Y(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(J,{of:xe}),`
`,e.jsx(t.h1,{id:"canvas-kit-multiselect",children:"Canvas Kit MultiSelect"}),`
`,e.jsx(t.p,{children:"MultiSelect inputs allow users to choose multiple options from a list of items."}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-preview-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"MultiSelect"}),` supports a
`,e.jsx(t.a,{href:"?path=/docs/features-collections--docs#dynamic-items",children:"dynamic API"}),` where you
pass an array of items via the `,e.jsx(t.code,{children:"items"}),` prop and provide a render function to display the items. The
items may be provided as an
`,e.jsx(t.a,{href:"?path=/docs/features-collections--docs#array-of-strings",children:"array of strings"}),` or an
`,e.jsx(t.a,{href:"?path=/docs/features-collections--docs#array-of-objects",children:"array of objects"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"MultiSelect"})," should be used in tandem with ",e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` where the
`,e.jsx(t.code,{children:"MultiSelect"})," wraps the ",e.jsx(t.code,{children:"FormField"})," element and the ",e.jsx(t.code,{children:"FormField"}),` element wraps the children of
`,e.jsx(t.code,{children:"MultiSelect"})," to meet accessibility standards. This ensures the ",e.jsx(t.code,{children:"label"})," text from ",e.jsx(t.code,{children:"FormField"}),` is
attached to the `,e.jsx(t.code,{children:"MultiSelect.Input"})," and read out as a group for voiceover."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<MultiSelect items={options}>
  <FormField label="Your Label">
    <MultiSelect.Input onChange={e => handleChange(e)} id="contact-multi-select" />
    <MultiSelect.Popper>
      <MultiSelect.Card>
        <MultiSelect.List>
          {item => <MultiSelect.Item>{item.id}</MultiSelect.Item>}
        </MultiSelect.List>
      </MultiSelect.Card>
    </MultiSelect.Popper>
  </FormField>
</MultiSelect>
`})}),`
`,e.jsx(t.h3,{id:"disabled-example",children:"Disabled Example"}),`
`,e.jsxs(t.p,{children:["Disabling ",e.jsx(t.code,{children:"MultiSelect"})," involves passing the ",e.jsx(t.code,{children:"disabled"})," prop to the ",e.jsx(t.code,{children:"MultiSelect.Input"})," component."]}),`
`,e.jsx(p,{code:T}),`
`,e.jsx(t.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"MultiSelect.Input"})," and ",e.jsx(t.code,{children:"MultiSelect.SearchInput"})," support the ",e.jsx(t.code,{children:"ErrorType"}),` from the Common
package. The error styling is identical to the `,e.jsx(t.code,{children:"TextInput"})," error styling. The ",e.jsx(t.code,{children:"error"}),` prop is
typically passed from the `,e.jsx(t.code,{children:"FormField"})," component."]}),`
`,e.jsx(p,{code:R}),`
`,e.jsx(t.h3,{id:"complex",children:"Complex"}),`
`,e.jsxs(t.p,{children:[`When registering items in an array of objects, it's common to have the text that is displayed to the
user be different than an id. In this example, `,e.jsx(t.code,{children:"serverId"})," and ",e.jsx(t.code,{children:"label"}),` properties need to be remapped
to `,e.jsx(t.code,{children:"id"})," and ",e.jsx(t.code,{children:"text"})," hence the usage of ",e.jsx(t.code,{children:"getId"})," and ",e.jsx(t.code,{children:"getTextValue"}),`. If your object has the properties
`,e.jsx(t.code,{children:"text"})," and ",e.jsx(t.code,{children:"id"}),", there would be no need for this."]}),`
`,e.jsx(p,{code:O}),`
`,e.jsx(t.h3,{id:"with-icons",children:"With Icons"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"MultiSelect.Item.Icon"})," to render an icon for a ",e.jsx(t.code,{children:"MultiSelect.Item"}),". The ",e.jsx(t.code,{children:"icon"}),` prop for
`,e.jsx(t.code,{children:"MultiSelect.Item.Icon"})," accepts ",e.jsx(t.a,{href:"?path=/docs/assets-icons--docs#system-icon-list",children:"system icons"}),` from
`,e.jsx(t.code,{children:"@workday/canvas-system-icons-web"}),"."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: ",e.jsx(t.code,{children:"data-id"})," on ",e.jsx(t.code,{children:"MultiSelect.Item"})," must match the ",e.jsx(t.code,{children:"id"}),` property in your array of objects.
This ensures proper keyboard handling and type-ahead.`]})}),`
`]}),`
`,e.jsx(p,{code:_}),`
`,e.jsx(t.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(t.p,{children:["The MultiSelect can be a controlled input component by passing the ",e.jsx(t.code,{children:"value"})," and ",e.jsx(t.code,{children:"onChange"}),` to either
the `,e.jsx(t.code,{children:"<MultiSelect>"})," component or the ",e.jsx(t.code,{children:"<MultiSelect.Input>"}),` component. Internally, the
`,e.jsx(t.code,{children:"MultiSelect.Input"})," watches for changes on the ",e.jsx(t.code,{children:"value"})," React prop as well as the ",e.jsx(t.code,{children:"value"}),` DOM
property and will update the model accordingly.`]}),`
`,e.jsx(p,{code:E}),`
`,e.jsx(t.h3,{id:"searching",children:"Searching"}),`
`,e.jsxs(t.p,{children:[`A MultiSelect input can be used as a filter for results. Most likely this also means there are many
items that may not be all be loaded from the server at once. The `,e.jsx(t.code,{children:"useComboboxLoader"}),` can be used to
dynamically load items as the user navigates the available options.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"}),` The behavior of search is experimental. The example should continue to work without
modification, but how the searchable input is presented to the user may change with user testing.
Don't rely too much on the exact behavior of the search input. For example, the search input may
be cleared when the user blurs the field.`]}),`
`]}),`
`,e.jsx(p,{code:D}),`
`,e.jsx(t.h3,{id:"initial-selected-items",children:"Initial Selected Items"}),`
`,e.jsxs(t.p,{children:["You can set ",e.jsx(t.code,{children:"initialSelectedIds"})," to the value that you want initially selected."]}),`
`,e.jsx(p,{code:$})]})}function he(i={}){const{wrapper:t}={...Y(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(q,{...i})}):q(i)}const xe={title:"Preview/MultiSelect",component:n,tags:["autodocs"],parameters:{docs:{page:he}}},S={render:K},v={render:T},f={render:R},j={render:_},M={render:$},g={render:O},I={render:E},b={render:D};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: InitialSelectedItemsExample
}`,...M.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ComplexExample
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: ControlledExample
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: SearchingExample
}`,...b.parameters?.docs?.source}}};const tn=["Basic","Disabled","Error","Icons","InitialSelectedItems","Complex","Controlled","Searching"];export{S as Basic,g as Complex,I as Controlled,v as Disabled,f as Error,j as Icons,M as InitialSelectedItems,b as Searching,tn as __namedExportsOrder,xe as default};
