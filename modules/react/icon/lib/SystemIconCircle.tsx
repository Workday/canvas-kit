import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon, SystemIconProps, systemIconStencil} from './SystemIcon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {createComponent, pickForegroundColor} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {transformColorNameToToken} from './Svg';

export enum SystemIconCircleSize {
  xs = 16,
  s = 24,
  m = 32,
  l = 40,
  xl = 64,
  xxl = 120,
}

export interface SystemIconCircleProps extends Pick<SystemIconProps, 'shouldMirror'> {
  /**
   * The background color of the SystemIconCircle from `@workday/canvas-colors-web`.
   * @default base.soap300
   */
  background?: string;
  /**
   * The icon to display from `@workday/canvas-accent-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIconCircle.
   * @default SystemIconCircleSize.l
   */
  size?: SystemIconCircleSize | number;
}

const systemIconCircleStencil = createStencil({
  vars: {
    containerSize: '',
    backgroundColor: '',
    iconColor: '',
  },
  base: ({backgroundColor, containerSize, iconColor}) => ({
    background: cssVar(backgroundColor, base.soap200),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: system.space.zero,
    border: 'none',
    borderRadius: system.shape.round,
    boxSizing: 'border-box',
    overflow: 'hidden',
    width: cssVar(containerSize, system.space.x10),
    height: cssVar(containerSize, system.space.x10),
    [systemIconStencil.vars.size]: calc.multiply(cssVar(containerSize, system.space.x10), 0.625),
    [systemIconStencil.vars.color]: iconColor,
    '& img': {
      width: '100%',
      height: '100%',
    },
  }),
});

export const SystemIconCircle = createComponent('span')({
  displayName: 'SystemIconCircle',
  Component: ({background, size, icon, shouldMirror}: SystemIconCircleProps, ref, Element) => {
    // `pickForegroundColor` hasn't support to use css variables to generate foregroundColor
    const backgroundFallback =
      background && !background.startsWith('--') ? background : colors.soap200;
    const iconColor = pickForegroundColor(
      backgroundFallback,
      'rgba(0,0,0,0.65)',
      colors.frenchVanilla100
    );

    return (
      <div
        {...systemIconCircleStencil({
          containerSize: typeof size === 'number' ? px2rem(size) : size,
          backgroundColor: transformColorNameToToken(background),
          iconColor,
        })}
      >
        <SystemIcon as={Element} ref={ref} icon={icon} shouldMirror={shouldMirror} />
      </div>
    );
  },
});
