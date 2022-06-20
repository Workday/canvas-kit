import React from 'react';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {TypeBodyLevel, TypeHeadingLevel, Label, TypeSubtextLevel, Text, TypeTitleLevel} from '../';
import {Box} from '@workday/canvas-kit-react/layout';

type TypeStateProp = {size: 'small' | 'medium' | 'large'};

export default withSnapshotsEnabled({
  title: 'Testing/React/Preview/Text',
  component: Text,
});

export const TextStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'Default',
          props: {},
        },
        {
          label: 'With overflow',
          props: {isTruncated: true},
        },
        {
          label: 'With font-size as a token value of 8',
          props: {fontSize: 8},
        },
        {
          label: 'With regular font-size value of 1.25rem',
          props: {fontSize: '1.25rem'},
        },
        {
          label: 'With regular font-weigth value of 400',
          props: {fontWeight: 400},
        },
        {
          label: 'With font-weigth as a token value of regular',
          props: {fontWeight: 'regular', as: 'h3'},
        },
        {
          label: 'With monospace font-family value',
          props: {fontFamily: 'monospace'},
        },
        {
          label: 'With color',
          props: {color: colors.blueberry300},
        },
        {
          label: 'With color as color token name',
          props: {color: 'blueberry300'},
        },
        {
          label: 'With color as a variant name',
          props: {color: 'error'},
        },
        {
          label: 'With letter-spacing of 0.5rem',
          props: {letterSpacing: '0.5rem'},
        },
        {
          label: 'With line-height of 2.5rem',
          props: {lineHeight: '2.5rem'},
        },
        {
          label: 'Aligned to the right',
          props: {textAlign: 'right'},
        },
        {
          label: 'With text-decoration',
          props: {textDecoration: 'underline'},
        },
        {
          label: 'Transformed to uppercase',
          props: {textTransform: 'uppercase'},
        },
        {
          label: 'With text-shadow',
          props: {textShadow: `2px 2px ${colors.blueberry300}`},
        },
        {
          label: 'With white-space changed to nowrap',
          props: {whiteSpace: 'nowrap'},
        },
        {
          label: 'With word-break changed to break-all',
          props: {wordBreak: 'break-all'},
        },
      ]}
      columnProps={[{label: 'Examples', props: {}}]}
    >
      {props => (
        <Box width={350}>
          <Text as="p" {...props}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TypeTitleLevelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Small Size', props: {size: 'small'}},
        {label: 'Medium Size', props: {size: 'medium'}},
        {label: 'Large Size', props: {size: 'large'}},
      ]}
      columnProps={[
        {
          label: 'Examples',
          props: {},
        },
      ]}
    >
      {(props: TypeStateProp) => <TypeTitleLevel {...props}>Lorem ipsum title.</TypeTitleLevel>}
    </ComponentStatesTable>
  </StaticStates>
);

export const TypeHeadingLevelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Small Size', props: {size: 'small'}},
        {label: 'Medium Size', props: {size: 'medium'}},
        {label: 'Large Size', props: {size: 'large'}},
      ]}
      columnProps={[
        {
          label: 'Examples',
          props: {},
        },
      ]}
    >
      {(props: TypeStateProp) => <TypeHeadingLevel {...props}>Lorem ipsum title.</TypeHeadingLevel>}
    </ComponentStatesTable>
  </StaticStates>
);

export const TypeSubtextLevelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Small Size', props: {size: 'small'}},
        {label: 'Medium Size', props: {size: 'medium'}},
        {label: 'Large Size', props: {size: 'large'}},
      ]}
      columnProps={[
        {
          label: 'Examples',
          props: {},
        },
      ]}
    >
      {(props: TypeStateProp) => <TypeSubtextLevel {...props}>Lorem ipsum title.</TypeSubtextLevel>}
    </ComponentStatesTable>
  </StaticStates>
);

export const TypeBodyLevelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Small Size', props: {size: 'small'}},
        {label: 'Medium Size', props: {size: 'medium'}},
        {label: 'Large Size', props: {size: 'large'}},
      ]}
      columnProps={[
        {
          label: 'Examples',
          props: {},
        },
      ]}
    >
      {(props: TypeStateProp) => <TypeBodyLevel {...props}>Lorem ipsum title.</TypeBodyLevel>}
    </ComponentStatesTable>
  </StaticStates>
);

export const LabelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'Disabled', props: {disabled: true}},
      ]}
      columnProps={[
        {
          label: 'Examples',
          props: {},
        },
      ]}
    >
      {(props: TypeStateProp) => <Label {...props}>Lorem ipsum title.</Label>}
    </ComponentStatesTable>
  </StaticStates>
);
