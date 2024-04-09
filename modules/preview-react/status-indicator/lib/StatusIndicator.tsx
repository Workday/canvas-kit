import React from 'react';

import {ExtractProps, createContainer, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {StatusIndicatorIcon, statusIndicatorColors} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';
import {useStatusIndicatorModel} from './hooks';

export interface StatusIndicatorProps extends ExtractProps<typeof Flex, never> {
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
    padding: `${system.space.zero} ${system.space.x1}}`,
  },
  modifiers: {
    gray: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.gray.default,
      },
      low: {
        color: system.color.static.gray.strong,
        [systemIconStencil.vars.color]: system.color.static.gray.strong,
        background: system.color.static.gray.soft,
      },
    },
    orange: {
      high: {
        color: system.color.static.gray.stronger,
        [systemIconStencil.vars.color]: system.color.static.gray.stronger,
        background: base.cantaloupe400,
      },
      low: {
        color: system.color.static.gold.stronger,
        [systemIconStencil.vars.color]: system.color.static.gold.stronger,
        background: system.color.static.orange.soft,
      },
    },
    blue: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.blue.default,
      },
      low: {
        color: system.color.text.primary.strong,
        [systemIconStencil.vars.color]: system.color.icon.primary.strong,
        background: system.color.static.blue.soft,
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
        background: system.color.static.green.soft,
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
        background: system.color.static.red.soft,
      },
    },
    transparent: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.bg.overlay,
      },
      low: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.bg.overlay,
      },
    },
  },
  defaultModifiers: {
    gray: 'low',
  },
});

/**
 * @deprecated ⚠️ We've deprecated `useStatusIndicator` for StatusIndicator because it's now directly handeled by the `statusIndicatorStencil`.
 */
export const useStatusIndicator = createElemPropsHook(useStatusIndicatorModel)(({state}) => {
  const colors = statusIndicatorColors[state.variant][state.emphasis];
  return {
    opacity: state.variant === 'transparent' ? '0.85' : undefined,
    color: colors.text,
    background: colors.background,
  };
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
export const StatusIndicator = createContainer('div')({
  displayName: 'StatusIndicator',
  modelHook: useStatusIndicatorModel,
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
})<StatusIndicatorProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      {...mergeStyles(
        elemProps,
        statusIndicatorStencil({[model.state.variant]: model.state.emphasis})
      )}
    >
      {children}
    </Element>
  );
});
