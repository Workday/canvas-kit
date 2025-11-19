import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

/**
 * This file is NOT INTENDED to be used by consumers, only internally by Canvas Kit.
 */
export const forwardFitTokens = {
  system: {
    shape: {
      //TODO: in v4 Tokens and v15, we should replace this forward fit token with the actual token value
      xs: cssVar(system.shape.xs, system.shape.x1),
      sm: cssVar(system.shape.sm, system.shape.x1Half),
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
    },
  },
} as const;
