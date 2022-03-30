import {createHook} from '@workday/canvas-kit-react/common';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import {BannerModel} from './useBannerModel';
import {useThemedPalette} from './useThemedPalette';

/**
 * Adds the necessary props to a `Icon` component.
 * Used by the Banner.Icon subcomponent
 */
export const useBannerIcon = createHook(({state}: BannerModel) => {
  const palette = useThemedPalette(state.hasError ? 'error' : 'alert');

  return {
    icon: state.hasError ? exclamationCircleIcon : exclamationTriangleIcon,
    color: palette.contrast,
    colorHover: palette.contrast,
    size: 24,
  };
});
