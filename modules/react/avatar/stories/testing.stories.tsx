import React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {Avatar} from '../index';

// @ts-ignore: Cannot find module error
import testAvatar from './examples/test-avatar.png';
// eslint-disable-next-line no-empty-function
const noop = () => {};

export default {
  title: 'Testing/Indicators/Avatar',
  component: Avatar,
  parameters: {
    chromatic: {
      disable: false,
      diffThreshold: 0.3, // Chrome downsizes images non-deterministically. From testing, 0.28 is the minimum.
      delay: 300, // Ensure we capture the image after loading and transition
    },
  },
};

export const AvatarStates = {
  render: () => (
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
            {value: Avatar.Variant.Light, label: 'Light'},
            {value: Avatar.Variant.Dark, label: 'Dark'},
          ],
          size: [
            {label: 'XS', value: Avatar.Size.xs},
            {label: 'S', value: Avatar.Size.s},
            {label: 'M', value: Avatar.Size.m},
            {label: 'L', value: Avatar.Size.l},
            {label: 'XL', value: Avatar.Size.xl},
            {label: 'XXL', value: Avatar.Size.xxl},
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
  ),
};

export const AvatarButtonStates = {
  render: () => (
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
            {value: Avatar.Variant.Light, label: 'Light'},
            {value: Avatar.Variant.Dark, label: 'Dark'},
          ],
          size: [
            {label: 'XS', value: Avatar.Size.xs},
            {label: 'S', value: Avatar.Size.s},
            {label: 'M', value: Avatar.Size.m},
            {label: 'L', value: Avatar.Size.l},
            {label: 'XL', value: Avatar.Size.xl},
            {label: 'XXL', value: Avatar.Size.xxl},
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
  ),
};
