import * as React from 'react';
import {Stack} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {Hyperlink} from '@workday/canvas-kit-react/button';

export const StackItems = () => (
  <Box as="nav">
    <Stack
      as="ul"
      border="solid 2px"
      borderColor="cinnamon500"
      justifyContent="flex-end"
      listStyle="none"
      padding="xxxs"
      role="list"
      spacing="xxxs"
    >
      <Stack.Item as="li" backgroundColor="blueberry500" paddingY="xs" paddingX="xxs">
        <Hyperlink variant="inverse" href="/">
          Home
        </Hyperlink>
      </Stack.Item>
      <Stack.Item as="li" backgroundColor="chiliMango500" paddingY="xs" paddingX="xxs">
        <Hyperlink variant="inverse" href="/about">
          About
        </Hyperlink>
      </Stack.Item>
      <Stack.Item as="li" backgroundColor="juicyPear500" paddingY="xs" paddingX="xxs">
        <Hyperlink variant="inverse" href="/contact">
          Contact
        </Hyperlink>
      </Stack.Item>
      <Stack.Item
        as="li"
        paddingY="xs"
        paddingX="xxs"
        marginInlineStart="s"
        backgroundColor="blackberry500"
      >
        <Hyperlink variant="inverse" href="/settings">
          Profile
        </Hyperlink>
      </Stack.Item>
    </Stack>
  </Box>
);
