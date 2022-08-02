/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import React from 'react';
import {CanvasProvider, ContentDirection, StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, permutateProps} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {Container} from './utils';
import {Box, VStack} from '@workday/canvas-kit-react/layout';
import {BodyText, Subtext} from '@workday/canvas-kit-react/text';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/ExternalHyperlink',
  component: ExternalHyperlink,
});

export const ExternalHyperlinkStates = () => (
  <React.Fragment>
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
            <Subtext as="span" size="large" color="#000" variant={props.variant}>
              Here's a <ExternalHyperlink {...props}>Link</ExternalHyperlink> to something
            </Subtext>
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
    <VStack spacing="xxs">
      <h3>Typography</h3>
      <Subtext size="large">
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </Subtext>
      <BodyText size="small">
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </BodyText>
      <BodyText size="medium">
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </BodyText>
      <BodyText size="large">
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </BodyText>
    </VStack>
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <VStack spacing="xxs">
        <Subtext size="large">
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </Subtext>
        <BodyText size="small">
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </BodyText>
        <BodyText size="medium">
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </BodyText>
        <BodyText size="large">
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </BodyText>
      </VStack>
    </CanvasProvider>
  </React.Fragment>
);
