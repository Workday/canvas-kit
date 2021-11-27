import {createHook} from '@workday/canvas-kit-react/common';
import {BannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `Action` component.
 * Used by the Banner.Action subcomponent
 */
export const useBannerAction = createHook(({state}: BannerModel) => {
  return {
    id: `action-${state.id}`,
  };
});
