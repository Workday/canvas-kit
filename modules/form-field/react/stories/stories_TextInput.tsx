/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {controlComponent} from '../../../../utils/storybook';

import {TextInput} from '../../../text-input/react/index';
import FormField from '../index';
import README from '../../../text-input/react/README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Form Field/Text Input/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <FormField label="Label" inputId="input-plain">
        {controlComponent(<TextInput />)}
      </FormField>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="story">
      <FormField label="Label" inputId="input-placeholder">
        {controlComponent(<TextInput placeholder="Placeholder" />)}
      </FormField>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <FormField label="Label" inputId="input-disabled">
        {controlComponent(<TextInput disabled={true} />)}
      </FormField>
    </div>
  ))
  .add('Disabled with placeholder', () => (
    <div className="story">
      <FormField label="Label" inputId="input-disabled-placeholder">
        {controlComponent(<TextInput placeholder="Placeholder" disabled={true} />)}
      </FormField>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <FormField
        label="Label"
        inputId="input-alert"
        error={FormField.ErrorType.Alert}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextInput />)}
      </FormField>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <FormField
        label="Label"
        inputId="input-error"
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextInput />)}
      </FormField>
    </div>
  ))
  .add('Grow', () => (
    <div className="story">
      <FormField label="Label" inputId="input-grow" grow={true}>
        {controlComponent(<TextInput placeholder="Placeholder" />)}
      </FormField>
    </div>
  ))
  .add('Grow with Error', () => (
    <div className="story">
      <FormField
        label="Label"
        inputId="input-grow-error"
        grow={true}
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextInput placeholder="Placeholder" />)}
      </FormField>
    </div>
  ));

storiesOf('Form Field/Text Input/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-plain">
        {controlComponent(<TextInput />)}
      </FormField>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="input-placeholder"
      >
        {controlComponent(<TextInput placeholder="Placeholder" />)}
      </FormField>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="input-disabled"
      >
        {controlComponent(<TextInput disabled={true} />)}
      </FormField>
    </div>
  ))
  .add('Disabled with placeholder', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="input-disabled-placeholder"
      >
        {controlComponent(<TextInput placeholder="Placeholder" disabled={true} />)}
      </FormField>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="input-alert"
        error={FormField.ErrorType.Alert}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextInput />)}
      </FormField>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="input-error"
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextInput />)}
      </FormField>
    </div>
  ))
  .add('Grow', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="input-grow"
        grow={true}
      >
        {controlComponent(<TextInput placeholder="Placeholder" />)}
      </FormField>
    </div>
  ))
  .add('Grow with Error', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="input-grow-error"
        grow={true}
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextInput placeholder="Placeholder" />)}
      </FormField>
    </div>
  ));
