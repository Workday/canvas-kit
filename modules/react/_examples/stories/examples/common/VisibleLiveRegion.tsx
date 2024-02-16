import React, {useState, useRef} from 'react';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {colors, space} from '@workday/canvas-kit-react/tokens';

const liveRegionStyle = {
  border: `1px solid ${colors.cantaloupe400}`,
  backgroundColor: colors.cantaloupe100,
  padding: space.s,
};

export const VisibleLiveRegion = () => {
  const [message, setMessage] = useState('This is an ARIA Live Region!');
  const inputRef = useRef();
  function handleSendMessage() {
    setMessage(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <>
      <AriaLiveRegion style={liveRegionStyle}>
        <Text>{message}</Text>
      </AriaLiveRegion>
      <Flex margin={`${space.s} 0`} gap={space.s} alignItems="flex-end">
        <TextInput orientation="vertical">
          <TextInput.Label>Type your message:</TextInput.Label>
          <TextInput.Field ref={inputRef} />
        </TextInput>
        <PrimaryButton onClick={handleSendMessage}>Send Message</PrimaryButton>
      </Flex>
    </>
  );
};
