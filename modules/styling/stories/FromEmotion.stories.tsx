import {Meta, StoryObj} from '@storybook/react';
import {StylePropsTable} from '@workday/canvas-kit-docs';
import {ExampleCodeBlock} from '../../../utils/storybook';

import mdxDoc from './FromEmotion.mdx';

// examples
import {EmotionButton as EmotionButtonExample} from './examples/EmotionButton';
import {ManualStylesButton as ManualStylesButtonExample} from './examples/ManualStylesButton';
import {StylingButton as StylingButtonExample} from './examples/StylingButton';

export default {
  title: 'Styling/Converting From Emotion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {
        ExampleCodeBlock,
      },
    },
  },
} as Meta;

export const EmotionButton: StoryObj = {
  render: EmotionButtonExample,
};

export const ManualStylesButton: StoryObj = {
  render: ManualStylesButtonExample,
};

export const StylingButton: StoryObj = {
  render: StylingButtonExample,
};
