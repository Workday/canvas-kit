import {CanvasSystemIcon} from '@workday/design-assets-types';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import {useBannerModel} from './useBannerModel';

/**
 * Adds the necessary props to a `Icon` component.
 * Used by the Banner.Icon subcomponent
 */
export const useBannerIcon = createElemPropsHook(useBannerModel)(({state}) => {
  const icon = state.hasError ? exclamationCircleIcon : exclamationTriangleIcon;

  return {
    icon: icon as CanvasSystemIcon,
    size: 24,
  };
});
