import * as React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-labs-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';

export const Secondary = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, min-content)" gridGap="s">
      <Flex flexDirection="column" padding="xxs" gap="s">
        Secondary
        <Flex flexDirection="row" gap="s">
          <SecondaryButton size="extraSmall">Button</SecondaryButton>
          <SecondaryButton size="extraSmall" icon={plusIcon} iconPosition="start">
            Button
          </SecondaryButton>
          <SecondaryButton size="extraSmall" icon={plusIcon} iconPosition="end">
            Button
          </SecondaryButton>
          <SecondaryButton size="extraSmall" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <SecondaryButton size="small">Button</SecondaryButton>
          <SecondaryButton size="small" icon={plusIcon} iconPosition="start">
            Button
          </SecondaryButton>
          <SecondaryButton size="small" icon={plusIcon} iconPosition="end">
            Button
          </SecondaryButton>
          <SecondaryButton size="small" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <SecondaryButton size="medium">Button</SecondaryButton>
          <SecondaryButton size="medium" icon={plusIcon} iconPosition="start">
            Button
          </SecondaryButton>
          <SecondaryButton size="medium" icon={plusIcon} iconPosition="end">
            Button
          </SecondaryButton>
          <SecondaryButton size="medium" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <SecondaryButton size="large">Button</SecondaryButton>
          <SecondaryButton size="large" icon={plusIcon} iconPosition="start">
            Button
          </SecondaryButton>
          <SecondaryButton size="large" icon={plusIcon} iconPosition="end">
            Button
          </SecondaryButton>
          <SecondaryButton size="large" icon={plusIcon} iconPosition="only" />
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
          <SecondaryButton size="extraSmall" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="extraSmall" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="extraSmall" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton
            size="extraSmall"
            icon={plusIcon}
            iconPosition="only"
            variant="inverse"
          />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <SecondaryButton size="small" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="small" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="small" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="small" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <SecondaryButton size="medium" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="medium" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="medium" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="medium" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <SecondaryButton size="large" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="large" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="large" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </SecondaryButton>
          <SecondaryButton size="large" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
      </Flex>
    </Grid>
  );
};
