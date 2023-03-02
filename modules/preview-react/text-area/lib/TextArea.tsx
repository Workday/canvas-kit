import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField, useFormFieldOrientation} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';

import {useTextAreaModel} from './hooks';
import {TextAreaField} from './TextAreaField';

export interface TextAreaProps extends ExtractProps<typeof FormField, never> {
  /**
   * Children of the Text Input. Should contain a `<TextArea.Field>`, a `<TextArea.Label>` and an optional `<TextArea.Hint>`
   */
  children: React.ReactNode;
}

export const TextArea = createContainer('div')({
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
    <Flex as={Element} {...layoutProps} {...elemProps}>
      {children}
    </Flex>
  );
});
