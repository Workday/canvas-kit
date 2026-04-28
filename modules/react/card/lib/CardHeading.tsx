import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {textStencil} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface CardHeadingProps extends BoxProps {
  /**
   * The id of the Card heading. Tie this to an `aria-labelledby` for accessibility.
   */
  id?: string;
  children?: React.ReactNode;
}

// .cnvs-card-heading
export const cardHeadingStencil = createStencil({
  extends: textStencil,
  base: {
    color: system.color.fg.strong,
    fontWeight: system.fontWeight.bold,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginBlock: cssVar(system.padding.none, system.space.zero),
  },
  defaultModifiers: {typeLevel: 'body.large'},
});

export const CardHeading = createComponent('h3')({
  displayName: 'Card.Heading',
  Component: ({children, ...elemProps}: CardHeadingProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, cardHeadingStencil())}>
        {children}
      </Element>
    );
  },
});
