import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
// import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';

export interface PillLabelProps extends BoxProps {}
const StyledLabelContainer = styled(Box.as('span'))<StyledType>({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
export const PillLabel = createComponent('span')({
  displayName: 'Pill.Label',
  Component: ({children, ...elemProps}: PillLabelProps, ref, Element) => {
    return (
      <OverflowTooltip>
        <StyledLabelContainer ref={ref} {...elemProps}>
          {children}
        </StyledLabelContainer>
      </OverflowTooltip>
    );
  },
});
