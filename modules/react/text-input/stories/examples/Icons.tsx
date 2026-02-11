import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {mailIcon} from '@workday/canvas-system-icons-web';

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
