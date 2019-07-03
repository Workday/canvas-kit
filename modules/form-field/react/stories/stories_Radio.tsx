/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, ControlledComponentWrapper} from '../../../../utils/storybook';

import {Radio, RadioGroup} from '../../../radio/react/index';
import FormField from '../index';
import README from '../../../radio/react/README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Form Field/Radio/Top Label/Radio Group', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" useFieldset={true}>
          <ControlledComponentWrapper>
            <RadioGroup name="contact">
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
              <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
              <Radio id="4" value="mail" label="Mail" />
            </RadioGroup>
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          useFieldset={true}
          error={FormField.ErrorType.Alert}
          hintText={hintText}
          hintId={hintId}
        >
          <ControlledComponentWrapper>
            <RadioGroup name="contact">
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
              <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
              <Radio id="4" value="mail" label="Mail" />
            </RadioGroup>
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ))
  .add('Error with Grow', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          useFieldset={true}
          error={FormField.ErrorType.Error}
          grow={true}
          hintText={hintText}
          hintId={hintId}
        >
          <ControlledComponentWrapper>
            <RadioGroup name="contact">
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
              <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
              <Radio id="4" value="mail" label="Mail" />
            </RadioGroup>
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ));

storiesOf('Form Field/Radio/Top Label/Radio', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label">
          <ControlledComponentWrapper
            controlledProp={ControlledComponentWrapper.ControlledProp.Checked}
          >
            <Radio id="1" value="email" label="E-mail" />
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ));

storiesOf('Form Field/Radio/Left Label/Radio Group', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" useFieldset={true} labelPosition={FormField.LabelPosition.Left}>
          <ControlledComponentWrapper>
            <RadioGroup name="contact">
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
              <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
              <Radio id="4" value="mail" label="Mail" />
            </RadioGroup>
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          useFieldset={true}
          error={FormField.ErrorType.Alert}
          hintText={hintText}
          hintId={hintId}
          labelPosition={FormField.LabelPosition.Left}
        >
          <ControlledComponentWrapper>
            <RadioGroup name="contact">
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
              <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
              <Radio id="4" value="mail" label="Mail" />
            </RadioGroup>
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ))
  .add('Error with Grow', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="Label"
          useFieldset={true}
          error={FormField.ErrorType.Error}
          grow={true}
          hintText={hintText}
          hintId={hintId}
          labelPosition={FormField.LabelPosition.Left}
        >
          <ControlledComponentWrapper>
            <RadioGroup name="contact">
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
              <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
              <Radio id="4" value="mail" label="Mail" />
            </RadioGroup>
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ));

storiesOf('Form Field/Radio/Left Label/Radio', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" labelPosition={FormField.LabelPosition.Left}>
          <ControlledComponentWrapper
            controlledProp={ControlledComponentWrapper.ControlledProp.Checked}
          >
            <Radio id="1" value="email" label="E-mail" />
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ));
