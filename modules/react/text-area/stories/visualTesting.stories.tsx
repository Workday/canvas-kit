import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';

import {TextArea} from '@workday/canvas-kit-react/text-area';

export default {
  title: 'Testing/Inputs/Text Area',
  component: TextArea,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const TextAreaStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          value: [
            {value: 'Input value', label: 'With Value'},
            {value: '', label: 'No Value'},
          ],
          placeholder: [{value: 'Placeholder', label: 'Placeholder'}],
          error: [
            {value: undefined, label: ''},
            {value: TextArea.ErrorType.Caution, label: 'Caution'},
            {value: TextArea.ErrorType.Error, label: 'Error'},
          ],
        },
        props => {
          if (props.value === '' && !props.placeholder) {
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
        <TextArea
          {...props}
          style={{minWidth: 60, width: 100}}
          onChange={() => {}} // eslint-disable-line no-empty-function
        />
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TextAreaThemedStates = () => <TextAreaStates />;
TextAreaThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
