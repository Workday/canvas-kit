import * as React from 'react';
import {colors, BrandingColor, CanvasColor} from '@workday/canvas-kit-react/tokens';
import {CanvasAppletIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {Svg, SvgProps, svgStencil} from './Svg';
import {createComponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

/** @deprecated */
export interface AppletIconStyles {
  /**
   * The icon color hue. Must use a member of the `AppletIcon.Colors` static enum.
   * @default AppletIcon.Colors.Blueberry
   */
  color?: BrandingColor;
}

/** @deprecated */
export const appletIconStyles = ({
  color = BrandingColor.Blueberry,
}: AppletIconStyles): CSSObject => {
  // Check if valid color
  if (
    !(Object.keys(BrandingColor) as (keyof typeof BrandingColor)[])
      .map(color => BrandingColor[color])
      .includes(color)
  ) {
    throw Error(`Color "${color}" not found`);
  }

  const colorNames: {[key: number]: CanvasColor} = {
    100: `${color}100` as CanvasColor,
    200: `${color}200` as CanvasColor,
    300: `${color}300` as CanvasColor,
    400: `${color}400` as CanvasColor,
    500: `${color}500` as CanvasColor,
  };

  return {
    '& .color-100': {
      fill: colors.frenchVanilla100,
    },
    '& .color-200': {
      fill: colors[colorNames[200]],
    },
    '& .color-300': {
      fill: colors[colorNames[300]],
    },
    '& .color-400': {
      fill: colors[colorNames[400]],
    },
    '& .color-400-alpha-20': {
      fill: colors[colorNames[400]],
    },
    '& .color-500': {
      fill: colors[colorNames[500]],
    },
  };
};

export interface AppletIconProps extends AppletIconStyles, Pick<SvgProps, 'shouldMirror' | 'cs'> {
  /**
   * The icon to display from `@workday/canvas-applet-icons-web`.
   */
  icon: CanvasAppletIcon;
  /**
   * The size of the AppletIcon in `px`.
   * @default 92
   */
  size?: number;
}

const appletIconStencil = createStencil({
  vars: {
    color: {
      200: base.blueberry200,
      300: base.blueberry300,
      400: base.blueberry400,
      500: base.blueberry500,
    },
  },
  base: ({color}) => ({
    '& .color-100': {
      fill: base.frenchVanilla100,
    },
    '& .color-200': {
      fill: color?.[200],
    },
    '& .color-300': {
      fill: color?.[300],
    },
    '& .color-400': {
      fill: color?.[400],
    },
    '& .color-400-alpha-20': {
      fill: color?.[400],
    },
    '& .color-500': {
      fill: color?.[500],
    },
  }),
});

/** @deprecated */
const getColorVars = (color: BrandingColor) => {
  const shades = [200, 300, 400, 500] as const;
  return shades.reduce((acc, shade) => {
    const token = `${color}${shade}`;
    // @ts-ignore
    acc[shade] = base[token as keyof typeof base];
    return acc;
  }, {} as any);
};

export const AppletIcon = createComponent('span')({
  displayName: 'AppletIcon',
  Component: ({size = 92, icon, color, ...elemProps}: AppletIconProps, ref, Element) => {
    return (
      <Svg
        src={icon}
        type={CanvasIconTypes.Applet}
        as={Element}
        ref={ref}
        {...handleCsProp(elemProps, [
          appletIconStencil({color: color ? getColorVars(color) : undefined}),
          {[svgStencil.vars.size]: px2rem(size)},
        ])}
      />
    );
  },
  subComponents: {
    Colors: BrandingColor,
  },
});
