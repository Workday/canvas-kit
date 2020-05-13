/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  customColorTheme,
} from '../../../../../utils/storybook';
import Select from '../lib/Select';
import SelectBase from '../lib/SelectBase';
import SelectOption from '../lib/SelectOption';
import README from '../README.md';

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
            style={{width: 100}}
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
  ))
  .addParameters({
    component: Select,
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  })
  .add('Theming', () => (
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
  ));
