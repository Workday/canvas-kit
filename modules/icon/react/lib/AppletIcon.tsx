import * as React from 'react';
import {colors, BrandingColor, CanvasColor} from '@workday/canvas-kit-react-core';
import {CanvasAppletIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/core';
import Icon from './Icon';
import {SpanProps} from './types';

export interface AppletIconStyles {
  /**
   * The icon color hue. Must use a member of the `AppletIcon.Colors` static enum.
   * @default AppletIcon.Colors.Blueberry
   */
  color?: BrandingColor;
}

export const appletIconStyles = ({
  color = BrandingColor.Blueberry,
}: AppletIconStyles): CSSObject => {
  // Check if valid color
  if (
    !Object.keys(BrandingColor)
      .map((color: keyof typeof BrandingColor) => BrandingColor[color])
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

export interface AppletIconProps extends AppletIconStyles {
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

export default class AppletIcon extends React.Component<SpanProps & AppletIconProps> {
  public static Colors = BrandingColor;

  public render() {
    const {icon, color, size, ...elemProps} = this.props;

    return (
      <Icon
        src={icon}
        type={CanvasIconTypes.Applet}
        styles={appletIconStyles({color})}
        size={size}
        elemProps={elemProps}
      />
    );
  }
}
