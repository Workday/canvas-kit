/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {controlComponent, ControlledComponentWrapper} from '../../../../utils/storybook';

import {TextInput} from '../../../text-input/react/index';
import FormField from '../index';
import README from '../../../text-input/react/README.md';
import {RadioGroup, Radio, TextArea, Checkbox, Switch} from '@workday/canvas-kit-react';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Form Field/Test', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div>
      <FormField label="Label" inputId="input-plain">
        {controlComponent(<TextInput />)}
      </FormField>
      <FormField
        label="Label"
        inputId="input-placeholder"
        labelPosition={FormField.LabelPosition.Left}
      >
        {controlComponent(<TextInput placeholder="Placeholder" />)}
      </FormField>
      <FormField label="Label" inputId="input-disabled">
        {controlComponent(<TextInput disabled={true} />)}
      </FormField>
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
      <FormField
        label="Label"
        useFieldset={true}
        hintText={hintText}
        hintId={hintId}
        error={FormField.ErrorType.Alert}
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
      <FormField
        label="Label"
        inputId="textarea-placeholder"
        labelPosition={FormField.LabelPosition.Left}
      >
        {controlComponent(<TextArea placeholder="Placeholder" />)}
      </FormField>
      <FormField label="Label" inputId="textarea-placeholder">
        {controlComponent(<TextArea placeholder="Placeholder" />)}
      </FormField>
      <FormField
        label="Label"
        inputId="my-checkbox-field"
        labelPosition={FormField.LabelPosition.Left}
      >
        <Checkbox id="5" label="Checkbox option" />
      </FormField>
      <FormField
        label="Label"
        inputId="my-switch-error"
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
        labelPosition={FormField.LabelPosition.Left}
      >
        <Checkbox id="6" label="Checkbox option" />
      </FormField>
      <FormField label="Label" inputId="my-checkbox-field">
        <Checkbox id="7" label="Checkbox option" />
      </FormField>
      <FormField label="Label" inputId="my-checkbox-field">
        {controlComponent(<Switch />)}
      </FormField>
      <FormField label="Label" inputId="my-checkbox-field">
        <Checkbox id="7" label="Checkbox option" />
      </FormField>
      <FormField label="Label" inputId="my-checkbox-field">
        <Checkbox id="7" label="Checkbox option" />
      </FormField>

      <FormField
        label="Label"
        inputId="my-switch-error"
        error={FormField.ErrorType.Error}
        hintText={hintText}
        hintId={hintId}
        labelPosition={FormField.LabelPosition.Left}
      >
        {controlComponent(<Switch />)}
      </FormField>
      <FormField
        label="Label"
        inputId="my-checkbox-field"
        labelPosition={FormField.LabelPosition.Left}
      >
        {controlComponent(<Switch />)}
      </FormField>
      <FormField label="Label" inputId="my-checkbox-field">
        <Checkbox id="7" label="Checkbox option" />
      </FormField>
      <FormField label="Label" inputId="my-checkbox-field">
        <Checkbox id="7" label="Checkbox option" />
      </FormField>
    </div>
  ));
