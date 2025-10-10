import React from 'react';
import {breakpoints} from '@workday/canvas-kit-react/common';
import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
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
  const [containerWidth, setContainerWidth] = React.useState<string | number>('100%');

  return (
    <div>
      <Box maxWidth={containerWidth} marginBottom="xl">
        <ActionBar model={model}>
          <ActionBar.List
            position="relative"
            as="section"
            aria-label="Action Bar"
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
      <footer>
        <h4>Change Action Bar container size</h4>
        <SegmentedControl onSelect={data => setContainerWidth(data.id)}>
          <SegmentedControl.List role="group" aria-label="container width control" marginBottom="m">
            <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
            <SegmentedControl.Item data-id={`${breakpoints.m}px`}>Small</SegmentedControl.Item>
            <SegmentedControl.Item data-id="420px">420px</SegmentedControl.Item>
            <SegmentedControl.Item data-id={`${breakpoints.s}px`}>
              Extra Small
            </SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
        <p>Selected: {containerWidth}</p>
      </footer>
    </div>
  );
};
