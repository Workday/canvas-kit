import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './CookieBanner.mdx';

import {BasicExample} from './examples/CookieBanner';

export default {
  title: 'Examples/Cookie Banner',
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
