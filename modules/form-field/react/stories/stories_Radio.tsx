/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Radio, RadioGroup} from '../../../radio/react';
import FormField from '../index';
import README from '../../../radio/react/README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Components/Inputs/Radio/React/Top Label/Radio Group', module)
  .addParameters({component: RadioGroup})
  .addDecorator(withReadme(README))
  .add('Default', () => {
    const [value, setValue] = React.useState(undefined);
    return (
      <FormField label="Label" useFieldset={true}>
        <RadioGroup name="contact" value={value} onChange={value => setValue(value)}>
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </FormField>
    );
  })
  .add('Alert', () => {
    const [value, setValue] = React.useState(undefined);
    return (
      <FormField
        label="Label"
        useFieldset={true}
        error={FormField.ErrorType.Alert}
        hintText={hintText}
        hintId={hintId}
      >
        <RadioGroup name="contact" value={value} onChange={value => setValue(value)}>
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </FormField>
    );
  })
  .add('Error with Grow', () => {
    const [value, setValue] = React.useState(undefined);
    return (
      <FormField
        label="Label"
        useFieldset={true}
        error={FormField.ErrorType.Error}
        grow={true}
        hintText={hintText}
        hintId={hintId}
      >
        <RadioGroup name="contact" value={value} onChange={value => setValue(value)}>
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </FormField>
    );
  });

storiesOf('Components/Inputs/Radio/React/Top Label/Radio', module)
  .addParameters({component: Radio})
  .addDecorator(withReadme(README))
  .add('Default', () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <FormField label="Label">
        <Radio
          value="email"
          label="E-mail"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </FormField>
    );
  });

storiesOf('Components/Inputs/Radio/React/Left Label/Radio Group', module)
  .addParameters({component: RadioGroup})
  .addDecorator(withReadme(README))
  .add('Default', () => {
    const [value, setValue] = React.useState(undefined);
    return (
      <FormField label="Label" useFieldset={true} labelPosition={FormField.LabelPosition.Left}>
        <RadioGroup name="contact" value={value} onChange={value => setValue(value)}>
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </FormField>
    );
  })
  .add('Alert', () => {
    const [value, setValue] = React.useState(undefined);
    return (
      <FormField
        label="Label"
        useFieldset={true}
        error={FormField.ErrorType.Alert}
        hintText={hintText}
        hintId={hintId}
        labelPosition={FormField.LabelPosition.Left}
      >
        <RadioGroup name="contact" value={value} onChange={value => setValue(value)}>
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </FormField>
    );
  })
  .add('Error with Grow', () => {
    const [value, setValue] = React.useState(undefined);
    return (
      <FormField
        label="Label"
        useFieldset={true}
        error={FormField.ErrorType.Error}
        grow={true}
        hintText={hintText}
        hintId={hintId}
        labelPosition={FormField.LabelPosition.Left}
      >
        <RadioGroup name="contact" value={value} onChange={value => setValue(value)}>
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </FormField>
    );
  });

storiesOf('Components/Inputs/Radio/React/Left Label/Radio', module)
  .addParameters({component: Radio})
  .addDecorator(withReadme(README))
  .add('Default', () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <FormField label="Label" labelPosition={FormField.LabelPosition.Left}>
        <Radio
          value="email"
          label="E-mail"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </FormField>
    );
  })
  .add('Disabled', () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <FormField label="Label" labelPosition={FormField.LabelPosition.Left}>
        <Radio
          disabled
          value="email"
          label="E-mail"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </FormField>
    );
  });
