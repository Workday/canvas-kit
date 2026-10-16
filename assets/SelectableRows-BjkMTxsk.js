import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as g}from"./index-3YbjYt95.js";import{ae as y}from"./index-EBgFcv5i.js";import{E as C}from"./union-BB63apep.js";import{e as m}from"./index-IfJi-UCQ.js";import{C as b}from"./Checkbox-Bq9zPtce.js";import{H as j}from"./TypeLevelComponents-BIf-Sb8C.js";import{g as A,u as R}from"./useUniqueId-BoA5684E.js";import{T as a}from"./Table-CTN-R6cb.js";import{c as k,a as z}from"./cs-CmRirKzJ.js";import{T as S}from"./Tooltip-CSGy_WI_.js";import{c as v}from"./components-BIe4YBQT.js";import{c as f}from"./index--KWQvxqz.js";import"./iframe-B7df14hJ.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CUbzRY0K.js";import"./Svg-DEIkz5dS.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-COFktHaJ.js";import"./Text-CNQ2hnGj.js";import"./mergeStyles-DdaEVkWU.js";import"./Box-Iypa-ysL.js";import"./index-5enOfKoO.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BwCXUuSV.js";import"./grid-DXeFpVCA.js";import"./cornerShape-SMDvHRmU.js";import"./Card-CEBuJOSv.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-BvCIMCCX.js";import"./Hyperlink-DdjEfQT-.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-KazAI8Tn.js";import"./BaseButton-C49WX9Rc.js";import"./Button-IFDag6rZ.js";import"./lerna-C1CB0Xoi.js";import"./CanvasProvider-BHb5_c8k.js";import"./index-kj8ZfNNN.js";import"./TertiaryButton-CYMp_DqV.js";import"./ColorPicker-fgt1yNAi.js";import"./ColorInput-Cec_SRld.js";import"./check-small-BqSDQIle.js";import"./TextInput-C3mJl_eO.js";import"./types-DXdjelYI.js";import"./FormField--j1qiwmN.js";import"./models-CHTjB2ql.js";import"./check-Ds6vsrAM.js";import"./Expandable-vowNc99p.js";import"./Avatar-aL9vVSpj.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cs0Aoz0c.js";import"./Popup-C8V0gvhY.js";import"./getTransformFromPlacement-CBrFg0vm.js";import"./x-B1faap_l.js";import"./Popper-CqSBbT2S.js";import"./isElementRTL-lizwOp5U.js";import"./usePopupTarget-D6mRuUoU.js";import"./useInitialFocus-Cyj9VBtN.js";import"./useReturnFocus-CdbVNFA8.js";import"./useCloseOnEscape-p6BLzHcP.js";import"./useFocusRedirect-B06ozcxf.js";import"./Breadcrumbs-CSWDmukJ.js";import"./useOverflowListItemMeasure--2JoF_M1.js";import"./useListItemRegister-CVfhnkS0.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-C93fbBQV.js";import"./useTooltip-DzymDaaP.js";import"./OverflowTooltip-q2DzOlhE.js";import"./useListItemRovingFocus-BNNvfPJ2.js";import"./useListItemSelect-D6fgT6R_.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CNKhJ8da.js";import"./Flex-Pvt9KTg5.js";const D=z({base:{gridTemplateColumns:"3.5rem repeat(2, 1fr)",transition:"background-color 200ms"},modifiers:{isSelected:{true:{backgroundColor:f.brand.surface.primary.default}}}}),s=k({backgroundColor:f.surface.alt.default}),d=k({backgroundColor:"transparent"}),H=v("tr")({displayName:"SelectableRow",Component:({onSelect:o,rowData:t})=>{const c=R();return e.jsxs(a.Row,{cs:D({isSelected:t.checked}),children:[e.jsx(a.Cell,{cs:d,children:e.jsx(S,{title:"Select Row",children:e.jsx(b,{checked:t.checked,onChange:o,"aria-describedby":c})})}),e.jsx(a.Header,{id:c,cs:d,scope:"row",children:t.name}),e.jsx(a.Cell,{cs:d,children:t.amount})]})}}),I=[{name:"Pepperoni",amount:"2.5 oz.",checked:!1},{name:"Mozzarella",amount:"5 oz.",checked:!1},{name:"Basil",amount:"10 Leaves",checked:!1},{name:"Roasted Red Peppers",amount:"3 oz.",checked:!1},{name:"Mushrooms",amount:"2 oz.",checked:!1}],h=A(),x=()=>{const[o,t]=m.useState("unchecked"),[c,r]=m.useState(I),T=n=>{const l=c.map(i=>i.name===n?{...i,checked:!i.checked}:i);r(l);const p=l.filter(i=>i.checked===!0);p.length===0?t("unchecked"):p.length===l.length?t("checked"):t("indeterminate")},w=()=>{if(o==="checked"||o==="indeterminate"){t("unchecked");const n=c.map(l=>({...l,checked:!1}));r(n)}if(o==="unchecked"){t("checked");const n=c.map(l=>({...l,checked:!0}));r(n)}};return e.jsxs(e.Fragment,{children:[e.jsx(j,{as:"h3",id:h,size:"small",children:"Select your pizza toppings"}),e.jsxs(a,{"aria-labelledby":h,children:[e.jsxs(a.Row,{gridTemplateColumns:"3.5rem repeat(2, 1fr)",children:[e.jsx(a.Cell,{cs:s,children:e.jsx(S,{title:"Select All",children:e.jsx(b,{checked:o==="checked",indeterminate:o==="indeterminate",onChange:w})})}),e.jsx(a.Header,{scope:"col",cs:s,children:"Toppings"}),e.jsx(a.Header,{scope:"col",cs:s,children:"Amount"})]}),e.jsx(a.Body,{children:c.map(n=>e.jsx(H,{rowData:n,onSelect:()=>T(n.name)},n.name))})]})]})};x.__RAW__=`import React from 'react';

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
`,e.jsx(C,{code:x})]})}function rt(o={}){const{wrapper:t}={...g(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(u,{...o})}):u(o)}export{rt as default};
