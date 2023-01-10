import * as React from 'react';
import styled from '@emotion/styled';

import {colors, type, depth, space, borderRadius} from '@workday/canvas-kit-react/tokens';
import {Flex} from '@workday/canvas-kit-react/layout';

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
