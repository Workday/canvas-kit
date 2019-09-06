import * as React from 'react';
import styled from 'react-emotion';
import canvas from '@workday/canvas-kit-react-core';

export const BOTTOM_MARGIN = 16;

const Shape = styled('div')<{
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}>(({width, height, borderRadius}) => {
  return {
    width: width ? width : '100%',
    height: height ? height : '100%',
    borderRadius: borderRadius ? borderRadius : 0,
    backgroundColor: canvas.colors.soap200,
    marginBottom: BOTTOM_MARGIN,
  };
});

export interface SkeletonShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}

export default class SkeletonShape extends React.Component<SkeletonShapeProps> {
  render(): React.ReactNode {
    const {width, height, borderRadius, ...elemProps} = this.props;

    return <Shape width={width} height={height} borderRadius={borderRadius} {...elemProps} />;
  }
}
