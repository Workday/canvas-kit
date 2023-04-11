import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {CanvasAccentIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {Icon, IconProps} from './Icon';
import {createComponent, getColor} from '@workday/canvas-kit-react/common';
import {SystemPropValues} from '@workday/canvas-kit-react/layout';

export interface AccentIconStyles {
  /**
   * The fill color of the AccentIcon.
   * @default colors.blueberry500
   */
  color?: SystemPropValues['color'];
  /**
   * If true, set the background fill of the AccentIcon to `transparent`. If false, set the background fill of the AccentIcon to `colors.frenchVanilla100`.
   * @default false
   */
  transparent?: boolean;
}

export interface AccentIconProps extends AccentIconStyles, Omit<IconProps, 'src' | 'type'> {
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
    fill: getColor(color),
  },
  '& .french-vanilla-100': {
    fill: transparent ? 'transparent' : colors.frenchVanilla100,
  },
});

export const AccentIcon = createComponent('span')({
  displayName: 'AccentIcon',
  Component: (
    {transparent = false, size = 56, icon, color, shouldMirror, ...elemProps}: AccentIconProps,
    ref,
    Element
  ) => {
    return (
      <Icon
        src={icon}
        type={CanvasIconTypes.Accent}
        styles={accentIconStyles({color, transparent})}
        size={size}
        as={Element}
        ref={ref}
        shouldMirror={shouldMirror}
        {...elemProps}
      />
    );
  },
});
