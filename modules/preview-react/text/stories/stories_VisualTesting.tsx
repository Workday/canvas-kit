import React from 'react';
import {StaticStates, ContentDirection} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {BodyText, Heading, Subtext, Text, Title} from '../';
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
          label: 'With letter-spacing of 0.5rem',
          props: {letterSpacing: '0.5rem'},
        },
        {
          label: 'With line-height of 2.5rem',
          props: {lineHeight: '2.5rem'},
        },
        {
          label: 'Aligned to the right side',
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
          label: 'With wordBreak changed to break-all',
          props: {wordBreak: 'break-all'},
        },
        {
          label: 'With error variant',
          props: {variant: 'error'},
        },
        {
          label: 'As hint variant',
          props: {variant: 'hint'},
        },
        {
          label: 'As inverse variant',
          props: {variant: 'inverse', style: {backgroundColor: colors.blueberry300}},
        },
      ]}
      columnProps={[{label: 'Examples', props: {}}]}
    >
      {props => (
        <Box width={350}>
          <Text {...props}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TitleStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'With error variant',
          props: {variant: 'error'},
        },
        {
          label: 'As hint variant',
          props: {variant: 'hint'},
        },
        {
          label: 'As inverse variant',
          props: {variant: 'inverse', style: {backgroundColor: colors.blueberry300}},
        },
      ]}
      columnProps={[
        {label: 'Small Size', props: {size: 'small'}},
        {label: 'Medium Size', props: {size: 'medium'}},
        {label: 'Large Size', props: {size: 'large'}},
      ]}
    >
      {(props: TypeStateProp) => (
        <Box>
          <Title {...props}>Lorem ipsum title.</Title>
        </Box>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const HeadingStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'With error variant',
          props: {variant: 'error'},
        },
        {
          label: 'As hint variant',
          props: {variant: 'hint'},
        },
        {
          label: 'As inverse variant',
          props: {variant: 'inverse', style: {backgroundColor: colors.blueberry300}},
        },
      ]}
      columnProps={[
        {label: 'Small Size', props: {size: 'small'}},
        {label: 'Medium Size', props: {size: 'medium'}},
        {label: 'Large Size', props: {size: 'large'}},
      ]}
    >
      {(props: TypeStateProp) => (
        <Box>
          <Heading {...props}>Lorem ipsum title.</Heading>
        </Box>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SubtextStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'With error variant',
          props: {variant: 'error'},
        },
        {
          label: 'As hint variant',
          props: {variant: 'hint'},
        },
        {
          label: 'As inverse variant',
          props: {variant: 'inverse', style: {backgroundColor: colors.blueberry300}},
        },
      ]}
      columnProps={[
        {label: 'Small Size', props: {size: 'small'}},
        {label: 'Medium Size', props: {size: 'medium'}},
        {label: 'Large Size', props: {size: 'large'}},
      ]}
    >
      {(props: TypeStateProp) => (
        <Box>
          <Subtext {...props}>Lorem ipsum title.</Subtext>
        </Box>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const BodyTextStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'With error variant',
          props: {variant: 'error'},
        },
        {
          label: 'As hint variant',
          props: {variant: 'hint'},
        },
        {
          label: 'As inverse variant',
          props: {variant: 'inverse', style: {backgroundColor: colors.blueberry300}},
        },
      ]}
      columnProps={[
        {label: 'Small Size', props: {size: 'small'}},
        {label: 'Medium Size', props: {size: 'medium'}},
        {label: 'Large Size', props: {size: 'large'}},
      ]}
    >
      {(props: TypeStateProp) => (
        <Box>
          <BodyText {...props}>Lorem ipsum title.</BodyText>
        </Box>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
