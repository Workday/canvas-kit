import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-react/text';

export const WithRemovable = () => {
  const [text, setText] = React.useState('');
  return (
    <Box>
      <Flex gap="xxs">
        <Pill variant="removable">
          Pink Shirts
          <Pill.IconButton onClick={() => setText('The first pill is clicked!')} />
        </Pill>
        <Pill variant="removable">
          <Pill.Avatar url={testAvatar} />
          Carolyn Grimaldi
          <Pill.IconButton onClick={() => setText('The second pill is clicked!')} />
        </Pill>
        <Pill variant="removable" disabled>
          <Pill.Label>This is a category that should not exist because it is too long</Pill.Label>
          <Pill.IconButton />
        </Pill>
      </Flex>
      <BodyText size="medium">{text}</BodyText>
    </Box>
  );
};
