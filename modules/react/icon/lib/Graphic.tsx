import * as React from 'react';
import {CSSObject} from '@emotion/styled';
import {createComponent} from '@workday/canvas-kit-react/common';
import {svgStencil} from './Svg';
import {createStencil, CSProps, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {BoxProps} from '../../layout';

/**
 * @deprecated Interface `GraphicStyles` will be removed in a future version. `grow` prop will be moved inside `GraphicProps`.
 */
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

export interface GraphicProps extends CSProps {
  height?: number | string;
  width?: number | string;
  grow?: boolean;
  src: {
    svg?: string;
    url?: string;
  };
}

/**
 * @deprecated `graphicStyles` will be removed in in a future version as a part of implementation of stencils and new tokens. Consider to use `graphicStencil` instead.
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
 * @deprecated `graphicStencil` will be removed in a future version. Use `graphicImageStencil` instead.
 */
export const graphicStencil = createStencil({
  extends: svgStencil,
  base: {},
  modifiers: {
    grow: {
      true: {
        width: '100%',
        [svgStencil.vars.width]: '100%',
      },
    },
  },
});

export const graphicImageStencil = createStencil({
  vars: {
    width: '',
    height: '',
  },
  base: ({width, height}) => ({
    '& [data-part="graphic-img"]': {
      width,
      height,
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
  modifiers: {
    grow: {
      true: {
        '& [data-part="graphic-img"]': {
          width: '100%',
        },
      },
    },
  },
});

export const Graphic = createComponent('span')({
  displayName: 'Graphic',
  Component: ({grow = false, width, height, src, ...elemProps}: GraphicProps, ref, Element) => {
    return (
      <Element
        ref={ref}
        {...handleCsProp(
          elemProps,
          graphicImageStencil({
            grow,
            width: typeof width === 'number' ? px2rem(width) : width,
            height: typeof height === 'number' ? px2rem(height) : height,
          })
        )}
      >
        <img
          data-part="graphic-img"
          src={src.svg ? `data:image/svg+xml;base64,${btoa(src.svg)}` : src.url}
        />
      </Element>
    );
  },
});
