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
        padding={`6px ${space.zero} ${space.xxxs}`}
        color={colors.blackPepper400}
        style={{
          fontWeight: type.properties.fontWeights.bold,
          fontSize: type.properties.fontSizes[18],
          fontFamily: type.properties.fontFamilies.default,
          lineHeight: '21px',
          textAlign: 'left',
        }}
        {...elemProps}
      >
        {children}
      </Box>
    );
  },
});
