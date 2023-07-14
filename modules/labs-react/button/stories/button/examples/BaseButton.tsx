import * as React from 'react';

import {Button} from '@workday/canvas-kit-labs-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';

export const ButtonExample = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, min-content)" gridGap="s">
      <Button size="large" icon={plusIcon} iconPosition="end" variant="primary">
        Button
      </Button>
      <Button size="large" icon={plusIcon} iconPosition="end" variant="primaryInverse">
        Button
      </Button>
      <Button size="large" icon={plusIcon} iconPosition="end" variant="secondary">
        Button
      </Button>
      <Flex backgroundColor="blueberry300">
        <Button size="large" icon={plusIcon} iconPosition="end" variant="secondaryInverse">
          Button
        </Button>
      </Flex>
      <Button size="large" icon={plusIcon} iconPosition="end" variant="tertiary">
        Button
      </Button>
      <Button size="large" icon={plusIcon} iconPosition="end" variant="tertiaryInverse">
        Button
      </Button>
    </Grid>
  );
};
