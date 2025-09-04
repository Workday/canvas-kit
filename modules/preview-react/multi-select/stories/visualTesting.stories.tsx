import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

export default {
  title: 'Testing/Inputs/MultiSelect',
  component: MultiSelect,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const MultiSelectStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          value: [
            {value: '', label: 'No Value'},
            {value: 'With Value', label: 'With Value'},
          ],
          searchInput: [
            {value: false, label: 'No Search'},
            {value: true, label: 'Search'},
          ],
          placeholder: [{value: 'Placeholder', label: 'Placeholder'}],
          error: [
            {value: undefined, label: ''},
            {value: 'caution', label: 'Caution'},
            {value: 'error', label: 'Error'},
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
      {({searchInput, ...props}) => {
        const InputComponent = searchInput ? MultiSelect.SearchInput : MultiSelect.Input;
        return (
          <MultiSelect items={['With Value']} initialSelectedIds={props.value ? [props.value] : []}>
            <InputComponent
              {...props}
              style={{minWidth: 60, width: 140}}
              onChange={() => {}} // eslint-disable-line no-empty-function
            />
          </MultiSelect>
        );
      }}
    </ComponentStatesTable>
  </StaticStates>
);

export const MultiSelectThemedStates = () => <MultiSelectStates />;
MultiSelectThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
