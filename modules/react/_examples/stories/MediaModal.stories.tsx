import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './MediaModal.mdx';

import {BasicExample} from './examples/MediaModal';

export default {
  title: 'Examples/Media Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
};

export const Basic = {
  parameters: {
    source: {
      isOpened: true,
    },
  },
  render: BasicExample,
};
