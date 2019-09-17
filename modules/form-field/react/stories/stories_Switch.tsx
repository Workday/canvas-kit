/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {ControlledComponentWrapper} from '../../../../utils/storybook';

import {Switch} from '../../../switch/react/index';
import FormField from '../index';
import README from '../../../switch/react/README.md';

const control = (child: React.ReactNode) => (
  <ControlledComponentWrapper controlledProp={ControlledComponentWrapper.ControlledProp.Checked}>
    {child}
  </ControlledComponentWrapper>
);

storiesOf('Form Field/Switch/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" inputId="my-switch-field">
          {control(<Switch />)}
        </FormField>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" inputId="my-switch-field">
          {control(<Switch disabled={true} />)}
        </FormField>
      </div>
    </div>
  ));

storiesOf('Form Field/Switch/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          inputId="my-switch-field"
          labelPosition={FormField.LabelPosition.Left}
        >
          {control(<Switch />)}
        </FormField>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          inputId="my-switch-field"
          labelPosition={FormField.LabelPosition.Left}
        >
          {control(<Switch disabled={true} />)}
        </FormField>
      </div>
    </div>
  ));
