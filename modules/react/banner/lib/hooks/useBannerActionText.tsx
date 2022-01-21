import {createHook} from '@workday/canvas-kit-react/common';
import {BannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `ActionText` component.
 * Used by the Banner.ActionText subcomponent
 */
export const useBannerActionText = createHook(({state}: BannerModel) => {
  return {
    id: `action-${state.id}`,
  };
});
