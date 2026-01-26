import {cssVar} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

/**
 * This file is NOT INTENDED to be used by consumers, only internally by Canvas Kit.
 */
export const forwardFitTokens = {
  system: {
    shape: {
      xs: cssVar(system.shape.sm, system.shape.x1),
      sm: cssVar(system.shape.sm, system.shape.x1Half),
      md: cssVar(system.shape.md, system.shape.x1Half),
      full: cssVar(system.shape.full, system.shape.round),
    },
    size: {
      xxs: cssVar(system.size.xxs, system.space.x4),
      sm: cssVar(system.size.sm, system.space.x6),
      md: cssVar(system.size.md, system.space.x8),
      lg: cssVar(system.size.lg, system.space.x10),
      xl: cssVar(system.size.xl, '3rem'),
    },
    padding: {
      none: cssVar(system.padding.none, system.space.zero),
      xxs: cssVar(system.padding.xxs, system.space.x1),
      xs: cssVar(system.padding.xs, system.space.x2),
      sm: cssVar(system.padding.sm, system.space.x3),
      md: cssVar(system.padding.md, system.space.x4),
      lg: cssVar(system.padding.lg, '1.25rem'),
      xl: cssVar(system.padding.xl, system.space.x6),
      xxl: cssVar(system.padding.xxl, system.space.x8),
    },
    fontSize: {
      subtext: {
        lg: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
        md: cssVar(system.fontSize.subtext.md, system.fontSize.subtext.medium),
        sm: cssVar(system.fontSize.subtext.sm, system.fontSize.subtext.small),
      },
    },
    gap: {
      none: cssVar(system.gap.none, system.space.zero),
      xs: cssVar(system.gap.xs, system.space.x1),
      sm: cssVar(system.gap.sm, system.space.x2),
      md: cssVar(system.gap.md, system.space.x4),
      lg: cssVar(system.gap.lg, system.space.x6),
    },
    type: {
      subtext: {
        lg: {
          fontFamily: cssVar(system.fontFamily.default, system.fontFamily.default),
          fontWeight: cssVar(system.fontWeight.normal, system.fontWeight.normal),
          lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
          fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
          letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing50),
        },
        md: {
          fontFamily: cssVar(system.fontFamily.default, system.fontFamily.default),
          fontWeight: cssVar(system.fontWeight.normal, system.fontWeight.normal),
          lineHeight: cssVar(system.lineHeight.subtext.md, system.lineHeight.subtext.medium),
          fontSize: cssVar(system.fontSize.subtext.md, system.fontSize.subtext.medium),
          letterSpacing: cssVar(system.letterSpacing.subtext.md, base.letterSpacing100),
        },
      },
      body: {
        sm: {
          fontFamily: system.fontFamily.default,
          fontWeight: system.fontWeight.normal,
          lineHeight: cssVar(system.lineHeight.body.sm, system.lineHeight.body.small),
          fontSize: cssVar(system.fontSize.body.sm, system.fontSize.body.small),
          letterSpacing: cssVar(system.letterSpacing.body.sm, base.letterSpacing200),
        },
      },
    },
    color: {
      border: {
        transparent: cssVar(system.color.border.transparent, system.color.border.transparent),
        default: cssVar(system.color.border.default, system.color.border.divider),
      },
      surface: {
        transparent: cssVar(system.color.surface.transparent, system.color.bg.transparent.default),
        default: cssVar(system.color.surface.default, system.color.bg.default),
        alt: {
          default: cssVar(system.color.surface.alt.default, system.color.bg.alt.soft),
        },
        overlay: {
          hover: {
            default: cssVar(system.color.surface.overlay.hover.default, system.color.bg.alt.soft),
          },
        },
      },
      fg: {
        strong: cssVar(system.color.fg.strong, system.color.text.strong),
      },
      brand: {
        border: {
          primary: cssVar(system.color.brand.border.primary, brand.common.focusOutline),
        },
      },
    },
  },
} as const;
