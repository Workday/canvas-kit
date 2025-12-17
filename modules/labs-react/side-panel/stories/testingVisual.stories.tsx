import React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {SidePanel} from '../index';

export default {
  title: 'Testing/Labs/Side Panel',
  component: SidePanel,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const SidePanelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Standard Variant', props: {variant: 'standard'}},
        {label: 'Alternate Variant', props: {variant: 'alternate'}},
      ]}
      columnProps={permutateProps(
        {
          initialTransitionState: [
            {label: 'Collapsed', value: 'collapsed'},
            {label: 'Expanded', value: 'expanded'},
            {label: '', value: undefined},
          ],
          origin: [
            {label: '(left)', value: 'start'},
            {label: '(right)', value: 'end'},
          ],
        },
        ({initialTransitionState, defaultTransitionState}) => {
          // Don't show permutations of both values being defined (expanded prop always wins over defaultExpanded)
          if (initialTransitionState !== undefined && defaultTransitionState !== undefined) {
            return false;
          }
          // Don't show if both are undefined
          if (initialTransitionState === undefined && initialTransitionState === undefined) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <div style={{height: 480}}>
          <SidePanel {...props}>
            <SidePanel.ToggleButton />
          </SidePanel>
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
