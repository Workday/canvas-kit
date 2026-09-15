import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as m}from"./index-3YbjYt95.js";import{ae as b}from"./index-B6_fZJIH.js";import{E as C}from"./union-73eBhY97.js";import{e as w}from"./index-IfJi-UCQ.js";import{a as x,b as g}from"./arrow-up-small-CO3NlRdN.js";import{T as n}from"./Table-qLELy8Y1.js";import{c as f}from"./components-DppiPmWT.js";import{T as c}from"./Text-C5D3Ht9T.js";import{c as D}from"./cs-CmRirKzJ.js";import{T}from"./Tooltip-9ICStd_k.js";import{T as H}from"./TertiaryButton-CyD_x8wF.js";import{p as j}from"./index-udXzHylk.js";import"./iframe-C5jHHwC4.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CFi1VLoO.js";import"./Svg-BS_Dvh6q.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-BadRR8Ou.js";import"./mergeStyles-0aQAs1eh.js";import"./Box-AGfoWgij.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-bOHHmX-t.js";import"./grid-DtbHyXmR.js";import"./cornerShape-C5U5sQXc.js";import"./Card-DzhLlfJA.js";import"./ExternalHyperlink-uYYbfEzo.js";import"./Hyperlink-T26S0cW3.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BD2FVi4i.js";import"./BaseButton-CKzS3UNH.js";import"./Button-BYCIT0TJ.js";import"./lerna-BfH53aY9.js";import"./CanvasProvider-Bsmzj5m5.js";import"./index-kj8ZfNNN.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-jZfo-0ua.js";import"./ColorPicker-Bf6aRSJA.js";import"./ColorInput-DSCHnU6T.js";import"./check-small-BqSDQIle.js";import"./TextInput-DWIaRQL-.js";import"./types-DXdjelYI.js";import"./FormField-BFV0xoAp.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./check-Ds6vsrAM.js";import"./Expandable-K-4Ybhc9.js";import"./Avatar-juNxhmne.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DzCYEDbr.js";import"./Popup-CLuCYqLn.js";import"./getTransformFromPlacement-xNvjyxNY.js";import"./x-B1faap_l.js";import"./Popper-xemT1TtK.js";import"./usePopupTarget-CifT6Oya.js";import"./useInitialFocus-C3yNoxbC.js";import"./useReturnFocus-DDQ4-kU9.js";import"./useCloseOnEscape-DqbNoIGf.js";import"./useFocusRedirect-BoLF_I5b.js";import"./Breadcrumbs-Cc0Qvzn9.js";import"./useOverflowListTarget-DEnwFStT.js";import"./useListItemRegister-BtedmPXX.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DtS_Zcjq.js";import"./useTooltip-CsgEKIvN.js";import"./OverflowTooltip-CtkxcgW5.js";import"./useListItemSelect-Cwl5Guz1.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-iKGzF7_i.js";const u=[{country:"Australia",capital:"Canberra",population:2569e4},{country:"Bahamas",capital:"Nassau",population:407906},{country:"Canada",capital:"Ottawa",population:3825e4},{country:"Fiji",capital:"Suva",population:924610},{country:"Ghana",capital:"Accra",population:3283e4},{country:"Hong Kong",capital:"City of Victoria",population:7413e3},{country:"India",capital:"New Delhi",population:1408e6},{country:"Ireland",capital:"Dublin",population:5033e3},{country:"Jamaica",capital:"Kingston",population:2828e3},{country:"Kenya",capital:"Nairobi",population:5301e4},{country:"Micronesia",capital:"Palikir",population:113131},{country:"New Zealand",capital:"Wellington",population:5123e3},{country:"Philippines",capital:"Manila",population:1139e5},{country:"Puerto Rico",capital:"San Juan",population:3264e3},{country:"Samoa",capital:"Apia",population:218764},{country:"Singapore",capital:"Singapore",population:5454e3},{country:"Tanzania",capital:"Dodoma",population:6359e4},{country:"United Kingdom",capital:"London",population:6733e4},{country:"United States",capital:"Washington, D.C.",population:3319e5},{country:"Zimbabwe",capital:"Harare",population:1599e4}],i={column1SortDirection:"ascending",column2SortDirection:"none",column3SortDirection:"none"};function l(e){return e==="ascending"?"descending":"ascending"}function R(e,t){switch(t.column){case"Country":return e.column1SortDirection==="ascending"?t.payload.sort((a,r)=>r.country.localeCompare(a.country)):t.payload.sort((a,r)=>a.country.localeCompare(r.country)),{...i,column1SortDirection:l(e.column1SortDirection)};case"Capital":return e.column2SortDirection==="ascending"?t.payload.sort((a,r)=>r.capital.localeCompare(a.capital)):t.payload.sort((a,r)=>a.capital.localeCompare(r.capital)),{...i,column2SortDirection:l(e.column2SortDirection)};case"Population":return e.column3SortDirection==="ascending"?t.payload.sort((a,r)=>r.population-a.population):t.payload.sort((a,r)=>a.population-r.population),{...i,column3SortDirection:l(e.column3SortDirection)};default:return i}}const O=e=>e==="ascending"?x:e==="descending"?g:void 0,p=f("th")({displayName:"SortableColumnHeader",Component:({label:e,sortOrder:t,onSortAction:a,children:r,...S},h)=>o.jsx(n.Header,{ref:h,scope:"col","aria-sort":t,...S,children:o.jsx(T,{type:"description",title:`Sort ${l(t)}`,children:o.jsx(H,{icon:O(t),iconPosition:"end",onClick:()=>a(e),children:r})})})}),s=D({paddingInlineStart:j.sm}),y=()=>{const[e,t]=w.useReducer(R,i);function a(r){t({column:r,payload:u})}return o.jsxs(n,{cs:{maxHeight:"40rem"},children:[o.jsx(n.Caption,{children:"Population Listed by Country (2021)"}),o.jsx(n.Head,{children:o.jsxs(n.Row,{children:[o.jsx(p,{label:"Country",sortOrder:e.column1SortDirection,onSortAction:a,children:"Country"}),o.jsx(p,{label:"Capital",sortOrder:e.column2SortDirection,onSortAction:a,children:"Capital"}),o.jsx(p,{label:"Population",sortOrder:e.column3SortDirection,onSortAction:a,children:"Population"})]})}),o.jsx(n.Body,{children:u.map(r=>o.jsxs(n.Row,{children:[o.jsx(n.Header,{scope:"row",children:o.jsx(c,{cs:s,children:r.country})}),o.jsx(n.Cell,{children:o.jsx(c,{cs:s,children:r.capital})}),o.jsx(n.Cell,{children:o.jsx(c,{cs:s,children:r.population.toLocaleString()})})]},r.country))})]})};y.__RAW__=`import React from 'react';

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
`;function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(b,{title:"Guides/Accessibility/Table Patterns/Sortable Column Headers"}),`
`,o.jsx(t.h2,{id:"sortable-column-headers",children:"Sortable Column Headers"}),`
`,o.jsx(t.p,{children:`The challenge in this example is to provide all of the necessary information about the interactive
column headers, the sort state of the column, and instructions about how the table will be sorted
without giving too much information to users while reading the data cells below.`}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsxs(t.li,{children:["The ",o.jsx(t.code,{children:"aria-sort"})," property has been added to each of the ",o.jsx(t.code,{children:"<Table.Header>"})," components (",o.jsx(t.code,{children:"<th>"}),` DOM
element) and updated to `,o.jsx(t.code,{children:"ascending"})," or ",o.jsx(t.code,{children:"descending"}),` to reflect the current sort state. We
recommend validating whether this property is well supported for your screen reader and browser
combinations first.`]}),`
`,o.jsxs(t.li,{children:["A ",o.jsx(t.code,{children:"<TertiaryButton>"})," describing the column name is used inside of the ",o.jsx(t.code,{children:"<Table.Header>"})," component."]}),`
`,o.jsxs(t.li,{children:["The ",o.jsx(t.code,{children:"description"})," variant of the Canvas ",o.jsx(t.code,{children:"Tooltip"}),` component is applied to the button in the column
header and applied to the accessible description of the button with the `,o.jsx(t.code,{children:"aria-description"}),`
property. This is used to describe how the column will be sorted when pressed and screen readers
will only read this description while focusing on the column headers, not while reading the data
cells below.`]}),`
`]}),`
`,o.jsx(C,{code:y})]})}function et(e={}){const{wrapper:t}={...m(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(d,{...e})}):d(e)}export{et as default};
