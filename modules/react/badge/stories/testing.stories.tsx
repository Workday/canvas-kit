import React from 'react';
import {ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {CountBadge} from '../index';
import {cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Indicators/Badge/CountBadge',
  component: CountBadge,
  parameters: {
    ReadmePath: 'react/badge',
    chromatic: {
      disable: false,
    },
  },
};

export const CountBadgeStates = {
  render: () => {
    return (
      <ComponentStatesTable
        columnProps={[
          {label: 'Single Digit', props: {count: 1}},
          {label: 'Double Digit', props: {count: 23}},
          {label: 'Triple Digit', props: {count: 456}},
          {
            label: 'Greater than 999',
            props: {count: 1000},
          },
          {label: 'Custom Limit', props: {count: 100, limit: 100}},
        ]}
        rowProps={[
          {label: 'Default High Emphasis', props: {}},
          {label: 'Default Low Emphasis', props: {emphasis: 'low'}},
          {label: 'Inverse High Emphasis', props: {variant: 'inverse'}},
          {label: 'Inverse Low Emphasis', props: {emphasis: 'low', variant: 'inverse'}},
        ]}
      >
        {props => (
          <div
            style={{
              padding: cssVar(system.space.x2),
              backgroundColor: cssVar(
                props.variant === 'inverse'
                  ? system.color.bg.primary.default
                  : system.color.bg.alt.soft
              ),
            }}
          >
            <CountBadge {...props} />
          </div>
        )}
      </ComponentStatesTable>
    );
  },
};

export const CountBadgeInverseBgTest = {
  render: () => {
    const colors = [
      'amber',
      'blue',
      'coral',
      'green',
      'indigo',
      'neutral',
      'orange',
      'magenta',
      'purple',
      'red',
      'slate',
      'teal',
    ];
    const colorScales = ['100', '200', '300', '400', '500', '600', '700', '800', '900'].reverse();
    const colorProps = colors.map(color => ({
      label: color,
      props: {emphasis: 'low', variant: 'inverse', count: 1, color},
    }));
    const colorScaleProps = colorScales.map(colorScale => ({
      label: colorScale,
      props: {colorScale},
    }));

    return (
      <ComponentStatesTable columnProps={colorScaleProps} rowProps={colorProps}>
        {({color, colorScale, ...props}) => (
          <div
            style={{
              backgroundColor: cssVar(base[`${color}${colorScale}`]),
              padding: cssVar(system.space.x4),
            }}
          >
            <CountBadge {...props} />
          </div>
        )}
      </ComponentStatesTable>
    );
  },
};
