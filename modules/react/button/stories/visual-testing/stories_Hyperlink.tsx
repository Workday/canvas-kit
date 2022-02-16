import React from 'react';
import {type} from '@workday/canvas-kit-react/tokens';
import {StaticStates, styled} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {ComponentStatesTable, permutateProps} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Container} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Hyperlink',
  component: Hyperlink,
});

const StyledLinkContainer = styled(Box)({
  ...type.levels.subtext.large,
});

export const HyperlinkStates = () => (
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
          <StyledLinkContainer>
            <Box as="span" color={props.variant === 'inverse' ? 'frenchVanilla100' : undefined}>
              Here's a <Hyperlink {...props}>Link</Hyperlink> to something
            </Box>
          </StyledLinkContainer>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
