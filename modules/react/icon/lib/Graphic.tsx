import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import Svg, {SvgProps} from './Svg';
import {createComponent} from '@workday/canvas-kit-react/common';

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

const Graphic = createComponent('span')({
  displayName: 'Graphic',
  Component: (
    {grow = false, src, width, height, shouldMirror, ...elemProps}: GraphicProps,
    ref,
    Element
  ) => {
    return (
      <Svg
        src={src}
        styles={graphicStyles({width, height, grow})}
        type={CanvasIconTypes.Graphic}
        as={Element}
        ref={ref}
        shouldMirror={shouldMirror}
        {...elemProps}
      />
    );
  },
});

export default Graphic;
