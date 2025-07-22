import React from 'react';

import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {ExtractStencilProps, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {StatusIndicatorIcon} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';

/**
 * @deprecated This is being deprecated and will be removed in a future release. Use
 * `StatusIndicatorProps['variant']` instead.
 */
export type StatusIndicatorVariant =
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'
  | 'gray'
  | 'primary'
  | 'neutral'
  | 'caution'
  | 'success'
  | 'critical'
  | 'ai'
  | 'transparent';

export interface StatusIndicatorProps
  extends ExtractProps<typeof Flex, never>,
    Omit<ExtractStencilProps<typeof statusIndicatorStencil>, 'variant'> {
  /**
   * Defines the color of the `StatusIndicator`.
   * * `primary` | `blue` - Uses the primary brand color and used for many status types
   * * `success` | `green` - Uses the success brand color and is used for positive statuses
   * * `caution` | `orange` - Uses the caution brand color and is used for warnings or required actions
   * * `critical` | `red` - Uses the error brand color and is used for critical statuses
   * * `neutral` | `gray` - Uses the neutral brand color and generally doesn't have positive or negative connotations
   * * `illuminate` - Uses the AI system color and is used for AI generated content
   * * `transparent` - Uses the transparent brand color and is used for overlays on top of images or videos
   *
   * @default 'neutral'
   */
  variant: StatusIndicatorVariant;
  /**
   * Children of the `StatusIndicator`. Can contain a `StatusIndicator.Label` and optionally a `StatusIndicator.Icon`.
   */
  children: React.ReactNode;
}

// TODO: Remove this in a future release
const deprecatedVariantsMap = {
  blue: 'primary',
  green: 'success',
  orange: 'caution',
  red: 'critical',
  gray: 'neutral',
} as const;

const statusIndicatorStencil = createStencil({
  base: {
    display: 'inline-flex',
    gap: system.space.x1,
    maxWidth: px2rem(200),
    alignItems: 'center',
    borderRadius: system.shape.round,
    height: px2rem(20),
    padding: `${system.space.zero} ${system.space.x2}`,
    outline: `${px2rem(1)} solid transparent`,
    [systemIconStencil.vars.color]: 'currentColor',
  },
  modifiers: {
    /**
     * Defines the color of the `StatusIndicator`.
     * * `primary` | `blue` - Uses the primary brand color and used for many status types
     * * `success` | `green` - Uses the success brand color and is used for positive statuses
     * * `caution` | `orange` - Uses the caution brand color and is used for warnings or required actions
     * * `critical` | `red` - Uses the error brand color and is used for critical statuses
     * * `neutral` | `gray` - Uses the neutral brand color and generally doesn't have positive or negative connotations
     * * `illuminate` - Uses the AI system color and is used for AI generated content
     * * `transparent` - Uses the transparent brand color and is used for overlays on top of images or videos
     *
     * @default 'neutral'
     */
    variant: {
      primary: {
        color: system.color.static.blue.strong,
        backgroundColor: system.color.static.blue.soft,
      },
      success: {
        color: system.color.static.green.strong,
        backgroundColor: system.color.static.green.softer,
      },
      caution: {
        color: system.color.static.amber.stronger,
        backgroundColor: system.color.static.amber.softer,
      },
      critical: {
        color: system.color.static.red.strong,
        backgroundColor: system.color.static.red.softer,
      },
      neutral: {
        color: system.color.static.gray.strong,
        backgroundColor: system.color.static.gray.softer,
      },
      ai: {
        color: system.color.fg.ai,
        backgroundColor: system.color.bg.ai.default,
      },
      transparent: {
        color: system.color.fg.inverse,
        backgroundColor: system.color.bg.translucent,
      },
    },
    /**
     * Defines the emphasis of the `StatusIndicator`. `low` should be used in almost all cases.
     * `high` is being deprecated and will be removed in a future release.
     * * `low` - Normal emphasis and will visually fit in with other components.
     * * `high` - High emphasis has been used to make the `StatusIndicator` stand out more, but
     *   tends to overpower other components. It will be removed and should not be used.
     *
     * @default 'low'
     *
     * @deprecated This is being deprecated and will be removed in a future release. `high` is being removed
     */
    emphasis: {
      low: {},
      /**
       * @deprecated This is being deprecated and will be removed in a future release.
       */
      high: {},
    },
  },
  compound: [
    {
      modifiers: {
        variant: 'primary',
        emphasis: 'high',
      },
      styles: {
        backgroundColor: system.color.static.blue.default,
        color: system.color.static.white,
      },
    },
    {
      modifiers: {
        variant: 'success',
        emphasis: 'high',
      },
      styles: {
        backgroundColor: system.color.static.green.default,
        color: system.color.static.white,
      },
    },
    {
      modifiers: {
        variant: 'caution',
        emphasis: 'high',
      },
      styles: {
        backgroundColor: system.color.static.amber.default,
        color: system.color.static.black,
      },
    },
    {
      modifiers: {
        variant: 'critical',
        emphasis: 'high',
      },
      styles: {
        backgroundColor: system.color.static.red.default,
        color: system.color.static.white,
      },
    },
    {
      modifiers: {
        variant: 'neutral',
        emphasis: 'high',
      },
      styles: {
        backgroundColor: system.color.static.gray.default,
        color: system.color.static.white,
      },
    },
  ],
  defaultModifiers: {
    variant: 'neutral',
    emphasis: 'low',
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
  Component: ({variant, emphasis, children, ...elemProps}: StatusIndicatorProps, ref, Element) => {
    return (
      <Element
        ref={ref}
        {...mergeStyles(
          elemProps,
          statusIndicatorStencil({
            variant:
              // collapse the type to only the allowed modifiers. Look them up in the map, then
              // fallback to the passed variant.
              deprecatedVariantsMap[variant as keyof typeof deprecatedVariantsMap] ||
              (variant as keyof typeof statusIndicatorStencil.modifiers.variant),
            emphasis,
          })
        )}
      >
        {children}
      </Element>
    );
  },
});
