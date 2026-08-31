import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {calc, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const liveRegionStyle = createStyles({
  border: `${px2rem(1)} solid ${system.color.brand.focus.caution.outer}`,
  backgroundColor: system.color.brand.surface.caution.strong,
  padding: system.padding.md,
  display: 'block',
  marginBlock: system.gap.md,
  width: calc.multiply(system.size.xxl, 7),
});

const flexGapStyles = createStyles({
  gap: system.gap.md,
  alignItems: 'center',
});

let liveRegionStr = 'This is an ARIA Live Region!';

export const VisibleLiveRegion = () => {
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
      <AriaLiveRegion>
        <Text cs={liveRegionStyle}>{liveRegionStr}</Text>
      </AriaLiveRegion>
      <Flex
        as="form"
        aria-label="Visible Live Region"
        onSubmit={handleSendMessage}
        cs={flexGapStyles}
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
