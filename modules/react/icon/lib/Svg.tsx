import {CSSObject} from '@emotion/core';
import * as React from 'react';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {validateIconType} from './utils';
import {styled} from '@workday/canvas-kit-react/common';

export interface SvgProps extends React.HTMLAttributes<HTMLSpanElement> {
  src: CanvasIcon;
  styles?: CSSObject;
  type: CanvasIconTypes;
  iconRef?: React.Ref<HTMLSpanElement>;
  /**
   * If set to `true`, transform the SVG's x-axis to mirror the graphic
   * @default false
   */
  shouldMirror?: boolean;
}

const StyledIconSpan = styled('span')<Pick<SvgProps, 'shouldMirror' | 'styles'>>(
  ({shouldMirror, styles}) => ({
    display: 'inline-block',
    '> svg': {display: 'block'},
    transform: shouldMirror ? 'scaleX(-1)' : undefined,
    ...styles,
  })
);

export default class Svg extends React.Component<SvgProps> {
  public render() {
    const {src, type, iconRef, ...elemProps} = this.props;

    // Validation for JS
    try {
      validateIconType(src, type);
    } catch (e) {
      console.error(e);
      return null;
    }

    return (
      <StyledIconSpan {...elemProps} dangerouslySetInnerHTML={{__html: src.svg}} ref={iconRef} />
    );
  }
}
