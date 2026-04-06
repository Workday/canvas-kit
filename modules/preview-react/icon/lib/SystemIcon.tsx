import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {CanvasIconTypes, CanvasSystemIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

import {SVG, SVGProps, svgStencil} from './SVG';

export interface SystemIconProps extends Omit<SVGProps, 'src' | 'type'> {
  /**
   * The accent color of the SystemIcon. This overrides `color`.
   * @default base.neutral800
   */
  accent?: string;
  /**
   * The background color of the SystemIcon.
   * @default transparent
   */
  background?: string;
  /**
   * The color of the SystemIcon. This defines `accent` and `fill`. `color` may be overwritten by `accent` and `fill`.
   * @default base.neutral800
   */
  color?: string;
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIcon.
   * @default 'lg'
   */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
      width: cssVar(size, cssVar(system.size.xs, px2rem(24))),
      // TODO: Revisit token, using v4 token and fallback to v3 token
      height: cssVar(size, cssVar(system.size.xs, px2rem(24))),
    },
    '.wd-icon .wd-icon-fill': {
      // TODO: Revisit token, using base tokens instead of icon tokens
      fill: cssVar(color, base.neutral800),
    },
    '.wd-icon .wd-icon-accent, & .wd-icon-accent2': {
      // TODO: Revisit token, using base tokens instead of icon tokens
      fill: cssVar(accentColor, cssVar(color, base.neutral800)),
    },
    '.wd-icon .wd-icon-background': {
      // TODO: Revisit token, using base tokens instead of icon tokens
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
});

export const SystemIcon = createComponent('span')({
  displayName: 'SystemIcon',
  Component: (
    {size, background, color, icon, accent, ...elemProps}: SystemIconProps,
    ref,
    Element
  ) => {
    // TODO: Revisit token, using base tokens instead of icon tokens
    const sizeToken = {
      xxs: base.size175,
      xs: base.size200,
      sm: base.size225,
      md: base.size250,
      lg: base.size300,
      xl: base.size400,
    } as const;

    return (
      <SVG
        as={Element}
        src={icon}
        type={CanvasIconTypes.System}
        ref={ref}
        {...handleCsProp(
          elemProps,
          systemIconStencil({
            size: size ? sizeToken[size] : '',
            color,
            accentColor: accent,
            backgroundColor: background,
          })
        )}
      />
    );
  },
});
