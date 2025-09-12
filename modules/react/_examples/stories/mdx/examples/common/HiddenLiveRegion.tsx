import React, {useState, useRef} from 'react';
import {AriaLiveRegion, AccessibleHide} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const HiddenLiveRegion = () => {
  const [message, setMessage] = useState('This is an ARIA Live Region!');
  const inputRef = useRef();
  function handleSendMessage() {
    setMessage(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <>
      <Flex gap={`var(${system.space.x4})`} alignItems="flex-end">
        <FormField>
          <FormField.Label>Type your message:</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} ref={inputRef} />
          </FormField.Field>
        </FormField>
        <PrimaryButton onClick={handleSendMessage}>Send Message</PrimaryButton>
      </Flex>
      <AriaLiveRegion>
        <AccessibleHide>{message}</AccessibleHide>
      </AriaLiveRegion>
    </>
  );
};
