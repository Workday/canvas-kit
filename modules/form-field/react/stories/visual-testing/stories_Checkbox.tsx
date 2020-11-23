/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';

import {Checkbox} from '../../../../checkbox/react';

export default withSnapshotsEnabled({
  title: 'Testing/React/Inputs/Checkbox',
  component: Checkbox,
});

export const CheckboxStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          checked: [
            {value: true, label: 'Checked'},
            {value: false, label: 'Unchecked'},
          ],
          indeterminate: [
            {value: true, label: 'Indeterminate'},
            {value: false, label: ''},
          ],
          error: [
            {value: undefined, label: ''},
            {value: Checkbox.ErrorType.Alert, label: 'Alert'},
            {value: Checkbox.ErrorType.Error, label: 'Error'},
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
        <Checkbox
          {...props}
          onChange={() => {}} // eslint-disable-line no-empty-function
          label="Checkbox"
        />
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const CheckboxThemedStates = () => <CheckboxStates />;
CheckboxThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
