import React from 'react';

import {ExtractProps, createComponent, forwardFitTokens} from '@workday/canvas-kit-react/common';
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
    ...system.type.body.medium,
    fontWeight: system.fontWeight.bold,
    color: forwardFitTokens.system.color.fg.strong,
    // TODO: update this to include padding if we're 100% removing the ExpandableTarget gap value
    // padding: `${px2rem(2)} ${forwardFitTokens.system.padding.xs}`,
    padding: `${px2rem(2)} ${forwardFitTokens.system.padding.none}`,
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
