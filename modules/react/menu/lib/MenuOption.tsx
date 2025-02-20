import * as React from 'react';

import {createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';

import {
  createSubcomponent,
  composeHooks,
  createElemPropsHook,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  isSelected,
  useListItemActiveDescendant,
  useListItemRegister,
} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from './useMenuModel';
import {menuItemStencil} from './MenuItem';

export interface MenuOptionProps {
  /**
   * Optionally pass index to menu item. This should be done if `Menu.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
  /**
   * The label text of the MenuOption.
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
}

export const menuOptionStencil = createStencil({
  extends: menuItemStencil,
  base: {
    '&:where([aria-selected=true])': {
      '& :where([data-part="menu-item-selected"])': {
        opacity: system.opacity.full,
      },
      '&:where(.focus, :focus)': {
        [systemIconStencil.vars.color]: brand.primary.accent,
        outline: 'none',
        backgroundColor: brand.primary.base,
        color: systemIconStencil.vars.color,
      },
    },
  },
});

const MenuOptionIcon = (elemProps: SystemIconProps) => {
  return <SystemIcon data-part="menu-item-icon" {...elemProps} />;
};

const MenuOptionText = ({children}: React.PropsWithChildren) => {
  return (
    <>
      <span data-part="menu-item-text">{children}</span>
      <SystemIcon icon={checkSmallIcon} data-part="menu-item-selected" />
    </>
  );
};

export const StyledMenuOption = createComponent('button')({
  displayName: 'MenuOption',
  Component: ({children, ...elemProps}: MenuOptionProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, menuOptionStencil())}>
        {typeof children === 'string' ? <MenuOptionText>{children}</MenuOptionText> : children}
      </Element>
    );
  },
});

export const useMenuOption = composeHooks(
  createElemPropsHook(useMenuModel)((model, ref, elemProps: {'data-id'?: string} = {}) => {
    const id = elemProps['data-id'] || '';

    const selected = isSelected(id, model.state);

    const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
      // Only left mouse button
      if (event.button === 0) {
        if (event.currentTarget.getAttribute('aria-disabled') !== 'true') {
          model.events.select({id});

          if (model.state.mode === 'single') {
            model.events.hide(event);
          }
        }
      }
      // prevent focus changes
      event.preventDefault();
    };

    return {
      role: 'option',
      'aria-selected': selected,
      onMouseDown,
    };
  }),
  useListItemActiveDescendant,
  useListItemRegister
);

export const MenuOption = createSubcomponent('li')({
  displayName: 'Menu.Item',
  modelHook: useMenuModel,
  elemPropsHook: useMenuOption,
  subComponents: {
    Icon: MenuOptionIcon,
    Text: MenuOptionText,
  },
})<MenuOptionProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip placement="left">
      <StyledMenuOption as={Element} {...elemProps}>
        {children}
      </StyledMenuOption>
    </OverflowTooltip>
  );
});
