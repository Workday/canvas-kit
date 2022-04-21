import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-react';

export interface TitleProps {
  children?: React.ReactNode & string;
}

const StyledTitle = styled('span')({
  ...type.levels.heading.small,
});

export const Title = createComponent()({
  displayName: 'Expandable.Title',
  Component: ({children, ...elemProps}: TitleProps, ref) => {
    return (
      <StyledTitle ref={ref} {...elemProps}>
        {children}
      </StyledTitle>
    );
  },
});
