/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react/core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../utils/storybook';
import SidePanel from '../index';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Side Panel',
  component: SidePanel,
});

export const SidePanelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Standard Variant', props: {variant: 'standard'}},
        {label: 'Alternate Variant', props: {variant: 'alternate'}},
      ]}
      columnProps={permutateProps(
        {
          expanded: [
            {label: 'Collapsed', value: false},
            {label: 'Expanded', value: true},
            {label: '', value: undefined},
          ],
          origin: [
            {label: '(left)', value: 'left'},
            {label: '(right)', value: 'right'},
          ],
        },
        ({expanded, defaultExpanded}) => {
          // Don't show permutations of both values being defined (expanded prop always wins over defaultExpanded)
          if (expanded !== undefined && defaultExpanded !== undefined) {
            return false;
          }
          // Don't show if both are undefined
          if (expanded === undefined && defaultExpanded === undefined) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <div style={{height: 480}}>
          <SidePanel {...props}>
            <SidePanel.ToggleButton aria-label="toggle button" />
          </SidePanel>
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
