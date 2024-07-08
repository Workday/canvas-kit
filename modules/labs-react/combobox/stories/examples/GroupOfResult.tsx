import React, {ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {
  Combobox,
  ComboboxProps,
  ComboBoxMenuItemGroup,
} from '@workday/canvas-kit-labs-react/combobox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {StyledMenuItem, MenuItemProps} from '@workday/canvas-kit-react/menu';
import {TextInput} from '@workday/canvas-kit-react/text-input';

const autocompleteResult = (
  textModifier: number,
  disabled: boolean
): ReactElement<MenuItemProps> => (
  <StyledMenuItem isDisabled={disabled}>
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

export const GroupOfResult = () => {
  return (
    <FormField id="autocomplete-123" label="Group of results">
      <Autocomplete group={true} />
    </FormField>
  );
};