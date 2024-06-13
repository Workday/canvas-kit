import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Popup.mdx';

import {Popup} from '@workday/canvas-kit-react/popup';

import {Basic as BasicExample} from './examples/Basic';
import {InitialFocus as InitialFocusExample} from './examples/InitialFocus';
import {MultiplePopups as MultiplePopupsExample} from './examples/MultiplePopups';
import {NestedPopups as NestedPopupsExample} from './examples/NestedPopups';
import {FocusRedirect as FocusRedirectExample} from './examples/FocusRedirect';
import {FocusTrap as FocusTrapExample} from './examples/FocusTrap';
import {RTL as RTLExample} from './examples/RTL';
import {CustomTarget as CustomTargetExample} from './examples/CustomTarget';
import {FullScreen as FullScreenExample} from './examples/FullScreen';

export default {
  title: 'Components/Popups/Popup',
  component: Popup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Popup>;

type Story = StoryObj<typeof Popup>;

export const Basic: Story = {
  render: BasicExample,
};
export const InitialFocus: Story = {
  render: InitialFocusExample,
};
export const MultiplePopups: Story = {
  render: MultiplePopupsExample,
};
export const NestedPopups: Story = {
  render: NestedPopupsExample,
};
export const FocusRedirect: Story = {
  render: FocusRedirectExample,
};
export const FocusTrap: Story = {
  render: FocusTrapExample,
};
export const RTL: Story = {
  render: RTLExample,
};
export const CustomTarget: Story = {
  render: CustomTargetExample,
};
export const FullScreen: Story = {
  render: FullScreenExample,
};
