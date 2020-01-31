/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {controlComponent, ComponentStatesTable, permutateProps} from '../../../../utils/storybook';

import {ColorInput} from '../../../color-picker/react/index';
import FormField from '../index';
import README from '../../../color-picker/react/README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Components|Inputs/Color Picker/Color Input/React/Top Label', module)
  .addParameters({component: ColorInput})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="input-plain">
      {controlComponent(<ColorInput />)}
    </FormField>
  ))
  .add('Checked', () => (
    <FormField label="Label" inputId="input-plain">
      {controlComponent(<ColorInput showCheck />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="input-disabled">
      {controlComponent(<ColorInput disabled={true} />)}
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
      {controlComponent(<ColorInput />)}
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
      {controlComponent(<ColorInput />)}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField label="Label" inputId="input-grow" grow={true}>
      {controlComponent(<ColorInput />)}
    </FormField>
  ))
  .add('Grow with Error', () => (
    <FormField
      label="Label"
      inputId="input-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<ColorInput />)}
    </FormField>
  ));

storiesOf('Components|Inputs/Color Picker/Color Input/React/Left Label', module)
  .addParameters({component: ColorInput})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-plain">
      {controlComponent(<ColorInput />)}
    </FormField>
  ))
  .add('Checked', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-checked">
      {controlComponent(<ColorInput showCheck />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-disabled">
      {controlComponent(<ColorInput disabled={true} />)}
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
      {controlComponent(<ColorInput />)}
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
      {controlComponent(<ColorInput />)}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="input-grow"
      grow={true}
    >
      {controlComponent(<ColorInput />)}
    </FormField>
  ))
  .add('Grow with Error', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="input-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<ColorInput />)}
    </FormField>
  ));

storiesOf('Components|Inputs/Color Picker/Color Input/React/Visual Testing', module)
  .addParameters({component: ColorInput})
  .addDecorator(withReadme(README))
  .add('States', () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps(
          {
            value: [{value: '#005cb9', label: 'Hex Value'}, {value: '', label: 'No Value'}],
            placeholder: [{value: undefined, label: ''}, {value: '000', label: 'Placeholder'}],
            showCheck: [{value: undefined, label: ''}, {value: true, label: 'Checked'}],
            error: [
              {value: undefined, label: ''},
              {value: FormField.ErrorType.Alert, label: 'Alert'},
              {value: FormField.ErrorType.Error, label: 'Error'},
            ],
          },
          props => {
            if (props.value !== '' && props.placeholder) {
              return false;
            } else if (props.value === '' && props.showCheck) {
              return false;
            } else {
              return true;
            }
          }
        )}
        columnProps={permutateProps(
          {
            className: [
              {label: 'Default', value: ''},
              {label: 'Hover', value: 'hover'},
              {label: 'Focus', value: 'focus'},
              {label: 'Focus Hover', value: 'focus hover'},
              {label: 'Active', value: 'active'},
              {label: 'Active Hover', value: 'active hover'},
            ],
            disabled: [{label: '', value: false}, {label: 'Disabled', value: true}],
          },
          props => {
            if (props.disabled && !['', 'hover'].includes(props.className)) {
              return false;
            }
            return true;
          }
        )}
      >
        {props => <ColorInput {...props} />}
      </ComponentStatesTable>
    </StaticStates>
  ));
