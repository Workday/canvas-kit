import {createStencil, createVars, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const v14SvgStencil = createStencil({
  vars: {
    /** sets width of svg element */
    width: '',
    /** sets height of svg element */
    height: '',
    /** sets width and height of svg element */
    size: '',
  },
  base: ({width, height, size}) => ({
    display: 'inline-block',
    '> svg': {
      display: 'block',
      width: cssVar(width, size),
      height: cssVar(height, size),
    },
  }),
  modifiers: {
    shouldMirror: {
      true: {
        transform: 'scaleX(-1)',
      },
    },
    shouldMirrorInRTL: {
      true: {
        '&:dir(rtl)': {
          transform: 'scaleX(-1)',
        },
      },
    },
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
  extends: v14SvgStencil,
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
    '&:where(:hover, .hover) .wd-icon-accent, & where(:hover, .hover) .wd-icon-accent2': {
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
