import * as React from 'react';
import SkeletonShape from './skeletonShape';
import {TEXT_BORDER_RADIUS} from './utils';

export default class SkeletonHeader extends React.Component {
  render(): React.ReactNode {
    const lineProps = {
      borderRadius: TEXT_BORDER_RADIUS,
      height: '28px',
      width: '100%',
    };

    return <SkeletonShape {...lineProps} />;
  }
}
