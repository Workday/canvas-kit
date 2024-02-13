import * as React from 'react';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';

import {Svg, SvgProps} from './Svg';

export interface IconProps extends SvgProps {
  src: CanvasIcon;
  size?: number | string;
  type: CanvasIconTypes.Accent | CanvasIconTypes.Applet | CanvasIconTypes.System;
}

const iconStencil = createStencil({
  vars: {
    size: '0.75rem',
  },
  base: ({size}) => ({
    height: size,
    width: size,
  }),
});

export const Icon = createComponent('span')({
  displayName: 'Icon',
  Component: ({src, size, type, ...elemProps}: IconProps, ref, Element) => {
    return (
      <Svg
        src={src}
        type={type}
        as={Element}
        {...mergeStyles(
          elemProps,
          iconStencil({size: typeof size === 'number' ? px2rem(size) : size})
        )}
        ref={ref}
      />
    );
  },
});
