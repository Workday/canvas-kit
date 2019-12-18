import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {CanvasAccentIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/core';
import Icon from './Icon';
import {SpanProps} from './types';

export interface AccentIconStyles {
  /**
   * The fill color for the icon
   * @default colors.blueberry500
   */
  color?: string;
  /**
   * If true, the background will be transparent. If false, the background fill will be white.
   */
  transparent?: boolean;
}

export interface AccentIconProps extends AccentIconStyles {
  /**
   *  Icon to display from `@workday/canvas-accent-icons-web`
   */
  icon: CanvasAccentIcon;
  /**
   * Size of the Icon
   * @default 56
   */
  size?: number;
}

export const accentIconStyles = ({
  color = colors.blueberry500,
  transparent = false,
}: AccentIconStyles): CSSObject => ({
  '& .color-500': {
    fill: color,
  },
  '& .french-vanilla-100': {
    fill: transparent ? 'transparent' : colors.frenchVanilla100,
  },
});

export default class AccentIcon extends React.Component<SpanProps & AccentIconProps> {
  render() {
    const {icon, color, transparent, size, ...elemProps} = this.props;

    return (
      <Icon
        src={icon}
        type={CanvasIconTypes.Accent}
        styles={accentIconStyles({color, transparent})}
        size={size}
        elemProps={elemProps}
      />
    );
  }
}
