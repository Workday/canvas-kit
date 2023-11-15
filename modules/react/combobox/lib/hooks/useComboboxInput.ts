import React from 'react';

import {composeHooks, createElemPropsHook, useForkRef} from '@workday/canvas-kit-react/common';
import {usePopupTarget} from '@workday/canvas-kit-react/popup';

import {useListActiveDescendant} from '@workday/canvas-kit-react/collection';

import {useComboboxModel} from './useComboboxModel';
import {useComboboxInputOpenWithArrowKeys} from './useComboboxInputOpenWithArrowKeys';
import {useSetPopupWidth} from './useSetPopupWidth';
import {useComboboxListKeyboardHandler} from './useComboboxListKeyboardHandler';

/**
 * `useComboboxInput` Adds all attributes necessary to start with a {@link ComboboxInput Combobox.Input}. It opens the
 * menu with arrow keys, uses {@link useListActiveDescendant}, and handles keyboard arrows to
 * navigate items of the menu. You may also compose this hook to add more specific behaviors for
 * your {@link ComboboxInput Combobox.Input}.
 */
export const useComboboxInput = composeHooks(
  createElemPropsHook(useComboboxModel)((model, ref) => {
    const elementRef = useForkRef(ref, model.state.inputRef);

    React.useEffect(() => {
      if (model.state.cursorId && model.state.visibility === 'visible') {
        const item = model.navigation.getItem(model.state.cursorId, model);
        if (model.state.isVirtualized && item) {
          model.state.UNSTABLE_virtual.scrollToIndex(item.index);
        } else {
          const listboxId = model.state.inputRef.current?.getAttribute('aria-controls');
          if (listboxId) {
            const menuItem = document.querySelector(
              `[id="${listboxId}"] [data-id="${model.state.cursorId}"]`
            );
            if (menuItem) {
              requestAnimationFrame(() => {
                menuItem.scrollIntoView({block: 'nearest'});
              });
            }
          }
        }
      }

      // we only want to run this effect if the cursor, visibility and selectedIds change and not any other time
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.state.cursorId, model.state.selectedIds, model.state.visibility]);

    return {
      onKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Enter' && !event.metaKey && model.state.visibility === 'visible') {
          const element = document.querySelector(`[data-id="${model.state.cursorId}"]`);
          if (element && element?.getAttribute('aria-disabled') !== 'true') {
            model.events.select({id: model.state.cursorId});
            if (model.state.mode === 'single') {
              model.events.hide(event);
            }
          }

          // We don't want to submit forms while the combobox is open
          event.preventDefault();
        }
      },
      onBlur(event: React.FocusEvent) {
        model.events.hide(event);
      },
      onChange: model.onChange,
      onClick(event: React.MouseEvent) {
        if (model.state.visibility === 'hidden') {
          model.events.setWidth(event.currentTarget.clientWidth);
        }
      },
      value: model.state.value,
      role: 'combobox',
      'aria-haspopup': true,
      'aria-expanded': model.state.visibility === 'visible',
      'aria-autocomplete': 'list',
      'aria-controls': `${model.state.id}-list`,
      id: model.state.id,
      ref: elementRef,
    } as const;
  }),
  useSetPopupWidth,
  useComboboxInputOpenWithArrowKeys,
  useListActiveDescendant,
  useComboboxListKeyboardHandler,
  usePopupTarget
);
