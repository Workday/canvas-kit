import React from 'react';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Table} from '@workday/canvas-kit-react/table';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

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
  left: system.space.x2,
  top: '50%',
  transform: 'translateY(-50%)',
  color: system.color.text.default,
  pointerEvents: 'none',
  zIndex: 1,
  ...system.type.subtext.large,
});

const currencyInput = createStyles({
  paddingLeft: system.space.x4, // Make room for dollar sign
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
