import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useSelectModel} from './useSelectModel';

/**
 * Sets the width of the ` SelectCard` to the `Select.Input` width.
 */
export const useSelectCard = createElemPropsHook(useSelectModel)(model => {
  return {
    width: model.state.width,
  } as const;
});
