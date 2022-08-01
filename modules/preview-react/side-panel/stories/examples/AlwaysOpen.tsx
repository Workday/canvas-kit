import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, HStack} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-preview-react/text';

const StyledAccentIcon = styled(AccentIcon)({
  marginRight: space.s,
});

export const AlwaysOpen = () => {
  const {panelProps, labelProps} = useSidePanel();

  return (
    <HStack spacing="s" height={320}>
      <SidePanel {...panelProps}>
        <Flex alignItems="center" paddingY="s" paddingX="s">
          <StyledAccentIcon icon={rocketIcon} />
          <Text as="h3" tokenLevel="body.large" color="licorice500" fontWeight="bold" {...labelProps}>
            Tasks Panel
          </Text>
        </Flex>
      </SidePanel>
    </HStack>
  );
};
