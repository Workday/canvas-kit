import * as React from 'react';
import {colors, BrandingColor, CanvasColor} from '@workday/canvas-kit-react-core';
import {CanvasAppletIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/core';
import Icon from './Icon';
import {SpanProps} from './types';

export interface AppletIconStyles {
  color?: BrandingColor;
}

export const appletIconStyles = ({
  color = BrandingColor.Blueberry,
}: AppletIconStyles): CSSObject => {
  // Check if valid color
  if (!Object.values(BrandingColor).includes(color)) {
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
  icon: CanvasAppletIcon;
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
