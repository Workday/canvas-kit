/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import SidePanel from '../index';

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Side Panel',
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
          collapsed: [
            {label: 'Controlled Collapsed', value: true},
            {label: 'Controlled Expanded', value: false},
            {label: '', value: undefined},
          ],
          defaultCollapsed: [
            {label: 'Uncontrolled Collapsed', value: true},
            {label: 'Uncontrolled Expanded', value: false},
            {label: '', value: undefined},
          ],
          origin: [
            {label: '(left)', value: 'left'},
            {label: '(right)', value: 'right'},
          ],
        },
        ({collapsed, defaultCollapsed}) => {
          // Don't show permutations of both values being defined (collapsed prop always wins over defaultCollapsed)
          if (collapsed !== undefined && defaultCollapsed !== undefined) {
            return false;
          }
          // Don't show if both are undefined
          if (collapsed === undefined && defaultCollapsed === undefined) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <div style={{height: 480}}>
          <SidePanel {...props} />
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
