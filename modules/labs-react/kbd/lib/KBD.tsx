import React from 'react';

import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {createContainer} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {KBDItem} from './KBDItem';
import {useKBDModel} from './useKBDModel';

export interface KBDProps extends CSProps {
  /**
   * The children of the `KBD` container. This should contain one or more `KBD.Item` components that
   * each represent a single keyboard key. If `items` are provided to the model, this should be a
   * render prop that returns a `KBD.Item` for each item.
   *
   * @example
   * // static
   * <KBD>
   *   <KBD.Item>⌘</KBD.Item>
   *   <KBD.Item>C</KBD.Item>
   * </KBD>
   *
   * @example
   * // dynamic
   * <KBD items={['⌘', 'C']}>
   *   {item => <KBD.Item>{item}</KBD.Item>}
   * </KBD>
   */
  children?: React.ReactNode | ((item: string) => React.ReactNode);
}

export const kbdStencil = createStencil({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: system.legacy.gap.xs,
  },
  modifiers: {
    variant: {
      plain: {
        color: system.color.fg.muted.default,
      },
      default: {
        color: system.color.fg.muted.strong,
      },
    },
    size: {
      large: {
        span: {
          ...system.type.subtext.lg,
        },
      },
      medium: {
        span: {
          ...system.type.subtext.md,
        },
      },
      small: {
        span: {
          ...system.type.subtext.sm,
        },
      },
    },
  },
});

/**
 * `KBD` is a container component used to visually represent keyboard input, such as keys or
 * keyboard shortcuts. It renders as a semantic `kbd` element and wraps one or more `KBD.Item`
 * components. It is responsible for creating a {@link useKBDModel} and sharing the `size` and
 * `variant` with its `KBD.Item` subcomponents.
 *
 * ```tsx
 * <KBD>
 *   <KBD.Item>⌘</KBD.Item>
 *   <KBD.Item>C</KBD.Item>
 * </KBD>
 * ```
 */
export const KBD = createContainer('kbd')({
  displayName: 'KBD',
  modelHook: useKBDModel,
  subComponents: {
    /**
     * `KBD.Item` renders a single keyboard key as a semantic `kbd` element.
     */
    Item: KBDItem,
  },
})<KBDProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      {...handleCsProp(
        elemProps,
        kbdStencil({size: model.state.size, variant: model.state.variant})
      )}
    >
      {useListRenderItems(model, children)}
    </Element>
  );
});
