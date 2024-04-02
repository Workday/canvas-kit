import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './CompoundComponent.mdx';

import {Template} from './examples/compoundComponent/CustomCard';

export default {
  title: 'Examples/Compound Component',
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
  render: Template,
};
