import * as React from 'react';
import {Flex, FlexProps} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {type} from '@workday/canvas-kit-labs-react/tokens';

// temporary placeholder until type components are added to canvas-kit
const H3 = props => <h3 style={{...type.h4, ...type.variant.inverse, margin: 0}} {...props} />;

const Body = props => <p style={{...type.body, ...type.variant.inverse, margin: 0}} {...props} />;

const Card = ({children, ...props}: FlexProps) => (
  <Flex
    backgroundColor="frenchVanilla100"
    borderRadius="m"
    depth={2}
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
          <H3>Empower over Enforce</H3>
          <Box paddingY="xs">
            <Body>
              Encourage our user's expression. Stay out of the way and provide them with the tools
              and resources to build their vision.
            </Body>
          </Box>
        </Card>
        <Card backgroundColor="juicyPear500">
          <H3>Evolution over Perfection</H3>
          <Box paddingY="xs">
            <Body>
              Nothing is ever perfect – embrace that. Make educated assumptions, validate and test
              our decisions, then iterate! Aim of continous rather than perfect solutions.
            </Body>
          </Box>
        </Card>
        <Card backgroundColor="chiliMango400">
          <H3>Simple over Clever</H3>
          <Box paddingY="xs">
            <Body>
              Simple solutions invite the user in - clever solutions invite complexity. Make the
              system easy and predictable, and progressively disclose advanced functionality.
            </Body>
          </Box>
        </Card>
        <Card backgroundColor="blackberry400">
          <H3>Everyone over Every One</H3>
          <Box paddingY="xs">
            <Body>
              Each piece of the system is designs and built to be accessible, while still providing
              the best experience for all consumers. But not if something is focused on a single use
              case and negates the usability for others.
            </Body>
          </Box>
        </Card>
      </Flex>
    </Flex>
  );
};
