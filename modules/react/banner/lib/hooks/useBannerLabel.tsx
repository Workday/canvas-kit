import {createHook} from '@workday/canvas-kit-react/common';
import {BannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `Label` component.
 * Used by the Banner.Label subcomponent
 */
export const useBannerLabel = createHook(({state}: BannerModel) => {
  return {
    id: `label-${state.id}`,
  };
});
