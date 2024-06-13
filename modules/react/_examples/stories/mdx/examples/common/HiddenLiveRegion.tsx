import React, {useState, useRef} from 'react';
import {AriaLiveRegion, AccessibleHide} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

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
        <TextInput orientation="vertical">
          <TextInput.Label>Type your message:</TextInput.Label>
          <TextInput.Field ref={inputRef} />
        </TextInput>
        <PrimaryButton onClick={handleSendMessage}>Send Message</PrimaryButton>
      </Flex>
      <AriaLiveRegion>
        <AccessibleHide>{message}</AccessibleHide>
      </AriaLiveRegion>
    </>
  );
};
