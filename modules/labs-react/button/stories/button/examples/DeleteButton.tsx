import * as React from 'react';

import {DeleteButton} from '@workday/canvas-kit-labs-react/button';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';

export const Delete = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, min-content)" gridGap="s">
      <Flex flexDirection="column" padding="xxs" gap="s">
        Delete
        <Flex flexDirection="row" gap="s">
          <DeleteButton size="extraSmall">Button</DeleteButton>
        </Flex>
        <Flex flexDirection="row" gap="s">
          <DeleteButton size="small">Button</DeleteButton>
        </Flex>
        <Flex flexDirection="row" gap="s">
          <DeleteButton size="medium">Button</DeleteButton>
        </Flex>
        <Flex flexDirection="row" gap="s">
          <DeleteButton size="large">Button</DeleteButton>
        </Flex>
      </Flex>
    </Grid>
  );
};
