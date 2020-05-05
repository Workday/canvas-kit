/// <reference path="../../../../../typings.d.ts" />
import React, {useState, ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

import Combobox, {ComboboxProps, ComboBoxMenuItemGroup} from '../index';
import FormField from '../../../../form-field/react';
import {MenuItem, MenuItemProps} from '../../../menu/react';
import {TextInput} from '../../../../text-input/react';
import README from '../README.md';

const autocompleteResult = (textModifier: number): ReactElement<MenuItemProps> => (
  <MenuItem onClick={action(`Clicked Result ${textModifier}`)}>
    Result{' '}
    <span>
      num<span>ber</span>
    </span>{' '}
    {textModifier}
  </MenuItem>
);

const simpleAutoComplete = (count: number, total = 5) =>
  Array.apply(null, Array(count))
    .map((_: ReactElement, i: number) => autocompleteResult(i))
    .splice(0, total);

const groupOfResults = (
  count: number,
  groupHeading: ReactNode = 'Group'
): ComboBoxMenuItemGroup => ({
  header: (
    <MenuItem>
      <strong>{groupHeading}</strong>
    </MenuItem>
  ),
  items: simpleAutoComplete(count, 3),
});

const Autocomplete: FC<Omit<ComboboxProps, 'children'> & {group?: boolean}> = ({
  showClearButton,
  group,
  ...props
}) => {
  const [currentText, setCurrentText] = useState('');

  const autocompleteCallback = (event: ChangeEvent<HTMLInputElement>): void => {
    setCurrentText(event.target.value);
  };

  const textLength = currentText.length;
  const groupLength = Math.floor(textLength / 2);

  return (
    <Combobox
      autocompleteItems={
        group
          ? [
              groupOfResults(groupLength, <em>Animals</em>),
              groupOfResults(Math.min(1, groupLength), 'Cars'),
            ]
          : simpleAutoComplete(textLength)
      }
      onChange={autocompleteCallback}
      showClearButton={showClearButton == null ? true : showClearButton}
      labelId="autocomplete-123"
      onFocus={action('Focus')}
      onBlur={action('Blur')}
      initialValue="Test"
      {...props}
    >
      <TextInput autoFocus placeholder="Autocomplete" />
    </Combobox>
  );
};

storiesOf('Labs|Combobox/React', module)
  .addParameters({component: Combobox})
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Autocomplete', () => (
    <FormField id="autocomplete-123" label="Autocomplete example">
      <Autocomplete />
    </FormField>
  ))
  .add('Grow', () => (
    <FormField grow={true} id="autocomplete-123" label="Grow example">
      <Autocomplete />
    </FormField>
  ))
  .add('No clear button', () => (
    <FormField id="autocomplete-123" label="No clear button">
      <Autocomplete showClearButton={false} />
    </FormField>
  ))
  .add('Group of results', () => (
    <FormField id="autocomplete-123" label="Group of results">
      <Autocomplete group={true} />
    </FormField>
  ));
