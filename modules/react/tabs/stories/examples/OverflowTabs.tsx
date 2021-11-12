import React from 'react';

import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';
import {SecondaryButton} from '../../../button';

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
    getId: item => item.id, // `item` type is known
  });
  return (
    <Tabs model={model}>
      <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
        {(item: MyTabItem) => (
          <Tabs.Item key={item.id} name={item.id}>
            {item.text}
          </Tabs.Item>
        )}
      </Tabs.List>
      <Tabs.Menu.Popper>
        <Tabs.Menu.Card maxWidth={300} maxHeight={150}>
          <Tabs.Menu.List>
            {(item: MyTabItem) => (
              <Tabs.Menu.Item name={item.id} key={item.id}>
                {item.text}
              </Tabs.Menu.Item>
            )}
          </Tabs.Menu.List>
        </Tabs.Menu.Card>
      </Tabs.Menu.Popper>
      <Tabs.Panels>
        {(item: MyTabItem) => (
          <Tabs.Panel marginTop="m" name={item.id} key={item.id}>
            {item.contents}
          </Tabs.Panel>
        )}
      </Tabs.Panels>
    </Tabs>
  );
};
