import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import {useBannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `Icon` component.
 * Used by the Banner.Icon subcomponent
 */
export const useBannerIcon = createElemPropsHook(useBannerModel)(({state}) => {
  return {
    icon: state.hasError ? exclamationCircleIcon : exclamationTriangleIcon,
    size: 24,
  };
});
