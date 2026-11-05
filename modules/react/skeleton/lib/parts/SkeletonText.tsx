import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {skeletonSurfaceFillStencil} from './SkeletonShape';

export interface SkeletonTextProps extends CSProps {
  /**
   * The number of "lines" that SkeletonText will display. If there is more than one line, the last line will have a width of `60%`.
   * @default 2
   */
  lineCount?: number;
  /**
   * The background color of the skeleton
   * @default Surface shimmer gradient (`surface.alt.strong` → `surface.loading`); override with a solid color
   */
  backgroundColor?: string;
}

export const skeletonTextLineStencil = createStencil({
  extends: skeletonSurfaceFillStencil,
  vars: {
    backgroundColor: '',
  },
  base: () => ({
    height: system.legacy.size.xxxs,
    // We do not have a `gap` token for 0.75rem so `padding` is being used here
    marginBlockEnd: system.legacy.padding.sm,
    borderRadius: system.legacy.shape.xxxl,
    width: '100%',
    display: 'block',
  }),
});

export const skeletonTextStencil = createStencil({
  base: () => ({
    marginBlockEnd: system.legacy.size.xs,
    '& [data-part="skeleton-text-lines"]:last-child': {
      width: '60%',
    },
  }),
});

export const SkeletonText = createComponent('div')({
  displayName: 'Skeleton.Text',
  Component: ({backgroundColor, lineCount = 2, ...elemProps}: SkeletonTextProps, ref, Element) => {
    const lines = new Array(lineCount).fill(null);
    return lineCount > 0 ? (
      <Element ref={ref} {...handleCsProp(elemProps, skeletonTextStencil())}>
        {lines.map((_value, index) => (
          <div
            data-part="skeleton-text-lines"
            key={index}
            {...handleCsProp({}, skeletonTextLineStencil({backgroundColor}))}
          />
        ))}
      </Element>
    ) : null;
  },
});
