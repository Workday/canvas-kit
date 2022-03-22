import * as React from 'react';
import {CSSObject} from '@emotion/styled';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import Svg, {SvgProps} from './Svg';
import {createComponent} from '../../common';

export interface IconProps extends SvgProps {
  src: CanvasIcon;
  size?: number | string;
  type: CanvasIconTypes.Accent | CanvasIconTypes.Applet | CanvasIconTypes.System;
}

export const Icon = createComponent('span')({
  displayName: 'Icon',
  Component: ({src, size, styles, type, shouldMirror, ...elemProps}: IconProps, ref, Element) => {
    const iconStyles: CSSObject = {...styles};

    if (size) {
      iconStyles['& svg'] = {
        ...((iconStyles['& svg'] as CSSObject) ?? {}),
        width: size,
        height: size,
      };
    }

    return (
      <Svg
        src={src}
        type={type}
        shouldMirror={shouldMirror}
        as={Element}
        {...elemProps}
        ref={ref}
        styles={iconStyles}
      />
    );
  },
});

export default Icon;
