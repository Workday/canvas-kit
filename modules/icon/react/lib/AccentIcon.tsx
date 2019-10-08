import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {CanvasAccentIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from 'create-emotion';
import Icon from './Icon';
import {SpanProps} from './types';

export interface AccentIconStyles {
  color?: string;
  transparent?: boolean;
}

export interface AccentIconProps extends AccentIconStyles {
  icon: CanvasAccentIcon;
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
