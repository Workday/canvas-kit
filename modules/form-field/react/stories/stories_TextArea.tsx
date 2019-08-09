/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {controlComponent} from '../../../../utils/storybook';

import {TextArea} from '../../../text-area/react/index';
import FormField from '../index';
import README from '../../../text-area/react/README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Form Field/TextArea/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <FormField label="Label" inputId="textarea-plain">
        {controlComponent(<TextArea />)}
      </FormField>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="story">
      <FormField label="Label" inputId="textarea-placeholder">
        {controlComponent(<TextArea placeholder="Placeholder" />)}
      </FormField>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <FormField label="Label" inputId="textarea-disabled">
        {controlComponent(<TextArea disabled={true} />)}
      </FormField>
    </div>
  ))
  .add('Disabled with placeholder', () => (
    <div className="story">
      <FormField label="Label" inputId="textarea-disabled-placeholder">
        {controlComponent(<TextArea placeholder="Placeholder" disabled={true} />)}
      </FormField>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <FormField
        label="Label"
        inputId="textarea-alert"
        error={FormField.ErrorType.Alert}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextArea />)}
      </FormField>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <FormField
        label="Label"
        inputId="textarea-error"
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextArea />)}
      </FormField>
    </div>
  ))
  .add('Grow', () => (
    <div className="story">
      <FormField label="Label" inputId="textarea-grow" grow={true}>
        {controlComponent(<TextArea placeholder="Placeholder" />)}
      </FormField>
    </div>
  ))
  .add('Grow with Error', () => (
    <div className="story">
      <FormField
        label="Label"
        inputId="textarea-grow-error"
        grow={true}
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextArea placeholder="Placeholder" />)}
      </FormField>
    </div>
  ));

storiesOf('Form Field/TextArea/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="textarea-plain"
      >
        {controlComponent(<TextArea />)}
      </FormField>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="textarea-placeholder"
      >
        {controlComponent(<TextArea placeholder="Placeholder" />)}
      </FormField>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="textarea-disabled"
      >
        {controlComponent(<TextArea disabled={true} />)}
      </FormField>
    </div>
  ))
  .add('Disabled with placeholder', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="textarea-disabled-placeholder"
      >
        {controlComponent(<TextArea placeholder="Placeholder" disabled={true} />)}
      </FormField>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="textarea-alert"
        error={FormField.ErrorType.Alert}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextArea />)}
      </FormField>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="textarea-error"
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextArea />)}
      </FormField>
    </div>
  ))
  .add('Grow', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="textarea-grow"
        grow={true}
      >
        {controlComponent(<TextArea placeholder="Placeholder" />)}
      </FormField>
    </div>
  ))
  .add('Grow with Error', () => (
    <div className="story">
      <FormField
        labelPosition={FormField.LabelPosition.Left}
        label="Label"
        inputId="textarea-grow-error"
        grow={true}
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
      >
        {controlComponent(<TextArea placeholder="Placeholder" />)}
      </FormField>
    </div>
  ));
