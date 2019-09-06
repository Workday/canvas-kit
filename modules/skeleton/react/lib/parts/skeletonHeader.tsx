import * as React from 'react';
import SkeletonShape from './skeletonShape';
import {TEXT_BORDER_RADIUS} from './utils';

export default class SkeletonHeader extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
  render(): React.ReactNode {
    const {...elemProps} = this.props;

    const lineProps = {
      borderRadius: TEXT_BORDER_RADIUS,
      height: '28px',
      width: '100%',
    };

    return <SkeletonShape {...lineProps} {...elemProps} />;
  }
}
