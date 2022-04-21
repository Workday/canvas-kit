import React from 'react';

import {createContainerComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField, useFormFieldOrientation} from '@workday/canvas-kit-preview-react/form-field';
import {Stack} from '@workday/canvas-kit-react/layout';

import {useTextAreaModel} from './hooks';
import {TextAreaField} from './TextAreaField';

export interface TextAreaProps extends ExtractProps<typeof FormField, never> {
  /**
   * Children of the Text Input. Should contain a `<TextArea.Field>`, a `<TextArea.Label>` and an optional `<TextArea.Hint>`
   */
  children: React.ReactNode;
}

export const TextArea = createContainerComponent('div')({
  displayName: 'TextArea',
  modelHook: useTextAreaModel,
  subComponents: {
    Field: TextAreaField,
    Label: FormField.Label,
    Hint: FormField.Hint,
  },
})<TextAreaProps>(({children, orientation, ...elemProps}, Element) => {
  const layoutProps = useFormFieldOrientation(orientation);

  return (
    <Stack as={Element} {...layoutProps} {...elemProps}>
      {children}
    </Stack>
  );
});
