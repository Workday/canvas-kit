import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil, px2rem, keyframes} from '@workday/canvas-kit-styling';
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
   * Sets the maximum count to display before formatting the number.
   * E.g. Given a count of `100` and a limit of `100`, the badge would display `99+`.
   *
   * @default 1000
   */
  limit?: number;
  /**
   * Sets the variant of the Count Badge
   *
   * @default 'default'
   */
  variant?: 'default' | 'inverse';
}

const countBadgeStencil = createStencil({
  base: {
    alignItems: 'center',
    animation: `${grow} 0.2s ease`,
    borderRadius: system.shape.round,
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontFamily: system.fontFamily.default,
    fontSize: system.fontSize.subtext.medium,
    fontWeight: system.fontWeight.bold,
    height: px2rem(20),
    justifyContent: 'center',
    lineHeight: px2rem(20),
    minWidth: px2rem(20),
    padding: `0 ${px2rem(6.5)}`,
  },
  modifiers: {
    variant: {
      default: {
        background: base.cinnamon500,
        color: base.frenchVanilla100,
        textShadow: `0 0 ${px2rem(1)} rgba(0,0,0, 0.35)`,
      },
      inverse: {
        background: base.frenchVanilla100,
        boxShadow: `0 ${px2rem(1)} ${px2rem(2)} rgba(0,0,0, 0.25)`,
        color: base.blueberry400,
      },
    },
  },
});

/**
 * `CountBadge` provides a quantity-based summary with dynamic values.
 */
export const CountBadge = createComponent('span')({
  displayName: 'NewCountBadge',
  Component: (
    {count = 0, limit = 1000, variant = 'default', ...elemProps}: CountBadgeProps,
    ref,
    Element
  ) => {
    const formattedCount = count < limit ? `${count}` : `${limit - 1}+`;

    return (
      <Element ref={ref} {...handleCsProp(elemProps, [countBadgeStencil({variant})])}>
        {formattedCount}
      </Element>
    );
  },
});
