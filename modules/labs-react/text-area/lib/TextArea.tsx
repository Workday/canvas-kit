import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';
import { FormFieldModelContext} from '@workday/canvas-kit-labs-react/form-field';

import { TextAreaModelConfig, TextAreaModel, useTextAreaModel } from './hooks';
import {TextAreaField} from './TextAreaField';
import {TextAreaLabel} from './TextAreaLabel';
import {TextAreaHint} from './TextAreaHint';

export const TextAreaModelContext = FormFieldModelContext;

export interface TextAreaProps extends TextAreaModelConfig {
  model?: TextAreaModel;
  /**
   * Children of the Text Input. Should contain a `<TextArea.Field>`, a `<TextArea.Label>` and an optional `<TextArea.Hint>`
   */
  children: React.ReactNode;
}

export const TextArea = createComponent()({
  displayName: 'TextArea',
  Component: ({children, model, ...config}: TextAreaProps) => {
    const value = useDefaultModel(model, config, useTextAreaModel);

    return <TextAreaModelContext.Provider value={value}>{children}</TextAreaModelContext.Provider>;
  },
  subComponents: {
    Field: TextAreaField,
    Label: TextAreaLabel,
    Hint: TextAreaHint,
  },
});
