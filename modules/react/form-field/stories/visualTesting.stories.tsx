import * as React from 'react';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';

export default {
  title: 'Testing/Inputs/Form Field',
  component: FormField,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const FormFieldStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Required', props: {isRequired: true}},
        {label: 'Horizontal Start', props: {orientation: 'horizontalStart'}},
        {label: 'Grow', props: {grow: true}},
        {label: 'Horizontal End', props: {orientation: 'horizontalEnd'}},
      ]}
      columnProps={permutateProps({
        error: [
          {value: undefined, label: 'Default'},
          {value: 'caution', label: 'Caution'},
          {value: 'error', label: 'Error'},
        ],
      })}
    >
      {props => (
        <FormField {...props}>
          <FormField.Label>Label</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} />
            <FormField.Hint>Helpful text goes here.</FormField.Hint>
          </FormField.Field>
        </FormField>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const FormFieldThemedStates = () => <FormFieldStates />;
FormFieldThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
