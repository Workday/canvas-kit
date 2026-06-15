import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {KBDItem} from './KBDItem';

export interface KBDProps extends CSProps {
  /**
   * The variant of the `KBD` keys.
   * @default 'default'
   */
  variant?: 'ghost' | 'default';
  /**
   * The children of the `KBD` container. This should contain one or more `KBD.Item` components that
   * each represent a single keyboard key.
   */
  children?: React.ReactNode;
}

export const kbdStencil = createStencil({
  parts: {
    item: 'kbd-item',
  },
  base: ({itemPart}) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: system.gap.xs,
    [itemPart]: {
      ...system.type.subtext.lg,
      cornerShape: 'superellipse(1.1)',
      borderRadius: system.sana.shape.sm,
      textAlign: 'center',
    },
  }),
  modifiers: {
    variant: {
      ghost: ({itemPart}) => ({
        [itemPart]: {
          backgroundColor: system.legacy.color.surface.transparent,
        },
      }),
      default: ({itemPart}) => ({
        [itemPart]: {
          backgroundColor: system.sana.color.surface.alt.default,
          padding: system.padding.xxs,
          minWidth: system.size.xxs,
        },
      }),
    },
  },
});

/**
 * `KBD` is a container component used to visually represent keyboard input, such as keys or
 * keyboard shortcuts. It renders as a semantic `kbd` element and wraps one or more `KBD.Item`
 * components.
 *
 * ```tsx
 * <KBD>
 *   <KBD.Item>⌘</KBD.Item>
 *   <KBD.Item>C</KBD.Item>
 * </KBD>
 * ```
 */
export const KBD = createComponent('kbd')({
  displayName: 'KBD',
  subComponents: {
    /**
     * `KBD.Item` renders a single keyboard key as a semantic `kbd` element.
     */
    Item: KBDItem,
  },
  Component: ({variant = 'default', children, ...elemProps}: KBDProps, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, kbdStencil({variant}))}>
        {children}
      </Element>
    );
  },
});
