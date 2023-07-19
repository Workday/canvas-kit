import * as React from 'react';

import {Button, buttonVars, BaseButton} from '@workday/canvas-kit-labs-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';

export const ButtonExample = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, min-content)" gridGap="s">
      <Flex backgroundColor="transparent" padding="xxs" flexDirection="column" gap="s">
        <Button size="medium" icon={plusIcon} iconPosition="end" variant="primary">
          Button
        </Button>
        <Button size="medium" icon={plusIcon} iconPosition="end" variant="secondary">
          Button
        </Button>
        <Button size="medium" icon={plusIcon} iconPosition="end" variant="tertiary">
          Button
        </Button>
      </Flex>
      <Flex backgroundColor="blueberry400" padding="xxs" flexDirection="column" gap="s">
        <Button size="medium" icon={plusIcon} iconPosition="end" variant="primaryInverse">
          Button
        </Button>
        <Button size="medium" icon={plusIcon} iconPosition="end" variant="secondaryInverse">
          Button
        </Button>
        <Button size="medium" icon={plusIcon} iconPosition="end" variant="tertiaryInverse">
          Button
        </Button>
      </Flex>
    </Grid>
  );
};
