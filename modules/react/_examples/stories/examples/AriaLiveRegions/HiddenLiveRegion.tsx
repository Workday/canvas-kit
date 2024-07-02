import React from 'react';

import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';

let liveRegionStr = '';

export const HiddenLiveRegion = () => {
  const [message, setMessage] = React.useState('');

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSendMessage(e) {
    e.preventDefault();
    liveRegionStr = message;
    setMessage('');
  }

  return (
    <>
      <Flex
        as="form"
        aria-label="Hidden Live Region"
        onSubmit={handleSendMessage}
        alignItems="center"
        gap="s"
      >
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
