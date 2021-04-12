import * as React from 'react';
import styled from '@emotion/styled';
import canvas from '@workday/canvas-kit-react/tokens';

export const BOTTOM_MARGIN = 16;

const Shape = styled('div')<{
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  backgroundColor?: string;
}>(({width, height, borderRadius, backgroundColor}) => {
  return {
    width: width ? width : '100%',
    height: height ? height : '100%',
    borderRadius: borderRadius ? borderRadius : 0,
    backgroundColor,
    marginBottom: BOTTOM_MARGIN,
  };
});

export interface SkeletonShapeProps extends React.HTMLAttributes<HTMLDivElement> {
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

export default class SkeletonShape extends React.Component<SkeletonShapeProps> {
  render(): React.ReactNode {
    const {
      width,
      height,
      borderRadius,
      backgroundColor = canvas.colors.soap200,
      ...elemProps
    } = this.props;

    return (
      <Shape
        width={width}
        height={height}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        {...elemProps}
      />
    );
  }
}
