import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {useTextInputModel} from '@workday/canvas-kit-preview-react/text-input';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

/**
 * @deprecated ⚠️ `TextAreaField` in Preview has been deprecated and will be removed in a future major version. Please use [`FormField`](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-form-field--docs) in Preview instead.
 */
export const TextAreaField = createSubcomponent('textarea')({
  displayName: 'TextArea.Field',
  modelHook: useTextInputModel,
})<ExtractProps<typeof FormField.Input, never>>(({...elemProps}, Element, model) => {
  return (
    <FormField.Input
      as={TextArea}
      display="block"
      minHeight={64}
      minWidth={280}
      padding={cssVar(system.space.x2)} // Compensate for border
      margin={0} // Fix Safari
      {...elemProps}
    />
  );
});
