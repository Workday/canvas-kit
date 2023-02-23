import React from 'react';

import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {Box} from '@workday/canvas-kit-react/layout';

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
  const [containerWidth, setContainerWidth] = React.useState('100%');

  return (
    <div>
      <Box width={containerWidth} marginBottom="xl">
        <ActionBar model={model}>
          <ActionBar.List
            position="relative"
            aria-label="actions"
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
      </Box>
      <hr />
      <h4>Change Action Bar container size</h4>
      <SegmentedControl onSelect={data => setContainerWidth(data.id)}>
        <SegmentedControl.List aria-label="container width control" marginBottom="m">
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="440px">440px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="320px">320px</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </div>
  );
};
