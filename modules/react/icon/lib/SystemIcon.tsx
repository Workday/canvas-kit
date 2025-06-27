import {iconColors} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {createComponent, getColor} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, handleCsProp, px2rem, createVars} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Svg, SvgProps, svgStencil, transformColorNameToToken} from './Svg';

/**
 * @deprecated Interface `SystemIconStyles` will be removed in a future version. `accent`, `color`, background props will be moved inside `GraphicProps`.
 */
export interface SystemIconStyles {
  /**
   * The accent color of the SystemIcon. This overrides `color`.
   */
  accent?: string;
  /**
   * The accent color of the SystemIcon on hover. This overrides `colorHover`.
   * @deprecated `accentHover` is deprecated and will be removed in a future version. Please use the following instead in your style overrides:
   * ```tsx
   * '&:hover': {
   *   [systemIconStencil.vars.accent]: desiredAccentHoverColor
   * }
   * ```
   */
  accentHover?: string;
  /**
   * The background color of the SystemIcon.
   * @default transparent
   */
  background?: string;
  /**
   * The background color of the SystemIcon on hover.
   * @default transparent
   * @deprecated `backgroundHover` is deprecated and will be removed in a future version. Please use the following instead in your style overrides:
   * ```tsx
   * '&:hover': {
   *   [systemIconStencil.vars.background]: desiredBackgroundHoverColor
   * }
   * ```
   */
  backgroundHover?: string;
  /**
   * The color of the SystemIcon. This defines `accent` and `fill`. `color` may be overwritten by `accent` and `fill`.
   * @default base.licorice200
   */
  color?: string;
  /**
   * The hover color of the SystemIcon. This defines `accentHover` and `fillHover`. `colorHover` may be overwritten by `accentHover` and `fillHover`.
   * @default base.licorice200
   * @deprecated `colorHover` is deprecated and will be removed in a future version. We have removed the default hover styles on SystemIcon. Please
   * use the following instead in your style overrides:
   * ```tsx
   * '&:hover': {
   *   [systemIconStencil.vars.color]: desiredColorHoverColor
   * }
   * ```
   */
  colorHover?: string;
  /**
   * The fill color of the SystemIcon. This overrides `color`.
   * @deprecated `fill` is deprecated and will be removed in a future version. Please use `color` and specify `accent` color if you want `accent` to be different from `color`.
   */
  fill?: string;
  /**
   * The fill color of the SystemIcon on hover. This overrides `colorHover`.
   * @deprecated `fillHover` is deprecated and will be removed in a future version. Please use the following instead in your style overrides:
   * ```tsx
   * '&:hover': {
   *   [systemIconStencil.vars.fill]: desiredFillHoverColor
   * }
   * ```
   */
  fillHover?: string;
}

export interface SystemIconProps
  extends SystemIconStyles,
    Omit<SvgProps, 'src' | 'type' | 'fill' | 'background' | 'color'> {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIcon in `px`.
   */
  size?: number | string;
}

/**
 * @deprecated This style utility function is deprecated and will be removed in a future version. We'll track usage over time to prevent unnecessary burden on upgrading. Most of the time, this function is used in conjunction with styling `SystemIcon`. There are a few ways to override the colors used in `SystemIcon`.
 * - Pass props directly to the `SystemIcon` component: `<SystemIcon color={color} {...etc} />
 * - Style overrides using the `systemIconStencil`:
 *   ```tsx
 *   // styling container
 *
 *   ```
 */
export const systemIconStyles = ({
  accent,
  accentHover,
  background = 'transparent',
  backgroundHover = 'transparent',
  color = iconColors.standard,
  colorHover = iconColors.hover,
  fill,
  fillHover,
}: SystemIconStyles): CSSObject => ({
  '& .wd-icon-fill': {
    fill: getColor(fill) || getColor(color),
  },
  ':hover .wd-icon-fill': {
    fill: getColor(fillHover) || getColor(colorHover),
  },
  '& .wd-icon-accent, & .wd-icon-accent2': {
    fill: getColor(accent) || getColor(color),
  },
  ':hover .wd-icon-accent, :hover .wd-icon-accent2': {
    fill: getColor(accentHover) || getColor(colorHover),
  },
  '& .wd-icon-background': {
    fill: getColor(background),
  },
  ':hover .wd-icon-background': {
    fill: getColor(backgroundHover),
  },
});

/**
 * @deprecated These variables are being used for backward compatibility with existing hover props. Please use the following instead:
 * ```tsx
 * '&:hover': {
 *   [systemIconStencil.vars.color]: desiredHoverColor
 * }
 * ```
 */
const deprecatedSystemIconVars = createVars(
  'colorHover',
  'fillHover',
  'accentHover',
  'backgroundHover'
);

export const systemIconStencil = createStencil({
  extends: svgStencil,
  vars: {
    /**
     * This will set the icon's color (both `.wd-icon-fill` and `.wd-icon-accent` SVG layers). Most
     * of the time, this is the only color you need to change. Icons also have an accent layer. If you
     * wish to change the accent layer independently, also set the `accentColor` variable
     */
    color: '',
    accentColor: '',
    backgroundColor: '',
  },
  base: ({size, width, height, accentColor, backgroundColor, color}) => ({
    '& svg': {
      width: cssVar(width, cssVar(size, system.space.x6)),
      height: cssVar(height, cssVar(size, system.space.x6)),
    },
    '& .wd-icon-fill': {
      fill: cssVar(color, system.color.icon.default),
    },
    '& .wd-icon-accent, & .wd-icon-accent2': {
      fill: cssVar(accentColor, cssVar(color, system.color.fg.default)),
    },
    '& .wd-icon-background': {
      fill: cssVar(backgroundColor, 'transparent'),
    },
    // will be removed eventually
    '&:where(:hover, .hover) .wd-icon-fill': {
      fill: cssVar(
        deprecatedSystemIconVars.fillHover,
        cssVar(deprecatedSystemIconVars.colorHover, cssVar(color, system.color.fg.default))
      ),
    },
    '&:where(:hover, .hover) .wd-icon-accent, & .wd-icon-accent2': {
      fill: cssVar(
        deprecatedSystemIconVars.accentHover,
        cssVar(
          deprecatedSystemIconVars.colorHover,
          cssVar(accentColor, cssVar(color, system.color.fg.default))
        )
      ),
    },
    '&:where(:hover, .hover) .wd-icon-background': {
      fill: cssVar(
        deprecatedSystemIconVars.backgroundHover,
        cssVar(backgroundColor, 'transparent')
      ),
    },
    // for Windows high contrast desktop themes
    '@media (prefers-contrast: more)': {
      '.wd-icon-fill, .wd-icon-accent': {
        color: 'currentColor',
        fill: 'currentColor',
      },
    },
  }),
  modifiers: {},
});

export const SystemIcon = createComponent('span')({
  displayName: 'SystemIcon',
  Component: (
    {
      size,
      background,
      backgroundHover,
      color,
      colorHover,
      icon,
      accent,
      accentHover,
      fill,
      fillHover,
      ...elemProps
    }: SystemIconProps,
    ref,
    Element
  ) => {
    return (
      <Svg
        as={Element}
        src={icon}
        type={CanvasIconTypes.System}
        ref={ref}
        {...handleCsProp(elemProps, [
          systemIconStencil({
            size: typeof size === 'number' ? px2rem(size) : size,
            color: transformColorNameToToken(fill || color),
            accentColor: transformColorNameToToken(accent || color),
            backgroundColor: transformColorNameToToken(background),
          }),
          {
            [deprecatedSystemIconVars.colorHover]:
              colorHover && transformColorNameToToken(colorHover),
            [deprecatedSystemIconVars.fillHover]: fillHover && transformColorNameToToken(fillHover),
            [deprecatedSystemIconVars.accentHover]:
              accentHover && transformColorNameToToken(accentHover),
            [deprecatedSystemIconVars.backgroundHover]:
              backgroundHover && transformColorNameToToken(backgroundHover),
          },
        ])}
      />
    );
  },
});
