---
source_file: react/form-field/stories/FormField.mdx
live_url: https://workday.github.io/canvas-kit/react/form-field/stories/FormField
---

<Meta of={FormFieldStories} />

# Canvas Kit Form Field

FormField allows users to wrap input components to make them accessible. You can customize the field
by passing in `TextInput`, `Select`, `RadioGroup` and other form elements to `FormField.Input`.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Accessibility

The `FormField` adds a `for` attribute to the `FormField.Label` (`<label>` element) element that
matches the `id` attribute of the `FormField.Input` which is usually a `input` element. This both
labels the input for screen readers and other assitive technology as well as will focus on the input
when the user clicks on the label. If your form field input component is more complicated, the
`FormField` will also add an `id` to the `FormField.Label` and an `aria-labelledby` to the
`FormField.Input` component. You can then forward the `aria-labelledby` to whatever elements you
need for the proper accessibility.

For example, the DOM will look something like this:

```html
<div>
  <label id="label-abc" for="input-abc">First Name</label>
  <input id="input-abc" aria-labelledby="label-abc" />
</div>
```

Some components, like `MultiSelect`, have an additional `role=listbox` element that also needs to
link to the `label` element. The resulting DOM will look something like:

```html
<div>
  <label id="label-abc" for="input-abc">States you've lived in</label>
  <input id="input-abc" aria-labelledby="label-abc" role="combobox" ... />
  <ul role="listbox" aria-labelledby="label-abc">
    <li>Texas</li>
    <li>California</li>
  </ul>
</div>
```

The `MultiSelect` component gets the `aria-labelledby` from the `FormField.Input` and forwards it to
both the `input[role=combobox]` element and the `ul[role=listbox]` element so the screen reader
knows the label for both is "States you've lived in".

## Usage

### Basic

Form Field should be used in tandem with most Canvas Kit input components to ensure they meet
accessibility standards. The orientation of the label by default is `vertical`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Error States

Set the `error` prop of the Form Field or define it in the model to indicate it has an error.
`error` accepts the following values:

`"error" | "caution" | undefined`

### Caution

Use the caution state when a value is valid but there is additional information.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField error="caution">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
          <FormField.Hint>Cannot contain numbers</FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Error

Use the error state when the value is no longer valid.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField error="error">
        <FormField.Label>Password</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} type="password" value={value} onChange={handleChange} />
          <FormField.Hint>Must Contain a number and a capital letter</FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Disabled

Set the `disabled` prop of `FormField.Input` to prevent users from interacting with it.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} disabled onChange={handleChange} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Hint

Use `FormField.Hint` to display a short message below the input component and `FormField.Field` to
ensure proper alignment.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Hint = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField orientation="horizontalStart">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
          <FormField.Hint>Cannot contain numbers</FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Label Position

Set the `orientation` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `vertical`. If you want your label to be
horizontal, you have two options: `horizontalStart` and `horizontalEnd`.

If you want the position of the label at the start of the container, set orientation prop to
`horizontalStart`.

```tsx
import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  flexDirection: 'column',
});

export const LabelPositionHorizontalStart = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={formStyles}>
      <FormField orientation="horizontalStart">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
      <FormField orientation="horizontalStart">
        <FormField.Label>Password</FormField.Label>
        <FormField.Input as={TextInput} type="password" />
      </FormField>
    </form>
  );
};

```

If you want the position of the label at the end of the container, set orientation prop to
`horizontalEnd`.

```tsx
import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  flexDirection: 'column',
});

export const LabelPositionHorizontalEnd = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={formStyles}>
      <FormField orientation="horizontalEnd">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
      <FormField orientation="horizontalEnd">
        <FormField.Label>Password</FormField.Label>
        <FormField.Input as={TextInput} type="password" />
      </FormField>
    </form>
  );
};

```

### Grow

Set the `grow` prop of the Form Field to `true` to configure it (including the wrapped input
component) to expand to the width of its container.

**Note: This Prop is deprecated and will be removed in a future major version.**

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField grow>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
    </Flex>
  );
};

```

### Ref Forwarding

If you need full customization you can use the `FormField` behavior hooks to build your own
solution. It is also easy it work with custom components or third party libraries and get the CKR
accessibility guarantees by using the `as` prop.

```tsx
import React from 'react';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x1,
  alignItems: 'flex-start',
  flexDirection: 'column',
});

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    changeFocus(ref.current);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} value={value} ref={ref} />
        </FormField.Field>
      </FormField>
      <SecondaryButton onClick={handleClick}>Focus Text Input</SecondaryButton>
    </Flex>
  );
};

```

### Required

Set the `isRequired` prop of the Form Field to `true` to indicate that the field is required. Labels
for required fields are suffixed by a red asterisk.

```tsx
import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextInput}
          placeholder="your@gmail.com"
          onChange={handleChange}
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};

```

### Grouped Inputs

Use `FormFieldGroup` when you have a group of inputs that need to be associated to one another, like
`RadioGroup` or a group of `Checkbox`'s. `FormFieldGroup` renders a `fieldset` element and
`FormFieldGroup.Label` renders a `legend` element. These elements will allow for correct
accessibility of grouped inputs.

`FormFieldGroup` supports the same props of `FormField`:

- `error`: `"caution" | "error"` Defines the error around the whole group of inputs.
- `orientation`: `"horizontal" | "vertical"` Defines the legend placement.
- `isRequired`: `true` Defines if a group like RadioGroup is required.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {system} from '@workday/canvas-tokens-web';
import {Banner} from '@workday/canvas-kit-react/banner';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {createStyles} from '@workday/canvas-kit-styling';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';

const formStyles = createStyles({
  margin: `${system.space.zero} ${system.space.x3}`,
});

const formButtonStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

const toppings = [
  {
    id: 1,
    label: 'Pepperoni',
    checked: false,
  },
  {
    id: 2,
    label: 'Cheese',
    checked: false,
  },
  {
    id: 3,
    label: 'Pineapple',
    checked: false,
  },
  {
    id: 4,
    label: 'Mushrooms',
    checked: false,
  },
];

const bannerStyles = createStyles({
  position: 'absolute',
  right: 0,
});

export const GroupedInputs = () => {
  const [toppingsState, setToppingsState] = React.useState(toppings);
  const [error, setError] = React.useState(undefined);
  const [radioError, setRadioError] = React.useState(undefined);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const [value, setValue] = React.useState<string>('');
  const [formData, setFormData] = React.useState({
    toppings: [],
    crust: '',
  });
  const handleCheckboxCheck = id => {
    if (error) {
      setError(undefined);
    }
    setToppingsState(
      toppingsState.map(item => (item.id === id ? {...item, checked: !item.checked} : item))
    );
  };

  const handleRadioChange = (e: React.ChangeEvent) => {
    if (radioError) {
      setRadioError(undefined);
    }
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const radioError = !value && toppingsState.some(item => !item.checked) ? 'error' : undefined;
    const error = toppingsState.every(item => !item.checked) ? 'error' : undefined;

    setRadioError(radioError);
    setError(error);
    if (!error && !radioError && toppingsState.some(item => item.checked) && value) {
      setShowSuccess(true);
    }
    setFormData({
      toppings: toppingsState,
      crust: value,
    });
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (showSuccess) {
        setShowSuccess(false);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showSuccess]);

  const handleReset = () => {
    setFormData({toppings: [], crust: ''});
    setError(undefined);
    setValue('');
    setRadioError('');
    setShowSuccess(false);
    setToppingsState(
      toppingsState.map(item => {
        return {...item, checked: false};
      })
    );
  };

  return (
    <div>
      <h3>Choose your pizza options</h3>
      <AriaLiveRegion role="alert">
        <div style={{display: 'flex', gap: '40px'}}>
          {error || radioError ? (
            <Banner isSticky hasError className={bannerStyles}>
              <Banner.Label>
                {error && radioError
                  ? 'At least one topping and crust selection is required'
                  : error
                  ? 'You must choose at least one topping'
                  : radioError
                  ? 'You must choose a crust'
                  : ''}
              </Banner.Label>
            </Banner>
          ) : null}
          {showSuccess && (
            <Banner isSticky className={bannerStyles}>
              <Banner.Label>You've successfully submitted your pizza options.</Banner.Label>
            </Banner>
          )}
        </div>
      </AriaLiveRegion>

      <form className={formStyles} onSubmit={handleSubmit}>
        <FormFieldGroup error={error} isRequired>
          <FormFieldGroup.Label>Choose Your Toppings</FormFieldGroup.Label>
          <FormFieldGroup.List>
            {toppingsState.map(item => {
              return (
                <FormFieldGroup.Input
                  key={item.id}
                  onChange={() => handleCheckboxCheck(item.id)}
                  checked={item.checked}
                  value={item.label}
                  as={Checkbox}
                  disabled={item.label === 'Pineapple' ? true : undefined}
                  label={item.label}
                />
              );
            })}
          </FormFieldGroup.List>
          <FormFieldGroup.Hint>
            {error === 'error' && 'You must choose one topping'}
          </FormFieldGroup.Hint>
        </FormFieldGroup>
        <FormFieldGroup error={radioError} isRequired>
          <FormFieldGroup.Label>Choose Your Crust</FormFieldGroup.Label>
          <FormFieldGroup.Field>
            <FormFieldGroup.List
              as={RadioGroup}
              onChange={handleRadioChange}
              value={value}
              name="crust"
            >
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin-crust">
                Thin Crust
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="hand-tossed">
                Hand Tossed
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
                Deep Dish
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
                Cauliflower
              </FormFieldGroup.Input>
            </FormFieldGroup.List>
            <FormFieldGroup.Hint>
              {radioError === 'error' ? 'You must choose a crust' : null}
            </FormFieldGroup.Hint>
          </FormFieldGroup.Field>
        </FormFieldGroup>
        <div className={formButtonStyles}>
          <PrimaryButton type="submit">Submit Your Choices</PrimaryButton>
          <SecondaryButton onClick={() => handleReset()}>Reset Form</SecondaryButton>
        </div>
      </form>
      <div>
        <div>
          Selected Toppings:{' '}
          {!error && formData.toppings.map(item => (item.checked ? `${item.label} ` : null))}
        </div>
        <div>Selected Crust: {formData.crust}</div>
      </div>
    </div>
  );
};

```

### Custom

If you need full customization you can use the `FormField` behavior hooks to build your own
solution. It is also easy it work with custom components or third party libraries and get the CKR
accessibility guarantees by using the `as` prop.

```tsx
import React from 'react';
import {
  useFormFieldHint,
  useFormFieldInput,
  useFormFieldLabel,
  useFormFieldModel,
  formFieldStencil,
} from '@workday/canvas-kit-react/form-field';
import {useModelContext} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

const Label = ({model, children}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldLabel(localModel);

  return (
    <label {...props}>
      {children}
      {model.state.isRequired ? '*' : ''}
    </label>
  );
};

const Hint = ({model, children}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldHint(localModel);

  return <span {...props}>{children}</span>;
};

const Input = ({model, ...elementProps}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldInput(localModel, elementProps);

  return <input type="text" required={model.state.isRequired ? true : false} {...props} />;
};

export const Custom = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const model = useFormFieldModel({isRequired: true});

  return (
    <Flex cs={formFieldStencil({orientation: 'horizontalStart'})}>
      <Label model={model}>My Custom Field</Label>
      <Input model={model} value={value} onChange={handleChange} />
      <Hint model={model}>You can be anything</Hint>
    </Flex>
  );
};

```

### Custom id

Form Field will automatically generate an HTML `id` for its input element to link it to the
correponding label. Alternatively, you may set the `id` prop of the Form Field to specify a custom
`id` for the input element. The `id` will be appended by `input-${your-unique-id}`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const CustomId = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField id="first-name">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### All Fields

Form Field should allow you to use it with all `inputs` including `Select`, `TextInput`, `Checkbox`,
`TextArea`, `Switch`, and `RadioGroup`.

```tsx
import React from 'react';
import {FormField, FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Select} from '@workday/canvas-kit-react/select';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {Switch} from '@workday/canvas-kit-react/switch';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
  gap: calc.subtract(system.space.x6, system.space.x1),
  padding: calc.subtract(system.space.x10, system.space.x1),
  borderRadius: system.space.x1,
});

export const AllFields = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <FormField grow>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} />
        </FormField.Field>
      </FormField>

      <FormField isRequired={true} error="caution" grow>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} />
          <FormField.Hint>Hint text for your input</FormField.Hint>
        </FormField.Field>
      </FormField>
      <FormField grow>
        <FormField.Label>Text Area Label</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextArea} />
        </FormField.Field>
      </FormField>
      <FormField error="error" grow>
        <FormField.Label>Choose a Crust</FormField.Label>
        <Select items={['Pizza', 'Cheeseburger', 'Fries']}>
          <FormField.Input as={Select.Input} />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField>
      <FormField as="fieldset" isRequired={true} error={'error'} orientation="horizontalStart" grow>
        <FormField.Label as="legend">Radio Group Legend</FormField.Label>
        <FormField.Container>
          <FormField.Input as={RadioGroup}>
            <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="gluten-free">Gluten free</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="butter">
              Butter - the best thing to put on bread
            </RadioGroup.RadioButton>
          </FormField.Input>
          <FormField.Hint>Error Message</FormField.Hint>
        </FormField.Container>
      </FormField>
      <FormField as="fieldset" grow>
        <FormField.Label as="legend">Checkbox Legend</FormField.Label>
        <FormField.Input checked={true} as={Checkbox} label="Checkbox Label" />
        <FormField.Input checked={false} as={Checkbox} label="Thin Crust" />
        <FormField.Input checked={false} as={Checkbox} label="Extra Cheese" />
      </FormField>
      <FormFieldGroup error="error" orientation="horizontalStart" grow>
        <FormFieldGroup.Label>Choose Your Crust</FormFieldGroup.Label>
        <FormFieldGroup.Field>
          <FormFieldGroup.List as={RadioGroup}>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin-crust">
              Thin Crust
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="hand-tossed">
              Hand Tossed
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
              Deep Dish
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
              Cauliflower
            </FormFieldGroup.Input>
          </FormFieldGroup.List>
        </FormFieldGroup.Field>
      </FormFieldGroup>
      <FormFieldGroup grow>
        <FormFieldGroup.Label>Checkbox Legend</FormFieldGroup.Label>
        <FormField.Field>
          <FormFieldGroup.List>
            <FormFieldGroup.Input checked={true} as={Checkbox} label="Checkbox Label" />
            <FormFieldGroup.Input checked={false} as={Checkbox} label="Thin Crust" />
            <FormFieldGroup.Input checked={false} as={Checkbox} label="Extra Cheese" />
          </FormFieldGroup.List>
        </FormField.Field>
      </FormFieldGroup>

      <FormField orientation="horizontalStart" grow>
        <FormField.Label>Switch Label</FormField.Label>
        <FormField.Field>
          <FormField.Input as={Switch} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Hidden Label

In cases where you want to hide the label while still meeting accessibility standards, you can add
`isHidden` on the `<FormField.Label/>`. This prop will visually hide the label.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput, InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {searchIcon} from '@workday/canvas-system-icons-web';

export const HiddenLabel = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField>
        <FormField.Label isHidden>Search</FormField.Label>
        <FormField.Field>
          <FormField.Input as={InputGroup}>
            <InputGroup.InnerStart pointerEvents="none">
              <SystemIcon icon={searchIcon} size="small" />
            </InputGroup.InnerStart>
            <InputGroup.Input as={TextInput} onChange={handleChange} />
          </FormField.Input>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Themed Errors

You can theme your error rings by wrapping an input in a `CanvasProvider` and defining
`focusOutline` and `error` properties on the `theme`.

```tsx
import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formFieldHintStyles = createStyles({
  paddingTop: system.space.x2,
});

export const ThemedError = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        common: {
          focusOutline: colors.grapeSoda300,
        },
        error: {
          main: colors.islandPunch400,
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <FormField error={!value ? 'error' : undefined} isRequired={true} orientation="vertical">
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} value={value} />
          <FormField.Hint cs={formFieldHintStyles}>
            {!value && 'Please enter an email.'}
          </FormField.Hint>
        </FormField.Field>
      </FormField>
    </CanvasProvider>
  );
};

```

### Custom Styles

Form Field and its subcomponents support custom styling via the `cs` prop. For more information,
check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for FormField not found -->

## Specifications

### Specifications for FormField

<!-- Component specifications from FormField.spec.tsx -->
