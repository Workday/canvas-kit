import * as React from 'react';
import styled from '@emotion/styled';
import {TEXT_BORDER_RADIUS} from './utils';
import canvas from '@workday/canvas-kit-react/tokens';

const TextContainer = styled('div')({
  marginBottom: canvas.space.m,
});

export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The number of "lines" that SkeletonText will display. If there is more than one line, the last line will have a width of `60%`.
   * @default 2
   */
  lineCount?: number;
  /**
   * The background color of the skeleton
   * @default soap200
   */
  backgroundColor?: string;
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
    marginBottom: canvas.space.xs,
  };
});

export default class SkeletonText extends React.Component<SkeletonTextProps> {
  render(): React.ReactNode {
    const {lineCount = 2, backgroundColor = canvas.colors.soap200, ...elemProps} = this.props;

    if (lineCount <= 0) {
      return null;
    }

    return (
      <TextContainer {...elemProps}>
        {this.createTextLines(lineCount, backgroundColor)}
      </TextContainer>
    );
  }

  private readonly createTextLines = (lineCount: number, backgroundColor: string) => {
    const lines = [];

    const lineProps = {
      backgroundColor,
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
