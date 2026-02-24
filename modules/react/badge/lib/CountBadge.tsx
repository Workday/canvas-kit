import {createComponent} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  createStencil,
  cssVar,
  handleCsProp,
  keyframes,
  px2rem,
} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const grow = keyframes({
  from: {
    transform: 'scale(0.85)',
  },
  to: {
    transform: 'scale(1.0)',
  },
});

export interface CountBadgeProps extends CSProps {
  /**
   * Sets the count displayed in the badge
   *
   * @default 0
   */
  count?: number;
  /**
   * Sets the emphasis of the badge
   *
   * @default 'high'
   */
  emphasis?: 'high' | 'low';
  /**
   * Sets the maximum count to display before formatting the number.
   * E.g. Given a count of `100` and a limit of `100`, the badge would display `99+`.
   *
   * @default 1000
   */
  limit?: number;
  /**
   * Sets the variant of the Count Badge
   */
  variant?: 'inverse';
}

// .cnvs-count-badge
const countBadgeStencil = createStencil({
  base: {
    alignItems: 'center',
    animation: `${grow} 0.2s ease`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    display: 'inline-flex',
    fontFamily: system.fontFamily.default,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.md, system.fontSize.subtext.medium),
    fontWeight: system.fontWeight.bold,
    height: px2rem(20),
    justifyContent: 'center',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.lg, px2rem(20)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.md, base.letterSpacing100),
    minWidth: cssVar(system.size.xxs, px2rem(20)),
    padding: `0 ${px2rem(6.5)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    background: cssVar(system.color.accent.danger, system.color.fg.critical.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    color: cssVar(system.color.fg.inverse, system.color.text.inverse),
  },
  modifiers: {
    variant: {
      // .cnvs-count-badge--variant-inverse
      inverse: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        background: cssVar(system.color.surface.inverse, system.color.bg.default),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.info.strong, system.color.text.primary.default),
      },
    },
    emphasis: {
      high: {},
      low: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        background: cssVar(system.color.surface.info.strong, system.color.bg.info.softer),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.info.strong, system.color.fg.info.stronger),
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', emphasis: 'low'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        background: cssVar(
          system.color.surface.overlay.hover.inverse,
          system.color.bg.transparent.strong
        ),
        color: system.color.fg.inverse,
      },
    },
  ],
});

/**
 * `CountBadge` provides a quantity-based summary with dynamic values.
 */
export const CountBadge = createComponent('span')({
  displayName: 'CountBadge',
  Component: (
    {count = 0, limit = 1000, variant, emphasis = 'high', ...elemProps}: CountBadgeProps,
    ref,
    Element
  ) => {
    const formattedCount = count < limit ? `${count}` : `${limit - 1}+`;

    return (
      <Element ref={ref} {...handleCsProp(elemProps, [countBadgeStencil({variant, emphasis})])}>
        {formattedCount}
      </Element>
    );
  },
});
