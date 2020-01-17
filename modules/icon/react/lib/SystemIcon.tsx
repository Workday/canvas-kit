import * as React from 'react';
import {iconColors} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/core';
import Icon from './Icon';
import {SpanProps} from './types';

export interface SystemIconStyles {
  /**
   * The `.wd-icon-accent` color. This will override `color`.
   */
  accent?: string;
  /**
   * The `.wd-icon-accent` color on hover. This will override `colorHover`.
   */
  accentHover?: string;
  /**
   * The `.wd-icon-background` color.
   * @default transparent
   */
  background?: string;
  /**
   * The `.wd-icon-background` color on hover.
   * @default transparent
   */
  backgroundHover?: string;
  /**
   * The icon color. This will define `accent` and `fill`. `accent` and `fill` will override this property if defined
   * @default colors.primary.iconStandard
   */
  color?: string;
  /**
   * The hover color of the icon. This will define `accentHover` and `fillHover`
   * @default colors.primary.iconHover
   */
  colorHover?: string;
  /**
   * The `.wd-icon-fill` color. This will override `color`
   */
  fill?: string;
  /**
   * The `.wd-icon-fill` color on hover. This will override `colorHover`
   */
  fillHover?: string;
}

export interface SystemIconProps extends SystemIconStyles {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the icon in `px`
   */
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
