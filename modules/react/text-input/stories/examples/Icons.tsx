import React from 'react';

import {mailIcon} from '@workday/canvas-system-icons-web';
import {
  FormField,
  useFormFieldModel,
  useFormFieldInput,
} from '@workday/canvas-kit-react/form-field';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

/**
 * Using `as={InputGroup}` on `FormField.Input` will break the label associations necessary for accessibility.
 * In this example, we've rendered `FormField.Field` as `InputGroup` and then hoisted the `id` of the input from the FormField model.
 * This allows us to set the `id` of the `InputGroup.Input` correctly for proper label association.
 */

export const Icons = () => {
  const model = useFormFieldModel();
  const {id: formFieldInputId} = useFormFieldInput(model);

  return (
    <FormField model={model}>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field as={InputGroup}>
        <InputGroup.InnerStart>
          <SystemIcon icon={mailIcon} size="small" />
        </InputGroup.InnerStart>
        <InputGroup.Input id={formFieldInputId} autoComplete="email" />
        <InputGroup.InnerEnd>
          <InputGroup.ClearButton />
        </InputGroup.InnerEnd>
      </FormField.Field>
    </FormField>
  );
};
