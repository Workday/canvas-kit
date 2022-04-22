import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {colors, type} from '@workday/canvas-kit-react';

export interface TitleProps {
  children?: React.ReactNode;
}

const StyledTitle = styled('div')({
  fontWeight: type.properties.fontWeights.bold,
  fontSize: type.properties.fontSizes[18],
  fontFamily: type.properties.fontFamilies.default,
  display: 'flex',
  color: colors.blackPepper400,
});

export const Title = createComponent('div')({
  displayName: 'Expandable.Title',
  Component: ({children, ...elemProps}: TitleProps, ref) => {
    return (
      <StyledTitle ref={ref} {...elemProps}>
        {children}
      </StyledTitle>
    );
  },
});
