import React from 'react';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {colors, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
  onClick: React.ReactEventHandler;
};

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
  const [items] = React.useState<MyActionItem[]>([
    {id: 'first', text: 'First Button', onClick: () => console.log('first button clicked')},
    {id: 'second', text: 'Second Button', onClick: () => console.log('second button clicked')},
    {id: 'third', text: 'Third Button', onClick: () => console.log('third button clicked')},
    {id: 'fourth', text: 'Fourth Button', onClick: () => console.log('fourth button clicked')},
    {id: 'fifth', text: 'Fifth Button', onClick: () => console.log('fifth button clicked')},
  ]);

  const model = useActionBarModel({items});

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'With Overflow Menu', props: {position: 'absolute'}}]}
        columnProps={[{label: ' ', props: {position: 'relative'}}]}
      >
        {props => (
          <div>
            <ActionBar model={model}>
              <ActionBar.List {...props} position="relative" showOverflowButton={true}>
                {(item: MyActionItem) => (
                  <ActionBar.Item data-id={item.id}>{item.text}</ActionBar.Item>
                )}
              </ActionBar.List>
              <ActionBar.Menu.Popper>
                <ActionBar.Menu.Card maxWidth={300} maxHeight={200}>
                  <ActionBar.Menu.List>
                    {(item: MyActionItem) => (
                      <ActionBar.Menu.Item onClick={item.onClick}>{item.text}</ActionBar.Menu.Item>
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
