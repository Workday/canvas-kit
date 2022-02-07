import React from 'react';

import {createComponent, ExtractProps, useDefaultModel} from '@workday/canvas-kit-react/common';
import {
  FormField,
  FormFieldModelContext,
  useFormFieldOrientation,
} from '@workday/canvas-kit-preview-react/form-field';
import {Stack} from '@workday/canvas-kit-react/layout';

import {TextAreaModel, useTextAreaModel} from './hooks';
import {TextAreaField} from './TextAreaField';
import {TextAreaLabel} from './TextAreaLabel';
import {TextAreaHint} from './TextAreaHint';

export const TextAreaModelContext = FormFieldModelContext;

export interface TextAreaProps extends ExtractProps<typeof FormField, never> {
  model?: TextAreaModel;
  /**
   * Children of the Text Input. Should contain a `<TextArea.Field>`, a `<TextArea.Label>` and an optional `<TextArea.Hint>`
   */
  children: React.ReactNode;
}

export const TextArea = createComponent()({
  displayName: 'TextArea',
  Component: ({children, model, orientation, ...props}: TextAreaProps, ref) => {
    const {hasError, id, isRequired, ...elemProps} = props;
    const value = useDefaultModel(model, {hasError, id, isRequired}, useTextAreaModel);

    const layoutProps = useFormFieldOrientation(orientation);

    return (
      <TextAreaModelContext.Provider value={value}>
        <Stack ref={ref} {...layoutProps} {...elemProps}>
          {children}
        </Stack>
      </TextAreaModelContext.Provider>
    );
  },
  subComponents: {
    Field: TextAreaField,
    Label: TextAreaLabel,
    Hint: TextAreaHint,
  },
});
