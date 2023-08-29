import React from 'react';
import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-react/text';

export const WithCount = () => {
  const [text, setText] = React.useState('');
  return (
    <Box>
      <Flex gap="xxs">
        <Pill onClick={() => setText('The first pill is clicked!')}>
          Shoes
          <Pill.Count>30</Pill.Count>
        </Pill>
        <Pill onClick={() => setText('The second pill is clicked!')} disabled>
          Shoes
          <Pill.Count>30</Pill.Count>
        </Pill>
      </Flex>
      <BodyText size="medium">{text}</BodyText>
    </Box>
  );
};
