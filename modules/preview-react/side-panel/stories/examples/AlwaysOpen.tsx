import * as React from 'react';
import {colors, space, type} from '@workday/canvas-kit-react/tokens';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, HStack} from '@workday/canvas-kit-react/layout';
import {styled} from '@workday/canvas-kit-react/common';

const StyledHeader = styled('h3')({
  ...type.levels.body.large,
  color: colors.licorice500,
  fontWeight: type.properties.fontWeights.bold,
});

const StyledAccentIcon = styled(AccentIcon)({
  marginRight: space.s,
});

export const AlwaysOpen = () => {
  const {panelProps, labelProps} = useSidePanel();

  return (
    <HStack spacing="s" height={320}>
      <SidePanel {...panelProps}>
        <Flex alignItems="center" paddingY="s" paddingX="xs">
          <StyledAccentIcon icon={rocketIcon} />
          <StyledHeader {...labelProps}>Tasks Panel</StyledHeader>
        </Flex>
      </SidePanel>
    </HStack>
  );
};
