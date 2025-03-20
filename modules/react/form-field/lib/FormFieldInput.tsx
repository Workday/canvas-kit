import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';

import {useFormFieldInput, useFormFieldModel} from './hooks';

export const FormFieldInput = createSubcomponent('input')({
  displayName: 'FormField.Input',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldInput,
})<ExtractProps<typeof Box, never>>((elemProps, Element) => {
  return <Box data-width="ck-formfield-width" as={Element} {...mergeStyles(elemProps)} />;
});
