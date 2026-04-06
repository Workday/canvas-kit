import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Text} from '@workday/canvas-kit-react/text';
import {sortDownIcon, sortUpIcon} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
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
    return sortUpIcon;
  } else if (sortOrder === 'descending') {
    return sortDownIcon;
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
        <Tooltip type="description" title={`Sort ${getNextSortOrder(sortOrder)}`}>
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
  paddingInlineStart: system.space.x3,
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
    <Table maxHeight="40rem">
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
