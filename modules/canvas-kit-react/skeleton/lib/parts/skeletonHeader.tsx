import canvas from '@workday/canvas-kit-react-core';
import * as React from 'react';
import SkeletonShape from './skeletonShape';
import {TEXT_BORDER_RADIUS} from './utils';

export interface SkeletonHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The background color of the skeleton
   * @default soap200
   */
  backgroundColor?: string;
}

export default class SkeletonHeader extends React.Component<SkeletonHeaderProps> {
  render(): React.ReactNode {
    const {backgroundColor = canvas.colors.soap200, ...elemProps} = this.props;

    const lineProps = {
      backgroundColor,
      borderRadius: TEXT_BORDER_RADIUS,
      height: '28px',
      width: '100%',
    };

    return <SkeletonShape {...lineProps} {...elemProps} />;
  }
}
