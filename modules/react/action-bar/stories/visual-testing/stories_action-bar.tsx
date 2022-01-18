/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {colors, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/ActionBar',
  component: ActionBar,
});

export const ActionBarStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'With Absolute Positioning', props: {position: 'absolute'}},
        {label: 'With Relative Positioning', props: {position: 'relative'}},
        {label: 'Default (with fixed position)', props: {}},
      ]}
      columnProps={[{label: ' ', props: {}}]}
    >
      {props => (
        <div
          style={{
            background: colors.soap100,
            position: 'relative',
            height: `${spaceNumbers.xl * 2.5}px`,
            marginBottom: space.xs,
          }}
        >
          <p style={{padding: space.xs}}>Outer Block</p>
          <ActionBar {...props}>
            <PrimaryButton>First Action</PrimaryButton>
            <SecondaryButton>Second Action</SecondaryButton>
          </ActionBar>
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
