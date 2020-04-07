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
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {
  activityStreamIcon,
  avatarIcon,
  uploadCloudIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';
import {colors, typeColors} from '@workday/canvas-kit-react-core';
import FormField from '../../../../form-field/react/index';
import {RenderOptionFunction, Select} from '../index';
import README from '../README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

const options = [
  {label: 'E-mail', value: 'email'},
  {label: 'Phone', value: 'phone'},
  {label: 'Fax (disabled)', value: 'fax', disabled: true},
  {label: 'Mail', value: 'mail'},
];

const simpleOptions = ['California', 'Florida', 'New York', 'Pennsylvania', 'Texas'];

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

const customOptions = [
  {value: 'Activity Stream', icon: activityStreamIcon},
  {value: 'Avatar', icon: avatarIcon},
  {value: 'Upload Cloud', icon: uploadCloudIcon},
  {value: 'User', icon: userIcon},
];

const customRenderOption: RenderOptionFunction = option => {
  const iconColor = option.focused ? typeColors.inverse : colors.blackPepper100;
  return (
    <div style={{alignItems: 'center', display: 'flex', padding: '3px 0'}}>
      <SystemIcon icon={option.icon} color={iconColor} colorHover={iconColor} />
      <div style={{marginLeft: 5}}>{option.value}</div>
    </div>
  );
};

const defaultComponent = controlComponent(<Select name="contact" options={options} />);

const defaultWithSimpleOptionsComponent = controlComponent(
  <Select name="state" options={simpleOptions} />
);

const defaultWithCustomOptionsComponent = controlComponent(
  <Select name="icon" options={customOptions} renderOption={customRenderOption} />
);

const manyOptionsComponent = controlComponent(<Select name="city" options={manyOptions} />);

const disabledComponent = controlComponent(
  <Select name="contact" options={options} disabled={true} />
);

const growComponent = controlComponent(<Select name="contact" options={options} grow={true} />);

storiesOf('Labs|Select/React/Top Label', module)
  .addParameters({component: Select})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="select-default">
      {defaultComponent}
    </FormField>
  ))
  .add('Default with Simple Options (Strings)', () => (
    <FormField label="Label" inputId="select-default-simple">
      {defaultWithSimpleOptionsComponent}
    </FormField>
  ))
  .add('Default with Custom Options', () => (
    <FormField label="Label" inputId="select-default-custom">
      {defaultWithCustomOptionsComponent}
    </FormField>
  ))
  .add('Scrollable', () => (
    <FormField label="Label" inputId="select-scrollable">
      {manyOptionsComponent}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="select-disabled">
      {disabledComponent}
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
      {defaultComponent}
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
      {defaultComponent}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField label="Label" inputId="select-grow" grow={true}>
      {growComponent}
    </FormField>
  ));

storiesOf('Labs|Select/React/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-default">
      {defaultComponent}
    </FormField>
  ))
  .add('Default with Simple Options (Strings)', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-default-simple"
    >
      {defaultWithSimpleOptionsComponent}
    </FormField>
  ))
  .add('Default with Custom Options', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-default-custom"
    >
      {defaultWithCustomOptionsComponent}
    </FormField>
  ))
  .add('Scrollable', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-scrollable"
    >
      {manyOptionsComponent}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-disabled">
      {disabledComponent}
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
      {defaultComponent}
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
      {defaultComponent}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-grow"
      grow={true}
    >
      {growComponent}
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
