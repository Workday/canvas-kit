import React from 'react';

import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

let liveRegionStr = '';

const flexStyles = createStyles({
  gap: system.space.x4,
  alignItems: 'center',
});

export const HiddenLiveRegion = () => {
  const [message, setMessage] = React.useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    liveRegionStr = message;
    setMessage('');
  }

  return (
    <>
      <Flex as="form" aria-label="Hidden Live Region" onSubmit={handleSendMessage} cs={flexStyles}>
        <FormField>
          <FormField.Label>Type your message:</FormField.Label>
          <FormField.Input as={TextInput} onChange={handleChange} value={message} />
        </FormField>
        <PrimaryButton type="submit">Send Message</PrimaryButton>
      </Flex>
      <AriaLiveRegion>
        <Text as={AccessibleHide}>{liveRegionStr}</Text>
      </AriaLiveRegion>
    </>
  );
};
