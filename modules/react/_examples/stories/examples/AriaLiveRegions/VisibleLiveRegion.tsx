import React from 'react';

import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system, base} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const liveRegionStyle = createStyles({
  border: `${px2rem(1)} solid ${base.cantaloupe400}`,
  backgroundColor: base.cantaloupe100,
  padding: system.space.x4,
  display: 'block',
  margin: system.space.x4 + ' 0',
});

export const VisibleLiveRegion = () => {
  const [message, setMessage] = React.useState('This is an ARIA Live Region!');

  // function handleChange(e) {}

  function handleSendMessage(e) {
    e.preventDefault();
    console.log('Message submitted');
    // derive state: update live region string
    // setState reset input ""
  }

  return (
    <>
      <AriaLiveRegion>
        <Text cs={liveRegionStyle}>{message}</Text>
      </AriaLiveRegion>
      <Flex as="form" onSubmit={handleSendMessage}>
        <FormField>
          <FormField.Label>Type your message:</FormField.Label>
          <FormField.Input as={TextInput} />
        </FormField>
        <PrimaryButton type="submit">Send Message</PrimaryButton>
      </Flex>
    </>
  );
};
