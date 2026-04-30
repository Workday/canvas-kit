import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as b}from"./index-3YbjYt95.js";import{ae as j}from"./index-Ued3TV6s.js";import{E as v}from"./union-B1cmIDVh.js";import{e as p}from"./index-IfJi-UCQ.js";import{t as w}from"./trash-BJh0QDR6.js";import{u as m}from"./useUniqueId-DC-hMIDg.js";import{T as o}from"./Table-DPxnEvid.js";import{c as n}from"./cs-DvbI9OYs.js";import{T as d}from"./TextInput-6zwAIbi7.js";import{C as H}from"./Checkbox-BHsF9QJ1.js";import{T as S}from"./Tooltip-B3V4skOm.js";import{T as k}from"./TertiaryButton-Byu4oUFZ.js";import{t as N,c as R,g as A,p as E}from"./index-CYsyLHR7.js";import"./iframe-C_doqmiv.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./components-CXVvXGX8.js";import"./StatusIndicator-D9ob0TlI.js";import"./Text-Dt7EG7Lz.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./Card-jS6NBqm3.js";import"./ExternalHyperlink-aQwGH6Hm.js";import"./Hyperlink-nKvi0fIc.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-DBrzjuE9.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-_9ty_XDZ.js";import"./lerna-slKU9GXb.js";import"./CanvasProvider-BRuur9nH.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DgctLa3l.js";import"./ColorPicker-BZa6q9cC.js";import"./ColorInput-DdzZruxs.js";import"./check-small-CEmhQ7AS.js";import"./FormField-DJsuX8Xy.js";import"./check-BG7HONvH.js";import"./Expandable-QifH75dX.js";import"./Avatar-Cf4g1-9p.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-DjQbCvjl.js";import"./Popup-CSV3rOyv.js";import"./x-BnLC6lG-.js";import"./Popper-CGqk9_xm.js";import"./usePopupTarget-ukAEISND.js";import"./useInitialFocus-D6f9kMrD.js";import"./useReturnFocus-CF7XwcyY.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./useFocusRedirect-CjUSvw7a.js";import"./Breadcrumbs-B3iwir0b.js";import"./useOverflowListTarget-BiBJ1XQw.js";import"./useListItemSelect-DTkyX0KL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D8z2UdGJ.js";import"./useTooltip-DUG7iIce.js";import"./OverflowTooltip-DIr6RY4Y.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-hE1PVdSE.js";import"./types-DXdjelYI.js";import"./LabelText-Dr-fa1dp.js";const h=n({gridTemplateColumns:"24rem 12rem 7rem 7rem"}),i=n({display:"flex",justifyContent:"center",alignItems:"center"}),D=n({position:"relative",display:"inline-block"}),B=n({position:"absolute",left:A.sm,top:"50%",transform:"translateY(-50%)",color:R.fg.default,pointerEvents:"none",zIndex:1,...N.subtext.lg}),L=n({paddingInlineStart:E.md}),F=["Rent","Groceries","Electricity bill","Internet service","Gasoline","Cell phone bill","Health insurance","Car payment","Student loan payment","Dining out"],M=({itemName:r,labelIds:t})=>{const[f,x]=p.useState(r),[T,c]=p.useState("");function g(s){x(s.target.value)}function I(s){const l=s.target.value;if(l.includes(".")){const a=l.split(".");if(a[1]&&a[1].length>2){const C=a[0]+"."+a[1].substring(0,2);c(C);return}}c(l)}return e.jsxs(o.Row,{cs:h,children:[e.jsx(o.Header,{scope:"row",children:e.jsx(d,{onChange:g,value:f,"aria-labelledby":t.name})}),e.jsx(o.Cell,{children:e.jsxs("div",{className:D,children:[e.jsx("span",{className:B,"aria-hidden":"true",children:"$"}),e.jsx(d,{type:"number",value:T,onChange:I,placeholder:"0.00",min:"0",step:"0.01",width:"10.5rem","aria-labelledby":t.amount,cs:L})]})}),e.jsx(o.Cell,{cs:i,children:e.jsx(H,{"aria-labelledby":t.recon})}),e.jsx(o.Cell,{cs:i,children:e.jsx(S,{title:"Delete",children:e.jsx(k,{icon:w})})})]})},y=()=>{const r={name:m(),amount:m(),recon:m()};return e.jsxs(o,{children:[e.jsx(o.Caption,{children:"Budget Planning Tool"}),e.jsx(o.Head,{children:e.jsxs(o.Row,{cs:h,children:[e.jsxs(o.Header,{scope:"col",id:r.name,children:["Expense Name"," "]}),e.jsxs(o.Header,{scope:"col",id:r.amount,children:["Budgeted Amount (USD)"," "]}),e.jsx(o.Header,{scope:"col",id:r.recon,cs:i,children:"Reconciled"}),e.jsxs(o.Header,{scope:"col",cs:i,children:["Actions"," "]})]})}),e.jsx(o.Body,{children:F.map(t=>e.jsx(M,{itemName:t,labelIds:r}))})]})};y.__RAW__=`import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  gridTemplateColumns: '24rem 12rem 7rem 7rem',
});

const centerStyles = createStyles({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const currencyInputContainer = createStyles({
  position: 'relative',
  display: 'inline-block',
});

const dollarPrefix = createStyles({
  position: 'absolute',
  left: system.gap.sm,
  top: '50%',
  transform: 'translateY(-50%)',
  color: system.color.fg.default,
  pointerEvents: 'none',
  zIndex: 1,
  ...system.type.subtext.lg,
});

const currencyInput = createStyles({
  paddingInlineStart: system.padding.md, // Make room for dollar sign
});

const expensesData = [
  'Rent',
  'Groceries',
  'Electricity bill',
  'Internet service',
  'Gasoline',
  'Cell phone bill',
  'Health insurance',
  'Car payment',
  'Student loan payment',
  'Dining out',
];

interface LineItemProps {
  itemName: string;
  labelIds: {[key: string]: string};
}

const LineItem = ({itemName, labelIds}: LineItemProps) => {
  const [name, setName] = React.useState(itemName);
  const [amount, setAmount] = React.useState('');

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    // For type="number", the browser handles most validation
    // We just need to limit decimal places to 2 for currency
    if (value.includes('.')) {
      const parts = value.split('.');
      if (parts[1] && parts[1].length > 2) {
        // Limit to 2 decimal places
        const limitedValue = parts[0] + '.' + parts[1].substring(0, 2);
        setAmount(limitedValue);
        return;
      }
    }

    setAmount(value);
  }

  return (
    <Table.Row cs={rowStyles}>
      <Table.Header scope="row">
        <TextInput onChange={handleNameChange} value={name} aria-labelledby={labelIds.name} />
      </Table.Header>
      <Table.Cell>
        <div className={currencyInputContainer}>
          <span className={dollarPrefix} aria-hidden="true">
            $
          </span>
          <TextInput
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
            min="0"
            step="0.01"
            width="10.5rem"
            aria-labelledby={labelIds.amount}
            cs={currencyInput}
          />
        </div>
      </Table.Cell>
      <Table.Cell cs={centerStyles}>
        <Checkbox aria-labelledby={labelIds.recon} />
      </Table.Cell>
      <Table.Cell cs={centerStyles}>
        <Tooltip title="Delete">
          <TertiaryButton icon={trashIcon} />
        </Tooltip>
      </Table.Cell>
    </Table.Row>
  );
};

export const WithFormFields = () => {
  const colHeadIds = {
    name: useUniqueId(),
    amount: useUniqueId(),
    recon: useUniqueId(),
  };

  return (
    <Table>
      <Table.Caption>Budget Planning Tool</Table.Caption>
      <Table.Head>
        <Table.Row cs={rowStyles}>
          <Table.Header scope="col" id={colHeadIds.name}>
            Expense Name{' '}
          </Table.Header>
          <Table.Header scope="col" id={colHeadIds.amount}>
            Budgeted Amount (USD){' '}
          </Table.Header>
          <Table.Header scope="col" id={colHeadIds.recon} cs={centerStyles}>
            Reconciled
          </Table.Header>
          <Table.Header scope="col" cs={centerStyles}>
            Actions{' '}
          </Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {expensesData.map(i => (
          <LineItem itemName={i} labelIds={colHeadIds} />
        ))}
      </Table.Body>
    </Table>
  );
};
`;function u(r){const t={code:"code",h2:"h2",li:"li",ul:"ul",...b(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Guides/Accessibility/Testing/Tables With Form Fields"}),`
`,e.jsx(t.h2,{id:"table-with-form-field-components",children:"Table with form field components"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Using ",e.jsx(t.code,{children:"aria-labelledby"})," id references on the form field inputs to the column header name"]}),`
`,e.jsx(t.li,{children:"Testing form fields as table row headers"}),`
`]}),`
`,e.jsx(v,{code:y})]})}function ut(r={}){const{wrapper:t}={...b(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(u,{...r})}):u(r)}export{ut as default};
