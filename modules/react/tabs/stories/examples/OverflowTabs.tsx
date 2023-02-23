import React from 'react';

import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {Box} from '@workday/canvas-kit-react/layout';

type MyTabItem = {
  id: string;
  text: React.ReactNode;
  contents: string;
};

export const OverflowTabs = () => {
  const [items] = React.useState<MyTabItem[]>([
    {id: 'first', text: 'First Tab', contents: 'Contents of First Tab'},
    {id: 'second', text: 'Second Tab', contents: 'Contents of Second Tab'},
    {id: 'third', text: 'Third Tab', contents: 'Contents of Third Tab'},
    {id: 'fourth', text: 'Fourth Tab', contents: 'Contents of Fourth Tab'},
    {id: 'fifth', text: 'Fifth Tab', contents: 'Contents of Fifth Tab'},
    {id: 'sixth', text: 'Sixth Tab', contents: 'Contents of Sixth Tab'},
    {id: 'seventh', text: 'Seventh Tab', contents: 'Contents of Seventh Tab'},
  ]);
  const model = useTabsModel({
    items,
  });
  const [containerWidth, setContainerWidth] = React.useState('100%');
  return (
    <div>
      <Box width={containerWidth} marginBottom="xl">
        <Tabs model={model}>
          <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
            {(item: MyTabItem) => <Tabs.Item>{item.text}</Tabs.Item>}
          </Tabs.List>
          <Tabs.Menu.Popper>
            <Tabs.Menu.Card maxWidth={300} maxHeight={200}>
              <Tabs.Menu.List>
                {(item: MyTabItem) => <Tabs.Menu.Item>{item.text}</Tabs.Menu.Item>}
              </Tabs.Menu.List>
            </Tabs.Menu.Card>
          </Tabs.Menu.Popper>
          <Tabs.Panels>
            {(item: MyTabItem) => <Tabs.Panel marginTop="m">{item.contents}</Tabs.Panel>}
          </Tabs.Panels>
        </Tabs>
      </Box>
      <hr />
      <h4>Change Tabs container size</h4>
      <SegmentedControl onSelect={data => setContainerWidth(data.id)}>
        <SegmentedControl.List aria-label="container width control">
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="500px">500px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="360px">360px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="150px">150px</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </div>
  );
};
