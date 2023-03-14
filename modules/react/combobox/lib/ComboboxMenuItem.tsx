import React from 'react';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {StyledMenuItem, useMenuModel} from '@workday/canvas-kit-react/menu';
import {useListItemRegister} from '@workday/canvas-kit-react/collection';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

import {useComboboxModel} from './useComboboxModel';

export interface ComboboxProps {
  /**
   * Children of the Combobox. Should contain a `<Combobox.Target>`, a `<Combobox.Content>`
   */
  children: React.ReactNode;
}

export const useComboboxMenuItem = composeHooks(
  createElemPropsHook(useMenuModel)(
    (model, _?: React.Ref<HTMLElement>, elemProps: {'data-id'?: string} = {}) => {
      const name = elemProps['data-id'] || '';
      const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        if (
          model.state.nonInteractiveIds.includes(name) ||
          event.currentTarget.hasAttribute('aria-disabled')
        ) {
          return;
        }
        model.events.select({id: name});
        model.events.hide(event);
      };

      return {
        role: 'option',
        onMouseDown,
        className: model.state.cursorId === elemProps['data-id'] ? 'focus' : '',
      } as const;
    }
  ),
  useListItemRegister
);

export const ComboboxMenuItem = createSubcomponent()({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxMenuItem,
})<ComboboxProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip placement="left">
      <StyledMenuItem minHeight="xl" as={Element} {...elemProps}>
        {children}
      </StyledMenuItem>
    </OverflowTooltip>
  );
});
