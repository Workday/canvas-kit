/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import FormField from '../lib/FormField';
import {TextInput} from '../../text-input';
import README from '../README.md';

storiesOf('Components/Inputs/Form Field/React', module)
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
