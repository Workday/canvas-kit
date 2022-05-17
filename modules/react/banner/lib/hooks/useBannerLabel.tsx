import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useBannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `Label` component.
 * Used by the Banner.Label subcomponent
 */
export const useBannerLabel = createElemPropsHook(useBannerModel)(({state}) => {
  return {
    id: `label-${state.id}`,
  };
});
