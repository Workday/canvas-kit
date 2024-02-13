import * as React from 'react';
import {iconColors} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {Icon, IconProps} from './Icon';
import {createComponent, getColor} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStyles, cssVar, createVars} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

export interface SystemIconStyles {
  /**
   * The accent color of the SystemIcon. This overrides `color`.
   */
  accent?: string;
  /**
   * The accent color of the SystemIcon on hover. This overrides `colorHover`.
   */
  accentHover?: string;
  /**
   * The background color of the SystemIcon.
   * @default transparent
   */
  background?: string & {};
  /**
   * The background color of the SystemIcon on hover.
   * @default transparent
   */
  backgroundHover?: string;
  /**
   * The color of the SystemIcon. This defines `accent` and `fill`. `color` may be overwritten by `accent` and `fill`.
   * @default base.licorice200
   */
  color?: string;
  /**
   * The hover color of the SystemIcon. This defines `accentHover` and `fillHover`. `colorHover` may be overwritten by `accentHover` and `fillHover`.
   * @default base.licorice200
   */
  colorHover?: string;
  /**
   * The fill color of the SystemIcon. This overrides `color`.
   */
  fill?: string;
  /**
   * The fill color of the SystemIcon on hover. This overrides `colorHover`.
   */
  fillHover?: string;
}

export interface SystemIconProps
  extends SystemIconStyles,
    Omit<IconProps, 'src' | 'fill' | 'type' | 'background' | 'color'> {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIcon in `px`.
   */
  size?: number | string | undefined;
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

export const systemIconVars = {
  default: createVars('accent', 'background', 'color', 'fill'),
  hover: createVars('accent', 'background', 'color', 'fill'),
};

export const systemIcon = createStyles({
  '& .wd-icon-fill': {
    fill: cssVar(systemIconVars.default.fill, systemIconVars.default.color),
  },
  ':hover .wd-icon-fill': {
    fill: cssVar(systemIconVars.hover.fill, systemIconVars.hover.color),
  },
  '& .wd-icon-accent, & .wd-icon-accent2': {
    fill: cssVar(systemIconVars.default.accent, systemIconVars.default.color),
  },
  ':hover .wd-icon-accent, :hover .wd-icon-accent2': {
    fill: cssVar(systemIconVars.hover.accent, systemIconVars.hover.color),
  },
  '& .wd-icon-background': {
    fill: systemIconVars.default.background,
  },
  ':hover .wd-icon-background': {
    fill: systemIconVars.hover.background,
  },
});

/**
 * Wrap a CSS variable in `var()` if it's unwrapped.
 * It returns the original value if it's not a CSS variable or undefined
 */
function wrapVar(value?: string) {
  return value?.startsWith('--') ? cssVar(value) : value;
}

export const SystemIcon = createComponent('span')({
  displayName: 'SystemIcon',
  Component: (
    {
      background = 'transparent',
      backgroundHover = 'transparent',
      color = base.licorice200,
      colorHover = base.licorice200,
      icon,
      accent,
      accentHover,
      fill,
      fillHover,
      ...elemProps
    }: SystemIconProps,
    ref,
    Element
  ) => {
    return (
      <Icon
        as={Element}
        src={icon}
        type={CanvasIconTypes.System}
        ref={ref}
        {...mergeStyles(elemProps, [
          systemIcon,
          systemIconVars.default({
            accent: wrapVar(accent),
            background: wrapVar(background),
            color: wrapVar(color),
            fill: wrapVar(fill),
          }),
          systemIconVars.hover({
            accent: wrapVar(accent),
            background: wrapVar(background),
            color: wrapVar(color),
            fill: wrapVar(fill),
          }),
        ])}
      />
    );
  },
});
