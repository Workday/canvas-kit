import React, {useState, useRef} from 'react';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {system, base} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const liveRegionStyle = createStyles({
  border: `${px2rem(1)} solid ${base.cantaloupe400}`,
  backgroundColor: base.cantaloupe100,
  padding: system.space.x4,
});

export const VisibleLiveRegion = () => {
  const [message, setMessage] = useState('This is an ARIA Live Region!');
  const inputRef = useRef();
  function handleSendMessage() {
    setMessage(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <>
      <AriaLiveRegion>
        <Text cs={liveRegionStyle}>{message}</Text>
      </AriaLiveRegion>
      <Flex gap={`var(${system.space.x4})`} alignItems="flex-end">
        <TextInput orientation="vertical">
          <TextInput.Label>Type your message:</TextInput.Label>
          <TextInput.Field ref={inputRef} />
        </TextInput>
        <PrimaryButton onClick={handleSendMessage}>Send Message</PrimaryButton>
      </Flex>
    </>
  );
};
