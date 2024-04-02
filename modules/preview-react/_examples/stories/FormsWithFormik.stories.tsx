import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './FormsWithFormik.mdx';

import {SelectWithFormik} from './examples/SelectWithFormik';
import {TextInputWithFormik} from './examples/TextInputWithFormik';

export default {
  title: 'Examples/Preview/Forms/With Formik',
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

export const Select = {
  render: SelectWithFormik,
};

export const ControlledTextInput = {
  render: TextInputWithFormik,
};
