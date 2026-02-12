import React from 'react';

import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {ExtractStencilProps, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {StatusIndicatorIcon} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';

/**
 * @deprecated This is being deprecated and will be removed in a future release. Use
 * `StatusIndicatorProps['variant']` instead.
 */
export type StatusIndicatorVariant =
  | 'info'
  | 'neutral'
  | 'caution'
  | 'positive'
  | 'critical'
  | 'ai'
  | 'transparent'
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'
  | 'gray';

export interface StatusIndicatorProps
  extends ExtractProps<typeof Flex, never>,
    Omit<ExtractStencilProps<typeof statusIndicatorStencil>, 'variant'> {
  /**
   * Defines the color of the `StatusIndicator`.
   * * `info` | `blue` - Uses the info system color and is used for informational status indications
   * * `positive` | `green` - Uses the positive system color and is used for positive status indications
   * * `caution` | `orange` - Uses the caution system color and is used for warnings or required actions
   * * `critical` | `red` - Uses the error system color and is used for critical or negative status indications
   * * `neutral` | `gray` - Uses the neutral system color and generally doesn't have positive or negative connotations
   * * `illuminate` - Uses the AI system color and is used for AI generated content
   * * `transparent` - Uses the transparent system color and is used for overlays on top of images or videos
   *
   * @default 'neutral'
   */
  variant?: StatusIndicatorVariant;
  /**
   * Children of the `StatusIndicator`. Can contain a `StatusIndicator.Label` and optionally a `StatusIndicator.Icon`.
   */
  children: React.ReactNode;
}

// TODO: Remove this in a future release
const deprecatedVariantsMap = {
  blue: 'info',
  green: 'positive',
  orange: 'caution',
  red: 'critical',
  gray: 'neutral',
} as const;

const statusIndicatorStencil = createStencil({
  base: {
    display: 'inline-flex',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.xs, system.space.x1),
    maxWidth: px2rem(200),
    alignItems: 'center',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    height: px2rem(20),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `0 ${cssVar(system.padding.xs, system.space.x2)}`,
    outline: `${px2rem(1)} solid transparent`,
    [systemIconStencil.vars.color]: 'currentColor',
  },
  modifiers: {
    /**
     * Defines the color of the `StatusIndicator`.
     * * `info` | `blue` - Uses the info system color and is used for informational status indications
     * * `positive` | `green` - Uses the positive system color and is used for positive status indications
     * * `caution` | `orange` - Uses the caution system color and is used for warnings or required actions
     * * `critical` | `red` - Uses the error system color and is used for critical or negative status indications
     * * `neutral` | `gray` - Uses the neutral system color and generally doesn't have positive or negative connotations
     * * `illuminate` - Uses the AI system color and is used for AI generated content
     * * `transparent` - Uses the transparent system color and is used for overlays on top of images or videos
     *
     * @default 'neutral'
     */
    variant: {
      info: {
        color: system.color.fg.info.strong,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.info.strong, system.color.bg.info.softer),
      },
      positive: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.success.strong, system.color.fg.positive.strong),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(
          system.color.surface.success.strong,
          system.color.fg.positive.softer
        ),
      },
      caution: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.warning.strong, system.color.fg.caution.softer),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(
          system.color.surface.warning.strong,
          system.color.bg.caution.softer
        ),
      },
      critical: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.danger.strong, system.color.fg.critical.strong),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(
          system.color.surface.danger.strong,
          system.color.bg.critical.softer
        ),
      },
      neutral: {
        color: system.color.fg.muted.strong,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.alt.strong, system.color.bg.alt.default),
      },
      ai: {
        color: system.color.fg.ai,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.ai.default, system.color.bg.ai.default),
      },
      transparent: {
        color: system.color.fg.inverse,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.contrast.default, system.color.bg.translucent),
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
     */
    emphasis: {
      low: {},
      high: {},
    },
  },
  compound: [
    {
      modifiers: {
        variant: 'info',
        emphasis: 'high',
      },
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.accent.info, system.color.bg.info.default),
        color: system.color.fg.inverse,
      },
    },
    {
      modifiers: {
        variant: 'positive',
        emphasis: 'high',
      },
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.accent.success, system.color.bg.positive.default),
        color: system.color.fg.inverse,
      },
    },
    {
      modifiers: {
        variant: 'caution',
        emphasis: 'high',
      },
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.accent.warning, system.color.bg.caution.default),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.contrast.default, system.color.fg.caution.strong),
      },
    },
    {
      modifiers: {
        variant: 'critical',
        emphasis: 'high',
      },
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.accent.danger, system.color.bg.critical.default),
        color: system.color.fg.inverse,
      },
    },
    {
      modifiers: {
        variant: 'neutral',
        emphasis: 'high',
      },
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.accent.muted.default, system.color.bg.muted.default),
        color: system.color.fg.inverse,
      },
    },
  ],
  defaultModifiers: {
    variant: 'neutral',
    emphasis: 'low',
  },
});

/**
 * `StatusIndicator` is a container component has a default maximum width of `200px`.
 *
 * ```tsx
 * <StatusIndicator variant="info">
 *   {Child components}
 * </StatusIndicator>
 * ```
 */
export const StatusIndicator = createComponent('div')({
  displayName: 'StatusIndicator',
  subComponents: {
    /**
     * `StatusIndicator.Label` will apply an ellipsis if its contents exceed the component's maximum
     * width.
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
