import * as React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-labs-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';

export const Tertiary = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, min-content)" gridGap="s">
      <Flex flexDirection="column" padding="xxs" gap="s">
        Tertiary
        <Flex flexDirection="row" gap="s">
          <TertiaryButton size="extraSmall">Button</TertiaryButton>
          <TertiaryButton size="extraSmall" icon={plusIcon} iconPosition="start">
            Button
          </TertiaryButton>
          <TertiaryButton size="extraSmall" icon={plusIcon} iconPosition="end">
            Button
          </TertiaryButton>
          <TertiaryButton size="extraSmall" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <TertiaryButton size="small">Button</TertiaryButton>
          <TertiaryButton size="small" icon={plusIcon} iconPosition="start">
            Button
          </TertiaryButton>
          <TertiaryButton size="small" icon={plusIcon} iconPosition="end">
            Button
          </TertiaryButton>
          <TertiaryButton size="small" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <TertiaryButton size="medium">Button</TertiaryButton>
          <TertiaryButton size="medium" icon={plusIcon} iconPosition="start">
            Button
          </TertiaryButton>
          <TertiaryButton size="medium" icon={plusIcon} iconPosition="end">
            Button
          </TertiaryButton>
          <TertiaryButton size="medium" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <TertiaryButton size="large">Button</TertiaryButton>
          <TertiaryButton size="large" icon={plusIcon} iconPosition="start">
            Button
          </TertiaryButton>
          <TertiaryButton size="large" icon={plusIcon} iconPosition="end">
            Button
          </TertiaryButton>
          <TertiaryButton size="large" icon={plusIcon} iconPosition="only" />
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
          <TertiaryButton size="extraSmall" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="extraSmall" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="extraSmall" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="extraSmall" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <TertiaryButton size="small" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="small" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="small" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="small" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <TertiaryButton size="medium" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="medium" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="medium" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="medium" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <TertiaryButton size="large" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="large" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="large" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </TertiaryButton>
          <TertiaryButton size="large" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
      </Flex>
    </Grid>
  );
};
