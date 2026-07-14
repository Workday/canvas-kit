import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as X}from"./index-3YbjYt95.js";import{ae as Q}from"./index-B7XXfe5h.js";import{E as p}from"./union-CniGnSAc.js";import{e as u,r as Z}from"./index-IfJi-UCQ.js";import{M as n,u as L}from"./MultiSelect-BfsibIdj.js";import{F as r}from"./FormField-DBJ6kUEd.js";import{C as k}from"./CanvasProvider-ZQW06Ivv.js";import{c as w}from"./cs-rfTTo7Bg.js";import{p as P,g as B}from"./index-5dfzm_kn.js";import{p as ee,a as te,s as ne,b as ie,d as oe}from"./skip-D5JFDhka.js";import{u as U}from"./useComboboxLoader-BwVUKkBI.js";import{S as K}from"./Menu-FGPO3Mka.js";import{F as z}from"./Flex-D4H0wg8Z.js";import{S as A}from"./SecondaryButton-BSYdFPfk.js";import{P as re}from"./PrimaryButton-D5v02UCx.js";import"./iframe-JaH-B26f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-gewk2tVd.js";import"./Svg-pWcUwgKK.js";import"./px2rem-C0KbprIx.js";import"./components-BC9eTosh.js";import"./StatusIndicator-C4zEgVH_.js";import"./Text-DCWkG9qZ.js";import"./mergeStyles-BwvcP3zW.js";import"./Box-Berqkg0s.js";import"./index-CjGALPG9.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-kD_kQJ4m.js";import"./grid-L1dbhipu.js";import"./Card-CK3I0y_S.js";import"./ExternalHyperlink-DDmFkxfC.js";import"./Hyperlink-CiQjeIy9.js";import"./external-link-BZdacz1K.js";import"./lerna-DBkctN9J.js";import"./Tooltip-DPxT0V2w.js";import"./useTooltip-ZpvAqNNz.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-uv5na6lZ.js";import"./Popper-DUTAU7yt.js";import"./TertiaryButton-UTJ3hnV1.js";import"./BaseButton-DI27SrsM.js";import"./Button-CSRY-Hl0.js";import"./index-5mrAZJYD.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bp1jFajF.js";import"./ColorPicker-CM2304tH.js";import"./ColorInput-D3n6ss_X.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-CvOUSrVy.js";import"./types-DXdjelYI.js";import"./check-Bvurkvei.js";import"./Expandable-BZ-zBmSc.js";import"./Avatar-6NXN_wUR.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DJ3Ch2nb.js";import"./Popup-CjJtetoF.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BMD-7lNA.js";import"./useInitialFocus-BCQsnoIT.js";import"./useReturnFocus-42FhoN3N.js";import"./useFocusRedirect-C7USV4J8.js";import"./Breadcrumbs-DA3HxUJk.js";import"./useOverflowListTarget-upDRG8Jc.js";import"./useListItemSelect-kam_5bXK.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-D71sFiRJ.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-Bjb3VJLc.js";import"./Combobox-DeBtu0IP.js";import"./Pill-DoQm9pDY.js";import"./plus-E0HzoyQR.js";import"./x-small-DK7gM0f7.js";import"./InputGroup-BB4hDoe9.js";import"./search-INhyn6-E.js";import"./caret-down-small-UmNc4PEr.js";import"./useComboboxInputConstrained-CAIyJwru.js";import"./useListLoader-DR-o4XEV.js";const le=["Cheese","Olives","Onions","Pepperoni","Peppers"],J=()=>e.jsx(e.Fragment,{children:e.jsx(n,{items:le,initialSelectedIds:["Olives","Onions","Pepperoni"],children:e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Toppings"}),e.jsx(r.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:i=>e.jsx(n.Item,{"data-id":i,children:e.jsx(n.Item.Text,{children:i})})})})})]})})});J.__RAW__=`import React from 'react';

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
`;const se=["Cheese","Olives","Onions","Pepperoni","Peppers"],T=()=>e.jsx(e.Fragment,{children:e.jsx(n,{items:se,initialSelectedIds:["Olives","Onions","Pepperoni"],children:e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Toppings"}),e.jsx(r.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove",disabled:!0}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:i=>e.jsx(n.Item,{"data-id":i,children:e.jsx(n.Item.Text,{children:i})})})})})]})})});T.__RAW__=`import React from 'react';

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
`;const ae=["Cheese","Olives","Onions","Pepperoni","Peppers"],R=()=>{const i=L({items:ae,initialSelectedIds:[]});return e.jsx(e.Fragment,{children:e.jsx(n,{model:i,children:e.jsxs(r,{orientation:"horizontalStart",error:i.state.selectedIds.length<1?"error":i.state.selectedIds.length>3?"caution":void 0,children:[e.jsx(r.Label,{children:"Toppings"}),e.jsxs(r.Field,{children:[e.jsx(r.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:t=>e.jsx(n.Item,{"data-id":t,children:e.jsx(n.Item.Text,{children:t})})})})}),e.jsx(r.Hint,{children:i.state.selectedIds.length<1?"Select at least one topping.":i.state.selectedIds.length>3?"More than 3 toppings cost extra.":void 0})]})]})})})};R.__RAW__=`import React from 'react';

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
`;const ce=w({padding:P.md}),N=[{id:"1",text:"Cheese"},{id:"2",text:"Olives"},{id:"3",text:"Onions"},{id:"4",text:"Pepperoni"},{id:"5",text:"Peppers"}],O=()=>{const[i,t]=u.useState(""),[s,d]=u.useState("");return e.jsx(k,{children:e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:o=>{console.log("form submitted"),o.preventDefault()},children:e.jsx("main",{className:ce,children:e.jsx(n,{items:N,getId:o=>o.id,getTextValue:o=>o.text,children:e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Toppings"}),e.jsx(r.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove",name:"toppings",onChange:o=>{const a=o.currentTarget.value;t(a),d(a.split(", ").map(l=>N.find(c=>c.id===l)?.text||"Not Found").join(", "))},value:i}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:o=>e.jsx(n.Item,{"data-id":o.id,children:e.jsx(n.Item.Text,{children:o.text})})})})})]})})})}),e.jsxs("div",{children:["Selected IDs: ",i]}),e.jsxs("div",{children:["Selected Labels: ",s]})]})})};O.__RAW__=`import React from 'react';

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
`;const de=[{id:"1",text:"Pause",icon:ee},{id:"2",text:"Play",icon:te},{id:"3",text:"Skip",icon:ne},{id:"4",text:"Previous",icon:ie}],_=()=>e.jsx(n,{items:de,children:e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Controls"}),e.jsx(r.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:i=>e.jsxs(n.Item,{"data-id":i.id,children:[e.jsx(n.Item.Icon,{icon:i.icon}),e.jsx(n.Item.Text,{children:i.text}),e.jsx(n.Item.Icon,{icon:oe})]})})})})]})});_.__RAW__=`import React from 'react';

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
`;const me=w({padding:P.md}),V=["Red","Blue","Purple","Green","Pink"],G=["Apple","Orange","Banana","Grape","Lemon","Lime"],pe=Array(1e3).fill("").map((i,t)=>({id:`${t+1}`,text:`${V[t%V.length]} ${G[t%G.length]} ${t+1}`})),$=()=>{const[i,t]=u.useState(""),{model:s,loader:d}=U({total:0,initialSelectedIds:["3","5"],pageSize:500,async load({pageNumber:o,pageSize:a,filter:l}){return new Promise(c=>{setTimeout(()=>{const m=(o-1)*a,h=m+a,x=pe.filter(C=>l===""||typeof l!="string"?!0:C.text.toLowerCase().includes(l.toLowerCase())),y=x.length,F=x.slice(m,h);c({items:F,total:y})},300)})},onShow(){d.load()}},L);return Z.useEffect(()=>{d.load()},[d]),e.jsx(k,{children:e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:o=>{console.log("form submitted"),o.preventDefault()},children:e.jsx("main",{className:me,children:e.jsx(n,{model:s,children:e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Fruits"}),e.jsx(r.Input,{as:n.SearchInput,placeholder:"Search",removeLabel:"Remove",name:"toppings",onChange:o=>{t(o.currentTarget.value)},value:i}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{children:[s.state.items.length===0&&e.jsx(K,{as:"span",children:"No Results Found"}),s.state.items.length>0&&e.jsx(n.List,{cs:{maxHeight:200},children:o=>o?e.jsx(n.Item,{"data-id":o.id,children:e.jsx(n.Item.Text,{children:o.text})}):void 0})]})})]})})})}),e.jsxs("div",{children:["Selected: ",i]})]})})};$.__RAW__=`import React, {useEffect} from 'react';

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
`;const H=[{id:"1",text:"Cheese"},{id:"2",text:"Olives"},{id:"3",text:"Onions"},{id:"4",text:"Pepperoni"},{id:"5",text:"Peppers"}],E=()=>{const i=u.useRef(null),[t,s]=u.useState("1"),[d,o]=u.useState("Cheese");function a(l){const c=l.currentTarget.value;s(c),o(c.split(", ").map(m=>H.find(h=>h.id===m)?.text||"Not Found").join(", "))}return e.jsx("form",{onSubmit:l=>{console.log("form submitted"),l.preventDefault()},ref:i,children:e.jsxs(z,{cs:{gap:B.md,flexDirection:"column"},children:[e.jsx(n,{items:H,children:e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Toppings"}),e.jsx(r.Input,{as:n.Input,placeholder:"Select Multiple",removeLabel:"Remove",name:"toppings",onChange:a,value:t}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:l=>e.jsx(n.Item,{"data-id":l.id,children:e.jsx(n.Item.Text,{children:l.text})})})})})]})}),e.jsxs(z,{cs:{gap:B.md},children:[e.jsx(A,{onClick:l=>{s("1, 2, 3")},children:'Set to "Cheese, Olives, Onions" via React `value`'}),e.jsx(A,{onClick:l=>{const c=i.current.querySelector("[name=toppings]");c.value="1, 2"},children:'Set to "Cheese, Olives" via DOM `value`'})]}),e.jsx("div",{children:e.jsx(re,{type:"submit",children:"Submit"})}),e.jsxs("div",{children:["Selected ID: ",t]}),e.jsxs("div",{children:["Selected Label: ",d]})]})})};E.__RAW__=`import React from 'react';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

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
    <form
      onSubmit={e => {
        console.log('form submitted');
        e.preventDefault();
      }}
      ref={formRef}
    >
      <Flex cs={{gap: system.gap.md, flexDirection: 'column'}}>
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
        <Flex cs={{gap: system.gap.md}}>
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
  );
};
`;const ue=w({padding:P.md}),W=["Red","Blue","Purple","Green","Pink"],q=["Apple","Orange","Banana","Grape","Lemon","Lime"],he=Array(1e3).fill("").map((i,t)=>({id:`${t+1}`,text:`${W[t%W.length]} ${q[t%q.length]} ${t+1}`})),D=()=>{const[i,t]=u.useState(""),{model:s,loader:d}=U({total:0,pageSize:20,async load({pageNumber:o,pageSize:a,filter:l}){return new Promise(c=>{setTimeout(()=>{const m=(o-1)*a,h=m+a,x=he.filter(C=>l===""||typeof l!="string"?!0:C.text.toLowerCase().includes(l.toLowerCase())),y=x.length,F=x.slice(m,h);c({items:F,total:y})},300)})},onShow(){d.load()}},L);return e.jsx(k,{children:e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:o=>{console.log("form submitted"),o.preventDefault()},children:e.jsx("main",{className:ue,children:e.jsx(n,{model:s,children:e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Fruits"}),e.jsx(r.Input,{as:n.SearchInput,placeholder:"Search",removeLabel:"Remove",name:"toppings",onChange:o=>{t(o.currentTarget.value)},value:i}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{children:[s.state.items.length===0&&e.jsx(K,{as:"span",children:"No Results Found"}),s.state.items.length>0&&e.jsx(n.List,{cs:{maxHeight:200},children:o=>o?e.jsx(n.Item,{"data-id":o.id,children:e.jsx(n.Item.Text,{children:o.text})}):void 0})]})})]})})})}),e.jsxs("div",{children:["Selected: ",i]})]})})};D.__RAW__=`import React from 'react';

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
`;function Y(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...X(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(Q,{of:Se}),`
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
`,e.jsx(p,{code:$})]})}function xe(i={}){const{wrapper:t}={...X(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(Y,{...i})}):Y(i)}const Se={title:"Preview/MultiSelect",component:n,tags:["autodocs"],parameters:{docs:{page:xe}}},S={render:J},v={render:T},f={render:R},j={render:_},M={render:$},g={render:O},I={render:E},b={render:D};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const Zt=["Basic","Disabled","Error","Icons","InitialSelectedItems","Complex","Controlled","Searching"];export{S as Basic,g as Complex,I as Controlled,v as Disabled,f as Error,j as Icons,M as InitialSelectedItems,b as Searching,Zt as __namedExportsOrder,Se as default};
