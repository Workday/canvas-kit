import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';

export interface PillCountProps extends FlexProps {}
const StyledCountContainer = styled(Flex.as('span'))<StyledType>({
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
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        as={Element}
        height={22}
        minWidth={22}
        padding={`0  ${space.xxxs}`}
        marginInlineEnd={`-${space.xxs}`} // Remove padding from HStack on the right side
        marginInlineStart={`${space.xxxs}`}
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
