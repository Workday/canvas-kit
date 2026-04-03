import {CanvasExpressiveIcon, CanvasIconTypes} from '@workday/canvas-expressive-icons-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {Svg, SvgProps, svgStencil} from './Svg';

export interface ExpressiveIconProps extends Omit<SvgProps, 'src' | 'type'> {
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
      width: cssVar(size, system.size.xl),
      height: cssVar(size, system.size.xl),
    },
    '.wd-expressive .wd-icon-fill': {
      fill: cssVar(color, base.neutral800),
    },
    '.wd-expressive .wd-icon-accent': {
      fill: cssVar(accentColor, cssVar(color, base.neutral800)),
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
  Component: (
    {size = 'md', color, icon, accent, ...elemProps}: ExpressiveIconProps,
    ref,
    Element
  ) => {
    // TODO: Replace with icon tokens
    const sizeToken = {
      xs: base.size500,
      sm: base.size600,
      md: base.size700,
      lg: base.size800,
      xl: base.size1200,
    } as const;

    return (
      <Svg
        as={Element}
        src={icon}
        type={CanvasIconTypes.System}
        ref={ref}
        {...handleCsProp(
          elemProps,
          expressiveIconStencil({size: sizeToken[size], color, accentColor: accent})
        )}
      />
    );
  },
});
