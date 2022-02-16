import {CSSObject} from '@emotion/styled';
import * as React from 'react';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {validateIconType} from './utils';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export interface SvgProps extends BoxProps {
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

const StyledIconSpan = styled(Box)<StyledType & Pick<SvgProps, 'shouldMirror' | 'styles'>>(
  {
    display: 'inline-block',
    '> svg': {display: 'block'},
  },
  ({shouldMirror, styles}) => ({
    transform: shouldMirror ? 'scaleX(-1)' : undefined,
    ...styles,
  })
);

export const Svg = createComponent('span')({
  displayName: 'Svg',
  Component: ({src, type, iconRef, ...elemProps}: SvgProps, Element) => {
    try {
      validateIconType(src, type);
    } catch (e) {
      console.error(e);
      return null;
    }
    return <StyledIconSpan as="span" dangerouslySetInnerHTML={{__html: src.svg}} {...elemProps} />;
  },
});
