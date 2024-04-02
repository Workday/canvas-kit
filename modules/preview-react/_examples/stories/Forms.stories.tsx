import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './Forms.mdx';

import {TextInputWithReactHookForm} from './examples/TextInputWithReactHookForm';

export default {
  title: 'Examples/Preview/Forms',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {
        ExampleCodeBlock,
      },
    },
  },
};

export const UncontrolledTextInputsUsingReactHookForm = {
  parameters: {
    source: {
      isOpened: true,
    },
  },
  render: TextInputWithReactHookForm,
};
