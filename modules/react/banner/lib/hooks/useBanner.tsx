import {createHook} from '@workday/canvas-kit-react/common';
import {BannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `Banner` component.
 * Used by the Banner component
 */
export const useBanner = createHook(({state}: BannerModel) => {
  return {
    'aria-describedby': `label-${state.id}`,
    'aria-labelledby': `action-${state.id}`,
  };
});
