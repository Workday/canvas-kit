import React from 'react';

import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {HStack} from '@workday/canvas-kit-react/layout';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
  as?: any;
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
  const [containerWidth, setContainerWidth] = React.useState('100%');

  return (
    <div style={{width: containerWidth}}>
      <ActionBar model={model}>
        <ActionBar.List position="relative" showOverflowButton={true}>
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
      <HStack spacing="xs">
        <SecondaryButton onClick={() => setContainerWidth('100%')}>100%</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('1023px')}>Medium</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('767px')}>Small</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('320px')}>Extra Small</SecondaryButton>
      </HStack>
    </div>
  );
};
