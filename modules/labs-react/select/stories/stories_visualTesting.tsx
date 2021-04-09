/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  controlComponent,
  customColorTheme,
} from '../../../../utils/storybook';
import {Select} from '@workday/canvas-kit-labs-react/select';
import SelectBase from '../lib/SelectBase';
import SelectOption from '../lib/SelectOption';

import {colors} from '@workday/canvas-kit-react/tokens';
import {Button} from '@workday/canvas-kit-react/button';
import FormField from '@workday/canvas-kit-react/form-field';
import {Modal, useModal} from '@workday/canvas-kit-react/modal';

import {manyOptions, options} from './stories';

const normalizedOptions = options.map(option => {
  return {
    data: {},
    disabled: option.disabled || false,
    id: option.value,
    label: option.label || option.value,
    value: option.value,
  };
});

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Select',
  component: Select,
});

export const SelectStates = () => (
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
          disabled: [
            {label: '', value: false},
            {label: 'Disabled', value: true},
          ],
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
);

export const SelectStatesMenuOn = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'Alert', props: {error: Select.ErrorType.Alert}},
        {label: 'Error', props: {error: Select.ErrorType.Error}},
      ]}
      columnProps={[
        {label: 'Default', props: {}},
        {label: 'Top', props: {menuPlacement: 'top'}},
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
              menuVisibility="opened"
              shouldMenuAutoFlip={false}
              shouldMenuAutoFocus={false}
            />
          </div>
        );
      }}
    </ComponentStatesTable>
  </StaticStates>
);

export const SelectStatesOption = () => (
  <div>
    {[
      {
        label: 'Disabled States',
        columnProps: [
          {label: 'Default', props: {}},
          {label: 'Hover', props: {className: 'hover'}},
        ],
        rowProps: [{label: 'Disabled', props: {'aria-disabled': true}}],
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
      <div key={statesTable.label}>
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
);

const disabledOptions = [
  {label: 'Carrier Pigeon', value: 'pigeon', disabled: true},
  {label: 'E-mail', value: 'email'},
  {label: 'Phone', value: 'phone'},
  {label: 'Fax', value: 'fax', disabled: true},
  {label: 'Mail', value: 'mail'},
  {label: 'Mobile Phone', value: 'mobile_phone'},
  {label: 'Telegram', value: 'telegram', disabled: true},
];

const Container = ({children, style = {}, ...elemProps}) => {
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

const SelectModal = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <div>
      <Button variant="primary" {...targetProps}>
        Show Modal
      </Button>
      <Modal heading="Modal with Select" {...modalProps}>
        <p>The menu for this Select should break out of the Modal.</p>
        <FormField label="Label" inputId="select-modal">
          {controlComponent(<Select name="city" options={manyOptions} />)}
        </FormField>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant="primary">
          Submit
        </Button>
        <Button onClick={closeModal} variant="secondary">
          Cancel
        </Button>
      </Modal>
    </div>
  );
};

export const AccessibilityTest = () => (
  <div>
    <Container>
      <p>
        This Select has its <strong>aria-required</strong> prop set to true. When its listbox menu
        is opened, we expect aria-required to be set to "true" for the listbox.
      </p>
      <FormField label="Label (aria-required)" inputId="select-aria-required" required={true}>
        {controlComponent(
          <Select name="select-aria-required" options={options} aria-required={true} />
        )}
      </FormField>
      <p>
        This Select has its <strong>required</strong> prop set to true. Again, when its listbox menu
        is opened, we expect aria-required to be set to "true" for the listbox.
      </p>
      <FormField label="Label (required)" inputId="select-required" required={true}>
        {controlComponent(<Select name="select-required" options={options} required={true} />)}
      </FormField>
    </Container>
  </div>
);

export const DisabledOptionsTest = () => (
  <div>
    <Container>
      <p>Disabled options may not be assistively focused using the keyboard.</p>
      <FormField label="Label (Disabled Options)" inputId="select-disabled-options">
        {controlComponent(<Select name="select-disabled-options" options={disabledOptions} />)}
      </FormField>
    </Container>
  </div>
);

export const PortalTest = () => (
  <div>
    <Container>
      <p>
        All gray-bordered containers on this page have their overflow set to hidden. Menus are
        rendered using portals and should break out of their containers.
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
    </Container>
    <Container>
      <p>
        Menus should flip upwards automatically if there isn't enough space in the viewport for them
        to extend downwards. As you scroll down and space becomes available, the Menu will flip back
        downwards.
      </p>
      <FormField label="Label" inputId="select-alert-top-label" error={FormField.ErrorType.Alert}>
        {controlComponent(<Select name="contact" options={options} />)}
      </FormField>
      <FormField
        label="Label (Grow)"
        inputId="select-alert-top-label-grow"
        error={FormField.ErrorType.Alert}
        grow={true}
      >
        {controlComponent(<Select grow={true} name="city" options={manyOptions} />)}
      </FormField>
    </Container>
    <Container>
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
    </Container>
    <Container>
      <p>Menus should break out of Modals.</p>
      <SelectModal />
    </Container>
    <Container>
      <p>This Select is forced to display its menu upwards since it's at the bottom the page.</p>
      <FormField label="Label (Bottom)" inputId="select-bottom" error={FormField.ErrorType.Error}>
        {controlComponent(<Select name="contact" options={options} />)}
      </FormField>
    </Container>
  </div>
);

const themedParameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};

export const SelectThemedStates = () => <SelectStates />;
export const SelectThemedStatesMenuOn = () => <SelectStatesMenuOn />;
export const SelectThemedStatesOption = () => <SelectStatesOption />;

SelectThemedStates.parameters = themedParameters;
SelectThemedStatesMenuOn.parameters = themedParameters;
SelectThemedStatesOption.parameters = themedParameters;
