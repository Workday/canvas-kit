import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {KBDItem} from './KBDItem';

export interface KBDProps extends CSProps {
  /**
   * The children of the `KBD` container. This should contain one or more `KBD.Item` components that
   * each represent a single keyboard key.
   */
  children?: React.ReactNode;
  /**
   * The size of the `KBD` container.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the `KBD` keys.
   * @default 'default'
   */
  variant?: 'plain' | 'default';
}

export const kbdStencil = createStencil({
  parts: {
    item: 'kbd-item',
  },
  base: ({itemPart}) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: system.legacy.gap.xs,
    [itemPart]: {
      textAlign: 'center',
    },
  }),
  modifiers: {
    variant: {
      plain: ({itemPart}) => ({
        [itemPart]: {
          backgroundColor: system.legacy.color.surface.transparent,
          color: system.color.fg.muted.default,
          padding: 0,
        },
      }),
      default: ({itemPart}) => ({
        [itemPart]: {
          backgroundColor: system.sana.color.surface.alt.default,
          color: system.color.fg.muted.strong,
          borderRadius: system.sana.shape.sm,
          cornerShape: 'superellipse(1.1)',
        },
      }),
    },
    size: {
      large: ({itemPart}) => ({
        [itemPart]: {
          ...system.type.subtext.lg,
        },
      }),
      medium: ({itemPart}) => ({
        [itemPart]: {
          ...system.type.subtext.md,
        },
      }),
      small: ({itemPart}) => ({
        [itemPart]: {
          ...system.type.subtext.sm,
        },
      }),
    },
  },
  compound: [
    {
      modifiers: {
        size: 'large',
        variant: 'default',
      },
      styles: ({itemPart}) => ({
        [itemPart]: {
          minWidth: system.legacy.size.xs,
          padding: `${px2rem(2)} ${system.legacy.padding.xxs}`,
        },
      }),
    },
    {
      modifiers: {
        size: 'medium',
        variant: 'default',
      },
      styles: ({itemPart}) => ({
        [itemPart]: {
          minWidth: system.legacy.size.xxs,
          padding: `${px2rem(2)} ${system.legacy.padding.xxs}`,
        },
      }),
    },
    {
      modifiers: {
        size: 'small',
        variant: 'default',
      },
      styles: ({itemPart}) => ({
        [itemPart]: {
          minWidth: system.legacy.size.xxxs,
          padding: px2rem(2),
        },
      }),
    },
  ],
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
  Component: (
    {variant = 'default', size = 'medium', children, ...elemProps}: KBDProps,
    ref,
    Element
  ) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, kbdStencil({variant, size}))}>
        {children}
      </Element>
    );
  },
});
