import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useSelectModel} from './useSelectModel';

/**
 * Set the width of the menu card to the input width
 */
export const useSelectCard = createElemPropsHook(useSelectModel)(model => {
  return {
    width: model.state.width,
  } as const;
});
