import React from 'react';

import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ExpandableTitleProps extends ExtractProps<typeof Box, never> {
  /**
   * Children of the `Expandable.Title`. This should contain a string for the title
   */
  children: React.ReactNode;
}

export const expandableTitleStencil = createStencil({
  base: {
    fontFamily: system.fontFamily.default,
    lineHeight: system.legacy.lineHeight.body.md,
    fontSize: system.legacy.fontSize.body.md,
    fontWeight: system.fontWeight.bold,
    color: system.color.fg.strong,
    padding: `${px2rem(2)} ${system.legacy.padding.xs}`,
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
