/** @jsx jsx */
import {CSSObject, jsx, ClassNames} from '@emotion/core';
import * as React from 'react';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {validateIconType} from './utils';

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

export default class Svg extends React.Component<SvgProps> {
  public render() {
    const {src, styles, type, iconRef, shouldMirror, ...elemProps} = this.props;

    // Validation for JS
    try {
      validateIconType(src, type);
    } catch (e) {
      console.error(e);
      return null;
    }

    return (
      <ClassNames>
        {({css, cx}) => (
          <span
            {...elemProps}
            dangerouslySetInnerHTML={{__html: src.svg}}
            // Need to combine iconStyle with the className prop, otherwise we'll clobber it
            // (we'll need to do something like this for each HTML <span> prop we explicitly set in this component)
            className={cx(
              css(styles, {
                display: 'inline-block',
                '& svg': {display: 'block'},
                transform: shouldMirror ? 'scaleX(-1)' : undefined,
              }),
              elemProps.className
            )}
            ref={iconRef}
          />
        )}
      </ClassNames>
    );
  }
}
