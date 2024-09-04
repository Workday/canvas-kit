import {Meta, StoryObj} from '@storybook/react';
import {Source, Canvas, Title} from '@storybook/blocks';

import mdxDoc from './Modal.mdx';

import {Modal} from '@workday/canvas-kit-react/modal';

import {Basic as BasicExample} from './examples/Basic';
import {WithoutCloseIcon as WithoutCloseIconExample} from './examples/WithoutCloseIcon';
import {CustomFocus as CustomFocusExample} from './examples/CustomFocus';
import {ReturnFocus as ReturnFocusExample} from './examples/ReturnFocus';
import {CustomTarget as CustomTargetExample} from './examples/CustomTarget';
import {BodyOverflow as BodyOverflowExample} from './examples/BodyOverflow';
import {FullOverflow as FullOverflowExample} from './examples/FullOverflow';
import {FormModal as FormModalExample} from './examples/FormModal';

// export default {
//   title: 'Components/Popups/Modal',
//   component: Modal,
//   tags: ['autodocs'],
//   parameters: {
//     docs: {
//       page: mdxDoc,
//     },
//   },
// } as Meta<typeof Modal>;

// type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
  title: 'Components/Popups/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
};

export default meta;
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
