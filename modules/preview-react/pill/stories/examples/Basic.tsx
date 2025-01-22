import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Basic = () => {
  const [text, setText] = React.useState('');
  return (
    <Box>
      <Flex gap="xxs">
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill disabled maxWidth={60}>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
      </Flex>
      <BodyText size="medium">{text}</BodyText>
    </Box>
  );
};
