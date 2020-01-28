/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import styled from '@emotion/styled';
import {controlComponent} from '../../../../utils/storybook';
import {StaticStates} from '@workday/canvas-kit-labs-react-core/lib/StaticStates';

import {ColorInput} from '../../../color-picker/react/index';
import FormField from '../index';
import README from '../../../color-picker/react/README.md';

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
      <ColorInput value={'#005cb9'} showCheck />
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
                    ? FormField.ErrorType.Alert
                    : variant === 'Error'
                    ? FormField.ErrorType.Error
                    : undefined;

                const key = `${checked ? 'checked' : 'unchecked'}-${
                  disabled ? 'disabled' : 'enabled'
                }-${variant}`;

                return (
                  <tr key={key}>
                    <td>{`${disabled ? 'Disabled ' : ''}${variant} (${
                      checked ? 'checked' : 'unchecked'
                    })`}</td>

                    {['', 'hover', 'focus', 'active'].map(className => (
                      <td key={`${key}-${className}`}>
                        <ColorInput
                          showCheck={checked}
                          disabled={disabled}
                          error={type}
                          value={checked ? '#005cb9' : ''}
                          className={className}
                          onChange={() => {}} // eslint-disable-line no-empty-function
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
