import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {RadioGroup, useRadioModel} from '@workday/canvas-kit-labs-react/radio';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Radio',
  component: RadioGroup,
});

export const RadioStates = () => {
  const model = useRadioModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
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
        {props => {
          const state = {open: props.open};

          return (
            // <Radio model={{...model, state}}>
            //   <Radio.Group>Toggle</Radio.Group>
            //   <Radio.Button>Content</Radio.Button>
            // </Radio>
            <RadioGroup>
              <RadioGroup.Button label="Fish"></RadioGroup.Button>
              <RadioGroup.Button label="Prawns">Prawns</RadioGroup.Button>
              <RadioGroup.Button label="Crabs">Crabs</RadioGroup.Button>
              <RadioGroup.Button label="Lobster">Lobster</RadioGroup.Button>
              <RadioGroup.Button label="Salmon">Salmon</RadioGroup.Button>
              <RadioGroup.Button label="Oyester">Oyster</RadioGroup.Button>
            </RadioGroup>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
