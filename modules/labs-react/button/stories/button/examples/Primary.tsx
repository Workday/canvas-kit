import * as React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-labs-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';

export const Primary = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, min-content)" gridGap="s">
      <Flex flexDirection="column" padding="xxs" gap="s">
        Primary
        <Flex flexDirection="row" gap="s">
          <PrimaryButton size="extraSmall">Button</PrimaryButton>
          <PrimaryButton size="extraSmall" icon={plusIcon} iconPosition="start">
            Button
          </PrimaryButton>
          <PrimaryButton size="extraSmall" icon={plusIcon} iconPosition="end">
            Button
          </PrimaryButton>
          <PrimaryButton size="extraSmall" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <PrimaryButton size="small">Button</PrimaryButton>
          <PrimaryButton size="small" icon={plusIcon} iconPosition="start">
            Button
          </PrimaryButton>
          <PrimaryButton size="small" icon={plusIcon} iconPosition="end">
            Button
          </PrimaryButton>
          <PrimaryButton size="small" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <PrimaryButton size="medium">Button</PrimaryButton>
          <PrimaryButton size="medium" icon={plusIcon} iconPosition="start">
            Button
          </PrimaryButton>
          <PrimaryButton size="medium" icon={plusIcon} iconPosition="end">
            Button
          </PrimaryButton>
          <PrimaryButton size="medium" icon={plusIcon} iconPosition="only" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <PrimaryButton size="large">Button</PrimaryButton>
          <PrimaryButton size="large" icon={plusIcon} iconPosition="start">
            Button
          </PrimaryButton>
          <PrimaryButton size="large" icon={plusIcon} iconPosition="end">
            Button
          </PrimaryButton>
          <PrimaryButton size="large" icon={plusIcon} iconPosition="only" />
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
          <PrimaryButton size="extraSmall" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="extraSmall" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="extraSmall" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="extraSmall" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <PrimaryButton size="small" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="small" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="small" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="small" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <PrimaryButton size="medium" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="medium" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="medium" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="medium" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
        <Flex flexDirection="row" gap="s">
          <PrimaryButton size="large" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="large" icon={plusIcon} iconPosition="start" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="large" icon={plusIcon} iconPosition="end" variant="inverse">
            Button
          </PrimaryButton>
          <PrimaryButton size="large" icon={plusIcon} iconPosition="only" variant="inverse" />
        </Flex>
      </Flex>
    </Grid>
  );
};
