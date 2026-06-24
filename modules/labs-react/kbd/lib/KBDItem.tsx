import React from 'react';

import {useListItemRegister} from '@workday/canvas-kit-react/collection';
import {cornerShapeStencil, createSubcomponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useKBDModel} from './useKBDModel';

export interface KBDItemProps extends CSProps {
  /**
   * The content of the key. This should be the label of a single keyboard key (e.g. `Ctrl`, `⌘`,
   * `Enter`).
   */
  children?: React.ReactNode;
}

export const kbdItemStencil = createStencil({
  extends: cornerShapeStencil,
  base: {
    [cornerShapeStencil.vars.shape]: system.legacy.shape.sm,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modifiers: {
    variant: {
      plain: {
        backgroundColor: system.legacy.color.surface.transparent,
        borderRadius: 0,
        cornerShape: 'unset',
      },
      default: {
        backgroundColor: system.sana.color.surface.alt.default,
      },
    },
  },
  compound: [
    {
      modifiers: {
        size: 'large',
        variant: 'default',
      },
      styles: {
        minWidth: system.legacy.size.xs,
        padding: `${px2rem(2)} ${system.legacy.padding.xxs}`,
      },
    },
    {
      modifiers: {
        size: 'medium',
        variant: 'default',
      },
      styles: {
        minWidth: system.legacy.size.xxs,
        padding: `${px2rem(2)} ${system.legacy.padding.xxs}`,
      },
    },
    {
      modifiers: {
        size: 'small',
        variant: 'default',
      },
      styles: {
        minWidth: system.legacy.size.xxxs,
        paddingInline: px2rem(2),
      },
    },
  ],
});

/**
 * `KBD.Item` renders a single keyboard key as a semantic `kbd` element. It reads the `size` and
 * `variant` from the {@link useKBDModel} provided by the parent `KBD` container.
 */
export const KBDItem = createSubcomponent('kbd')({
  displayName: 'KBD.Item',
  modelHook: useKBDModel,
  elemPropsHook: useListItemRegister,
})<KBDItemProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      {...handleCsProp(
        elemProps,
        kbdItemStencil({variant: model.state.variant, size: model.state.size})
      )}
    >
      <span>{children}</span>
    </Element>
  );
});
