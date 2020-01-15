/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {ControlledComponentWrapper} from '../../../../utils/storybook';

import styled from '@emotion/styled';
import {Switch} from '../../../switch/react/index';
import FormField from '../index';
import README from '../../../switch/react/README.md';
import {StaticStates} from '@workday/canvas-kit-labs-react-core/lib/StaticStates';
import {ErrorType} from '@workday/canvas-kit-react-common';

const control = (child: React.ReactNode) => (
  <ControlledComponentWrapper controlledProp={ControlledComponentWrapper.ControlledProp.Checked}>
    {child}
  </ControlledComponentWrapper>
);

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

const Table = styled('table')({
  width: '100%',
  thead: {
    textAlign: 'left',
    paddingBottom: 16,
  },
  'td, th': {
    minWidth: 100,
    paddingBottom: 16,
    paddingRight: 16,
    textAlign: 'left',
  },
});

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

storiesOf('Components|Inputs/Switch/React/Visual Testing', module)
  .addParameters({component: Switch})
  .addDecorator(withReadme(README))
  .add('States', () => (
    <StaticStates>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>No state</th>
            <th>Hover</th>
            <th>Focused</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {[false, true].map(checked => {
            return [false, true].map(disabled => {
              return ['Default', 'Alert', 'Error'].map(variant => {
                const type =
                  variant === 'Alert'
                    ? ErrorType.Alert
                    : variant === 'Error'
                    ? ErrorType.Error
                    : undefined;

                const key = `${checked ? 'checked' : 'unchecked'} ${
                  disabled ? 'disabled' : 'enabled'
                } ${variant}`;

                return (
                  <tr key={key}>
                    <td>{`${disabled ? 'Disabled ' : ''}${variant} (${
                      checked ? 'checked' : 'unchecked'
                    })`}</td>
                    {['', 'hover', 'focus', 'active'].map(className => (
                      <td key={`${key} + ${className}`}>
                        <Switch
                          checked={checked}
                          onChange={() => {}} // eslint-disable-line no-empty-function
                          disabled={disabled}
                          error={type}
                          className={className}
                        />
                      </td>
                    ))}
                  </tr>
                );
              });
            });
          })}
        </tbody>
      </Table>
    </StaticStates>
  ));
