import * as React from 'react';
import {iconColors} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {createComponent, getColor} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {Svg, SvgProps, svgStencil} from './Svg';

/** @deprecated */
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
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
}

export interface SystemIconProps
  extends SystemIconStyles,
    Omit<SvgProps, 'src' | 'type' | 'fill' | 'background' | 'color'> {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIcon in `px`.
   */
  size?: number | string;
}

/** @deprecated */
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

export const systemIconStencil = createStencil({
  vars: {
    fillColor: `${base.licorice200}`,
    accentColor: `${base.licorice200}`,
    backgroundColor: 'transparent',
  },
  base: ({accentColor, backgroundColor, fillColor}) => ({
    '& .wd-icon-fill': {
      fill: fillColor,
    },
    '& .wd-icon-accent, & .wd-icon-accent2': {
      fill: accentColor,
    },
    '& .wd-icon-background': {
      fill: backgroundColor,
    },
  }),
});

/**
 * @deprecated Function should be removed with hover color props
 * */
const getHoverStyles = ({
  accentHover,
  colorHover,
  fillHover,
  backgroundHover,
}: Pick<
  SystemIconStyles,
  'accentHover' | 'backgroundHover' | 'colorHover' | 'fillHover'
>): /* CSProps['cs'] should replace any after stencil styles fixed */ any => {
  const hoverFillColor = fillHover || colorHover;
  const hoverAccentColor = accentHover || colorHover;

  if (hoverFillColor) {
    return {
      '&:hover': {
        [systemIconStencil.vars.fillColor]: cssVar(hoverFillColor),
      },
    };
  }

  if (hoverAccentColor) {
    return {
      '&:hover': {
        [systemIconStencil.vars.accentColor]: cssVar(hoverAccentColor),
      },
    };
  }

  if (backgroundHover) {
    return {
      '&:hover': {
        [systemIconStencil.vars.backgroundColor]: cssVar(backgroundHover),
      },
    };
  }

  return '';
};

export const SystemIcon = createComponent('span')({
  displayName: 'SystemIcon',
  Component: (
    {
      background,
      backgroundHover,
      color,
      colorHover,
      icon,
      accent,
      accentHover,
      fill,
      fillHover,
      size,
      ...elemProps
    }: SystemIconProps,
    ref,
    Element
  ) => {
    return (
      <Svg
        as={Element}
        src={icon}
        type={CanvasIconTypes.System}
        ref={ref}
        {...handleCsProp(elemProps, [
          systemIconStencil({
            fillColor: fill || color,
            accentColor: accent || color,
            backgroundColor: background,
          }),
          getHoverStyles({
            accentHover,
            backgroundHover,
            colorHover,
            fillHover,
          }),
          {[svgStencil.vars.size]: typeof size === 'number' ? px2rem(size) : size},
        ])}
      />
    );
  },
});
