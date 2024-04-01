import {Meta} from '@storybook/react';
import {Specifications} from '@workday/canvas-kit-docs';
import {ExampleCodeBlock} from '../../../../utils/storybook';

import mdxDoc from './CompoundComponentUtilities.mdx';

import {CreateModelHook as CreateModelHookExample} from './examples/CreateModelHook';
import {CreateContainer as CreateContainerExample} from './examples/CreateContainer';
import {CreateSubcomponent as CreateSubcomponentExample} from './examples/CreateSubcomponent';
import {CreateElemPropsHook as CreateElemPropsHookExample} from './examples/CreateElemPropsHook';
import {CreateComponent as CreateComponentExample} from './examples/CreateComponent';

export default {
  title: 'Hooks and Utilities/Compound Components',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {
        ExampleCodeBlock,
        Specifications,
      },
    },
  },
} as Meta;

export const CreateModelHook = {
  render: CreateModelHookExample,
};
export const CreateContainer = {
  render: CreateContainerExample,
};
export const CreateSubcomponent = {
  render: CreateSubcomponentExample,
};
export const CreateElemPropsHook = {
  render: CreateElemPropsHookExample,
};
export const CreateComponent = {
  render: CreateComponentExample,
};
