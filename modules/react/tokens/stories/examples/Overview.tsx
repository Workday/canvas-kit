import styled from '@emotion/styled';
import * as React from 'react';

import {Flex} from '@workday/canvas-kit-react/layout';
import {borderRadius, colors, depth, space, type} from '@workday/canvas-kit-react/tokens';

const StyledCard = styled('div')({
  ...depth[3],
  padding: space.m,
  borderRadius: borderRadius.m,
  backgroundColor: colors.cinnamon300,
  ...type.levels.body.medium,
});

export const Overview = () => (
  <Flex>
    <StyledCard>Using Tokens To Style</StyledCard>
  </Flex>
);
