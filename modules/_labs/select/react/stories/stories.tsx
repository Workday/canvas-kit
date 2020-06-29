/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {controlComponent} from '../../../../../utils/storybook';
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
import {RenderOptionFunction} from '../lib/SelectBase';
import README from '../README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

export const options = [
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

export const simpleOptions = ['California', 'Florida', 'New York', 'Pennsylvania', 'Texas'];

export const manyOptions = [
  {label: 'Atlanta (United States)', value: 'atlanta'},
  {label: 'Amsterdam (Europe)', value: 'amsterdam'},
  {label: 'Austin (United States)', value: 'austin'},
  {label: 'Beaverton (United States)', value: 'beaverton'},
  {label: 'Belfast (Europe)', value: 'belfast'},
  {label: 'Berlin (Europe)', value: 'berlin'},
  {label: 'Boston (United States)', value: 'boston'},
  {label: 'Boulder (United States)', value: 'boulder'},
  {label: 'Chicago (United States)', value: 'chicago'},
  {label: 'Dallas (United States)', value: 'dallas'},
  {label: 'Denver (United States)', value: 'denver'},
  {label: 'Dublin (Europe)', value: 'dublin'},
  {label: 'Irvine (United States)', value: 'irvine'},
  {label: 'Minneapolis (United States)', value: 'minneapolis'},
  {label: 'New York (United States)', value: 'new-york'},
  {label: 'Orlando (United States)', value: 'orlando'},
  {label: 'Palo Alto (United States)', value: 'palo-alto'},
  {label: 'Philadelphia (United States)', value: 'philadelphia'},
  {label: 'Pleasanton (United States)', value: 'pleasanton'},
  {label: 'Raleigh (United States)', value: 'raleigh'},
  {label: 'San Francisco (United States)', value: 'san-francisco'},
  {label: 'San Mateo (United States)', value: 'san-mateo'},
  {label: 'Stockholm (Europe)', value: 'stockholm'},
  {
    label: 'The Ontologically Anthropocentric Sensory Immersive Simulation (Virtual Reality)',
    value: 'oasis',
  },
  {label: 'Toronto (Canada)', value: 'toronto'},
  {label: 'Victoria (Canada)', value: 'victoria'},
  {label: 'Vienna (Europe)', value: 'vienna'},
  {label: 'Warsaw (Europe)', value: 'warsaw'},
  {label: 'Washington, DC (United States)', value: 'washington-dc'},
  {label: 'Zurich (Europe)', value: 'zurich'},
];

export const customOptions = [
  {value: 'Activity Stream', data: {icon: activityStreamIcon}},
  {value: 'Avatar', data: {icon: avatarIcon}},
  {value: 'Upload Cloud', data: {icon: uploadCloudIcon}},
  {value: 'User', data: {icon: userIcon}},
];

export const customRenderOption: RenderOptionFunction = option => {
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
  .addParameters({component: Select})
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
