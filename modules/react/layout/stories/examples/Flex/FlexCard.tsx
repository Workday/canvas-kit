import * as React from 'react';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {BodyText} from '@workday/canvas-kit-preview-react/text';

export const FlexCard = () => {
  const [isComplete, setIsComplete] = React.useState(false);
  return (
    <Flex
      flexDirection="column"
      padding="m"
      depth={1}
      borderRadius="l"
      border="solid 1px"
      borderColor="soap400"
      maxWidth={600}
    >
      <BodyText as="h3" size="large" fontWeight="bold" margin={0}>
        Learn about Flex {isComplete && '🥳'}
      </BodyText>
      <Box paddingY="s">
        <BodyText size="small" margin={0}>
          Complete this task when you have a functional understanding of Flex.
        </BodyText>
      </Box>
      <Flex justifyContent="flex-end">
        <Box marginRight="xxs">
          <PrimaryButton onClick={() => setIsComplete(true)}>Complete</PrimaryButton>
        </Box>
        <SecondaryButton onClick={() => setIsComplete(false)}>Cancel</SecondaryButton>
      </Flex>
    </Flex>
  );
};
