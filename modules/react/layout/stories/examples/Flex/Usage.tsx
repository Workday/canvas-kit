import * as React from 'react';
import {Flex, FlexProps, Box} from '@workday/canvas-kit-react/layout';
import {TypeBodyLevel} from '@workday/canvas-kit-preview-react/text';

const Card = ({children, ...props}: FlexProps) => (
  <Flex
    backgroundColor="frenchVanilla100"
    borderRadius="m"
    depth={1}
    flexDirection="column"
    margin="xs"
    flex="1 1 300px"
    padding="s"
    {...props}
  >
    {children}
  </Flex>
);

export const Usage = () => {
  return (
    <Flex as="section" flexDirection="column" padding="s">
      <h2>Canvas Principles</h2>
      <Flex alignItems="stretch" flexWrap="wrap">
        <Card backgroundColor="blueberry400">
          <TypeBodyLevel as="h3" size="large" color="inverse" fontWeight="bold" margin={0}>
            Empower over Enforce
          </TypeBodyLevel>
          <Box paddingY="xs">
            <TypeBodyLevel size="small" color="inverse" margin={0}>
              Encourage our user's expression. Stay out of the way and provide them with the tools
              and resources to build their vision.
            </TypeBodyLevel>
          </Box>
        </Card>
        <Card backgroundColor="juicyPear500">
          <TypeBodyLevel as="h3" size="large" color="inverse" fontWeight="bold" margin={0}>
            Evolution over Perfection
          </TypeBodyLevel>
          <Box paddingY="xs">
            <TypeBodyLevel size="small" color="inverse" margin={0}>
              Nothing is ever perfect – embrace that. Make educated assumptions, validate and test
              our decisions, then iterate! Aim of continous rather than perfect solutions.
            </TypeBodyLevel>
          </Box>
        </Card>
        <Card backgroundColor="chiliMango400">
          <TypeBodyLevel as="h3" size="large" color="inverse" fontWeight="bold" margin={0}>
            Simple over Clever
          </TypeBodyLevel>
          <Box paddingY="xs">
            <TypeBodyLevel size="small" color="inverse" margin={0}>
              Simple solutions invite the user in - clever solutions invite complexity. Make the
              system easy and predictable, and progressively disclose advanced functionality.
            </TypeBodyLevel>
          </Box>
        </Card>
        <Card backgroundColor="blackberry400">
          <TypeBodyLevel as="h3" size="large" color="inverse" fontWeight="bold" margin={0}>
            Everyone over Every One
          </TypeBodyLevel>
          <Box paddingY="xs">
            <TypeBodyLevel size="small" color="inverse" margin={0}>
              Each piece of the system is designs and built to be accessible, while still providing
              the best experience for all consumers. But not if something is focused on a single use
              case and negates the usability for others.
            </TypeBodyLevel>
          </Box>
        </Card>
      </Flex>
    </Flex>
  );
};
