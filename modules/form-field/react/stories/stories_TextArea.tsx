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
    <FormField label="Label" inputId="textarea-plain">
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('With placeholder', () => (
    <FormField label="Label" inputId="textarea-placeholder">
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="textarea-disabled">
      {controlComponent(<TextArea disabled={true} />)}
    </FormField>
  ))
  .add('Disabled with placeholder', () => (
    <FormField label="Label" inputId="textarea-disabled-placeholder">
      {controlComponent(<TextArea placeholder="Placeholder" disabled={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      inputId="textarea-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="textarea-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField label="Label" inputId="textarea-grow" grow={true}>
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Grow with Error', () => (
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
  ));

storiesOf('Form Field/TextArea/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="textarea-plain">
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('With placeholder', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-placeholder"
    >
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-disabled"
    >
      {controlComponent(<TextArea disabled={true} />)}
    </FormField>
  ))
  .add('Disabled with placeholder', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-disabled-placeholder"
    >
      {controlComponent(<TextArea placeholder="Placeholder" disabled={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
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
  ))
  .add('Error', () => (
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
  ))
  .add('Grow', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-grow"
      grow={true}
    >
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Grow with Error', () => (
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
  ));
