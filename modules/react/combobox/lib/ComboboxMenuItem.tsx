import React from 'react';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {StyledMenuItem, useMenuModel} from '@workday/canvas-kit-react/menu';
import {
  useListItemActiveDescendant,
  useListItemRegister,
} from '@workday/canvas-kit-react/collection';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

import {useComboboxModel} from './useComboboxModel';

export interface ComboboxMenuItemProps {
  /**
   * Children of the Combobox. Should contain a `<Combobox.Target>`, a `<Combobox.Content>`
   */
  children: React.ReactNode;
}

export const useComboboxMenuItem = composeHooks(
  createElemPropsHook(useMenuModel)(
    (model, _?: React.Ref<HTMLElement>, elemProps: {'data-id'?: string} = {}) => {
      const id = elemProps['data-id'] || '';
      const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        if (
          model.state.nonInteractiveIds.includes(id) ||
          event.currentTarget.hasAttribute('aria-disabled')
        ) {
          return;
        }
        if (event.currentTarget.getAttribute('aria-disabled') !== 'true') {
          model.events.select({id});
          if (model.state.mode === 'single') {
            model.events.hide(event);
          }
        }

        // prevent focus changes
        event.preventDefault();
      };

      const selected =
        model.state.selectedIds === 'all' || model.state.selectedIds.includes(id) || undefined;

      return {
        role: 'option',
        'aria-selected': selected,
        onMouseDown,
        className: model.state.cursorId === elemProps['data-id'] ? 'focus' : '',
      } as const;
    }
  ),
  useListItemActiveDescendant,
  useListItemRegister
);

export const ComboboxMenuItem = createSubcomponent('li')({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxMenuItem,
})<ComboboxMenuItemProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip placement="left">
      <StyledMenuItem minHeight="xl" as={Element} {...(elemProps as any)}>
        {children}
      </StyledMenuItem>
    </OverflowTooltip>
  );
});
