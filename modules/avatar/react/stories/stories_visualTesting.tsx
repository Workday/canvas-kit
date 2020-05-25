/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, permutateProps} from '../../../../utils/storybook';
import {Avatar} from '../index';

const IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png';
// eslint-disable-next-line no-empty-function
const noop = () => {};

storiesOf('Components|Indicators/Avatar/React/Visual Testing', module)
  .addParameters({
    component: Avatar,
    chromatic: {
      disable: false,
      delay: 300, // Ensure we capture the image after loading and transition
    },
  })
  .add('States', () => (
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
          as: [
            {value: undefined, label: 'Button'},
            {value: 'div', label: 'Div'},
          ],
          url: [
            {value: undefined, label: 'Placeholder'},
            {value: IMAGE_URL, label: 'Image'},
          ],
        })}
      >
        {props => <Avatar {...props} onClick={props.as ? undefined : noop} />}
      </ComponentStatesTable>
    </StaticStates>
  ));
