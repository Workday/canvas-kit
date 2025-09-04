import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export default {
  title: 'Testing/Inputs/Color Picker/Color Input',
  component: ColorInput,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

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
            {value: 'caution', label: 'Caution'},
            {value: 'error', label: 'Error'},
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
      {props => (
        <FormField error={props.error}>
          <FormField.Input as={ColorInput} {...props} />
        </FormField>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const ColorInputThemedStates = () => <ColorInputStates />;
ColorInputThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
