import * as React from 'react';
import styled from '@emotion/styled';

import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {px2rem} from '@workday/canvas-kit-styling';

export interface SkeletonShapeProps {
  /**
   *  The width of the shape in `px` or `%`.
   * @default 100%
   */
  width?: number | string;
  /**
   * The height of the shape in `px` or `%`.
   * @default 100%
   */
  height?: number | string;
  /**
   * The borderRadius of the shape in `px` or `%`.
   * @default 0
   */
  borderRadius?: number | string;
  /**
   * The background color of the skeleton
   * @default soap200
   */
  backgroundColor?: string;
}

const Shape = styled('div')<SkeletonShapeProps & StyledType>(
  ({backgroundColor, borderRadius, height, width}) => ({
    backgroundColor,
    borderRadius,
    outline: `${px2rem(1)} solid transparent`,
    outlineOffset: `-${px2rem(1)}`,
    height,
    width,
    marginBottom: space.s,
  })
);

export const SkeletonShape = createComponent('div')({
  displayName: 'Skeleton.Shape',
  Component: (
    {
      backgroundColor = colors.soap200,
      borderRadius = 0,
      height = '100%',
      width = '100%',
      ...elemProps
    }: SkeletonShapeProps,
    ref,
    Element
  ) => (
    <Shape
      ref={ref}
      as={Element}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      height={height}
      width={width}
      {...elemProps}
    />
  ),
});
