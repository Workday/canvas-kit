import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {Svg, SvgProps, svgStencil} from './Svg';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {Image} from './Image';

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

export interface GraphicProps extends GraphicStyles, Pick<SvgProps, 'shouldMirror' | 'cs'> {
  /**
   * The graphic to display from `@workday/canvas-graphics-web`.
   */
  src: CanvasGraphic | string;
}

type GraphicsImageProps = ExtractProps<typeof Image>;

export type GraphicsImageOrSvgProps = GraphicProps | GraphicsImageProps;

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

type GraphicImageProps = ExtractProps<typeof Image>;

/**
 * Returns an overloaded functional component that uses Graphic props by default.
 */
type GraphicOverload = {
  (props: {src: CanvasGraphic} & GraphicProps & {ref?: React.Ref<HTMLElement>}): React.ReactElement;
  (
    props: {src: string} & GraphicImageProps & {ref?: React.Ref<HTMLImageElement>}
  ): React.ReactElement;
};

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

export const Graphic: GraphicOverload = createComponent('span')({
  displayName: 'Graphic',
  Component: ({src, ...elemProps}: GraphicProps, ref, Element) => {
    return (
      <>
        {typeof src === 'string' && typeof src !== 'object' ? (
          <Image as={'img'} src={src} {...handleCsProp(elemProps)} />
        ) : (
          <Svg
            type={CanvasIconTypes.Graphic}
            as={Element}
            ref={ref}
            src={src}
            {...handleCsProp(
              elemProps,
              graphicStencil({
                grow: elemProps.grow,
                width:
                  typeof elemProps.width === 'number' ? px2rem(elemProps.width) : elemProps.width,
                height:
                  typeof elemProps.height === 'number'
                    ? px2rem(elemProps.height)
                    : elemProps.height,
              })
            )}
          />
        )}
      </>
    );
  },
});
