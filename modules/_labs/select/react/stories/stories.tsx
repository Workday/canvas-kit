/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  controlComponent,
  ComponentStatesTable,
  permutateProps,
} from '../../../../../utils/storybook';

import FormField from '../../../../form-field/react/index';
import {Select} from '../index';
import README from '../README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

const options = [
  {label: 'E-mail', value: 'email'},
  {label: 'Phone', value: 'phone'},
  {label: 'Fax (disabled)', value: 'fax', disabled: true},
  {label: 'Mail', value: 'mail'},
];

const manyOptions = [
  {label: 'Atlanta', value: 'atlanta'},
  {label: 'Austin', value: 'austin'},
  {label: 'Beaverton', value: 'beaverton'},
  {label: 'Boston', value: 'boston'},
  {label: 'Boulder', value: 'boulder'},
  {label: 'Chicago', value: 'chicago'},
  {label: 'Dallas', value: 'dallas'},
  {label: 'Denver', value: 'denver'},
  {label: 'Dublin', value: 'dublin'},
  {label: 'Pleasanton', value: 'pleasanton'},
  {label: 'San Francisco', value: 'san-francisco'},
  {label: 'San Mateo', value: 'san-mateo'},
];

storiesOf('Labs|Select/React/Top Label', module)
  .addParameters({component: Select})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ))
  .add('Scrollable', () => (
    <FormField label="Label" inputId="select-scrollable">
      {controlComponent(<Select name="location" options={manyOptions} />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="select-disabled">
      {controlComponent(<Select name="contact" options={options} disabled={true} />)}
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
      {controlComponent(<Select name="contact" options={options} />)}
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
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField label="Label" inputId="select-grow" grow={true}>
      {controlComponent(<Select name="contact" options={options} grow={true} />)}
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
      {controlComponent(<Select name="contact" options={options} grow={true} />)}
    </FormField>
  ));

storiesOf('Labs|Select/React/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ))
  .add('Scrollable', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-scrollable"
    >
      {controlComponent(<Select name="location" options={manyOptions} />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-disabled">
      {controlComponent(<Select name="contact" options={options} disabled={true} />)}
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
      {controlComponent(<Select name="contact" options={options} />)}
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
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-grow"
      grow={true}
    >
      {controlComponent(<Select name="contact" options={options} grow={true} />)}
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
      {controlComponent(<Select name="contact" options={options} grow={true} />)}
    </FormField>
  ));

storiesOf('Labs|Select/React/Visual Testing', module)
  .addParameters({
    chromatic: {
      disable: false,
    },
  })
  .addDecorator(withReadme(README))
  .add('States', () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default', props: {}},
          {label: 'Alert', props: {error: Select.ErrorType.Alert}},
          {label: 'Error', props: {error: Select.ErrorType.Error}},
        ]}
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
          <Select
            {...props}
            style={{minWidth: 60, width: 100}}
            onChange={() => {}} // eslint-disable-line no-empty-function
            options={options}
          />
        )}
      </ComponentStatesTable>
    </StaticStates>
  ));
