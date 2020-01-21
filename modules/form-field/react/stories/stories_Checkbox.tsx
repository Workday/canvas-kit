/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {ControlledComponentWrapper, StaticStatesTable} from '../../../../utils/storybook';

import {Checkbox} from '../../../checkbox/react/index';
import FormField from '../index';
import README from '../../../checkbox/react/README.md';

const control = (child: React.ReactNode) => (
  <ControlledComponentWrapper controlledProp={ControlledComponentWrapper.ControlledProp.Checked}>
    {child}
  </ControlledComponentWrapper>
);

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Components|Inputs/Checkbox/React/Top Label', module)
  .addParameters({component: Checkbox})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="my-checkbox-field">
      {control(<Checkbox label="Checkbox option" />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="my-checkbox-field">
      {control(<Checkbox label="Checkbox option" disabled={true} />)}
    </FormField>
  ))
  .add('Indeterminate', () => (
    <FormField label="Label" inputId="my-checkbox-field">
      {control(<Checkbox label="Checkbox option" indeterminate={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      inputId="my-checkbox-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {control(<Checkbox label="Checkbox option" />)}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="my-checkbox-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {control(<Checkbox label="Checkbox option" />)}
    </FormField>
  ));

storiesOf('Components|Inputs/Checkbox/React/Left Label', module)
  .addParameters({component: Checkbox})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField
      label="Label"
      inputId="my-checkbox-field"
      labelPosition={FormField.LabelPosition.Left}
    >
      {control(<Checkbox label="Checkbox option" />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField
      label="Label"
      inputId="my-checkbox-field"
      labelPosition={FormField.LabelPosition.Left}
    >
      {control(<Checkbox label="Checkbox option" disabled={true} />)}
    </FormField>
  ))
  .add('Indeterminate', () => (
    <FormField
      label="Label"
      inputId="my-checkbox-field"
      labelPosition={FormField.LabelPosition.Left}
    >
      {control(<Checkbox label="Checkbox option" indeterminate={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      inputId="my-checkbox-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
      labelPosition={FormField.LabelPosition.Left}
    >
      {control(<Checkbox label="Checkbox option" />)}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="my-checkbox-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
      labelPosition={FormField.LabelPosition.Left}
    >
      {control(<Checkbox label="Checkbox option" />)}
    </FormField>
  ));

storiesOf('Components|Inputs/Checkbox/React/Visual Testing', module)
  .addParameters({component: Checkbox})
  .addDecorator(withReadme(README))
  .add('States', () => (
    <StaticStatesTable
      componentProps={{
        checked: [{value: true, label: 'Checked'}, {value: false, label: 'Unchecked'}],
        indeterminate: [{value: true, label: 'Indeterminate'}, {value: false, label: ''}],
        error: [
          {value: undefined, label: ''},
          {value: Checkbox.ErrorType.Alert, label: 'Alert'},
          {value: Checkbox.ErrorType.Error, label: 'Error'},
        ],
      }}
      shouldRenderRow={props => {
        if (props.indeterminate && !props.checked) {
          return false;
        }
        return true;
      }}
      renderComponent={(props, disabled, className) => (
        <Checkbox
          checked={props.checked}
          disabled={disabled}
          indeterminate={props.indeterminate}
          error={props.error}
          className={className}
          onChange={() => {}} // eslint-disable-line no-empty-function
          label="Checkbox"
        />
      )}
    />
  ));
