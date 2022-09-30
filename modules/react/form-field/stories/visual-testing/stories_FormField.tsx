import * as React from 'react';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormFieldLabelPosition, FormField} from '@workday/canvas-kit-react/form-field';

export default withSnapshotsEnabled({
  title: 'Testing/React/Inputs/Form Field',
  component: FormField,
});

export const FormFieldStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Required', props: {required: true}},
        {label: 'Hidden Label', props: {labelPosition: FormFieldLabelPosition.Hidden}},
        {label: 'Grow', props: {grow: true}},
        {label: 'Left Label', props: {labelPosition: FormFieldLabelPosition.Left}},
      ]}
      columnProps={permutateProps({
        error: [
          {value: undefined, label: 'Default'},
          {value: FormField.ErrorType.Alert, label: 'Alert'},
          {value: FormField.ErrorType.Error, label: 'Error'},
        ],
      })}
    >
      {props => (
        <FormField {...props} hintText="Helpful text goes here." label="Label">
          <TextInput />
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
