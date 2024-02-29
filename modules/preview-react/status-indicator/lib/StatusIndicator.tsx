import React from 'react';

import {ExtractProps, createContainer} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {StatusIndicatorIcon} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';
import {useStatusIndicatorModel} from './hooks';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

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
    padding: `${system.space.zero} ${px2rem(4)}`,
  },
  modifiers: {
    gray: {
      high: {
        color: base.frenchVanilla100,
        background: base.licorice300,
      },
      low: {
        color: base.licorice400,
        background: base.soap300,
      },
    },
    orange: {
      high: {
        color: base.licorice500,
        background: base.cantaloupe400,
      },
      low: {
        color: base.toastedMarshmallow600,
        background: base.cantaloupe100,
      },
    },
    blue: {
      high: {
        color: base.frenchVanilla100,
        background: base.blueberry400,
      },
      low: {
        color: base.blueberry500,
        background: base.blueberry100,
      },
    },
    green: {
      high: {
        color: base.frenchVanilla100,
        background: base.greenApple600,
      },
      low: {
        color: base.greenApple600,
        background: base.greenApple100,
      },
    },
    red: {
      high: {
        color: base.frenchVanilla100,
        background: base.cinnamon500,
      },
      low: {
        color: base.cinnamon600,
        background: base.cinnamon100,
      },
    },
    transparent: {
      high: {
        opacity: 0.85,
        color: base.frenchVanilla100,
        background: base.blackPepper600,
      },
      low: {
        opacity: 0.85,
        color: base.frenchVanilla100,
        background: base.blackPepper600,
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
