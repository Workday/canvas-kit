import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField, formFieldStencil} from '@workday/canvas-kit-react/form-field';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

import {TextAreaField} from './TextAreaField';
import {useTextInputModel} from '@workday/canvas-kit-preview-react/text-input';
/**
 * @deprecated ⚠️ `TextAreaProps` in Preview has been deprecated and will be removed in a future major version. Please use [`TextArea` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-textarea--docs) instead.
 */
export interface TextAreaProps extends ExtractProps<typeof FormField, never> {
  /**
   * Children of the Text Input. Should contain a `<TextArea.Field>`, a `<TextArea.Label>` and an optional `<TextArea.Hint>`
   */
  children: React.ReactNode;
}

/**
 * @stencil formFieldStencil
 * @deprecated ⚠️ `TextArea` in Preview has been deprecated and will be removed in a future major version. Please use [`TextArea` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-textarea--docs) instead.
 */
export const TextArea = createContainer('div')({
  displayName: 'TextArea',
  modelHook: useTextInputModel,
  subComponents: {
    Field: TextAreaField,
    Label: FormField.Label,
    Hint: FormField.Hint,
  },
})<TextAreaProps>(({children, grow, orientation, ...elemProps}, Element, model) => {
  return (
    <Element
      {...mergeStyles(
        elemProps,
        formFieldStencil({
          grow,
          orientation: orientation,
          error: model.state.error,
          required: model.state.isRequired,
        })
      )}
    >
      {children}
    </Element>
  );
});
