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
import Select from '../lib/Select';
import SelectBase, {RenderOptionFunction} from '../lib/SelectBase';
import SelectOption from '../lib/SelectOption';
import README from '../README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

const options = [
  {label: 'E-mail', value: 'email'},
  {label: 'Phone', value: 'phone'},
  {label: 'Fax (disabled)', value: 'fax', disabled: true},
  {label: 'Mail', value: 'mail'},
  {label: 'Mobile Phone', value: 'mobile_phone'},
  {
    label: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
    value: 'oasis',
  },
];

const normalizedOptions = options.map(option => {
  return {
    data: {},
    disabled: option.disabled || false,
    id: option.value,
    label: option.label || option.value,
    value: option.value,
  };
});

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
  {value: 'Activity Stream', data: {icon: activityStreamIcon}},
  {value: 'Avatar', data: {icon: avatarIcon}},
  {value: 'Upload Cloud', data: {icon: uploadCloudIcon}},
  {value: 'User', data: {icon: userIcon}},
];

const customRenderOption: RenderOptionFunction = option => {
  const iconColor = option.focused ? typeColors.inverse : colors.blackPepper100;
  return (
    <div style={{alignItems: 'center', display: 'flex', padding: '3px 0'}}>
      <SystemIcon icon={option.data.icon} color={iconColor} colorHover={iconColor} />
      <div style={{marginLeft: 5}}>{option.value}</div>
    </div>
  );
};

storiesOf('Labs|Select/React/Top Label', module)
  .addParameters({component: Select})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ))
  .add('Default with Simple Options (Strings)', () => (
    <FormField label="Label" inputId="select-default-simple">
      {controlComponent(<Select name="state" options={simpleOptions} />)}
    </FormField>
  ))
  .add('Default with Custom Options Data', () => (
    <FormField label="Label" inputId="select-default-custom">
      {controlComponent(
        <Select name="icon" options={customOptions} renderOption={customRenderOption} />
      )}
    </FormField>
  ))
  .add('Scrollable', () => (
    <FormField label="Label" inputId="select-scrollable">
      {controlComponent(<Select name="city" options={manyOptions} />)}
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
  ));

storiesOf('Labs|Select/React/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ))
  .add('Default with Simple Options (Strings)', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-default-simple"
    >
      {controlComponent(<Select name="state" options={simpleOptions} />)}
    </FormField>
  ))
  .add('Default with Custom Options Data', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-default-custom"
    >
      {controlComponent(
        <Select name="icon" options={customOptions} renderOption={customRenderOption} />
      )}
    </FormField>
  ))
  .add('Scrollable', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-scrollable"
    >
      {controlComponent(<Select name="city" options={manyOptions} />)}
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
            onChange={() => {}} // eslint-disable-line no-empty-function
            options={options}
          />
        )}
      </ComponentStatesTable>
    </StaticStates>
  ))
  .add('States (Menu On)', () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default', props: {}},
          {label: 'Alert', props: {error: Select.ErrorType.Alert}},
          {label: 'Error', props: {error: Select.ErrorType.Error}},
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => (
          <div style={{height: 250}}>
            <SelectBase
              {...props}
              onChange={() => {}} // eslint-disable-line no-empty-function
              options={normalizedOptions}
              focusedOptionIndex={1}
              isMenuAnimated={false}
              isMenuHidden={false}
            />
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ))
  .add('States (Option)', () => (
    <div>
      {[
        {
          label: 'Disabled States',
          columnProps: [
            {label: 'Default', props: {}},
            {label: 'Hover', props: {className: 'hover'}},
          ],
          rowProps: [{label: 'Disabled', props: {disabled: true}}],
        },
        {
          label: 'Interaction States',
          columnProps: [
            {label: 'Default', props: {}},
            {label: 'Hover', props: {className: 'hover'}},
            {label: 'Active', props: {className: 'active'}},
            {label: 'Active Hover', props: {className: 'active hover'}},
          ],
          rowProps: [
            {label: 'Default', props: {}},
            {label: 'Assistive-Focus', props: {focused: true}},
            {label: 'Selected', props: {'aria-selected': true}},
            {label: 'Assistive-Focus Selected', props: {'aria-selected': true, focused: true}},
          ],
        },
      ].map(statesTable => (
        <div>
          <h2>{statesTable.label}</h2>
          <StaticStates>
            <ComponentStatesTable
              rowProps={statesTable.rowProps}
              columnProps={statesTable.columnProps}
            >
              {props => (
                <ul style={{listStyle: 'none', margin: 0, padding: 0, width: 280}}>
                  <SelectOption {...props}>E-mail</SelectOption>
                </ul>
              )}
            </ComponentStatesTable>
          </StaticStates>
        </div>
      ))}
    </div>
  ));
