import React from 'react';

import {Table} from '@workday/canvas-kit-preview-react/table';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Text} from '@workday/canvas-kit-react/text';
import {sortDownIcon, sortUpIcon} from '@workday/canvas-system-icons-web';

const exampleData = [
  {country: 'Australia', capital: 'Canberra', pop: 25690000},
  {country: 'Bahamas', capital: 'Nassau', pop: 407906},
  {country: 'Canada', capital: 'Ottawa', pop: 38250000},
  {country: 'Fiji', capital: 'Suva', pop: 924610},
  {country: 'Ghana', capital: 'Accra', pop: 32830000},
  {country: 'Hong Kong', capital: 'City of Victoria', pop: 7413000},
  {country: 'India', capital: 'New Delhi', pop: 1408000000},
  {country: 'Ireland', capital: 'Dublin', pop: 5033000},
  {country: 'Jamaica', capital: 'Kingston', pop: 2828000},
  {country: 'Kenya', capital: 'Nairobi', pop: 53010000},
  {country: 'Micronesia', capital: 'Palikir', pop: 113131},
  {country: 'New Zealand', capital: 'Wellington', pop: 5123000},
  {country: 'Philippines', capital: 'Manila', pop: 113900000},
  {country: 'Puerto Rico', capital: 'San Juan', pop: 3264000},
  {country: 'Samoa', capital: 'Apia', pop: 218764},
  {country: 'Singapore', capital: 'Singapore', pop: 5454000},
  {country: 'Tanzania', capital: 'Dodoma', pop: 63590000},
  {country: 'United Kingdom', capital: 'London', pop: 67330000},
  {country: 'United States', capital: 'Washington, D.C.', pop: 331900000},
  {country: 'Zimbabwe', capital: 'Harare', pop: 15990000},
];

// copy original data to sort later
const sortedData = exampleData.slice();

function headerRowReducer(state, action) {
  console.log(action.payload);
  switch (action.column) {
    case 'Country':
      action.payload.sort((a, b) => {
        const x = a.country.toLowerCase();
        const y = b.country.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      if (state.col1 === 'ascending') {
        action.payload.reverse();
      }
      return {
        col1: state.col1 === 'ascending' ? 'descending' : 'ascending',
        col2: 'none',
        col3: 'none',
      };
    case 'Capital':
      action.payload.sort((a, b) => {
        const x = a.capital.toLowerCase();
        const y = b.capital.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      if (state.col2 === 'ascending') {
        action.payload.reverse();
      }
      return {
        col1: 'none',
        col2: state.col2 === 'ascending' ? 'descending' : 'ascending',
        col3: 'none',
      };
    case 'Population':
      action.payload.sort((a, b) => a.pop - b.pop);
      if (state.col3 === 'ascending') {
        action.payload.reverse();
      }
      return {
        col1: 'none',
        col2: 'none',
        col3: state.col3 === 'ascending' ? 'descending' : 'ascending',
      };
    default:
      return {
        col1: 'none',
        col2: 'none',
        col3: 'none',
      };
  }
}

function SortableColumnHeader(props) {
  // PROPS:
  // sortOrder : string
  // onSortAction : function pointer
  const isAscending = props.sortOrder === 'ascending';

  function showSortIcon() {
    // determine which icon to show in col header
    if (isAscending) {
      return sortUpIcon;
    }
    if (props.sortOrder === 'descending') {
      return sortDownIcon;
    }
    return undefined;
  }

  function clickHandler() {
    // lift up column name to parent
    props.onSortAction(props.children);
  }

  return (
    <Table.Header scope="col" aria-sort={props.sortOrder}>
      <Tooltip type="describe" title={`Sort ${isAscending ? 'descending' : 'ascending'}`}>
        <TertiaryButton icon={showSortIcon()} iconPosition="end" onClick={clickHandler}>
          {props.children}
        </TertiaryButton>
      </Tooltip>
    </Table.Header>
  );
}

export const SortableColumnHeaders = () => {
  const [headerRowState, headerRowDispatch] = React.useReducer(headerRowReducer, {
    col1: 'none',
    col2: 'none',
    col3: 'none',
  });

  function sortColumnHandler(columnName) {
    // columnName : string

    headerRowDispatch({
      column: columnName,
      payload: sortedData,
    });
  }

  return (
    <Table>
      <Table.Caption>Population listed by Country</Table.Caption>
      <Table.Head>
        <Table.Row>
          <SortableColumnHeader sortOrder={headerRowState.col1} onSortAction={sortColumnHandler}>
            Country
          </SortableColumnHeader>
          <SortableColumnHeader sortOrder={headerRowState.col2} onSortAction={sortColumnHandler}>
            Capital
          </SortableColumnHeader>
          <SortableColumnHeader sortOrder={headerRowState.col3} onSortAction={sortColumnHandler}>
            Population (2021)
          </SortableColumnHeader>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sortedData.map(i => {
          return (
            <Table.Row key={i.country}>
              <Table.Header scope="row">
                <Text paddingInlineStart="0.75rem">{i.country}</Text>
              </Table.Header>
              <Table.Cell>
                <Text paddingInlineStart="0.75rem">{i.capital}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text paddingInlineStart="0.75rem">{i.pop}</Text>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
