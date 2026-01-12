import React from 'react';

import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {type} from '@workday/canvas-kit-react/tokens';

import {Container} from './utils';

export default {
  title: 'Testing/Buttons/Button/Hyperlink',
  component: Hyperlink,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const HyperlinkStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          variant: [
            {label: 'Default', value: undefined},
            {label: 'Inverse', value: 'inverse'},
          ],
        })}
        columnProps={permutateProps({
          className: [
            {label: 'Default', value: ''},
            {label: 'Hover', value: 'hover'},
            {label: 'Focus', value: 'focus'},
            {label: 'Focus Hover', value: 'focus hover'},
            {label: 'Active', value: 'active'},
            {label: 'Active Hover', value: 'active hover'},
            {label: 'Visited', value: 'visited'},
          ],
        })}
      >
        {(props: any) => (
          <Container blue={props.variant === 'inverse'}>
            <Box {...type.levels.subtext.large}>
              <Box as="span" color={props.variant === 'inverse' ? 'frenchVanilla100' : undefined}>
                Here's a <Hyperlink {...props}>Link</Hyperlink> to something
              </Box>
            </Box>
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
