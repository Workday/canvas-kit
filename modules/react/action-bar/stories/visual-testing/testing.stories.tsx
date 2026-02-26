import React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Buttons/ActionBar',
  component: ActionBar,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

export const ActionBarStates = {
  render: () => (
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
              background: cssVar(base.slate25),
              position: 'relative',
              height: px2rem(100),
              marginBottom: px2rem(12),
            }}
          >
            <p style={{padding: px2rem(12)}}>Outer Block</p>
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
  ),
};

export const ActionBarWithOverflowMenuStates = {
  render: () => {
    const [items] = React.useState<MyActionItem[]>([
      {id: 'first', text: 'First Action'},
      {id: 'second', text: 'Second Action'},
      {id: 'third', text: 'Third Action'},
      {id: 'fourth', text: 'Fourth Action'},
      {id: 'fifth', text: 'Fifth Action'},
    ]);

    return (
      <StaticStates>
        <ComponentStatesTable
          rowProps={[
            {label: 'Default Action Bar', props: {}},
            {label: 'Default Action Bar (400px width container)', props: {containerWidth: 400}},
            {
              label: 'Default Action Bar (280px width container)',
              props: {containerWidth: 280},
            },
            {
              label: 'Minimum Visible Items (as 1 button)',
              props: {maximumVisible: 1},
            },
            {
              label: 'Custom Number Visible Items (as 4 button)',
              props: {maximumVisible: 2},
            },
            {
              label: 'Maximum Visible Items (as 5 buttons)',
              props: {maximumVisible: items.length, containerWidth: 830},
            },
            {
              label: 'Maximum Visible Items (400px width)',
              props: {maximumVisible: items.length, containerWidth: 400},
            },
            {
              label: 'Maximum Visible Items (280px width)',
              props: {maximumVisible: items.length, containerWidth: 280},
            },
          ]}
          columnProps={[{label: 'Example', props: {}}]}
        >
          {({containerWidth, maximumVisible}) => (
            <ActionBar items={items} maximumVisible={maximumVisible}>
              <ActionBar.List
                position="relative"
                overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}
                cs={{width: px2rem(containerWidth)}}
              >
                {(item: MyActionItem, index: number) => (
                  <ActionBar.Item as={index === 0 ? PrimaryButton : undefined}>
                    {item.text}
                  </ActionBar.Item>
                )}
              </ActionBar.List>
              <ActionBar.Menu.Popper>
                <ActionBar.Menu.Card cs={{maxWidth: px2rem(300), maxHeight: px2rem(200)}}>
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
  },
};
