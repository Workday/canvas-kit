import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {useTextInputModel, TextInputModel, TextInputModelConfig} from './useTextInputModel';
import {TextInputField} from './TextInput.Field';
import {TextInputLabel} from './TextInput.Label';
import {TextInputHint} from './TextInput.Hint';

export const TextInputModelContext = React.createContext<TextInputModel>({} as any);

export interface TextInputProps extends TextInputModelConfig {
  model?: TextInputModel;
  /**
   * Children of the Text Input. Should contain a `<TextInput.Field>`, a `<TextInput.Label>` and an optional `<TextInput.Hint>`
   */
  children: React.ReactNode;
}

export const TextInput = createComponent()({
  displayName: 'TextInput',
  Component: ({children, model, ...config}: TextInputProps) => {
    const value = useDefaultModel(model, config, useTextInputModel);

    return (
      <TextInputModelContext.Provider value={value}>{children}</TextInputModelContext.Provider>
    );
  },
  subComponents: {
    Field: TextInputField,
    Label: TextInputLabel,
    Hint: TextInputHint,
  },
});
