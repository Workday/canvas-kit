import {CanvasExpressiveIcon, CanvasIconTypes} from '@workday/canvas-expressive-icons-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {component} from '@workday/canvas-tokens-web';

import {Svg, SvgProps, resolveSize, svgStencil} from './Svg';

type ExpressiveSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ExpressiveIconProps extends Omit<SvgProps, 'src' | 'type'> {
  /**
   * The accent color of the ExpressiveIcon.
   */
  accent?: string;
  /**
   * The outline color of the ExpressiveIcon.
   */
  color?: string;
  /**
   * The icon to display from `@workday/canvas-expressive-icons-web`.
   */
  icon: CanvasExpressiveIcon;
  /**
   * The size of the ExpressiveIcon in size variants or string / numeric (px) values.
   */
  size?: ExpressiveSize | string | number;
}

export const expressiveIconStencil = createStencil({
  extends: svgStencil,
  vars: {
    /**
     * This will set the icon's outline color for the `.wd-expressive-fill` SVG layer.
     */
    color: '',
    /**
     * This will set the icon's accent color for the `.wd-expressive-accent` SVG layer.
     */
    accentColor: '',
  },
  base: ({size, accentColor, color}) => ({
    '& svg': {
      // TODO: Revisit token, using v4 token and fallback to v3 token
      width: cssVar(size, cssVar(component.expressiveIcon.size.md, px2rem(56))),
      // TODO: Revisit token, using v4 token and fallback to v3 token
      height: cssVar(size, cssVar(component.expressiveIcon.size.md, px2rem(56))),
    },
    '.wd-expressive .wd-expressive-fill': {
      // TODO: Revisit token, use base tokens instead of icon tokens
      fill: cssVar(color, component.expressiveIcon.color.fill),
    },
    '.wd-expressive .wd-expressive-accent': {
      // TODO: Revisit token, use base tokens instead of icon tokens
      fill: cssVar(accentColor, component.expressiveIcon.color.accent),
    },
    // for Windows high contrast desktop themes
    '@media (prefers-contrast: more)': {
      '.wd-expressive .wd-expressive-fill': {
        color: 'currentColor',
        fill: 'currentColor',
      },
      '.wd-expressive .wd-expressive-accent': {
        color: 'transparent',
        fill: 'transparent',
      },
    },
  }),
});

export const ExpressiveIcon = createComponent('span')({
  displayName: 'ExpressiveIcon',
  Component: ({accent, color, icon, size, ...elemProps}: ExpressiveIconProps, ref, Element) => {
    return (
      <Svg
        as={Element}
        src={icon}
        type={CanvasIconTypes.Expressive}
        ref={ref}
        {...handleCsProp(
          elemProps,
          expressiveIconStencil({
            size: resolveSize(size, component.expressiveIcon.size),
            color,
            accentColor: accent,
          })
        )}
      />
    );
  },
});
