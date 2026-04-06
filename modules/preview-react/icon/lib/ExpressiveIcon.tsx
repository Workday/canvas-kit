import {CanvasExpressiveIcon, CanvasIconTypes} from '@workday/canvas-expressive-icons-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {SVG, SVGProps, svgStencil} from './SVG';

export interface ExpressiveIconProps extends Omit<SVGProps, 'src' | 'type'> {
  /**
   * The accent color of the ExpressiveIcon.
   * @default base.neutralA200
   */
  accent?: string;
  /**
   * The outline color of the ExpressiveIcon.
   * @default base.neutral800
   */
  color?: string;
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasExpressiveIcon;
  /**
   * The size of the SystemIcon.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const expressiveIconStencil = createStencil({
  extends: svgStencil,
  vars: {
    /**
     * This will set the icon's outline color for the `.wd-icon-fill` SVG layer.
     */
    color: '',
    /**
     * This will set the icon's accent color for the `.wd-icon-accent` SVG layer.
     */
    accentColor: '',
  },
  base: ({size, accentColor, color}) => ({
    '& svg': {
      // TODO: Revisit token, using v4 token and fallback to v3 token
      width: cssVar(size, cssVar(system.size.xl, px2rem(56))),
      // TODO: Revisit token, using v4 token and fallback to v3 token
      height: cssVar(size, cssVar(system.size.xl, px2rem(56))),
    },
    '.wd-expressive .wd-icon-fill': {
      // TODO: Revisit token, use base tokens instead of icon tokens
      fill: cssVar(color, base.neutral800),
    },
    '.wd-expressive .wd-icon-accent': {
      // TODO: Revisit token, use base tokens instead of icon tokens
      fill: cssVar(accentColor, base.neutralA200),
    },
    // for Windows high contrast desktop themes
    '@media (prefers-contrast: more)': {
      '.wd-expressive .wd-icon-fill, .wd-expressive .wd-icon-accent': {
        color: 'currentColor',
        fill: 'currentColor',
      },
    },
  }),
});

export const ExpressiveIcon = createComponent('span')({
  displayName: 'ExpressiveIcon',
  Component: ({size, color, icon, accent, ...elemProps}: ExpressiveIconProps, ref, Element) => {
    // TODO: Revisit token, using base tokens instead of icon tokens
    const sizeToken = {
      xs: base.size500,
      sm: base.size600,
      md: base.size700,
      lg: base.size800,
      xl: base.size1200,
    } as const;

    return (
      <SVG
        as={Element}
        src={icon}
        type={CanvasIconTypes.Expressive}
        ref={ref}
        {...handleCsProp(
          elemProps,
          expressiveIconStencil({size: size ? sizeToken[size] : '', color, accentColor: accent})
        )}
      />
    );
  },
});
