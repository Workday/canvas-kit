import * as React from 'react';

import {createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {
  createSubcomponent,
  composeHooks,
  createElemPropsHook,
  createModelHook,
  Generic,
  createContainer,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Item, useListItemRegister, useListModel} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from './useMenuModel';

export interface MenuGroupProps {
  /**
   * Optionally pass index to menu item. This should be done if `Menu.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
  /**
   * The children of the `Menu.Group`. Should be {@link MenuGroupHeading Menu.Group.Heading} or {@link MenuItem Menu.Item}.
   * If the `title` prop is provided, the `Menu.Group.Heading` is not needed.
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
  /**
   *
   */
  title?: string;
}

const useMenuGroupModel = createModelHook({
  defaultConfig: {
    id: undefined as string | undefined,
  },
  requiredConfig: {},
})(config => {
  const state = {
    id: useUniqueId(config.id),
  };
  const events = {};

  return {
    state,
    events,
  };
});

export const menuGroupStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: system.space.x4,
    padding: `${system.space.x2} ${system.space.x4}`,
    boxSizing: 'border-box',
    fontWeight: system.fontWeight.bold,
  },
});

export const useMenuGroup = createElemPropsHook(useMenuGroupModel)(
  (model, ref, elemProps: {'data-id': string} = {'data-id': ''}) => {
    return {
      'data-type': 'group',
      role: 'group',
      'aria-labelledby': model.state.id,
    };
  }
);

export const useMenuGroupHeading = createElemPropsHook(useMenuGroupModel)(
  (model, ref, elemProps) => {
    return {
      id: model.state.id,
    };
  }
);

const MenuGroupHeading = createSubcomponent('div')({
  modelHook: useMenuGroupModel,
  elemPropsHook: useMenuGroupHeading,
})(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip>
      <Element {...mergeStyles(elemProps, menuGroupStencil())}>{children}</Element>
    </OverflowTooltip>
  );
});

export const MenuGroup = createContainer('div')({
  displayName: 'Menu.Group',
  modelHook: useMenuGroupModel,
  elemPropsHook: useMenuGroup,
  subComponents: {
    Heading: MenuGroupHeading,
  },
})<MenuGroupProps>(({children, title, ...elemProps}, Element) => {
  return (
    <Element {...elemProps}>
      {title ? <MenuGroupHeading>{title}</MenuGroupHeading> : null}
      {children}
    </Element>
  );
});
