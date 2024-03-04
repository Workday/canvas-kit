import React from 'react';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {StyledMenuItem, useMenuModel} from '@workday/canvas-kit-react/menu';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {
  useListItemAllowChildStrings,
  useListItemRegister,
} from '@workday/canvas-kit-react/collection';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

import {useComboboxModel} from './hooks/useComboboxModel';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '../../layout';

export interface ComboboxMenuItemProps {
  children: React.ReactNode;
}

/**
 * This hook sets up accessibility and behavior of a {@link ComboboxMenuItem Combobox.Menu.Item}
 * component. It prevents focus when clicking so the focus stays on the
 * {@link ComboboxInput Combobox.Input} component and selects an item when the user clicks on it. It
 * also prevents items with an `aria-disabled` attribute from being selected. A `focus` CSS class is
 * added when the item has "focus" (when the cursor is on the item).
 */
export const useComboboxMenuItem = composeHooks(
  createElemPropsHook(useMenuModel)((model, ref, elemProps: {'data-id'?: string} = {}) => {
    const id = elemProps['data-id'] || '';

    const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
      if (event.currentTarget.getAttribute('aria-disabled') !== 'true') {
        model.events.select({id});

        if (model.state.mode === 'single') {
          model.events.hide(event);
        }
      }

      // prevent focus changes
      event.preventDefault();
    };

    const selected = model.state.cursorId === id;

    return {
      role: 'option',
      'aria-selected': selected || undefined,
      onMouseDown,
      className:
        model.state.cursorId && model.state.cursorId === elemProps['data-id'] ? 'focus' : '',
    } as const;
  }),
  useListItemRegister,
  useListItemAllowChildStrings
);
const comboboxMenuItemIconStencil = createStencil({
  base: {
    alignSelf: 'start',
  },
});

export const ComboboxMenuItemIcon = createSubcomponent('span')({
  modelHook: useComboboxModel,
})<ExtractProps<typeof SystemIcon>>(({...elemProps}, Element) => {
  return <SystemIcon {...mergeStyles(elemProps, comboboxMenuItemIconStencil())} />;
});

const comboboxMenuItemStencil = createStencil({
  base: {
    minHeight: system.space.x10,
  },
});

export const ComboboxMenuItem = createSubcomponent('li')({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxMenuItem,
  subComponents: {
    Icon: ComboboxMenuItemIcon,
  },
})<ComboboxMenuItemProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip placement="left">
      <StyledMenuItem as={Element} {...mergeStyles(elemProps as any, comboboxMenuItemStencil())}>
        {children}
      </StyledMenuItem>
    </OverflowTooltip>
  );
});
