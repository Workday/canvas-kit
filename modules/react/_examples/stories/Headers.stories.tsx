import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './Headers.mdx';

import {Basic as PageHeaderBasic} from './examples/PageHeader';
import {Basic as GlobalHeaderBasic} from './examples/GlobalHeader';

export default {
  title: 'Examples/Headers',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
};

export const GlobalHeader = {
  render: GlobalHeaderBasic,
};

export const PageHeader = {
  render: PageHeaderBasic,
};
