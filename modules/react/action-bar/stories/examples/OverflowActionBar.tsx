import React from 'react';

import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {HStack} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

type MyActionItem = {
  id: string;
  isPrimary?: boolean;
  text: React.ReactNode;
  onClick: React.ReactEventHandler;
};

export const OverflowActionBar = () => {
  const [items] = React.useState<MyActionItem[]>([
    {id: 'first', text: 'First Button', onClick: () => console.log('first button clicked')},
    {id: 'second', text: 'Second Button', onClick: () => console.log('second button clicked')},
    {id: 'third', text: 'Third Button', onClick: () => console.log('third button clicked')},
    {id: 'fourth', text: 'Fourth Button', onClick: () => console.log('fourth button clicked')},
    {id: 'fifth', text: 'Fifth Button', onClick: () => console.log('fifth button clicked')},
  ]);

  const model = useActionBarModel({items});
  const [containerWidth, setContainerWidth] = React.useState('100%');

  return (
    <div style={{width: containerWidth}}>
      <ActionBar model={model}>
        <ActionBar.List position="relative" overflowButton={true}>
          {(item: MyActionItem) => <ActionBar.Item data-id={item.id}>{item.text}</ActionBar.Item>}
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
      <hr />
      <h4>Change tab container size</h4>
      <HStack spacing="xs">
        <SecondaryButton onClick={() => setContainerWidth('100%')}>100%</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('1023px')}>Medium</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('767px')}>Small</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('320px')}>Extra Small</SecondaryButton>
      </HStack>
    </div>
  );
};
