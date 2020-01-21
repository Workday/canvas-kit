import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {CanvasAccentIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/core';
import Icon from './Icon';
import {SpanProps} from './types';

export interface AccentIconStyles {
  /**
   * The fill color of the AccentIcon.
   * @default colors.blueberry500
   */
  color?: string;
  /**
   * If true, set the background fill of the AccentIcon to `transparent`. If false, set the background fill of the AccentIcon to `colors.frenchVanilla100`.
   * @default false
   */
  transparent?: boolean;
}

export interface AccentIconProps extends AccentIconStyles {
  /**
   *  The icon to display from `@workday/canvas-accent-icons-web`.
   */
  icon: CanvasAccentIcon;
  /**
   * The size of the AccentIcon in `px`.
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
