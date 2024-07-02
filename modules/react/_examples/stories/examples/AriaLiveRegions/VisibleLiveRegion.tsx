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
  width: '28rem',
});

let liveRegionStr = 'This is an ARIA Live Region!';

export const VisibleLiveRegion = () => {
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
      <AriaLiveRegion>
        <Text cs={liveRegionStyle}>{liveRegionStr}</Text>
      </AriaLiveRegion>
      <Flex
        as="form"
        aria-label="Visible Live Region"
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
    </>
  );
};
