import React from 'react';

import {mailIcon} from '@workday/canvas-system-icons-web';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

export const Icons = () => {
  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <InputGroupFormFieldForwarder />
      </FormField.Field>
    </FormField>
  );
};

// create a prop forwarding component for FormField to forward to
const InputGroupFormFieldForwarder = (props: {}) => {
  return (
    <FormField.Input as={InputGroup} width={280}>
      <InputGroup.InnerStart pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.InnerStart>
      <InputGroup.Input {...props} />
      <InputGroup.InnerEnd>
        <InputGroup.ClearButton />
      </InputGroup.InnerEnd>
    </FormField.Input>
  );
};
