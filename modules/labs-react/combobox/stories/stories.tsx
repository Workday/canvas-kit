/// <reference path="../../../../typings.d.ts" />
import React, {useState, ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {withKnobs} from '@storybook/addon-knobs';

import {Combobox, ComboboxProps, ComboBoxMenuItemGroup} from '@workday/canvas-kit-labs-react';
import FormField from '@workday/canvas-kit-react/form-field';
import {MenuItem, MenuItemProps} from '@workday/canvas-kit-preview-react/menu';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import README from '../README.md';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

const autocompleteResult = (
  textModifier: number,
  isDisabled: boolean
): ReactElement<MenuItemProps> => (
  <MenuItem isDisabled={isDisabled}>
    Result{' '}
    <span>
      num<span>ber</span>
    </span>{' '}
    {textModifier}
  </MenuItem>
);

const simpleAutoComplete = (count: number, showDisabledItems, total = 5) =>
  Array.apply(null, Array(count))
    .map((_: ReactElement, i: number) => autocompleteResult(i, showDisabledItems && i === 0))
    .splice(0, total);

const groupOfResults = (
  count: number,
  showDisabledItems: boolean,
  groupHeading: ReactNode = 'Group'
): ComboBoxMenuItemGroup => ({
  header: (
    <MenuItem>
      <strong>{groupHeading}</strong>
    </MenuItem>
  ),
  items: simpleAutoComplete(count, showDisabledItems, 3),
});

export const Autocomplete: FC<Omit<ComboboxProps, 'children'> & {
  group?: boolean;
  showDisabledItems?: boolean;
}> = ({showClearButton, group, showDisabledItems = false, ...props}) => {
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
              groupOfResults(groupLength, showDisabledItems, <em>Animals</em>),
              groupOfResults(Math.min(1, groupLength), showDisabledItems, 'Cars'),
            ]
          : simpleAutoComplete(textLength, showDisabledItems)
      }
      onChange={autocompleteCallback}
      showClearButton={showClearButton == null ? true : showClearButton}
      labelId="autocomplete-123"
      initialValue="Test"
      {...props}
    >
      <TextInput placeholder="Autocomplete" />
    </Combobox>
  );
};

storiesOf('Labs/Combobox/React', module)
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
  ))
  .add('Disabled item', () => (
    <FormField id="autocomplete-123" label="Group of results">
      <Autocomplete showDisabledItems={true} />
    </FormField>
  ))
  .add('RTL', () => (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <FormField id="rtl-autocomplete-123" label="RTL Autocomplete example">
        <Autocomplete />
      </FormField>
    </CanvasProvider>
  ));
