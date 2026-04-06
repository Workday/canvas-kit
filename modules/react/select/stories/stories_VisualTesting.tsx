import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../utils/storybook';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {Select, useSelectModel} from '@workday/canvas-kit-react/select';

export default withSnapshotsEnabled({
  title: 'Testing/Inputs/Select',
  component: Select,
});

const options = [
  {id: 'E-mail', data: {textValue: 'foo'}},
  {id: 'Phone'},
  {id: 'Fax (disabled)', disabled: true},
  {id: 'Mail'},
  {id: 'Mobile Phone'},
  {
    id: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
    disabled: false,
  },
  {
    id: 'Thisisalongstringwithnobreaksandwillwrap',
    disabled: false,
  },
];

const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const SelectStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default', props: {}},
          {label: 'Caution', props: {error: 'caution'}},
          {label: 'Error', props: {error: 'error'}},
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
              {label: '', value: undefined},
              {label: 'Disabled', value: true},
            ],
          },
          props => {
            return !props.disabled || !props.className || props.className === 'hover';
          }
        )}
      >
        {props => (
          <FormField>
            <FormField.Label>Contact</FormField.Label>
            <Select items={options} nonInteractiveIds={disabledItems}>
              <FormField.Input as={Select.Input} {...props} id="contact-select" />
              <Select.Popper>
                <Select.Card maxHeight="200px">
                  <Select.List>
                    {item => {
                      return <Select.Item aria-disabled={item.disabled}>{item.id}</Select.Item>;
                    }}
                  </Select.List>
                </Select.Card>
              </Select.Popper>
            </Select>
          </FormField>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const SelectOpenMenuStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default', props: {}},
          {label: 'Caution', props: {error: 'caution'}},
          {label: 'Error', props: {error: 'error'}},
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => (
          <FormField cs={{marginBottom: '250px'}}>
            <FormField.Label>Contact</FormField.Label>
            <Select items={options} nonInteractiveIds={disabledItems} initialVisibility="visible">
              <FormField.Input as={Select.Input} {...props} id="contact-select" />
              <Select.Popper>
                <Select.Card maxHeight="200px">
                  <Select.List>
                    {item => {
                      return <Select.Item aria-disabled={item.disabled}>{item.id}</Select.Item>;
                    }}
                  </Select.List>
                </Select.Card>
              </Select.Popper>
            </Select>
          </FormField>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const SelectThemedStates = () => <SelectStates />;
SelectThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};

export const SelectOpenMenuThemedStates = () => <SelectOpenMenuStates />;
SelectOpenMenuThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
