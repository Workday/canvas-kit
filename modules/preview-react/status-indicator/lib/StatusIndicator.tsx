import React from 'react';

import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {StatusIndicatorIcon} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';

export type StatusIndicatorVariant = 'gray' | 'orange' | 'blue' | 'green' | 'red' | 'transparent';

export interface StatusIndicatorProps extends ExtractProps<typeof Flex, never> {
  /**
   * Defines the emphasis of the `StatusIndicator`.
   * `high` emphasis will create more contrast between the background and text colors.
   * `low` emphasis will create less contrast between the background and text colors.
   * @default 'low'
   */
  emphasis?: 'high' | 'low';
  /**
   * Defines the color of the `StatusIndicator`.
   * @default 'gray'
   */
  variant?: StatusIndicatorVariant;
  /**
   * Children of the `StatusIndicator`. Can contain a `StatusIndicator.Label` and optionally a `StatusIndicator.Icon`.
   */
  children: React.ReactNode;
}

const statusIndicatorStencil = createStencil({
  base: {
    display: 'inline-flex',
    gap: system.space.x1,
    maxWidth: px2rem(200),
    alignItems: 'center',
    borderRadius: system.shape.half,
    height: px2rem(20),
    padding: `${system.space.zero} ${system.space.x1}`,
    outline: `${px2rem(1)} solid transparent`,
  },
  modifiers: {
    gray: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.gray.default,
      },
      low: {
        color: system.color.fg.muted.default,
        [systemIconStencil.vars.color]: system.color.static.gray.strong,
        background: system.color.bg.alt.softer,
      },
    },
    orange: {
      high: {
        color: system.color.static.gray.stronger,
        [systemIconStencil.vars.color]: system.color.static.gray.stronger,
        background: system.color.static.amber.default,
      },
      low: {
        color: system.color.static.amber.strongest,
        [systemIconStencil.vars.color]: system.color.static.amber.strongest,
        background: system.color.static.amber.softer,
      },
    },
    blue: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.blue.default,
      },
      low: {
        color: system.color.static.blue.strong,
        [systemIconStencil.vars.color]: system.color.static.blue.strong,
        background: system.color.static.blue.softer,
      },
    },
    green: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.green.strong,
      },
      low: {
        color: system.color.static.green.strong,
        [systemIconStencil.vars.color]: system.color.static.green.strong,
        background: system.color.static.green.softer,
      },
    },
    red: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.red.default,
      },
      low: {
        color: system.color.static.red.strong,
        [systemIconStencil.vars.color]: system.color.static.red.strong,
        background: system.color.static.red.softer,
      },
    },
    transparent: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.bg.translucent,
      },
      low: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.bg.translucent,
      },
    },
  },
});

/**
 * `StatusIndicator` is a container component which renders an {@link Flex} under the hood to
 * apply spacing evenly between its children. It has a default maximum width of `200px`.
 *
 * ```tsx
 * <StatusIndicator emphasis="low" variant="blue">
 *   {Child components}
 * </StatusIndicator>
 * ```
 */
export const StatusIndicator = createComponent('div')({
  displayName: 'StatusIndicator',
  subComponents: {
    /**
     * `StatusIndicator.Label` renders {@link Text} under the hood. It will apply an ellipsis if its
     * contents exceed the component's maximum width.
     *
     * ```tsx
     * <StatusIndicator.Label>{The text to be rendered}</StatusIndicator.Label>
     * ```
     */
    Label: StatusIndicatorLabel,
    /**
     * `StatusIndicator.Icon` renders {@link SystemIcon} under the hood. It's used as a decorative
     * element to visually support the {@link StatusIndicatorLabel StatusIndicator.Label} text.
     *
     * ```tsx
     * <StatusIndicator.Icon icon={uploadCloudIcon} />
     * ```
     */
    Icon: StatusIndicatorIcon,
  },
  Component: (
    {emphasis = 'low', variant = 'gray', children, ...elemProps}: StatusIndicatorProps,
    ref,
    Element
  ) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, statusIndicatorStencil({[variant]: emphasis}))}>
        {children}
      </Element>
    );
  },
});
