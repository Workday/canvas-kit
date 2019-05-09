import * as React from 'react';
import {cx, css} from 'react-emotion';
import {Interpolation} from 'emotion';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {SpanProps} from './types';
import {validateIconType} from './utils';

export interface SvgProps {
  src: CanvasIcon;
  styles?: Interpolation;
  elemProps: SpanProps;
  type: CanvasIconTypes;
}

export default class Svg extends React.Component<SvgProps> {
  static defaultProps = {
    elemProps: {},
  };

  public render() {
    const {src, styles, type, elemProps} = this.props;

    // Validation for JS
    try {
      validateIconType(src, type);
    } catch (e) {
      console.error(e);
      return null;
    }

    const assetStyles = [{display: 'inline-block', '& svg': {display: 'block'}}, styles];
    const assetStyle = css(assetStyles);

    return (
      <span
        {...elemProps}
        dangerouslySetInnerHTML={{__html: src.svg}}
        // Need to combine iconStyle with the className prop, otherwise we'll clobber it
        // (we'll need to do something like this for each HTML <span> prop we explicitly set in this component)
        className={cx(assetStyle, elemProps.className)}
      />
    );
  }
}
