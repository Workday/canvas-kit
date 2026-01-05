import React from 'react';

import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';

import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {Avatar} from '../../index';
// @ts-ignore: Cannot find module error
import testAvatar from '../test-avatar.png';

// eslint-disable-next-line no-empty-function
const noop = () => {};

export default withSnapshotsEnabled({
  title: 'Testing/Indicators/Avatar',
  component: Avatar,
  parameters: {
    chromatic: {
      diffThreshold: 0.3, // Chrome downsizes images non-deterministically. From testing, 0.28 is the minimum.
      delay: 300, // Ensure we capture the image after loading and transition
    },
  },
});

export const AvatarStates = () => (
  <StaticStates>
    <ComponentStatesTable
      columnProps={permutateProps({
        className: [
          {label: 'Default', value: ''},
          {label: 'Hover', value: 'hover'},
          {label: 'Focus', value: 'focus'},
          {label: 'Focus Hover', value: 'focus hover'},
          {label: 'Active', value: 'active'},
          {label: 'Active Hover', value: 'active hover'},
        ],
      })}
      rowProps={permutateProps({
        variant: [
          {label: 'Light', value: 'light'},
          {label: 'Dark', value: 'dark'},
        ],
        size: [
          {label: 'XS', value: 'extraSmall'},
          {label: 'S', value: 'small'},
          {label: 'M', value: 'medium'},
          {label: 'L', value: 'large'},
          {label: 'XL', value: 'extraLarge'},
          {label: 'XXL', value: 'extraExtraLarge'},
        ],
        url: [
          {value: undefined, label: 'Placeholder'},
          {value: testAvatar, label: 'Image'},
        ],
      })}
    >
      {props => <Avatar as="div" {...props} />}
    </ComponentStatesTable>
  </StaticStates>
);

export const AvatarButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      columnProps={permutateProps({
        className: [
          {label: 'Default', value: ''},
          {label: 'Hover', value: 'hover'},
          {label: 'Focus', value: 'focus'},
          {label: 'Focus Hover', value: 'focus hover'},
          {label: 'Active', value: 'active'},
          {label: 'Active Hover', value: 'active hover'},
        ],
      })}
      rowProps={permutateProps({
        variant: [
          {label: 'Light', value: 'light'},
          {label: 'Dark', value: 'dark'},
        ],
        size: [
          {label: 'XS', value: 'extraSmall'},
          {label: 'S', value: 'small'},
          {label: 'M', value: 'medium'},
          {label: 'L', value: 'large'},
          {label: 'XL', value: 'extraLarge'},
          {label: 'XXL', value: 'extraExtraLarge'},
        ],
        url: [
          {value: undefined, label: 'Placeholder'},
          {value: testAvatar, label: 'Image'},
        ],
      })}
    >
      {props => <Avatar {...props} onClick={noop} />}
    </ComponentStatesTable>
  </StaticStates>
);
