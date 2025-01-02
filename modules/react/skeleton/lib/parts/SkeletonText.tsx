import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {
  calc,
  createStencil,
  CSProps,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
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

export interface SkeletonTextLineProps extends CSProps {
  /**
   * The width of the line in `px` or `%`.
   */
  width?: number | string;
  /**
   * The background color of the skeleton
   * @default `system.color.bg.alt.strong`
   */
  backgroundColor?: string;
  /**
   * The borderRadius of the shape in `px` or `%`.
   * @default 2px
   */
  borderRadius?: number | string;
}

const skeletonTextLineStencil = createStencil({
  vars: {
    width: '',
    backgroundColor: '',
    borderRadius: '',
  },
  base: ({width, borderRadius, backgroundColor}) => ({
    backgroundColor: cssVar(backgroundColor, system.color.bg.alt.strong),
    borderRadius: cssVar(borderRadius, calc.divide(system.space.x1, 2)), // borderRadius.s // 2px
    height: cssVar(calc.subtract(system.space.x6, px2rem(3))),
    width: width,
    marginBottom: system.space.x3,
  }),
});

const textContainerStencil = createStencil({
  base: () => ({
    marginBottom: system.space.x4,
  }),
});

const Line = createComponent('div')<SkeletonTextLineProps>({
  displayName: 'Skeleton.TextLine',
  Component: ({width, backgroundColor, ...elemProps}, ref, Element) => (
    <Element
      ref={ref}
      {...handleCsProp(
        elemProps,
        skeletonTextLineStencil({
          width: typeof width === 'number' ? px2rem(width) : width,
          backgroundColor,
        })
      )}
    />
  ),
});

const createTextLines = (lineCount: number, backgroundColor?: string) => {
  const lines = new Array(lineCount).fill(null);

  return lines.map((_value, index) => (
    <Line
      key={index}
      backgroundColor={backgroundColor}
      width={index < lineCount - 1 || lineCount === 1 ? '100%' : '60%'}
    />
  ));
};

export const SkeletonText = createComponent('div')({
  displayName: 'Skeleton.Text',
  Component: ({backgroundColor, lineCount = 2, ...elemProps}: SkeletonTextProps, ref, Element) =>
    lineCount <= 0 ? null : (
      <Element ref={ref} {...handleCsProp(elemProps, textContainerStencil())}>
        {createTextLines(lineCount, backgroundColor)}
      </Element>
    ),
});
