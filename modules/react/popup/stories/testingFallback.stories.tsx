import {customViewport} from '../../../../utils/storybook';
import {Popup} from '@workday/canvas-kit-react/popup';
import {PopupWithFallbackPlacements as PopupWithFallbackPlacementsExample} from './examples/PopupWithFallbackPlacements';

export default {
  title: 'Testing/Popups/Popup',
  component: Popup,
  parameters: {
    viewport: {
      viewports: customViewport,
      defaultViewport: 'landscape',
    },
  },
};

export const PopupWithFallbackPlacements = {
  render: PopupWithFallbackPlacementsExample,
};
