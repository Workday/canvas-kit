import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as E}from"./index-3YbjYt95.js";import{ae as Y}from"./index-ZDSBk99o.js";import{E as f}from"./union-DLCtkVd1.js";import{e as u}from"./index-IfJi-UCQ.js";import{g as m,u as z}from"./useUniqueId-DC-hMIDg.js";import{C as $}from"./Checkbox-C1hZnAAN.js";import{H as U,S as h}from"./TypeLevelComponents-B17xCNlQ.js";import{T as a}from"./Table-CJIYknPE.js";import{c as y,a as Q}from"./cs-rfTTo7Bg.js";import{T as S}from"./Tooltip-BxoQKBOc.js";import{c as P}from"./components-Cg1FZO0_.js";import{c as V,p as F,g as K,f as ee}from"./index-5dfzm_kn.js";import{c as te}from"./chevron-down-small-BMZE52uy.js";import{c as oe}from"./chevron-right-small-DxmMaev8.js";import{T as A}from"./TertiaryButton-CBkDxGlV.js";import{S as ae}from"./StatusIndicator-DW1RpUtJ.js";import{a as ne,b as re,f as ie}from"./filter-BPp11omr.js";import{T as g}from"./Text-CNr-2DGz.js";import{s as M}from"./search-INhyn6-E.js";import{I as C}from"./InputGroup-CEadCZqV.js";import{A as le}from"./AriaLiveRegion-7GplPz7M.js";import{u as se}from"./getTransformFromPlacement-BtpPb64q.js";import{u as ce,a as de}from"./useInitialFocus-DVpTgpWA.js";import{u as pe}from"./useCloseOnEscape-BBMl_xav.js";import{u as ue}from"./useFocusRedirect-BTh85vHi.js";import{u as me}from"./useReturnFocus-BcWGL8OV.js";import{P as b}from"./Popup-BHgY7kD_.js";import{F as j}from"./FormField-BUFxQ-TR.js";import{S as he}from"./SystemIcon-92MeLroz.js";import{T as be}from"./TextInput-D0_TvPek.js";import{F as ye}from"./Flex-Dl-NBLHf.js";import{P as ge}from"./PrimaryButton-DUzcOF7D.js";import"./iframe-DJNB-Vr3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./Card-BzyZlNCL.js";import"./mergeStyles-BV4VEc_Y.js";import"./Box-CwNlJ1ig.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CaNYx-IV.js";import"./grid-DWhi-gWI.js";import"./ExternalHyperlink-F3Ezqcg9.js";import"./Hyperlink-BMBSNX69.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-D_K1Afrv.js";import"./BaseButton-DWX5ERqj.js";import"./Button-DgUbiQZw.js";import"./px2rem-C0KbprIx.js";import"./lerna-gnzzElkd.js";import"./CanvasProvider-BQB8fFIR.js";import"./index-5mrAZJYD.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-Bkxnxvxt.js";import"./ColorInput-DPMCVQeB.js";import"./check-small-C7Z-gSGs.js";import"./check-Bvurkvei.js";import"./Expandable-Dymk71e9.js";import"./Avatar-CH00W5X3.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-a5nE6ygN.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-C-Z-l4zf.js";import"./usePopupTarget-ddP-JAq8.js";import"./Popper-CbopsOaM.js";import"./Breadcrumbs-CPGCzSS3.js";import"./useOverflowListTarget-BmFjGYrm.js";import"./useListItemSelect-3vvqn41X.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D9vTtPgP.js";import"./useTooltip-It9frGRS.js";import"./OverflowTooltip-XrtqALdT.js";import"./related-actions-TP4TzHu6.js";import"./LabelText-CICOa9xM.js";import"./types-DXdjelYI.js";import"./x-small-DK7gM0f7.js";import"./x-D9WWWeCM.js";import"./Svg-DoDc3G3m.js";const xe=Q({base:{gridTemplateColumns:"3.5rem repeat(2, 1fr)",transition:"background-color 200ms"},modifiers:{isSelected:{true:{backgroundColor:V.brand.surface.primary.default}}}}),k=y({backgroundColor:V.surface.alt.default}),R=y({backgroundColor:"transparent"}),Se=P("tr")({displayName:"SelectableRow",Component:({onSelect:o,rowData:t})=>e.jsxs(a.Row,{cs:xe({isSelected:t.checked}),children:[e.jsx(a.Cell,{cs:R,children:e.jsx(S,{title:t.name,children:e.jsx($,{checked:t.checked,onChange:o})})}),e.jsx(a.Header,{cs:R,scope:"row",children:t.name}),e.jsx(a.Cell,{cs:R,children:t.amount})]})}),fe=[{name:"Pepperoni",amount:"2.5 oz.",checked:!1},{name:"Mozzarella",amount:"5 oz.",checked:!1},{name:"Basil",amount:"10 Leaves",checked:!1},{name:"Roasted Red Peppers",amount:"3 oz.",checked:!1},{name:"Mushrooms",amount:"2 oz.",checked:!1}],L=m(),_=()=>{const[o,t]=u.useState("unchecked"),[r,n]=u.useState(fe),d=i=>{const l=r.map(p=>p.name===i?{...p,checked:!p.checked}:p);n(l);const c=l.filter(p=>p.checked===!0);c.length===0?t("unchecked"):c.length===l.length?t("checked"):t("indeterminate")},s=()=>{if(o==="checked"||o==="indeterminate"){t("unchecked");const i=r.map(l=>({...l,checked:!1}));n(i)}if(o==="unchecked"){t("checked");const i=r.map(l=>({...l,checked:!0}));n(i)}};return e.jsxs(e.Fragment,{children:[e.jsx(U,{as:"h3",id:L,size:"small",children:"Select your pizza toppings"}),e.jsxs(a,{"aria-labelledby":L,children:[e.jsxs(a.Row,{gridTemplateColumns:"3.5rem repeat(2, 1fr)",children:[e.jsx(a.Cell,{cs:k,children:e.jsx(S,{title:"Select All",children:e.jsx($,{checked:o==="checked",indeterminate:o==="indeterminate",onChange:s})})}),e.jsx(a.Header,{scope:"col",cs:k,children:"Toppings"}),e.jsx(a.Header,{scope:"col",cs:k,children:"Amount"})]}),e.jsx(a.Body,{children:r.map(i=>e.jsx(Se,{rowData:i,onSelect:()=>d(i.name)},i.name))})]})]})};_.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {createComponent, generateUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const selectableRowStencil = createStencil({
  base: {
    gridTemplateColumns: '3.5rem repeat(2, 1fr)',
    transition: 'background-color 200ms',
  },
  modifiers: {
    isSelected: {
      true: {
        backgroundColor: system.color.brand.surface.primary.default,
      },
    },
  },
});

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.surface.alt.default,
});

const tableCellStyles = createStyles({
  backgroundColor: 'transparent',
});

interface SelectableRowProps {
  onSelect?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowData: PizzaTopping;
}

const SelectableRow = createComponent('tr')({
  displayName: 'SelectableRow',
  Component: ({onSelect, rowData}: SelectableRowProps) => {
    return (
      <Table.Row cs={selectableRowStencil({isSelected: rowData.checked})}>
        <Table.Cell cs={tableCellStyles}>
          <Tooltip title={rowData.name}>
            <Checkbox checked={rowData.checked} onChange={onSelect} />
          </Tooltip>
        </Table.Cell>
        <Table.Header cs={tableCellStyles} scope="row">
          {rowData.name}
        </Table.Header>
        <Table.Cell cs={tableCellStyles}>{rowData.amount}</Table.Cell>
      </Table.Row>
    );
  },
});

interface PizzaTopping {
  name: string;
  amount: string;
  checked: boolean;
}

const pizzaToppingData: PizzaTopping[] = [
  {name: 'Pepperoni', amount: '2.5 oz.', checked: false},
  {name: 'Mozzarella', amount: '5 oz.', checked: false},
  {name: 'Basil', amount: '10 Leaves', checked: false},
  {name: 'Roasted Red Peppers', amount: '3 oz.', checked: false},
  {name: 'Mushrooms', amount: '2 oz.', checked: false},
];

const headingID = generateUniqueId();

type SelectAll = 'checked' | 'indeterminate' | 'unchecked';

export const SelectableRows = () => {
  const [selectAllState, setSelectAllState] = React.useState<SelectAll>('unchecked');
  const [toppings, setToppings] = React.useState(pizzaToppingData);

  const handleToppingChange = (name: string) => {
    // Toggle the selected item's checked state and update state
    const updatedToppings = toppings.map(topping => {
      if (topping.name === name) {
        return {...topping, checked: !topping.checked};
      } else {
        return topping;
      }
    });
    setToppings(updatedToppings);

    // Update the Select All checkbox state
    const selectedToppings = updatedToppings.filter(topping => topping.checked === true);
    // If no toppings are selected, set the Select All checkbox to 'unchecked'
    if (selectedToppings.length === 0) {
      setSelectAllState('unchecked');
      // If all toppings are selected, set the Select All checkbox to 'checked'
    } else if (selectedToppings.length === updatedToppings.length) {
      setSelectAllState('checked');
      // Otherwise, set the Select All checkbox to 'indeterminate'
    } else {
      setSelectAllState('indeterminate');
    }
  };

  const handleSelectAll = () => {
    // If the Select All checkbox is in a checked or indeterminate state,
    // update it to 'unchecked', and uncheck all topping checkboxes
    if (selectAllState === 'checked' || selectAllState === 'indeterminate') {
      setSelectAllState('unchecked');
      const updatedToppingData = toppings.map(topping => ({...topping, checked: false}));
      setToppings(updatedToppingData);
    }
    // If the Select All checkbox is in an unchecked state,
    // update it to 'checked', and check all topping checkboxes
    if (selectAllState === 'unchecked') {
      setSelectAllState('checked');
      const updatedToppingData = toppings.map(topping => ({...topping, checked: true}));
      setToppings(updatedToppingData);
    }
  };

  return (
    <>
      <Heading as="h3" id={headingID} size="small">
        Select your pizza toppings
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Row gridTemplateColumns="3.5rem repeat(2, 1fr)">
          <Table.Cell cs={tableHeaderStyles}>
            <Tooltip title="Select All">
              <Checkbox
                checked={selectAllState === 'checked'}
                indeterminate={selectAllState === 'indeterminate'}
                onChange={handleSelectAll}
              />
            </Tooltip>
          </Table.Cell>
          <Table.Header scope="col" cs={tableHeaderStyles}>
            Toppings
          </Table.Header>
          <Table.Header scope="col" cs={tableHeaderStyles}>
            Amount
          </Table.Header>
        </Table.Row>
        <Table.Body>
          {toppings.map(rowData => (
            <SelectableRow
              key={rowData.name}
              rowData={rowData}
              onSelect={() => handleToppingChange(rowData.name)}
            />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
`;const W=m(),we=[{id:m(),brand:"Porsche",model:"992 911 GT3",year:"2022",price:"Starts at $160,000",engine:"4.0L Flat 6",transmission:"PDK or 7-Speed Manual",horsepower:"502hp",torque:"346 lb-ft",curbWeight:"3,164 lbs",orderStatus:"Order Placed"},{id:m(),brand:"BMW",model:"M5 Competition",year:"2018",price:"Starts at $105,000",engine:"Twin-Turbo 4.4L V8",transmission:"Automatic",horsepower:"627hp",torque:"553 lb-ft",curbWeight:"4,345 lbs",orderStatus:"Order Fulfilled"},{id:m(),brand:"Audi",model:"R8",year:"2022",price:"Starts at $148,000",engine:"5.2L V10",transmission:"Automatic",horsepower:"562hp",torque:"408 lb-ft",curbWeight:"3,594 lbs",orderStatus:"Order Fulfilled"},{id:m(),brand:"Lotus",model:"Emira",year:"2023",price:"Starts at $78,000",engine:"Supercharged 3.5L V6",transmission:"Automatic or 6-Speed Manual",horsepower:"400hp",torque:"317 lb-ft",curbWeight:"3520 lbs",orderStatus:"Shipped: In Transit"},{id:m(),brand:"Toyota",model:"Supra",year:"1998",price:"$40,000 - $80,000",engine:"3.0L Inline 6",transmission:"Automatic or 6-Speed Manual",horsepower:"320hp",torque:"315 lb-ft",curbWeight:"3,599 lbs",orderStatus:"Delivered"},{id:m(),brand:"Nissan",model:"Skyline GT-R",year:"1994",price:"$45,000 - $90,000",engine:"2.6L Twin-Turbo Inline 6",transmission:"5-Speed Manual",horsepower:"276hp",torque:"260 lb-ft",curbWeight:"3,153 lbs",orderStatus:"Delivered"}],Te=y({alignItems:"flex-start",display:"flex",gap:K.md,padding:F.xxl}),B=y({margin:0,fontWeight:ee.bold}),Ce=y({listStyle:"none",margin:0,padding:0,gap:K.sm});function je({data:o}){const[t,r]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(a.Row,{cs:{gridTemplateColumns:"4rem repeat(4, 1fr)"},children:[e.jsx(a.Cell,{children:e.jsx(S,{title:`${o.brand} ${o.model}`,children:e.jsx(A,{size:"small",icon:t?te:oe,"aria-expanded":t,onClick:()=>r(!t)})})}),e.jsx(a.Header,{scope:"row",children:o.brand}),e.jsx(a.Cell,{children:o.model}),e.jsx(a.Cell,{children:o.year}),e.jsx(a.Cell,{children:o.price})]}),t&&e.jsx(a.Row,{children:e.jsxs(a.Cell,{colSpan:5,cs:Te,children:[e.jsxs("div",{children:[e.jsx(h,{as:"h4",size:"large",cs:B,children:"Status"}),e.jsx(ae,{variant:"blue",children:o.orderStatus})]}),e.jsxs("div",{children:[e.jsx(h,{as:"h4",size:"large",cs:B,children:"Specifications"}),e.jsxs("ul",{className:Ce,children:[e.jsxs(h,{as:"li",size:"large",children:["Engine: ",o.engine]}),e.jsxs(h,{as:"li",size:"large",children:["Transmission: ",o.transmission]}),e.jsxs(h,{as:"li",size:"large",children:["Horsepower: ",o.horsepower]}),e.jsxs(h,{as:"li",size:"large",children:["Torque: ",o.torque]}),e.jsxs(h,{as:"li",size:"large",children:["Curb Weight: ",o.curbWeight]})]})]})]})})]})}const G=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{as:"h3",id:W,size:"small",children:"Showroom Inventory"}),e.jsxs(a,{"aria-labelledby":W,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{cs:{gridTemplateColumns:"4rem repeat(4, 1fr)"},children:[e.jsx(a.Cell,{}),e.jsx(a.Header,{scope:"col",children:"Make"}),e.jsx(a.Header,{scope:"col",children:"Model"}),e.jsx(a.Header,{scope:"col",children:"Year"}),e.jsx(a.Header,{scope:"col",children:"Price"})]})}),e.jsx(a.Body,{children:we.map(o=>e.jsx(je,{data:o},o.id))})]})]});G.__RAW__=`import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {generateUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Heading, Subtext} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {chevronDownSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface AutoData {
  id: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  engine: string;
  transmission: string;
  horsepower: string;
  torque: string;
  curbWeight: string;
  orderStatus: string;
}

const headingID = generateUniqueId();
const autoData: AutoData[] = [
  {
    id: generateUniqueId(),
    brand: 'Porsche',
    model: '992 911 GT3',
    year: '2022',
    price: 'Starts at $160,000',
    engine: '4.0L Flat 6',
    transmission: 'PDK or 7-Speed Manual',
    horsepower: '502hp',
    torque: '346 lb-ft',
    curbWeight: '3,164 lbs',
    orderStatus: 'Order Placed',
  },
  {
    id: generateUniqueId(),
    brand: 'BMW',
    model: 'M5 Competition',
    year: '2018',
    price: 'Starts at $105,000',
    engine: 'Twin-Turbo 4.4L V8',
    transmission: 'Automatic',
    horsepower: '627hp',
    torque: '553 lb-ft',
    curbWeight: '4,345 lbs',
    orderStatus: 'Order Fulfilled',
  },
  {
    id: generateUniqueId(),
    brand: 'Audi',
    model: 'R8',
    year: '2022',
    price: 'Starts at $148,000',
    engine: '5.2L V10',
    transmission: 'Automatic',
    horsepower: '562hp',
    torque: '408 lb-ft',
    curbWeight: '3,594 lbs',
    orderStatus: 'Order Fulfilled',
  },
  {
    id: generateUniqueId(),
    brand: 'Lotus',
    model: 'Emira',
    year: '2023',
    price: 'Starts at $78,000',
    engine: 'Supercharged 3.5L V6',
    transmission: 'Automatic or 6-Speed Manual',
    horsepower: '400hp',
    torque: '317 lb-ft',
    curbWeight: '3520 lbs',
    orderStatus: 'Shipped: In Transit',
  },
  {
    id: generateUniqueId(),
    brand: 'Toyota',
    model: 'Supra',
    year: '1998',
    price: '$40,000 - $80,000',
    engine: '3.0L Inline 6',
    transmission: 'Automatic or 6-Speed Manual',
    horsepower: '320hp',
    torque: '315 lb-ft',
    curbWeight: '3,599 lbs',
    orderStatus: 'Delivered',
  },
  {
    id: generateUniqueId(),
    brand: 'Nissan',
    model: 'Skyline GT-R',
    year: '1994',
    price: '$45,000 - $90,000',
    engine: '2.6L Twin-Turbo Inline 6',
    transmission: '5-Speed Manual',
    horsepower: '276hp',
    torque: '260 lb-ft',
    curbWeight: '3,153 lbs',
    orderStatus: 'Delivered',
  },
];

interface RowProps {
  data: AutoData;
}

const expandableSectionStyles = createStyles({
  alignItems: 'flex-start',
  display: 'flex',
  gap: system.gap.md,
  padding: system.padding.xxl,
});

const expandableHeadingStyles = createStyles({
  margin: 0,
  fontWeight: system.fontWeight.bold,
});

const expandableListStyles = createStyles({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: system.gap.sm,
});

function ExpandableRow({data}: RowProps) {
  const [rowExpanded, setRowExpanded] = React.useState(false);

  return (
    <>
      <Table.Row cs={{gridTemplateColumns: '4rem repeat(4, 1fr)'}}>
        <Table.Cell>
          <Tooltip title={\`\${data.brand} \${data.model}\`}>
            <TertiaryButton
              size="small"
              icon={rowExpanded ? chevronDownSmallIcon : chevronRightSmallIcon}
              aria-expanded={rowExpanded}
              onClick={() => setRowExpanded(!rowExpanded)}
            />
          </Tooltip>
        </Table.Cell>
        <Table.Header scope="row">{data.brand}</Table.Header>
        <Table.Cell>{data.model}</Table.Cell>
        <Table.Cell>{data.year}</Table.Cell>
        <Table.Cell>{data.price}</Table.Cell>
      </Table.Row>
      {rowExpanded && (
        <Table.Row>
          <Table.Cell colSpan={5} cs={expandableSectionStyles}>
            <div>
              <Subtext as="h4" size="large" cs={expandableHeadingStyles}>
                Status
              </Subtext>
              <StatusIndicator variant="blue">{data.orderStatus}</StatusIndicator>
            </div>
            <div>
              <Subtext as="h4" size="large" cs={expandableHeadingStyles}>
                Specifications
              </Subtext>
              <ul className={expandableListStyles}>
                <Subtext as="li" size="large">
                  Engine: {data.engine}
                </Subtext>
                <Subtext as="li" size="large">
                  Transmission: {data.transmission}
                </Subtext>
                <Subtext as="li" size="large">
                  Horsepower: {data.horsepower}
                </Subtext>
                <Subtext as="li" size="large">
                  Torque: {data.torque}
                </Subtext>
                <Subtext as="li" size="large">
                  Curb Weight: {data.curbWeight}
                </Subtext>
              </ul>
            </div>
          </Table.Cell>
        </Table.Row>
      )}
    </>
  );
}

export const ExpandableRows = () => {
  return (
    <>
      <Heading as="h3" id={headingID} size="small">
        Showroom Inventory
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Head>
          <Table.Row cs={{gridTemplateColumns: '4rem repeat(4, 1fr)'}}>
            <Table.Cell></Table.Cell>
            <Table.Header scope="col">Make</Table.Header>
            <Table.Header scope="col">Model</Table.Header>
            <Table.Header scope="col">Year</Table.Header>
            <Table.Header scope="col">Price</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {autoData.map(item => (
            <ExpandableRow key={item.id} data={item} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
`;const N=[{country:"Australia",capital:"Canberra",population:2569e4},{country:"Bahamas",capital:"Nassau",population:407906},{country:"Canada",capital:"Ottawa",population:3825e4},{country:"Fiji",capital:"Suva",population:924610},{country:"Ghana",capital:"Accra",population:3283e4},{country:"Hong Kong",capital:"City of Victoria",population:7413e3},{country:"India",capital:"New Delhi",population:1408e6},{country:"Ireland",capital:"Dublin",population:5033e3},{country:"Jamaica",capital:"Kingston",population:2828e3},{country:"Kenya",capital:"Nairobi",population:5301e4},{country:"Micronesia",capital:"Palikir",population:113131},{country:"New Zealand",capital:"Wellington",population:5123e3},{country:"Philippines",capital:"Manila",population:1139e5},{country:"Puerto Rico",capital:"San Juan",population:3264e3},{country:"Samoa",capital:"Apia",population:218764},{country:"Singapore",capital:"Singapore",population:5454e3},{country:"Tanzania",capital:"Dodoma",population:6359e4},{country:"United Kingdom",capital:"London",population:6733e4},{country:"United States",capital:"Washington, D.C.",population:3319e5},{country:"Zimbabwe",capital:"Harare",population:1599e4}],x={column1SortDirection:"ascending",column2SortDirection:"none",column3SortDirection:"none"};function T(o){return o==="ascending"?"descending":"ascending"}function ke(o,t){switch(t.column){case"Country":return o.column1SortDirection==="ascending"?t.payload.sort((r,n)=>n.country.localeCompare(r.country)):t.payload.sort((r,n)=>r.country.localeCompare(n.country)),{...x,column1SortDirection:T(o.column1SortDirection)};case"Capital":return o.column2SortDirection==="ascending"?t.payload.sort((r,n)=>n.capital.localeCompare(r.capital)):t.payload.sort((r,n)=>r.capital.localeCompare(n.capital)),{...x,column2SortDirection:T(o.column2SortDirection)};case"Population":return o.column3SortDirection==="ascending"?t.payload.sort((r,n)=>n.population-r.population):t.payload.sort((r,n)=>r.population-n.population),{...x,column3SortDirection:T(o.column3SortDirection)};default:return x}}const Re=o=>o==="ascending"?ne:o==="descending"?re:void 0,v=P("th")({displayName:"SortableColumnHeader",Component:({label:o,sortOrder:t,onSortAction:r,children:n,...d},s)=>e.jsx(a.Header,{ref:s,scope:"col","aria-sort":t,...d,children:e.jsx(S,{type:"description",title:`Sort ${T(t)}`,children:e.jsx(A,{icon:Re(t),iconPosition:"end",onClick:()=>r(o),children:n})})})}),D=y({paddingInlineStart:F.sm}),J=()=>{const[o,t]=u.useReducer(ke,x);function r(n){t({column:n,payload:N})}return e.jsxs(a,{cs:{maxHeight:"40rem"},children:[e.jsx(a.Caption,{children:"Population Listed by Country (2021)"}),e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(v,{label:"Country",sortOrder:o.column1SortDirection,onSortAction:r,children:"Country"}),e.jsx(v,{label:"Capital",sortOrder:o.column2SortDirection,onSortAction:r,children:"Capital"}),e.jsx(v,{label:"Population",sortOrder:o.column3SortDirection,onSortAction:r,children:"Population"})]})}),e.jsx(a.Body,{children:N.map(n=>e.jsxs(a.Row,{children:[e.jsx(a.Header,{scope:"row",children:e.jsx(g,{cs:D,children:n.country})}),e.jsx(a.Cell,{children:e.jsx(g,{cs:D,children:n.capital})}),e.jsx(a.Cell,{children:e.jsx(g,{cs:D,children:n.population.toLocaleString()})})]},n.country))})]})};J.__RAW__=`import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Text} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {arrowDownSmallIcon, arrowUpSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface CountryData {
  country: string;
  capital: string;
  population: number;
}

const countryData: CountryData[] = [
  {country: 'Australia', capital: 'Canberra', population: 25690000},
  {country: 'Bahamas', capital: 'Nassau', population: 407906},
  {country: 'Canada', capital: 'Ottawa', population: 38250000},
  {country: 'Fiji', capital: 'Suva', population: 924610},
  {country: 'Ghana', capital: 'Accra', population: 32830000},
  {country: 'Hong Kong', capital: 'City of Victoria', population: 7413000},
  {country: 'India', capital: 'New Delhi', population: 1408000000},
  {country: 'Ireland', capital: 'Dublin', population: 5033000},
  {country: 'Jamaica', capital: 'Kingston', population: 2828000},
  {country: 'Kenya', capital: 'Nairobi', population: 53010000},
  {country: 'Micronesia', capital: 'Palikir', population: 113131},
  {country: 'New Zealand', capital: 'Wellington', population: 5123000},
  {country: 'Philippines', capital: 'Manila', population: 113900000},
  {country: 'Puerto Rico', capital: 'San Juan', population: 3264000},
  {country: 'Samoa', capital: 'Apia', population: 218764},
  {country: 'Singapore', capital: 'Singapore', population: 5454000},
  {country: 'Tanzania', capital: 'Dodoma', population: 63590000},
  {country: 'United Kingdom', capital: 'London', population: 67330000},
  {country: 'United States', capital: 'Washington, D.C.', population: 331900000},
  {country: 'Zimbabwe', capital: 'Harare', population: 15990000},
];

type SortOrder = 'ascending' | 'descending' | 'none';

interface HeaderRowState {
  column1SortDirection: SortOrder;
  column2SortDirection: SortOrder;
  column3SortDirection: SortOrder;
}

interface HeaderRowAction {
  column: 'Country' | 'Capital' | 'Population';
  payload: CountryData[];
}

const initialHeaderRowState: HeaderRowState = {
  column1SortDirection: 'ascending',
  column2SortDirection: 'none',
  column3SortDirection: 'none',
};

/**
 * Given the current sort order, return the next sort order
 */
function getNextSortOrder(sortOrder: SortOrder) {
  return sortOrder === 'ascending' ? 'descending' : 'ascending';
}

function headerRowReducer(state: HeaderRowState, action: HeaderRowAction): HeaderRowState {
  switch (action.column) {
    case 'Country':
      if (state.column1SortDirection === 'ascending') {
        action.payload.sort((a, b) => b.country.localeCompare(a.country));
      } else {
        action.payload.sort((a, b) => a.country.localeCompare(b.country));
      }

      return {
        ...initialHeaderRowState,
        column1SortDirection: getNextSortOrder(state.column1SortDirection),
      };

    case 'Capital':
      if (state.column2SortDirection === 'ascending') {
        action.payload.sort((a, b) => b.capital.localeCompare(a.capital));
      } else {
        action.payload.sort((a, b) => a.capital.localeCompare(b.capital));
      }

      return {
        ...initialHeaderRowState,
        column2SortDirection: getNextSortOrder(state.column2SortDirection),
      };

    case 'Population':
      if (state.column3SortDirection === 'ascending') {
        action.payload.sort((a, b) => b.population - a.population);
      } else {
        action.payload.sort((a, b) => a.population - b.population);
      }

      return {
        ...initialHeaderRowState,
        column3SortDirection: getNextSortOrder(state.column3SortDirection),
      };

    default:
      return initialHeaderRowState;
  }
}

interface SortableColumnHeaderProps {
  label: 'Country' | 'Capital' | 'Population';
  onSortAction: (label: 'Country' | 'Capital' | 'Population') => void;
  children?: React.ReactNode;
  sortOrder: SortOrder;
}

const getSortIcon = (sortOrder?: SortOrder) => {
  if (sortOrder === 'ascending') {
    return arrowUpSmallIcon;
  } else if (sortOrder === 'descending') {
    return arrowDownSmallIcon;
  } else {
    return undefined;
  }
};

const SortableColumnHeader = createComponent('th')({
  displayName: 'SortableColumnHeader',
  Component: (
    {label, sortOrder, onSortAction, children, ...elemProps}: SortableColumnHeaderProps,
    ref
  ) => {
    return (
      <Table.Header ref={ref} scope="col" aria-sort={sortOrder} {...elemProps}>
        <Tooltip type="description" title={\`Sort \${getNextSortOrder(sortOrder)}\`}>
          <TertiaryButton
            icon={getSortIcon(sortOrder)}
            iconPosition="end"
            onClick={() => onSortAction(label)}
          >
            {children}
          </TertiaryButton>
        </Tooltip>
      </Table.Header>
    );
  },
});

const textStyles = createStyles({
  paddingInlineStart: system.padding.sm,
});

export const SortableColumnHeaders = () => {
  const [headerRowState, headerRowDispatch] = React.useReducer(
    headerRowReducer,
    initialHeaderRowState
  );

  function sortColumnHandler(columnName: 'Country' | 'Capital' | 'Population') {
    headerRowDispatch({
      column: columnName,
      payload: countryData,
    });
  }

  return (
    <Table cs={{maxHeight: '40rem'}}>
      <Table.Caption>Population Listed by Country (2021)</Table.Caption>
      <Table.Head>
        <Table.Row>
          <SortableColumnHeader
            label="Country"
            sortOrder={headerRowState.column1SortDirection as SortOrder}
            onSortAction={sortColumnHandler}
          >
            Country
          </SortableColumnHeader>
          <SortableColumnHeader
            label="Capital"
            sortOrder={headerRowState.column2SortDirection as SortOrder}
            onSortAction={sortColumnHandler}
          >
            Capital
          </SortableColumnHeader>
          <SortableColumnHeader
            label="Population"
            sortOrder={headerRowState.column3SortDirection as SortOrder}
            onSortAction={sortColumnHandler}
          >
            Population
          </SortableColumnHeader>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {countryData.map(item => {
          return (
            <Table.Row key={item.country}>
              <Table.Header scope="row">
                <Text cs={textStyles}>{item.country}</Text>
              </Table.Header>
              <Table.Cell>
                <Text cs={textStyles}>{item.capital}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text cs={textStyles}>{item.population.toLocaleString()}</Text>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
`;const H=[{country:"Australia",capital:"Canberra",population:2569e4},{country:"Bahamas",capital:"Nassau",population:407906},{country:"Canada",capital:"Ottawa",population:3825e4},{country:"Fiji",capital:"Suva",population:924610},{country:"Ghana",capital:"Accra",population:3283e4},{country:"Hong Kong",capital:"City of Victoria",population:7413e3},{country:"India",capital:"New Delhi",population:1408e6},{country:"Ireland",capital:"Dublin",population:5033e3},{country:"Jamaica",capital:"Kingston",population:2828e3},{country:"Kenya",capital:"Nairobi",population:5301e4},{country:"Micronesia",capital:"Palikir",population:113131},{country:"New Zealand",capital:"Wellington",population:5123e3},{country:"Philippines",capital:"Manila",population:1139e5},{country:"Puerto Rico",capital:"San Juan",population:3264e3},{country:"Samoa",capital:"Apia",population:218764},{country:"Singapore",capital:"Singapore",population:5454e3},{country:"Tanzania",capital:"Dodoma",population:6359e4},{country:"United Kingdom",capital:"London",population:6733e4},{country:"United States",capital:"Washington, D.C.",population:3319e5},{country:"Zimbabwe",capital:"Harare",population:1599e4}],w=y({paddingInlineStart:F.md}),I=P("th")({displayName:"FilterableColumnHeader",Component:({label:o,onFilter:t},r)=>{const[n,d]=u.useState(""),s=z(),i=z(),l=u.useRef(null),c=se({initialFocusRef:l});ce(c),pe(c),de(c),ue(c),me(c);function p(X){const O=X.target.value;d(O),t({filterText:O,column:o.toLowerCase()})}return e.jsx(a.Header,{scope:"col","aria-owns":s+" "+i,children:e.jsxs(b,{model:c,children:[e.jsx(S,{title:`Filter${n!==""?`ed: "${n}"`:""}`,type:"description",children:e.jsx(b.Target,{as:A,id:s,icon:n===""?M:ie,iconPosition:"end",children:o})}),e.jsx(b.Popper,{children:e.jsxs(b.Card,{id:i,children:[e.jsx(b.Heading,{children:"Filter"}),e.jsx(b.Body,{children:e.jsxs(j,{children:[e.jsx(j.Label,{children:o}),e.jsxs(j.Input,{as:C,children:[e.jsx(C.InnerStart,{children:e.jsx(he,{icon:M})}),e.jsx(C.Input,{as:be,type:"search",ref:l,onChange:p,value:n})]})]})}),e.jsx(ye,{children:e.jsx(b.CloseButton,{as:ge,children:"Done"})})]})})]})})}});function ve(o,t){return o.filter(r=>{for(const n in t)if(t.hasOwnProperty(n)&&t[n]){const d=t[n].toLowerCase();if(!String(r[n]).toLowerCase().includes(d))return!1}return!0})}const Z=()=>{const[o,t]=u.useState(H),[r,n]=u.useState({country:"",capital:"",population:""});u.useEffect(()=>{t(ve(H,r))},[r]);let d;function s({filterText:i,column:l}){clearTimeout(d),d=setTimeout(()=>{n(c=>({...c,[l]:i}))},400)}return e.jsxs(a,{cs:{maxHeight:"40rem"},children:[e.jsxs(a.Caption,{children:["Population Listed by Country (2021)",e.jsxs(le,{cs:w,children:[o.length," of ",H.length," items"]})]}),e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(I,{label:"Country",onFilter:s}),e.jsx(I,{label:"Capital",onFilter:s}),e.jsx(I,{label:"Population",onFilter:s})]})}),e.jsx(a.Body,{children:o.map(i=>e.jsxs(a.Row,{children:[e.jsx(a.Header,{scope:"row",children:e.jsx(g,{cs:w,children:i.country})}),e.jsx(a.Cell,{children:e.jsx(g,{cs:w,children:i.capital})}),e.jsx(a.Cell,{children:e.jsx(g,{cs:w,children:i.population.toLocaleString()})})]},i.country))})]})};Z.__RAW__=`import React from 'react';

import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {AriaLiveRegion, createComponent, useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Table} from '@workday/canvas-kit-react/table';
import {Text} from '@workday/canvas-kit-react/text';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {filterIcon, searchIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface CountryData {
  country: string;
  capital: string;
  population: number;
}

interface CountryFilters {
  country: string;
  capital: string;
  population: string;
}

const countryData: CountryData[] = [
  {country: 'Australia', capital: 'Canberra', population: 25690000},
  {country: 'Bahamas', capital: 'Nassau', population: 407906},
  {country: 'Canada', capital: 'Ottawa', population: 38250000},
  {country: 'Fiji', capital: 'Suva', population: 924610},
  {country: 'Ghana', capital: 'Accra', population: 32830000},
  {country: 'Hong Kong', capital: 'City of Victoria', population: 7413000},
  {country: 'India', capital: 'New Delhi', population: 1408000000},
  {country: 'Ireland', capital: 'Dublin', population: 5033000},
  {country: 'Jamaica', capital: 'Kingston', population: 2828000},
  {country: 'Kenya', capital: 'Nairobi', population: 53010000},
  {country: 'Micronesia', capital: 'Palikir', population: 113131},
  {country: 'New Zealand', capital: 'Wellington', population: 5123000},
  {country: 'Philippines', capital: 'Manila', population: 113900000},
  {country: 'Puerto Rico', capital: 'San Juan', population: 3264000},
  {country: 'Samoa', capital: 'Apia', population: 218764},
  {country: 'Singapore', capital: 'Singapore', population: 5454000},
  {country: 'Tanzania', capital: 'Dodoma', population: 63590000},
  {country: 'United Kingdom', capital: 'London', population: 67330000},
  {country: 'United States', capital: 'Washington, D.C.', population: 331900000},
  {country: 'Zimbabwe', capital: 'Harare', population: 15990000},
];

const textStyles = createStyles({
  paddingInlineStart: system.padding.md,
});

interface FilterableColumnHeaderProps {
  label: string;
  onFilter: (filterObject: {filterText: string; column: string}) => void;
}

const FilterableColumnHeader = createComponent('th')({
  displayName: 'FilterableColumnHeader',
  Component: ({label, onFilter}: FilterableColumnHeaderProps, ref) => {
    const [inputVal, setInputVal] = React.useState('');
    const targetId = useUniqueId();
    const popupId = useUniqueId();
    const initialFocusRef = React.useRef(null);
    const filterPopupModel = usePopupModel({
      initialFocusRef,
    });

    useCloseOnOutsideClick(filterPopupModel);
    useCloseOnEscape(filterPopupModel);
    useInitialFocus(filterPopupModel);
    useFocusRedirect(filterPopupModel);
    useReturnFocus(filterPopupModel);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const newVal = e.target.value;
      setInputVal(newVal);
      onFilter({filterText: newVal, column: label.toLowerCase()});
    }

    return (
      <Table.Header scope="col" aria-owns={targetId + ' ' + popupId}>
        <Popup model={filterPopupModel}>
          <Tooltip title={\`Filter\${inputVal !== '' ? \`ed: "\${inputVal}"\` : ''}\`} type="description">
            <Popup.Target
              as={TertiaryButton}
              id={targetId}
              icon={inputVal === '' ? searchIcon : filterIcon}
              iconPosition="end"
            >
              {label}
            </Popup.Target>
          </Tooltip>
          <Popup.Popper>
            <Popup.Card id={popupId}>
              <Popup.Heading>Filter</Popup.Heading>
              <Popup.Body>
                <FormField>
                  <FormField.Label>{label}</FormField.Label>
                  <FormField.Input as={InputGroup}>
                    <InputGroup.InnerStart>
                      <SystemIcon icon={searchIcon} />
                    </InputGroup.InnerStart>
                    <InputGroup.Input
                      as={TextInput}
                      type="search"
                      ref={initialFocusRef}
                      onChange={handleChange}
                      value={inputVal}
                    />
                  </FormField.Input>
                </FormField>
              </Popup.Body>
              <Flex>
                <Popup.CloseButton as={PrimaryButton}>Done</Popup.CloseButton>
              </Flex>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </Table.Header>
    );
  },
});

function filterTableData(data: CountryData[], filters: CountryFilters) {
  return data.filter(item => {
    for (const key in filters) {
      if (filters.hasOwnProperty(key) && filters[key as keyof CountryFilters]) {
        const filterText = filters[key as keyof CountryFilters].toLowerCase();
        const itemValue = String(item[key as keyof CountryData]).toLowerCase();
        if (!itemValue.includes(filterText)) {
          return false;
        }
      }
    }
    return true;
  });
}

export const FilterableColumnHeaders = () => {
  const [filteredData, setFilteredData] = React.useState(countryData);
  const [colFilters, setColFilters] = React.useState<CountryFilters>({
    country: '',
    capital: '',
    population: '',
  });

  React.useEffect(() => {
    setFilteredData(filterTableData(countryData, colFilters));
  }, [colFilters]);

  let typingDelay: NodeJS.Timeout;
  function handleColFilters({filterText, column}: {filterText: string; column: string}) {
    clearTimeout(typingDelay);
    typingDelay = setTimeout(() => {
      setColFilters(prev => {
        const newState = {...prev, [column]: filterText};
        return newState;
      });
    }, 400);
  }

  return (
    <Table cs={{maxHeight: '40rem'}}>
      <Table.Caption>
        Population Listed by Country (2021)
        <AriaLiveRegion cs={textStyles}>
          {filteredData.length} of {countryData.length} items
        </AriaLiveRegion>
      </Table.Caption>
      <Table.Head>
        <Table.Row>
          <FilterableColumnHeader label="Country" onFilter={handleColFilters} />
          <FilterableColumnHeader label="Capital" onFilter={handleColFilters} />
          <FilterableColumnHeader label="Population" onFilter={handleColFilters} />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {filteredData.map(item => {
          return (
            <Table.Row key={item.country}>
              <Table.Header scope="row">
                <Text cs={textStyles}>{item.country}</Text>
              </Table.Header>
              <Table.Cell>
                <Text cs={textStyles}>{item.capital}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text cs={textStyles}>{item.population.toLocaleString()}</Text>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
`;function q(o){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...E(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{title:"Guides/Accessibility/Examples/Advanced Tables"}),`
`,e.jsx(t.h2,{id:"advanced-table-examples",children:"Advanced Table Examples"}),`
`,e.jsx(t.p,{children:`Tables should only be used to organize data that has a clear relationship between rows and columns,
like a calendar or a schedule. Never use a table just for page layout.`}),`
`,e.jsx(t.p,{children:`When you use the proper HTML table markup, a screen reader can help a user navigate the table. It
will automatically read the column and row headers as they move through the data, so they always
know what information they're looking at.`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"All tables should have a clear header and a descriptive title."}),`
`,e.jsx(t.li,{children:`Keep your tables simple. If a table is too complex, it might be better to break it up into several
smaller tables or use a different format.`}),`
`]}),`
`,e.jsxs(t.p,{children:["Out of the box, ",e.jsx(t.code,{children:"Table"}),` is a lightweight compound component with a high degree of flexibility, but
not much functionality outside of providing a basic table layout. This flexibility lets developers
implement common features, such as selecting rows and sorting columns, on top of `,e.jsx(t.code,{children:"Table"}),` to meet
their specific application needs.`]}),`
`,e.jsx(t.p,{children:`The Workday Accessibility Team has researched and developed the following examples below to
demonstrate how to build these accessible table patterns. We've listed the specific considerations
and decisions we've made for each of the examples.`}),`
`,e.jsx(t.h3,{id:"expandable-rows",children:"Expandable Rows"}),`
`,e.jsx(t.p,{children:`Expandable Rows combines the likes of an accordion with tabular data tables. Column 1 renders icon
buttons with 2 states, a collapsed and expanded state. A new row that spans the entire width of the
table is added to the table just after the expanded row.`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"aria-expanded"}),` property is added to the chevron button to communicate this state to screen
reader users.`]}),`
`,e.jsxs(t.li,{children:["A Canvas accessible ",e.jsx(t.code,{children:"Tooltip"}),` component is used to assign names to each icon button based on the
most useful value in the row. In this example, we combined the car make (in column 1) and model
(in column 2) together. This allows everyone to view the name of the icon buttons by hovering the
mouse or focusing with the keyboard.`]}),`
`,e.jsxs(t.li,{children:["The expanded row uses ",e.jsx(t.code,{children:"colspan"}),` to span the entire width of the table and support screen readers.
This space provides flexibility to show headings, lists, and other structured content for the
table row above.`]}),`
`,e.jsx(t.li,{children:`There is no explicit relationship between a row of cells and the spanned content below it. The
spanned content is assumed to belong to the row of cells above it, based on established accordion
patterns and logical reading order of content rendered to the screen.`}),`
`,e.jsx(t.li,{children:`Outlining hierarchy with additional nested rows in the table is not supported for screen readers
in this example.`}),`
`]}),`
`,e.jsx(f,{code:G}),`
`,e.jsx(t.h3,{id:"selectable-rows",children:"Selectable Rows"}),`
`,e.jsxs(t.p,{children:["Using a ",e.jsx(t.code,{children:"Checkbox"}),` labeled "Select All" inside of a column header can be a confusing experience for
screen reader users. Screen readers will automatically announce the "Select All" label in the column
header each time users are reading any of the Check boxes in the first column. For instance, the
`,e.jsx(t.code,{children:"Checkbox"})," in row 4 is definitely not going to select all of the rows. Here is what we did about it:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["We intentionally rendered row 1, column 1 as a standard ",e.jsx(t.code,{children:"<td>"}),` element so screen readers won't
automatically announce the "Select All" label while reading cells in column 1.`]}),`
`,e.jsxs(t.li,{children:[`Our research found that VoiceOver (MacOS v12.7, Safari v17.1) persistently announce "Select All"
despite using the `,e.jsx(t.code,{children:"<td>"})," element because of the optional ",e.jsx(t.code,{children:"<thead>"}),` element in the table. We
omitted the optional `,e.jsx(t.code,{children:"<thead>"})," and ",e.jsx(t.code,{children:"<tbody>"})," elements from this example for that reason."]}),`
`,e.jsxs(t.li,{children:["We used Canvas' accessible ",e.jsx(t.code,{children:"Tooltip"}),` component to assign names to each Checkbox based on the most
useful value in the row, the topping name. This allows everyone to view the name of the checkboxes
by hovering the mouse or focusing with the keyboard.`]}),`
`,e.jsxs(t.li,{children:[`We rendered the cells in column 2 as the row headers for the table, enabling screen readers to
automatically announce the topping name even while reading down the Amounts in column 3. When we
rendered column 1 as row headers, then reading down column 2 (Topping Name) sounded redundant
because the `,e.jsx(t.code,{children:"Checkbox"})," names in column 1 are identical to the Topping Name in column 2."]}),`
`]}),`
`,e.jsx(f,{code:_}),`
`,e.jsx(t.h3,{id:"filterable-column-headers",children:"Filterable Column Headers"}),`
`,e.jsxs(t.p,{children:["In this example, we demonstrate using the ",e.jsx(t.code,{children:"Popup"}),` component in each column header allowing users to
search and filter the data on the table. The `,e.jsx(t.code,{children:"Popup"}),` component relies on React Portals to render the
popup elements at the bottom of the browser's DOM presenting 2 key challenges for accessibility:`]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Keyboard focus order of the elements in the popup,"}),`
`,e.jsx(t.li,{children:"Screen readers' reading order of the content rendered in the browser."}),`
`]}),`
`,e.jsx(t.p,{children:"Here's what we did about it:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Canvas Kit includes a ",e.jsx(t.code,{children:"usePopupModel"}),` hook, with quite a few additional hooks developers can add
to their models. In particular, the `,e.jsx(t.code,{children:"useFocusRedirect"}),` hook manages keyboard focus between the
`,e.jsx(t.code,{children:"<Popup.Target>"})," button and the popup content."]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"useInitialFocus"}),` hook allows developers to specify which element receives keyboard focus when
the popup appears. In this example, we auto-focused the search input field.`]}),`
`,e.jsxs(t.li,{children:["To address the reading order of content, we set the ",e.jsx(t.code,{children:"aria-owns"}),` property onto the parent
`,e.jsx(t.code,{children:"<Table.Header>"})," component (",e.jsx(t.code,{children:"<th>"})," DOM element) with 2 unique ",e.jsx(t.code,{children:"id"})," values. The first ",e.jsx(t.code,{children:"id"}),` refers
to the `,e.jsx(t.code,{children:"<Popup.Target>"})," button and the second refers to the ",e.jsx(t.code,{children:"<Popup.Card>"}),` container element. This
manually reassigns the column header's `,e.jsx(t.code,{children:"<Popup.Target>"})," button and the ",e.jsx(t.code,{children:"Popup"}),` contents as
siblings in the browser's accessibility tree hierarchy. Screen readers `,e.jsx(t.strong,{children:"should"}),` read the column
header buttons and the popup content in sequential order even though they are not siblings in the
DOM.`]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"type='description'"})," variant of the Canvas ",e.jsx(t.code,{children:"Tooltip"}),` is used to communicate the filtered state
of the column header, and assigned to the accessible description of the column header
`,e.jsx(t.code,{children:"<TertiaryButton>"})," component."]}),`
`,e.jsxs(t.li,{children:["The Canvas ",e.jsx(t.code,{children:"AriaLiveRegion"}),` component is used to render the "X of Y items" status inside the table
caption. This enables screen readers to automatically describe the filter state changes of the
table content to users in real time. We recommend validating whether this use of a live region is
well supported for your screen reader and browser combinations first.`]}),`
`]}),`
`,e.jsx(f,{code:Z}),`
`,e.jsx(t.h3,{id:"sortable-column-headers",children:"Sortable Column Headers"}),`
`,e.jsx(t.p,{children:`The challenge in this example is to provide all of the necessary information about the interactive
column headers, the sort state of the column, and instructions about how the table will be sorted
without giving too much information to users while reading the data cells below.`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"aria-sort"})," property has been added to each of the ",e.jsx(t.code,{children:"<Table.Header>"})," components (",e.jsx(t.code,{children:"<th>"}),` DOM
element) and updated to `,e.jsx(t.code,{children:"ascending"})," or ",e.jsx(t.code,{children:"descending"}),` to reflect the current sort state. We
recommend validating whether this property is well supported for your screen reader and browser
combinations first.`]}),`
`,e.jsxs(t.li,{children:["A ",e.jsx(t.code,{children:"<TertiaryButton>"})," describing the column name is used inside of the ",e.jsx(t.code,{children:"<Table.Header>"})," component."]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"description"})," variant of the Canvas ",e.jsx(t.code,{children:"Tooltip"}),` component is applied to the button in the column
header and applied to the accessible description of the button with the `,e.jsx(t.code,{children:"aria-description"}),`
property. This is used to describe how the column will be sorted when pressed and screen readers
will only read this description while focusing on the column headers, not while reading the data
cells below.`]}),`
`]}),`
`,e.jsx(f,{code:J})]})}function io(o={}){const{wrapper:t}={...E(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(q,{...o})}):q(o)}export{io as default};
