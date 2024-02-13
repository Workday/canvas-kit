import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {Svg, SvgProps} from './Svg';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';

export interface GraphicStyles {
  /**
   * The width of the Graphic in `px`. The Graphic's `width` takes precedence over its `height` in order to preserve its proportions.
   * @default width of graphic
   */
  width?: number | string;
  /**
   * The height of the Graphic in `px`. If the Graphic's `height` is set, its `width` will be set to `100%`.
   * @default height of graphic
   */
  height?: number | string;
  /**
   * If true, expand the Graphic to fit its container. `grow` takes precedence over both `width` and `height`.
   * @default false
   */
  grow?: boolean;
}

export interface GraphicProps extends GraphicStyles, Pick<SvgProps, 'shouldMirror'> {
  /**
   * The graphic to display from `@workday/canvas-graphics-web`.
   */
  src: CanvasGraphic;
}

/**
 * @deprecated
 *
 */
export const graphicStyles = ({width, height, grow}: GraphicStyles): CSSObject => {
  if (grow) {
    return {
      width: '100%',
      '& svg': {
        width: '100%',
        height: '100%',
      },
    };
  }

  if (width) {
    return {
      '& svg': {
        width,
        height: '100%',
      },
    };
  } else if (height) {
    return {
      '& svg': {
        height,
        width: '100%',
      },
    };
  }

  return {};
};

/**
 * Should we export this stencil?
 */
const graphicStencil = createStencil({
  vars: {
    height: '100%',
    width: '100%',
  },
  base: ({height, width}) => ({
    '& svg': {
      height,
      width,
    },
  }),
  modifiers: {
    grow: {
      true: {
        width: '100%',
        '& svg': {
          width: '100%',
          height: '100%',
        },
      },
    },
  },
});

function convertSize(size: string | number) {
  return typeof size === 'number' ? px2rem(size) : size;
}

export const Graphic = createComponent('span')({
  displayName: 'Graphic',
  Component: (
    {grow, width = '100%', height = '100%', ...elemProps}: GraphicProps,
    ref,
    Element
  ) => {
    return (
      <Svg
        type={CanvasIconTypes.Graphic}
        as={Element}
        ref={ref}
        {...mergeStyles(
          elemProps,
          graphicStencil({grow, height: convertSize(height), width: convertSize(width)})
        )}
      />
    );
  },
});
