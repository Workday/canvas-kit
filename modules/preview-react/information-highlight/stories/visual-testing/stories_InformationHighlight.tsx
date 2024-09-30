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
        columnProps={[{label: 'Default', props: {}}]}
        rowProps={[
          {
            label: 'Closed',
            props: {open: false},
          },
          {
            label: 'Opened',
            props: {open: true},
          },
        ]}
      >
        {({open, ...props}) => {
          return <InformationHighlight></InformationHighlight>;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
