/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import FormField from '../lib/FormField';
import {ComponentStatesTable, permutateProps} from '../../../../utils/storybook';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {TextInput} from '../../../text-input/react';
import {Label, Hint} from '../index';
import README from '../README.md';
import {FormFieldLabelPosition} from '../lib/types';

const FormFieldStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Error States', props: {required: false}},
        {label: 'Required', props: {required: true}},
        {label: 'Left Label', props: {labelPosition: FormFieldLabelPosition.Left}},
        {label: 'Hidden Label', props: {labelPosition: FormFieldLabelPosition.Hidden}},
        {label: 'Grow', props: {grow: true}},
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
          <TextInput></TextInput>
        </FormField>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

storiesOf('Components|Inputs/Form Field/React/Label', module)
  .addParameters({component: Label})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <Label>Label</Label>
    </div>
  ))
  .add('Required', () => (
    <div className="story">
      <Label required={true}>Label</Label>
    </div>
  ));
storiesOf('Components|Inputs/Form Field/React', module)
  .addParameters({component: Hint})
  .addDecorator(withReadme(README))
  .add('Hint', () => (
    <div className="story">
      <Hint>Hint</Hint>
      <Hint error={Hint.ErrorType.Error}>Hint</Hint>
      <Hint error={Hint.ErrorType.Alert}>Hint</Hint>
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
