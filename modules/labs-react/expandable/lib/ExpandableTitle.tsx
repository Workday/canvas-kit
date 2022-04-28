import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors, type} from '@workday/canvas-kit-react';

export interface TitleProps {
  /**
   * Children of the Expandable Target. Should contain a string for the title
   */
  children: React.ReactNode;
}

const StyledTitle = styled('div')<StyledType>({
  fontWeight: type.properties.fontWeights.bold,
  fontSize: type.properties.fontSizes[18],
  fontFamily: type.properties.fontFamilies.default,
  color: colors.blackPepper400,
});

export const Title = createComponent('div')({
  displayName: 'Expandable.Title',
  Component: ({children, ...elemProps}: TitleProps, ref, Element) => {
    return (
      <StyledTitle as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledTitle>
    );
  },
});
