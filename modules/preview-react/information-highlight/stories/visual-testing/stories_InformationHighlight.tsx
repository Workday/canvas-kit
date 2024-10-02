import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';
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
        columnProps={[
          {label: 'Emphasis', props: {icon: 'emphasis'}},
          {label: 'Caution', props: {icon: 'caution'}},
          {label: 'Attention', props: {icon: 'attention'}},
        ]}
        rowProps={[
          {label: 'Empty', props: {}},
          {label: 'Only Heading', props: {heading: 'Heading'}},
          {label: 'Only Body', props: {body: 'this is a body of text'}},
          {label: 'Only Link', props: {link: 'hypertext'}},
          {label: 'Heading and Body', props: {heading: 'Heading', body: 'this is a body of text'}},
          {label: 'Heading and Link', props: {heading: 'Heading', link: 'hypertext'}},
          {label: 'Body and Link', props: {body: 'this is a body of text', link: 'hypertext'}},
          {
            label: 'Heading, Body, and Link',
            props: {heading: 'Heading', body: 'this is a body of text', link: 'hypertext'},
          },
        ]}
      >
        {({props}) => {
          const {heading, body, link} = props;
          return (
            <InformationHighlight>
              <InformationHighlight.Heading>heading</InformationHighlight.Heading>
              <InformationHighlight.Body>body</InformationHighlight.Body>
              <InformationHighlight.Link>link</InformationHighlight.Link>
            </InformationHighlight>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
