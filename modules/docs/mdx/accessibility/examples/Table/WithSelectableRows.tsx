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
