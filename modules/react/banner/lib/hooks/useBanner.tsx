import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useBannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `Banner` component.
 * Used by the Banner component
 */
export const useBanner = createElemPropsHook(useBannerModel)(({state}) => {
  return {
    'aria-describedby': `label-${state.id}`,
    'aria-labelledby': `action-${state.id}`,
  };
});
