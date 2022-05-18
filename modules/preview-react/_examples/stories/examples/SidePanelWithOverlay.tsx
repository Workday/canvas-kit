import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {colors, depth, type} from '@workday/canvas-kit-react/tokens';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, Box} from '@workday/canvas-kit-react/layout';

const StyledHeader = styled('h3')({
  ...type.levels.body.large,
  color: colors.licorice500,
  fontWeight: type.properties.fontWeights.bold,
});

const StyledPanel = styled(SidePanel)({
  ...depth[6],
  zIndex: 1,
});

export const Basic = () => {
  const {labelProps} = useSidePanel();

  return (
    <Flex height={320} backgroundColor="soap100" position="relative">
      <StyledPanel touched={true} variant="alternate">
        <Flex alignItems="center" paddingY="s" paddingX="s">
          <StyledHeader {...labelProps}>Alternate Panel</StyledHeader>
        </Flex>
      </StyledPanel>
      <Box position="absolute" background="rgba(0,0,0,0.65)" height="100%" width="100%" />
    </Flex>
  );
};
