import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {BoxProps, Box} from '@workday/canvas-kit-react/layout';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';

export interface PillCountProps extends BoxProps {}
const StyledCountContainer = styled(Box.as('span'))<StyledType>({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: borderRadius.zero,
  borderTopRightRadius: borderRadius.m,
  borderBottomLeftRadius: borderRadius.zero,
  borderBottomRightRadius: borderRadius.m,
});
export const PillCount = createComponent('span')({
  displayName: 'Pill.Avatar',
  Component: ({children, ...elemProps}: PillCountProps, ref, Element) => {
    return (
      <StyledCountContainer
        as={Element}
        height={22}
        width={22}
        minWidth={22}
        marginInlineEnd={`-${space.xxs}`}
        marginInlineStart={`${space.xxs} !important`}
        backgroundColor={colors.soap500}
        data-count="ck-pill-count"
        ref={ref}
        {...elemProps}
      >
        {children}
      </StyledCountContainer>
    );
  },
});
