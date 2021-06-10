import {createHook} from '@workday/canvas-kit-react/common';
import {PopupModel} from '@workday/canvas-kit-react/popup';
import {CSSProperties} from 'react';

export const useDialogPopper = createHook(({state}: PopupModel) => {
  return {
    'aria-owns': `dialog-${state.id}`,
    style: {position: 'absolute'} as CSSProperties, // make sure the element doesn't participate in Flex
  };
});
