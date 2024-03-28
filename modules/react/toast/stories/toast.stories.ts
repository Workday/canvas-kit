import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './toast.mdx';

import {Toast} from '@workday/canvas-kit-react/toast';
import {Basic as BasicExample} from './examples/Basic';
import {ToastAlert as ToastAlertExample} from './examples/ToastAlert';
import {ToastDialog as ToastDialogExample} from './examples/ToastDialog';
import {WithActionLinkAndCloseIcon as WithActionLinkAndCloseIconExample} from './examples/WithActionLinkAndCloseIcon';
import {WithPopper as WithPopperExample} from './examples/WithPopper';
import {RTL as RTLExample} from './examples/RTL';

export default {
  title: 'Components/Popups/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof Toast>;

type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  render: BasicExample,
};
export const ToastAlert: Story = {
  render: ToastAlertExample,
};
export const ToastDialog: Story = {
  render: ToastDialogExample,
};
export const WithActionLinkAndCloseIcon: Story = {
  render: WithActionLinkAndCloseIconExample,
};
export const WithPopper: Story = {
  render: WithPopperExample,
};
export const RTL: Story = {
  render: RTLExample,
};
