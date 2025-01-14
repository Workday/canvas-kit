import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface SkeletonTextProps {
  /**
   * The number of "lines" that SkeletonText will display. If there is more than one line, the last line will have a width of `60%`.
   * @default 2
   */
  lineCount?: number;
  /**
   * The background color of the skeleton
   * @default `system.color.bg.alt.strong`
   */
  backgroundColor?: string;
}

export const skeletonTextStencil = createStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    marginBottom: system.space.x6,
    '& [data-part="skeleton-text-lines"], & [data-part="skeleton-text-single-or-last-line"]': {
      backgroundColor: cssVar(backgroundColor, system.color.bg.alt.strong),
      height: px2rem(21),
      marginBlockEnd: system.space.x2,
      borderRadius: system.shape.half,
    },
    '& [data-part="skeleton-text-lines"]': {
      width: '100%',
    },
    '& [data-part="skeleton-text-single-or-last-line"]': {
      width: '60%',
    },
  }),
});

export const SkeletonText = createComponent('div')({
  displayName: 'Skeleton.Text',
  Component: ({backgroundColor, lineCount = 2, ...elemProps}: SkeletonTextProps, ref, Element) => {
    const lines = new Array(lineCount).fill(null);
    return lineCount <= 0 ? null : (
      <Element
        ref={ref}
        {...handleCsProp(
          elemProps,
          skeletonTextStencil({
            backgroundColor,
          })
        )}
      >
        {lines.map((_value, index) => (
          <div
            data-part={
              index < lineCount - 1 || lineCount === 1
                ? 'skeleton-text-lines'
                : 'skeleton-text-single-or-last-line'
            }
            key={index}
          ></div>
        ))}
      </Element>
    );
  },
});
