import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';

export interface PillCountProps extends BoxProps {}
const StyledCountContainer = styled(Box.as('span'))<StyledType>({
  height: '22px',
  width: '22px',
  minWidth: '22px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: borderRadius.zero,
  borderTopRightRadius: borderRadius.m,
  borderBottomLeftRadius: borderRadius.zero,
  borderBottomRightRadius: borderRadius.m,
  marginInlineEnd: `-${space.xxs}`,
  marginInlineStart: `${space.xxs} !important`, // override margin from HStack because we want it larger
  backgroundColor: colors.soap500,
});
export const PillCount = createComponent('span')({
  displayName: 'Pill.Avatar',
  Component: ({children, ...elemProps}: PillCountProps, ref, Element) => {
    return (
      <StyledCountContainer data-count="ck-pill-count" ref={ref} {...elemProps}>
        {children}
      </StyledCountContainer>
    );
  },
});
