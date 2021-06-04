import * as React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import canvas from '@workday/canvas-kit-react/tokens';

import {TEXT_BORDER_RADIUS} from './utils';

const TextContainer = styled('div')<StyledType>({
  marginBottom: canvas.space.m,
});

export interface SkeletonTextProps {
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

const Line = styled('div')<
  {
    width: number | string;
    backgroundColor: string;
  } & StyledType
>(({backgroundColor, width}) => {
  return {
    backgroundColor,
    width,
    borderRadius: TEXT_BORDER_RADIUS,
    height: '21px',
    marginBottom: canvas.space.xs,
  };
});

const createTextLines = (lineCount: number, backgroundColor: string) => {
  const lines = new Array(lineCount).fill(null);

  return lines.map((_value, index) => (
    <Line
      key={index}
      backgroundColor={backgroundColor}
      width={index < lineCount - 1 || lineCount === 1 ? '100%' : '60%'}
    />
  ));
};

const SkeletonText = createComponent('div')({
  displayName: 'Skeleton.Text',
  Component: (
    {backgroundColor = canvas.colors.soap200, lineCount = 2, ...elemProps}: SkeletonTextProps,
    ref,
    Element
  ) =>
    lineCount <= 0 ? null : (
      <TextContainer ref={ref} as={Element} {...elemProps}>
        {createTextLines(lineCount, backgroundColor)}
      </TextContainer>
    ),
});

export default SkeletonText;
