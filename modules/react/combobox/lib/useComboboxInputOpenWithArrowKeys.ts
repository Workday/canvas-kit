import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useComboboxModel} from './useComboboxModel';

/**
 * Opens a combobox with the up/down arrow keys. This should be used only on the input element of a
 * combobox. It adds a keydown listener for the up/down arrow keys.
 */
export const useComboboxInputOpenWithArrowKeys = createElemPropsHook(useComboboxModel)(model => {
  return {
    onKeyDown(event: React.KeyboardEvent) {
      if (
        event.key === 'ArrowDown' ||
        (event.key === 'ArrowUp' && model.state.visibility !== 'visible')
      ) {
        model.events.show(event);
        model.events.setWidth(event.currentTarget.clientWidth);
      }
    },
  };
});
