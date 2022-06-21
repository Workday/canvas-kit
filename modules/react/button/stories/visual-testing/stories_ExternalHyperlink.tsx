/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import React from 'react';
import {CanvasProvider, ContentDirection, StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, permutateProps} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {Container} from './utils';
import {VStack} from '@workday/canvas-kit-react/layout';
import {TypeBodyLevel, TypeSubtextLevel} from '@workday/canvas-kit-preview-react/type';

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
            <TypeSubtextLevel
              as="div"
              size="large"
              color={props.variant === 'inverse' ? 'inverse' : '#000'}
            >
              Here's a <ExternalHyperlink {...props}>Link</ExternalHyperlink> to something
            </TypeSubtextLevel>
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
    <VStack spacing="xxs">
      <h3>Typography</h3>
      <TypeSubtextLevel size="large">
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </TypeSubtextLevel>
      <TypeBodyLevel size="small">
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </TypeBodyLevel>
      <TypeBodyLevel size="medium">
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </TypeBodyLevel>
      <TypeBodyLevel size="large">
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </TypeBodyLevel>
    </VStack>
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <VStack spacing="xxs">
        <TypeSubtextLevel size="large">
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </TypeSubtextLevel>
        <TypeBodyLevel size="small">
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </TypeBodyLevel>
        <TypeBodyLevel size="medium">
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </TypeBodyLevel>
        <TypeBodyLevel size="large">
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </TypeBodyLevel>
      </VStack>
    </CanvasProvider>
  </React.Fragment>
);
