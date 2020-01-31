/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {controlComponent, customThemePalette} from '../../../../utils/storybook';

import {TextInput} from '../../../text-input/react/index';
import FormField from '../index';
import README from '../../../text-input/react/README.md';
import styled from '@emotion/styled';
import {createCanvasTheme, CanvasProvider} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '@workday/canvas-kit-react-common';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

const InputContainer = styled('div')({
  padding: 8,
});

storiesOf('Components|Inputs/Text Input/React/Top Label', module)
  .addParameters({component: TextInput})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="input-plain">
      {controlComponent(<TextInput />)}
    </FormField>
  ))
  .add('With placeholder', () => (
    <FormField label="Label" inputId="input-placeholder">
      {controlComponent(<TextInput placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="input-disabled">
      {controlComponent(<TextInput disabled={true} />)}
    </FormField>
  ))
  .add('Disabled with placeholder', () => (
    <FormField label="Label" inputId="input-disabled-placeholder">
      {controlComponent(<TextInput placeholder="Placeholder" disabled={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      inputId="input-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextInput />)}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="input-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextInput />)}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField label="Label" inputId="input-grow" grow={true}>
      {controlComponent(<TextInput placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Grow with Error', () => (
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
  ));

storiesOf('Components|Inputs/Text Input/React/Left Label', module)
  .addParameters({component: TextInput})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-plain">
      {controlComponent(<TextInput />)}
    </FormField>
  ))
  .add('With placeholder', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="input-placeholder"
    >
      {controlComponent(<TextInput placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-disabled">
      {controlComponent(<TextInput disabled={true} />)}
    </FormField>
  ))
  .add('Disabled with placeholder', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="input-disabled-placeholder"
    >
      {controlComponent(<TextInput placeholder="Placeholder" disabled={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
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
  ))
  .add('Error', () => (
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
  ))
  .add('Grow', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="input-grow"
      grow={true}
    >
      {controlComponent(<TextInput placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Grow with Error', () => (
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
  ));

storiesOf('Components|Inputs/Text Input/React/Visual', module)
  .addParameters({
    canvasProviderDecorator: {
      showCustomThemePalette: true,
    },
  })
  .addDecorator(withReadme(README))
  .add('Theming', () => (
    <div>
      <InputContainer>
        <TextInput error={ErrorType.Alert} placeholder="Custom Alert" />
      </InputContainer>
      <InputContainer>
        <TextInput placeholder="Default" />
      </InputContainer>
      <InputContainer>
        <TextInput error={ErrorType.Error} placeholder="Custom Error" />
      </InputContainer>
      <InputContainer>
        <TextInput disabled={true} placeholder="Disabled" />
      </InputContainer>
      <InputContainer>
        <FormField
          label="Label"
          inputId="input-alert"
          error={FormField.ErrorType.Alert}
          hintText={hintText}
          hintId={hintId}
        >
          {controlComponent(<TextInput placeholder="With Form" />)}
        </FormField>
      </InputContainer>
    </div>
  ));
