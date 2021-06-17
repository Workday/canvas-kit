/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {ControlledComponentWrapper} from '../../../../utils/storybook';
import {Switch} from '../../switch';
import FormField from '../index';
import README from '../../switch/README.md';

const control = (child: React.ReactNode) => (
  <ControlledComponentWrapper controlledProp={ControlledComponentWrapper.ControlledProp.Checked}>
    {child}
  </ControlledComponentWrapper>
);

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Components/Inputs/Switch/React/Top Label', module)
  .addParameters({component: Switch})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="my-switch-field">
      {control(<Switch />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="my-switch-field">
      {control(<Switch disabled={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      inputId="my-switch-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {control(<Switch />)}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="my-switch-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {control(<Switch />)}
    </FormField>
  ));

storiesOf('Components/Inputs/Switch/React/Left Label', module)
  .addParameters({component: Switch})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="my-switch-field" labelPosition={FormField.LabelPosition.Left}>
      {control(<Switch />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="my-switch-field" labelPosition={FormField.LabelPosition.Left}>
      {control(<Switch disabled={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      inputId="my-switch-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
      labelPosition={FormField.LabelPosition.Left}
    >
      {control(<Switch />)}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="my-switch-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
      labelPosition={FormField.LabelPosition.Left}
    >
      {control(<Switch />)}
    </FormField>
  ));
