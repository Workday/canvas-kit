// import {CSSObject} from '@emotion/styled';
import * as React from 'react';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {validateIconType} from './utils';
import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';

export interface SvgProps extends BoxProps {
  src: CanvasIcon;
  type: CanvasIconTypes;
  /**
   * If set to `true`, transform the SVG's x-axis to mirror the graphic
   * @default false
   */
  shouldMirror?: boolean;
}

const svgStencil = createStencil({
  base: {
    baxSizing: 'border-box',
    display: 'inline-block',
    '> svg': {display: 'block'},
  },
  modifiers: {
    shouldMirror: {
      true: {
        transform: 'scaleX(-1)',
      },
    },
  },
});

export const Svg = createComponent('span')({
  displayName: 'Svg',
  Component: ({shouldMirror, src, type, ...elemProps}: SvgProps, ref, Element) => {
    try {
      validateIconType(src, type);
    } catch (e) {
      console.error(e);
      return null;
    }

    return (
      <Element
        ref={ref}
        dangerouslySetInnerHTML={{__html: src.svg}}
        {...mergeStyles(elemProps, svgStencil({shouldMirror}))}
      />
    );
  },
});
