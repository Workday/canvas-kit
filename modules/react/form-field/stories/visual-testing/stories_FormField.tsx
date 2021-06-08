/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import FormField from '../../lib/FormField';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {TextInput} from '../../../text-input';
import {FormFieldLabelPosition} from '../../lib/types';

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
