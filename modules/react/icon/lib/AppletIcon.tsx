import {colors, BrandingColor, CanvasColor} from '@workday/canvas-kit-react/tokens';
import {CanvasAppletIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {Svg, SvgProps, svgStencil} from './Svg';
import {createComponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, createStencil, px2rem, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

/**
 * @deprecated Interface `AppletIconStyles` will be removed in a future version. All props will be moved inside `AppletIconProps`.
 */
export interface AppletIconStyles {
  /**
   * The icon color hue. Must use a member of the `AppletIcon.Colors` static enum.
   * @default AppletIcon.Colors.Blueberry
   */
  color?: BrandingColor;
}

/**
 * @deprecated `appletIconStyles` will be removed in in a future version as a part of implementation of stencils and new tokens. Consider to use `appletIconStencil` instead.
 */
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
      fill: system.color.fg.inverse,
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

export interface AppletIconProps
  extends AppletIconStyles,
    Pick<SvgProps, 'shouldMirror' | 'shouldMirrorInRTL' | 'cs'> {
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

export const appletIconStencil = createStencil({
  extends: svgStencil,
  vars: {
    color200: '',
    color300: '',
    color400: '',
    color500: '',
  },
  base: ({color200, color300, color400, color500, size}) => ({
    [size]: px2rem(92),
    '& .color-100': {
      fill: system.color.fg.inverse,
    },
    '& .color-200': {
      fill: cssVar(color200, base.blue200),
    },
    '& .color-300': {
      fill: cssVar(color300, base.blue400),
    },
    '& .color-400': {
      fill: cssVar(color400, base.blue600),
    },
    '& .color-400-alpha-20': {
      fill: cssVar(color400, base.blue600),
    },
    '& .color-500': {
      fill: cssVar(color500, base.blue700),
    },
  }),
});

export const AppletIcon = createComponent('span')({
  displayName: 'AppletIcon',
  Component: ({size, icon, color, ...elemProps}: AppletIconProps, ref, Element) => {
    const colors = color && {
      color200: base[`${color}200` as keyof typeof base],
      color300: base[`${color}300` as keyof typeof base],
      color400: base[`${color}400` as keyof typeof base],
      color500: base[`${color}500` as keyof typeof base],
    };

    return (
      <Svg
        src={icon}
        type={CanvasIconTypes.Applet}
        as={Element}
        ref={ref}
        {...handleCsProp(elemProps, [
          appletIconStencil({...colors, size: size ? px2rem(size) : undefined}),
        ])}
      />
    );
  },
  subComponents: {
    Colors: BrandingColor,
  },
});
