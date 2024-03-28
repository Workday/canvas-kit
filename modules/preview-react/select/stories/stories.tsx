import * as React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {controlComponent} from '../../../../utils/storybook';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {
  activityStreamIcon,
  avatarIcon,
  uploadCloudIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';
import {colors, typeColors} from '@workday/canvas-kit-react/tokens';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {
  Select,
  RenderOptionFunction,
  RenderSelectedFunction,
} from '@workday/canvas-kit-preview-react/select';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

export const options = [
  {label: 'E-mail', value: 'email-1234'},
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

export const customRenderSelected: RenderSelectedFunction = option => {
  const iconColor = colors.blackPepper100;
  return (
    <div style={{alignItems: 'center', display: 'flex'}}>
      <SystemIcon icon={option.data.icon} color={iconColor} colorHover={iconColor} />
      <div style={{marginLeft: 5}}>{option.value}</div>
    </div>
  );
};

const meta: Meta<typeof Select> = {
  title: 'Preview/Select',
  component: Select,
  parameters: {
    ReadmePath: 'preview-react/select',
  },
};

export default meta;

export const TopLabelDefault: StoryObj = {
  name: 'Top Label/Default',
  render: () => (
    <FormField label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ),
};

export const TopLabelDefaultWithSimpleOptions: StoryObj = {
  name: 'Top Label/Default with Simple Options (Strings)',
  render: () => (
    <FormField label="Label" inputId="select-default-simple">
      {controlComponent(<Select name="state" options={simpleOptions} />)}
    </FormField>
  ),
};

export const TopLabelDefaultWithCustomOptionsData: StoryObj = {
  name: 'Top Label/Default with Custom Options Data',
  render: () => (
    <FormField label="Label" inputId="select-default-custom">
      {controlComponent(
        <Select
          name="icon"
          options={customOptions}
          renderOption={customRenderOption}
          renderSelected={customRenderSelected}
        />
      )}
    </FormField>
  ),
};

export const TopLabelScrollable: StoryObj = {
  name: 'Top Label/Scrollable',
  render: () => (
    <FormField label="Label" inputId="select-scrollable">
      {controlComponent(<Select name="city" options={manyOptions} />)}
    </FormField>
  ),
};

export const TopLabelDisabled: StoryObj = {
  name: 'Top Label/Disabled',
  render: () => (
    <FormField label="Label" inputId="select-disabled">
      {controlComponent(<Select name="contact" options={options} disabled={true} />)}
    </FormField>
  ),
};

export const TopLabelAlert: StoryObj = {
  name: 'Top Label/Alert',
  render: () => (
    <FormField
      label="Label"
      inputId="select-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ),
};

export const TopLabelError: StoryObj = {
  name: 'Top Label/Error',
  render: () => (
    <FormField
      label="Label"
      inputId="select-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ),
};

export const TopLabelGrow: StoryObj = {
  name: 'Top Label/Grow',
  render: () => (
    <FormField label="Label" inputId="select-grow" grow={true}>
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ),
};

export const LeftLabelDefault: StoryObj = {
  name: 'Left Label/Default',
  render: () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ),
};

export const LeftLabelDefaultWithSimpleOptions: StoryObj = {
  name: 'Left Label/Default with Simple Options (Strings)',
  render: () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-default-simple"
    >
      {controlComponent(<Select name="state" options={simpleOptions} />)}
    </FormField>
  ),
};

export const LeftLabelDefaultWithCustomOptionsData: StoryObj = {
  name: 'Left Label/Default with Custom Options Data',
  render: () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-default-custom"
    >
      {controlComponent(
        <Select
          name="icon"
          options={customOptions}
          renderOption={customRenderOption}
          renderSelected={customRenderSelected}
        />
      )}
    </FormField>
  ),
};

export const LeftLabelScrollable: StoryObj = {
  name: 'Left Label/Scrollable',
  render: () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-scrollable"
    >
      {controlComponent(<Select name="city" options={manyOptions} />)}
    </FormField>
  ),
};

export const LeftLabelDisabled: StoryObj = {
  name: 'Left Label/Disabled',
  render: () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-disabled">
      {controlComponent(<Select name="contact" options={options} disabled={true} />)}
    </FormField>
  ),
};

export const LeftLabelAlert: StoryObj = {
  name: 'Left Label/Alert',
  render: () => (
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
  ),
};

export const LeftLabelError: StoryObj = {
  name: 'Left Label/Error',
  render: () => (
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
  ),
};

export const LeftLabelGrow: StoryObj = {
  name: 'Left Label/Grow',
  render: () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-grow"
      grow={true}
    >
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  ),
};
