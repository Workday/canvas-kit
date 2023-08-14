import * as React from 'react';

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DeleteButton,
} from '@workday/canvas-kit-labs-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';

export const ButtonExample = () => {
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
      <Flex flexDirection="column" padding="xxs" gap="s" borderRadius="l">
        Delete Button
        <Flex flexDirection="row" gap="s">
          <DeleteButton size="extraSmall">Button</DeleteButton>
          <DeleteButton size="small" icon={plusIcon} iconPosition="start">
            Button
          </DeleteButton>
          <DeleteButton size="medium" icon={plusIcon} iconPosition="end">
            Button
          </DeleteButton>
        </Flex>
      </Flex>
    </Grid>
  );
};
