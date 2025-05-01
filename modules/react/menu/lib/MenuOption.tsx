import * as React from 'react';

import {checkSmallIcon} from '@workday/canvas-system-icons-web';

import {
  createSubcomponent,
  composeHooks,
  createElemPropsHook,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  isSelected,
  useListItemActiveDescendant,
  useListItemRegister,
} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from './useMenuModel';
import {menuItemStencil, MenuItem, MenuItemProps} from './MenuItem';

const MenuOptionText = createComponent('span')({
  Component: ({...elemProps}, ref, Element) => {
    return (
      <>
        <MenuItem.Text ref={ref} as={Element} {...elemProps} />
        <SystemIcon {...menuItemStencil.parts.selected} icon={checkSmallIcon} />
      </>
    );
  },
});

export const StyledMenuOption = createComponent('li')({
  displayName: 'MenuOption',
  Component: ({children, ...elemProps}: MenuItemProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, menuItemStencil())}>
        {typeof children === 'string' ? <MenuOptionText>{children}</MenuOptionText> : children}
      </Element>
    );
  },
});

export const useMenuOption = composeHooks(
  createElemPropsHook(useMenuModel)((model, _ref, elemProps: {'data-id'?: string} = {}) => {
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
    Icon: MenuItem.Icon,
    Text: MenuOptionText,
  },
})<MenuItemProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip placement="left">
      <StyledMenuOption as={Element} {...elemProps}>
        {children}
      </StyledMenuOption>
    </OverflowTooltip>
  );
});
