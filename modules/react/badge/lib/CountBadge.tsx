import * as React from 'react';
// eslint-disable-next-line @emotion/no-vanilla
import {keyframes} from '@emotion/css';
import {createComponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStyles, createModifiers} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const grow = keyframes`
  from {
    transform: scale(0.85);
  }

  to {
    transform: scale(1.0);
  }
`;

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

function px2rem(px: number) {
  return `${px / 16}rem`;
}

const baseStyles = createStyles({
  alignItems: 'center',
  animation: `${grow} 0.2s ease`,
  borderRadius: system.shape.round,
  boxSizing: 'border-box',
  display: 'inline-flex',
  fontFamily: system.fontFamily.default,
  fontSize: system.fontSize.subtext.medium,
  fontWeight: 700, // should use system.fontWeight.bold
  height: px2rem(20),
  justifyContent: 'center',
  lineHeight: px2rem(20),
  minWidth: px2rem(20),
  padding: `0 ${px2rem(6.5)}`,
});

const modifiersFn = createModifiers({
  variant: {
    default: createStyles({
      background: base.cinnamon500,
      color: base.frenchVanilla100,
      textShadow: `0 0 ${px2rem(1)} rgba(0,0,0, 0.35)`,
    }),
    inverse: createStyles({
      background: base.frenchVanilla100,
      boxShadow: `0 ${px2rem(1)} ${px2rem(2)} rgba(0,0,0, 0.25)`,
      color: base.blueberry400,
    }),
  },
});

/**
 *
 */
export const CountBadge = createComponent('span')({
  displayName: 'NewCountBadge',
  Component: (
    {count = 0, limit = 1000, variant = 'default', ...elemProps}: CountBadgeProps,
    ref,
    Element
  ) => {
    const formattedCount = count < limit ? `${count}` : `${limit - 1}+`;
    const modifiers = modifiersFn({variant});
    return (
      <Element ref={ref} {...handleCsProp(elemProps, [baseStyles, modifiers])}>
        {formattedCount}
      </Element>
    );
  },
});
