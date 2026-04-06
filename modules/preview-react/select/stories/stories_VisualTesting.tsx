import * as React from 'react';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../utils/storybook';

import {Select} from '../lib/Select';
import {SelectBase} from '../lib/SelectBase';
import {SelectOption} from '../lib/SelectOption';

import {options} from './examples/storiesData';

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
  title: 'Testing/Preview/Select',
  component: Select,
});

export const SelectStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'Caution', props: {error: Select.ErrorType.Caution}},
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
        {label: 'Caution', props: {error: Select.ErrorType.Caution}},
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
              forwardedButtonRef={buttonRef}
              localButtonRef={buttonRef}
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
