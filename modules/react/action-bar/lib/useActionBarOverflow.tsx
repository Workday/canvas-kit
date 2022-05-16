import * as React from 'react';
import {createElemPropsHook, composeHooks} from '@workday/canvas-kit-react/common';
import {
  useListItemRovingFocus,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {useActionBarModel} from './useActionBarModel';

/**
 * useActionBarOverflow hook handles specific rules for ActionBar overflow
 * such as limited buttons to 3 and always shown first action
 * in addition to regular overflow rules based on container width
 */
export const useActionBarOverflow = composeHooks(
  useOverflowListItemMeasure,
  useListItemRovingFocus,
  createElemPropsHook(useActionBarModel)(
    ({state, events}, _?: React.Ref<HTMLButtonElement>, elemProps: {'data-id'?: string} = {}) => {
      const name = elemProps['data-id'] || '';
      const index = state.items.map(item => item.id).indexOf(name);
      const [item] = state.items.filter(item => item.id === name);
      const isHidden = state.hiddenIds.includes(name);

      let props = {};

      // Hide all item after third button
      // Place them into an overflow menu
      if (index > 2 && !isHidden) {
        events.addHiddenKey(item);
        props = {
          style: {position: 'absolute', left: -99999},
          tabIndex: -1,
        };
      }

      // Always display first button even it's hidden because of screen width
      if (index === 0 && isHidden) {
        events.removeHiddenKey(item);
      }

      return props;
    }
  )
);
