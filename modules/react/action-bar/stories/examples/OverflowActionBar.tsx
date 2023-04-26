import React from 'react';

import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {Flex} from '@workday/canvas-kit-react/layout';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {breakpoints} from '@workday/canvas-kit-react/common';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

export const OverflowActionBar = () => {
  const [items] = React.useState<MyActionItem[]>([
    {id: 'first', text: 'First Action'},
    {id: 'second', text: 'Second Action'},
    {id: 'third', text: 'Third Action'},
    {id: 'fourth', text: 'Fourth Action'},
    {id: 'fifth', text: 'Fifth Action'},
  ]);

  const model = useActionBarModel({items});
  const [containerWidth, setContainerWidth] = React.useState<string | number>('100%');

  return (
    <div style={{width: containerWidth}}>
      <ActionBar model={model}>
        <ActionBar.List
          position="relative"
          overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}
        >
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
        <ActionBar.Menu.Popper>
          <ActionBar.Menu.Card maxWidth={300} maxHeight={200}>
            <ActionBar.Menu.List>
              {(item: MyActionItem) => (
                <ActionBar.Menu.Item onClick={() => console.log(item.id)}>
                  {item.text}
                </ActionBar.Menu.Item>
              )}
            </ActionBar.Menu.List>
          </ActionBar.Menu.Card>
        </ActionBar.Menu.Popper>
      </ActionBar>
      <hr />
      <h4>Change action bar container size</h4>
      <Flex gap="xs">
        <SecondaryButton onClick={() => setContainerWidth('100%')}>100%</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth(breakpoints.l)}>Medium</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth(breakpoints.m)}>Small</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth(breakpoints.s)}>
          Extra Small
        </SecondaryButton>
      </Flex>
    </div>
  );
};
