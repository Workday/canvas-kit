import * as React from 'react';
import {iconColors} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {Icon, IconProps} from './Icon';
import {createComponent} from '@workday/canvas-kit-react/common';
import {getColor} from './utils';
import {SystemPropValues} from '@workday/canvas-kit-react/layout';

export interface SystemIconStyles {
  /**
   * The accent color of the SystemIcon. This overrides `color`.
   */
  accent?: SystemPropValues['color'];
  /**
   * The accent color of the SystemIcon on hover. This overrides `colorHover`.
   */
  accentHover?: SystemPropValues['color'];
  /**
   * The background color of the SystemIcon.
   * @default transparent
   */
  background?: SystemPropValues['color'];
  /**
   * The background color of the SystemIcon on hover.
   * @default transparent
   */
  backgroundHover?: SystemPropValues['color'];
  /**
   * The color of the SystemIcon. This defines `accent` and `fill`. `color` may be overriden by `accent` and `fill`.
   * @default iconColors.standard
   */
  color?: SystemPropValues['color'];
  /**
   * The hover color of the SystemIcon. This defines `accentHover` and `fillHover`. `colorHover` may be overriden by `accentHover` and `fillHover`.
   * @default iconColors.hover
   */
  colorHover?: SystemPropValues['color'];
  /**
   * The fill color of the SystemIcon. This overrides `color`.
   */
  fill?: SystemPropValues['color'];
  /**
   * The fill color of the SystemIcon on hover. This overrides `colorHover`.
   */
  fillHover?: SystemPropValues['color'];
}

export interface SystemIconProps
  extends SystemIconStyles,
    Omit<IconProps, 'src' | 'fill' | 'type'> {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIcon in `px`.
   */
  size?: number | string | undefined;
  className?: string; //investigate more
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
    fill: getColor(fill) || getColor(color),
  },
  ':hover .wd-icon-fill': {
    fill: getColor(fillHover) || getColor(colorHover),
  },
  '& .wd-icon-accent, & .wd-icon-accent2': {
    fill: getColor(accent) || getColor(color),
  },
  ':hover .wd-icon-accent, :hover .wd-icon-accent2': {
    fill: getColor(accentHover) || getColor(colorHover),
  },
  '& .wd-icon-background': {
    fill: getColor(background),
  },
  ':hover .wd-icon-background': {
    fill: getColor(backgroundHover),
  },
});

export const SystemIcon = createComponent('span')({
  displayName: 'SystemIcon',
  Component: (
    {
      background = 'transparent',
      backgroundHover = 'transparent',
      color = iconColors.standard,
      colorHover = iconColors.hover,
      icon,
      accent,
      accentHover,
      fill,
      fillHover,
      size,
      shouldMirror,
      ...elemProps
    }: SystemIconProps,
    ref,
    Element
  ) => {
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
        as={Element}
        shouldMirror={shouldMirror}
        ref={ref}
        styles={style}
        {...elemProps}
      />
    );
  },
});
