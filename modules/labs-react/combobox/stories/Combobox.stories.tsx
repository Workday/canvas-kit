import {Meta, StoryObj} from '@storybook/react';
import mdxDoc from './Combobox.mdx';

import {Combobox} from '@workday/canvas-kit-labs-react/combobox';

import {Basic as BasicExample} from './examples/Basic';
import {DisabledItem as DisabledItemExample} from './examples/DisabledItem';
import {GroupOfResult as GroupOfResultExample} from './examples/GroupOfResult';
import {Grow as GrowExample} from './examples/Grow';
import {NoClearButton as NoClearButtonExample} from './examples/NoClearButton';
import {RTL as RTLExample} from './examples/RTL';

const meta: Meta<typeof Combobox> = {
  title: 'Labs/Combobox (deprecated)',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    ReadmePath: 'labs-react/combobox',
    docs: {
      page: mdxDoc,
    },
  },
};

export default meta;

export const Basic: StoryObj = {
  name: 'Autocomplete',
  render: BasicExample,
};

export const Grow: StoryObj = {
  render: GrowExample,
};

export const NoClearButton: StoryObj = {
  render: NoClearButtonExample,
};

export const GroupOfResult: StoryObj = {
  render: GroupOfResultExample,
};

export const DisabledItem: StoryObj = {
  render: DisabledItemExample,
};

export const RTL: StoryObj = {
  render: RTLExample,
};
