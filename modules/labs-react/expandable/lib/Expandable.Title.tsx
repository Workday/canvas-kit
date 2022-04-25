import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors, type} from '@workday/canvas-kit-react';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';

export interface TitleProps extends FlexProps {
  children: React.ReactNode;
}

const StyledTitle = styled(Flex)<StyledType>({
  fontWeight: type.properties.fontWeights.bold,
  fontSize: type.properties.fontSizes[18],
  fontFamily: type.properties.fontFamilies.default,
  color: colors.blackPepper400,
});

export const Title = createComponent('div')({
  displayName: 'Expandable.Title',
  Component: ({children, ...elemProps}: TitleProps, ref, Element) => {
    return (
      <StyledTitle alignItems={'center'} as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledTitle>
    );
  },
});
