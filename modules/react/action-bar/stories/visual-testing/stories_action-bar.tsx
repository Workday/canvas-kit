import React from 'react';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {colors, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';

export default withSnapshotsEnabled({
  title: 'Testing/Buttons/ActionBar',
  component: ActionBar,
});

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

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
        rowProps={[
          {label: '100% container width', props: {containerWidth: '100%'}},
          {label: '440px container width', props: {containerWidth: '440px'}},
          {label: '320px container width', props: {containerWidth: '320px'}},
        ]}
        columnProps={[{label: 'With Overflow Menu', props: {position: 'relative'}}]}
      >
        {props => (
          <ActionBar items={items}>
            <ActionBar.List
              {...props}
              maxWidth={props.containerWidth}
              position="relative"
              overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}
            >
              {(item: MyActionItem, index: number) => (
                <ActionBar.Item as={index === 0 ? PrimaryButton : undefined}>
                  {item.text}
                </ActionBar.Item>
              )}
            </ActionBar.List>
            <ActionBar.Menu.Popper>
              <ActionBar.Menu.Card maxWidth={300} maxHeight={200}>
                <ActionBar.Menu.List>
                  {(item: MyActionItem) => <ActionBar.Menu.Item>{item.text}</ActionBar.Menu.Item>}
                </ActionBar.Menu.List>
              </ActionBar.Menu.Card>
            </ActionBar.Menu.Popper>
          </ActionBar>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
};
