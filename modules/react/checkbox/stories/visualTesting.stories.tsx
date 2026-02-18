import * as React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {customColorTheme} from '../../../../utils/storybook';

export default {
  title: 'Testing/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

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
            {value: Checkbox.ErrorType.Caution, label: 'Caution'},
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

export const InverseCheckboxStates = () => (
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
            {value: Checkbox.ErrorType.Caution, label: 'Caution'},
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
        <div
          style={{
            backgroundColor: cssVar(system.color.surface.contrast.default),
            padding: '12px',
            borderRadius: '4px',
          }}
        >
          <Checkbox
            {...props}
            onChange={() => {}} // eslint-disable-line no-empty-function
            variant="inverse"
            label="Checkbox"
          />
        </div>
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

export const InverseCheckboxThemedStates = () => <InverseCheckboxStates />;
InverseCheckboxThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
