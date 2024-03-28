import {Meta, StoryObj} from '@storybook/react';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {ExampleCodeBlock} from '../../../../utils/storybook';

import mdxDoc from './STYLE_PROPS.mdx';

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
      },
    },
  },
  excludeStories: ['STYLE_PROPS'],
} as Meta<typeof Expandable>;

export const Background = BackgroundExample;

export const Border = BorderExample;

export const Color = {
  render: ColorExample,
};

export const Depth = {
  render: DepthExample,
};

export const Flex = {
  render: FlexExample,
};

export const FlexItem = {
  render: FlexItemExample,
};

export const Grid = {
  render: GridExample,
};

export const GridItem = {
  render: GridItemExample,
};

export const Layout = {
  render: LayoutExample,
};

export const Other = {
  render: OtherExample,
};

export const Position = {
  render: PositionExample,
};

export const Space = {
  render: SpaceExample,
};

export const Text = {
  render: TextExample,
};
