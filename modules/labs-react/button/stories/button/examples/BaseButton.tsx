import * as React from 'react';

import {Button} from '@workday/canvas-kit-labs-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';

export const ButtonExample = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, min-content)" gridGap="s">
      <Flex flexDirection="column" padding="xxs" gap="s">
        Primary
        <Flex flexDirection="row" gap="s">
          <Button size="extraSmall" variant="primary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="start" variant="primary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="end" variant="primary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="only" variant="primary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="small" variant="primary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="start" variant="primary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="end" variant="primary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="only" variant="primary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="medium" variant="primary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="start" variant="primary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="end" variant="primary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="only" variant="primary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="large" variant="primary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="start" variant="primary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="end" variant="primary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="only" variant="primary" />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        padding="xxs"
        gap="s"
        backgroundColor="blueberry400"
        color="frenchVanilla100"
        borderRadius="l"
      >
        Primary Inverse
        <Flex flexDirection="row" gap="s">
          <Button size="extraSmall" variant="primaryInverse">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="start" variant="primaryInverse">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="end" variant="primaryInverse">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="only" variant="primaryInverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="small" variant="primaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="start" variant="primaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="end" variant="primaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="only" variant="primaryInverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="medium" variant="primaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="start" variant="primaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="end" variant="primaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="only" variant="primaryInverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="large" variant="primaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="start" variant="primaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="end" variant="primaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="only" variant="primaryInverse" />
        </Flex>
      </Flex>
      <Flex flexDirection="column" padding="xxs" gap="s">
        Secondary
        <Flex flexDirection="row" gap="s">
          <Button size="extraSmall" variant="secondary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="start" variant="secondary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="end" variant="secondary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="only" variant="secondary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="small" variant="secondary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="start" variant="secondary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="end" variant="secondary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="only" variant="secondary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="medium" variant="secondary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="start" variant="secondary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="end" variant="secondary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="only" variant="secondary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="large" variant="secondary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="start" variant="secondary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="end" variant="secondary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="only" variant="secondary" />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        padding="xxs"
        gap="s"
        backgroundColor="blueberry400"
        color="frenchVanilla100"
        borderRadius="l"
      >
        Secondary Inverse
        <Flex flexDirection="row" gap="s">
          <Button size="extraSmall" variant="secondaryInverse">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="start" variant="secondaryInverse">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="end" variant="secondaryInverse">
            Button
          </Button>
          <Button
            size="extraSmall"
            icon={plusIcon}
            iconPosition="only"
            variant="secondaryInverse"
          />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="small" variant="secondaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="start" variant="secondaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="end" variant="secondaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="only" variant="secondaryInverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="medium" variant="secondaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="start" variant="secondaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="end" variant="secondaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="only" variant="secondaryInverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="large" variant="secondaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="start" variant="secondaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="end" variant="secondaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="only" variant="secondaryInverse" />
        </Flex>
      </Flex>
      <Flex flexDirection="column" padding="xxs" gap="s">
        Tertiary
        <Flex flexDirection="row" gap="s">
          <Button size="extraSmall" variant="tertiary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="start" variant="tertiary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="end" variant="tertiary">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="only" variant="tertiary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="small" variant="tertiary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="start" variant="tertiary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="end" variant="tertiary">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="only" variant="tertiary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="medium" variant="tertiary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="start" variant="tertiary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="end" variant="tertiary">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="only" variant="tertiary" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="large" variant="tertiary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="start" variant="tertiary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="end" variant="tertiary">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="only" variant="tertiary" />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        padding="xxs"
        gap="s"
        backgroundColor="blueberry400"
        color="frenchVanilla100"
        borderRadius="l"
      >
        Tertiary Inverse
        <Flex flexDirection="row" gap="s">
          <Button size="extraSmall" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="start" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="end" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="extraSmall" icon={plusIcon} iconPosition="only" variant="tertiaryInverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="small" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="start" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="end" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="small" icon={plusIcon} iconPosition="only" variant="tertiaryInverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="medium" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="start" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="end" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="medium" icon={plusIcon} iconPosition="only" variant="tertiaryInverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <Button size="large" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="start" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="end" variant="tertiaryInverse">
            Button
          </Button>
          <Button size="large" icon={plusIcon} iconPosition="only" variant="tertiaryInverse" />
        </Flex>
      </Flex>
    </Grid>
  );
};
