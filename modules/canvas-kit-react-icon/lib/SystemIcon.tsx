import * as React from 'react';
import {iconColors} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from 'create-emotion';
import Icon from './Icon';
import {SpanProps} from './types';

export interface SystemIconStyles {
  accent?: string;
  accentHover?: string;
  background?: string;
  backgroundHover?: string;
  color?: string;
  colorHover?: string;
  fill?: string;
  fillHover?: string;
}

export interface SystemIconProps extends SystemIconStyles {
  icon: CanvasSystemIcon;
  size?: number;
}

export const systemIconStyles = ({
  accent,
  accentHover,
  background = 'transparent',
  backgroundHover = 'transparent',
  color = iconColors.standard,
  colorHover = iconColors.hover,
  fill,
  fillHover,
}: SystemIconStyles): CSSObject => ({
  '& .wd-icon-fill': {
    fill: fill || color,
  },
  ':hover .wd-icon-fill': {
    fill: fillHover || colorHover,
  },
  '& .wd-icon-accent': {
    fill: accent || color,
  },
  ':hover .wd-icon-accent': {
    fill: accentHover || colorHover,
  },
  '& .wd-icon-background': {
    fill: background,
  },
  ':hover .wd-icon-background': {
    fill: backgroundHover,
  },
});

export default class SystemIcon extends React.Component<SpanProps & SystemIconProps> {
  render() {
    const {
      icon,
      accent,
      accentHover,
      background,
      backgroundHover,
      color,
      colorHover,
      fill,
      fillHover,
      size,
      ...elemProps
    } = this.props;

    const style = systemIconStyles({
      accent,
      accentHover,
      background,
      backgroundHover,
      color,
      colorHover,
      fill,
      fillHover,
    });

    return (
      <Icon
        src={icon}
        type={CanvasIconTypes.System}
        size={size}
        styles={style}
        elemProps={elemProps}
      />
    );
  }
}
