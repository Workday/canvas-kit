import * as React from 'react';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';

import {Switch} from '@workday/canvas-kit-react/switch';

export default {
  title: 'Testing/Inputs/Switch',
  component: Switch,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const SwitchStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          checked: [
            {value: true, label: 'Checked'},
            {value: false, label: 'Unchecked'},
          ],
          error: [
            {value: undefined, label: ''},
            {value: Switch.ErrorType.Caution, label: 'Caution'},
            {value: Switch.ErrorType.Error, label: 'Error'},
          ],
        },
        props => {
          if (props.indeterminate && !props.checked) {
            return false;
          }
          return true;
        }
      )}
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
        <Switch
          {...props}
          onChange={() => {}} // eslint-disable-line no-empty-function
        />
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SwitchThemedStates = () => <SwitchStates />;
SwitchThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
