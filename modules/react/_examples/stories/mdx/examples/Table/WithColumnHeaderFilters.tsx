import React from 'react';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {Flex} from '@workday/canvas-kit-react/layout';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Table} from '@workday/canvas-kit-react/table';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {createComponent} from '@workday/canvas-kit-react/common';

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

const textStyles = createStyles({
  paddingInlineStart: system.space.x3,
});

interface FilterableColumnHeaderProps {
  label: string;
  onFilter: (filterObject: {filterText: string; column: string}) => void;
}

const FilterableColumnHeader = createComponent('th')({
  displayName: 'FilterableColumnHeader',
  Component: ({label, onFilter}: FilterableColumnHeaderProps, ref) => {
    const [inputVal, setInputVal] = React.useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const newVal = e.target.value;
      setInputVal(newVal);
      onFilter({filterText: newVal, column: label.toLowerCase()});
    }

    return (
      <Table.Header scope="col">
        <Dialog>
          <Tooltip title="Filter" type="description">
            <Dialog.Target as={TertiaryButton}>{label}</Dialog.Target>
          </Tooltip>
          <Dialog.Popper>
            <Dialog.Card>
              <Dialog.Heading>Filter</Dialog.Heading>
              <Dialog.Body>
                <FormField>
                  <FormField.Label>{label}</FormField.Label>
                  <FormField.Input
                    as={TextInput}
                    type="search"
                    onChange={handleChange}
                    value={inputVal}
                  />
                </FormField>
              </Dialog.Body>
              <Flex>
                <Dialog.CloseButton as={PrimaryButton}>Done</Dialog.CloseButton>
              </Flex>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      </Table.Header>
    );
  },
});

function filterTableData(data: CountryData[], filters) {
  return data.filter(item => {
    for (const key in filters) {
      if (filters.hasOwnProperty(key) && filters[key]) {
        const filterText = filters[key].toLowerCase();
        const itemValue = String(item[key]).toLowerCase();
        if (!itemValue.includes(filterText)) {
          return false;
        }
      }
    }
    return true;
  });
}

export const FilterableColumnHeaders = () => {
  const [colFilters, setColFilters] = React.useState({country: '', capital: '', population: ''});

  React.useEffect(() => {
    const filteredData = filterTableData(countryData, colFilters);
    console.log(filteredData);
  }, [colFilters]);

  let typingDelay: NodeJS.Timeout;
  function handleColFilters({filterText, column}) {
    clearTimeout(typingDelay);
    typingDelay = setTimeout(() => {
      // console.log(`Column: ${column} filter: ${filterText}`);
      setColFilters(prev => {
        // convert population string to number
        // if column = population then convert filterText to number
        const newState = {...prev, [column]: filterText};
        // console.log(newState);
        return newState;
      });
    }, 400);
  }

  return (
    <Table maxHeight="40rem">
      <Table.Caption>Population Listed by Country (2021)</Table.Caption>
      <Table.Head>
        <Table.Row>
          <FilterableColumnHeader label="Country" onFilter={handleColFilters} />
          <FilterableColumnHeader label="Capital" onFilter={handleColFilters} />
          <FilterableColumnHeader label="Population" onFilter={handleColFilters} />
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
