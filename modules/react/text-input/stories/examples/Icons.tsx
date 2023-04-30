import React from 'react';

import {xSmallIcon, mailIcon} from '@workday/canvas-system-icons-web';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {dispatchInputEvent} from '@workday/canvas-kit-react/common';

// create a prop forwarding component for FormField to forward to
const InputGroupFormFieldForwarder = (props: {}) => {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <InputGroup width={280}>
      <InputGroup.Start pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.Start>
      <InputGroup.Input ref={inputRef} onChange={handleChange} {...props} />
      <InputGroup.End>
        <TertiaryButton
          role="presentation"
          icon={xSmallIcon}
          size="small"
          tabIndex={-1}
          transition="opacity 300ms ease"
          style={{opacity: value ? 1 : 0}}
          onMouseDown={event => {
            event.preventDefault(); // prevent a focus change
          }}
          onClick={event => {
            dispatchInputEvent(inputRef.current, '');
          }}
        />
      </InputGroup.End>
    </InputGroup>
  );
};

export const Icons = () => {
  return (
    <FormField label="Email">
      <InputGroupFormFieldForwarder />
    </FormField>
  );
};
