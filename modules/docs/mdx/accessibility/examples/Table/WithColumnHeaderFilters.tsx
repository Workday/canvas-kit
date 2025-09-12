import React from 'react';

import {AriaLiveRegion, createComponent, useUniqueId} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {
  Popup,
  usePopupModel,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  useInitialFocus,
  useReturnFocus,
  useFocusRedirect,
} from '@workday/canvas-kit-react/popup';
import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Table} from '@workday/canvas-kit-react/table';
import {Text} from '@workday/canvas-kit-react/text';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {filterIcon, searchIcon} from '@workday/canvas-system-icons-web';

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
          <Tooltip title={`Filter${inputVal !== '' ? `ed: "${inputVal}"` : ''}`} type="description">
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
    <Table maxHeight="40rem">
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
