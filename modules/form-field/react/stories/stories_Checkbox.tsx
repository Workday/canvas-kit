/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, ControlledComponentWrapper} from '../../../../utils/storybook';

import {Checkbox} from '../../../checkbox/react/index';
import FormField from '../index';
import README from '../README.md';

const control = (child: React.ReactNode) => (
  <ControlledComponentWrapper controlledProp={ControlledComponentWrapper.ControlledProp.Checked}>
    {child}
  </ControlledComponentWrapper>
);

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Form Field/Checkbox/Top Label', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" inputId="my-checkbox-field">
          {control(<Checkbox id="1" label="Checkbox option" />)}
        </FormField>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" inputId="my-checkbox-field">
          {control(<Checkbox id="1" label="Checkbox option" disabled={true} />)}
        </FormField>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          inputId="my-checkbox-alert"
          error={FormField.ErrorType.Alert}
          hintText={hintText}
          hintId={hintId}
        >
          {control(<Checkbox id="1" label="Checkbox option" />)}
        </FormField>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          inputId="my-checkbox-error"
          error={FormField.ErrorType.Error}
          hintText={hintText}
          hintId={hintId}
        >
          {control(<Checkbox id="1" label="Checkbox option" />)}
        </FormField>
      </div>
    </div>
  ));

storiesOf('Form Field/Checkbox/Left Label', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          inputId="my-checkbox-field"
          labelPosition={FormField.LabelPosition.Left}
        >
          {control(<Checkbox id="1" label="Checkbox option" />)}
        </FormField>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          inputId="my-checkbox-field"
          labelPosition={FormField.LabelPosition.Left}
        >
          {control(<Checkbox id="1" label="Checkbox option" disabled={true} />)}
        </FormField>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          inputId="my-checkbox-alert"
          error={FormField.ErrorType.Alert}
          hintText={hintText}
          hintId={hintId}
          labelPosition={FormField.LabelPosition.Left}
        >
          {control(<Checkbox id="1" label="Checkbox option" />)}
        </FormField>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          inputId="my-checkbox-error"
          error={FormField.ErrorType.Error}
          hintText={hintText}
          hintId={hintId}
          labelPosition={FormField.LabelPosition.Left}
        >
          {control(<Checkbox id="1" label="Checkbox option" />)}
        </FormField>
      </div>
    </div>
  ));
