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
      <h3>Focus/Active states should all render with the same blue focus outline</h3>
      <Table>
        <thead>
          <tr>
            <th>Error Type</th>
            <th>No Style</th>
            <th>Focus Style</th>
            <th>Active Style</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No Error (Default)</td>
            <td>{control(<Switch />)}</td>
            <td>{control(<Switch className="focus" />)}</td>
            <td>{control(<Switch className="active" />)}</td>
          </tr>
          <tr>
            <td>Alert</td>
            <td>{control(<Switch error={ErrorType.Alert} />)}</td>
            <td>{control(<Switch error={ErrorType.Alert} className="focus" />)}</td>
            <td>{control(<Switch error={ErrorType.Alert} className="active" />)}</td>
          </tr>
          <tr>
            <td>Error</td>
            <td>{control(<Switch error={ErrorType.Error} />)}</td>
            <td>{control(<Switch error={ErrorType.Error} className="focus" />)}</td>
            <td>{control(<Switch error={ErrorType.Error} className="active" />)}</td>
          </tr>
        </tbody>
      </Table>
    </StaticStates>
  ));
