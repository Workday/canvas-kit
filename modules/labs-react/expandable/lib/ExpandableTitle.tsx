import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {colors, space, type} from '@workday/canvas-kit-react/tokens';

export interface ExpandableTitleProps {
  /**
   * Children of the `Expandable.Title`. This should contain a string for the title
   */
  children: React.ReactNode;
}

export const ExpandableTitle = createComponent('div')({
  displayName: 'Expandable.Title',
  Component: ({children, ...elemProps}: ExpandableTitleProps, ref, Element) => {
    return (
      <Box
        as={Element}
        ref={ref}
        padding={`3px ${space.zero} 1px`}
        color={colors.blackPepper400}
        style={{
          ...type.levels.body.medium,
          fontWeight: type.properties.fontWeights.bold,
          lineHeight: '27px',
          textAlign: 'left',
        }}
        {...elemProps}
      >
        {children}
      </Box>
    );
  },
});
