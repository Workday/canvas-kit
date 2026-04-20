import {Menu} from '@workday/canvas-kit-react/menu';

import {customViewport} from '../../../../utils/storybook';
import {MenuWithFallbackPlacements as MenuWithFallbackPlacementsExample} from './examples/MenuWithFallbackPlacements';

export default {
  title: 'Testing/Popups/Menu',
  component: Menu,
  parameters: {
    viewport: {
      viewports: customViewport,
      defaultViewport: 'landscape',
    },
  },
};

export const MenuWithFallbackPlacements = {
  render: MenuWithFallbackPlacementsExample,
};
