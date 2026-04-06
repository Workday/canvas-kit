import React from 'react';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {BodyText, Heading, LabelText, Subtext, Text, Title} from '../';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

type TypeStateProp = {size: 'small' | 'medium' | 'large'; variant?: 'error' | 'hint' | 'inverse'};

const inverseBackground = createStyles({
  backgroundColor: system.color.bg.primary.strong,
});

export default {
  title: 'Testing/Containers/Text',
  component: Text,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const TextStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Default',
            props: {},
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
            props: {color: system.color.static.blue.soft},
          },
          {
            label: 'With color as color token name',
            props: {color: 'blueberry300'},
          },
          {
            label: 'With variant',
            props: {variant: 'error'},
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
            props: {textShadow: `2px 2px ${system.color.static.blue.soft}`},
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
  ),
};

export const TitleStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Small Size', props: {size: 'small'}},
          {label: 'Medium Size', props: {size: 'medium'}},
          {label: 'Large Size', props: {size: 'large'}},
        ]}
        columnProps={[
          {
            label: 'Default',
            props: {},
          },
          {
            label: 'Hint variant',
            props: {variant: 'hint'},
          },
          {
            label: 'Error variant',
            props: {variant: 'error'},
          },
          {
            label: 'Inverse variant',
            props: {variant: 'inverse'},
          },
        ]}
      >
        {(props: TypeStateProp) => (
          <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <Title {...props}>Lorem ipsum title.</Title>
          </Box>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const HeadingStates = {
  render: () => (
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
          {
            label: 'Hint variant',
            props: {variant: 'hint'},
          },
          {
            label: 'Error variant',
            props: {variant: 'error'},
          },
          {
            label: 'Inverse variant',
            props: {variant: 'inverse'},
          },
        ]}
      >
        {(props: TypeStateProp) => (
          <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <Heading {...props}>Lorem ipsum title.</Heading>
          </Box>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const SubtextStates = {
  render: () => (
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
          {
            label: 'Hint variant',
            props: {variant: 'hint'},
          },
          {
            label: 'Error variant',
            props: {variant: 'error'},
          },
          {
            label: 'Inverse variant',
            props: {variant: 'inverse'},
          },
        ]}
      >
        {(props: TypeStateProp) => (
          <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <Subtext {...props}>Lorem ipsum title.</Subtext>
          </Box>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const BodyTextStates = {
  render: () => (
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
          {
            label: 'Hint variant',
            props: {variant: 'hint'},
          },
          {
            label: 'Error variant',
            props: {variant: 'error'},
          },
          {
            label: 'Inverse variant',
            props: {variant: 'inverse'},
          },
        ]}
      >
        {(props: TypeStateProp) => (
          <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <BodyText {...props}>Lorem ipsum title.</BodyText>
          </Box>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const LabelStates = {
  render: () => (
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
          {
            label: 'Hint variant',
            props: {variant: 'hint'},
          },
          {
            label: 'Error variant',
            props: {variant: 'error'},
          },
          {
            label: 'Inverse variant',
            props: {variant: 'inverse'},
          },
        ]}
      >
        {(props: TypeStateProp) => (
          <Box className={props.variant === 'inverse' ? inverseBackground : ''}>
            <LabelText {...props}>Lorem ipsum title.</LabelText>
          </Box>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
