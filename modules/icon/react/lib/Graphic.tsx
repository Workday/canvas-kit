import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from 'create-emotion';
import Svg from './Svg';
import {SpanProps} from './types';

export interface GraphicStyles {
  width?: number | string;
  height?: number | string;
  grow?: boolean;
}

export interface GraphicProps extends GraphicStyles {
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
