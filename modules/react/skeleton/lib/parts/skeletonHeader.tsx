import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {borderRadius, colors} from '@workday/canvas-kit-react/tokens';

import {SkeletonShape} from './skeletonShape';

export interface SkeletonHeaderProps {
  /**
   * The background color of the skeleton
   * @default soap200
   */
  backgroundColor?: string;
  /**
   * The height of the shape in `px` or `%`.
   * @default 28px
   */
  height?: number | string;
  /**
   *  The width of the shape in `px` or `%`.
   * @default 100%
   */
  width?: number | string;
}

export const SkeletonHeader = createComponent('div')({
  displayName: 'Skeleton.Header',
  Component: (
    {
      backgroundColor = colors.soap200,
      height = '28px',
      width = '100%',
      ...elemProps
    }: SkeletonHeaderProps,
    ref,
    Element
  ) => (
    <SkeletonShape
      ref={ref}
      as={Element}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius.s}
      height={height}
      width={width}
      {...elemProps}
    />
  ),
});
