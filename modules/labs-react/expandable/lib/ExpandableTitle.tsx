import React from 'react';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {colors, space, type} from '@workday/canvas-kit-react/tokens';

export interface ExpandableTitleProps extends ExtractProps<typeof Box, never> {
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
        padding={`2px ${space.zero} 2px`}
        color={colors.blackPepper400}
        style={{
          ...type.levels.body.medium,
          fontWeight: type.properties.fontWeights.bold,
          textAlign: 'left',
        }}
        {...elemProps}
      >
        {children}
      </Box>
    );
  },
});
