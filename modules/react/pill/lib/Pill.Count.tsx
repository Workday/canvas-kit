import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {colors, space} from '@workday/canvas-kit-react/tokens';

export interface PillCountProps extends BoxProps {
  countPosition?: 'start' | 'end';
}
const StyledCountContainer = styled(Box.as('span'))<StyledType>({
  height: '22px',
  width: '22px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const PillCount = createComponent('span')({
  displayName: 'Pill.Avatar',
  Component: ({children, countPosition = 'start', ...elemProps}: PillCountProps, ref, Element) => {
    return (
      <StyledCountContainer
        borderRadius={countPosition === 'start' ? '4px 0 0 4px' : '0 4px 4px 0'}
        backgroundColor={colors.soap500}
        ref={ref}
        {...elemProps}
      >
        {children}
      </StyledCountContainer>
    );
  },
});
