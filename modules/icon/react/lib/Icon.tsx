import * as React from 'react';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import Svg, {SvgProps} from './Svg';

export interface IconProps extends SvgProps {
  src: CanvasIcon;
  size?: number;
  type: CanvasIconTypes.Accent | CanvasIconTypes.Applet | CanvasIconTypes.System;
}

export default class Icon extends React.Component<IconProps> {
  static defaultProps = {
    elemProps: {},
  };

  public render() {
    const {src, size, styles, type, elemProps} = this.props;

    const iconStyles = [];

    if (styles) {
      iconStyles.push(styles);
    }

    if (size) {
      iconStyles.push({
        '& svg': {
          width: size,
          height: size,
        },
      });
    }

    return <Svg src={src} type={type} elemProps={elemProps} styles={iconStyles} />;
  }
}
