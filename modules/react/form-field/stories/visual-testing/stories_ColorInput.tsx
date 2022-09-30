import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export default withSnapshotsEnabled({
  title: 'Testing/React/Inputs/Color Picker/Color Input',
  component: ColorInput,
});

export const ColorInputStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          value: [
            {value: '#005cb9', label: 'Hex Value'},
            {value: '', label: 'No Value'},
          ],
          placeholder: [
            {value: undefined, label: ''},
            {value: '000', label: 'Placeholder'},
          ],
          showCheck: [
            {value: undefined, label: ''},
            {value: true, label: 'Checked'},
          ],
          error: [
            {value: undefined, label: ''},
            {value: FormField.ErrorType.Alert, label: 'Alert'},
            {value: FormField.ErrorType.Error, label: 'Error'},
          ],
        },
        props => {
          if (props.value !== '' && props.placeholder) {
            return false;
          } else if (props.value === '' && props.showCheck) {
            return false;
          } else {
            return true;
          }
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
      {props => <ColorInput {...props} />}
    </ComponentStatesTable>
  </StaticStates>
);

export const ColorInputThemedStates = () => <ColorInputStates />;
ColorInputThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
