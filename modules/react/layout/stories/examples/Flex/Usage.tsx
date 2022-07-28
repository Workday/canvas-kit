import * as React from 'react';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-preview-react/text';

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
          <BodyText as="h3" size="large" color="inverse" fontWeight="bold" margin={0}>
            Empower over Enforce
          </BodyText>
          <BodyText size="small" color="inverse" margin={0} paddingY="xs">
            Encourage our user's expression. Stay out of the way and provide them with the tools and
            resources to build their vision.
          </BodyText>
        </Card>
        <Card backgroundColor="juicyPear500">
          <BodyText as="h3" size="large" color="inverse" fontWeight="bold" margin={0}>
            Evolution over Perfection
          </BodyText>
          <BodyText size="small" color="inverse" margin={0} paddingY="xs">
            Nothing is ever perfect – embrace that. Make educated assumptions, validate and test our
            decisions, then iterate! Aim of continous rather than perfect solutions.
          </BodyText>
        </Card>
        <Card backgroundColor="chiliMango400">
          <BodyText as="h3" size="large" color="inverse" fontWeight="bold" margin={0}>
            Simple over Clever
          </BodyText>
          <BodyText size="small" color="inverse" margin={0} paddingY="xs">
            Simple solutions invite the user in - clever solutions invite complexity. Make the
            system easy and predictable, and progressively disclose advanced functionality.
          </BodyText>
        </Card>
        <Card backgroundColor="blackberry400">
          <BodyText as="h3" size="large" color="inverse" fontWeight="bold" margin={0}>
            Everyone over Every One
          </BodyText>
          <BodyText size="small" color="inverse" margin={0} paddingY="xs">
            Each piece of the system is designs and built to be accessible, while still providing
            the best experience for all consumers. But not if something is focused on a single use
            case and negates the usability for others.
          </BodyText>
        </Card>
      </Flex>
    </Flex>
  );
};
