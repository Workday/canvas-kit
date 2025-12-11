---
source_file: preview-react/select/stories/Select.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/select/stories/Select
---

<Meta of={SelectStories} />

# Canvas Kit Select <StorybookStatusIndicator type="deprecated" />

<InformationHighlight className="sb-unstyled" variant="caution" cs={{p: {marginBlock: 0}}}>
  <InformationHighlight.Icon />
  <InformationHighlight.Body>
    `Select` in Preview has been deprecated and will be removed in a future major version. Please
    use `Select` in Main instead.
  </InformationHighlight.Body>
  <InformationHighlight.Link href="https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs">
    Select (main) Docs
  </InformationHighlight.Link>
</InformationHighlight>

<br />

## Top Label

### Default

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Default = () => {
  return (
    <FormField id="select-default">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
      </FormField.Field>
    </FormField>
  );
};

```

### Default with Custom Options Data

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {customOptions, customRenderOption, customRenderSelected} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultWithCustomOptions = () => {
  return (
    <FormField id="select-default-custom">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(
          <FormField.Input
            as={Select}
            name="icon"
            options={customOptions}
            renderOption={customRenderOption}
            renderSelected={customRenderSelected}
          />
        )}
      </FormField.Field>
    </FormField>
  );
};

```

### Default with Simple Options Data

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {simpleOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultWithSimpleOptions = () => {
  return (
    <FormField id="select-default-simple">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="state" options={simpleOptions} />)}
      </FormField.Field>
    </FormField>
  );
};

```

### Scrollable

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {manyOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Scrollable = () => {
  return (
    <FormField id="select-default">
      <FormField.Label>Label</FormField.Label>
      {controlComponent(<FormField.Input as={Select} name="contact" options={manyOptions} />)}
    </FormField>
  );
};

```

### Disabled

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Disabled = () => {
  return (
    <FormField id="select-disabled">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(
          <FormField.Input as={Select} name="contact" options={options} disabled={true} />
        )}
      </FormField.Field>
    </FormField>
  );
};

```

### Alert

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {hintText, options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Caution = () => {
  return (
    <FormField id="select-alert" error="caution">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
        <FormField.Hint>{hintText}</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

### Error

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {hintText, options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Error = () => {
  return (
    <FormField id="select-error" error="error">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
        <FormField.Hint>{hintText}</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

### Grow

```tsx
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Grow = () => {
  return (
    <FormField id="select-grow" grow={true}>
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
      </FormField.Field>
    </FormField>
  );
};

```

## Left Label

### Default

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-default">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
      </FormField.Field>
    </FormField>
  );
};

```

### Default with Custom Options Data

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {customOptions, customRenderOption, customRenderSelected} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultWithCustomOptionsLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-default-custom">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(
          <FormField.Input
            as={Select}
            name="icon"
            options={customOptions}
            renderOption={customRenderOption}
            renderSelected={customRenderSelected}
          />
        )}
      </FormField.Field>
    </FormField>
  );
};

```

### Default with Simple Options Data

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {simpleOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultWithSimpleOptionsLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-default-simple">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="state" options={simpleOptions} />)}
      </FormField.Field>
    </FormField>
  );
};

```

### Scrollable

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {manyOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const ScrollableLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-default">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={manyOptions} />)}
      </FormField.Field>
    </FormField>
  );
};

```

### Disabled

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DisabledLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-disabled">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(
          <FormField.Input as={Select} name="contact" options={options} disabled={true} />
        )}
      </FormField.Field>
    </FormField>
  );
};

```

### Alert

<!-- Could not find example code for CautionLeft -->

### Error

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {hintText, options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const ErrorLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-error" error="error">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
        <FormField.Hint>{hintText}</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

### Grow

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const GrowLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-grow" grow={true}>
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
      </FormField.Field>
    </FormField>
  );
};

```
