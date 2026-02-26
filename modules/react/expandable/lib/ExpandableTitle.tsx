import React from 'react';

import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    color: cssVar(system.color.fg.strong, system.color.text.strong),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `${px2rem(2)} ${cssVar(system.padding.xs, system.space.x2)}`,
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
