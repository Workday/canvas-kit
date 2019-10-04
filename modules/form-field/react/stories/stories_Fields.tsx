/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {controlComponent, ControlledComponentWrapper} from '../../../../utils/storybook';

import {TextInput} from '../../../text-input/react/index';
import FormField from '../index';
import README from '../../../text-input/react/README.md';
import {RadioGroup, Radio, TextArea, Checkbox} from '@workday/canvas-kit-react';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Form Field', module)
  .addDecorator(withReadme(README))
  .add('Test', () => (
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
      <FormField
        label="Label"
        inputId="my-checkbox-field1"
        labelPosition={FormField.LabelPosition.Left}
      >
        {controlComponent(
          <Checkbox
            id="check1"
            label="He determined to drop his litigation with the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were."
          />
        )}
      </FormField>
      <FormField
        label="Label"
        inputId="my-checkbox-field2"
        labelPosition={FormField.LabelPosition.Left}
      >
        {controlComponent(<Checkbox id="check2" label="Checkbox option" />)}
      </FormField>
      <FormField label="Label" useFieldset={true}>
        <ControlledComponentWrapper>
          <RadioGroup name="contact1">
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
          <RadioGroup name="contact2">
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
      >
        <ControlledComponentWrapper>
          <RadioGroup name="contact3">
            <Radio id="1" value="email" label="E-mail" />
            <Radio id="2" value="phone" label="Phone" />
            <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
            <Radio id="4" value="mail" label="Mail" />
          </RadioGroup>
        </ControlledComponentWrapper>
      </FormField>
      <FormField label="Label" useFieldset={true} labelPosition={FormField.LabelPosition.Left}>
        <ControlledComponentWrapper>
          <RadioGroup name="contact4">
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
      <FormField label="Label" inputId="my-checkbox-field3">
        {controlComponent(<Checkbox id="check3" label="Checkbox option" />)}
      </FormField>
    </div>
  ));
