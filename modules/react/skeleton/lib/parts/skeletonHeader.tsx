import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import canvas from '@workday/canvas-kit-react/tokens';

import SkeletonShape from './skeletonShape';
import {TEXT_BORDER_RADIUS} from './utils';

export interface SkeletonHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
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

const SkeletonHeader = createComponent('div')({
  displayName: 'Skeleton.Header',
  Component: (
    {
      backgroundColor = canvas.colors.soap200,
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
      borderRadius={TEXT_BORDER_RADIUS}
      height={height}
      width={width}
      {...elemProps}
    />
  ),
});

export default SkeletonHeader;
