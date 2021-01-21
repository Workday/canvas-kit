/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {controlComponent} from '../../../../utils/storybook';

import FormField from '..';
import README from '../../../select/react/README.md';
import {Select, SelectOption} from '../../../select/react';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Components/Inputs/Select/React/Top Label', module)
  .addParameters({component: Select})
  .addDecorator(withReadme(README))
  .add('Plain', () => (
    <FormField label="Label" inputId="select-plain">
      {controlComponent(
        <Select name="contact">
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="select-disabled">
      {controlComponent(
        <Select name="contact" disabled={true}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      inputId="select-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact">
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="select-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact">
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField label="Label" inputId="select-grow" grow={true}>
      {controlComponent(
        <Select name="contact" grow={true}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Grow - Error', () => (
    <FormField
      label="Label"
      inputId="select-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact" grow={true}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ));

storiesOf('Components/Inputs/Select/React/Left Label', module)
  .addParameters({component: Select})
  .addDecorator(withReadme(README))
  .add('Plain', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-plain">
      {controlComponent(
        <Select name="contact">
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-disabled">
      {controlComponent(
        <Select name="contact" disabled={true}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact">
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact">
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-grow"
      grow={true}
    >
      {controlComponent(
        <Select name="contact" grow={true}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Grow - Error', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact" grow={true}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ));
