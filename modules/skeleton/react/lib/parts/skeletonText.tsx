import * as React from 'react';
import styled from '@emotion/styled';
import {TEXT_BORDER_RADIUS} from './utils';
import canvas from '@workday/canvas-kit-react-core';

const TextContainer = styled('div')({
  marginBottom: canvas.spacing.m,
});

export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The number of "lines" that SkeletonText will display. If there is more than one line, the last line will have a width of `60%`.
   * @default 2
   */
  lineCount: number;
}

const Line = styled('div')<{
  width: number | string;
  height: number | string;
  borderRadius: number;
  backgroundColor: string;
}>(({width, height, borderRadius, backgroundColor}) => {
  return {
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    marginBottom: canvas.spacing.xs,
  };
});

export default class SkeletonText extends React.Component<SkeletonTextProps> {
  static defaultProps = {
    lineCount: 2,
  };

  render(): React.ReactNode {
    const {lineCount, ...elemProps} = this.props;

    if (lineCount <= 0) {
      return null;
    }

    return <TextContainer {...elemProps}>{this.createTextLines()}</TextContainer>;
  }

  private readonly createTextLines = () => {
    const {lineCount} = this.props;
    const lines = [];

    const lineProps = {
      backgroundColor: canvas.colors.soap200,
      borderRadius: TEXT_BORDER_RADIUS,
      height: '21px',
      width: '100%',
    };

    for (let i = 0; i < lineCount; i++) {
      lines.push(
        <Line
          key={i}
          {...lineProps}
          width={lineCount === 1 || i + 1 !== lineCount ? '100%' : '60%'}
        />
      );
    }
    return lines;
  };
}
