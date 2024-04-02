import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './SearchForm.mdx';

import {SearchFormBasic} from './examples/SearchFormBasic';

export default {
  title: 'Examples/Search Form',
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
  render: SearchFormBasic,
};
