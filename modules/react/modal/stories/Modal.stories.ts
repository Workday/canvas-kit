import {Meta, StoryObj} from '@storybook/react';

import {Modal} from '@workday/canvas-kit-react/modal';

import mdxDoc from './Modal.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {BodyOverflow as BodyOverflowExample} from './examples/BodyOverflow';
import {CustomFocus as CustomFocusExample} from './examples/CustomFocus';
import {CustomTarget as CustomTargetExample} from './examples/CustomTarget';
import {FormModal as FormModalExample} from './examples/FormModal';
import {FullOverflow as FullOverflowExample} from './examples/FullOverflow';
import {IframeTest as IFrameExample} from './examples/IframeTest';
import {ReturnFocus as ReturnFocusExample} from './examples/ReturnFocus';
import {WithoutCloseIcon as WithoutCloseIconExample} from './examples/WithoutCloseIcon';

export default {
  title: 'Components/Popups/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: BasicExample,
};
export const WithoutCloseIcon: Story = {
  render: WithoutCloseIconExample,
};
export const CustomFocus: Story = {
  render: CustomFocusExample,
};
export const ReturnFocus: Story = {
  render: ReturnFocusExample,
};
export const CustomTarget: Story = {
  render: CustomTargetExample,
};
export const BodyOverflow: Story = {
  render: BodyOverflowExample,
};
export const FullOverflow: Story = {
  render: FullOverflowExample,
};
export const FormModal: Story = {
  render: FormModalExample,
};
export const Iframe: Story = {
  render: IFrameExample,
};
