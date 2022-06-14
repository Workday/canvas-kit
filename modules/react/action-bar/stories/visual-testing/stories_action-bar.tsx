import React from 'react';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {colors, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {ActionBar, useActionBarModel, ActionModelItem} from '@workday/canvas-kit-react/action-bar';
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
          <ActionBar>
            <ActionBar.List {...props}>
              <PrimaryButton>First Action</PrimaryButton>
              <SecondaryButton>Second Action</SecondaryButton>
            </ActionBar.List>
          </ActionBar>
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const ActionBarWithOverflowMenuStates = () => {
  const [items] = React.useState<ActionModelItem[]>([
    {id: 'first', text: 'First Action'},
    {id: 'second', text: 'Second Action'},
    {id: 'third', text: 'Third Action'},
    {id: 'fourth', text: 'Fourth Action'},
    {id: 'fifth', text: 'Fifth Action'},
  ]);

  const model = useActionBarModel({items});

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'With Overflow Menu', props: {}}]}
        columnProps={[{label: ' ', props: {position: 'relative'}}]}
      >
        {props => (
          <div>
            <ActionBar model={model}>
              <ActionBar.List {...props} position="relative">
                {(item: ActionModelItem, index: number) => (
                  <ActionBar.Item as={index === 0 ? PrimaryButton : undefined}>
                    {item.text}
                  </ActionBar.Item>
                )}
              </ActionBar.List>
              <ActionBar.Menu.Popper>
                <ActionBar.Menu.Card maxWidth={300} maxHeight={200}>
                  <ActionBar.Menu.List>
                    {(item: ActionModelItem) => (
                      <ActionBar.Menu.Item>{item.text}</ActionBar.Menu.Item>
                    )}
                  </ActionBar.Menu.List>
                </ActionBar.Menu.Card>
              </ActionBar.Menu.Popper>
            </ActionBar>
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
};
