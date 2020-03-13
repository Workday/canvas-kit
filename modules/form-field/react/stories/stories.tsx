/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import FormField from '../lib/FormField';
import {ComponentStatesTable, permutateProps} from '../../../../utils/storybook';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {TextInput} from '../../../text-input/react';
import README from '../README.md';
import {FormFieldLabelPosition} from '../lib/types';

const FormFieldStates = () => (
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

storiesOf('Components|Inputs/Form Field/React', module)
  .addParameters({component: FormField})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <FormField label="Label">
        <TextInput />
      </FormField>
    </div>
  ))
  .add('Hint', () => (
    <div className="story">
      <FormField label="Label" hintText={'Helpful text goes here'}>
        <TextInput />
      </FormField>
    </div>
  ))
  .add('Hint Alert', () => (
    <div className="story">
      <FormField
        error={FormField.ErrorType.Alert}
        label="Label"
        hintId={'hintId'}
        hintText={'Helpful text goes here'}
      >
        <TextInput />
      </FormField>
    </div>
  ))
  .add('Hint Error', () => (
    <div className="story">
      <FormField
        error={FormField.ErrorType.Error}
        label="Label"
        hintId={'hintId'}
        hintText={'Helpful text goes here'}
      >
        <TextInput />
      </FormField>
    </div>
  ))
  .add('Label Required', () => (
    <div className="story">
      <FormField required={true} label="Label">
        <TextInput />
      </FormField>
    </div>
  ));

storiesOf('Components|Inputs/Form Field/React/Visual Testing', module)
  .addParameters({
    component: FormField,
    chromatic: {
      disable: false,
    },
  })
  .addDecorator(withReadme(README))
  .add('States', () => <FormFieldStates />);
