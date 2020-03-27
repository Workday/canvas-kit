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
import {Select, SelectOption} from '../index';
import README from '../README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Labs|Select/React/Top Label', module)
  .addParameters({component: Select})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="select-default">
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
  .add('Scrollable', () => (
    <FormField label="Label" inputId="select-scrollable">
      {controlComponent(
        <Select name="location">
          <SelectOption value="atlanta" label="Atlanta" />
          <SelectOption value="austin" label="Austin" />
          <SelectOption value="beaverton" label="Beaverton" />
          <SelectOption value="boston" label="Boston" />
          <SelectOption value="boulder" label="Boulder" />
          <SelectOption value="chicago" label="Chicago" />
          <SelectOption value="dallas" label="Dallas" />
          <SelectOption value="denver" label="Denver" />
          <SelectOption value="dublin" label="Dublin" />
          <SelectOption value="pleasanton" label="Pleasanton" />
          <SelectOption value="san-francisco" label="San Francisco" />
          <SelectOption value="san-mateo" label="San Mateo" />
        </Select>
      )}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="select-disabled">
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
      inputId="select-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
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
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="select-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
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
  .add('Grow', () => (
    <FormField label="Label" inputId="select-grow" grow={true}>
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
      inputId="select-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
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
  ));

storiesOf('Labs|Select/React/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-default">
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
  .add('Scrollable', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-scrollable"
    >
      {controlComponent(
        <Select name="location">
          <SelectOption value="atlanta" label="Atlanta" />
          <SelectOption value="austin" label="Austin" />
          <SelectOption value="beaverton" label="Beaverton" />
          <SelectOption value="boston" label="Boston" />
          <SelectOption value="boulder" label="Boulder" />
          <SelectOption value="chicago" label="Chicago" />
          <SelectOption value="dallas" label="Dallas" />
          <SelectOption value="denver" label="Denver" />
          <SelectOption value="dublin" label="Dublin" />
          <SelectOption value="pleasanton" label="Pleasanton" />
          <SelectOption value="san-francisco" label="San Francisco" />
          <SelectOption value="san-mateo" label="San Mateo" />
        </Select>
      )}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-disabled">
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
      inputId="select-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
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
  .add('Error', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
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
  .add('Grow', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-grow"
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
      inputId="select-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
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
          >
            <SelectOption value="email" label="E-mail" />
            <SelectOption value="phone" label="Phone" />
          </Select>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ));
