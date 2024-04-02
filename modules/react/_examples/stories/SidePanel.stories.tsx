import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './SidePanel.mdx';

import {WithNavigation} from './examples/SidePanelWithNavigation';
import {WithOverlay} from './examples/SidePanelWithOverlay';

export default {
  title: 'Examples/Side Panel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
};

export const SidePanelWithNavigation = {
  render: WithNavigation,
};

export const SidePanelWithOverlay = {
  render: WithOverlay,
};
