---
source_file: labs-react/combobox/stories/Combobox.mdx
live_url: https://workday.github.io/canvas-kit/labs-react/combobox/stories/Combobox
---

<Meta of={ComboboxStories} />

# Combobox <StorybookStatusIndicator type="deprecated" />

<InformationHighlight className="sb-unstyled" variant="caution" cs={{p: {marginBlock: 0}}}>
  <InformationHighlight.Icon />
  <InformationHighlight.Body>
    `Combobox` in Labs has been deprecated and will be removed in a future major version. Please
    use `Combobox` in Main instead.
  </InformationHighlight.Body>
  <InformationHighlight.Link href="https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs">
    Combobox Docs
  </InformationHighlight.Link>
</InformationHighlight>

The term "Combobox" is based on the
[Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) as defined in the ARIA
Authoring Practices Guide (APG):

> A [combobox](https://w3c.github.io/aria/#combobox) is an input widget with an associated popup
> that enables users to select a value for the combobox from a collection of possible values.

Examples of a "combobox" would be date pickers, autocomplete, and select components.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Autocomplete

```tsx
import React, {ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {ExtractProps} from '@workday/canvas-kit-react/common';
import {
  Combobox,
  ComboboxProps,
  ComboBoxMenuItemGroup,
} from '@workday/canvas-kit-labs-react/combobox';
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

```

### Grow

```tsx
import React, {ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {ExtractProps} from '@workday/canvas-kit-react/common';
import {
  Combobox,
  ComboboxProps,
  ComboBoxMenuItemGroup,
} from '@workday/canvas-kit-labs-react/combobox';
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
      <TextInput data-width="ck-formfield-width" placeholder="Autocomplete" />
    </Combobox>
  );
};

export const Grow = () => {
  return (
    <FormField grow={true} id="autocomplete-123">
      <FormField.Label>Grow example</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Autocomplete} />
      </FormField.Field>
    </FormField>
  );
};

```

### No Clear Button

```tsx
import React, {ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {ExtractProps} from '@workday/canvas-kit-react/common';
import {
  Combobox,
  ComboboxProps,
  ComboBoxMenuItemGroup,
} from '@workday/canvas-kit-labs-react/combobox';
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

export const NoClearButton = () => {
  return (
    <FormField id="autocomplete-123">
      <FormField.Label>No clear button</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Autocomplete} showClearButton={false} />
      </FormField.Field>
    </FormField>
  );
};

```

### Group Of Result

```tsx
import React, {ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {ExtractProps} from '@workday/canvas-kit-react/common';
import {
  Combobox,
  ComboboxProps,
  ComboBoxMenuItemGroup,
} from '@workday/canvas-kit-labs-react/combobox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {TextInput} from '@workday/canvas-kit-react/text-input';

const autocompleteResult = (
  textModifier: number,
  disabled: boolean
): ReactElement<ExtractProps<typeof StyledMenuItem>> => (
  <StyledMenuItem aria-disabled={disabled}>
    Result{' '}
    <span>
      num<span>ber</span>
    </span>{' '}
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
    <FormField id="autocomplete-123">
      <FormField.Label>Group of results</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Autocomplete} group={true} />
      </FormField.Field>
    </FormField>
  );
};

```

### Disabled Item

```tsx
import React, {ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {ExtractProps} from '@workday/canvas-kit-react/common';
import {
  Combobox,
  ComboboxProps,
  ComboBoxMenuItemGroup,
} from '@workday/canvas-kit-labs-react/combobox';
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

export const DisabledItem = () => {
  return (
    <FormField id="autocomplete-123">
      <FormField.Label>Group of results</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Autocomplete} showDisabledItems={true} />
      </FormField.Field>
    </FormField>
  );
};

```

### RTL

```tsx
import React, {ReactNode, ReactElement, FC, ChangeEvent} from 'react';
import {
  Combobox,
  ComboboxProps,
  ComboBoxMenuItemGroup,
} from '@workday/canvas-kit-labs-react/combobox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {CanvasProvider, ExtractProps} from '@workday/canvas-kit-react/common';

const autocompleteResult = (
  textModifier: number,
  disabled: boolean
): ReactElement<ExtractProps<typeof StyledMenuItem>> => (
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

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <FormField id="rtl-autocomplete-123">
        <FormField.Label>RTL Autocomplete example</FormField.Label>
        <FormField.Field>
          <FormField.Input as={Autocomplete} />
        </FormField.Field>
      </FormField>
    </CanvasProvider>
  );
};

```
