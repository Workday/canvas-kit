import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';

export default {
  title: 'Testing/Preview/Information Highlight',
  component: InformationHighlight,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const InformationHighlightStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Full Information Highlight Low Emphasis',
            props: {heading: true, body: true, button: true, emphasis: 'low'},
          },
          {
            label: 'Full Information Highlight High Emphasis',
            props: {heading: true, body: true, button: true, emphasis: 'high'},
          },
          {
            label: 'Heading and Body Low Emphasis',
            props: {heading: true, body: true, emphasis: 'low'},
          },
          {
            label: 'Heading and Body High Emphasis',
            props: {heading: true, body: true, emphasis: 'high'},
          },

          {
            label: 'Heading and Link Low Emphasis',
            props: {heading: true, button: true, emphasis: 'low'},
          },
          {
            label: 'Heading and Link High Emphasis',
            props: {heading: true, button: true, emphasis: 'high'},
          },

          {label: 'Body and Link Low Emphasis', props: {body: true, button: true, emphasis: 'low'}},
          {
            label: 'Body and Link High Emphasis',
            props: {body: true, button: true, emphasis: 'high'},
          },

          {label: 'Only Heading Low Emphasis', props: {heading: true, emphasis: 'low'}},
          {label: 'Only Heading High Emphasis', props: {heading: true, emphasis: 'high'}},

          {label: 'Only Body Low Emphasis', props: {body: true, emphasis: 'low'}},
          {label: 'Only Body High Emphasis', props: {body: true, emphasis: 'high'}},
        ]}
        columnProps={[
          {label: 'Informational', props: {variant: 'informational'}},
          {label: 'Caution', props: {variant: 'caution'}},
          {label: 'Attention', props: {variant: 'attention'}},
        ]}
      >
        {props => {
          const {variant, heading, body, button, emphasis} = props;
          return (
            <InformationHighlight variant={variant} emphasis={emphasis}>
              <InformationHighlight.Icon variant={undefined} icon={undefined} />
              {heading && <InformationHighlight.Heading>Lorem ipsum</InformationHighlight.Heading>}
              {body && (
                <InformationHighlight.Body>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.{' '}
                </InformationHighlight.Body>
              )}
              {button && <InformationHighlight.Link>Action</InformationHighlight.Link>}
            </InformationHighlight>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};