/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  controlComponent,
  customColorTheme,
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
import {Button} from '../../../../button/react';
import Modal from '../../../../modal/react';
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

const SelectModal = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>() as React.RefObject<HTMLButtonElement>; // cast to keep buttonRef happy
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  return (
    <div>
      <Button buttonRef={buttonRef} onClick={openModal} variant={Button.Variant.Primary}>
        Show Modal
      </Button>

      <Modal heading="Modal with Select" open={open} handleClose={closeModal}>
        <p>The menu for this Select should break out of the Modal.</p>
        <FormField label="Label" inputId="select-modal">
          {controlComponent(<Select name="city" options={manyOptions} />)}
        </FormField>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Primary}>
          Submit
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </div>
  );
};

const SandboxContainer = ({children, style = {}, ...elemProps}) => {
  return (
    <div
      style={{
        border: `1px solid ${colors.soap600}`,
        marginTop: 50,
        overflow: 'hidden',
        padding: 20,
        ...style,
      }}
      {...elemProps}
    >
      {children}
    </div>
  );
};

storiesOf('Labs|Select/React', module)
  .addParameters({component: Select})
  .addDecorator(withReadme(README))
  .add('Sandbox', () => (
    <div>
      <h3>Sandbox</h3>
      <SandboxContainer>
        <p>
          All bordered containers have overflow set to hidden. Menus are rendered using portals and
          should break out of their containers.
        </p>
        <FormField label="Label" inputId="select-default-top-label">
          {controlComponent(<Select name="contact" options={options} />)}
        </FormField>
        <p>
          Menus for Select with grow set to true should resize automatically as the Select grows.
          Activate this menu and resize the window to see the menu grow to match the width of the
          Select.
        </p>
        <FormField label="Label (Grow)" inputId="select-default-top-label-grow" grow={true}>
          {controlComponent(<Select name="city" options={manyOptions} grow={true} />)}
        </FormField>
      </SandboxContainer>
      <SandboxContainer>
        <p>
          Menus should flip upwards automatically if there isn't enough space in the viewport for
          them to extend downwards.
        </p>
        <FormField
          label="Label"
          inputId="select-alert-top-label"
          error={FormField.ErrorType.Alert}
          hintText={hintText}
        >
          {controlComponent(<Select name="contact" options={options} />)}
        </FormField>
        <FormField
          label="Label (Grow)"
          inputId="select-alert-top-label-grow"
          error={FormField.ErrorType.Alert}
          grow={true}
          hintText={hintText}
        >
          {controlComponent(<Select grow={true} name="city" options={manyOptions} />)}
        </FormField>
      </SandboxContainer>
      <SandboxContainer>
        <p>Menus should behave the same with left-labeled FormFields.</p>
        <FormField
          label="Label"
          labelPosition={FormField.LabelPosition.Left}
          inputId="select-default-left-label"
        >
          {controlComponent(<Select name="contact" options={options} />)}
        </FormField>
        <FormField
          label="Label (Grow)"
          labelPosition={FormField.LabelPosition.Left}
          inputId="select-default-left-label-grow"
          grow={true}
        >
          {controlComponent(<Select name="city" options={manyOptions} grow={true} />)}
        </FormField>
      </SandboxContainer>
      <SandboxContainer>
        <p>Menus should break out of Modals.</p>
        <SelectModal />
      </SandboxContainer>
      <SandboxContainer>
        <p>This Select is forced to display its menu upwards since it's at the bottom the page.</p>
        <FormField
          label="Label"
          inputId="select-last"
          error={FormField.ErrorType.Error}
          hintText={hintText}
          hintId={hintId}
        >
          {controlComponent(<Select name="contact" options={options} />)}
        </FormField>
      </SandboxContainer>
    </div>
  ));

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

const SelectStates = () => (
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
          style={{width: 100}}
          onChange={() => {}} // eslint-disable-line no-empty-function
          options={options}
        />
      )}
    </ComponentStatesTable>
  </StaticStates>
);

const SelectMenuOnStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'Alert', props: {error: Select.ErrorType.Alert}},
        {label: 'Error', props: {error: Select.ErrorType.Error}},
      ]}
      columnProps={[
        {label: 'Default', props: {}},
        {label: 'Flipped', props: {isMenuFlipped: true}},
      ]}
    >
      {props => {
        const buttonRef = React.createRef<HTMLButtonElement>();
        return (
          <div
            style={{
              height: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <SelectBase
              {...props}
              buttonRef={buttonRef}
              onChange={() => {}} // eslint-disable-line no-empty-function
              options={normalizedOptions}
              focusedOptionIndex={1}
              isMenuAnimated={false}
              isMenuAutoFlipped={false}
              isMenuAutoFocused={false}
              isMenuHidden={false}
            />
          </div>
        );
      }}
    </ComponentStatesTable>
  </StaticStates>
);

const SelectOptionStates = () => (
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
        <SelectOption
          {...props}
          onChange={() => {}} // eslint-disable-line no-empty-function
        >
          E-mail
        </SelectOption>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

storiesOf('Labs|Select/React/Visual Testing', module)
  .addParameters({
    chromatic: {
      disable: false,
    },
    component: Select,
  })
  .addDecorator(withReadme(README))
  .add('States', () => <SelectStates />)
  .add('States (Menu On)', () => <SelectMenuOnStates />)
  .add('States (Option)', () => <SelectOptionStates />)
  .addParameters({
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  })
  .add('Theming', () => <SelectStates />)
  .add('Theming (Menu On)', () => <SelectMenuOnStates />)
  .add('Theming (Option)', () => <SelectOptionStates />);
