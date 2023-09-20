import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-react/text';

export const WithAvatar = () => {
  const [text, setText] = React.useState('');
  return (
    <Box>
      <Flex gap="xxs">
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Avatar url={testAvatar} />
          Regina Skeltor
        </Pill>
        <Pill onClick={() => setText('The second pill is clicked!')} disabled maxWidth={50}>
          <Pill.Avatar url={testAvatar} />
          Regina Skeltor
        </Pill>
      </Flex>
      <BodyText size="medium">{text}</BodyText>
    </Box>
  );
};
