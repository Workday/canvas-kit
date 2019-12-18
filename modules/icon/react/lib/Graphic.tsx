import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/core';
import Svg from './Svg';
import {SpanProps} from './types';

export interface GraphicStyles {
  /**
   *  The graphic width in `px`. `width` takes precedence over `height` in order to preserve the graphic's
   * @default width of graphic
   */
  width?: number | string;
  /**
   * The graphic height in `px`. If set, `width` will be set to `100%`.
   * @default height of graphic
   */
  height?: number | string;
  /**
   * If true, expands graphic to fit container. `grow` takes precedence over both `width` and `height`.
   * @default false
   */
  grow?: boolean;
}

export interface GraphicProps extends GraphicStyles {
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

export default class Graphic extends React.Component<SpanProps & GraphicProps> {
  render() {
    const {src, width, height, grow, ...elemProps} = this.props;

    return (
      <Svg
        src={src}
        styles={graphicStyles({width, height, grow})}
        type={CanvasIconTypes.Graphic}
        elemProps={elemProps}
      />
    );
  }
}
