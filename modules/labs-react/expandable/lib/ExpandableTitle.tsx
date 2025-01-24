import React from 'react';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';

export interface ExpandableTitleProps extends ExtractProps<typeof Box, never> {
  /**
   * Children of the `Expandable.Title`. This should contain a string for the title
   */
  children: React.ReactNode;
}

export const expandableTitleStencil = createStencil({
  base: {
    ...system.type.body.medium,
    fontWeight: system.fontWeight.bold,
    color: system.color.text.strong,
    padding: `${px2rem(2)} ${system.space.zero}`,
    textAlign: 'left',
  },
});

export const ExpandableTitle = createComponent('div')({
  displayName: 'Expandable.Title',
  Component: ({children, ...elemProps}: ExpandableTitleProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, expandableTitleStencil())}>
        {children}
      </Element>
    );
  },
});
