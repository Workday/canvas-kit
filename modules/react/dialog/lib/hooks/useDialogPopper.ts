import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {usePopupModel} from '@workday/canvas-kit-react/popup';
import {CSSProperties} from 'react';

export const useDialogPopper = createElemPropsHook(usePopupModel)(({state}) => {
  return {
    'aria-owns': `dialog-${state.id}`,
    style: {position: 'absolute'} as CSSProperties, // make sure the element doesn't participate in Flex
  };
});
