import {createComponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil, px2rem, keyframes} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    background: system.color.static.red.default,
    borderRadius: system.shape.round,
    color: system.color.text.inverse,
    display: 'inline-flex',
    fontFamily: system.fontFamily.default,
    fontSize: system.fontSize.subtext.medium,
    fontWeight: system.fontWeight.bold,
    height: px2rem(20),
    justifyContent: 'center',
    lineHeight: px2rem(20),
    minWidth: px2rem(20),
    padding: `0 ${px2rem(6.5)}`,
    textShadow: `0 0 ${px2rem(1)} rgba(0,0,0, 0.35)`,
  },
  modifiers: {
    variant: {
      // .cnvs-count-badge--variant-inverse
      inverse: {
        background: system.color.bg.default,
        boxShadow: `0 ${px2rem(1)} ${px2rem(2)} rgba(0,0,0, 0.25)`,
        color: system.color.text.primary.default,
        textShadow: 'none',
      },
    },
  },
});

/**
 * `CountBadge` provides a quantity-based summary with dynamic values.
 */
export const CountBadge = createComponent('span')({
  displayName: 'CountBadge',
  Component: ({count = 0, limit = 1000, variant, ...elemProps}: CountBadgeProps, ref, Element) => {
    const formattedCount = count < limit ? `${count}` : `${limit - 1}+`;

    return (
      <Element ref={ref} {...handleCsProp(elemProps, [countBadgeStencil({variant})])}>
        {formattedCount}
      </Element>
    );
  },
});
