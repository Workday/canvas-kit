/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import styled from '@emotion/styled';
import {ControlledComponentWrapper} from '../../../../utils/storybook';
import {StaticStates} from '@workday/canvas-kit-labs-react-core/lib/StaticStates';

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

storiesOf('Components|Inputs/Checkbox/React', module)
  .addParameters({component: Checkbox})
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
              return [false, true].map(indeterminate => {
                return ['Default', 'Alert', 'Error'].map(variant => {
                  const type =
                    variant === 'Alert'
                      ? Checkbox.ErrorType.Alert
                      : variant === 'Error'
                      ? Checkbox.ErrorType.Error
                      : undefined;

                  if (indeterminate && !checked) {
                    return;
                  }

                  return (
                    <tr
                      key={`${checked ? 'checked' : 'unchecked'} ${
                        disabled ? 'disabled' : 'enabled'
                      }  ${indeterminate ? 'indeterminate' : ''} ${variant}`}
                    >
                      <td>{`${disabled ? 'Disabled ' : ''}${variant} (${
                        checked ? (indeterminate ? 'indeterminate' : 'checked') : 'unchecked'
                      })`}</td>
                      <td>
                        <Checkbox
                          defaultChecked={checked}
                          disabled={disabled}
                          indeterminate={indeterminate}
                          error={type}
                        />
                      </td>
                      <td>
                        <Checkbox
                          defaultChecked={checked}
                          disabled={disabled}
                          indeterminate={indeterminate}
                          error={type}
                          className="hover"
                        />
                      </td>
                      <td>
                        <Checkbox
                          defaultChecked={checked}
                          disabled={disabled}
                          indeterminate={indeterminate}
                          error={type}
                          className="focus"
                        />
                      </td>
                      <td>
                        <Checkbox
                          defaultChecked={checked}
                          disabled={disabled}
                          indeterminate={indeterminate}
                          error={type}
                          className="active"
                        />
                      </td>
                    </tr>
                  );
                });
              });
            });
          })}
        </tbody>
      </Table>
    </StaticStates>
  ));
