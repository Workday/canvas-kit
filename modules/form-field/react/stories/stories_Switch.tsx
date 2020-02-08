/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {
  ControlledComponentWrapper,
  ComponentStatesTable,
  permutateProps,
  customColorTheme,
} from '../../../../utils/storybook';
import {StaticStates} from '@workday/canvas-kit-labs-react-core/lib/StaticStates';
import {Switch} from '../../../switch/react';
import FormField from '../index';
import README from '../../../switch/react/README.md';

const control = (child: React.ReactNode) => (
  <ControlledComponentWrapper controlledProp={ControlledComponentWrapper.ControlledProp.Checked}>
    {child}
  </ControlledComponentWrapper>
);

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Components|Inputs/Switch/React/Top Label', module)
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

storiesOf('Components|Inputs/Switch/React/Left Label', module)
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

const SwitchStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          checked: [{value: true, label: 'Checked'}, {value: false, label: 'Unchecked'}],
          error: [
            {value: undefined, label: ''},
            {value: Switch.ErrorType.Alert, label: 'Alert'},
            {value: Switch.ErrorType.Error, label: 'Error'},
          ],
        },
        props => {
          if (props.indeterminate && !props.checked) {
            return false;
          }
          return true;
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
      {props => (
        <Switch
          {...props}
          onChange={() => {}} // eslint-disable-line no-empty-function
        />
      )}
    </ComponentStatesTable>
  </StaticStates>
);

storiesOf('Components|Inputs/Switch/React/Visual Testing', module)
  .addParameters({component: Switch})
  .addDecorator(withReadme(README))
  .add('States', () => <SwitchStates />)
  .addParameters({
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  })
  .add('Theming', () => <SwitchStates />);
