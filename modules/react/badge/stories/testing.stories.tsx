import {ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {createStencil} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {CountBadge} from '../index';

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

const blockStyles = createStencil({
  base: {
    padding: system.padding.xs,
    backgroundColor: system.color.surface.alt.default,
  },
  modifiers: {
    variant: {
      inverse: {
        backgroundColor: system.color.brand.accent.primary,
      },
    },
  },
});

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
          <div {...blockStyles({variant: props.variant})}>
            <CountBadge {...props} />
          </div>
        )}
      </ComponentStatesTable>
    );
  },
};

const innerBlockStyles = createStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    padding: system.padding.md,
    backgroundColor,
  }),
});

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
          <div {...innerBlockStyles({backgroundColor: base[`${color}${colorScale}`]})}>
            <CountBadge {...props} />
          </div>
        )}
      </ComponentStatesTable>
    );
  },
};
