import {Meta, StoryObj} from '@storybook/react';
import {StylePropsTable} from '@workday/canvas-kit-docs';
import {ExampleCodeBlock} from '../../../utils/storybook';

import mdxDoc from './Basics.mdx';

// examples
import {CreateStyles as CreateStylesExamples} from './examples/CreateStyles';
import {CreateVars as CreateVarsExamples} from './examples/CreateVars';
import {CreateModifiers as CreateModifiersExamples} from './examples/CreateModifiers';
import {CreateStencil as CreateStencilExamples} from './examples/CreateStencil';

export default {
  title: 'Styling/Basics',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {
        ExampleCodeBlock,
        StylePropsTable,
      },
    },
  },
} as Meta;

export const CreateStyles: StoryObj = {
  render: CreateStylesExamples,
};

export const CreateVars: StoryObj = {
  render: CreateVarsExamples,
};

export const CreateModifiers: StoryObj = {
  render: CreateModifiersExamples,
};

export const CreateStencil: StoryObj = {
  render: CreateStencilExamples,
};
