/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import React from 'react';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {Container} from './utils';
import {Flex} from '@workday/canvas-kit-react/layout';
import {BodyText, Subtext} from '@workday/canvas-kit-react/text';

export default {
  title: 'Testing/Buttons/Button/ExternalHyperlink',
  component: ExternalHyperlink,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const ExternalHyperlinkStates = {
  render: () => (
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
              <Subtext as="span" size="large" variant={props.variant}>
                Here's a{' '}
                <ExternalHyperlink {...props} iconLabel="Opens link in new window">
                  Link
                </ExternalHyperlink>{' '}
                to something
              </Subtext>
            </Container>
          )}
        </ComponentStatesTable>
      </StaticStates>
      <Flex flexDirection="column" gap="xxs">
        <h3>Typography</h3>
        <Subtext size="large">
          The quick{' '}
          <ExternalHyperlink iconLabel="Opens link in new window">brown fox</ExternalHyperlink>{' '}
          jumps over the lazy dog
        </Subtext>
        <BodyText size="small">
          The quick{' '}
          <ExternalHyperlink iconLabel="Opens link in new window">brown fox</ExternalHyperlink>{' '}
          jumps over the lazy dog
        </BodyText>
        <BodyText size="medium">
          The quick{' '}
          <ExternalHyperlink iconLabel="Opens link in new window">brown fox</ExternalHyperlink>{' '}
          jumps over the lazy dog
        </BodyText>
        <BodyText size="large">
          The quick{' '}
          <ExternalHyperlink iconLabel="Opens link in new window">brown fox</ExternalHyperlink>{' '}
          jumps over the lazy dog
        </BodyText>
      </Flex>
      <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
        <Flex flexDirection="column" gap="xxs">
          <Subtext size="large">
            The quick{' '}
            <ExternalHyperlink iconLabel="Opens link in new window">brown fox</ExternalHyperlink>{' '}
            jumps over the lazy dog
          </Subtext>
          <BodyText size="small">
            The quick{' '}
            <ExternalHyperlink iconLabel="Opens link in new window">brown fox</ExternalHyperlink>{' '}
            jumps over the lazy dog
          </BodyText>
          <BodyText size="medium">
            The quick{' '}
            <ExternalHyperlink iconLabel="Opens link in new window">brown fox</ExternalHyperlink>{' '}
            jumps over the lazy dog
          </BodyText>
          <BodyText size="large">
            The quick{' '}
            <ExternalHyperlink iconLabel="Opens link in new window">brown fox</ExternalHyperlink>{' '}
            jumps over the lazy dog
          </BodyText>
        </Flex>
      </CanvasProvider>
    </React.Fragment>
  ),
};
