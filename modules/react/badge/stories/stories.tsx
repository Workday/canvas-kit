import React from 'react';

import {CountBadge} from '../index';

export default {
  title: 'Components/Indicators/Badge',
  component: CountBadge,
  parameters: {ReadmePath: 'react/badge'},
  argTypes: {
    count: {
      control: {type: 'number'},
    },
    limit: {
      control: {type: 'number'},
    },
    variant: {
      options: ['default', 'inverse'],
      control: {type: 'select'},
    },
  },
};

const Template = props => <CountBadge count={1} {...props} />;

export const Default = Template.bind({});
(Default as any).args = {
  count: 1,
};

export const Inverse = Template.bind({});
(Inverse as any).args = {
  count: 1,
  variant: 'inverse',
};

export const CustomLimit = Template.bind({});
(CustomLimit as any).args = {
  count: 100,
  limit: 100,
};
