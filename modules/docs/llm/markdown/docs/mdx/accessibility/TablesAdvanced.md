---
source_file: docs/mdx/accessibility/TablesAdvanced.mdx
live_url: https://workday.github.io/canvas-kit/docs/mdx/accessibility/TablesAdvanced
---

<Meta title="Guides/Accessibility/Examples/Advanced Tables" />

## Advanced Table Examples

Tables should only be used to organize data that has a clear relationship between rows and columns,
like a calendar or a schedule. Never use a table just for page layout.

When you use the proper HTML table markup, a screen reader can help a user navigate the table. It
will automatically read the column and row headers as they move through the data, so they always
know what information they're looking at.

- All tables should have a clear header and a descriptive title.
- Keep your tables simple. If a table is too complex, it might be better to break it up into several
  smaller tables or use a different format.

Out of the box, `Table` is a lightweight compound component with a high degree of flexibility, but
not much functionality outside of providing a basic table layout. This flexibility lets developers
implement common features, such as selecting rows and sorting columns, on top of `Table` to meet
their specific application needs.

The Workday Accessibility Team has researched and developed the following examples below to
demonstrate how to build these accessible table patterns. We've listed the specific considerations
and decisions we've made for each of the examples.

### Expandable Rows

Expandable Rows combines the likes of an accordion with tabular data tables. Column 1 renders icon
buttons with 2 states, a collapsed and expanded state. A new row that spans the entire width of the
table is added to the table just after the expanded row.

- The `aria-expanded` property is added to the chevron button to communicate this state to screen
  reader users.
- A Canvas accessible `Tooltip` component is used to assign names to each icon button based on the
  most useful value in the row. In this example, we combined the car make (in column 1) and model
  (in column 2) together. This allows everyone to view the name of the icon buttons by hovering the
  mouse or focusing with the keyboard.
- The expanded row uses `colspan` to span the entire width of the table and support screen readers.
  This space provides flexibility to show headings, lists, and other structured content for the
  table row above.
- There is no explicit relationship between a row of cells and the spanned content below it. The
  spanned content is assumed to belong to the row of cells above it, based on established accordion
  patterns and logical reading order of content rendered to the screen.
- Outlining hierarchy with additional nested rows in the table is not supported for screen readers
  in this example.

```tsx
import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {Table} from '@workday/canvas-kit-react/table';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {generateUniqueId} from '@workday/canvas-kit-react/common';
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
  gap: system.space.x4,
  padding: system.space.x8,
});

const expandableHeadingStyles = createStyles({
  margin: 0,
  fontWeight: system.fontWeight.bold,
});

const expandableListStyles = createStyles({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: system.space.x2,
});

function ExpandableRow({data}: RowProps) {
  const [rowExpanded, setRowExpanded] = React.useState(false);

  return (
    <>
      <Table.Row gridTemplateColumns="4rem repeat(4, 1fr)">
        <Table.Cell>
          <Tooltip title={`${data.brand} ${data.model}`}>
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
          <Table.Row gridTemplateColumns="4rem repeat(4, 1fr)">
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

```

### Selectable Rows

Using a `Checkbox` labeled "Select All" inside of a column header can be a confusing experience for
screen reader users. Screen readers will automatically announce the "Select All" label in the column
header each time users are reading any of the Check boxes in the first column. For instance, the
`Checkbox` in row 4 is definitely not going to select all of the rows. Here is what we did about it:

- We intentionally rendered row 1, column 1 as a standard `<td>` element so screen readers won't
  automatically announce the "Select All" label while reading cells in column 1.
- Our research found that VoiceOver (MacOS v12.7, Safari v17.1) persistently announce "Select All"
  despite using the `<td>` element because of the optional `<thead>` element in the table. We
  omitted the optional `<thead>` and `<tbody>` elements from this example for that reason.
- We used Canvas' accessible `Tooltip` component to assign names to each Checkbox based on the most
  useful value in the row, the topping name. This allows everyone to view the name of the checkboxes
  by hovering the mouse or focusing with the keyboard.
- We rendered the cells in column 2 as the row headers for the table, enabling screen readers to
  automatically announce the topping name even while reading down the Amounts in column 3. When we
  rendered column 1 as row headers, then reading down column 2 (Topping Name) sounded redundant
  because the `Checkbox` names in column 1 are identical to the Topping Name in column 2.

```tsx
import React from 'react';

import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {createComponent, generateUniqueId} from '@workday/canvas-kit-react/common';
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
        backgroundColor: system.color.bg.primary.soft,
      },
    },
  },
});

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.bg.alt.soft,
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

```

### Filterable Column Headers

In this example, we demonstrate using the `Popup` component in each column header allowing users to
search and filter the data on the table. The `Popup` component relies on React Portals to render the
popup elements at the bottom of the browser's DOM presenting 2 key challenges for accessibility:

1. Keyboard focus order of the elements in the popup,
2. Screen readers' reading order of the content rendered in the browser.

Here's what we did about it:

- Canvas Kit includes a `usePopupModel` hook, with quite a few additional hooks developers can add
  to their models. In particular, the `useFocusRedirect` hook manages keyboard focus between the
  `<Popup.Target>` button and the popup content.
- The `useInitialFocus` hook allows developers to specify which element receives keyboard focus when
  the popup appears. In this example, we auto-focused the search input field.
- To address the reading order of content, we set the `aria-owns` property onto the parent
  `<Table.Header>` component (`<th>` DOM element) with 2 unique `id` values. The first `id` refers
  to the `<Popup.Target>` button and the second refers to the `<Popup.Card>` container element. This
  manually reassigns the column header's `<Popup.Target>` button and the `Popup` contents as
  siblings in the browser's accessibility tree hierarchy. Screen readers **should** read the column
  header buttons and the popup content in sequential order even though they are not siblings in the
  DOM.
- The `type='description'` variant of the Canvas `Tooltip` is used to communicate the filtered state
  of the column header, and assigned to the accessible description of the column header
  `<TertiaryButton>` component.
- The Canvas `AriaLiveRegion` component is used to render the "X of Y items" status inside the table
  caption. This enables screen readers to automatically describe the filter state changes of the
  table content to users in real time. We recommend validating whether this use of a live region is
  well supported for your screen reader and browser combinations first.

```tsx
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

```

### Sortable Column Headers

The challenge in this example is to provide all of the necessary information about the interactive
column headers, the sort state of the column, and instructions about how the table will be sorted
without giving too much information to users while reading the data cells below.

- The `aria-sort` property has been added to each of the `<Table.Header>` components (`<th>` DOM
  element) and updated to `ascending` or `descending` to reflect the current sort state. We
  recommend validating whether this property is well supported for your screen reader and browser
  combinations first.
- A `<TertiaryButton>` describing the column name is used inside of the `<Table.Header>` component.
- The `description` variant of the Canvas `Tooltip` component is applied to the button in the column
  header and applied to the accessible description of the button with the `aria-description`
  property. This is used to describe how the column will be sorted when pressed and screen readers
  will only read this description while focusing on the column headers, not while reading the data
  cells below.

```tsx
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

```
