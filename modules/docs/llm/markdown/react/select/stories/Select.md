---
source_file: react/select/stories/Select.mdx
live_url: https://workday.github.io/canvas-kit/react/select/stories/Select
---

<Meta of={SelectStories} />

# Canvas Kit Select

Select inputs allow users to choose one option from a list of items or type a matching option.

[> Workday Design Reference](https://design.workday.com/components/inputs/select)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Select` supports a
[dynamic API](/getting-started/for-developers/resources/collection-api/#dynamic-items) where you
pass an array of items via the `items` prop and provide a render function to display the items. The
items may be provided as an
[array of strings](/getting-started/for-developers/resources/collection-api/#array-of-strings) or an
[array of objects](/getting-started/for-developers/resources/collection-api/#array-of-objects).

`Select` should be used in tandem with [Form Field](/components/inputs/form-field/) where the
`Select` wraps the `FormField` element and the `FormField` element wraps the children of `Select` to
meet accessibility standards. This ensures the `label` text from `FormField` is attached to the
`Select.Input` and read out as a group for voiceover.

```tsx
<Select items={options}>
  <FormField label="Your Label">
    <Select.Input onChange={e => handleChange(e)} id="contact-select" />
    <Select.Popper>
      <Select.Card>
        <Select.List>{item => <Select.Item>{item.id}</Select.Item>}</Select.List>
      </Select.Card>
    </Select.Popper>
  </FormField>
</Select>
```

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
  'Thisisalongstringwithnobreaksandwillwrap',
];

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change', event.currentTarget.value);
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} onChange={handleChange} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => {
                    return <Select.Item>{item}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};

```

Our example uses [React state](<(https://react.dev/learn/state-a-components-memory)>) to track the
value of the `Select`.

### Hoisted Model

By default, `Select` will create and use its own model internally. Alternatively, you may configure
your own model with `useSelectModel` and pass it to `Select` via the `model` prop. This pattern is
referred to as
[hoisting the model](/getting-started/for-developers/resources/compound-components/#configuring-a-model)
and provides direct access to its `state` and `events` outside of the `Select` component.

In this example, we set up external observation of the model state and create an external button to
trigger an event to change the selected item.

**Note: If your array of objects uses an `id` property and a `text` property there is no need to use
the helper functions of `getId` or `getTextValue`. The collection system and the `Select` use these
properties by default for keyboard navigation and selected the `id` based on the item clicked.**

```tsx
import React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {BodyText} from '@workday/canvas-kit-react/text';

const options = [
  {text: 'E-mail', id: 'email-1'},
  {text: 'Phone', id: 'phone-2'},
  {text: 'Fax', id: 'fax-3'},
  {text: 'Mail', id: 'mail-4'},
  {text: 'Mobile Phone', id: 'mobile-phone-5'},
];

export const HoistedModel = () => {
  const model = useSelectModel({
    items: options,
    initialSelectedIds: ['fax-3'],
  });

  return (
    <>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.text}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <BodyText size="small">Selected Value: {model.state.selectedIds[0]}</BodyText>
      <SecondaryButton
        onClick={() => {
          model.events.select({id: 'phone-2'});
        }}
      >
        Select Phone Item
      </SecondaryButton>
    </>
  );
};

```

### Label Position Horizontal

Set the `orientation` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `vertical`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const LabelPosition = () => {
  const model = useSelectModel({
    items: options,
  });

  return (
    <Flex>
      <FormField orientation="horizontalStart">
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
            <FormField.Hint>Choose a form of contact</FormField.Hint>
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Required

Set the `required` prop of the wrapping `FormField` to `true` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField isRequired>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};

```

### Disabled

Set the `disabled` prop of `Select.Input` to prevent users from interacting with it.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Disabled = () => {
  const [_, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} nonInteractiveIds={['Fax (disabled)']}>
            <FormField.Input as={Select.Input} disabled onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => (
                    <Select.Item aria-disabled={item === 'Fax (disabled)' ? true : undefined}>
                      {item}
                    </Select.Item>
                  )}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Disabled Items

In order to disable items and prevent users from interacting with them:

1.  Set the `nonInteractiveIds` prop of `Select` to an array of disabled item `id`s. If your items
    are an array of `strings` this will be just the text value. If your items are an array of
    `objects`, this will be that value of the `id` property. This will disable interaction for those
    items and exclude them from type-ahead.

2.  Set the `aria-disabled` attribute of all disabled `Select.Item`s to `true`. This ensures the
    items are styled as disabled.

The following example adds the string value of the items we want disable to `nonInteractiveIds` and
sets `aria-disabled` for the disabled items.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const DisabledOptions = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} nonInteractiveIds={['Fax (disabled)', 'Mobile Phone']}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => (
                    <Select.Item
                      aria-disabled={
                        item === 'Mobile Phone' || item === 'Fax (disabled)' ? true : undefined
                      }
                    >
                      {item}
                    </Select.Item>
                  )}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};

```

### With Icons

Use `Select.Item.Icon` to render an icon for a `Select.Item`. The `icon` prop for `Select.Item.Icon`
accepts [system icons](/assets/system-icons/) from `@workday/canvas-system-icons-web`.

In order to render the icon for the selected item in the `Select.Input`:

1.  Obtain a reference to the `model` by registering your `items` with `useSelectModel`.
2.  Get the selected item:
    `const selectedItem = model.navigation.getItem(model.state.selectedIds[0], model)`
3.  Pass the icon for the selected item to the input:
    `<Select.Input inputStartIcon={selectedItem.value.icon}>`

> **Note: `data-id` on `Select.Item` must match the `id` property in your array of objects. This
> ensures proper keyboard handling and type-ahead.**

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  activityStreamIcon,
  avatarIcon,
  uploadCloudIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const styleOverrides = {
  formfieldInputStyles: createStyles({
    width: px2rem(300),
  }),
  selectCardStyles: createStyles({
    maxHeight: px2rem(200),
  }),
};

const customOptions = [
  {text: 'Activity Stream', id: 'activity-stream', icon: activityStreamIcon},
  {text: 'Avatar', id: 'avatar', icon: avatarIcon},
  {text: 'Upload Cloud', id: 'upload-cloud', icon: uploadCloudIcon},
  {text: 'User', id: 'user', icon: userIcon},
];

export const WithIcons = () => {
  const model = useSelectModel({
    items: customOptions,
  });
  const selectedItem = model.navigation.getItem(model.state.selectedIds[0], model);
  return (
    <Flex>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input
              as={Select.Input}
              cs={styleOverrides.formfieldInputStyles}
              inputStartIcon={selectedItem?.value.icon}
            />
            <Select.Popper>
              <Select.Card cs={styleOverrides.selectCardStyles}>
                {model.state.items.length > 0 && (
                  <Select.List>
                    {item => (
                      <Select.Item data-id={item.id}>
                        <Select.Item.Icon icon={item.icon} />
                        {item.text}
                      </Select.Item>
                    )}
                  </Select.List>
                )}
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

**Note: that `Select.Input` will only render an icon if an item is selected.**

### Grow

Set the `grow` prop of the wrapping `FormField` to `true` to configure the `Select.Input` to expand
to the width of its container.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Grow = () => {
  const model = useSelectModel({
    items: options,
  });

  return (
    <Flex>
      <FormField grow>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};

```

### Menu Height

`Select.Card` has a default maximum height of `300px` to restrict the height of the dropdown menu.
Set its `maxHeight` prop to override this value.

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const selectCardStyles = createStyles({
  maxHeight: px2rem(200),
});

const cities = [
  'Atlanta (United States)',
  'Amsterdam (Europe)',
  'Austin (United States)',
  'Beaverton (United States)',
  'Belfast (Europe)',
  'Berlin (Europe)',
  'Boston (United States)',
  'Boulder (United States)',
  'Chicago (United States)',
  'Dallas (United States)',
  'Denver (United States)',
  'Dublin (Europe)',
  'Irvine (United States)',
  'Minneapolis (United States)',
  'New York (United States)',
  'Orlando (United States)',
  'Palo Alto (United States)',
  'Philadelphia (United States)',
  'Pleasanton (United States)',
  'Raleigh (United States)',
  'San Francisco (United States)',
  'San Mateo (United States)',
  'Stockholm (Europe)',
  'Toronto (Canada)',
  'Victoria (Canada)',
  'Vienna (Europe)',
  'Warsaw (Europe)',
  'Washington, DC (United States)',
  'Zurich (Europe)',
];

export const MenuHeight = () => {
  return (
    <Box>
      <FormField>
        <FormField.Label>Choose a City</FormField.Label>
        <FormField.Field>
          <Select items={cities}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card cs={selectCardStyles}>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Box>
  );
};

```

### Ref Forwarding

`Select.Input` supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html). It will
forward `ref` to its underlying `<input type="text" role="combobox">` element.

```tsx
import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const RefForwarding = () => {
  // @ts-ignore
  const [value, setValue] = React.useState('medium');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (ref && ref.current) {
      console.log(ref);
      ref.current.focus();
    }
  };

  return (
    <>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} ref={ref} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Select</PrimaryButton>
    </>
  );
};

```

### Error States

Set the `error` prop of the wrapping `FormField` to `"caution"` or
`"error"` to set the `Select` to the caution or error state, respectively. You will
also need to set the `hintId` and `hintText` props on the `FormField` to meet accessibility
standards. You must set an `id` attribute on the `Select.Input` element that matches the value of
`inputId` set on the `FormField` element. These attributes ensure that the caution message is
associated to the `Select` and read out by voiceover.

**Note: The Select container component, `Select`, must wrap `FormField` to ensure `Select.Input` is
styled correctly.**

```tsx
<Select items={options}>
  <FormField label="Contact" inputId="contact-id-formfield">
    <Select.Input id="contact-id-formfield" />
    ...
  </FormField>
</Select>
```

#### Caution

Use the alert state when a selection is valid but there is additional information.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Flex cs={parentContainerStyles}>
      <FormField error="caution">
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} id="alert-select" />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
            <FormField.Hint>Please choose a form of contact.</FormField.Hint>
          </Select>
        </FormField.Field>
      </FormField>
      Selected value: {value}
    </Flex>
  );
};

```

#### Error

Use the error state when the selection is no longer valid.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Flex cs={parentContainerStyles}>
      <FormField error="error">
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} nonInteractiveIds={['Fax (disabled)']}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => (
                    <Select.Item aria-disabled={item === 'Fax (disabled)' ? true : undefined}>
                      {item}
                    </Select.Item>
                  )}
                </Select.List>
              </Select.Card>
            </Select.Popper>
            <FormField.Hint>Fax is disabled. Please choose a different option.</FormField.Hint>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};

```

### Initial Selected Item

You can set `initialSelectedIds` to the value that you want initially selected.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  {
    id: 'b310c757b2d341f99d40d76f4d563c5b',
    descriptor: 'Arabic',
    languageCode: 'ar',
    label: 'Arabic',
    nativeLanguageName: 'العربية',
  },
  {
    id: 'a675a6b6e22d100017d7fe2a784d1255',
    descriptor: 'Bulgarian (Bulgaria)',
    languageCode: 'bg_BG',
    label: 'Bulgarian (Bulgaria)',
    nativeLanguageName: 'български (Република България)',
  },
  {
    id: 'da594226446c11de98360015c5e6daf6',
    descriptor: 'English (United States)',
    languageCode: 'en_US',
    label: 'English (United States)',
    nativeLanguageName: 'English',
  },
];

export const InitialSelectedItem = () => {
  const [value, setValue] = React.useState('English (United States)');
  const [id, setId] = React.useState('da594226446c11de98360015c5e6daf6');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
    setValue(options.find(item => item.id === event.target.value).label);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select
            items={options}
            initialSelectedIds={['da594226446c11de98360015c5e6daf6']}
            getId={item => item.id}
            getTextValue={item => item.label}
          >
            <Select.Input onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <p>Id: {id}</p>
      <p>Value: {value}</p>
    </Flex>
  );
};

```

### Placeholder

You can change the placeholder text by passing in a string value to the `placeholder` attribute on
the `Select.Input`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Placeholder = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <Select.Input placeholder="Make a Selection" onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => {
                    return <Select.Item>{item}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};

```

### Fetching Dynamic Items

It's common to load items from a server call. Hoisting the `model` and setting your items on state
allows you to pass those items to your `model`. You can leverage React state to set your items on
load as well as displaying a placeholder indicating when items are loaded.

**Note: In this case we need to use `getId` and `getTextValue` because our data doesn't have the
properties of `id` or `text`. Using these helper functions sets the `serverId` to be `id` and
`label` to be `text`.**

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {useMount} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
  maxWidth: px2rem(300),
});

const movieListItems = [
  {
    label: 'The Lion King',
    serverId: '123',
    Year: '2019',
    Runtime: '118 min',
  },
  {
    label: 'Mowgli: Legend of the Jungle',
    serverId: '234',
    Year: '2018',
    Runtime: '104 min',
  },
  {
    label: 'Doctor Strange',
    serverId: '345',
    Year: '2016',
    Runtime: '115 min',
  },
  {
    label: 'John Wick',
    Year: '2014',
    serverId: '456',
    Runtime: '101 min',
  },
  {
    label: 'The Notebook',
    serverId: '567',
    Year: '2004',
    Runtime: '123 min',
  },
];

export const FetchingDynamicItems = () => {
  const [id, setId] = React.useState('456');
  const [moviesLists, setMoviesList] = React.useState<typeof movieListItems>([]);
  const [loadingStatus, setLoadingStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
  const loadingRef = React.useRef<ReturnType<typeof setTimeout>>();

  const model = useSelectModel({
    items: moviesLists,
    getTextValue: item => item.label,
    getId: item => item.serverId,
    initialSelectedIds: [id],
  });

  const stringValue = moviesLists.find(item => item.serverId === id)?.label || '';

  function loadItems() {
    setLoadingStatus('loading');
    loadingRef.current = setTimeout(() => {
      setLoadingStatus('success');
      setMoviesList(movieListItems);
    }, 1500);
  }

  useMount(() => {
    return () => {
      clearTimeout(loadingRef.current);
    };
  });

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Choose a Film</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input
              as={Select.Input}
              onChange={e => {
                setId(e.target.value);
              }}
              placeholder={loadingStatus}
            />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => {
                    return <Select.Item>{item.label}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <div data-testid="selected-id">Selected Id: {id}</div>
      <div data-testid="selected-value">Selected value: {stringValue}</div>
      <PrimaryButton
        onClick={() => {
          loadItems();
        }}
      >
        Get Items
      </PrimaryButton>
    </Flex>
  );
};

```

### Complex

When registering items in an array of objects, it's common to have the text that is displayed to the
user be different than an id. In this example, `serverId` and `label` properties need to be remapped
to `id` and `text` hence the usage of `getId` and `getTextValue`. If your object has the properties
`text` and `id`, there would be no need for this.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  {serverId: 'email', label: 'E-mail'},
  {serverId: 'phone', label: 'Phone'},
  {serverId: 'fax', label: 'Fax'},
  {serverId: 'mail', label: 'Mail'},
  {serverId: 'mobile', label: 'Mobile Phone'},
  {
    serverId: 'oasis',
    label: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
  },
];

export const Complex = () => {
  const [value, setValue] = React.useState('');
  const [id, setId] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
    setValue(options.find(item => item.serverId === event.target.value)!.label);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} getId={item => item.serverId} getTextValue={item => item.label}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <p>Id: {id}</p>
      <p>Value: {value}</p>
    </Flex>
  );
};

```

**Note: By default, the identifier and text value are `id` and `text` properties respectively. If
your data object for each item is different, provide a `getId` or `getTextValue` function to the
model config. For example:**

```jsx
const items = [
  {
    serverId: '1',
    label: 'First Option',
  },
];

<Select items={items} getId={item => item.serverId} getTextValue={item => item.label}>
  {/* etc */}
</Select>;
```

### Controlled

The Select can be a
[controlled input](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
component by passing the `value` and `onChange` to either the `<Select>` component or the
`<Select.Input>` component. Internally, the `Select.Input` watches for changes on the `value` React
prop as well as the `value` DOM property and will update the model accordingly.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  {serverId: 'email', label: 'E-mail'},
  {serverId: 'phone', label: 'Phone'},
  {serverId: 'fax', label: 'Fax'},
  {serverId: 'mail', label: 'Mail'},
  {serverId: 'mobile', label: 'Mobile Phone'},
  {
    serverId: 'oasis',
    label: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
  },
];

export const Controlled = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    setLabel(options.find(item => item.serverId === event.currentTarget.value)?.label || '');
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} getId={item => item.serverId} getTextValue={item => item.label}>
            <FormField.Input
              as={Select.Input}
              onChange={handleChange}
              value={value}
              name="contact"
            />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <p>Id: {value}</p>
      <p>Label: {label}</p>
      <Flex gap="s">
        <SecondaryButton
          onClick={e => {
            setValue('fax');
          }}
        >
          Set to "Fax"
        </SecondaryButton>
        <SecondaryButton
          onClick={e => {
            setValue('');
          }}
        >
          Clear
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};

```

### When to use `getId`, or `getTextValue`

- `getId`: This is an optional function to return the id of an item. If not provided, the default
  function will return the `id` property from the object of each item. If you did not provide
  `items`, do not override this function. Instead provide static items via JSX. the list will create
  an internal array of items where `id` is the only property and the default `getId` will return the
  desired result. **Note: If your array of objects has a different property for `id`, like
  `serverId`, use this function to set the id.**

  ```tsx
  const options = [{text: 'Pizza', serverId: 'pizza-1'}, {text: 'Cheeseburger', serverId: 'cheeseburger'}]
  <Select items={options} getId={(item) => item.serverId}>
    <FormField label="Your Label">
      <Select.Input onChange={e => handleChange(e)} id="contact-select" />
      <Select.Popper>
        <Select.Card>
          <Select.List>{item => <Select.Item>{item.text}</Select.Item>}</Select.List>
        </Select.Card>
      </Select.Popper>
    </FormField>
  </Select>
  ```

- `getTextValue`: Optional function to return the text representation of an item. If not provided,
  the default function will return the `text` property of the object of each item or an empty string
  if there is no `text` property. If you did not provide `items`, do not override this function.
  **Note: If your array of objects has a different property for `text`, like `label`, use this
  function to set the text.**

  ```tsx
  const options = [{label: 'Pizza', id: 'pizza-1'}, {label: 'Cheeseburger', id: 'cheeseburger'}]
  <Select items={options} getTextValue={(item) => item.label}>
    <FormField label="Your Label">
      <Select.Input onChange={e => handleChange(e)} id="contact-select" />
      <Select.Popper>
        <Select.Card>
          <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
        </Select.Card>
      </Select.Popper>
    </FormField>
  </Select>
  ```

### Custom Styles

Select and its subcomponents support custom styling via the `cs` prop. For more information, check
our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for Select not found -->

## Specifications

### Specifications for Select

<!-- Component specifications from Select.spec.ts -->
