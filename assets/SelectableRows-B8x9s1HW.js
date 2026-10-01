import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as g}from"./index-3YbjYt95.js";import{ae as y}from"./index-B9ymSqEQ.js";import{E as C}from"./union-Bl5K5Dnq.js";import{e as m}from"./index-IfJi-UCQ.js";import{C as b}from"./Checkbox-DHRnBNy-.js";import{H as j}from"./TypeLevelComponents-DVM1BeSA.js";import{g as A,u as R}from"./useUniqueId-BoA5684E.js";import{T as a}from"./Table-DAJEro48.js";import{c as k,a as z}from"./cs-CmRirKzJ.js";import{T as S}from"./Tooltip-DuMKY5lE.js";import{c as v}from"./components-BduoFc0l.js";import{c as f}from"./index-udXzHylk.js";import"./iframe-Ck61GRTQ.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CkftECn1.js";import"./Svg-C00Tmbol.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-BwxRjdFx.js";import"./Text-BafGAOu0.js";import"./mergeStyles-BqEZTk84.js";import"./Box-DVE1QV2w.js";import"./index-DZtdzgZp.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-CkgKa82T.js";import"./grid-snaFRi1S.js";import"./cornerShape-BWVxTIwC.js";import"./Card-CYKNWwWd.js";import"./ExternalHyperlink-DJmm2Dtm.js";import"./Hyperlink-DmvJhv_F.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BEEfNfsC.js";import"./BaseButton-44-j6NiF.js";import"./Button-CqKi3FI5.js";import"./lerna-BNXKUBRi.js";import"./CanvasProvider-DNBEbcF4.js";import"./index-kj8ZfNNN.js";import"./TertiaryButton-CWVeGnd9.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-BU_IyJqu.js";import"./ColorInput-r8MyRxxI.js";import"./check-small-BqSDQIle.js";import"./TextInput-B08tbWWW.js";import"./types-DXdjelYI.js";import"./FormField-BYGgJeBh.js";import"./models-CHTjB2ql.js";import"./check-Ds6vsrAM.js";import"./Expandable-BY2EcRhU.js";import"./Avatar-CrbYWV51.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DrkxiIBB.js";import"./Popup-BkAaHxKC.js";import"./getTransformFromPlacement-BLUVWzCJ.js";import"./x-B1faap_l.js";import"./Popper-xGJeroz5.js";import"./usePopupTarget-Cpbf1SBk.js";import"./useInitialFocus-BrnRXErF.js";import"./useReturnFocus-CctAy0WF.js";import"./useCloseOnEscape-D68v2Xn6.js";import"./useFocusRedirect-BLL9rjzj.js";import"./Breadcrumbs-Dlz2I1L8.js";import"./useOverflowListTarget-1Iqk5Xbo.js";import"./useListItemRegister-D7GXdvJ4.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-kcfqlzjO.js";import"./useTooltip-Be2IlHUD.js";import"./OverflowTooltip-fccb4IcO.js";import"./useListItemSelect-CmjbAwcN.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CFOa3i8g.js";const D=z({base:{gridTemplateColumns:"3.5rem repeat(2, 1fr)",transition:"background-color 200ms"},modifiers:{isSelected:{true:{backgroundColor:f.brand.surface.primary.default}}}}),s=k({backgroundColor:f.surface.alt.default}),d=k({backgroundColor:"transparent"}),H=v("tr")({displayName:"SelectableRow",Component:({onSelect:o,rowData:t})=>{const c=R();return e.jsxs(a.Row,{cs:D({isSelected:t.checked}),children:[e.jsx(a.Cell,{cs:d,children:e.jsx(S,{title:"Select Row",children:e.jsx(b,{checked:t.checked,onChange:o,"aria-describedby":c})})}),e.jsx(a.Header,{id:c,cs:d,scope:"row",children:t.name}),e.jsx(a.Cell,{cs:d,children:t.amount})]})}}),I=[{name:"Pepperoni",amount:"2.5 oz.",checked:!1},{name:"Mozzarella",amount:"5 oz.",checked:!1},{name:"Basil",amount:"10 Leaves",checked:!1},{name:"Roasted Red Peppers",amount:"3 oz.",checked:!1},{name:"Mushrooms",amount:"2 oz.",checked:!1}],h=A(),x=()=>{const[o,t]=m.useState("unchecked"),[c,r]=m.useState(I),T=n=>{const l=c.map(i=>i.name===n?{...i,checked:!i.checked}:i);r(l);const p=l.filter(i=>i.checked===!0);p.length===0?t("unchecked"):p.length===l.length?t("checked"):t("indeterminate")},w=()=>{if(o==="checked"||o==="indeterminate"){t("unchecked");const n=c.map(l=>({...l,checked:!1}));r(n)}if(o==="unchecked"){t("checked");const n=c.map(l=>({...l,checked:!0}));r(n)}};return e.jsxs(e.Fragment,{children:[e.jsx(j,{as:"h3",id:h,size:"small",children:"Select your pizza toppings"}),e.jsxs(a,{"aria-labelledby":h,children:[e.jsxs(a.Row,{gridTemplateColumns:"3.5rem repeat(2, 1fr)",children:[e.jsx(a.Cell,{cs:s,children:e.jsx(S,{title:"Select All",children:e.jsx(b,{checked:o==="checked",indeterminate:o==="indeterminate",onChange:w})})}),e.jsx(a.Header,{scope:"col",cs:s,children:"Toppings"}),e.jsx(a.Header,{scope:"col",cs:s,children:"Amount"})]}),e.jsx(a.Body,{children:c.map(n=>e.jsx(H,{rowData:n,onSelect:()=>T(n.name)},n.name))})]})]})};x.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {createComponent, generateUniqueId, useUniqueId} from '@workday/canvas-kit-react/common';
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
    const rowNameId = useUniqueId();

    return (
      <Table.Row cs={selectableRowStencil({isSelected: rowData.checked})}>
        <Table.Cell cs={tableCellStyles}>
          <Tooltip title="Select Row">
            <Checkbox checked={rowData.checked} onChange={onSelect} aria-describedby={rowNameId} />
          </Tooltip>
        </Table.Cell>
        <Table.Header id={rowNameId} cs={tableCellStyles} scope="row">
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
`;function u(o){const t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...g(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Guides/Accessibility/Table Patterns/Selectable Rows"}),`
`,e.jsx(t.h2,{id:"selectable-rows",children:"Selectable Rows"}),`
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
`,e.jsxs(t.li,{children:["We used Canvas Kit's ",e.jsx(t.code,{children:"Tooltip"}),` component to assign concise names to each Checkbox, describing
their purpose of selecting rows. This allows everyone to view the name of the checkboxes by
hovering the mouse or focusing with the keyboard.`]}),`
`,e.jsxs(t.li,{children:["Since each checkbox is not uniquely labeled, we added ",e.jsx(t.code,{children:"aria-describedby"}),` to the checkbox,
referencing the unique `,e.jsx(t.code,{children:"id"}),` of the row header cell. This practice gives screen readers more
context about which value each checkbox is refering to.`]}),`
`,e.jsx(t.li,{children:`We rendered the cells in column 2 as the row headers for the table, enabling screen readers to
automatically announce the topping name even while reading down the Amounts in column 3.`}),`
`]}),`
`,e.jsx(C,{code:x})]})}function ct(o={}){const{wrapper:t}={...g(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(u,{...o})}):u(o)}export{ct as default};
