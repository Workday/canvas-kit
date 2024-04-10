import {Meta, StoryObj} from '@storybook/react';
import {StylePropsTable} from '@workday/canvas-kit-docs';
import {ExampleCodeBlock} from '../../../utils/storybook';

import mdxDoc from '../mdx/style-props/STYLE_PROPS.mdx';

// examples
import {BackgroundExample} from './examples/Background';
import {BorderExample} from './examples/Border';
import {ColorExample} from './examples/Color';
import {DepthExample} from './examples/Depth';
import {FlexExample} from './examples/Flex';
import {FlexItemExample} from './examples/FlexItem';
import {GridExample} from './examples/Grid';
import {GridItemExample} from './examples/GridItem';
import {LayoutExample} from './examples/Layout';
import {OtherExample} from './examples/Other';
import {PositionExample} from './examples/Position';
import {SpaceExample} from './examples/Space';
import {TextExample} from './examples/Text';

export default {
  title: 'Features/Style Props',
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

export const Background: StoryObj = {
  render: BackgroundExample,
};

export const Border: StoryObj = {
  render: BorderExample,
};

export const Color: StoryObj = {
  render: ColorExample,
};

export const Depth: StoryObj = {
  render: DepthExample,
};

export const Flex: StoryObj = {
  render: FlexExample,
};

export const FlexItem: StoryObj = {
  render: FlexItemExample,
};

export const Grid: StoryObj = {
  render: GridExample,
};

export const GridItem: StoryObj = {
  render: GridItemExample,
};

export const Layout: StoryObj = {
  render: LayoutExample,
};

export const Other: StoryObj = {
  render: OtherExample,
};

export const Position: StoryObj = {
  render: PositionExample,
};

export const Space: StoryObj = {
  render: SpaceExample,
};

export const Text: StoryObj = {
  render: TextExample,
};
