import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {CanvasIconTypes, CanvasSystemIcon} from '@workday/canvas-system-icons-web';
import {component} from '@workday/canvas-tokens-web';

import {Svg, SvgProps, resolveSize, svgStencil} from './Svg';

type SystemSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SystemIconProps extends Omit<SvgProps, 'src' | 'type'> {
  /**
   * The accent color of the SystemIcon. This overrides `color`.
   */
  accent?: string;
  /**
   * The background color of the SystemIcon.
   */
  background?: string;
  /**
   * The color of the SystemIcon. This defines `accent` and `fill`. `color` may be overwritten by `accent` and `fill`.
   */
  color?: string;
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIcon in size variants or string / numeric (px) values.
   */
  size?: SystemSize | string | number;
}

export const systemIconStencil = createStencil({
  extends: svgStencil,
  vars: {
    /**
     * This will set the icon's color (both `.wd-icon-fill` and `.wd-icon-accent` SVG layers). Most
     * of the time, this is the only color you need to change. Icons also have an accent layer. If you
     * wish to change the accent layer independently, also set the `accentColor` variable
     */
    color: '',
    /**
     * This will set the icon's accent color for the `.wd-icon-accent` SVG layer.
     */
    accentColor: '',
    /**
     * This will set the icon's background color for the `.wd-icon-background` SVG layer.
     */
    backgroundColor: '',
  },
  base: ({size, accentColor, backgroundColor, color}) => ({
    '& svg': {
      // TODO: Revisit token, using v4 token and fallback to v3 token
      width: cssVar(size, cssVar(component.systemIcon.size.lg, px2rem(24))),
      // TODO: Revisit token, using v4 token and fallback to v3 token
      height: cssVar(size, cssVar(component.systemIcon.size.lg, px2rem(24))),
    },
    '.wd-icon .wd-icon-fill': {
      // TODO: Revisit token, using base tokens instead of icon tokens
      fill: cssVar(color, component.systemIcon.color.fill),
    },
    '.wd-icon .wd-icon-accent, & .wd-icon-accent2': {
      // TODO: Revisit token, using base tokens instead of icon tokens
      fill: cssVar(accentColor, cssVar(color, component.systemIcon.color.accent)),
    },
    '.wd-icon .wd-icon-background': {
      fill: cssVar(backgroundColor, 'transparent'),
    },
    // for Windows high contrast desktop themes
    '@media (prefers-contrast: more)': {
      '.wd-icon .wd-icon-fill, .wd-icon .wd-icon-accent': {
        color: 'currentColor',
        fill: 'currentColor',
      },
    },
  }),
  // Keeps parent stencil `ME` inferred as `{}` so extending stencils keep correct boolean modifier typings.
  modifiers: {},
});

export const SystemIcon = createComponent('span')({
  displayName: 'SystemIcon',
  Component: (
    {accent, background, color, icon, size, ...elemProps}: SystemIconProps,
    ref,
    Element
  ) => {
    console.log('size', resolveSize(size, component.systemIcon.size));
    return (
      <Svg
        as={Element}
        src={icon}
        type={CanvasIconTypes.System}
        ref={ref}
        {...handleCsProp(
          elemProps,
          systemIconStencil({
            size: resolveSize(size, component.systemIcon.size),
            color,
            accentColor: accent,
            backgroundColor: background,
          })
        )}
      />
    );
  },
});
