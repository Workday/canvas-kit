import React from 'react';

import {mailIcon} from '@workday/canvas-system-icons-web';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

export const Icons = () => {
  return (
    <FormField label="Email">
      <InputGroupFormFieldForwarder />
    </FormField>
  );
};

// create a prop forwarding component for FormField to forward to
const InputGroupFormFieldForwarder = (props: {}) => {
  return (
    <InputGroup width={280}>
      <InputGroup.InnerStart pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.InnerStart>
      <InputGroup.Input {...props} />
      <InputGroup.InnerEnd>
        <InputGroup.ClearInputButton />
      </InputGroup.InnerEnd>
    </InputGroup>
  );
};
