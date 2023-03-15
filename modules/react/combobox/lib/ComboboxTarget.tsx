import React from 'react';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  dispatchInputEvent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {usePopupTarget} from '@workday/canvas-kit-react/popup';
import {
  useListActiveDescendant,
  useListKeyboardHandler,
} from '@workday/canvas-kit-react/collection';

import {useComboboxModel} from './useComboboxModel';

export const useComboboxTarget = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    return {
      onKeyDown(event: React.KeyboardEvent) {
        if (
          event.key === 'ArrowDown' ||
          (event.key === 'ArrowUp' && model.state.visibility !== 'visible')
        ) {
          model.events.show(event);
          model.events.setWidth(event.currentTarget.clientWidth);
        }
        if (event.key === 'Escape') {
          dispatchInputEvent(event.currentTarget as HTMLElement, '');
        }
        if (event.key === 'Enter' && !event.metaKey && model.state.visibility === 'visible') {
          model.events.select({id: model.state.cursorId});
          if (model.state.mode === 'single') {
            model.events.hide(event);
          }

          // We don't want to submit forms while the combobox is open
          event.preventDefault();
        }
      },
      onChange: model.onChange,
      onClick(event: React.MouseEvent) {
        if (model.state.visibility === 'hidden') {
          model.events.setWidth(event.currentTarget.clientWidth);
        }
      },
      value: model.state.value || undefined,
      role: 'combobox',
      'aria-haspopup': true,
      'aria-expanded': model.state.visibility === 'visible',
      'aria-autocomplete': 'list',
      'aria-controls': `${model.state.id}-list`,
      id: model.state.id,
    };
  }),
  useListActiveDescendant,
  useListKeyboardHandler,
  usePopupTarget
);

export const ComboboxTarget = createSubcomponent(TextInput)({
  displayName: 'Combobox.Target',
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxTarget,
})<ExtractProps<typeof TextInput, never>>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
