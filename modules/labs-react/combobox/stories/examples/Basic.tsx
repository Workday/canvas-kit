import React, {ChangeEvent, FC, ReactElement, ReactNode} from 'react';

import {
  ComboBoxMenuItemGroup,
  Combobox,
  ComboboxProps,
} from '@workday/canvas-kit-labs-react/combobox';
import {ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {TextInput} from '@workday/canvas-kit-react/text-input';

const autocompleteResult = (
  textModifier: number,
  disabled: boolean
): ReactElement<ExtractProps<typeof StyledMenuItem>> => (
  <StyledMenuItem aria-disabled={disabled}>
    Result
    <span>
      num<span>ber</span>
    </span>
    {textModifier}
  </StyledMenuItem>
);

const simpleAutoComplete = (count: number, showDisabledItems, total = 5) =>
  Array.apply(null, Array(count))
    .map((_, i) => autocompleteResult(i, showDisabledItems && i === 0))
    .splice(0, total);

const groupOfResults = (
  count: number,
  showDisabledItems: boolean,
  groupHeading: ReactNode = 'Group'
): ComboBoxMenuItemGroup => ({
  header: (
    <StyledMenuItem>
      <strong>{groupHeading}</strong>
    </StyledMenuItem>
  ),
  items: simpleAutoComplete(count, showDisabledItems, 10),
});

const Autocomplete: FC<
  Omit<ComboboxProps, 'children'> & {
    group?: boolean;
    showDisabledItems?: boolean;
  }
> = ({showClearButton, group, showDisabledItems = false, ...props}) => {
  const [currentText, setCurrentText] = React.useState('');

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
          : simpleAutoComplete(textLength, showDisabledItems, 10)
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

export const Basic = () => {
  return (
    <FormField id="autocomplete-123">
      <FormField.Label>Autocomplete example</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Autocomplete} />
      </FormField.Field>
    </FormField>
  );
};
