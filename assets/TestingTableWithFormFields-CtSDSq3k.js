import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as b}from"./index-3YbjYt95.js";import{ae as j}from"./index-Bp1vAbJe.js";import{E as v}from"./union-Csj3bYC6.js";import{e as p}from"./index-IfJi-UCQ.js";import{t as w}from"./trash-E_Z-JrHx.js";import{u as m}from"./useUniqueId-BoA5684E.js";import{T as o}from"./Table-D9NIGuz3.js";import{c as n}from"./cs-CmRirKzJ.js";import{T as d}from"./TextInput-rOV0Sdab.js";import{C as H}from"./Checkbox-DMks6fKN.js";import{T as S}from"./Tooltip-DC2MIugw.js";import{T as k}from"./TertiaryButton-GhfgKIvV.js";import{t as N,c as R,g as A,p as E}from"./index-DE-upP0k.js";import"./iframe-DUz6TVNi.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bc5FTqSz.js";import"./Svg-CDh6670a.js";import"./px2rem-C0KbprIx.js";import"./components-DIXe_rXl.js";import"./StatusIndicator-BmiiDMjj.js";import"./Text-Cdlm4YRv.js";import"./mergeStyles-C3mqUtmC.js";import"./Box-BwSubRt6.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-1BnMPfFj.js";import"./grid-DeBl5Muz.js";import"./cornerShape-DO7zpd3K.js";import"./Card-CLZCJsGP.js";import"./ExternalHyperlink-ezvqZYmg.js";import"./Hyperlink-DAuEViNw.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-rEEjUScI.js";import"./BaseButton-D8zYHbxs.js";import"./Button-BuO9pq7_.js";import"./lerna-DjshtMtA.js";import"./CanvasProvider-BTLvcapT.js";import"./index-D-t2nnqG.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BFh8CuXH.js";import"./ColorPicker-B3hCckRJ.js";import"./ColorInput-T4JGhPAB.js";import"./check-small-BqSDQIle.js";import"./FormField-Dq_eL3Ph.js";import"./models-CHTjB2ql.js";import"./check-Ds6vsrAM.js";import"./Expandable-BSMWoT5r.js";import"./Avatar-Hn8J_kPA.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Bg-DdY8-.js";import"./Popup-B3eOes-q.js";import"./getTransformFromPlacement-CVuX70VQ.js";import"./x-B1faap_l.js";import"./Popper-BRbe_tz9.js";import"./usePopupTarget-KBNzPGUp.js";import"./useInitialFocus-DzxHd3wF.js";import"./useReturnFocus-CL2JvsSp.js";import"./useCloseOnEscape-Pga8fWKh.js";import"./useFocusRedirect-Cqk2nVwG.js";import"./Breadcrumbs-CRhNXeMi.js";import"./useOverflowListTarget-Cqie2m_G.js";import"./useListItemRegister-NCGS7HKL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DT2pOe49.js";import"./useTooltip-COXD4t91.js";import"./OverflowTooltip-CieFzTnq.js";import"./useListItemSelect-C_0Ny6tb.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CyhOkoOt.js";import"./types-DXdjelYI.js";const h=n({gridTemplateColumns:"24rem 12rem 7rem 7rem"}),i=n({display:"flex",justifyContent:"center",alignItems:"center"}),D=n({position:"relative",display:"inline-block"}),B=n({position:"absolute",left:A.sm,top:"50%",transform:"translateY(-50%)",color:R.fg.default,pointerEvents:"none",zIndex:1,...N.subtext.lg}),L=n({paddingInlineStart:E.md}),F=["Rent","Groceries","Electricity bill","Internet service","Gasoline","Cell phone bill","Health insurance","Car payment","Student loan payment","Dining out"],M=({itemName:r,labelIds:t})=>{const[f,x]=p.useState(r),[T,c]=p.useState("");function g(s){x(s.target.value)}function I(s){const l=s.target.value;if(l.includes(".")){const a=l.split(".");if(a[1]&&a[1].length>2){const C=a[0]+"."+a[1].substring(0,2);c(C);return}}c(l)}return e.jsxs(o.Row,{cs:h,children:[e.jsx(o.Header,{scope:"row",children:e.jsx(d,{onChange:g,value:f,"aria-labelledby":t.name})}),e.jsx(o.Cell,{children:e.jsxs("div",{className:D,children:[e.jsx("span",{className:B,"aria-hidden":"true",children:"$"}),e.jsx(d,{type:"number",value:T,onChange:I,placeholder:"0.00",min:"0",step:"0.01",width:"10.5rem","aria-labelledby":t.amount,cs:L})]})}),e.jsx(o.Cell,{cs:i,children:e.jsx(H,{"aria-labelledby":t.recon})}),e.jsx(o.Cell,{cs:i,children:e.jsx(S,{title:"Delete",children:e.jsx(k,{icon:w})})})]})},y=()=>{const r={name:m(),amount:m(),recon:m()};return e.jsxs(o,{children:[e.jsx(o.Caption,{children:"Budget Planning Tool"}),e.jsx(o.Head,{children:e.jsxs(o.Row,{cs:h,children:[e.jsxs(o.Header,{scope:"col",id:r.name,children:["Expense Name"," "]}),e.jsxs(o.Header,{scope:"col",id:r.amount,children:["Budgeted Amount (USD)"," "]}),e.jsx(o.Header,{scope:"col",id:r.recon,cs:i,children:"Reconciled"}),e.jsxs(o.Header,{scope:"col",cs:i,children:["Actions"," "]})]})}),e.jsx(o.Body,{children:F.map(t=>e.jsx(M,{itemName:t,labelIds:r}))})]})};y.__RAW__=`import React from 'react';

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
`,e.jsx(v,{code:y})]})}function pt(r={}){const{wrapper:t}={...b(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(u,{...r})}):u(r)}export{pt as default};
