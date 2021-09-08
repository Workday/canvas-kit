import * as React from 'react';
import {CSSObject} from '@emotion/core';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import Svg, {SvgProps} from './Svg';

export interface IconProps extends SvgProps {
  src: CanvasIcon;
  size?: number;
  type: CanvasIconTypes.Accent | CanvasIconTypes.Applet | CanvasIconTypes.System;
  iconRef?: React.Ref<HTMLSpanElement>;
}

export default class Icon extends React.Component<IconProps> {
  public render() {
    const {src, size, styles, type, iconRef, shouldMirror, ...elemProps} = this.props;

    const iconStyles: CSSObject = {...styles};

    if (size) {
      iconStyles['& svg'] = {
        width: size,
        height: size,
      };
    }

    return (
      <Svg
        src={src}
        type={type}
        shouldMirror={shouldMirror}
        {...elemProps}
        styles={iconStyles}
        iconRef={iconRef}
      />
    );
  }
}
