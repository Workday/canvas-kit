import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useBannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `ActionText` component.
 * Used by the Banner.ActionText subcomponent
 */
export const useBannerActionText = createElemPropsHook(useBannerModel)(({state}) => {
  return {
    id: `action-${state.id}`,
  };
});
