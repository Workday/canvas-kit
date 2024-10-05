import React from 'react';

import {
  StaticStates,
  ComponentStatesTable,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';

export default withSnapshotsEnabled({
  title: 'Testing/Preview/Information Highlight',
  component: InformationHighlight,
});

export const InformationHighlightStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Only Heading', props: {heading: true}},
          {label: 'Only Body', props: {body: true}},
          {label: 'Heading and Body', props: {heading: true, body: true}},
          {label: 'Heading and Link', props: {heading: true, button: true}},
          {label: 'Body and Link', props: {body: true, button: true}},
          {
            label: 'Heading, Body, and Link',
            props: {heading: true, body: true, button: true},
          },
        ]}
        columnProps={[
          {label: 'Informational', props: {variant: 'informational'}},
          {label: 'Caution', props: {variant: 'caution'}},
          {label: 'Attention', props: {variant: 'attention'}},
        ]}
      >
        {props => {
          const {variant, heading, body, button} = props;
          return (
            <InformationHighlight variant={variant}>
              <InformationHighlight.Icon variant={undefined} icon={undefined} />
              {heading && <InformationHighlight.Heading>Lorem ipsum</InformationHighlight.Heading>}
              {body && (
                <InformationHighlight.Body>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.{' '}
                </InformationHighlight.Body>
              )}
              {button && <InformationHighlight.Button>Action</InformationHighlight.Button>}
            </InformationHighlight>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
