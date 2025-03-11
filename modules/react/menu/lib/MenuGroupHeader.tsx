import * as React from 'react';

import {createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {
  createSubcomponent,
  composeHooks,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {useListItemRegister} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from './useMenuModel';

export interface MenuGroupHeaderProps {
  /**
   * The label text of the MenuItem.
   */
  children?: React.ReactNode;
  /**
   * The name of the menu item. This name will be used in the `onSelect` callback in the model. If
   * this property is not provided, it will default to a string representation of the the zero-based
   * index of the Tab when it was initialized.
   */
  'data-id'?: string;
  /**
   * `aria-disabled` is used for keyboard and screen reader users to discover disabled content with
   * the keyboard or screen reader caret tool. For more information, see
   * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls
   */
  'aria-disabled'?: boolean;
  /**
   * If true, set the StyledMenuItem to the disabled state so it is not clickable.
   * @default false
   * @deprecated Use `aria-disabled` instead
   */
  isDisabled?: boolean;
}

export const menuGroupHeaderStencil = createStencil({
  base: {},
});

export const useMenuGroupHeader = createElemPropsHook(useMenuModel)(
  (model, ref, elemProps: {'data-id': string} = {'data-id': ''}) => {
    return {
      role: 'presentation',
    };
  }
);

export const MenuGroupHeader = createSubcomponent('button')({
  displayName: 'Menu.Group',
  modelHook: useMenuModel,
  elemPropsHook: useMenuGroupHeader,
})<MenuGroupHeaderProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip placement="left">
      <Element {...elemProps}>{children}</Element>
    </OverflowTooltip>
  );
});
