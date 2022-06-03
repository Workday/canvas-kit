import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {depth} from '@workday/canvas-kit-react/tokens';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-preview-react/text';

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
          <BodyText as="h3" size="large" fontWeight="bold" color="licorice500">
            Alternate Panel
          </BodyText>
        </Flex>
      </StyledPanel>
      <Box position="absolute" background="rgba(0,0,0,0.65)" height="100%" width="100%" />
    </Flex>
  );
};
