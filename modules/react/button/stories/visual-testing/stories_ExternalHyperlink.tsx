/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import React from 'react';
import {colors, type} from '@workday/canvas-kit-react/tokens';
import {CanvasProvider, ContentDirection, StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, permutateProps} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {Container} from './utils';
import {VStack} from '@workday/canvas-kit-react/layout';

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
            <div
              css={{
                ...type.levels.subtext.large,
                color: props.variant === 'inverse' ? colors.frenchVanilla100 : undefined,
              }}
            >
              Here's a <ExternalHyperlink {...props}>Link</ExternalHyperlink> to something
            </div>
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
    <VStack spacing="xxs">
      <h3>Typography</h3>
      <p css={{...type.levels.subtext.large}}>
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </p>
      <p css={{...type.levels.body.small}}>
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </p>
      <p css={{...type.levels.body.medium}}>
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </p>
      <p css={{...type.levels.body.large}}>
        The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
      </p>
    </VStack>
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <VStack spacing="xxs">
        <p css={{...type.levels.subtext.large}}>
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </p>
        <p css={{...type.levels.body.small}}>
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </p>
        <p css={{...type.levels.body.medium}}>
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </p>
        <p css={{...type.levels.body.large}}>
          The quick <ExternalHyperlink>brown fox</ExternalHyperlink> jumps over the lazy dog
        </p>
      </VStack>
    </CanvasProvider>
  </React.Fragment>
);
