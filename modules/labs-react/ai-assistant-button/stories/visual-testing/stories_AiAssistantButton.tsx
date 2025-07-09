import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {AiAssistantButton} from '@workday/canvas-kit-labs-react/ai-assistant-button';

export default withSnapshotsEnabled({
  title: 'Testing/Labs/Ai Assistant Button',
  component: AiAssistantButton,
});

export const AiAssistantButtonStates = () => {
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
          return <AiAssistantButton {...props}></AiAssistantButton>;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
