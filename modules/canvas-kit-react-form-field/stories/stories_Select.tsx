/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator, controlComponent} from '../../../utils/storybook';

import README from '../README.md';
import {Select, SelectOption} from '@workday/canvas-kit-react-select';
import FormField from '..';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Form Field/Select/Top Label', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(SectionDecorator('Select'))
  .addDecorator(withReadme(README))
  .add('Plain', () => (
    <FormField label="Label" inputId="input-plain">
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
    <FormField label="Label" inputId="input-disabled">
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
      inputId="input-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact" error={FormField.ErrorType.Alert}>
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
      inputId="input-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact" error={FormField.ErrorType.Error}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField label="Label" inputId="input-grow" grow={true}>
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
      inputId="input-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact" grow={true} error={FormField.ErrorType.Error}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ));

storiesOf('Form Field/Select/Left Label', module)
  .addDecorator(SectionDecorator('Select'))
  .addDecorator(withReadme(README))
  .add('Plain', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-plain">
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
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-disabled">
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
      inputId="input-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact" error={FormField.ErrorType.Alert}>
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
      inputId="input-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact" error={FormField.ErrorType.Error}>
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
      inputId="input-grow"
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
      inputId="input-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(
        <Select name="contact" grow={true} error={FormField.ErrorType.Error}>
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      )}
    </FormField>
  ));
