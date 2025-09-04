import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export default {
  title: 'Testing/Inputs/Select',
  component: Select,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

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
];

const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const SelectStates = (props: {theme?: PartialEmotionCanvasTheme}) => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });
  return (
    <StaticStates theme={props.theme}>
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
              {label: '', value: false},
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
            <Select model={model}>
              <FormField.Input as={Select.Input} {...props} id="contact-select" />
              <Select.Popper>
                <Select.Card maxHeight="200px">
                  {model.state.items.length > 0 && (
                    <Select.List>
                      {item => {
                        return (
                          <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                            {item.id}
                          </Select.Item>
                        );
                      }}
                    </Select.List>
                  )}
                </Select.Card>
              </Select.Popper>
            </Select>
          </FormField>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const SelectOpenMenuStates = (props: {theme?: PartialEmotionCanvasTheme}) => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
    initialVisibility: 'visible',
  });
  return (
    <div style={{height: 400}}>
      <StaticStates theme={props.theme}>
        <ComponentStatesTable
          rowProps={[{label: '', props: {}}]}
          columnProps={[
            {label: 'Default', props: {}},
            {label: 'Caution', props: {error: 'caution'}},
            {label: 'Error', props: {error: 'error'}},
          ]}
        >
          {props => (
            <FormField>
              <FormField.Label>Contact</FormField.Label>
              <Select model={model}>
                <FormField.Input as={Select.Input} {...props} id="contact-select" />
                <Select.Popper>
                  <Select.Card maxHeight="200px">
                    {!!model.state.items.length && (
                      <Select.List>
                        {item => {
                          return (
                            <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                              {item.id}
                            </Select.Item>
                          );
                        }}
                      </Select.List>
                    )}
                  </Select.Card>
                </Select.Popper>
              </Select>
            </FormField>
          )}
        </ComponentStatesTable>
      </StaticStates>
    </div>
  );
};

const themedParameters = {
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};

export const SelectThemedStates = {
  render: () => <SelectStates theme={{canvas: customColorTheme}} />,
};

export const SelectOpenMenuThemedStates = {
  parameters: themedParameters,
  render: () => <SelectOpenMenuStates theme={{canvas: customColorTheme}} />,
};
